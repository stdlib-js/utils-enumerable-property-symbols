// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==Object.getOwnPropertySymbols,e=Object,t=e.getOwnPropertySymbols;var n=r?function(r){return t(e(r))}:function(){return[]},i="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=Object.defineProperty;function o(r){return"number"==typeof r}function c(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function l(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+c(i):c(i)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function p(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=l(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=l(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===s.call(r.specifier)?s.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,b=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,w=/^(\d+)$/,m=/^(\d+)e/,_=/\.0$/,S=/\.0*e/,j=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":g(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=b.call(t,j,"$1e"),t=b.call(t,S,"e"),t=b.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=b.call(t,v,"e+0$1"),t=b.call(t,y,"e-0$1"),r.alternate&&(t=b.call(t,w,"$1."),t=b.call(t,m,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h.call(r.specifier)?h.call(t):d.call(t)}function O(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var n=e-r.length;return n<0?r:r=t?r+O(n):O(n)+r}var x=String.fromCharCode,I=isNaN,T=Array.isArray;function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,i,a,o,c,u,s;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(f(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,I(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!I(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){return"string"==typeof r}function C(r){var e,t;if(!A(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return V.apply(null,e)}var R=Object.prototype,G=R.toString,Z=R.__defineGetter__,W=R.__defineSetter__,L=R.__lookupGetter__,M=R.__lookupSetter__;var U=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?a:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||M.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&W&&W.call(r,e,t.set),r};function X(r,e,t){U(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Y(r){return"string"==typeof r}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return z&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q()?function(r){var e,t,n;if(null==r)return B.call(r);t=r[K],e=H(r,K);try{r[K]=void 0}catch(e){return B.call(r)}return n=B.call(r),e?r[K]=t:delete r[K],n}:function(r){return B.call(r)},rr=String.prototype.valueOf;var er=q();function tr(r){return"object"==typeof r&&(r instanceof String||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Q(r)))}function nr(r){return Y(r)||tr(r)}function ir(r){return"number"==typeof r}X(nr,"isPrimitive",Y),X(nr,"isObject",tr);var ar=Object.prototype.toString;var or="function"==typeof J?J.toStringTag:"";var cr=q()?function(r){var e,t,n;if(null==r)return ar.call(r);t=r[or],e=H(r,or);try{r[or]=void 0}catch(e){return ar.call(r)}return n=ar.call(r),e?r[or]=t:delete r[or],n}:function(r){return ar.call(r)},lr=Number,ur=lr.prototype.toString;var sr=q();function pr(r){return"object"==typeof r&&(r instanceof lr||(sr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object Number]"===cr(r)))}function fr(r){return ir(r)||pr(r)}function gr(r){return r!=r}function dr(r){return ir(r)&&gr(r)}function hr(r){return pr(r)&&gr(r.valueOf())}function br(r){return dr(r)||hr(r)}X(fr,"isPrimitive",ir),X(fr,"isObject",pr),X(br,"isPrimitive",dr),X(br,"isObject",hr);var vr=Number.POSITIVE_INFINITY,yr=lr.NEGATIVE_INFINITY,wr=Math.floor;function mr(r){return r<vr&&r>yr&&wr(e=r)===e;var e}function _r(r){return ir(r)&&mr(r)}function Sr(r){return pr(r)&&mr(r.valueOf())}function jr(r){return _r(r)||Sr(r)}X(jr,"isPrimitive",_r),X(jr,"isObject",Sr);var Er=Object.prototype.propertyIsEnumerable;var Or=!Er.call("beep","0");function kr(r,e){var t;return null!=r&&(!(t=Er.call(r,e))&&Or&&nr(r)?!dr(e=+e)&&_r(e)&&e>=0&&e<r.length:t)}function xr(r){var t,i,a;if(null==r)return[];for(t=n(e(r)),a=0,i=0;i<t.length;i++)kr(r,t[i])&&(t[a]=t[i],a+=1);return t.length=a,t}export{xr as default};
//# sourceMappingURL=mod.js.map
