// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-enum@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-offset-view@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-min-view-buffer-index@esm/index.mjs";var p=n("complex64"),a=n("complex128");function f(e,d){if(!r(e))throw new TypeError(o("0gD3p",e));if(!r(d))throw new TypeError(o("0gD2S",d));return function(r,m,l,f,u,j,h,g,v,c){var b,w,y;if(!t(l)||!t(j)||!t(v))return d(r,m,l,f,u,j,h,g,v,c),v;if(m=n(m),u=n(u),g=n(g),null===m||null===u||null===g)throw new TypeError(o("0gD1S"));b=m===p?s(l,0):m===a?i(l,0):l;w=u===p?s(j,0):u===a?i(j,0):j;y=g===p?s(v,0):g===a?i(v,0):v;return e(r,m,b,f,u,w,h,g,y,c),v}}var u=n("complex64"),j=n("complex128");function h(e,p){if(!r(e))throw new TypeError(o("0gD3p",e));if(!r(p))throw new TypeError(o("0gD2S",p));return function(r,a,f,h,g,v,c,b,w,y,x,E,T){var D,S,V;if(!t(f)||!t(c)||!t(x))return p(r,a,f,h,g,v,c,b,w,y,x,E,T),x;if(a=n(a),v=n(v),y=n(y),null===a||null===v||null===y)throw new TypeError(o("0gD1S"));if(!d(g))throw new TypeError(o("invalid argument. First input array offset must be a nonnegative integer. Value: `%s`.",g));if(!d(w))throw new TypeError(o("invalid argument. Second input array offset must be a nonnegative integer. Value: `%s`.",w));if(!d(T))throw new TypeError(o("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",T));g=l(r,h,g),w=l(r,b,w),T=l(r,E,T),D=a===u?s(f,g):a===j?i(f,g):m(f,g);S=v===u?s(c,w):v===j?i(c,w):m(c,w);V=y===u?s(x,T):y===j?i(x,T):m(x,T);return e(r,a,D,h,v,S,b,y,V,E),x}}e(f,"ndarray",h);export{f as default,h as ndarray};
//# sourceMappingURL=index.mjs.map
