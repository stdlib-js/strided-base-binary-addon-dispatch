"use strict";var J=function(m,l){return function(){return l||m((l={exports:{}}).exports,l),l.exports}};var _=J(function(y,W){"use strict";var K=require("@stdlib/assert-is-function"),L=require("@stdlib/assert-is-typed-array-like"),q=require("@stdlib/strided-base-dtype-resolve-enum"),b=require("@stdlib/strided-base-reinterpret-complex64"),B=require("@stdlib/strided-base-reinterpret-complex128"),F=require("@stdlib/strided-base-reinterpret-boolean"),Q=require("@stdlib/string-format"),P=q("complex64"),A=q("complex128"),M=q("bool");function z(m,l){if(!K(m))throw new TypeError(Q("invalid argument. First argument must be a function. Value: `%s`.",m));if(!K(l))throw new TypeError(Q("invalid argument. Second argument must be a function. Value: `%s`.",l));return C;function C(g,i,v,c,r,n,t,o,e,s){var u,w,a;if(!L(v)||!L(n)||!L(e))return l(g,i,v,c,r,n,t,o,e,s),e;if(i=q(i),r=q(r),o=q(o),i===null||r===null||o===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");return i===P?u=b(v,0):i===A?u=B(v,0):i===M?u=F(v,0):u=v,r===P?w=b(n,0):r===A?w=B(n,0):r===M?w=F(n,0):w=n,o===P?a=b(e,0):o===A?a=B(e,0):o===M?a=F(e,0):a=e,m(g,i,u,c,r,w,t,o,a,s),e}}W.exports=z});var N=J(function(rr,f){"use strict";var $=require("@stdlib/assert-is-function"),S=require("@stdlib/assert-is-typed-array-like"),x=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,h=require("@stdlib/strided-base-dtype-resolve-enum"),I=require("@stdlib/strided-base-reinterpret-complex64"),U=require("@stdlib/strided-base-reinterpret-complex128"),p=require("@stdlib/strided-base-reinterpret-boolean"),R=require("@stdlib/strided-base-offset-view"),j=require("@stdlib/strided-base-min-view-buffer-index"),V=require("@stdlib/string-format"),D=h("complex64"),G=h("complex128"),H=h("bool");function X(m,l){if(!$(m))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",m));if(!$(l))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",l));return C;function C(g,i,v,c,r,n,t,o,e,s,u,w,a){var E,T,O;if(!S(v)||!S(t)||!S(u))return l(g,i,v,c,r,n,t,o,e,s,u,w,a),u;if(i=h(i),n=h(n),s=h(s),i===null||n===null||s===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!x(r))throw new TypeError(V("invalid argument. First input array offset must be a nonnegative integer. Value: `%s`.",r));if(!x(e))throw new TypeError(V("invalid argument. Second input array offset must be a nonnegative integer. Value: `%s`.",e));if(!x(a))throw new TypeError(V("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",a));return r=j(g,c,r),e=j(g,o,e),a=j(g,w,a),i===D?E=I(v,r):i===G?E=U(v,r):i===H?E=p(v,r):E=R(v,r),n===D?T=I(t,e):n===G?T=U(t,e):n===H?T=p(t,e):T=R(t,e),s===D?O=I(u,a):s===G?O=U(u,a):s===H?O=p(u,a):O=R(u,a),m(g,i,E,c,n,T,o,s,O,w),u}}f.exports=X});var Y=require("@stdlib/utils-define-nonenumerable-read-only-property"),k=_(),Z=N();Y(k,"ndarray",Z);module.exports=k;
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
