// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(e,t)||c.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&u&&u.call(e,t,r.set),e};function a(e,t,r){f(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"number"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,_=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",m=b()?function(e){var t,r,n,o,i;if(null==e)return s.call(e);r=e[v],i=v,t=null!=(o=e)&&_.call(o,i);try{e[v]=void 0}catch(t){return s.call(e)}return n=s.call(e),t?e[v]=r:delete e[v],n}:function(e){return s.call(e)},d=Number,g=d.prototype.toString,j=b();function h(e){return"object"==typeof e&&(e instanceof d||(j?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function O(e){return p(e)||h(e)}a(O,"isPrimitive",p),a(O,"isObject",h);var S=Number.POSITIVE_INFINITY,w=d.NEGATIVE_INFINITY,P=Math.floor;function T(e){return P(e)===e}function I(e){return e<S&&e>w&&T(e)}function N(e){return p(e)&&I(e)}function E(e){return h(e)&&I(e.valueOf())}function V(e){return N(e)||E(e)}function x(e){return N(e)&&e>=0}function A(e){return E(e)&&e.valueOf()>=0}function F(e){return x(e)||A(e)}function G(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!function(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&T(e.length)&&e.length>=0&&e.length<=4294967295}(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}a(V,"isPrimitive",N),a(V,"isObject",E),a(F,"isPrimitive",x),a(F,"isObject",A);var M=G(F.isPrimitive),k=G(F.isObject),Y=G(F);a(Y,"primitives",M),a(Y,"objects",k),e.default=Y,e.objects=k,e.primitives=M,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).isNonNegativeIntegerArray={});
//# sourceMappingURL=index.js.map
