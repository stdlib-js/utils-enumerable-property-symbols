// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols,r=t?function(t){return e(Object(t))}:function(){return[]},n="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,u=Object.prototype,i=u.toString,c=u.__defineGetter__,l=u.__defineSetter__,a=u.__lookupGetter__,f=u.__lookupSetter__,b=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?o:function(t,e,r){var n,o,b,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(a.call(t,e)||f.call(t,e)?(n=t.__proto__,t.__proto__=u,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),b="get"in r,p="set"in r,o&&(b||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return b&&c&&c.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t};function p(t,e,r){b(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"string"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,_=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",d=m()?function(t){var e,r,n,o,u;if(null==t)return v.call(t);r=t[j],u=j,e=null!=(o=t)&&_.call(o,u);try{t[j]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[j]=r:delete t[j],n}:function(t){return v.call(t)},g=String.prototype.valueOf,O=m();function S(t){return"object"==typeof t&&(t instanceof String||(O?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function h(t){return y(t)||S(t)}function P(t){return"number"==typeof t}p(h,"isPrimitive",y),p(h,"isObject",S);var w=Number,I=w.prototype.toString,T=m();function N(t){return"object"==typeof t&&(t instanceof w||(T?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object Number]"===d(t)))}function E(t){return P(t)||N(t)}function V(t){return t!=t}function x(t){return P(t)&&V(t)}function A(t){return N(t)&&V(t.valueOf())}function F(t){return x(t)||A(t)}p(E,"isPrimitive",P),p(E,"isObject",N),p(F,"isPrimitive",x),p(F,"isObject",A);var G=Number.POSITIVE_INFINITY,k=w.NEGATIVE_INFINITY,Y=Math.floor;function C(t){return t<G&&t>k&&Y(e=t)===e;var e}function M(t){return P(t)&&C(t)}function q(t){return N(t)&&C(t.valueOf())}function z(t){return M(t)||q(t)}p(z,"isPrimitive",M),p(z,"isObject",q);var B=Object.prototype.propertyIsEnumerable,D=!B.call("beep","0");function H(t,e){var r;return null!=t&&(!(r=B.call(t,e))&&D&&h(t)?!x(e=+e)&&M(e)&&e>=0&&e<t.length:r)}var J=Object;return function(t){var e,n,o;if(null==t)return[];for(e=r(J(t)),o=0,n=0;n<e.length;n++)H(t,e[n])&&(e[o]=e[n],o+=1);return e.length=o,e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).enumerablePropertySymbols=e();
//# sourceMappingURL=browser.js.map
