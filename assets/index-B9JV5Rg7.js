(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function Y(t){return typeof window.Node=="object"?t instanceof window.Node:t!==null&&typeof t=="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function ft(t){var e=Object.prototype.toString.call(t),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?t instanceof window.NodeList:t!==null&&typeof t=="object"&&typeof t.length=="number"&&r.test(e)&&(t.length===0||Y(t[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function P(t,e){if(e===void 0&&(e=document),t instanceof Array)return t.filter(Y);if(Y(t))return[t];if(ft(t))return Array.prototype.slice.call(t);if(typeof t=="string")try{var r=e.querySelectorAll(t);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function X(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var e=w();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function w(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function ut(t,e){for(var r=X(t),i=X(e),n=[],o=0;o<4;o++)for(var a=[r[o],r[o+4],r[o+8],r[o+12]],l=0;l<4;l++){var p=l*4,c=[i[p],i[p+1],i[p+2],i[p+3]],d=a[0]*c[0]+a[1]*c[1]+a[2]*c[2]+a[3]*c[3];n[o+p]=d}return n}function lt(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var r=e[2].split(", ").map(parseFloat);return X(r)}}return w()}function dt(t){var e=Math.PI/180*t,r=w();return r[5]=r[10]=Math.cos(e),r[6]=r[9]=Math.sin(e),r[9]*=-1,r}function ht(t){var e=Math.PI/180*t,r=w();return r[0]=r[10]=Math.cos(e),r[2]=r[8]=Math.sin(e),r[2]*=-1,r}function vt(t){var e=Math.PI/180*t,r=w();return r[0]=r[5]=Math.cos(e),r[1]=r[4]=Math.sin(e),r[4]*=-1,r}function V(t,e){var r=w();return r[0]=t,r[5]=t,r}function pt(t){var e=w();return e[12]=t,e}function yt(t){var e=w();return e[13]=t,e}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var tt=(function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){return tt(e)},0)}})(),gt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||tt;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var et={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function bt(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function mt(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var R={success:mt,failure:bt};function M(t){return t!==null&&t instanceof Object&&(t.constructor===Object||Object.prototype.toString.call(t)==="[object Object]")}function s(t,e){if(M(t)){var r=Object.keys(t);return r.forEach(function(i){return e(t[i],i,t)})}if(t instanceof Array)return t.forEach(function(i,n){return e(i,n,t)});throw new TypeError("Expected either an array or object literal.")}function T(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+t;e.forEach(function(n){return i+=`
 — `+n}),console.log(i,"color: #ea654b;")}}function rt(){var t=this,e=function(){return{active:[],stale:[]}},r=e(),i=e(),n=e();try{s(P("[data-sr-id]"),function(o){var a=parseInt(o.getAttribute("data-sr-id"));r.active.push(a)})}catch(o){throw o}s(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),s(r.stale,function(o){return delete t.store.elements[o]}),s(this.store.elements,function(o){n.active.indexOf(o.containerId)===-1&&n.active.push(o.containerId),o.hasOwnProperty("sequence")&&i.active.indexOf(o.sequence.id)===-1&&i.active.push(o.sequence.id)}),s(this.store.containers,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),s(n.stale,function(o){var a=t.store.containers[o].node;a.removeEventListener("scroll",t.delegate),a.removeEventListener("resize",t.delegate),delete t.store.containers[o]}),s(this.store.sequences,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),s(i.stale,function(o){return delete t.store.sequences[o]})}var Z=(function(){var t={},e=document.documentElement.style;function r(i,n){if(n===void 0&&(n=e),i&&typeof i=="string"){if(t[i])return t[i];if(typeof n[i]=="string")return t[i]=i;if(typeof n["-webkit-"+i]=="string")return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return t={}},r})();function wt(t){var e=window.getComputedStyle(t.node),r=e.position,i=t.config,n={},o=t.node.getAttribute("style")||"",a=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];n.computed=a?a.map(function(g){return g.trim()}).join("; ")+";":"",n.generated=a.some(function(g){return g.match(/visibility\s?:\s?visible/i)})?n.computed:a.concat(["visibility: visible"]).map(function(g){return g.trim()}).join("; ")+";";var l=parseFloat(e.opacity),p=isNaN(parseFloat(i.opacity))?parseFloat(e.opacity):parseFloat(i.opacity),c={computed:l!==p?"opacity: "+l+";":"",generated:l!==p?"opacity: "+p+";":""},d=[];if(parseFloat(i.distance)){var f=i.origin==="top"||i.origin==="bottom"?"Y":"X",v=i.distance;(i.origin==="top"||i.origin==="left")&&(v=/^-/.test(v)?v.substr(1):"-"+v);var O=v.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),y=O[0],E=O[1];switch(E){case"em":v=parseInt(e.fontSize)*y;break;case"px":v=y;break;case"%":v=f==="Y"?t.node.getBoundingClientRect().height*y/100:t.node.getBoundingClientRect().width*y/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}f==="Y"?d.push(yt(v)):d.push(pt(v))}i.rotate.x&&d.push(dt(i.rotate.x)),i.rotate.y&&d.push(ht(i.rotate.y)),i.rotate.z&&d.push(vt(i.rotate.z)),i.scale!==1&&(i.scale===0?d.push(V(2e-4)):d.push(V(i.scale)));var h={};if(d.length){h.property=Z("transform"),h.computed={raw:e[h.property],matrix:lt(e[h.property])},d.unshift(h.computed.matrix);var st=d.reduce(ut);h.generated={initial:h.property+": matrix3d("+st.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var u={};if(c.generated||h.generated.initial){u.property=Z("transition"),u.computed=e[u.property],u.fragments=[];var B=i.delay,I=i.duration,q=i.easing;c.generated&&u.fragments.push({delayed:"opacity "+I/1e3+"s "+q+" "+B/1e3+"s",instant:"opacity "+I/1e3+"s "+q+" 0s"}),h.generated.initial&&u.fragments.push({delayed:h.property+" "+I/1e3+"s "+q+" "+B/1e3+"s",instant:h.property+" "+I/1e3+"s "+q+" 0s"});var ct=u.computed&&!u.computed.match(/all 0s|none 0s/);ct&&u.fragments.unshift({delayed:u.computed,instant:u.computed});var G=u.fragments.reduce(function(g,S,K){return g.delayed+=K===0?S.delayed:", "+S.delayed,g.instant+=K===0?S.instant:", "+S.instant,g},{delayed:"",instant:""});u.generated={delayed:u.property+": "+G.delayed+";",instant:u.property+": "+G.instant+";"}}else u.generated={delayed:"",instant:""};return{inline:n,opacity:c,position:r,transform:h,transition:u}}function j(t,e){e.split(";").forEach(function(r){var i=r.split(":"),n=i[0],o=i.slice(1);n&&o&&(t.style[n.trim()]=o.join(":"))})}function U(t){var e=this,r;try{s(P(t),function(i){var n=i.getAttribute("data-sr-id");if(n!==null){r=!0;var o=e.store.elements[n];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),j(o.node,o.styles.inline.generated),i.removeAttribute("data-sr-id"),delete e.store.elements[n]}})}catch(i){return T.call(this,"Clean failed.",i.message)}if(r)try{rt.call(this)}catch(i){return T.call(this,"Clean failed.",i.message)}}function Ot(){var t=this;s(this.store.elements,function(e){j(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),s(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.removeEventListener("scroll",t.delegate),r.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function L(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(M(t))return s(e,function(i){s(i,function(n,o){M(n)?((!t[o]||!M(t[o]))&&(t[o]={}),L(t[o],n)):t[o]=n})}),t;throw new TypeError("Target must be an object literal.")}function k(t){return t===void 0&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var H=(function(){var t=0;return function(){return t++}})();function it(){var t=this;rt.call(this),s(this.store.elements,function(e){var r=[e.styles.inline.generated];e.visible?(r.push(e.styles.opacity.computed),r.push(e.styles.transform.generated.final),e.revealed=!0):(r.push(e.styles.opacity.generated),r.push(e.styles.transform.generated.initial),e.revealed=!1),j(e.node,r.filter(function(i){return i!==""}).join(" "))}),s(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.addEventListener("scroll",t.delegate),r.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function $(t,e){e===void 0&&(e={});var r=e.pristine||this.pristine,i=t.config.useDelay==="always"||t.config.useDelay==="onload"&&r||t.config.useDelay==="once"&&!t.seen,n=t.visible&&!t.revealed,o=!t.visible&&t.revealed&&t.config.reset;if(e.reveal||n)return Et.call(this,t,i);if(e.reset||o)return Tt.call(this,t)}function Et(t,e){var r=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?r.push(t.styles.transition.generated.delayed):r.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,j(t.node,r.filter(function(i){return i!==""}).join(" ")),nt.call(this,t,e)}function Tt(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,j(t.node,e.filter(function(r){return r!==""}).join(" ")),nt.call(this,t)}function nt(t,e){var r=this,i=e?t.config.duration+t.config.delay:t.config.duration,n=t.revealed?t.config.beforeReveal:t.config.beforeReset,o=t.revealed?t.config.afterReveal:t.config.afterReset,a=0;t.callbackTimer&&(a=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),n(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&U.call(r,t.node)},i-a)}}function ot(t,e){if(e===void 0&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return $.call(this,t,{reset:!0});var r=this.store.sequences[t.sequence.id],i=t.sequence.index;if(r){var n=new J(r,"visible",this.store),o=new J(r,"revealed",this.store);if(r.models={visible:n,revealed:o},!o.body.length){var a=r.members[n.body[0]],l=this.store.elements[a];if(l)return A.call(this,r,n.body[0],-1,e),A.call(this,r,n.body[0],1,e),$.call(this,l,{reveal:!0,pristine:e})}if(!r.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(n.body).shift())return A.call(this,r,i,-1,e),$.call(this,t,{reveal:!0,pristine:e});if(!r.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(n.body).pop())return A.call(this,r,i,1,e),$.call(this,t,{reveal:!0,pristine:e})}}function jt(t){var e=Math.abs(t);if(!isNaN(e))this.id=H(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function J(t,e,r){var i=this;this.head=[],this.body=[],this.foot=[],s(t.members,function(n,o){var a=r.elements[n];a&&a[e]&&i.body.push(o)}),this.body.length&&s(t.members,function(n,o){var a=r.elements[n];a&&!a[e]&&(o<i.body[0]?i.head.push(o):i.foot.push(o))})}function A(t,e,r,i){var n=this,o=["head",null,"foot"][1+r],a=t.members[e+r],l=this.store.elements[a];t.blocked[o]=!0,setTimeout(function(){t.blocked[o]=!1,l&&ot.call(n,l,i)},t.interval)}function at(t,e,r){var i=this;e===void 0&&(e={}),r===void 0&&(r=!1);var n=[],o,a=e.interval||et.interval;try{a&&(o=new jt(a));var l=P(t);if(!l.length)throw new Error("Invalid reveal target.");var p=l.reduce(function(c,d){var f={},v=d.getAttribute("data-sr-id");v?(L(f,i.store.elements[v]),j(f.node,f.styles.inline.computed)):(f.id=H(),f.node=d,f.seen=!1,f.revealed=!1,f.visible=!1);var O=L({},f.config||i.defaults,e);if(!O.mobile&&k()||!O.desktop&&!k())return v&&U.call(i,f),c;var y=P(O.container)[0];if(!y)throw new Error("Invalid container.");if(!y.contains(d))return c;var E;return E=Rt(y,n,i.store.containers),E===null&&(E=H(),n.push({id:E,node:y})),f.config=O,f.containerId=E,f.styles=wt(f),o&&(f.sequence={id:o.id,index:o.members.length},o.members.push(f.id)),c.push(f),c},[]);s(p,function(c){i.store.elements[c.id]=c,c.node.setAttribute("data-sr-id",c.id)})}catch(c){return T.call(this,"Reveal failed.",c.message)}s(n,function(c){i.store.containers[c.id]={id:c.id,node:c.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(it.bind(this),0))}function Rt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i=null;return s(e,function(n){s(n,function(o){i===null&&o.node===t&&(i=o.id)})}),i}function $t(){var t=this;s(this.store.history,function(e){at.call(t,e.target,e.options,!0)}),it.call(this)}var Pt=function(t){return(t>0)-(t<0)||+t},Q=Math.sign||Pt;function _(t,e){var r=e?t.node.clientHeight:t.node.offsetHeight,i=e?t.node.clientWidth:t.node.offsetWidth,n=0,o=0,a=t.node;do isNaN(a.offsetTop)||(n+=a.offsetTop),isNaN(a.offsetLeft)||(o+=a.offsetLeft),a=a.offsetParent;while(a);return{bounds:{top:n,right:o+i,bottom:n+r,left:o},height:r,width:i}}function Lt(t){var e,r;return t.node===document.documentElement?(e=window.pageYOffset,r=window.pageXOffset):(e=t.node.scrollTop,r=t.node.scrollLeft),{top:e,left:r}}function It(t){t===void 0&&(t={});var e=this.store.containers[t.containerId];if(e){var r=Math.max(0,Math.min(1,t.config.viewFactor)),i=t.config.viewOffset,n={top:t.geometry.bounds.top+t.geometry.height*r,right:t.geometry.bounds.right-t.geometry.width*r,bottom:t.geometry.bounds.bottom-t.geometry.height*r,left:t.geometry.bounds.left+t.geometry.width*r},o={top:e.geometry.bounds.top+e.scroll.top+i.top,right:e.geometry.bounds.right+e.scroll.left-i.right,bottom:e.geometry.bounds.bottom+e.scroll.top-i.bottom,left:e.geometry.bounds.left+e.scroll.left+i.left};return n.top<o.bottom&&n.right>o.left&&n.bottom>o.top&&n.left<o.right||t.styles.position==="fixed"}}function qt(t,e){var r=this;t===void 0&&(t={type:"init"}),e===void 0&&(e=this.store.elements),gt(function(){var i=t.type==="init"||t.type==="resize";s(r.store.containers,function(n){i&&(n.geometry=_.call(r,n,!0));var o=Lt.call(r,n);n.scroll&&(n.direction={x:Q(o.left-n.scroll.left),y:Q(o.top-n.scroll.top)}),n.scroll=o}),s(e,function(n){(i||n.geometry===void 0)&&(n.geometry=_.call(r,n)),n.visible=It.call(r,n)}),s(e,function(n){n.sequence?ot.call(r,n):$.call(r,n)}),r.pristine=!1})}function St(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function At(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var Mt="4.0.9",N,x,C,D,F,b,z,W;function m(t){t===void 0&&(t={});var e=typeof this>"u"||Object.getPrototypeOf(this)!==m.prototype;if(e)return new m(t);if(!m.isSupported())return T.call(this,"Instantiation failed.","This browser is not supported."),R.failure();var r;try{r=b?L({},b,t):L({},et,t)}catch(n){return T.call(this,"Invalid configuration.",n.message),R.failure()}try{var i=P(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(n){return T.call(this,n.message),R.failure()}return b=r,!b.mobile&&k()||!b.desktop&&!k()?(T.call(this,"This device is disabled.","desktop: "+b.desktop,"mobile: "+b.mobile),R.failure()):(R.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,N=N||qt.bind(this),x=x||Ot.bind(this),C=C||at.bind(this),D=D||U.bind(this),F=F||$t.bind(this),Object.defineProperty(this,"delegate",{get:function(){return N}}),Object.defineProperty(this,"destroy",{get:function(){return x}}),Object.defineProperty(this,"reveal",{get:function(){return C}}),Object.defineProperty(this,"clean",{get:function(){return D}}),Object.defineProperty(this,"sync",{get:function(){return F}}),Object.defineProperty(this,"defaults",{get:function(){return b}}),Object.defineProperty(this,"version",{get:function(){return Mt}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),W||(W=this))}m.isSupported=function(){return St()&&At()};Object.defineProperty(m,"debug",{get:function(){return z||!1},set:function(t){return z=typeof t=="boolean"?t:z}});m();function kt(t=null){const e=[{element:".banner-text",animation:{delay:700,origin:window.innerWidth>768?"left":"bottom"}},{element:".banner-cta",animation:{delay:1e3,origin:window.innerWidth>768?"left":"bottom"}},{element:".section-title",animation:{delay:300,distance:"0px",origin:"bottom"}},{element:".section-content",animation:{delay:500,distance:"0px",origin:"bottom"}}];m({reset:!1}),e.forEach(({element:r,animation:i})=>{m().reveal(r,Object.assign({},t,i))})}kt();
