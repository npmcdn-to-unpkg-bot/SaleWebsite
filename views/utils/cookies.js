define([],function(){function e(){}function t(e,t,n){var r=5256e3,i=n||r,s=i*60*1e3,o=new Date;o.setTime(o.getTime()+s);var u="expires="+o.toGMTString();document.cookie=e+"="+JSON.stringify(t)+"; "+u}function n(e){var t=e+"=",n=document.cookie.split(";");for(var i=n.length-1;i>=0;i--){var s=n[i];while(s.charAt(0)==" ")s=s.substring(1,s.length);if(s.indexOf(t)===0)return r(s.substring(t.length,s.length))}return""}function r(e){try{return JSON.parse(e)}catch(t){return e}}return e(),{set:function(e,n,r){t(e,n,r)},isSet:function(e){return Boolean(n(e))},get:function(e){return n(e)},unSet:function(e){t(e,"",-1)}}});