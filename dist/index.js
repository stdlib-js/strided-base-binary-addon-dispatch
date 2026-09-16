"use strict";var J=function(m,v){return function(){try{return v||m((v={exports:{}}).exports,v),v.exports}catch(E){throw v=0,E}}};var _=J(function(y,W){"use strict";var K=require("@stdlib/assert-is-function"),L=require("@stdlib/assert-is-typed-array-like"),q=require("@stdlib/strided-base-dtype-resolve-enum"),b=require("@stdlib/strided-base-reinterpret-complex64"),B=require("@stdlib/strided-base-reinterpret-complex128"),F=require("@stdlib/strided-base-reinterpret-boolean"),Q=require("@stdlib/string-format"),P=q("complex64"),A=q("complex128"),M=q("bool");function z(m,v){if(!K(m))throw new TypeError(Q("invalid argument. First argument must be a function. Value: `%s`.",m));if(!K(v))throw new TypeError(Q("invalid argument. Second argument must be a function. Value: `%s`.",v));return E;function E(g,i,l,c,r,n,t,o,e,s){var u,w,a;if(!L(l)||!L(n)||!L(e))return v(g,i,l,c,r,n,t,o,e,s),e;if(i=q(i),r=q(r),o=q(o),i===null||r===null||o===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");return i===P?u=b(l,0):i===A?u=B(l,0):i===M?u=F(l,0):u=l,r===P?w=b(n,0):r===A?w=B(n,0):r===M?w=F(n,0):w=n,o===P?a=b(e,0):o===A?a=B(e,0):o===M?a=F(e,0):a=e,m(g,i,u,c,r,w,t,o,a,s),e}}W.exports=z});var N=J(function(rr,f){"use strict";var $=require("@stdlib/assert-is-function"),S=require("@stdlib/assert-is-typed-array-like"),x=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,h=require("@stdlib/strided-base-dtype-resolve-enum"),I=require("@stdlib/strided-base-reinterpret-complex64"),U=require("@stdlib/strided-base-reinterpret-complex128"),p=require("@stdlib/strided-base-reinterpret-boolean"),R=require("@stdlib/strided-base-offset-view"),j=require("@stdlib/strided-base-min-view-buffer-index"),C=require("@stdlib/string-format"),D=h("complex64"),G=h("complex128"),H=h("bool");function X(m,v){if(!$(m))throw new TypeError(C("invalid argument. First argument must be a function. Value: `%s`.",m));if(!$(v))throw new TypeError(C("invalid argument. Second argument must be a function. Value: `%s`.",v));return E;function E(g,i,l,c,r,n,t,o,e,s,u,w,a){var T,O,V;if(!S(l)||!S(t)||!S(u))return v(g,i,l,c,r,n,t,o,e,s,u,w,a),u;if(i=h(i),n=h(n),s=h(s),i===null||n===null||s===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!x(r))throw new TypeError(C("invalid argument. First input array offset must be a nonnegative integer. Value: `%s`.",r));if(!x(e))throw new TypeError(C("invalid argument. Second input array offset must be a nonnegative integer. Value: `%s`.",e));if(!x(a))throw new TypeError(C("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",a));return r=j(g,c,r),e=j(g,o,e),a=j(g,w,a),i===D?T=I(l,r):i===G?T=U(l,r):i===H?T=p(l,r):T=R(l,r),n===D?O=I(t,e):n===G?O=U(t,e):n===H?O=p(t,e):O=R(t,e),s===D?V=I(u,a):s===G?V=U(u,a):s===H?V=p(u,a):V=R(u,a),m(g,i,T,c,n,O,o,s,V,w),u}}f.exports=X});var Y=require("@stdlib/utils-define-nonenumerable-read-only-property"),k=_(),Z=N();Y(k,"ndarray",Z);module.exports=k;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
