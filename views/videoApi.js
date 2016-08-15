if (brightcove == undefined) {
    var brightcove = {
        playerType: {
            FLASH: "flash",
            HTML: "html",
            INSTALLER: "installer",
            NO_SUPPORT: "nosupport"
        }
    };
}
brightcove.api = {
    modules: {
        APIModules: {}
    },
    data: {},
    events: {},
    getExperience: function(id) {
        if (brightcove.internal._instances[id] == null) {
            if (window.console) {
                var message = "Experience '" + id + "' not found for Brightcove Smart Player API. Please ensure the name is correct and the API for the player is enabled.";
                message += " If the embedded player is Flash, the Smart Player API will not be available if APIModules_all.js or BrightcoveExperiences_all.js have been included";
                message += " on your page. In that case, the legacy JavaScript Player API must be used and the player should be retrieved using a call to brightcove.getExperience().";
                console.log(message);
            }
        }
        return brightcove.internal._instances[id];
    }
};
brightcove.api.modules.APIModule = function() {
    this._handlers = [];
    this._name = "APIModule";
};
brightcove.api.modules.APIModule._handlerCount = 0;
brightcove.api.modules.APIModule._getUniqueHandlerName = function() {
    return "bc_handler" + (brightcove.api.modules.APIModule._handlerCount++);
};
brightcove.api.modules.APIModule._getAsyncGetterHandler = function(handler) {
    var newHandler = brightcove.api.modules.APIModule._getUniqueHandlerName();
    brightcove.internal._handlers[newHandler] = function(result) {
        handler(result);
        delete brightcove.internal._handlers[newHandler];
    };
    return newHandler;
};
brightcove.api.modules.APIModule.prototype._dispatchEvent = function(event) {
    event.target = this;
    var totalHandlers = this._handlers.length;
    var handlers = [];
    var handlerObject;
    for (var i = 0; i < totalHandlers; i++) {
        handlerObject = this._handlers[i];
        if (handlerObject.event == event.type) {
            handlers.push({
                handler: handlerObject.handler,
                priority: handlerObject.priority
            });
        }
    }
    handlers.sort(function(a, b) {
        return b.priority - a.priority;
    });
    totalHandlers = handlers.length;
    for (i = 0; i < totalHandlers; i++) {
        handlers[i].handler(event);
    }
};
brightcove.api.modules.APIModule.prototype._addEventListener = function(event, handler, priority) {
    if (priority == undefined) {
        priority = 0;
    }
    var newHandler = brightcove.api.modules.APIModule._getUniqueHandlerName();
    this._handlers.push({
        handler: handler,
        bcHandler: newHandler,
        event: event,
        priority: priority
    });
    var module = this;
    brightcove.internal._handlers[newHandler] = function(event) {
        event.target = module;
        return handler(event);
    };
    if (this.experience.type == brightcove.playerType.FLASH) {
        if (this.experience._playerURL) {
            this._callMethod('addEventListener', ['event', event, newHandler, priority]);
            return;
        }
        newHandler = "brightcove.internal._handlers." + newHandler;
    }
    this._callMethod("addEventListener", [event, newHandler, priority]);
};
brightcove.api.modules.APIModule.prototype._removeEventListener = function(event, handler) {
    var num = this._handlers.length;
    for (var i = 0; i < num; i++) {
        if (this._handlers[i].event == event && this._handlers[i].handler == handler) {
            var bcHandler = this._handlers[i].bcHandler;
            this._handlers.splice(i, 1);
            delete brightcove.internal._handlers[bcHandler];
            break;
        }
    }
    if (bcHandler == undefined) {
        return;
    }
    if (this.experience.type == brightcove.playerType.FLASH) {
        if (this.experience._playerURL) {
            this._callMethod('removeEventListener', ['event', event, bcHandler]);
            return;
        }
        bcHandler = "brightcove.internal._handlers." + bcHandler;
    }
    this._callMethod("removeEventListener", [event, bcHandler]);
};
brightcove.api.modules.APIModule.prototype.addEventListener = function(event, handler, priority) {
    this.removeEventListener(event, handler);
    this._addEventListener(event, handler, priority);
};
brightcove.api.modules.APIModule.prototype.removeEventListener = function(event, handler) {
    this._removeEventListener(event, handler);
};
brightcove.api.modules.APIModule.prototype._callPlayer = function(callback, params) {
    if (this.experience.type == brightcove.playerType.HTML) {
        return this._callHTML(params);
    } else {
        return this._callFlash(callback, params);
    }
};
brightcove.api.modules.APIModule.prototype._callMethod = function(method, params) {
    var args = [];
    for (var i = 0; i < params.length; i++) {
        args.push(params[i]);
    }
    return this._callPlayer(this.experience._callback, {
        module: this._name,
        method: method,
        params: args
    });
};
brightcove.api.modules.APIModule.prototype._callFlash = function(callback, params) {};
brightcove.api.modules.APIModule.prototype._callHTML = function(params) {
    if (!this.experience._callback.postMessage) {
        return null;
    }
    var json;
    if (window.Prototype != null && Prototype.Version != null) {
        var version = Prototype.Version.split(".");
        var majorVersion = parseInt(version[0], 10);
        var minorVersion = parseInt(version[1], 10);
        var oldPrototypeUsed = majorVersion == 1 && minorVersion < 7;
        if (oldPrototypeUsed && window.console && !brightcove.internal._prototypeMessageSent) {
            brightcove.internal._prototypeMessageSent = true;
            var message = "An older version of prototype.js is being used on this page, preventing successful communication with ";
            message += "the Brightcove player. The Brightcove player supports the use of version 1.7 or higher ";
            message += "of the Prototype library.";
            console.log(message);
        }
    }
    if (window.JSON) {
        json = window.JSON.stringify(params);
    } else {
        json = brightcove.internal._stringify(params);
    }
    if (json) {
        this.experience._callback.postMessage(json, this.experience._playerURL);
    }
    return null;
};
(function() {
    var noop = function() {};
    brightcove.api.modules.APIModule.prototype._callAsync = function(flashMethod, jsMethod, callback) {
        var params, callbackId = brightcove.api.modules.APIModule._getAsyncGetterHandler(callback || noop),
            args = Array.prototype.slice.call(arguments, 3);
        if (this.experience.type == brightcove.playerType.HTML) {
            params = {
                object: this._name,
                method: jsMethod,
                callback: callbackId,
                arguments: args
            };
            return this._callHTML(params);
        } else {
            if (this.experience._playerURL) {
                args.unshift("getterAsync", callbackId);
            } else {
                args.unshift("brightcove.internal._handlers." + callbackId);
            }
            params = {
                module: this._name,
                method: flashMethod,
                params: args
            };
            return this._callFlash(this.experience._callback, params);
        }
    };
})();
brightcove.api.modules.APIModule.prototype._callGetterMethod = function(name, args) {
    if (args.length && typeof args[0] == "function") {
        var handler = args.shift(),
            handlerName;
        if (this.experience.type == brightcove.playerType.FLASH) {
            if (this.experience._playerURL) {
                handlerName = brightcove.api.modules.APIModule._getAsyncGetterHandler(handler);
                args.unshift(handlerName);
                args.unshift("getter");
                this._callMethod(name, args);
            } else {
                var result = this._callMethod(name, args);
                setTimeout(function() {
                    handler(result);
                }, 1);
            }
        } else {
            handlerName = brightcove.api.modules.APIModule._getAsyncGetterHandler(handler);
            args.unshift(handlerName);
            this._callMethod(name + "Async", args);
        }
    } else {
        throw "getter call must include callback function";
    }
};
brightcove.api.BrightcoveExperience = function() {
    var callback = arguments[0];
    var url = arguments[2];
    this.id = arguments[1];
    if (callback == null) {
        this.type = brightcove.playerType.HTML;
        this._playerURL = url;
        this._callback = brightcove.experiences[this.id].contentWindow;
    } else {
        this.type = brightcove.playerType.FLASH;
        this._callback = callback;
        if (url) {
            this._playerURL = url;
        }
    }
    this._modules = {};
};
brightcove.api.BrightcoveExperience.prototype.getModule = function(moduleName) {
    if (this._modules[moduleName] == null && brightcove.internal._modules[moduleName]) {
        var module = new brightcove.internal._modules[moduleName](this);
        module._playerURL = this._playerURL;
        this._modules[moduleName] = module;
    }
    return this._modules[moduleName];
};
brightcove.api.data.CuePoint = function(pCuePoint) {
    this.name = pCuePoint.name;
    this.videoID = pCuePoint.videoID;
    this.metadata = pCuePoint.metadata;
    this.type = pCuePoint.type;
    this.time = pCuePoint.time;
};
brightcove.api.data.Media = function() {};
brightcove.api.data.Playlist = function() {};
brightcove.api.data.Rendition = function() {};
brightcove.api.events.AdEvent = function(pType) {
    this.type = pType;
};
brightcove.api.events.AdEvent.START = "adStart";
brightcove.api.events.AdEvent.COMPLETE = "adComplete";
brightcove.api.events.AuthEvent = function(pType, pService, pRequestorId, pResourceId) {
    this.type = pType;
    this.service = pService;
    this.requestorId = pRequestorId;
    this.resourceId = pResourceId;
};
brightcove.api.events.AuthEvent.AUTH_NEEDED = "authNeeded";
brightcove.api.events.CaptionsEvent = {
    DFXP_LOAD_SUCCESS: "dfxpLoadSuccess",
    DFXP_LOAD_ERROR: "dfxpLoadError"
};
brightcove.api.events.ContentEvent = {
    MEDIA_NOT_FOUND: "mediaNotFound"
};
brightcove.api.events.CuePointEvent = {
    CUE: "cuePoint"
};
brightcove.api.events.ExperienceEvent = {
    TEMPLATE_READY: "templateReady"
};
brightcove.api.events.MediaEvent = {
    BEGIN: "mediaBegin",
    CHANGE: "mediaChange",
    COMPLETE: "mediaComplete",
    ERROR: "mediaError",
    PLAY: "mediaPlay",
    PROGRESS: "mediaProgress",
    STOP: "mediaStop",
    SEEK_NOTIFY: "mediaSeekNotify"
};
brightcove.internal = {
    _instances: {},
    _modules: {},
    _handlers: {},
    _ID_DELIM: "|||",
    _stringify: function(pObject) {
        var type = typeof pObject;
        if (type == "function" || pObject == undefined) {
            return null;
        } else if (type == "string") {
            return "\"" + pObject.replace(/"/g, "\\\"") + "\"";
        } else if (pObject instanceof Array) {
            var json = "[";
            for (var i in pObject) {
                if (typeof pObject[i] == "function") {
                    json += (null + ",");
                } else {
                    json += (brightcove.internal._stringify(pObject[i]) + ",");
                }
            }
            if (json.substr(-1) == ",") {
                json = json.substr(0, json.length - 1);
            }
            return json + "]";
        } else if (type == "object") {
            var json = "{";
            var i;
            var props = pObject.enumerableProperties;
            if (props) {
                for (i in props) {
                    json += ("\"" + props[i] + "\":" + brightcove.internal._stringify(pObject[props[i]]) + ",");
                }
            } else {
                for (i in pObject) {
                    if (typeof pObject[i] != "function" && i != "__proto__") {
                        json += ("\"" + i + "\":" + brightcove.internal._stringify(pObject[i]) + ",");
                    }
                }
            }
            if (json.substr(-1) == ",") {
                json = json.substr(0, json.length - 1);
            }
            return json + "}";
        } else {
            return pObject;
        }
    },
    _setAPICallback: function(pID, pCallback, pURL) {
        brightcove.internal._instances[pID] = new brightcove.api.BrightcoveExperience(pCallback, pID, pURL);
    },
    _convertDates: function(pObj) {
        if (!pObj) {
            return pObj;
        }
        if (pObj.media) {
            pObj.media = brightcove.internal._convertDates(pObj.media);
        } else {
            if (pObj.publishedDate) {
                pObj.publishedDate = new Date(parseInt(pObj.publishedDate, 10));
            }
            if (pObj.startDate) {
                pObj.startDate = new Date(parseInt(pObj.startDate, 10));
            }
            if (pObj.endDate) {
                pObj.endDate = new Date(parseInt(pObj.endDate, 10));
            }
        }
        return pObj;
    },
    _isIOS: function(pUserAgent) {
        var types = ["iPad", "iPhone", "iPod"];
        var numTypes = types.length;
        var userAgent = pUserAgent || brightcove.userAgent;
        for (var i = 0; i < numTypes; i++) {
            if (userAgent.match(new RegExp(types[i], "i"))) {
                return true;
            }
        }
        return false;
    },
    _isChromeForAndroid: function(pUserAgent) {
        return /android.*chrome/i.test(pUserAgent || brightcove.userAgent);
    },
    xml: {
        _convertToXML: function(pObj, pNodeName) {
            if (pObj instanceof Function) return "";
            var type = brightcove.internal.xml._getType(pObj);
            var xml = "<" + type.name + pNodeName + ">";
            if (type.name == "obj") {
                for (var i in pObj) {
                    xml += brightcove.internal.xml._convertToXML(pObj[i], i);
                }
            } else if (type.name == "arr") {
                for (var j = 0; j < pObj.length; j++) {
                    xml += brightcove.internal.xml._convertToXML(pObj[j], j);
                }
            } else if (type.name == "str") {
                pObj = brightcove.internal.xml._replaceEntities(pObj);
                xml += pObj;
            } else {
                xml += pObj;
            }
            xml += "</" + type.name + pNodeName + ">";
            return xml;
        },
        _replaceEntities: function(pObj) {
            pObj = pObj.replace(new RegExp("&", "g"), "&amp;");
            pObj = pObj.replace(new RegExp("<", "g"), "&lt;");
            pObj = pObj.replace(new RegExp(">", "g"), "&gt;");
            return pObj;
        },
        _getType: function(pObj) {
            switch (typeof(pObj)) {
                case "boolean":
                    return {
                        name: "boo",
                        type: Boolean
                    };
                case "string":
                    return {
                        name: "str",
                        type: String
                    };
                case "number":
                    return {
                        name: "num",
                        type: Number
                    };
                default:
                    if (pObj instanceof Array) {
                        return {
                            name: "arr",
                            type: Array
                        };
                    } else {
                        return {
                            name: "obj",
                            type: Object
                        };
                    }
            }
        }
    }
};
brightcove.api.modules.APIModules.ADVERTISING = "advertising";
brightcove.api.modules.AdModule = function(experience) {
    this.experience = experience;
    this._name = brightcove.api.modules.APIModules.ADVERTISING;
    this._handlerWrappers = [];
};
brightcove.api.modules.AdModule.prototype = new brightcove.api.modules.APIModule();
brightcove.api.modules.AdModule.prototype.addEventListener = function(event, handler, priority) {
    this.removeEventListener(event, handler);
    this._addEventListener(event, handler, priority);
};
brightcove.api.modules.AdModule.prototype.getAdPolicy = function(callback) {
    return this._callAsync("getAdPolicyWithCallback", "getAdPolicy", callback);
};
brightcove.api.modules.AdModule.prototype.setAdPolicy = function(pAdPolicy, callback) {
    return this._callAsync("setAdPolicyWithCallback", "setAdPolicy", callback, pAdPolicy);
};
brightcove.api.modules.AdModule.prototype.removeEventListener = function(event, handler) {
    this._removeEventListener(event, handler);
};
brightcove.internal._modules[brightcove.api.modules.APIModules.ADVERTISING] = brightcove.api.modules.AdModule;
brightcove.api.modules.APIModules.AUTH = "auth";
brightcove.api.modules.AuthModule = function(experience) {
    this.experience = experience;
    this._name = brightcove.api.modules.APIModules.AUTH;
};
brightcove.api.modules.AuthModule.prototype = new brightcove.api.modules.APIModule();
brightcove.api.modules.AuthModule.prototype.showMessage = function(pMessage, pModal) {
    return this._callMethod("showMessage", [pMessage, pModal]);
};
brightcove.api.modules.AuthModule.prototype.removeMessage = function() {
    return this._callMethod("removeMessage", []);
};
brightcove.api.modules.AuthModule.prototype.playWithToken = function(pToken, pService) {
    return this._callMethod("playWithToken", [pToken, pService]);
};
brightcove.internal._modules[brightcove.api.modules.APIModules.AUTH] = brightcove.api.modules.AuthModule;
brightcove.api.modules.APIModules.CAPTIONS = "captions";
brightcove.api.modules.CaptionsModule = function(experience) {
    this.experience = experience;
    this._name = brightcove.api.modules.APIModules.CAPTIONS;
};
brightcove.api.modules.CaptionsModule.prototype = new brightcove.api.modules.APIModule();
brightcove.api.modules.CaptionsModule.prototype.loadDFXP = function(data, videoID) {
    var
        module = this,
        request, dispatchError;
    if (this.experience.type == brightcove.playerType.HTML) {
        dispatchError = function(error) {
            if (window.console) {
                console.log(error);
            }
            module._dispatchEvent({
                type: brightcove.api.events.CaptionsEvent.DFXP_LOAD_ERROR,
                url: data,
                error: error
            });
        };
        if (data.trim().indexOf('<') === 0) {
            module._callMethod("loadDFXP", [data, videoID]);
            return undefined;
        }
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    try {
                        if (request.status === 200) {
                            module._callMethod("parseDFXP", [data, request.responseText, videoID]);
                        } else {
                            dispatchError("Error loading DFXP file. " +
                                request.statusText + " HTTP status: " +
                                request.status);
                        }
                    } catch (e) {
                        dispatchError(e.description);
                    }
                }
            };
            request.open("GET", data, true);
            request.send(null);
        } else {
            dispatchError("Browser not supported by Brightcove player for loading DFXP file.");
        }
    } else {
        return this._callMethod("loadDFXP", [data, videoID]);
    }
};
brightcove.api.modules.CaptionsModule.prototype.setLanguage = function(language) {
    return this._callMethod("setLanguage", [language]);
};
brightcove.api.modules.CaptionsModule.prototype.getLanguages = function(videoID, callback) {
    return this._callGetterMethod("getLanguages", [callback, videoID]);
};
brightcove.api.modules.CaptionsModule.prototype.setStyleOptions = function(pValue) {
    return this._callMethod("setStyleOptions", [pValue]);
};
brightcove.api.modules.CaptionsModule.prototype.getStyleOptions = function(callback) {
    return this._callGetterMethod("getStyleOptions", [callback]);
};
brightcove.api.modules.CaptionsModule.prototype.setCaptionsEnabled = function(pValue) {
    return this._callMethod("setCaptionsEnabled", [pValue]);
};
brightcove.api.modules.CaptionsModule.prototype.getCaptionsEnabled = function(callback) {
    return this._callGetterMethod("getCaptionsEnabled", [callback]);
};
brightcove.api.modules.CaptionsModule.prototype.showOptions = function(load) {
    return this._callMethod("showOptions", [load]);
};
brightcove.internal._modules[brightcove.api.modules.APIModules.CAPTIONS] = brightcove.api.modules.CaptionsModule;
(function() {
    brightcove.api.modules.APIModules.CONTENT = "content";
    brightcove.api.modules.ContentModule = function(experience) {
        this.experience = experience;
        this._name = brightcove.api.modules.APIModules.CONTENT;
    };
    brightcove.api.modules.ContentModule.prototype = new brightcove.api.modules.APIModule();
    brightcove.api.modules.ContentModule.prototype.getMediaByID = function(id, callback) {
        return this._callAsync("getMediaByIDWithCallback", "getMediaByID", callback, id);
    };
    brightcove.api.modules.ContentModule.prototype.getMediaByReferenceID = function(id, callback) {
        return this._callAsync("getMediaByReferenceIDWithCallback", "getMediaByReferenceID", callback, id);
    };
    brightcove.api.modules.ContentModule.prototype.getPlaylistByID = function(id, callback) {
        return this._callAsync("getPlaylistByIDWithCallback", "getPlaylistByID", callback, id);
    };
    brightcove.api.modules.ContentModule.prototype.getPlaylistByReferenceID = function(refId, callback) {
        return this._callAsync("getPlaylistByReferenceIDWithCallback", "getPlaylistByReferenceID", callback, refId);
    };
    brightcove.api.modules.ContentModule.prototype.updateMedia = function(update, callback) {
        return this._callAsync("updateMediaWithCallback", "updateMedia", callback, update);
    };
    brightcove.internal._modules[brightcove.api.modules.APIModules.CONTENT] = brightcove.api.modules.ContentModule;
})();
brightcove.api.modules.APIModules.CUE_POINTS = "cuePoints";
brightcove.api.modules.CuePointsModule = function(experience) {
    this.experience = experience;
    this._name = brightcove.api.modules.APIModules.CUE_POINTS;
    this._handlerWrappers = [];
};
brightcove.api.modules.CuePointsModule.prototype = new brightcove.api.modules.APIModule();
brightcove.api.modules.CuePointsModule.prototype.addEventListener = function(event, handler, priority) {
    this.removeEventListener(event, handler);
    var wrapper;
    if (event == brightcove.api.events.CuePointEvent.CUE) {
        wrapper = function(pEvent) {
            pEvent.cuePoint = new brightcove.api.data.CuePoint(pEvent.cuePoint);
            handler(pEvent);
        };
        this._handlerWrappers.push({
            event: event,
            handler: handler,
            wrapper: wrapper
        });
    }
    this._addEventListener(event, wrapper || handler, priority);
};
brightcove.api.modules.CuePointsModule.prototype.removeEventListener = function(event, handler) {
    if (event == brightcove.api.events.CuePointEvent.CUE) {
        var wrapper;
        var num = this._handlerWrappers.length;
        for (var i = 0; i < num; i++) {
            if (this._handlerWrappers[i].event == event && this._handlerWrappers[i].handler == handler) {
                wrapper = this._handlerWrappers[i].wrapper;
                this._handlerWrappers.splice(i, 1);
                break;
            }
        }
    }
    this._removeEventListener(event, wrapper || handler);
};
brightcove.api.modules.CuePointsModule.prototype.addCuePoints = function(id, cuePoints) {
    return this._callMethod("addCuePoints", [id, cuePoints]);
};
brightcove.api.modules.CuePointsModule.prototype.getCuePoints = function(id, callback) {
    var wrapper = function(cuePoints) {
        for (var i in cuePoints) {
            cuePoints[i] = new brightcove.api.data.CuePoint(cuePoints[i]);
        }
        callback(cuePoints);
    };
    return this._callGetterMethod("getCuePoints", [wrapper, id]);
};
brightcove.api.modules.CuePointsModule.prototype.clearCodeCuePoints = function(id) {
    return this._callMethod("clearCodeCuePoints", [id]);
};
brightcove.api.modules.CuePointsModule.prototype.removeCodeCuePointsAtTime = function(id, time) {
    return this._callMethod("removeCodeCuePointsAtTime", [id, time]);
};
brightcove.api.modules.CuePointsModule.prototype.clearAdCuePoints = function(id) {
    return this._callMethod("clearAdCuePoints", [id]);
};
brightcove.api.modules.CuePointsModule.prototype.removeAdCuePointsAtTime = function(id, time) {
    return this._callMethod("removeAdCuePointsAtTime", [id, time]);
};
brightcove.internal._modules[brightcove.api.modules.APIModules.CUE_POINTS] = brightcove.api.modules.CuePointsModule;
brightcove.api.modules.CuePointsModule.CuePointType = {
    AD: 0,
    CODE: 1,
    CHAPTER: 2
};
brightcove.api.modules.APIModules.EXPERIENCE = "experience";
brightcove.api.modules.ExperienceModule = function(experience) {
    this.experience = experience;
    this._name = brightcove.api.modules.APIModules.EXPERIENCE;
};
brightcove.api.modules.ExperienceModule.prototype = new brightcove.api.modules.APIModule();
brightcove.api.modules.ExperienceModule.prototype.getExperienceID = function(callback) {
    var experience = this;
    var handler = function(id) {
        experience._id = id;
        callback(id);
    };
    if (callback == null) {
        return this._id;
    }
    return this._callGetterMethod("getExperienceID", [handler]);
};
brightcove.api.modules.ExperienceModule.prototype.getReady = function(callback) {
    return this._callGetterMethod("getReady", [callback]);
};
brightcove.api.modules.ExperienceModule.prototype.setSize = function(width, height) {
    return this._callAsync("setSizeWithCallback", "setSize", undefined, width, height);
}
brightcove.internal._modules[brightcove.api.modules.APIModules.EXPERIENCE] = brightcove.api.modules.ExperienceModule;
brightcove.api.modules.APIModules.VIDEO_PLAYER = "videoPlayer";
brightcove.api.modules.VideoPlayerModule = function(experience) {
    this.experience = experience;
    this._name = brightcove.api.modules.APIModules.VIDEO_PLAYER;
    var module = this;
    this.addEventListener(brightcove.api.events.MediaEvent.BEGIN, function(event) {
        module._canPlayWithoutUserInteraction = true;
    }, 0);
    var mobileDevice = brightcove.isSupportedHTMLDevice();
    this._canPlayWithoutUserInteraction = !mobileDevice || (mobileDevice && !brightcove.internal._isIOS() && !brightcove.internal._isChromeForAndroid());
    this._handlerWrappers = [];
};
brightcove.api.modules.VideoPlayerModule.prototype = new brightcove.api.modules.APIModule();
brightcove.api.modules.VideoPlayerModule.prototype.addEventListener = function(event, handler, priority) {
    this.removeEventListener(event, handler);
    var wrapper;
    if (event == brightcove.api.events.CuePointEvent.CUE) {
        wrapper = function(pEvent) {
            pEvent.cuePoint = new brightcove.api.data.CuePoint(pEvent.cuePoint);
            handler(pEvent);
        };
        this._handlerWrappers.push({
            event: event,
            handler: handler,
            wrapper: wrapper
        });
    }
    this._addEventListener(event, wrapper || handler, priority);
};
brightcove.api.modules.VideoPlayerModule.prototype.removeEventListener = function(event, handler) {
    if (event == brightcove.api.events.CuePointEvent.CUE) {
        var wrapper;
        var num = this._handlerWrappers.length;
        for (var i = 0; i < num; i++) {
            if (this._handlerWrappers[i].event == event && this._handlerWrappers[i].handler == handler) {
                wrapper = this._handlerWrappers[i].wrapper;
                this._handlerWrappers.splice(i, 1);
                break;
            }
        }
    }
    this._removeEventListener(event, wrapper || handler);
};
brightcove.api.modules.VideoPlayerModule.prototype.getCurrentVideo = function(callback) {
    return this._callGetterMethod("getCurrentVideo", [callback]);
};
brightcove.api.modules.VideoPlayerModule.prototype.getCurrentRendition = function(callback) {
    return this._callGetterMethod("getCurrentRendition", [callback]);
};
brightcove.api.modules.VideoPlayerModule.prototype.loadVideoByID = function(id) {
    return this._callMethod("loadVideoByID", [id]);
};
brightcove.api.modules.VideoPlayerModule.prototype.loadVideoByReferenceID = function(referenceID) {
    return this._callMethod("loadVideoByReferenceID", [referenceID]);
};
brightcove.api.modules.VideoPlayerModule.prototype.play = function() {
    if (this.canPlayWithoutInteraction()) {
        return this._callMethod("play", []);
    }
};
brightcove.api.modules.VideoPlayerModule.prototype.pause = function(pause) {
    return this._callMethod("pause", [pause]);
};
brightcove.api.modules.VideoPlayerModule.prototype.seek = function(time) {
    return this._callMethod("seek", [time]);
};
brightcove.api.modules.VideoPlayerModule.prototype.getVideoPosition = function(format, callback) {
    if (typeof format == "function") {
        callback = format;
        format = false;
    }
    return this._callGetterMethod("getVideoPosition", [callback, format]);
};
brightcove.api.modules.VideoPlayerModule.prototype.getVideoDuration = function(formatResult, callback) {
    if (typeof formatResult == "function") {
        callback = formatResult;
        formatResult = false;
    }
    return this._callGetterMethod("getVideoDuration", [callback, formatResult]);
};
brightcove.api.modules.VideoPlayerModule.prototype.getIsPlaying = function(callback) {
    return this._callGetterMethod("getIsPlaying", [callback]);
};
brightcove.api.modules.VideoPlayerModule.prototype.canPlayWithoutInteraction = function() {
    return this._canPlayWithoutUserInteraction;
};
brightcove.api.modules.VideoPlayerModule.prototype.cueVideoByID = function(id) {
    return this._callMethod("cueVideoByID", [id]);
};
brightcove.api.modules.VideoPlayerModule.prototype.cueVideoByReferenceID = function(id) {
    return this._callMethod("cueVideoByReferenceID", [id]);
};
brightcove.api.modules.VideoPlayerModule.prototype.getPrivacyMode = function(callback) {
    return this._callGetterMethod("getPrivacyMode", [callback]);
};
brightcove.api.modules.VideoPlayerModule.prototype.setPrivacyMode = function(mode) {
    return this._callMethod("setPrivacyMode", [mode]);
};
brightcove.internal._modules[brightcove.api.modules.APIModules.VIDEO_PLAYER] = brightcove.api.modules.VideoPlayerModule;
if (brightcove._queuedAPICalls && brightcove._queuedAPICalls.length) {
    while (brightcove._queuedAPICalls.length) {
        brightcove.handleAPICallForHTML(brightcove._queuedAPICalls.shift());
    }
}
var brightcove = brightcove || {};
(function() {
    var _callFlash = function(callback, params) {
        var callbackArray = callback.split(brightcove.internal._ID_DELIM);
        if (callbackArray.length < 2) {
            return undefined;
        }
        if (callbackArray[0].length < 1) {
            return undefined;
        }
        var flashId = callbackArray[0];
        var callbackName = callbackArray[1];
        var experience = document.getElementById(flashId);
        if (experience.tagName == "IFRAME") {
            return experience.contentWindow.postMessage(JSON.stringify({
                api: 1,
                callback: callback,
                params: params
            }), experience.src);
        } else {
            if (experience[callbackName] != null) {
                return experience[callbackName](brightcove.internal.xml._convertToXML(params, "js2flash"));
            }
        }
    };
    if (brightcove && brightcove.api && brightcove.api.modules && brightcove.api.modules.APIModule) {
        brightcove.api.modules.APIModule.prototype._callFlash = _callFlash;
    } else {
        brightcove._callFlash = _callFlash;
    }
})();
