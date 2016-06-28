! function(e, t) {
    "function" == typeof define && define.amd ? define("handlebars", [], t) : "object" == typeof exports ? module.exports = t() : e.Handlebars = e.Handlebars || t()
}(this, function() {
    var e = function() {
            "use strict";

            function e(e) {
                this.string = e
            }
            var t;
            return e.prototype.toString = function() {
                return "" + this.string
            }, t = e
        }(),
        t = function(e) {
            "use strict";

            function t(e) {
                return a[e]
            }

            function n(e) {
                for (var t = 1; t < arguments.length; t++)
                    for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
                return e
            }

            function r(e) {
                return e instanceof u ? e.toString() : null == e ? "" : e ? (e = "" + e, l.test(e) ? e.replace(f, t) : e) : e + ""
            }

            function i(e) {
                return e || 0 === e ? p(e) && 0 === e.length ? !0 : !1 : !0
            }

            function s(e, t) {
                return (e ? e + "." : "") + t
            }
            var o = {},
                u = e,
                a = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                f = /[&<>"'`]/g,
                l = /[&<>"'`]/;
            o.extend = n;
            var c = Object.prototype.toString;
            o.toString = c;
            var h = function(e) {
                return "function" == typeof e
            };
            h(/x/) && (h = function(e) {
                return "function" == typeof e && "[object Function]" === c.call(e)
            });
            var h;
            o.isFunction = h;
            var p = Array.isArray || function(e) {
                return e && "object" == typeof e ? "[object Array]" === c.call(e) : !1
            };
            return o.isArray = p, o.escapeExpression = r, o.isEmpty = i, o.appendContextPath = s, o
        }(e),
        n = function() {
            "use strict";

            function e(e, t) {
                var r;
                t && t.firstLine && (r = t.firstLine, e += " - " + r + ":" + t.firstColumn);
                for (var i = Error.prototype.constructor.call(this, e), s = 0; s < n.length; s++) this[n[s]] = i[n[s]];
                r && (this.lineNumber = r, this.column = t.firstColumn)
            }
            var t, n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return e.prototype = new Error, t = e
        }(),
        r = function(e, t) {
            "use strict";

            function n(e, t) {
                this.helpers = e || {}, this.partials = t || {}, r(this)
            }

            function r(e) {
                e.registerHelper("helperMissing", function() {
                    if (1 === arguments.length) return void 0;
                    throw new o("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                }), e.registerHelper("blockHelperMissing", function(t, n) {
                    var r = n.inverse,
                        i = n.fn;
                    if (t === !0) return i(this);
                    if (t === !1 || null == t) return r(this);
                    if (l(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : r(this);
                    if (n.data && n.ids) {
                        var o = m(n.data);
                        o.contextPath = s.appendContextPath(n.data.contextPath, n.name), n = {
                            data: o
                        }
                    }
                    return i(t, n)
                }), e.registerHelper("each", function(e, t) {
                    if (!t) throw new o("Must pass iterator to #each");
                    var n, r, i = t.fn,
                        u = t.inverse,
                        a = 0,
                        f = "";
                    if (t.data && t.ids && (r = s.appendContextPath(t.data.contextPath, t.ids[0]) + "."), c(e) && (e = e.call(this)), t.data && (n = m(t.data)), e && "object" == typeof e)
                        if (l(e))
                            for (var h = e.length; h > a; a++) n && (n.index = a, n.first = 0 === a, n.last = a === e.length - 1, r && (n.contextPath = r + a)), f += i(e[a], {
                                data: n
                            });
                        else
                            for (var p in e) e.hasOwnProperty(p) && (n && (n.key = p, n.index = a, n.first = 0 === a, r && (n.contextPath = r + p)), f += i(e[p], {
                                data: n
                            }), a++);
                    return 0 === a && (f = u(this)), f
                }), e.registerHelper("if", function(e, t) {
                    return c(e) && (e = e.call(this)), !t.hash.includeZero && !e || s.isEmpty(e) ? t.inverse(this) : t.fn(this)
                }), e.registerHelper("unless", function(t, n) {
                    return e.helpers["if"].call(this, t, {
                        fn: n.inverse,
                        inverse: n.fn,
                        hash: n.hash
                    })
                }), e.registerHelper("with", function(e, t) {
                    c(e) && (e = e.call(this));
                    var n = t.fn;
                    if (s.isEmpty(e)) return t.inverse(this);
                    if (t.data && t.ids) {
                        var r = m(t.data);
                        r.contextPath = s.appendContextPath(t.data.contextPath, t.ids[0]), t = {
                            data: r
                        }
                    }
                    return n(e, t)
                }), e.registerHelper("log", function(t, n) {
                    var r = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
                    e.log(r, t)
                }), e.registerHelper("lookup", function(e, t) {
                    return e && e[t]
                }), e.registerHelper("ifCond", function(e, t, n) {
                    return e === t ? n.fn(this) : n.inverse(this)
                })
            }
            var i = {},
                s = e,
                o = t,
                u = "2.0.0";
            i.VERSION = u;
            var a = 6;
            i.COMPILER_REVISION = a;
            var f = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1"
            };
            i.REVISION_CHANGES = f;
            var l = s.isArray,
                c = s.isFunction,
                h = s.toString,
                p = "[object Object]";
            i.HandlebarsEnvironment = n, n.prototype = {
                constructor: n,
                logger: d,
                log: v,
                registerHelper: function(e, t) {
                    if (h.call(e) === p) {
                        if (t) throw new o("Arg not supported with multiple helpers");
                        s.extend(this.helpers, e)
                    } else this.helpers[e] = t
                },
                unregisterHelper: function(e) {
                    delete this.helpers[e]
                },
                registerPartial: function(e, t) {
                    h.call(e) === p ? s.extend(this.partials, e) : this.partials[e] = t
                },
                unregisterPartial: function(e) {
                    delete this.partials[e]
                }
            };
            var d = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 3,
                log: function(e, t) {
                    if (d.level <= e) {
                        var n = d.methodMap[e];
                        "undefined" != typeof console && console[n] && console[n].call(console, t)
                    }
                }
            };
            i.logger = d;
            var v = d.log;
            i.log = v;
            var m = function(e) {
                var t = s.extend({}, e);
                return t._parent = e, t
            };
            return i.createFrame = m, i
        }(t, n),
        i = function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e && e[0] || 1,
                    n = h;
                if (t !== n) {
                    if (n > t) {
                        var r = p[n],
                            i = p[t];
                        throw new c("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                    }
                    throw new c("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
                }
            }

            function i(e, t) {
                if (!t) throw new c("No environment passed to template");
                if (!e || !e.main) throw new c("Unknown template object: " + typeof e);
                t.VM.checkRevision(e.compiler);
                var n = function(n, r, i, s, o, u, a, f, h) {
                        o && (s = l.extend({}, s, o));
                        var p = t.VM.invokePartial.call(this, n, i, s, u, a, f, h);
                        if (null == p && t.compile) {
                            var d = {
                                helpers: u,
                                partials: a,
                                data: f,
                                depths: h
                            };
                            a[i] = t.compile(n, {
                                data: void 0 !== f,
                                compat: e.compat
                            }, t), p = a[i](s, d)
                        }
                        if (null != p) {
                            if (r) {
                                for (var v = p.split("\n"), m = 0, g = v.length; g > m && (v[m] || m + 1 !== g); m++) v[m] = r + v[m];
                                p = v.join("\n")
                            }
                            return p
                        }
                        throw new c("The partial " + i + " could not be compiled when running in runtime-only mode")
                    },
                    r = {
                        lookup: function(e, t) {
                            for (var n = e.length, r = 0; n > r; r++)
                                if (e[r] && null != e[r][t]) return e[r][t]
                        },
                        lambda: function(e, t) {
                            return "function" == typeof e ? e.call(t) : e
                        },
                        escapeExpression: l.escapeExpression,
                        invokePartial: n,
                        fn: function(t) {
                            return e[t]
                        },
                        programs: [],
                        program: function(e, t, n) {
                            var r = this.programs[e],
                                i = this.fn(e);
                            return t || n ? r = s(this, e, i, t, n) : r || (r = this.programs[e] = s(this, e, i)), r
                        },
                        data: function(e, t) {
                            for (; e && t--;) e = e._parent;
                            return e
                        },
                        merge: function(e, t) {
                            var n = e || t;
                            return e && t && e !== t && (n = l.extend({}, t, e)), n
                        },
                        noop: t.VM.noop,
                        compilerInfo: e.compiler
                    },
                    i = function(t, n) {
                        n = n || {};
                        var s = n.data;
                        i._setup(n), !n.partial && e.useData && (s = a(t, s));
                        var o;
                        return e.useDepths && (o = n.depths ? [t].concat(n.depths) : [t]), e.main.call(r, t, r.helpers, r.partials, s, o)
                    };
                return i.isTop = !0, i._setup = function(n) {
                    n.partial ? (r.helpers = n.helpers, r.partials = n.partials) : (r.helpers = r.merge(n.helpers, t.helpers), e.usePartial && (r.partials = r.merge(n.partials, t.partials)))
                }, i._child = function(t, n, i) {
                    if (e.useDepths && !i) throw new c("must pass parent depths");
                    return s(r, t, e[t], n, i)
                }, i
            }

            function s(e, t, n, r, i) {
                var s = function(t, s) {
                    return s = s || {}, n.call(e, t, e.helpers, e.partials, s.data || r, i && [t].concat(i))
                };
                return s.program = t, s.depth = i ? i.length : 0, s
            }

            function o(e, t, n, r, i, s, o) {
                var u = {
                    partial: !0,
                    helpers: r,
                    partials: i,
                    data: s,
                    depths: o
                };
                if (void 0 === e) throw new c("The partial " + t + " could not be found");
                return e instanceof Function ? e(n, u) : void 0
            }

            function u() {
                return ""
            }

            function a(e, t) {
                return t && "root" in t || (t = t ? d(t) : {}, t.root = e), t
            }
            var f = {},
                l = e,
                c = t,
                h = n.COMPILER_REVISION,
                p = n.REVISION_CHANGES,
                d = n.createFrame;
            return f.checkRevision = r, f.template = i, f.program = s, f.invokePartial = o, f.noop = u, f
        }(t, n, r),
        s = function(e, t, n, r, i) {
            "use strict";
            var s, o = e,
                u = t,
                a = n,
                f = r,
                l = i,
                c = function() {
                    var e = new o.HandlebarsEnvironment;
                    return f.extend(e, o), e.SafeString = u, e.Exception = a, e.Utils = f, e.escapeExpression = f.escapeExpression, e.VM = l, e.template = function(t) {
                        return l.template(t, e)
                    }, e
                },
                h = c();
            return h.create = c, h["default"] = h, s = h
        }(r, e, n, t, i),
        o = function(e) {
            "use strict";

            function t(e) {
                e = e || {}, this.firstLine = e.first_line, this.firstColumn = e.first_column, this.lastColumn = e.last_column, this.lastLine = e.last_line
            }
            var n, r = e,
                i = {
                    ProgramNode: function(e, n, r) {
                        t.call(this, r), this.type = "program", this.statements = e, this.strip = n
                    },
                    MustacheNode: function(e, n, r, s, o) {
                        if (t.call(this, o), this.type = "mustache", this.strip = s, null != r && r.charAt) {
                            var u = r.charAt(3) || r.charAt(2);
                            this.escaped = "{" !== u && "&" !== u
                        } else this.escaped = !!r;
                        this.sexpr = e instanceof i.SexprNode ? e : new i.SexprNode(e, n), this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
                    },
                    SexprNode: function(e, n, r) {
                        t.call(this, r), this.type = "sexpr", this.hash = n;
                        var i = this.id = e[0],
                            s = this.params = e.slice(1);
                        this.isHelper = !!s.length || !!n, this.eligibleHelper = this.isHelper || i.isSimple
                    },
                    PartialNode: function(e, n, r, i, s) {
                        t.call(this, s), this.type = "partial", this.partialName = e, this.context = n, this.hash = r, this.strip = i, this.strip.inlineStandalone = !0
                    },
                    BlockNode: function(e, n, r, i, s) {
                        t.call(this, s), this.type = "block", this.mustache = e, this.program = n, this.inverse = r, this.strip = i, r && !n && (this.isInverse = !0)
                    },
                    RawBlockNode: function(e, n, s, o) {
                        if (t.call(this, o), e.sexpr.id.original !== s) throw new r(e.sexpr.id.original + " doesn't match " + s, this);
                        n = new i.ContentNode(n, o), this.type = "block", this.mustache = e, this.program = new i.ProgramNode([n], {}, o)
                    },
                    ContentNode: function(e, n) {
                        t.call(this, n), this.type = "content", this.original = this.string = e
                    },
                    HashNode: function(e, n) {
                        t.call(this, n), this.type = "hash", this.pairs = e
                    },
                    IdNode: function(e, n) {
                        t.call(this, n), this.type = "ID";
                        for (var i = "", s = [], o = 0, u = "", a = 0, f = e.length; f > a; a++) {
                            var l = e[a].part;
                            if (i += (e[a].separator || "") + l, ".." === l || "." === l || "this" === l) {
                                if (s.length > 0) throw new r("Invalid path: " + i, this);
                                ".." === l ? (o++, u += "../") : this.isScoped = !0
                            } else s.push(l)
                        }
                        this.original = i, this.parts = s, this.string = s.join("."), this.depth = o, this.idName = u + this.string, this.isSimple = 1 === e.length && !this.isScoped && 0 === o, this.stringModeValue = this.string
                    },
                    PartialNameNode: function(e, n) {
                        t.call(this, n), this.type = "PARTIAL_NAME", this.name = e.original
                    },
                    DataNode: function(e, n) {
                        t.call(this, n), this.type = "DATA", this.id = e, this.stringModeValue = e.stringModeValue, this.idName = "@" + e.stringModeValue
                    },
                    StringNode: function(e, n) {
                        t.call(this, n), this.type = "STRING", this.original = this.string = this.stringModeValue = e
                    },
                    NumberNode: function(e, n) {
                        t.call(this, n), this.type = "NUMBER", this.original = this.number = e, this.stringModeValue = Number(e)
                    },
                    BooleanNode: function(e, n) {
                        t.call(this, n), this.type = "BOOLEAN", this.bool = e, this.stringModeValue = "true" === e
                    },
                    CommentNode: function(e, n) {
                        t.call(this, n), this.type = "comment", this.comment = e, this.strip = {
                            inlineStandalone: !0
                        }
                    }
                };
            return n = i
        }(n),
        u = function() {
            "use strict";
            var e, t = function() {
                function e() {
                    this.yy = {}
                }
                var t = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            root: 3,
                            program: 4,
                            EOF: 5,
                            program_repetition0: 6,
                            statement: 7,
                            mustache: 8,
                            block: 9,
                            rawBlock: 10,
                            partial: 11,
                            CONTENT: 12,
                            COMMENT: 13,
                            openRawBlock: 14,
                            END_RAW_BLOCK: 15,
                            OPEN_RAW_BLOCK: 16,
                            sexpr: 17,
                            CLOSE_RAW_BLOCK: 18,
                            openBlock: 19,
                            block_option0: 20,
                            closeBlock: 21,
                            openInverse: 22,
                            block_option1: 23,
                            OPEN_BLOCK: 24,
                            CLOSE: 25,
                            OPEN_INVERSE: 26,
                            inverseAndProgram: 27,
                            INVERSE: 28,
                            OPEN_ENDBLOCK: 29,
                            path: 30,
                            OPEN: 31,
                            OPEN_UNESCAPED: 32,
                            CLOSE_UNESCAPED: 33,
                            OPEN_PARTIAL: 34,
                            partialName: 35,
                            param: 36,
                            partial_option0: 37,
                            partial_option1: 38,
                            sexpr_repetition0: 39,
                            sexpr_option0: 40,
                            dataName: 41,
                            STRING: 42,
                            NUMBER: 43,
                            BOOLEAN: 44,
                            OPEN_SEXPR: 45,
                            CLOSE_SEXPR: 46,
                            hash: 47,
                            hash_repetition_plus0: 48,
                            hashSegment: 49,
                            ID: 50,
                            EQUALS: 51,
                            DATA: 52,
                            pathSegments: 53,
                            SEP: 54,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            5: "EOF",
                            12: "CONTENT",
                            13: "COMMENT",
                            15: "END_RAW_BLOCK",
                            16: "OPEN_RAW_BLOCK",
                            18: "CLOSE_RAW_BLOCK",
                            24: "OPEN_BLOCK",
                            25: "CLOSE",
                            26: "OPEN_INVERSE",
                            28: "INVERSE",
                            29: "OPEN_ENDBLOCK",
                            31: "OPEN",
                            32: "OPEN_UNESCAPED",
                            33: "CLOSE_UNESCAPED",
                            34: "OPEN_PARTIAL",
                            42: "STRING",
                            43: "NUMBER",
                            44: "BOOLEAN",
                            45: "OPEN_SEXPR",
                            46: "CLOSE_SEXPR",
                            50: "ID",
                            51: "EQUALS",
                            52: "DATA",
                            54: "SEP"
                        },
                        productions_: [0, [3, 2],
                            [4, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [10, 3],
                            [14, 3],
                            [9, 4],
                            [9, 4],
                            [19, 3],
                            [22, 3],
                            [27, 2],
                            [21, 3],
                            [8, 3],
                            [8, 3],
                            [11, 5],
                            [11, 4],
                            [17, 3],
                            [17, 1],
                            [36, 1],
                            [36, 1],
                            [36, 1],
                            [36, 1],
                            [36, 1],
                            [36, 3],
                            [47, 1],
                            [49, 3],
                            [35, 1],
                            [35, 1],
                            [35, 1],
                            [41, 2],
                            [30, 1],
                            [53, 3],
                            [53, 1],
                            [6, 0],
                            [6, 2],
                            [20, 0],
                            [20, 1],
                            [23, 0],
                            [23, 1],
                            [37, 0],
                            [37, 1],
                            [38, 0],
                            [38, 1],
                            [39, 0],
                            [39, 2],
                            [40, 0],
                            [40, 1],
                            [48, 1],
                            [48, 2]
                        ],
                        performAction: function(e, t, n, r, i, s) {
                            var o = s.length - 1;
                            switch (i) {
                                case 1:
                                    return r.prepareProgram(s[o - 1].statements, !0), s[o - 1];
                                case 2:
                                    this.$ = new r.ProgramNode(r.prepareProgram(s[o]), {}, this._$);
                                    break;
                                case 3:
                                    this.$ = s[o];
                                    break;
                                case 4:
                                    this.$ = s[o];
                                    break;
                                case 5:
                                    this.$ = s[o];
                                    break;
                                case 6:
                                    this.$ = s[o];
                                    break;
                                case 7:
                                    this.$ = new r.ContentNode(s[o], this._$);
                                    break;
                                case 8:
                                    this.$ = new r.CommentNode(s[o], this._$);
                                    break;
                                case 9:
                                    this.$ = new r.RawBlockNode(s[o - 2], s[o - 1], s[o], this._$);
                                    break;
                                case 10:
                                    this.$ = new r.MustacheNode(s[o - 1], null, "", "", this._$);
                                    break;
                                case 11:
                                    this.$ = r.prepareBlock(s[o - 3], s[o - 2], s[o - 1], s[o], !1, this._$);
                                    break;
                                case 12:
                                    this.$ = r.prepareBlock(s[o - 3], s[o - 2], s[o - 1], s[o], !0, this._$);
                                    break;
                                case 13:
                                    this.$ = new r.MustacheNode(s[o - 1], null, s[o - 2], r.stripFlags(s[o - 2], s[o]), this._$);
                                    break;
                                case 14:
                                    this.$ = new r.MustacheNode(s[o - 1], null, s[o - 2], r.stripFlags(s[o - 2], s[o]), this._$);
                                    break;
                                case 15:
                                    this.$ = {
                                        strip: r.stripFlags(s[o - 1], s[o - 1]),
                                        program: s[o]
                                    };
                                    break;
                                case 16:
                                    this.$ = {
                                        path: s[o - 1],
                                        strip: r.stripFlags(s[o - 2], s[o])
                                    };
                                    break;
                                case 17:
                                    this.$ = new r.MustacheNode(s[o - 1], null, s[o - 2], r.stripFlags(s[o - 2], s[o]), this._$);
                                    break;
                                case 18:
                                    this.$ = new r.MustacheNode(s[o - 1], null, s[o - 2], r.stripFlags(s[o - 2], s[o]), this._$);
                                    break;
                                case 19:
                                    this.$ = new r.PartialNode(s[o - 3], s[o - 2], s[o - 1], r.stripFlags(s[o - 4], s[o]), this._$);
                                    break;
                                case 20:
                                    this.$ = new r.PartialNode(s[o - 2], void 0, s[o - 1], r.stripFlags(s[o - 3], s[o]), this._$);
                                    break;
                                case 21:
                                    this.$ = new r.SexprNode([s[o - 2]].concat(s[o - 1]), s[o], this._$);
                                    break;
                                case 22:
                                    this.$ = new r.SexprNode([s[o]], null, this._$);
                                    break;
                                case 23:
                                    this.$ = s[o];
                                    break;
                                case 24:
                                    this.$ = new r.StringNode(s[o], this._$);
                                    break;
                                case 25:
                                    this.$ = new r.NumberNode(s[o], this._$);
                                    break;
                                case 26:
                                    this.$ = new r.BooleanNode(s[o], this._$);
                                    break;
                                case 27:
                                    this.$ = s[o];
                                    break;
                                case 28:
                                    s[o - 1].isHelper = !0, this.$ = s[o - 1];
                                    break;
                                case 29:
                                    this.$ = new r.HashNode(s[o], this._$);
                                    break;
                                case 30:
                                    this.$ = [s[o - 2], s[o]];
                                    break;
                                case 31:
                                    this.$ = new r.PartialNameNode(s[o], this._$);
                                    break;
                                case 32:
                                    this.$ = new r.PartialNameNode(new r.StringNode(s[o], this._$), this._$);
                                    break;
                                case 33:
                                    this.$ = new r.PartialNameNode(new r.NumberNode(s[o], this._$));
                                    break;
                                case 34:
                                    this.$ = new r.DataNode(s[o], this._$);
                                    break;
                                case 35:
                                    this.$ = new r.IdNode(s[o], this._$);
                                    break;
                                case 36:
                                    s[o - 2].push({
                                        part: s[o],
                                        separator: s[o - 1]
                                    }), this.$ = s[o - 2];
                                    break;
                                case 37:
                                    this.$ = [{
                                        part: s[o]
                                    }];
                                    break;
                                case 38:
                                    this.$ = [];
                                    break;
                                case 39:
                                    s[o - 1].push(s[o]);
                                    break;
                                case 48:
                                    this.$ = [];
                                    break;
                                case 49:
                                    s[o - 1].push(s[o]);
                                    break;
                                case 52:
                                    this.$ = [s[o]];
                                    break;
                                case 53:
                                    s[o - 1].push(s[o])
                            }
                        },
                        table: [{
                            3: 1,
                            4: 2,
                            5: [2, 38],
                            6: 3,
                            12: [2, 38],
                            13: [2, 38],
                            16: [2, 38],
                            24: [2, 38],
                            26: [2, 38],
                            31: [2, 38],
                            32: [2, 38],
                            34: [2, 38]
                        }, {
                            1: [3]
                        }, {
                            5: [1, 4]
                        }, {
                            5: [2, 2],
                            7: 5,
                            8: 6,
                            9: 7,
                            10: 8,
                            11: 9,
                            12: [1, 10],
                            13: [1, 11],
                            14: 16,
                            16: [1, 20],
                            19: 14,
                            22: 15,
                            24: [1, 18],
                            26: [1, 19],
                            28: [2, 2],
                            29: [2, 2],
                            31: [1, 12],
                            32: [1, 13],
                            34: [1, 17]
                        }, {
                            1: [2, 1]
                        }, {
                            5: [2, 39],
                            12: [2, 39],
                            13: [2, 39],
                            16: [2, 39],
                            24: [2, 39],
                            26: [2, 39],
                            28: [2, 39],
                            29: [2, 39],
                            31: [2, 39],
                            32: [2, 39],
                            34: [2, 39]
                        }, {
                            5: [2, 3],
                            12: [2, 3],
                            13: [2, 3],
                            16: [2, 3],
                            24: [2, 3],
                            26: [2, 3],
                            28: [2, 3],
                            29: [2, 3],
                            31: [2, 3],
                            32: [2, 3],
                            34: [2, 3]
                        }, {
                            5: [2, 4],
                            12: [2, 4],
                            13: [2, 4],
                            16: [2, 4],
                            24: [2, 4],
                            26: [2, 4],
                            28: [2, 4],
                            29: [2, 4],
                            31: [2, 4],
                            32: [2, 4],
                            34: [2, 4]
                        }, {
                            5: [2, 5],
                            12: [2, 5],
                            13: [2, 5],
                            16: [2, 5],
                            24: [2, 5],
                            26: [2, 5],
                            28: [2, 5],
                            29: [2, 5],
                            31: [2, 5],
                            32: [2, 5],
                            34: [2, 5]
                        }, {
                            5: [2, 6],
                            12: [2, 6],
                            13: [2, 6],
                            16: [2, 6],
                            24: [2, 6],
                            26: [2, 6],
                            28: [2, 6],
                            29: [2, 6],
                            31: [2, 6],
                            32: [2, 6],
                            34: [2, 6]
                        }, {
                            5: [2, 7],
                            12: [2, 7],
                            13: [2, 7],
                            16: [2, 7],
                            24: [2, 7],
                            26: [2, 7],
                            28: [2, 7],
                            29: [2, 7],
                            31: [2, 7],
                            32: [2, 7],
                            34: [2, 7]
                        }, {
                            5: [2, 8],
                            12: [2, 8],
                            13: [2, 8],
                            16: [2, 8],
                            24: [2, 8],
                            26: [2, 8],
                            28: [2, 8],
                            29: [2, 8],
                            31: [2, 8],
                            32: [2, 8],
                            34: [2, 8]
                        }, {
                            17: 21,
                            30: 22,
                            41: 23,
                            50: [1, 26],
                            52: [1, 25],
                            53: 24
                        }, {
                            17: 27,
                            30: 22,
                            41: 23,
                            50: [1, 26],
                            52: [1, 25],
                            53: 24
                        }, {
                            4: 28,
                            6: 3,
                            12: [2, 38],
                            13: [2, 38],
                            16: [2, 38],
                            24: [2, 38],
                            26: [2, 38],
                            28: [2, 38],
                            29: [2, 38],
                            31: [2, 38],
                            32: [2, 38],
                            34: [2, 38]
                        }, {
                            4: 29,
                            6: 3,
                            12: [2, 38],
                            13: [2, 38],
                            16: [2, 38],
                            24: [2, 38],
                            26: [2, 38],
                            28: [2, 38],
                            29: [2, 38],
                            31: [2, 38],
                            32: [2, 38],
                            34: [2, 38]
                        }, {
                            12: [1, 30]
                        }, {
                            30: 32,
                            35: 31,
                            42: [1, 33],
                            43: [1, 34],
                            50: [1, 26],
                            53: 24
                        }, {
                            17: 35,
                            30: 22,
                            41: 23,
                            50: [1, 26],
                            52: [1, 25],
                            53: 24
                        }, {
                            17: 36,
                            30: 22,
                            41: 23,
                            50: [1, 26],
                            52: [1, 25],
                            53: 24
                        }, {
                            17: 37,
                            30: 22,
                            41: 23,
                            50: [1, 26],
                            52: [1, 25],
                            53: 24
                        }, {
                            25: [1, 38]
                        }, {
                            18: [2, 48],
                            25: [2, 48],
                            33: [2, 48],
                            39: 39,
                            42: [2, 48],
                            43: [2, 48],
                            44: [2, 48],
                            45: [2, 48],
                            46: [2, 48],
                            50: [2, 48],
                            52: [2, 48]
                        }, {
                            18: [2, 22],
                            25: [2, 22],
                            33: [2, 22],
                            46: [2, 22]
                        }, {
                            18: [2, 35],
                            25: [2, 35],
                            33: [2, 35],
                            42: [2, 35],
                            43: [2, 35],
                            44: [2, 35],
                            45: [2, 35],
                            46: [2, 35],
                            50: [2, 35],
                            52: [2, 35],
                            54: [1, 40]
                        }, {
                            30: 41,
                            50: [1, 26],
                            53: 24
                        }, {
                            18: [2, 37],
                            25: [2, 37],
                            33: [2, 37],
                            42: [2, 37],
                            43: [2, 37],
                            44: [2, 37],
                            45: [2, 37],
                            46: [2, 37],
                            50: [2, 37],
                            52: [2, 37],
                            54: [2, 37]
                        }, {
                            33: [1, 42]
                        }, {
                            20: 43,
                            27: 44,
                            28: [1, 45],
                            29: [2, 40]
                        }, {
                            23: 46,
                            27: 47,
                            28: [1, 45],
                            29: [2, 42]
                        }, {
                            15: [1, 48]
                        }, {
                            25: [2, 46],
                            30: 51,
                            36: 49,
                            38: 50,
                            41: 55,
                            42: [1, 52],
                            43: [1, 53],
                            44: [1, 54],
                            45: [1, 56],
                            47: 57,
                            48: 58,
                            49: 60,
                            50: [1, 59],
                            52: [1, 25],
                            53: 24
                        }, {
                            25: [2, 31],
                            42: [2, 31],
                            43: [2, 31],
                            44: [2, 31],
                            45: [2, 31],
                            50: [2, 31],
                            52: [2, 31]
                        }, {
                            25: [2, 32],
                            42: [2, 32],
                            43: [2, 32],
                            44: [2, 32],
                            45: [2, 32],
                            50: [2, 32],
                            52: [2, 32]
                        }, {
                            25: [2, 33],
                            42: [2, 33],
                            43: [2, 33],
                            44: [2, 33],
                            45: [2, 33],
                            50: [2, 33],
                            52: [2, 33]
                        }, {
                            25: [1, 61]
                        }, {
                            25: [1, 62]
                        }, {
                            18: [1, 63]
                        }, {
                            5: [2, 17],
                            12: [2, 17],
                            13: [2, 17],
                            16: [2, 17],
                            24: [2, 17],
                            26: [2, 17],
                            28: [2, 17],
                            29: [2, 17],
                            31: [2, 17],
                            32: [2, 17],
                            34: [2, 17]
                        }, {
                            18: [2, 50],
                            25: [2, 50],
                            30: 51,
                            33: [2, 50],
                            36: 65,
                            40: 64,
                            41: 55,
                            42: [1, 52],
                            43: [1, 53],
                            44: [1, 54],
                            45: [1, 56],
                            46: [2, 50],
                            47: 66,
                            48: 58,
                            49: 60,
                            50: [1, 59],
                            52: [1, 25],
                            53: 24
                        }, {
                            50: [1, 67]
                        }, {
                            18: [2, 34],
                            25: [2, 34],
                            33: [2, 34],
                            42: [2, 34],
                            43: [2, 34],
                            44: [2, 34],
                            45: [2, 34],
                            46: [2, 34],
                            50: [2, 34],
                            52: [2, 34]
                        }, {
                            5: [2, 18],
                            12: [2, 18],
                            13: [2, 18],
                            16: [2, 18],
                            24: [2, 18],
                            26: [2, 18],
                            28: [2, 18],
                            29: [2, 18],
                            31: [2, 18],
                            32: [2, 18],
                            34: [2, 18]
                        }, {
                            21: 68,
                            29: [1, 69]
                        }, {
                            29: [2, 41]
                        }, {
                            4: 70,
                            6: 3,
                            12: [2, 38],
                            13: [2, 38],
                            16: [2, 38],
                            24: [2, 38],
                            26: [2, 38],
                            29: [2, 38],
                            31: [2, 38],
                            32: [2, 38],
                            34: [2, 38]
                        }, {
                            21: 71,
                            29: [1, 69]
                        }, {
                            29: [2, 43]
                        }, {
                            5: [2, 9],
                            12: [2, 9],
                            13: [2, 9],
                            16: [2, 9],
                            24: [2, 9],
                            26: [2, 9],
                            28: [2, 9],
                            29: [2, 9],
                            31: [2, 9],
                            32: [2, 9],
                            34: [2, 9]
                        }, {
                            25: [2, 44],
                            37: 72,
                            47: 73,
                            48: 58,
                            49: 60,
                            50: [1, 74]
                        }, {
                            25: [1, 75]
                        }, {
                            18: [2, 23],
                            25: [2, 23],
                            33: [2, 23],
                            42: [2, 23],
                            43: [2, 23],
                            44: [2, 23],
                            45: [2, 23],
                            46: [2, 23],
                            50: [2, 23],
                            52: [2, 23]
                        }, {
                            18: [2, 24],
                            25: [2, 24],
                            33: [2, 24],
                            42: [2, 24],
                            43: [2, 24],
                            44: [2, 24],
                            45: [2, 24],
                            46: [2, 24],
                            50: [2, 24],
                            52: [2, 24]
                        }, {
                            18: [2, 25],
                            25: [2, 25],
                            33: [2, 25],
                            42: [2, 25],
                            43: [2, 25],
                            44: [2, 25],
                            45: [2, 25],
                            46: [2, 25],
                            50: [2, 25],
                            52: [2, 25]
                        }, {
                            18: [2, 26],
                            25: [2, 26],
                            33: [2, 26],
                            42: [2, 26],
                            43: [2, 26],
                            44: [2, 26],
                            45: [2, 26],
                            46: [2, 26],
                            50: [2, 26],
                            52: [2, 26]
                        }, {
                            18: [2, 27],
                            25: [2, 27],
                            33: [2, 27],
                            42: [2, 27],
                            43: [2, 27],
                            44: [2, 27],
                            45: [2, 27],
                            46: [2, 27],
                            50: [2, 27],
                            52: [2, 27]
                        }, {
                            17: 76,
                            30: 22,
                            41: 23,
                            50: [1, 26],
                            52: [1, 25],
                            53: 24
                        }, {
                            25: [2, 47]
                        }, {
                            18: [2, 29],
                            25: [2, 29],
                            33: [2, 29],
                            46: [2, 29],
                            49: 77,
                            50: [1, 74]
                        }, {
                            18: [2, 37],
                            25: [2, 37],
                            33: [2, 37],
                            42: [2, 37],
                            43: [2, 37],
                            44: [2, 37],
                            45: [2, 37],
                            46: [2, 37],
                            50: [2, 37],
                            51: [1, 78],
                            52: [2, 37],
                            54: [2, 37]
                        }, {
                            18: [2, 52],
                            25: [2, 52],
                            33: [2, 52],
                            46: [2, 52],
                            50: [2, 52]
                        }, {
                            12: [2, 13],
                            13: [2, 13],
                            16: [2, 13],
                            24: [2, 13],
                            26: [2, 13],
                            28: [2, 13],
                            29: [2, 13],
                            31: [2, 13],
                            32: [2, 13],
                            34: [2, 13]
                        }, {
                            12: [2, 14],
                            13: [2, 14],
                            16: [2, 14],
                            24: [2, 14],
                            26: [2, 14],
                            28: [2, 14],
                            29: [2, 14],
                            31: [2, 14],
                            32: [2, 14],
                            34: [2, 14]
                        }, {
                            12: [2, 10]
                        }, {
                            18: [2, 21],
                            25: [2, 21],
                            33: [2, 21],
                            46: [2, 21]
                        }, {
                            18: [2, 49],
                            25: [2, 49],
                            33: [2, 49],
                            42: [2, 49],
                            43: [2, 49],
                            44: [2, 49],
                            45: [2, 49],
                            46: [2, 49],
                            50: [2, 49],
                            52: [2, 49]
                        }, {
                            18: [2, 51],
                            25: [2, 51],
                            33: [2, 51],
                            46: [2, 51]
                        }, {
                            18: [2, 36],
                            25: [2, 36],
                            33: [2, 36],
                            42: [2, 36],
                            43: [2, 36],
                            44: [2, 36],
                            45: [2, 36],
                            46: [2, 36],
                            50: [2, 36],
                            52: [2, 36],
                            54: [2, 36]
                        }, {
                            5: [2, 11],
                            12: [2, 11],
                            13: [2, 11],
                            16: [2, 11],
                            24: [2, 11],
                            26: [2, 11],
                            28: [2, 11],
                            29: [2, 11],
                            31: [2, 11],
                            32: [2, 11],
                            34: [2, 11]
                        }, {
                            30: 79,
                            50: [1, 26],
                            53: 24
                        }, {
                            29: [2, 15]
                        }, {
                            5: [2, 12],
                            12: [2, 12],
                            13: [2, 12],
                            16: [2, 12],
                            24: [2, 12],
                            26: [2, 12],
                            28: [2, 12],
                            29: [2, 12],
                            31: [2, 12],
                            32: [2, 12],
                            34: [2, 12]
                        }, {
                            25: [1, 80]
                        }, {
                            25: [2, 45]
                        }, {
                            51: [1, 78]
                        }, {
                            5: [2, 20],
                            12: [2, 20],
                            13: [2, 20],
                            16: [2, 20],
                            24: [2, 20],
                            26: [2, 20],
                            28: [2, 20],
                            29: [2, 20],
                            31: [2, 20],
                            32: [2, 20],
                            34: [2, 20]
                        }, {
                            46: [1, 81]
                        }, {
                            18: [2, 53],
                            25: [2, 53],
                            33: [2, 53],
                            46: [2, 53],
                            50: [2, 53]
                        }, {
                            30: 51,
                            36: 82,
                            41: 55,
                            42: [1, 52],
                            43: [1, 53],
                            44: [1, 54],
                            45: [1, 56],
                            50: [1, 26],
                            52: [1, 25],
                            53: 24
                        }, {
                            25: [1, 83]
                        }, {
                            5: [2, 19],
                            12: [2, 19],
                            13: [2, 19],
                            16: [2, 19],
                            24: [2, 19],
                            26: [2, 19],
                            28: [2, 19],
                            29: [2, 19],
                            31: [2, 19],
                            32: [2, 19],
                            34: [2, 19]
                        }, {
                            18: [2, 28],
                            25: [2, 28],
                            33: [2, 28],
                            42: [2, 28],
                            43: [2, 28],
                            44: [2, 28],
                            45: [2, 28],
                            46: [2, 28],
                            50: [2, 28],
                            52: [2, 28]
                        }, {
                            18: [2, 30],
                            25: [2, 30],
                            33: [2, 30],
                            46: [2, 30],
                            50: [2, 30]
                        }, {
                            5: [2, 16],
                            12: [2, 16],
                            13: [2, 16],
                            16: [2, 16],
                            24: [2, 16],
                            26: [2, 16],
                            28: [2, 16],
                            29: [2, 16],
                            31: [2, 16],
                            32: [2, 16],
                            34: [2, 16]
                        }],
                        defaultActions: {
                            4: [2, 1],
                            44: [2, 41],
                            47: [2, 43],
                            57: [2, 47],
                            63: [2, 10],
                            70: [2, 15],
                            73: [2, 45]
                        },
                        parseError: function(e) {
                            throw new Error(e)
                        },
                        parse: function(e) {
                            function t() {
                                var e;
                                return e = n.lexer.lex() || 1, "number" != typeof e && (e = n.symbols_[e] || e), e
                            }
                            var n = this,
                                r = [0],
                                i = [null],
                                s = [],
                                o = this.table,
                                u = "",
                                a = 0,
                                f = 0,
                                l = 0;
                            this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                            var c = this.lexer.yylloc;
                            s.push(c);
                            var h = this.lexer.options && this.lexer.options.ranges;
                            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                            for (var p, d, v, m, g, y, b, w, E, S = {};;) {
                                if (v = r[r.length - 1], this.defaultActions[v] ? m = this.defaultActions[v] : ((null === p || "undefined" == typeof p) && (p = t()), m = o[v] && o[v][p]), "undefined" == typeof m || !m.length || !m[0]) {
                                    var x = "";
                                    if (!l) {
                                        E = [];
                                        for (y in o[v]) this.terminals_[y] && y > 2 && E.push("'" + this.terminals_[y] + "'");
                                        x = this.lexer.showPosition ? "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + E.join(", ") + ", got '" + (this.terminals_[p] || p) + "'" : "Parse error on line " + (a + 1) + ": Unexpected " + (1 == p ? "end of input" : "'" + (this.terminals_[p] || p) + "'"), this.parseError(x, {
                                            text: this.lexer.match,
                                            token: this.terminals_[p] || p,
                                            line: this.lexer.yylineno,
                                            loc: c,
                                            expected: E
                                        })
                                    }
                                }
                                if (m[0] instanceof Array && m.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + v + ", token: " + p);
                                switch (m[0]) {
                                    case 1:
                                        r.push(p), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(m[1]), p = null, d ? (p = d, d = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, c = this.lexer.yylloc, l > 0 && l--);
                                        break;
                                    case 2:
                                        if (b = this.productions_[m[1]][1], S.$ = i[i.length - b], S._$ = {
                                                first_line: s[s.length - (b || 1)].first_line,
                                                last_line: s[s.length - 1].last_line,
                                                first_column: s[s.length - (b || 1)].first_column,
                                                last_column: s[s.length - 1].last_column
                                            }, h && (S._$.range = [s[s.length - (b || 1)].range[0], s[s.length - 1].range[1]]), g = this.performAction.call(S, u, f, a, this.yy, m[1], i, s), "undefined" != typeof g) return g;
                                        b && (r = r.slice(0, -1 * b * 2), i = i.slice(0, -1 * b), s = s.slice(0, -1 * b)), r.push(this.productions_[m[1]][0]), i.push(S.$), s.push(S._$), w = o[r[r.length - 2]][r[r.length - 1]], r.push(w);
                                        break;
                                    case 3:
                                        return !0
                                }
                            }
                            return !0
                        }
                    },
                    n = function() {
                        var e = {
                            EOF: 1,
                            parseError: function(e, t) {
                                if (!this.yy.parser) throw new Error(e);
                                this.yy.parser.parseError(e, t)
                            },
                            setInput: function(e) {
                                return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                            },
                            input: function() {
                                var e = this._input[0];
                                this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
                                var t = e.match(/(?:\r\n?|\n).*/g);
                                return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
                            },
                            unput: function(e) {
                                var t = e.length,
                                    n = e.split(/(?:\r\n?|\n)/g);
                                this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
                                var r = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                                var i = this.yylloc.range;
                                return this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
                                }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this
                            },
                            more: function() {
                                return this._more = !0, this
                            },
                            less: function(e) {
                                this.unput(this.match.slice(e))
                            },
                            pastInput: function() {
                                var e = this.matched.substr(0, this.matched.length - this.match.length);
                                return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function() {
                                var e = this.match;
                                return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function() {
                                var e = this.pastInput(),
                                    t = (new Array(e.length + 1)).join("-");
                                return e + this.upcomingInput() + "\n" + t + "^"
                            },
                            next: function() {
                                if (this.done) return this.EOF;
                                this._input || (this.done = !0);
                                var e, t, n, r, i;
                                this._more || (this.yytext = "", this.match = "");
                                for (var s = this._currentRules(), o = 0; o < s.length && (n = this._input.match(this.rules[s[o]]), !n || t && !(n[0].length > t[0].length) || (t = n, r = o, this.options.flex)); o++);
                                return t ? (i = t[0].match(/(?:\r\n?|\n).*/g), i && (this.yylineno += i.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                                }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, s[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), e ? e : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function() {
                                var e = this.next();
                                return "undefined" != typeof e ? e : this.lex()
                            },
                            begin: function(e) {
                                this.conditionStack.push(e)
                            },
                            popState: function() {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function() {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            topState: function() {
                                return this.conditionStack[this.conditionStack.length - 2]
                            },
                            pushState: function(e) {
                                this.begin(e)
                            }
                        };
                        return e.options = {}, e.performAction = function(e, t, n, r) {
                            function i(e, n) {
                                return t.yytext = t.yytext.substr(e, t.yyleng - n)
                            }
                            switch (n) {
                                case 0:
                                    if ("\\\\" === t.yytext.slice(-2) ? (i(0, 1), this.begin("mu")) : "\\" === t.yytext.slice(-1) ? (i(0, 1), this.begin("emu")) : this.begin("mu"), t.yytext) return 12;
                                    break;
                                case 1:
                                    return 12;
                                case 2:
                                    return this.popState(), 12;
                                case 3:
                                    return t.yytext = t.yytext.substr(5, t.yyleng - 9), this.popState(), 15;
                                case 4:
                                    return 12;
                                case 5:
                                    return i(0, 4), this.popState(), 13;
                                case 6:
                                    return 45;
                                case 7:
                                    return 46;
                                case 8:
                                    return 16;
                                case 9:
                                    return this.popState(), this.begin("raw"), 18;
                                case 10:
                                    return 34;
                                case 11:
                                    return 24;
                                case 12:
                                    return 29;
                                case 13:
                                    return this.popState(), 28;
                                case 14:
                                    return this.popState(), 28;
                                case 15:
                                    return 26;
                                case 16:
                                    return 26;
                                case 17:
                                    return 32;
                                case 18:
                                    return 31;
                                case 19:
                                    this.popState(), this.begin("com");
                                    break;
                                case 20:
                                    return i(3, 5), this.popState(), 13;
                                case 21:
                                    return 31;
                                case 22:
                                    return 51;
                                case 23:
                                    return 50;
                                case 24:
                                    return 50;
                                case 25:
                                    return 54;
                                case 26:
                                    break;
                                case 27:
                                    return this.popState(), 33;
                                case 28:
                                    return this.popState(), 25;
                                case 29:
                                    return t.yytext = i(1, 2).replace(/\\"/g, '"'), 42;
                                case 30:
                                    return t.yytext = i(1, 2).replace(/\\'/g, "'"), 42;
                                case 31:
                                    return 52;
                                case 32:
                                    return 44;
                                case 33:
                                    return 44;
                                case 34:
                                    return 43;
                                case 35:
                                    return 50;
                                case 36:
                                    return t.yytext = i(1, 2), 50;
                                case 37:
                                    return "INVALID";
                                case 38:
                                    return 5
                            }
                        }, e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {
                            mu: {
                                rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                                inclusive: !1
                            },
                            emu: {
                                rules: [2],
                                inclusive: !1
                            },
                            com: {
                                rules: [5],
                                inclusive: !1
                            },
                            raw: {
                                rules: [3, 4],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [0, 1, 38],
                                inclusive: !0
                            }
                        }, e
                    }();
                return t.lexer = n, e.prototype = t, t.Parser = e, new e
            }();
            return e = t
        }(),
        a = function(e) {
            "use strict";

            function t(e, t) {
                return {
                    left: "~" === e.charAt(2),
                    right: "~" === t.charAt(t.length - 3)
                }
            }

            function n(e, t, n, r, a, l) {
                if (e.sexpr.id.original !== r.path.original) throw new f(e.sexpr.id.original + " doesn't match " + r.path.original, e);
                var c = n && n.program,
                    h = {
                        left: e.strip.left,
                        right: r.strip.right,
                        openStandalone: s(t.statements),
                        closeStandalone: i((c || t).statements)
                    };
                if (e.strip.right && o(t.statements, null, !0), c) {
                    var p = n.strip;
                    p.left && u(t.statements, null, !0), p.right && o(c.statements, null, !0), r.strip.left && u(c.statements, null, !0), i(t.statements) && s(c.statements) && (u(t.statements), o(c.statements))
                } else r.strip.left && u(t.statements, null, !0);
                return a ? new this.BlockNode(e, c, t, h, l) : new this.BlockNode(e, t, c, h, l)
            }

            function r(e, t) {
                for (var n = 0, r = e.length; r > n; n++) {
                    var a = e[n],
                        f = a.strip;
                    if (f) {
                        var l = i(e, n, t, "partial" === a.type),
                            c = s(e, n, t),
                            h = f.openStandalone && l,
                            p = f.closeStandalone && c,
                            d = f.inlineStandalone && l && c;
                        f.right && o(e, n, !0), f.left && u(e, n, !0), d && (o(e, n), u(e, n) && "partial" === a.type && (a.indent = /([ \t]+$)/.exec(e[n - 1].original) ? RegExp.$1 : "")), h && (o((a.program || a.inverse).statements), u(e, n)), p && (o(e, n), u((a.inverse || a.program).statements))
                    }
                }
                return e
            }

            function i(e, t, n) {
                void 0 === t && (t = e.length);
                var r = e[t - 1],
                    i = e[t - 2];
                return r ? "content" === r.type ? (i || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(r.original) : void 0 : n
            }

            function s(e, t, n) {
                void 0 === t && (t = -1);
                var r = e[t + 1],
                    i = e[t + 2];
                return r ? "content" === r.type ? (i || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(r.original) : void 0 : n
            }

            function o(e, t, n) {
                var r = e[null == t ? 0 : t + 1];
                if (r && "content" === r.type && (n || !r.rightStripped)) {
                    var i = r.string;
                    r.string = r.string.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, ""), r.rightStripped = r.string !== i
                }
            }

            function u(e, t, n) {
                var r = e[null == t ? e.length - 1 : t - 1];
                if (r && "content" === r.type && (n || !r.leftStripped)) {
                    var i = r.string;
                    return r.string = r.string.replace(n ? /\s+$/ : /[ \t]+$/, ""), r.leftStripped = r.string !== i, r.leftStripped
                }
            }
            var a = {},
                f = e;
            return a.stripFlags = t, a.prepareBlock = n, a.prepareProgram = r, a
        }(n),
        f = function(e, t, n, r) {
            "use strict";

            function i(e) {
                return e.constructor === u.ProgramNode ? e : (o.yy = l, o.parse(e))
            }
            var s = {},
                o = e,
                u = t,
                a = n,
                f = r.extend;
            s.parser = o;
            var l = {};
            return f(l, a, u), s.parse = i, s
        }(u, o, a, t),
        l = function(e, t) {
            "use strict";

            function n() {}

            function r(e, t, n) {
                if (null == e || "string" != typeof e && e.constructor !== n.AST.ProgramNode) throw new u("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
                t = t || {}, "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
                var r = n.parse(e),
                    i = (new n.Compiler).compile(r, t);
                return (new n.JavaScriptCompiler).compile(i, t)
            }

            function i(e, t, n) {
                function r() {
                    var r = n.parse(e),
                        i = (new n.Compiler).compile(r, t),
                        s = (new n.JavaScriptCompiler).compile(i, t, void 0, !0);
                    return n.template(s)
                }
                if (null == e || "string" != typeof e && e.constructor !== n.AST.ProgramNode) throw new u("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
                t = t || {}, "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
                var i, s = function(e, t) {
                    return i || (i = r()), i.call(this, e, t)
                };
                return s._setup = function(e) {
                    return i || (i = r()), i._setup(e)
                }, s._child = function(e, t, n) {
                    return i || (i = r()), i._child(e, t, n)
                }, s
            }

            function s(e, t) {
                if (e === t) return !0;
                if (a(e) && a(t) && e.length === t.length) {
                    for (var n = 0; n < e.length; n++)
                        if (!s(e[n], t[n])) return !1;
                    return !0
                }
            }
            var o = {},
                u = e,
                a = t.isArray,
                f = [].slice;
            return o.Compiler = n, n.prototype = {
                compiler: n,
                equals: function(e) {
                    var t = this.opcodes.length;
                    if (e.opcodes.length !== t) return !1;
                    for (var n = 0; t > n; n++) {
                        var r = this.opcodes[n],
                            i = e.opcodes[n];
                        if (r.opcode !== i.opcode || !s(r.args, i.args)) return !1
                    }
                    for (t = this.children.length, n = 0; t > n; n++)
                        if (!this.children[n].equals(e.children[n])) return !1;
                    return !0
                },
                guid: 0,
                compile: function(e, t) {
                    this.opcodes = [], this.children = [], this.depths = {
                        list: []
                    }, this.options = t, this.stringParams = t.stringParams, this.trackIds = t.trackIds;
                    var n = this.options.knownHelpers;
                    if (this.options.knownHelpers = {
                            helperMissing: !0,
                            blockHelperMissing: !0,
                            each: !0,
                            "if": !0,
                            unless: !0,
                            "with": !0,
                            log: !0,
                            lookup: !0
                        }, n)
                        for (var r in n) this.options.knownHelpers[r] = n[r];
                    return this.accept(e)
                },
                accept: function(e) {
                    return this[e.type](e)
                },
                program: function(e) {
                    for (var t = e.statements, n = 0, r = t.length; r > n; n++) this.accept(t[n]);
                    return this.isSimple = 1 === r, this.depths.list = this.depths.list.sort(function(e, t) {
                        return e - t
                    }), this
                },
                compileProgram: function(e) {
                    var t, n = (new this.compiler).compile(e, this.options),
                        r = this.guid++;
                    this.usePartial = this.usePartial || n.usePartial, this.children[r] = n;
                    for (var i = 0, s = n.depths.list.length; s > i; i++) t = n.depths.list[i], 2 > t || this.addDepth(t - 1);
                    return r
                },
                block: function(e) {
                    var t = e.mustache,
                        n = e.program,
                        r = e.inverse;
                    n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
                    var i = t.sexpr,
                        s = this.classifySexpr(i);
                    "helper" === s ? this.helperSexpr(i, n, r) : "simple" === s ? (this.simpleSexpr(i), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("blockValue", i.id.original)) : (this.ambiguousSexpr(i, n, r), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                },
                hash: function(e) {
                    var t, n, r = e.pairs;
                    for (this.opcode("pushHash"), t = 0, n = r.length; n > t; t++) this.pushParam(r[t][1]);
                    for (; t--;) this.opcode("assignToHash", r[t][0]);
                    this.opcode("popHash")
                },
                partial: function(e) {
                    var t = e.partialName;
                    this.usePartial = !0, e.hash ? this.accept(e.hash) : this.opcode("push", "undefined"), e.context ? this.accept(e.context) : (this.opcode("getContext", 0), this.opcode("pushContext")), this.opcode("invokePartial", t.name, e.indent || ""), this.opcode("append")
                },
                content: function(e) {
                    e.string && this.opcode("appendContent", e.string)
                },
                mustache: function(e) {
                    this.sexpr(e.sexpr), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
                },
                ambiguousSexpr: function(e, t, n) {
                    var r = e.id,
                        i = r.parts[0],
                        s = null != t || null != n;
                    this.opcode("getContext", r.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.ID(r), this.opcode("invokeAmbiguous", i, s)
                },
                simpleSexpr: function(e) {
                    var t = e.id;
                    "DATA" === t.type ? this.DATA(t) : t.parts.length ? this.ID(t) : (this.addDepth(t.depth), this.opcode("getContext", t.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
                },
                helperSexpr: function(e, t, n) {
                    var r = this.setupFullMustacheParams(e, t, n),
                        i = e.id,
                        s = i.parts[0];
                    if (this.options.knownHelpers[s]) this.opcode("invokeKnownHelper", r.length, s);
                    else {
                        if (this.options.knownHelpersOnly) throw new u("You specified knownHelpersOnly, but used the unknown helper " + s, e);
                        i.falsy = !0, this.ID(i), this.opcode("invokeHelper", r.length, i.original, i.isSimple)
                    }
                },
                sexpr: function(e) {
                    var t = this.classifySexpr(e);
                    "simple" === t ? this.simpleSexpr(e) : "helper" === t ? this.helperSexpr(e) : this.ambiguousSexpr(e)
                },
                ID: function(e) {
                    this.addDepth(e.depth), this.opcode("getContext", e.depth);
                    var t = e.parts[0];
                    t ? this.opcode("lookupOnContext", e.parts, e.falsy, e.isScoped) : this.opcode("pushContext")
                },
                DATA: function(e) {
                    this.options.data = !0, this.opcode("lookupData", e.id.depth, e.id.parts)
                },
                STRING: function(e) {
                    this.opcode("pushString", e.string)
                },
                NUMBER: function(e) {
                    this.opcode("pushLiteral", e.number)
                },
                BOOLEAN: function(e) {
                    this.opcode("pushLiteral", e.bool)
                },
                comment: function() {},
                opcode: function(e) {
                    this.opcodes.push({
                        opcode: e,
                        args: f.call(arguments, 1)
                    })
                },
                addDepth: function(e) {
                    0 !== e && (this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e)))
                },
                classifySexpr: function(e) {
                    var t = e.isHelper,
                        n = e.eligibleHelper,
                        r = this.options;
                    if (n && !t) {
                        var i = e.id.parts[0];
                        r.knownHelpers[i] ? t = !0 : r.knownHelpersOnly && (n = !1)
                    }
                    return t ? "helper" : n ? "ambiguous" : "simple"
                },
                pushParams: function(e) {
                    for (var t = 0, n = e.length; n > t; t++) this.pushParam(e[t])
                },
                pushParam: function(e) {
                    this.stringParams ? (e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", e.stringModeValue, e.type), "sexpr" === e.type && this.sexpr(e)) : (this.trackIds && this.opcode("pushId", e.type, e.idName || e.stringModeValue), this.accept(e))
                },
                setupFullMustacheParams: function(e, t, n) {
                    var r = e.params;
                    return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), r
                }
            }, o.precompile = r, o.compile = i, o
        }(n, t),
        c = function(e, t) {
            "use strict";

            function n(e) {
                this.value = e
            }

            function r() {}
            var i, s = e.COMPILER_REVISION,
                o = e.REVISION_CHANGES,
                u = t;
            r.prototype = {
                nameLookup: function(e, t) {
                    return r.isValidJavaScriptVariableName(t) ? e + "." + t : e + "['" + t + "']"
                },
                depthedLookup: function(e) {
                    return this.aliases.lookup = "this.lookup", 'lookup(depths, "' + e + '")'
                },
                compilerInfo: function() {
                    var e = s,
                        t = o[e];
                    return [e, t]
                },
                appendToBuffer: function(e) {
                    return this.environment.isSimple ? "return " + e + ";" : {
                        appendToBuffer: !0,
                        content: e,
                        toString: function() {
                            return "buffer += " + e + ";"
                        }
                    }
                },
                initializeBuffer: function() {
                    return this.quotedString("")
                },
                namespace: "Handlebars",
                compile: function(e, t, n, r) {
                    this.environment = e, this.options = t, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !r, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                        programs: [],
                        environments: []
                    }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                        list: []
                    }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(e, t), this.useDepths = this.useDepths || e.depths.list.length || this.options.compat;
                    var i, s, o, a = e.opcodes;
                    for (s = 0, o = a.length; o > s; s++) i = a[s], this[i.opcode].apply(this, i.args);
                    if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new u("Compile completed with content left on stack");
                    var f = this.createFunctionContext(r);
                    if (this.isChild) return f;
                    var l = {
                            compiler: this.compilerInfo(),
                            main: f
                        },
                        c = this.context.programs;
                    for (s = 0, o = c.length; o > s; s++) c[s] && (l[s] = c[s]);
                    return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), this.useDepths && (l.useDepths = !0), this.options.compat && (l.compat = !0), r || (l.compiler = JSON.stringify(l.compiler), l = this.objectLiteral(l)), l
                },
                preamble: function() {
                    this.lastContext = 0, this.source = []
                },
                createFunctionContext: function(e) {
                    var t = "",
                        n = this.stackVars.concat(this.registers.list);
                    n.length > 0 && (t += ", " + n.join(", "));
                    for (var r in this.aliases) this.aliases.hasOwnProperty(r) && (t += ", " + r + "=" + this.aliases[r]);
                    var i = ["depth0", "helpers", "partials", "data"];
                    this.useDepths && i.push("depths");
                    var s = this.mergeSource(t);
                    return e ? (i.push(s), Function.apply(this, i)) : "function(" + i.join(",") + ") {\n  " + s + "}"
                },
                mergeSource: function(e) {
                    for (var t, n, r = "", i = !this.forceBuffer, s = 0, o = this.source.length; o > s; s++) {
                        var u = this.source[s];
                        u.appendToBuffer ? t = t ? t + "\n    + " + u.content : u.content : (t && (r ? r += "buffer += " + t + ";\n  " : (n = !0, r = t + ";\n  "), t = void 0), r += u + "\n  ", this.environment.isSimple || (i = !1))
                    }
                    return i ? (t || !r) && (r += "return " + (t || '""') + ";\n") : (e += ", buffer = " + (n ? "" : this.initializeBuffer()), r += t ? "return buffer + " + t + ";\n" : "return buffer;\n"), e && (r = "var " + e.substring(2) + (n ? "" : ";\n  ") + r), r
                },
                blockValue: function(e) {
                    this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                    var t = [this.contextName(0)];
                    this.setupParams(e, 0, t);
                    var n = this.popStack();
                    t.splice(1, 0, n), this.push("blockHelperMissing.call(" + t.join(", ") + ")")
                },
                ambiguousBlockValue: function() {
                    this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                    var e = [this.contextName(0)];
                    this.setupParams("", 0, e, !0), this.flushInline();
                    var t = this.topStack();
                    e.splice(1, 0, t), this.pushSource("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
                },
                appendContent: function(e) {
                    this.pendingContent && (e = this.pendingContent + e), this.pendingContent = e
                },
                append: function() {
                    this.flushInline();
                    var e = this.popStack();
                    this.pushSource("if (" + e + " != null) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
                },
                appendEscaped: function() {
                    this.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
                },
                getContext: function(e) {
                    this.lastContext = e
                },
                pushContext: function() {
                    this.pushStackLiteral(this.contextName(this.lastContext))
                },
                lookupOnContext: function(e, t, n) {
                    var r = 0,
                        i = e.length;
                    for (n || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(e[r++])); i > r; r++) this.replaceStack(function(n) {
                        var i = this.nameLookup(n, e[r], "context");
                        return t ? " && " + i : " != null ? " + i + " : " + n
                    })
                },
                lookupData: function(e, t) {
                    e ? this.pushStackLiteral("this.data(data, " + e + ")") : this.pushStackLiteral("data");
                    for (var n = t.length, r = 0; n > r; r++) this.replaceStack(function(e) {
                        return " && " + this.nameLookup(e, t[r], "data")
                    })
                },
                resolvePossibleLambda: function() {
                    this.aliases.lambda = "this.lambda", this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
                },
                pushStringParam: function(e, t) {
                    this.pushContext(), this.pushString(t), "sexpr" !== t && ("string" == typeof e ? this.pushString(e) : this.pushStackLiteral(e))
                },
                emptyHash: function() {
                    this.pushStackLiteral("{}"), this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}"))
                },
                pushHash: function() {
                    this.hash && this.hashes.push(this.hash), this.hash = {
                        values: [],
                        types: [],
                        contexts: [],
                        ids: []
                    }
                },
                popHash: function() {
                    var e = this.hash;
                    this.hash = this.hashes.pop(), this.trackIds && this.push("{" + e.ids.join(",") + "}"), this.stringParams && (this.push("{" + e.contexts.join(",") + "}"), this.push("{" + e.types.join(",") + "}")), this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
                },
                pushString: function(e) {
                    this.pushStackLiteral(this.quotedString(e))
                },
                push: function(e) {
                    return this.inlineStack.push(e), e
                },
                pushLiteral: function(e) {
                    this.pushStackLiteral(e)
                },
                pushProgram: function(e) {
                    null != e ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
                },
                invokeHelper: function(e, t, n) {
                    this.aliases.helperMissing = "helpers.helperMissing";
                    var r = this.popStack(),
                        i = this.setupHelper(e, t),
                        s = (n ? i.name + " || " : "") + r + " || helperMissing";
                    this.push("((" + s + ").call(" + i.callParams + "))")
                },
                invokeKnownHelper: function(e, t) {
                    var n = this.setupHelper(e, t);
                    this.push(n.name + ".call(" + n.callParams + ")")
                },
                invokeAmbiguous: function(e, t) {
                    this.aliases.functionType = '"function"', this.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
                    var n = this.popStack();
                    this.emptyHash();
                    var r = this.setupHelper(0, e, t),
                        i = this.lastHelper = this.nameLookup("helpers", e, "helper");
                    this.push("((helper = (helper = " + i + " || " + n + ") != null ? helper : helperMissing" + (r.paramsInit ? "),(" + r.paramsInit : "") + "),(typeof helper === functionType ? helper.call(" + r.callParams + ") : helper))")
                },
                invokePartial: function(e, t) {
                    var n = [this.nameLookup("partials", e, "partial"), "'" + t + "'", "'" + e + "'", this.popStack(), this.popStack(), "helpers", "partials"];
                    this.options.data ? n.push("data") : this.options.compat && n.push("undefined"), this.options.compat && n.push("depths"), this.push("this.invokePartial(" + n.join(", ") + ")")
                },
                assignToHash: function(e) {
                    var t, n, r, i = this.popStack();
                    this.trackIds && (r = this.popStack()), this.stringParams && (n = this.popStack(), t = this.popStack());
                    var s = this.hash;
                    t && s.contexts.push("'" + e + "': " + t), n && s.types.push("'" + e + "': " + n), r && s.ids.push("'" + e + "': " + r), s.values.push("'" + e + "': (" + i + ")")
                },
                pushId: function(e, t) {
                    "ID" === e || "DATA" === e ? this.pushString(t) : "sexpr" === e ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
                },
                compiler: r,
                compileChildren: function(e, t) {
                    for (var n, r, i = e.children, s = 0, o = i.length; o > s; s++) {
                        n = i[s], r = new this.compiler;
                        var u = this.matchExistingProgram(n);
                        null == u ? (this.context.programs.push(""), u = this.context.programs.length, n.index = u, n.name = "program" + u, this.context.programs[u] = r.compile(n, t, this.context, !this.precompile), this.context.environments[u] = n, this.useDepths = this.useDepths || r.useDepths) : (n.index = u, n.name = "program" + u)
                    }
                },
                matchExistingProgram: function(e) {
                    for (var t = 0, n = this.context.environments.length; n > t; t++) {
                        var r = this.context.environments[t];
                        if (r && r.equals(e)) return t
                    }
                },
                programExpression: function(e) {
                    var t = this.environment.children[e],
                        n = (t.depths.list, this.useDepths),
                        r = [t.index, "data"];
                    return n && r.push("depths"), "this.program(" + r.join(", ") + ")"
                },
                useRegister: function(e) {
                    this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
                },
                pushStackLiteral: function(e) {
                    return this.push(new n(e))
                },
                pushSource: function(e) {
                    this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), e && this.source.push(e)
                },
                pushStack: function(e) {
                    this.flushInline();
                    var t = this.incrStack();
                    return this.pushSource(t + " = " + e + ";"), this.compileStack.push(t), t
                },
                replaceStack: function(e) {
                    var t, r, i, s = "";
                    this.isInline();
                    if (!this.isInline()) throw new u("replaceStack on non-inline");
                    var o = this.popStack(!0);
                    if (o instanceof n) s = t = o.value, i = !0;
                    else {
                        r = !this.stackSlot;
                        var a = r ? this.incrStack() : this.topStackName();
                        s = "(" + this.push(a) + " = " + o + ")", t = this.topStack()
                    }
                    var f = e.call(this, t);
                    i || this.popStack(), r && this.stackSlot--, this.push("(" + s + f + ")")
                },
                incrStack: function() {
                    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                },
                topStackName: function() {
                    return "stack" + this.stackSlot
                },
                flushInline: function() {
                    var e = this.inlineStack;
                    if (e.length) {
                        this.inlineStack = [];
                        for (var t = 0, r = e.length; r > t; t++) {
                            var i = e[t];
                            i instanceof n ? this.compileStack.push(i) : this.pushStack(i)
                        }
                    }
                },
                isInline: function() {
                    return this.inlineStack.length
                },
                popStack: function(e) {
                    var t = this.isInline(),
                        r = (t ? this.inlineStack : this.compileStack).pop();
                    if (!e && r instanceof n) return r.value;
                    if (!t) {
                        if (!this.stackSlot) throw new u("Invalid stack pop");
                        this.stackSlot--
                    }
                    return r
                },
                topStack: function() {
                    var e = this.isInline() ? this.inlineStack : this.compileStack,
                        t = e[e.length - 1];
                    return t instanceof n ? t.value : t
                },
                contextName: function(e) {
                    return this.useDepths && e ? "depths[" + e + "]" : "depth" + e
                },
                quotedString: function(e) {
                    return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                },
                objectLiteral: function(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(this.quotedString(n) + ":" + e[n]);
                    return "{" + t.join(",") + "}"
                },
                setupHelper: function(e, t, n) {
                    var r = [],
                        i = this.setupParams(t, e, r, n),
                        s = this.nameLookup("helpers", t, "helper");
                    return {
                        params: r,
                        paramsInit: i,
                        name: s,
                        callParams: [this.contextName(0)].concat(r).join(", ")
                    }
                },
                setupOptions: function(e, t, n) {
                    var r, i, s, o = {},
                        u = [],
                        a = [],
                        f = [];
                    o.name = this.quotedString(e), o.hash = this.popStack(), this.trackIds && (o.hashIds = this.popStack()), this.stringParams && (o.hashTypes = this.popStack(), o.hashContexts = this.popStack()), i = this.popStack(), s = this.popStack(), (s || i) && (s || (s = "this.noop"), i || (i = "this.noop"), o.fn = s, o.inverse = i);
                    for (var l = t; l--;) r = this.popStack(), n[l] = r, this.trackIds && (f[l] = this.popStack()), this.stringParams && (a[l] = this.popStack(), u[l] = this.popStack());
                    return this.trackIds && (o.ids = "[" + f.join(",") + "]"), this.stringParams && (o.types = "[" + a.join(",") + "]", o.contexts = "[" + u.join(",") + "]"), this.options.data && (o.data = "data"), o
                },
                setupParams: function(e, t, n, r) {
                    var i = this.objectLiteral(this.setupOptions(e, t, n));
                    return r ? (this.useRegister("options"), n.push("options"), "options=" + i) : (n.push(i), "")
                }
            };
            for (var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), f = r.RESERVED_WORDS = {}, l = 0, c = a.length; c > l; l++) f[a[l]] = !0;
            return r.isValidJavaScriptVariableName = function(e) {
                return !r.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)
            }, i = r
        }(r, n),
        h = function(e, t, n, r, i) {
            "use strict";
            var s, o = e,
                u = t,
                a = n.parser,
                f = n.parse,
                l = r.Compiler,
                c = r.compile,
                h = r.precompile,
                p = i,
                d = o.create,
                v = function() {
                    var e = d();
                    return e.compile = function(t, n) {
                        return c(t, n, e)
                    }, e.precompile = function(t, n) {
                        return h(t, n, e)
                    }, e.AST = u, e.Compiler = l, e.JavaScriptCompiler = p, e.Parser = a, e.parse = f, e
                };
            return o = v(), o.create = v, o["default"] = o, s = o
        }(s, o, f, l, c);
    return h
});
