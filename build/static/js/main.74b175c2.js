/*! For license information please see main.74b175c2.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function x(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=x.prototype;var y=v.prototype=new b;y.constructor=v,g(y,x.prototype),y.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,o={},a=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=t[i]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:n,type:e,key:a,ref:l,props:o,_owner:j.current}}function z(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,i,o,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===o?"."+_(s,0):o,w(a)?(i="",null!=e&&(i=e.replace(E,"$&/")+"/"),L(a,t,i,"",(function(e){return e}))):null!=a&&(z(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(s=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+_(l=e[c],c);s+=L(l,t,i,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=L(l=l.value,t,i,u=o+_(l,c++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],i=0;return L(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null},N={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:T,ReactCurrentOwner:j};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!z(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=a,t.PureComponent=v,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=M,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),o=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=z,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},219:(e,t,n)=>{"use strict";var r=n(763),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?a:l[e.$$typeof]||i}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var i=f(n);i&&i!==h&&e(t,i,r)}var a=u(n);d&&(a=a.concat(d(n)));for(var l=s(t),g=s(n),m=0;m<a.length;++m){var x=a[m];if(!o[x]&&(!r||!r[x])&&(!g||!g[x])&&(!l||!l[x])){var b=p(n,x);try{c(t,x,b)}catch(v){}}}}return t}},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<i&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,g=!1,m=!1,x="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(m=!1,y(e),!g)if(null!==r(c))g=!0,T(k);else{var t=r(u);null!==t&&N(w,t.startTime-e)}}function k(e,n){g=!1,m&&(m=!1,b(z),z=-1),h=!0;var o=f;try{for(y(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!L());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var l=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(c)&&i(c),y(n)}else i(c);p=r(c)}if(null!==p)var s=!0;else{var d=r(u);null!==d&&N(w,d.startTime-n),s=!1}return s}finally{p=null,f=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,S=!1,C=null,z=-1,E=5,_=-1;function L(){return!(t.unstable_now()-_<E)}function P(){if(null!==C){var e=t.unstable_now();_=e;var n=!0;try{n=C(!0,e)}finally{n?j():(S=!1,C=null)}}else S=!1}if("function"===typeof v)j=function(){v(P)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,O=$.port2;$.port1.onmessage=P,j=function(){O.postMessage(null)}}else j=function(){x(P,0)};function T(e){C=e,S||(S=!0,j())}function N(e,n){z=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,T(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(m?(b(z),z=-1):m=!0,N(w,o-a))):(e.sortIndex=l,n(c,e),g||h||(g=!0,T(k))),e},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},528:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),g=Symbol.for("react.client.reference");function m(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case a:case o:case u:case d:case h:return e;default:switch(e=e&&e.$$typeof){case s:case c:case f:case p:case l:return e;default:return t}}case r:return t}}}t.Hy=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===a||e===o||e===u||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===c||e.$$typeof===g||void 0!==e.getModuleId)},t.QP=m},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function g(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function v(e,t,n,r){var i=m.hasOwnProperty(t)?m[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,b);m[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),E=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var T=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var N=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=N&&e[N]||e["@@iterator"])?e:null}var R,V=Object.assign;function A(e){if(void 0===R)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);R=t&&t[1]||""}return"\n"+R+e}var I=!1;function D(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(1!==a||1!==l)do{if(a--,0>--l||i[a]!==o[l]){var s="\n"+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?A(e):""}function F(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=D(e.type,!1);case 11:return e=D(e.type.render,!1);case 1:return e=D(e.type,!0);default:return""}}function Y(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case C:return"Profiler";case S:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case z:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:Y(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return Y(e(t))}catch(n){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function U(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function Z(e,t){G(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var xe=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Se=null;function Ce(e){if(e=vi(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function ze(e){je?Se?Se.push(e):Se=[e]:je=e}function Ee(){if(je){var e=je,t=Se;if(Se=je=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function _e(e,t){return e(t)}function Le(){}var Pe=!1;function $e(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return _e(e,t,n)}finally{Pe=!1,(null!==je||null!==Se)&&(Le(),Ee())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Te=!1;if(u)try{var Ne={};Object.defineProperty(Ne,"passive",{get:function(){Te=!0}}),window.addEventListener("test",Ne,Ne),window.removeEventListener("test",Ne,Ne)}catch(ue){Te=!1}function Me(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Re=!1,Ve=null,Ae=!1,Ie=null,De={onError:function(e){Re=!0,Ve=e}};function Fe(e,t,n,r,i,o,a,l,s){Re=!1,Ve=null,Me.apply(De,arguments)}function Ye(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ye(e)!==e)throw Error(o(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ye(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return We(i),e;if(a===r)return We(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ue(e):null}function Ue(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ue(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Qe=i.unstable_cancelCallback,qe=i.unstable_shouldYield,Xe=i.unstable_requestPaint,Ge=i.unstable_now,Ze=i.unstable_getCurrentPriorityLevel,Je=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~i;0!==l?r=dt(l):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vt=0;function yt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,jt,St,Ct,zt=!1,Et=[],_t=null,Lt=null,Pt=null,$t=new Map,Ot=new Map,Tt=[],Nt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":$t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Rt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=vi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Vt(e){var t=bi(e.target);if(null!==t){var n=Ye(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Ct(e.priority,(function(){jt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function At(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=vi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ye=r,n.target.dispatchEvent(r),ye=null,t.shift()}return!0}function It(e,t,n){At(e)&&n.delete(t)}function Dt(){zt=!1,null!==_t&&At(_t)&&(_t=null),null!==Lt&&At(Lt)&&(Lt=null),null!==Pt&&At(Pt)&&(Pt=null),$t.forEach(It),Ot.forEach(It)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,zt||(zt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Dt)))}function Yt(e){function t(t){return Ft(t,e)}if(0<Et.length){Ft(Et[0],e);for(var n=1;n<Et.length;n++){var r=Et[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_t&&Ft(_t,e),null!==Lt&&Ft(Lt,e),null!==Pt&&Ft(Pt,e),$t.forEach(t),Ot.forEach(t),n=0;n<Tt.length;n++)(r=Tt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&null===(n=Tt[0]).blockedOn;)Vt(n),null===n.blockedOn&&Tt.shift()}var Bt=y.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,n,r){var i=vt,o=Bt.transition;Bt.transition=null;try{vt=1,Kt(e,t,n,r)}finally{vt=i,Bt.transition=o}}function Ut(e,t,n,r){var i=vt,o=Bt.transition;Bt.transition=null;try{vt=4,Kt(e,t,n,r)}finally{vt=i,Bt.transition=o}}function Kt(e,t,n,r){if(Wt){var i=qt(e,t,n,r);if(null===i)Wr(e,t,r,Qt,n),Mt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return _t=Rt(_t,e,t,n,r,i),!0;case"dragenter":return Lt=Rt(Lt,e,t,n,r,i),!0;case"mouseover":return Pt=Rt(Pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return $t.set(o,Rt($t.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ot.set(o,Rt(Ot.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<Nt.indexOf(e)){for(;null!==i;){var o=vi(i);if(null!==o&&wt(o),null===(o=qt(e,t,n,r))&&Wr(e,t,r,Qt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Qt=null;function qt(e,t,n,r){if(Qt=null,null!==(e=bi(e=we(r))))if(null===(t=Ye(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,i="value"in Gt?Gt.value:Gt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=V({},cn,{view:0,detail:0}),pn=on(dn),fn=V({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(fn),gn=on(V({},fn,{dataTransfer:0})),mn=on(V({},dn,{relatedTarget:0})),xn=on(V({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=V({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=on(bn),yn=on(V({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jn[e])&&!!t[e]}function Cn(){return Sn}var zn=V({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=on(zn),_n=on(V({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ln=on(V({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Pn=on(V({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=V({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=on($n),Tn=[9,13,27,32],Nn=u&&"CompositionEvent"in window,Mn=null;u&&"documentMode"in document&&(Mn=document.documentMode);var Rn=u&&"TextEvent"in window&&!Mn,Vn=u&&(!Nn||Mn&&8<Mn&&11>=Mn),An=String.fromCharCode(32),In=!1;function Dn(e,t){switch(e){case"keyup":return-1!==Tn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Yn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Hn(e,t,n,r){ze(r),0<(t=Ur(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,Kn=null;function Qn(e){Ar(e,0)}function qn(e){if(K(yi(e)))return e}function Xn(e,t){if("change"===e)return t}var Gn=!1;if(u){var Zn;if(u){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Gn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Un&&(Un.detachEvent("onpropertychange",nr),Kn=Un=null)}function nr(e){if("value"===e.propertyName&&qn(Kn)){var t=[];Hn(t,Kn,e,we(e)),$e(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Un=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Kn)}function or(e,t){if("click"===e)return qn(t)}function ar(e,t){if("input"===e||"change"===e)return qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var a=ur(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=u&&"documentMode"in document&&11>=document.documentMode,mr=null,xr=null,br=null,vr=!1;function yr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==mr||mr!==Q(r)||("selectionStart"in(r=mr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&sr(br,r)||(br=r,0<(r=Ur(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},jr={},Sr={};function Cr(e){if(jr[e])return jr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return jr[e]=n[t];return e}u&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var zr=Cr("animationend"),Er=Cr("animationiteration"),_r=Cr("animationstart"),Lr=Cr("transitionend"),Pr=new Map,$r="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Pr.set(e,t),s(t,[e])}for(var Tr=0;Tr<$r.length;Tr++){var Nr=$r[Tr];Or(Nr.toLowerCase(),"on"+(Nr[0].toUpperCase()+Nr.slice(1)))}Or(zr,"onAnimationEnd"),Or(Er,"onAnimationIteration"),Or(_r,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Lr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Vr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,l,s,c){if(Fe.apply(this,arguments),Re){if(!Re)throw Error(o(198));var u=Ve;Re=!1,Ve=null,Ae||(Ae=!0,Ie=u)}}(r,t,void 0,e),e.currentTarget=null}function Ar(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Vr(i,l,c),o=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Vr(i,l,c),o=s}}}if(Ae)throw e=Ie,Ae=!1,Ie=null,e}function Ir(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function Dr(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[Fr]){e[Fr]=!0,a.forEach((function(t){"selectionchange"!==t&&(Rr.has(t)||Dr(t,!1,e),Dr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fr]||(t[Fr]=!0,Dr("selectionchange",!1,t))}}function Br(e,t,n,r){switch(Xt(t)){case 1:var i=Ht;break;case 4:i=Ut;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!Te||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===i||8===l.nodeType&&l.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===i||8===s.nodeType&&s.parentNode===i))return;a=a.return}for(;null!==l;){if(null===(a=bi(l)))return;if(5===(s=a.tag)||6===s){r=o=a;continue e}l=l.parentNode}}r=r.return}$e((function(){var r=o,i=we(n),a=[];e:{var l=Pr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=En;break;case"focusin":c="focus",s=mn;break;case"focusout":c="blur",s=mn;break;case"beforeblur":case"afterblur":s=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Ln;break;case zr:case Er:case _r:s=xn;break;case Lr:s=Pn;break;case"scroll":s=pn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=_n}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,h=r;null!==h;){var g=(f=h).stateNode;if(5===f.tag&&null!==g&&(f=g,null!==p&&(null!=(g=Oe(h,p))&&u.push(Hr(h,g,f)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,i),a.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===ye||!(c=n.relatedTarget||n.fromElement)||!bi(c)&&!c[hi])&&(s||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?bi(c):null)&&(c!==(d=Ye(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,g="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=_n,g="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==s?l:yi(s),f=null==c?l:yi(c),(l=new u(g,h+"leave",s,n,i)).target=d,l.relatedTarget=f,g=null,bi(i)===r&&((u=new u(p,h+"enter",c,n,i)).target=f,u.relatedTarget=d,g=u),d=g,s&&c)e:{for(p=c,h=0,f=u=s;f;f=Kr(f))h++;for(f=0,g=p;g;g=Kr(g))f++;for(;0<h-f;)u=Kr(u),h--;for(;0<f-h;)p=Kr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==s&&Qr(a,l,s,u,!1),null!==c&&null!==d&&Qr(a,d,c,u,!0)}if("select"===(s=(l=r?yi(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Xn;else if(Wn(l))if(Gn)m=ar;else{m=ir;var x=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=or);switch(m&&(m=m(e,r))?Hn(a,m,n,i):(x&&x(e,l,r),"focusout"===e&&(x=l._wrapperState)&&x.controlled&&"number"===l.type&&ee(l,"number",l.value)),x=r?yi(r):window,e){case"focusin":(Wn(x)||"true"===x.contentEditable)&&(mr=x,xr=r,br=null);break;case"focusout":br=xr=mr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,yr(a,n,i);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":yr(a,n,i)}var b;if(Nn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Yn?Dn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Vn&&"ko"!==n.locale&&(Yn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Yn&&(b=en()):(Zt="value"in(Gt=i)?Gt.value:Gt.textContent,Yn=!0)),0<(x=Ur(r,v)).length&&(v=new yn(v,e,null,n,i),a.push({event:v,listeners:x}),b?v.data=b:null!==(b=Fn(n))&&(v.data=b))),(b=Rn?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(In=!0,An);case"textInput":return(e=t.data)===An&&In?null:e;default:return null}}(e,n):function(e,t){if(Yn)return"compositionend"===e||!Nn&&Dn(e,t)?(e=en(),Jt=Zt=Gt=null,Yn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Ur(r,"onBeforeInput")).length&&(i=new yn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=b))}Ar(a,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Oe(e,n))&&r.unshift(Hr(e,o,i)),null!=(o=Oe(e,t))&&r.push(Hr(e,o,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,i?null!=(s=Oe(n,o))&&a.unshift(Hr(n,s,l)):i||null!=(s=Oe(n,o))&&a.push(Hr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var qr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Xr,"")}function Zr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(li)}:ri;function li(e){setTimeout((function(){throw e}))}function si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Yt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Yt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,fi="__reactProps$"+di,hi="__reactContainer$"+di,gi="__reactEvents$"+di,mi="__reactListeners$"+di,xi="__reactHandles$"+di;function bi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[pi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function vi(e){return!(e=e[pi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function yi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[fi]||null}var ki=[],ji=-1;function Si(e){return{current:e}}function Ci(e){0>ji||(e.current=ki[ji],ki[ji]=null,ji--)}function zi(e,t){ji++,ki[ji]=e.current,e.current=t}var Ei={},_i=Si(Ei),Li=Si(!1),Pi=Ei;function $i(e,t){var n=e.type.contextTypes;if(!n)return Ei;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ti(){Ci(Li),Ci(_i)}function Ni(e,t,n){if(_i.current!==Ei)throw Error(o(168));zi(_i,t),zi(Li,n)}function Mi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,B(e)||"Unknown",i));return V({},n,r)}function Ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,Pi=_i.current,zi(_i,e),zi(Li,Li.current),!0}function Vi(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Mi(e,t,Pi),r.__reactInternalMemoizedMergedChildContext=e,Ci(Li),Ci(_i),zi(_i,e)):Ci(Li),zi(Li,n)}var Ai=null,Ii=!1,Di=!1;function Fi(e){null===Ai?Ai=[e]:Ai.push(e)}function Yi(){if(!Di&&null!==Ai){Di=!0;var e=0,t=vt;try{var n=Ai;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ai=null,Ii=!1}catch(i){throw null!==Ai&&(Ai=Ai.slice(e+1)),Ke(Je,Yi),i}finally{vt=t,Di=!1}}return null}var Bi=[],Wi=0,Hi=null,Ui=0,Ki=[],Qi=0,qi=null,Xi=1,Gi="";function Zi(e,t){Bi[Wi++]=Ui,Bi[Wi++]=Hi,Hi=e,Ui=t}function Ji(e,t,n){Ki[Qi++]=Xi,Ki[Qi++]=Gi,Ki[Qi++]=qi,qi=e;var r=Xi;e=Gi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Xi=1<<32-at(t)+i|n<<i|r,Gi=o+e}else Xi=1<<o|n<<i|r,Gi=e}function eo(e){null!==e.return&&(Zi(e,1),Ji(e,1,0))}function to(e){for(;e===Hi;)Hi=Bi[--Wi],Bi[Wi]=null,Ui=Bi[--Wi],Bi[Wi]=null;for(;e===qi;)qi=Ki[--Qi],Ki[Qi]=null,Gi=Ki[--Qi],Ki[Qi]=null,Xi=Ki[--Qi],Ki[Qi]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=$c(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qi?{id:Xi,overflow:Gi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=$c(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ci(n.nextSibling);var r=no;t&&lo(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw fo(),Error(o(418));for(;t;)ao(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ci(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=ci(e.nextSibling)}function ho(){ro=no=null,io=!1}function go(e){null===oo?oo=[e]:oo.push(e)}var mo=y.ReactCurrentBatchConfig;function xo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vo(e){return(0,e._init)(e._payload)}function yo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Tc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Vc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===j?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===O&&vo(o)===t.type)?((r=i(t,n.props)).ref=xo(e,t,n),r.return=e,r):((r=Nc(n.type,n.key,n.props,null,e.mode,r)).ref=xo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ac(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Mc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Vc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Nc(t.type,t.key,t.props,null,e.mode,n)).ref=xo(e,null,t),n.return=e,n;case k:return(t=Ac(t,e.mode,n)).return=e,t;case O:return p(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Mc(t,e.mode,n,null)).return=e,t;bo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case O:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||M(n))return null!==i?null:d(e,t,n,r,null);bo(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case O:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||M(r))return d(t,e=e.get(n)||null,r,i,null);bo(t,r)}return null}function g(i,o,l,s){for(var c=null,u=null,d=o,g=o=0,m=null;null!==d&&g<l.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var x=f(i,d,l[g],s);if(null===x){null===d&&(d=m);break}e&&d&&null===x.alternate&&t(i,d),o=a(x,o,g),null===u?c=x:u.sibling=x,u=x,d=m}if(g===l.length)return n(i,d),io&&Zi(i,g),c;if(null===d){for(;g<l.length;g++)null!==(d=p(i,l[g],s))&&(o=a(d,o,g),null===u?c=d:u.sibling=d,u=d);return io&&Zi(i,g),c}for(d=r(i,d);g<l.length;g++)null!==(m=h(d,i,g,l[g],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),o=a(m,o,g),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach((function(e){return t(i,e)})),io&&Zi(i,g),c}function m(i,l,s,c){var u=M(s);if("function"!==typeof u)throw Error(o(150));if(null==(s=u.call(s)))throw Error(o(151));for(var d=u=null,g=l,m=l=0,x=null,b=s.next();null!==g&&!b.done;m++,b=s.next()){g.index>m?(x=g,g=null):x=g.sibling;var v=f(i,g,b.value,c);if(null===v){null===g&&(g=x);break}e&&g&&null===v.alternate&&t(i,g),l=a(v,l,m),null===d?u=v:d.sibling=v,d=v,g=x}if(b.done)return n(i,g),io&&Zi(i,m),u;if(null===g){for(;!b.done;m++,b=s.next())null!==(b=p(i,b.value,c))&&(l=a(b,l,m),null===d?u=b:d.sibling=b,d=b);return io&&Zi(i,m),u}for(g=r(i,g);!b.done;m++,b=s.next())null!==(b=h(g,i,m,b.value,c))&&(e&&null!==b.alternate&&g.delete(null===b.key?m:b.key),l=a(b,l,m),null===d?u=b:d.sibling=b,d=b);return e&&g.forEach((function(e){return t(i,e)})),io&&Zi(i,m),u}return function e(r,o,a,s){if("object"===typeof a&&null!==a&&a.type===j&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=o;null!==u;){if(u.key===c){if((c=a.type)===j){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===O&&vo(c)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=xo(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===j?((o=Mc(a.props.children,r.mode,s,a.key)).return=r,r=o):((s=Nc(a.type,a.key,a.props,null,r.mode,s)).ref=xo(r,o,a),s.return=r,r=s)}return l(r);case k:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Ac(a,r.mode,s)).return=r,r=o}return l(r);case O:return e(r,o,(u=a._init)(a._payload),s)}if(te(a))return g(r,o,a,s);if(M(a))return m(r,o,a,s);bo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Vc(a,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=yo(!0),ko=yo(!1),jo=Si(null),So=null,Co=null,zo=null;function Eo(){zo=Co=So=null}function _o(e){var t=jo.current;Ci(jo),e._currentValue=t}function Lo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Po(e,t){So=e,zo=Co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vl=!0),e.firstContext=null)}function $o(e){var t=e._currentValue;if(zo!==e)if(e={context:e,memoizedValue:t,next:null},null===Co){if(null===So)throw Error(o(308));Co=e,So.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var Oo=null;function To(e){null===Oo?Oo=[e]:Oo.push(e)}function No(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,To(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mo(e,r)}function Mo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ro=!1;function Vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Io(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Do(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&_s)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mo(e,n)}return null===(i=r.interleaved)?(t.next=t,To(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mo(e,n)}function Fo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Yo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var i=e.updateQueue;Ro=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var s=l,c=s.next;s.next=null,null===a?o=c:a.next=c,a=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=i.baseState;for(a=0,u=c=s=null,l=o;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,g=l;switch(p=t,f=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=g.payload)?h.call(f,d,p):h)||void 0===p)break e;d=V({},d,p);break e;case 2:Ro=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,a|=p;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(p=l).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Rs|=a,e.lanes=a,e.memoizedState=d}}function Wo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Ho={},Uo=Si(Ho),Ko=Si(Ho),Qo=Si(Ho);function qo(e){if(e===Ho)throw Error(o(174));return e}function Xo(e,t){switch(zi(Qo,t),zi(Ko,e),zi(Uo,Ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Uo),zi(Uo,t)}function Go(){Ci(Uo),Ci(Ko),Ci(Qo)}function Zo(e){qo(Qo.current);var t=qo(Uo.current),n=se(t,e.type);t!==n&&(zi(Ko,e),zi(Uo,n))}function Jo(e){Ko.current===e&&(Ci(Uo),Ci(Ko))}var ea=Si(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=y.ReactCurrentDispatcher,oa=y.ReactCurrentBatchConfig,aa=0,la=null,sa=null,ca=null,ua=!1,da=!1,pa=0,fa=0;function ha(){throw Error(o(321))}function ga(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ma(e,t,n,r,i,a){if(aa=a,la=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Ja:el,e=n(r,i),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(o(301));a+=1,ca=sa=null,t.updateQueue=null,ia.current=tl,e=n(r,i)}while(da)}if(ia.current=Za,t=null!==sa&&null!==sa.next,aa=0,ca=sa=la=null,ua=!1,t)throw Error(o(300));return e}function xa(){var e=0!==pa;return pa=0,e}function ba(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?la.memoizedState=ca=e:ca=ca.next=e,ca}function va(){if(null===sa){var e=la.alternate;e=null!==e?e.memoizedState:null}else e=sa.next;var t=null===ca?la.memoizedState:ca.next;if(null!==t)ca=t,sa=e;else{if(null===e)throw Error(o(310));e={memoizedState:(sa=e).memoizedState,baseState:sa.baseState,baseQueue:sa.baseQueue,queue:sa.queue,next:null},null===ca?la.memoizedState=ca=e:ca=ca.next=e}return ca}function ya(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=va(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=sa,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var s=l=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=r):c=c.next=p,la.lanes|=d,Rs|=d}u=u.next}while(null!==u&&u!==a);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(vl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,la.lanes|=a,Rs|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=va(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{a=e(a,l.action),l=l.next}while(l!==i);lr(a,t.memoizedState)||(vl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ja(){}function Sa(e,t){var n=la,r=va(),i=t(),a=!lr(r.memoizedState,i);if(a&&(r.memoizedState=i,vl=!0),r=r.queue,Ra(Ea.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,$a(9,za.bind(null,n,r,i,t),void 0,null),null===Ls)throw Error(o(349));0!==(30&aa)||Ca(n,t,i)}return i}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function za(e,t,n,r){t.value=n,t.getSnapshot=r,_a(t)&&La(e)}function Ea(e,t,n){return n((function(){_a(t)&&La(e)}))}function _a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function La(e){var t=Mo(e,1);null!==t&&nc(t,e,1,-1)}function Pa(e){var t=ba();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},t.queue=e,e=e.dispatch=Qa.bind(null,la,e),[t.memoizedState,e]}function $a(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oa(){return va().memoizedState}function Ta(e,t,n,r){var i=ba();la.flags|=e,i.memoizedState=$a(1|t,n,void 0,void 0===r?null:r)}function Na(e,t,n,r){var i=va();r=void 0===r?null:r;var o=void 0;if(null!==sa){var a=sa.memoizedState;if(o=a.destroy,null!==r&&ga(r,a.deps))return void(i.memoizedState=$a(t,n,o,r))}la.flags|=e,i.memoizedState=$a(1|t,n,o,r)}function Ma(e,t){return Ta(8390656,8,e,t)}function Ra(e,t){return Na(2048,8,e,t)}function Va(e,t){return Na(4,2,e,t)}function Aa(e,t){return Na(4,4,e,t)}function Ia(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Da(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Na(4,4,Ia.bind(null,t,e),n)}function Fa(){}function Ya(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ga(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ba(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ga(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,vl=!0),e.memoizedState=n):(lr(n,t)||(n=gt(),la.lanes|=n,Rs|=n,e.baseState=!0),t)}function Ha(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{vt=n,oa.transition=r}}function Ua(){return va().memoizedState}function Ka(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qa(e))Xa(t,n);else if(null!==(n=No(e,t,n,r))){nc(n,e,r,ec()),Ga(n,t,r)}}function Qa(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qa(e))Xa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(i.next=i,To(t)):(i.next=s.next,s.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=No(e,t,i,r))&&(nc(n,e,r,i=ec()),Ga(n,t,r))}}function qa(e){var t=e.alternate;return e===la||null!==t&&t===la}function Xa(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ga(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Za={readContext:$o,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Ja={readContext:$o,useCallback:function(e,t){return ba().memoizedState=[e,void 0===t?null:t],e},useContext:$o,useEffect:Ma,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ta(4194308,4,Ia.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=ba();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ba();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,la,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ba().memoizedState=e},useState:Pa,useDebugValue:Fa,useDeferredValue:function(e){return ba().memoizedState=e},useTransition:function(){var e=Pa(!1),t=e[0];return e=Ha.bind(null,e[1]),ba().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=la,i=ba();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ls)throw Error(o(349));0!==(30&aa)||Ca(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ma(Ea.bind(null,r,a,e),[e]),r.flags|=2048,$a(9,za.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ba(),t=Ls.identifierPrefix;if(io){var n=Gi;t=":"+t+"R"+(n=(Xi&~(1<<32-at(Xi)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:$o,useCallback:Ya,useContext:$o,useEffect:Ra,useImperativeHandle:Da,useInsertionEffect:Va,useLayoutEffect:Aa,useMemo:Ba,useReducer:wa,useRef:Oa,useState:function(){return wa(ya)},useDebugValue:Fa,useDeferredValue:function(e){return Wa(va(),sa.memoizedState,e)},useTransition:function(){return[wa(ya)[0],va().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:Ua,unstable_isNewReconciler:!1},tl={readContext:$o,useCallback:Ya,useContext:$o,useEffect:Ra,useImperativeHandle:Da,useInsertionEffect:Va,useLayoutEffect:Aa,useMemo:Ba,useReducer:ka,useRef:Oa,useState:function(){return ka(ya)},useDebugValue:Fa,useDeferredValue:function(e){var t=va();return null===sa?t.memoizedState=e:Wa(t,sa.memoizedState,e)},useTransition:function(){return[ka(ya)[0],va().memoizedState]},useMutableSource:ja,useSyncExternalStore:Sa,useId:Ua,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=V({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:V({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&Ye(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Io(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Do(e,o,i))&&(nc(t,e,i,r),Fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Io(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Do(e,o,i))&&(nc(t,e,i,r),Fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Io(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Do(e,i,r))&&(nc(t,e,r,n),Fo(t,e,r))}};function ol(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(i,o))}function al(e,t,n){var r=!1,i=Ei,o=t.contextType;return"object"===typeof o&&null!==o?o=$o(o):(i=Oi(t)?Pi:_i.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?$i(e,i):Ei),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vo(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=$o(o):(o=Oi(t)?Pi:_i.current,i.context=$i(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Bo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=F(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=Io(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,Hs=r),dl(0,t)},n}function hl(e,t,n){(n=Io(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Us?Us=new Set([this]):Us.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xl(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Io(-1,1)).tag=2,Do(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var bl=y.ReactCurrentOwner,vl=!1;function yl(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,i){n=n.render;var o=t.ref;return Po(t,i),r=ma(e,t,n,r,o,i),n=xa(),null===e||vl?(io&&n&&eo(t),t.flags|=1,yl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wl(e,t,i))}function kl(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Oc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Nc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,jl(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return Wl(e,t,i)}return t.flags|=1,(e=Tc(o,r)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(vl=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Wl(e,t,i);0!==(131072&e.flags)&&(vl=!0)}}return zl(e,t,n,r,i)}function Sl(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},zi(Ts,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,zi(Ts,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,zi(Ts,Os),Os|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,zi(Ts,Os),Os|=r;return yl(e,t,i,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zl(e,t,n,r,i){var o=Oi(n)?Pi:_i.current;return o=$i(t,o),Po(t,i),n=ma(e,t,n,r,o,i),r=xa(),null===e||vl?(io&&r&&eo(t),t.flags|=1,yl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wl(e,t,i))}function El(e,t,n,r,i){if(Oi(n)){var o=!0;Ri(t)}else o=!1;if(Po(t,i),null===t.stateNode)Bl(e,t),al(t,n,r),sl(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=$o(c):c=$i(t,c=Oi(n)?Pi:_i.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,a,r,c),Ro=!1;var p=t.memoizedState;a.state=p,Bo(t,r,a,i),s=t.memoizedState,l!==r||p!==s||Li.current||Ro?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Ro||ol(t,n,l,r,p,s,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ao(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=$o(s):s=$i(t,s=Oi(n)?Pi:_i.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,a,r,s),Ro=!1,p=t.memoizedState,a.state=p,Bo(t,r,a,i);var h=t.memoizedState;l!==d||p!==h||Li.current||Ro?("function"===typeof f&&(rl(t,n,f,r),h=t.memoizedState),(c=Ro||ol(t,n,c,r,p,h,s)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _l(e,t,n,r,o,i)}function _l(e,t,n,r,i,o){Cl(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Vi(t,n,!1),Wl(e,t,o);r=t.stateNode,bl.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):yl(e,t,l,o),t.memoizedState=r.state,i&&Vi(t,n,!0),t.child}function Ll(e){var t=e.stateNode;t.pendingContext?Ni(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ni(0,t.context,!1),Xo(e,t.containerInfo)}function Pl(e,t,n,r,i){return ho(),go(i),t.flags|=256,yl(e,t,n,r),t.child}var $l,Ol,Tl,Nl,Ml={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vl(e,t,n){var r,i=t.pendingProps,a=ea.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),zi(ea,1&a),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,l?(i=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&i)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Rc(s,i,0,null),e=Mc(e,i,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Rl(n),t.memoizedState=Ml,e):Al(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,l){if(n)return 256&t.flags?(t.flags&=-257,Il(e,t,l,r=ul(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Rc({mode:"visible",children:r.children},i,0,null),(a=Mc(a,i,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Rl(l),t.memoizedState=Ml,a);if(0===(1&t.mode))return Il(e,t,l,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Il(e,t,l,r=ul(a=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),vl||s){if(null!==(r=Ls)){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|l))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Mo(e,i),nc(r,e,i,-1))}return gc(),Il(e,t,l,r=ul(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ci(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Ki[Qi++]=Xi,Ki[Qi++]=Gi,Ki[Qi++]=qi,Xi=e.id,Gi=e.overflow,qi=t),t=Al(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,a,n);if(l){l=i.fallback,s=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Tc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=Tc(r,l):(l=Mc(l,s,n,null)).flags|=2,l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,s=null===(s=e.child.memoizedState)?Rl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ml,i}return e=(l=e.child).sibling,i=Tc(l,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Al(e,t){return(t=Rc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Il(e,t,n,r){return null!==r&&go(r),wo(t,e.child,null,n),(e=Al(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Dl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Lo(e.return,t,n)}function Fl(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Yl(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(yl(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Dl(e,n,t);else if(19===e.tag)Dl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(zi(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fl(t,!0,n,null,o);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Rs|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Tc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Tc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hl(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ul(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ul(t),null;case 1:case 17:return Oi(t.type)&&Ti(),Ul(t),null;case 3:return r=t.stateNode,Go(),Ci(Li),Ci(_i),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ac(oo),oo=null))),Ol(e,t),Ul(t),null;case 5:Jo(t);var i=qo(Qo.current);if(n=t.type,null!==e&&null!=t.stateNode)Tl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ul(t),null}if(e=qo(Uo.current),po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pi]=t,r[fi]=a,e=0!==(1&t.mode),n){case"dialog":Ir("cancel",r),Ir("close",r);break;case"iframe":case"object":case"embed":Ir("load",r);break;case"video":case"audio":for(i=0;i<Mr.length;i++)Ir(Mr[i],r);break;case"source":Ir("error",r);break;case"img":case"image":case"link":Ir("error",r),Ir("load",r);break;case"details":Ir("toggle",r);break;case"input":X(r,a),Ir("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ir("invalid",r);break;case"textarea":ie(r,a),Ir("invalid",r)}for(var s in be(n,a),i=null,a)if(a.hasOwnProperty(s)){var c=a[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Ir("scroll",r)}switch(n){case"input":U(r),J(r,a,!0);break;case"textarea":U(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Jr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pi]=t,e[fi]=r,$l(e,t,!1,!1),t.stateNode=e;e:{switch(s=ve(n,r),n){case"dialog":Ir("cancel",e),Ir("close",e),i=r;break;case"iframe":case"object":case"embed":Ir("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)Ir(Mr[i],e);i=r;break;case"source":Ir("error",e),i=r;break;case"img":case"image":case"link":Ir("error",e),Ir("load",e),i=r;break;case"details":Ir("toggle",e),i=r;break;case"input":X(e,r),i=q(e,r),Ir("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),Ir("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Ir("invalid",e)}for(a in be(n,i),c=i)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?me(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Ir("scroll",e):null!=u&&v(e,a,u,s))}switch(n){case"input":U(e),J(e,r,!1);break;case"textarea":U(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ul(t),null;case 6:if(e&&null!=t.stateNode)Nl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=qo(Qo.current),qo(Uo.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Ul(t),null;case 13:if(Ci(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))fo(),ho(),t.flags|=98560,a=!1;else if(a=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[pi]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ul(t),a=!1}else null!==oo&&(ac(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ns&&(Ns=3):gc())),null!==t.updateQueue&&(t.flags|=4),Ul(t),null);case 4:return Go(),Ol(e,t),null===e&&Yr(t.stateNode.containerInfo),Ul(t),null;case 10:return _o(t.type._context),Ul(t),null;case 19:if(Ci(ea),null===(a=t.memoizedState))return Ul(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)Hl(a,!1);else{if(0!==Ns||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,Hl(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return zi(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Ge()>Ys&&(t.flags|=128,r=!0,Hl(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hl(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!io)return Ul(t),null}else 2*Ge()-a.renderingStartTime>Ys&&1073741824!==n&&(t.flags|=128,r=!0,Hl(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ge(),t.sibling=null,n=ea.current,zi(ea,r?1&n|2:1&n),t):(Ul(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Ul(t),6&t.subtreeFlags&&(t.flags|=8192)):Ul(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Ql(e,t){switch(to(t),t.tag){case 1:return Oi(t.type)&&Ti(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Go(),Ci(Li),Ci(_i),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Jo(t),null;case 13:if(Ci(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(ea),null;case 4:return Go(),null;case 10:return _o(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}$l=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Tl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qo(Uo.current);var o,a=null;switch(n){case"input":i=q(e,i),r=q(e,r),a=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(u in be(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Ir("scroll",e),a||s===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Nl=function(e,t,n,r){n!==r&&(t.flags|=4)};var ql=!1,Xl=!1,Gl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Sc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Sc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&es(t,n,o)}i=i.next}while(i!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[gi],delete t[mi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)fs(e,t,n),n=n.sibling}function fs(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(l){}switch(n.tag){case 5:Xl||Jl(n,t);case 6:var r=us,i=ds;us=null,ps(e,t,n),ds=i,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?si(e.parentNode,n):1===e.nodeType&&si(e,n),Yt(e)):si(us,n.stateNode));break;case 4:r=us,i=ds,us=n.stateNode.containerInfo,ds=!0,ps(e,t,n),us=r,ds=i;break;case 0:case 11:case 14:case 15:if(!Xl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&es(n,t,a),i=i.next}while(i!==r)}ps(e,t,n);break;case 1:if(!Xl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Sc(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(Xl=(r=Xl)||null!==n.memoizedState,ps(e,t,n),Xl=r):ps(e,t,n);break;default:ps(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gl),t.forEach((function(t){var r=_c.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(o(160));fs(a,l,i),us=null,ds=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){Sc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),xs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(m){Sc(e,e.return,m)}try{ns(5,e,e.return)}catch(m){Sc(e,e.return,m)}}break;case 1:gs(t,e),xs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(gs(t,e),xs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(m){Sc(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===a.type&&null!=a.name&&G(i,a),ve(s,l);var u=ve(s,a);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?me(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):v(i,d,p,u)}switch(s){case"input":Z(i,a);break;case"textarea":oe(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(i,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[fi]=a}catch(m){Sc(e,e.return,m)}}break;case 6:if(gs(t,e),xs(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(m){Sc(e,e.return,m)}}break;case 3:if(gs(t,e),xs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Yt(t.containerInfo)}catch(m){Sc(e,e.return,m)}break;case 4:default:gs(t,e),xs(e);break;case 13:gs(t,e),xs(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Fs=Ge())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Xl=(u=Xl)||d,gs(t,e),Xl=u):gs(t,e),xs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(p=Zl=d;null!==Zl;){switch(h=(f=Zl).child,f.tag){case 0:case 11:case 14:case 15:ns(4,f,f.return);break;case 1:Jl(f,f.return);var g=f.stateNode;if("function"===typeof g.componentWillUnmount){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Sc(r,n,m)}}break;case 5:Jl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==h?(h.return=f,Zl=h):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=ge("display",l))}catch(m){Sc(e,e.return,m)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(m){Sc(e,e.return,m)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gs(t,e),xs(e),4&r&&hs(e);case 21:}}function xs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cs(e,ls(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,ls(e),a);break;default:throw Error(o(161))}}catch(l){Sc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Zl=e,vs(e,t,n)}function vs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var i=Zl,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||ql;if(!a){var l=i.alternate,s=null!==l&&null!==l.memoizedState||Xl;l=ql;var c=Xl;if(ql=a,(Xl=s)&&!c)for(Zl=i;null!==Zl;)s=(a=Zl).child,22===a.tag&&null!==a.memoizedState?ks(i):null!==s?(s.return=a,Zl=s):ks(i);for(;null!==o;)Zl=o,vs(o,t,n),o=o.sibling;Zl=i,ql=l,Xl=c}ys(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Zl=o):ys(e)}}function ys(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Wo(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Yt(p)}}}break;default:throw Error(o(163))}Xl||512&t.flags&&is(t)}catch(f){Sc(t,t.return,f)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Sc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(s){Sc(t,i,s)}}var o=t.return;try{is(t)}catch(s){Sc(t,o,s)}break;case 5:var a=t.return;try{is(t)}catch(s){Sc(t,a,s)}}}catch(s){Sc(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var js,Ss=Math.ceil,Cs=y.ReactCurrentDispatcher,zs=y.ReactCurrentOwner,Es=y.ReactCurrentBatchConfig,_s=0,Ls=null,Ps=null,$s=0,Os=0,Ts=Si(0),Ns=0,Ms=null,Rs=0,Vs=0,As=0,Is=null,Ds=null,Fs=0,Ys=1/0,Bs=null,Ws=!1,Hs=null,Us=null,Ks=!1,Qs=null,qs=0,Xs=0,Gs=null,Zs=-1,Js=0;function ec(){return 0!==(6&_s)?Ge():-1!==Zs?Zs:Zs=Ge()}function tc(e){return 0===(1&e.mode)?1:0!==(2&_s)&&0!==$s?$s&-$s:null!==mo.transition?(0===Js&&(Js=gt()),Js):0!==(e=vt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nc(e,t,n,r){if(50<Xs)throw Xs=0,Gs=null,Error(o(185));xt(e,n,r),0!==(2&_s)&&e===Ls||(e===Ls&&(0===(2&_s)&&(Vs|=n),4===Ns&&lc(e,$s)),rc(e,r),1===n&&0===_s&&0===(1&t.mode)&&(Ys=Ge()+500,Ii&&Yi()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),l=1<<a,s=i[a];-1===s?0!==(l&n)&&0===(l&r)||(i[a]=ft(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=pt(e,e===Ls?$s:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Ii=!0,Fi(e)}(sc.bind(null,e)):Fi(sc.bind(null,e)),ai((function(){0===(6&_s)&&Yi()})),n=null;else{switch(yt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Lc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Zs=-1,Js=0,0!==(6&_s))throw Error(o(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Ls?$s:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mc(e,r);else{t=r;var i=_s;_s|=2;var a=hc();for(Ls===e&&$s===t||(Bs=null,Ys=Ge()+500,pc(e,t));;)try{bc();break}catch(s){fc(e,s)}Eo(),Cs.current=a,_s=i,null!==Ps?t=0:(Ls=null,$s=0,t=Ns)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=oc(e,i))),1===t)throw n=Ms,pc(e,0),lc(e,r),rc(e,Ge()),n;if(6===t)lc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!lr(o(),i))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=mc(e,r))&&(0!==(a=ht(e))&&(r=a,t=oc(e,a))),1===t))throw n=Ms,pc(e,0),lc(e,r),rc(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,Ds,Bs);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Fs+500-Ge())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Ds,Bs),t);break}wc(e,Ds,Bs);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>i&&(i=l),r&=~a}if(r=i,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ss(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Ds,Bs),r);break}wc(e,Ds,Bs);break;default:throw Error(o(329))}}}return rc(e,Ge()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=Is;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=mc(e,t))&&(t=Ds,Ds=n,null!==t&&ac(t)),e}function ac(e){null===Ds?Ds=e:Ds.push.apply(Ds,e)}function lc(e,t){for(t&=~As,t&=~Vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&_s))throw Error(o(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Ge()),null;var n=mc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Ms,pc(e,0),lc(e,t),rc(e,Ge()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ds,Bs),rc(e,Ge()),null}function cc(e,t){var n=_s;_s|=1;try{return e(t)}finally{0===(_s=n)&&(Ys=Ge()+500,Ii&&Yi())}}function uc(e){null!==Qs&&0===Qs.tag&&0===(6&_s)&&kc();var t=_s;_s|=1;var n=Es.transition,r=vt;try{if(Es.transition=null,vt=1,e)return e()}finally{vt=r,Es.transition=n,0===(6&(_s=t))&&Yi()}}function dc(){Os=Ts.current,Ci(Ts)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Ps)for(n=Ps.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ti();break;case 3:Go(),Ci(Li),Ci(_i),ra();break;case 5:Jo(r);break;case 4:Go();break;case 13:case 19:Ci(ea);break;case 10:_o(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ls=e,Ps=e=Tc(e.current,null),$s=Os=t,Ns=0,Ms=null,As=Vs=Rs=0,Ds=Is=null,null!==Oo){for(t=0;t<Oo.length;t++)if(null!==(r=(n=Oo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}Oo=null}return e}function fc(e,t){for(;;){var n=Ps;try{if(Eo(),ia.current=Za,ua){for(var r=la.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ua=!1}if(aa=0,ca=sa=la=null,da=!1,pa=0,zs.current=null,null===n||null===n.return){Ns=1,Ms=t,Ps=null;break}e:{var a=e,l=n.return,s=n,c=t;if(t=$s,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ml(l);if(null!==h){h.flags&=-257,xl(h,l,s,0,t),1&h.mode&&gl(a,u,t),c=u;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(c),t.updateQueue=m}else g.add(c);break e}if(0===(1&t)){gl(a,u,t),gc();break e}c=Error(o(426))}else if(io&&1&s.mode){var x=ml(l);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xl(x,l,s,0,t),go(cl(c,s));break e}}a=c=cl(c,s),4!==Ns&&(Ns=2),null===Is?Is=[a]:Is.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Yo(a,fl(0,c,t));break e;case 1:s=c;var b=a.type,v=a.stateNode;if(0===(128&a.flags)&&("function"===typeof b.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===Us||!Us.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t,Yo(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}yc(n)}catch(y){t=y,Ps===n&&null!==n&&(Ps=n=n.return);continue}break}}function hc(){var e=Cs.current;return Cs.current=Za,null===e?Za:e}function gc(){0!==Ns&&3!==Ns&&2!==Ns||(Ns=4),null===Ls||0===(268435455&Rs)&&0===(268435455&Vs)||lc(Ls,$s)}function mc(e,t){var n=_s;_s|=2;var r=hc();for(Ls===e&&$s===t||(Bs=null,pc(e,t));;)try{xc();break}catch(i){fc(e,i)}if(Eo(),_s=n,Cs.current=r,null!==Ps)throw Error(o(261));return Ls=null,$s=0,Ns}function xc(){for(;null!==Ps;)vc(Ps)}function bc(){for(;null!==Ps&&!qe();)vc(Ps)}function vc(e){var t=js(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?yc(e):Ps=t,zs.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Os)))return void(Ps=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Ps=n);if(null===e)return Ns=6,void(Ps=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ps=t);Ps=t=e}while(null!==t);0===Ns&&(Ns=5)}function wc(e,t,n){var r=vt,i=Es.transition;try{Es.transition=null,vt=1,function(e,t,n,r){do{kc()}while(null!==Qs);if(0!==(6&_s))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Ls&&(Ps=Ls=null,$s=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Lc(tt,(function(){return kc(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Es.transition,Es.transition=null;var l=vt;vt=1;var s=_s;_s|=4,zs.current=null,function(e,t){if(ei=Wt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==i&&3!==p.nodeType||(s=l+i),p!==a||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(s=l),f===a&&++d===r&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Wt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,x=g.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),x);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(o(163))}}catch(w){Sc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}g=ts,ts=!1}(e,n),ms(n,e),hr(ti),Wt=!!ei,ti=ei=null,e.current=n,bs(n,e,i),Xe(),_s=s,vt=l,Es.transition=a}else e.current=n;if(Ks&&(Ks=!1,Qs=e,qs=i),a=e.pendingLanes,0===a&&(Us=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ws)throw Ws=!1,e=Hs,Hs=null,e;0!==(1&qs)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Gs?Xs++:(Xs=0,Gs=e):Xs=0,Yi()}(e,t,n,r)}finally{Es.transition=i,vt=r}return null}function kc(){if(null!==Qs){var e=yt(qs),t=Es.transition,n=vt;try{if(Es.transition=null,vt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,qs=0,0!==(6&_s))throw Error(o(331));var i=_s;for(_s|=4,Zl=e.current;null!==Zl;){var a=Zl,l=a.child;if(0!==(16&Zl.flags)){var s=a.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Zl=u;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var p=d.child;if(null!==p)p.return=d,Zl=p;else for(;null!==Zl;){var f=(d=Zl).sibling,h=d.return;if(os(d),d===u){Zl=null;break}if(null!==f){f.return=h,Zl=f;break}Zl=h}}}var g=a.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var x=m.sibling;m.sibling=null,m=x}while(null!==m)}}Zl=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(a=Zl).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var b=a.sibling;if(null!==b){b.return=a.return,Zl=b;break e}Zl=a.return}}var v=e.current;for(Zl=v;null!==Zl;){var y=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==y)y.return=l,Zl=y;else e:for(l=v;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){Sc(s,s.return,k)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(_s=i,Yi(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{vt=n,Es.transition=t}}return!1}function jc(e,t,n){e=Do(e,t=fl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function Sc(e,t,n){if(3===e.tag)jc(e,e,n);else for(;null!==t;){if(3===t.tag){jc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Us||!Us.has(r))){t=Do(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ls===e&&($s&n)===n&&(4===Ns||3===Ns&&(130023424&$s)===$s&&500>Ge()-Fs?pc(e,0):As|=n),rc(e,t)}function zc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Mo(e,t))&&(xt(e,t,n),rc(e,n))}function Ec(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),zc(e,n)}function _c(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),zc(e,n)}function Lc(e,t){return Ke(e,t)}function Pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $c(e,t,n,r){return new Pc(e,t,n,r)}function Oc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Tc(e,t){var n=e.alternate;return null===n?((n=$c(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nc(e,t,n,r,i,a){var l=2;if(r=e,"function"===typeof e)Oc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case j:return Mc(n.children,i,a,t);case S:l=8,i|=8;break;case C:return(e=$c(12,n,t,2|i)).elementType=C,e.lanes=a,e;case L:return(e=$c(13,n,t,i)).elementType=L,e.lanes=a,e;case P:return(e=$c(19,n,t,i)).elementType=P,e.lanes=a,e;case T:return Rc(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case z:l=10;break e;case E:l=9;break e;case _:l=11;break e;case $:l=14;break e;case O:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=$c(l,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Mc(e,t,n,r){return(e=$c(7,e,r,t)).lanes=n,e}function Rc(e,t,n,r){return(e=$c(22,e,r,t)).elementType=T,e.lanes=n,e.stateNode={isHidden:!1},e}function Vc(e,t,n){return(e=$c(6,e,null,t)).lanes=n,e}function Ac(e,t,n){return(t=$c(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ic(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dc(e,t,n,r,i,o,a,l,s){return e=new Ic(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=$c(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vo(o),e}function Fc(e){if(!e)return Ei;e:{if(Ye(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Oi(n))return Mi(e,n,t)}return t}function Yc(e,t,n,r,i,o,a,l,s){return(e=Dc(n,r,!0,e,0,o,0,l,s)).context=Fc(null),n=e.current,(o=Io(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Do(n,o,i),e.current.lanes=i,xt(e,i,r),rc(e,r),e}function Bc(e,t,n,r){var i=t.current,o=ec(),a=tc(i);return n=Fc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Io(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Do(i,t,a))&&(nc(e,i,a,o),Fo(e,i,a)),a}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Uc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}js=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Li.current)vl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vl=!1,function(e,t,n){switch(t.tag){case 3:Ll(t),ho();break;case 5:Zo(t);break;case 1:Oi(t.type)&&Ri(t);break;case 4:Xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;zi(jo,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(zi(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Vl(e,t,n):(zi(ea,1&ea.current),null!==(e=Wl(e,t,n))?e.sibling:null);zi(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Yl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),zi(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Sl(e,t,n)}return Wl(e,t,n)}(e,t,n);vl=0!==(131072&e.flags)}else vl=!1,io&&0!==(1048576&t.flags)&&Ji(t,Ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bl(e,t),e=t.pendingProps;var i=$i(t,_i.current);Po(t,n),i=ma(null,t,r,e,i,n);var a=xa();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oi(r)?(a=!0,Ri(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Vo(t),i.updater=il,t.stateNode=i,i._reactInternals=t,sl(t,r,e,n),t=_l(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),yl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Oc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===_)return 11;if(e===$)return 14}return 2}(r),e=nl(r,e),i){case 0:t=zl(null,t,r,e,n);break e;case 1:t=El(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,zl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 1:return r=t.type,i=t.pendingProps,El(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 3:e:{if(Ll(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Ao(e,t),Bo(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Pl(e,t,r,n,i=cl(Error(o(423)),t));break e}if(r!==i){t=Pl(e,t,r,n,i=cl(Error(o(424)),t));break e}for(ro=ci(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===i){t=Wl(e,t,n);break e}yl(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&co(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,l=i.children,ni(r,i)?l=null:null!==a&&ni(r,a)&&(t.flags|=32),Cl(e,t),yl(e,t,l,n),t.child;case 6:return null===e&&co(t),null;case 13:return Vl(e,t,n);case 4:return Xo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):yl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 7:return yl(e,t,t.pendingProps,n),t.child;case 8:case 12:return yl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,zi(jo,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===i.children&&!Li.current){t=Wl(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Io(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Lo(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Lo(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}yl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Po(t,n),r=r(i=$o(i)),t.flags|=1,yl(e,t,r,n),t.child;case 14:return i=nl(r=t.type,t.pendingProps),kl(e,t,r,i=nl(r.type,i),n);case 15:return jl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nl(r,i),Bl(e,t),t.tag=1,Oi(r)?(e=!0,Ri(t)):e=!1,Po(t,n),al(t,r,i),sl(t,r,i,n),_l(null,t,r,!0,e,n);case 19:return Yl(e,t,n);case 22:return Sl(e,t,n)}throw Error(o(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}function qc(e){this._internalRoot=e}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function Jc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var l=i;i=function(){var e=Wc(a);l.call(e)}}Bc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Wc(a);o.call(e)}}var a=Yc(t,r,e,0,null,!1,0,"",Zc);return e._reactRootContainer=a,e[hi]=a.current,Yr(8===e.nodeType?e.parentNode:e),uc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var l=r;r=function(){var e=Wc(s);l.call(e)}}var s=Dc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=s,e[hi]=s.current,Yr(8===e.nodeType?e.parentNode:e),uc((function(){Bc(t,s,n,r)})),s}(n,t,e,i,r);return Wc(a)}qc.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Bc(e,t,null,null)},qc.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Bc(null,e,null,null)})),t[hi]=null}},qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&0!==t&&t<Tt[n].priority;n++);Tt.splice(n,0,e),0===n&&Vt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),rc(t,Ge()),0===(6&_s)&&(Ys=Ge()+500,Yi()))}break;case 13:uc((function(){var t=Mo(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Uc(e,1)}},kt=function(e){if(13===e.tag){var t=Mo(e,134217728);if(null!==t)nc(t,e,134217728,ec());Uc(e,134217728)}},jt=function(e){if(13===e.tag){var t=tc(e),n=Mo(e,t);if(null!==n)nc(n,e,t,ec());Uc(e,t)}},St=function(){return vt},Ct=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));K(r),Z(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},_e=cc,Le=uc;var eu={usingClientEntryPoint:!1,Events:[vi,yi,wi,ze,Ee,cc]},tu={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xc(e))throw Error(o(299));var n=!1,r="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Dc(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Yr(8===e.nodeType?e.parentNode:e),new Qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Gc(t))throw Error(o(200));return Jc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Yc(t,null,e,1,null!=n?n:null,i,0,a,l),e[hi]=t.current,Yr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qc(t)},t.render=function(e,t,n){if(!Gc(t))throw Error(o(200));return Jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc((function(){Jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Jc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},763:(e,t,n)=>{"use strict";e.exports=n(983)},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,y=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case o:case l:case a:case f:return e;default:switch(e=e&&e.$$typeof){case c:case p:case m:case g:case s:return e;default:return t}}case i:return t}}}function k(e){return w(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=o,t.Lazy=m,t.Memo=g,t.Portal=i,t.Profiler=l,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return k(e)||w(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===g},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===d||e===l||e===a||e===f||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===s||e.$$typeof===c||e.$$typeof===p||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===x)},t.typeOf=w}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".2e637a8a.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="homevision:";n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[i];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=o);var a=n.p+n.u(t),l=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,o,a=r[0],l=r[1],s=r[2],c=0;if(a.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)s(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkhomevision=self.webpackChunkhomevision||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=n(528),i=n(324),o=n.n(i);const a=function(e){function t(e,r,s,c,p){for(var f,h,g,m,y,k=0,j=0,S=0,C=0,z=0,O=0,N=g=f=0,R=0,V=0,A=0,I=0,D=s.length,F=D-1,Y="",B="",W="",H="";R<D;){if(h=s.charCodeAt(R),R===F&&0!==j+C+S+k&&(0!==j&&(h=47===j?10:47),C=S=k=0,D++,F++),0===j+C+S+k){if(R===F&&(0<V&&(Y=Y.replace(d,"")),0<Y.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:Y+=s.charAt(R)}h=59}switch(h){case 123:for(f=(Y=Y.trim()).charCodeAt(0),g=1,I=++R;R<D;){switch(h=s.charCodeAt(R)){case 123:g++;break;case 125:g--;break;case 47:switch(h=s.charCodeAt(R+1)){case 42:case 47:e:{for(N=R+1;N<F;++N)switch(s.charCodeAt(N)){case 47:if(42===h&&42===s.charCodeAt(N-1)&&R+2!==N){R=N+1;break e}break;case 10:if(47===h){R=N+1;break e}}R=N}}break;case 91:h++;case 40:h++;case 34:case 39:for(;R++<F&&s.charCodeAt(R)!==h;);}if(0===g)break;R++}if(g=s.substring(I,R),0===f&&(f=(Y=Y.replace(u,"").trim()).charCodeAt(0)),64===f){switch(0<V&&(Y=Y.replace(d,"")),h=Y.charCodeAt(1)){case 100:case 109:case 115:case 45:V=r;break;default:V=$}if(I=(g=t(r,V,g,h,p+1)).length,0<T&&(y=l(3,g,V=n($,Y,A),r,_,E,I,h,p,c),Y=V.join(""),void 0!==y&&0===(I=(g=y.trim()).length)&&(h=0,g="")),0<I)switch(h){case 115:Y=Y.replace(w,a);case 100:case 109:case 45:g=Y+"{"+g+"}";break;case 107:g=(Y=Y.replace(x,"$1 $2"))+"{"+g+"}",g=1===P||2===P&&o("@"+g,3)?"@-webkit-"+g+"@"+g:"@"+g;break;default:g=Y+g,112===c&&(B+=g,g="")}else g=""}else g=t(r,n(r,Y,A),g,c,p+1);W+=g,g=A=V=N=f=0,Y="",h=s.charCodeAt(++R);break;case 125:case 59:if(1<(I=(Y=(0<V?Y.replace(d,""):Y).trim()).length))switch(0===N&&(f=Y.charCodeAt(0),45===f||96<f&&123>f)&&(I=(Y=Y.replace(" ",":")).length),0<T&&void 0!==(y=l(1,Y,r,e,_,E,B.length,c,p,c))&&0===(I=(Y=y.trim()).length)&&(Y="\0\0"),f=Y.charCodeAt(0),h=Y.charCodeAt(1),f){case 0:break;case 64:if(105===h||99===h){H+=Y+s.charAt(R);break}default:58!==Y.charCodeAt(I-1)&&(B+=i(Y,f,h,Y.charCodeAt(2)))}A=V=N=f=0,Y="",h=s.charCodeAt(++R)}}switch(h){case 13:case 10:47===j?j=0:0===1+f&&107!==c&&0<Y.length&&(V=1,Y+="\0"),0<T*M&&l(0,Y,r,e,_,E,B.length,c,p,c),E=1,_++;break;case 59:case 125:if(0===j+C+S+k){E++;break}default:switch(E++,m=s.charAt(R),h){case 9:case 32:if(0===C+k+j)switch(z){case 44:case 58:case 9:case 32:m="";break;default:32!==h&&(m=" ")}break;case 0:m="\\0";break;case 12:m="\\f";break;case 11:m="\\v";break;case 38:0===C+j+k&&(V=A=1,m="\f"+m);break;case 108:if(0===C+j+k+L&&0<N)switch(R-N){case 2:112===z&&58===s.charCodeAt(R-3)&&(L=z);case 8:111===O&&(L=O)}break;case 58:0===C+j+k&&(N=R);break;case 44:0===j+S+C+k&&(V=1,m+="\r");break;case 34:case 39:0===j&&(C=C===h?0:0===C?h:C);break;case 91:0===C+j+S&&k++;break;case 93:0===C+j+S&&k--;break;case 41:0===C+j+k&&S--;break;case 40:if(0===C+j+k){if(0===f)if(2*z+3*O===533);else f=1;S++}break;case 64:0===j+S+C+k+N+g&&(g=1);break;case 42:case 47:if(!(0<C+k+S))switch(j){case 0:switch(2*h+3*s.charCodeAt(R+1)){case 235:j=47;break;case 220:I=R,j=42}break;case 42:47===h&&42===z&&I+2!==R&&(33===s.charCodeAt(I+2)&&(B+=s.substring(I,R+1)),m="",j=0)}}0===j&&(Y+=m)}O=z,z=h,R++}if(0<(I=B.length)){if(V=r,0<T&&(void 0!==(y=l(2,B,V,e,_,E,I,c,p,c))&&0===(B=y).length))return H+B+W;if(B=V.join(",")+"{"+B+"}",0!==P*L){switch(2!==P||o(B,2)||(L=0),L){case 111:B=B.replace(v,":-moz-$1")+B;break;case 112:B=B.replace(b,"::-webkit-input-$1")+B.replace(b,"::-moz-$1")+B.replace(b,":-ms-input-$1")+B}L=0}}return H+B+W}function n(e,t,n){var i=t.trim().split(g);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var l=0;for(e=0===a?"":e[0]+" ";l<o;++l)t[l]=r(e,t[l],n).trim();break;default:var s=l=0;for(t=[];l<o;++l)for(var c=0;c<a;++c)t[s++]=r(e[c]+" ",i[l],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,n,r){var a=e+";",l=2*t+3*n+4*r;if(944===l){e=a.indexOf(":",9)+1;var s=a.substring(e,a.length-1).trim();return s=a.substring(0,e).trim()+s+";",1===P||2===P&&o(s,1)?"-webkit-"+s+s:s}if(0===P||2===P&&!o(a,1))return a;switch(l){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(z,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(s=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+s+a;case 1005:return f.test(a)?a.replace(p,":-webkit-")+a.replace(p,":-moz-")+a:a;case 1e3:switch(t=(s=a.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=a.replace(y,"tb");break;case 232:s=a.replace(y,"tb-rl");break;case 220:s=a.replace(y,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+s+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,l=(s=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:a=a.replace(s,"-webkit-"+s)+";"+a;break;case 207:case 102:a=a.replace(s,"-webkit-"+(102<l?"inline-":"")+"box")+";"+a.replace(s,"-webkit-"+s)+";"+a.replace(s,"-ms-"+s+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return s=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+s+"-ms-flex-"+s+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(j,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(j,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):a.replace(s,"-webkit-"+s)+a.replace(s,"-moz-"+s.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===n+r&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+a}return a}function o(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),N(2!==t?r:r.replace(S,"$1"),n,t)}function a(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(k," or ($1)").substring(4):"("+t+")"}function l(e,t,n,r,i,o,a,l,s,u){for(var d,p=0,f=t;p<T;++p)switch(d=O[p].call(c,e,f,n,r,i,o,a,l,s,u)){case void 0:case!1:case!0:case null:break;default:f=d}if(f!==t)return f}function s(e){return void 0!==(e=e.prefix)&&(N=null,e?"function"!==typeof e?P=1:(P=2,N=e):P=0),s}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<T){var i=l(-1,n,r,r,_,E,0,0,0,0);void 0!==i&&"string"===typeof i&&(n=i)}var o=t($,r,n,0,0);return 0<T&&(void 0!==(i=l(-2,o,r,r,_,E,o.length,0,0,0))&&(o=i)),L=0,E=_=1,o}var u=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,f=/zoo|gra/,h=/([,: ])(transform)/g,g=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,v=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,j=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,E=1,_=1,L=0,P=1,$=[],O=[],T=0,N=null,M=0;return c.use=function e(t){switch(t){case void 0:case null:T=O.length=0;break;default:if("function"===typeof t)O[T++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else M=0|!!t}return e},c.set=s,void 0!==e&&s(e),c};const l={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function s(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=s((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d=n(219),p=n.n(d);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},g=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,r.QP)(e)},m=Object.freeze([]),x=Object.freeze({});function b(e){return"function"==typeof e}function v(e){return e.displayName||e.name||"Component"}function y(e){return e&&"string"==typeof e.styledComponentId}var w="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",k="undefined"!=typeof window&&"HTMLElement"in window,j=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY))),S={};function C(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var z=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&C(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=0,s=t.length;l<s;l++)this.tag.insertRule(a,t[l])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),E=new Map,_=new Map,L=1,P=function(e){if(E.has(e))return E.get(e);for(;_.has(L);)L++;var t=L++;return E.set(e,t),_.set(t,e),t},$=function(e){return _.get(e)},O=function(e,t){t>=L&&(L=t+1),E.set(e,t),_.set(t,e)},T="style["+w+'][data-styled-version="5.3.11"]',N=new RegExp("^"+w+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),M=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},R=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(N);if(l){var s=0|parseInt(l[1],10),c=l[2];0!==s&&(O(c,s),M(e,c,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},V=function(){return n.nc},A=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(w))return r}}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(w,"active"),r.setAttribute("data-styled-version","5.3.11");var a=V();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},I=function(){function e(e){var t=this.element=A(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}C(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),D=function(){function e(e){var t=this.element=A(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),F=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Y=k,B={isServer:!k,useCSSOMInjection:!j},W=function(){function e(e,t,n){void 0===e&&(e=x),void 0===t&&(t={}),this.options=f({},B,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&k&&Y&&(Y=!1,function(e){for(var t=document.querySelectorAll(T),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(w)&&(R(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return P(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(f({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new F(i):r?new I(i):new D(i),new z(e)));var e,t,n,r,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(P(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(P(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(P(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++){var o=$(i);if(void 0!==o){var a=e.names.get(o),l=t.getGroup(i);if(a&&l&&a.size){var s=w+".g"+i+'[id="'+o+'"]',c="";void 0!==a&&a.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+l+s+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),H=/(a)(d)/gi,U=function(e){return String.fromCharCode(e+(e>25?39:97))};function K(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=U(t%52)+n;return(U(t%52)+n).replace(H,"$1-$2")}var Q=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},q=function(e){return Q(5381,e)};function X(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!y(n))return!1}return!0}var G=q("5.3.11"),Z=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&X(e),this.componentId=t,this.baseHash=Q(G,t),this.baseStyle=n,W.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var o=me(this.rules,e,t,n).join(""),a=K(Q(this.baseHash,o)>>>0);if(!t.hasNameForId(r,a)){var l=n(o,"."+a,void 0,r);t.insertRules(r,a,l)}i.push(a),this.staticRulesId=a}else{for(var s=this.rules.length,c=Q(this.baseHash,n.hash),u="",d=0;d<s;d++){var p=this.rules[d];if("string"==typeof p)u+=p;else if(p){var f=me(p,e,t,n),h=Array.isArray(f)?f.join(""):f;c=Q(c,h+d),u+=h}}if(u){var g=K(c>>>0);if(!t.hasNameForId(r,g)){var m=n(u,"."+g,void 0,r);t.insertRules(r,g,m)}i.push(g)}}return i.join(" ")},e}(),J=/^\s*\/\/.*$/gm,ee=[":","[",".","#"];function te(e){var t,n,r,i,o=void 0===e?x:e,l=o.options,s=void 0===l?x:l,c=o.plugins,u=void 0===c?m:c,d=new a(s),p=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,i,o,a,l,s,c,u,d){switch(n){case 1:if(0===u&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(i[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){p.push(e)})),h=function(e,r,o){return 0===r&&-1!==ee.indexOf(o[n.length])||o.match(i)?e:"."+t};function g(e,o,a,l){void 0===l&&(l="&");var s=e.replace(J,""),c=o&&a?a+" "+o+" { "+s+" }":s;return t=l,n=o,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(a||!o?"":o,c)}return d.use([].concat(u,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,h))},f,function(e){if(-2===e){var t=p;return p=[],t}}])),g.hash=u.length?u.reduce((function(e,t){return t.name||C(15),Q(e,t.name)}),5381).toString():"",g}var ne=e.createContext(),re=(ne.Consumer,e.createContext()),ie=(re.Consumer,new W),oe=te();function ae(){return(0,e.useContext)(ne)||ie}function le(){return(0,e.useContext)(re)||oe}function se(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=ae(),l=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target]),s=(0,e.useMemo)((function(){return te({options:{prefix:!t.disableVendorPrefixes},plugins:r})}),[t.disableVendorPrefixes,r]);return(0,e.useEffect)((function(){o()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]),e.createElement(ne.Provider,{value:l},e.createElement(re.Provider,{value:s},t.children))}var ce=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=oe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return C(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=oe),this.name+e.hash},e}(),ue=/([A-Z])/,de=/([A-Z])/g,pe=/^ms-/,fe=function(e){return"-"+e.toLowerCase()};function he(e){return ue.test(e)?e.replace(de,fe).replace(pe,"-ms-"):e}var ge=function(e){return null==e||!1===e||""===e};function me(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)""!==(i=me(e[a],t,n,r))&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}return ge(e)?"":y(e)?"."+e.styledComponentId:b(e)?"function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t?e:me(e(t),t,n,r):e instanceof ce?n?(e.inject(n,r),e.getName(r)):e:g(e)?function e(t,n){var r,i,o=[];for(var a in t)t.hasOwnProperty(a)&&!ge(t[a])&&(Array.isArray(t[a])&&t[a].isCss||b(t[a])?o.push(he(a)+":",t[a],";"):g(t[a])?o.push.apply(o,e(t[a],a)):o.push(he(a)+": "+(r=a,(null==(i=t[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||r in l||r.startsWith("--")?String(i).trim():i+"px")+";")));return n?[n+" {"].concat(o,["}"]):o}(e):e.toString();var c}var xe=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||g(e)?xe(me(h(m,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:xe(me(h(e,n)))}new Set;var ve=function(e,t,n){return void 0===n&&(n=x),e.theme!==n.theme&&e.theme||t||n.theme},ye=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function ke(e){return e.replace(ye,"-").replace(we,"")}var je=function(e){return K(q(e)>>>0)};function Se(e){return"string"==typeof e&&!0}var Ce=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},ze=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ee(e,t,n){var r=e[n];Ce(t)&&Ce(r)?_e(r,t):e[n]=t}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Ce(a))for(var l in a)ze(l)&&Ee(e,a[l],l)}return e}var Le=e.createContext();Le.Consumer;var Pe={};function $e(t,n,r){var i=y(t),o=!Se(t),a=n.attrs,l=void 0===a?m:a,s=n.componentId,c=void 0===s?function(e,t){var n="string"!=typeof e?"sc":ke(e);Pe[n]=(Pe[n]||0)+1;var r=n+"-"+je("5.3.11"+n+Pe[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):s,d=n.displayName,h=void 0===d?function(e){return Se(e)?"styled."+e:"Styled("+v(e)+")"}(t):d,g=n.displayName&&n.componentId?ke(n.displayName)+"-"+n.componentId:n.componentId||c,w=i&&t.attrs?Array.prototype.concat(t.attrs,l).filter(Boolean):l,k=n.shouldForwardProp;i&&t.shouldForwardProp&&(k=n.shouldForwardProp?function(e,r,i){return t.shouldForwardProp(e,r,i)&&n.shouldForwardProp(e,r,i)}:t.shouldForwardProp);var j,S=new Z(r,g,i?t.componentStyle:void 0),C=S.isStatic&&0===l.length,z=function(t,n){return function(t,n,r,i){var o=t.attrs,a=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.shouldForwardProp,d=t.styledComponentId,p=t.target,h=function(e,t,n){void 0===e&&(e=x);var r=f({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,o,a=e;for(t in b(a)&&(a=a(r)),a)r[t]=i[t]="className"===t?(n=i[t],o=a[t],n&&o?n+" "+o:n||o):a[t]})),[r,i]}(ve(n,(0,e.useContext)(Le),l)||x,n,o),g=h[0],m=h[1],v=function(e,t,n){var r=ae(),i=le();return t?e.generateAndInjectStyles(x,r,i):e.generateAndInjectStyles(n,r,i)}(a,i,g),y=r,w=m.$as||n.$as||m.as||n.as||p,k=Se(w),j=m!==n?f({},n,{},m):n,S={};for(var C in j)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?S.as=j[C]:(c?c(C,u,w):!k||u(C))&&(S[C]=j[C]));return n.style&&m.style!==n.style&&(S.style=f({},n.style,{},m.style)),S.className=Array.prototype.concat(s,d,v!==d?v:null,n.className,m.className).filter(Boolean).join(" "),S.ref=y,(0,e.createElement)(w,S)}(j,t,n,C)};return z.displayName=h,(j=e.forwardRef(z)).attrs=w,j.componentStyle=S,j.displayName=h,j.shouldForwardProp=k,j.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):m,j.styledComponentId=g,j.target=i?t.target:t,j.withComponent=function(e){var t=n.componentId,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["componentId"]),o=t&&t+"-"+(Se(e)?e:ke(v(e)));return $e(e,f({},i,{attrs:w,componentId:o}),r)},Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?_e({},t.defaultProps,e):e}}),Object.defineProperty(j,"toString",{value:function(){return"."+j.styledComponentId}}),o&&p()(j,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),j}var Oe=function(e){return function e(t,n,i){if(void 0===i&&(i=x),!(0,r.Hy)(n))return C(1,String(n));var o=function(){return t(n,i,be.apply(void 0,arguments))};return o.withConfig=function(r){return e(t,n,f({},i,{},r))},o.attrs=function(r){return e(t,n,f({},i,{attrs:Array.prototype.concat(i.attrs,r).filter(Boolean)}))},o}($e,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Oe[e]=Oe(e)}));var Te=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=X(e),W.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var i=r(me(this.rules,t,n,r).join(""),""),o=this.componentId+e;n.insertRules(o,o,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&W.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Ne(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=be.apply(void 0,[e].concat(n)).join(""),o=je(i);return new ce(o,i)}!function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=V();return"<style "+[n&&'nonce="'+n+'"',w+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+e+"</style>"},this.getStyleTags=function(){return t.sealed?C(2):t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)return C(2);var r=((n={})[w]="",n["data-styled-version"]="5.3.11",n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),i=V();return i&&(r.nonce=i),[e.createElement("style",f({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new W({isServer:!0}),this.sealed=!1}var n=t.prototype;n.collectStyles=function(t){return this.sealed?C(2):e.createElement(se,{sheet:this.instance},t)},n.interleaveWithNodeStream=function(e){return C(3)}}();const Me=Oe;var Re=n(579);const Ve=Me.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 4px;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: 2px solid transparent;
  
  ${e=>e.fullWidth&&be`
    width: 100%;
  `}
  
  ${e=>e.primary&&be`
    background-color: var(--primary);
    color: var(--white);
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(203, 157, 118, 0.3);
    
    &:hover {
      background-color: #b78a63;
      border-color: #b78a63;
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(203, 157, 118, 0.4);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 5px 15px rgba(203, 157, 118, 0.3);
    }
  `}
  
  ${e=>e.outline&&be`
    background-color: transparent;
    color: var(--primary);
    border-color: var(--primary);
    
    &:hover {
      background-color: var(--primary);
      color: var(--white);
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(203, 157, 118, 0.3);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
    z-index: -1;
  }
  
  &:hover::before {
    left: 100%;
  }
`,Ae=e=>{let{primary:t=!0,outline:n=!1,children:r,onClick:i,type:o="button",className:a,fullWidth:l=!1,style:s}=e;return(0,Re.jsx)(Ve,{primary:t,outline:n,onClick:i,type:o,className:a,fullWidth:l,style:s,children:r})};var Ie=Object.defineProperty,De=(e,t,n)=>((e,t,n)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),Fe=new Map,Ye=new WeakMap,Be=0,We=void 0;function He(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(Ye.has(e)||(Be+=1,Ye.set(e,Be.toString())),Ye.get(e)):"0"}(e.root):e[t]}`)).toString()}function Ue(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:We;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=He(e);let n=Fe.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Fe.set(t,n)}return n}(n),l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),Fe.delete(i))}}e.Component;function Ke(){let{threshold:t,delay:n,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:l,initialInView:s,fallbackInView:c,onChange:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[p,f]=e.useState(null),h=e.useRef(u),[g,m]=e.useState({inView:!!s,entry:void 0});h.current=u,e.useEffect((()=>{if(l||!p)return;let e;return e=Ue(p,((t,n)=>{m({inView:t,entry:n}),h.current&&h.current(t,n),n.isIntersecting&&a&&e&&(e(),e=void 0)}),{root:o,rootMargin:i,threshold:t,trackVisibility:r,delay:n},c),()=>{e&&e()}}),[Array.isArray(t)?t.toString():t,p,o,i,a,l,r,c,n]);const x=null==(d=g.entry)?void 0:d.target,b=e.useRef(void 0);p||!x||a||l||b.current===x||(b.current=x,m({inView:!!s,entry:void 0}));const v=[f,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const Qe=Ne`
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`,qe=Ne`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Xe=Ne`
  0% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.5), 0 0 10px rgba(203, 157, 118, 0);
  }
  50% {
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.7), 0 0 20px rgba(203, 157, 118, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.5), 0 0 10px rgba(203, 157, 118, 0);
  }
`,Ge=(Ne`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`),Ze=Ne`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,Je=(Ne`
  0% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(203, 157, 118, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0);
  }
`,Ne`
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`),et=Ne`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,tt=((function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=be.apply(void 0,[t].concat(r)),a="sc-global-"+je(JSON.stringify(o)),l=new Te(o,a);function s(t){var n=ae(),r=le(),i=(0,e.useContext)(Le),o=(0,e.useRef)(n.allocateGSInstance(a)).current;return n.server&&c(o,t,n,i,r),(0,e.useLayoutEffect)((function(){if(!n.server)return c(o,t,n,i,r),function(){return l.removeStyles(o,n)}}),[o,t,n,i,r]),null}function c(e,t,n,r,i){if(l.isStatic)l.renderStyles(e,S,n,i);else{var o=f({},t,{theme:ve(t,r,s.defaultProps)});l.renderStyles(e,o,n,i)}}return e.memo(s)})`
  .hero-video {
    will-change: transform;
    transition: all 1.5s ease-in-out;
  }
  
  .hero-video.in-view {
    transform: scale(1.05);
  }
  
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,Me.section`
  position: relative;
  color: #fff;
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #0a0a0a;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`,Me.div`
  flex: 0.6;
  position: relative;
  overflow: hidden;
  height: 100vh;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  @media (max-width: 768px) {
    height: 50vh;
  }
`,Me.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #0a0a0a;
  transform: translateZ(-50px) scale(1.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 0.4));
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 10, 0.4) 100%);
    z-index: 2;
    opacity: 0.5;
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 1;
  }
`,Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
`,Me.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  background: rgba(203, 157, 118, 0.2);
  border-radius: 50%;
  top: ${e=>e.posY}%;
  left: ${e=>e.posX}%;
  animation: ${Ze} ${e=>e.speed}s ease-in-out infinite;
  opacity: 0.2;
`,Me.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  position: relative;
  z-index: 10;
  background-color: #0a0a0a;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 50%, rgba(203, 157, 118, 0.05) 0%, rgba(0, 0, 0, 0) 50%);
    z-index: -1;
    animation: ${Ge} 10s linear infinite;
  }
  
  @media (max-width: 1200px) {
    padding: 0 30px;
  }
  
  @media (max-width: 768px) {
    flex: 1;
    padding: 30px 25px;
  }
`,Me.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: relative;
  padding-top: 180px;
`),nt=(Me.div`
  position: absolute;
  top: 40px;
  left: 50px;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  z-index: 20;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: rgba(203, 157, 118, 0.1);
      z-index: -1;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    fill: rgba(203, 157, 118, 0.9);
  }
`,Me.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 25px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.2s;
  position: relative;
  letter-spacing: -0.5px;
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: translateY(0);
  `}
  
  .reveal-text {
    display: inline-block;
    position: relative;
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    animation: ${Qe} 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    animation-delay: 0.5s;
  }
  
  .reveal-text:nth-child(2) {
    animation-delay: 0.7s;
  }
  
  .reveal-text:nth-child(3) {
    animation-delay: 0.9s;
  }
  
  span {
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;
    background-size: 200% auto;
    animation: ${qe} 4s ease infinite;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: rgba(203, 157, 118, 0.1);
      z-index: -1;
      border-radius: 10px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.9), transparent);
    border-radius: 2px;
  }
`),rt=Me.span`
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(203, 157, 118, 0.2);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease-out;
    border-radius: 4px;
  }
  
  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }
`,it=Me.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.4s;
  position: relative;
  max-width: 90%;
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: translateY(0);
  `}
  
  strong {
    color: rgba(203, 157, 118, 0.9);
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      color: #fff;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: rgba(203, 157, 118, 0.4);
  }
`,ot=(Me.div`
  display: flex;
  gap: 15px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.6s;
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: translateY(0);
  `}
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`,Me(Ae)`
  padding: 14px 28px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  animation: ${Xe} 2s infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: all 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`,Me(Ae)`
  padding: 14px 28px;
  background-color: transparent;
  color: #fff;
  border-radius: 12px;
  border: 1px solid rgba(203, 157, 118, 0.3);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.1), rgba(178, 132, 93, 0.2));
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    border-color: rgba(203, 157, 118, 0.6);
    transform: translateY(-5px);
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`,Me.div`
  position: absolute;
  bottom: 40px;
  right: 50px;
  display: flex;
  gap: 25px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.8s;
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: translateY(0);
  `}
  
  @media (max-width: 1200px) {
    right: 30px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,Me.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    width: 24px;
    height: 24px;
    color: rgba(203, 157, 118, 0.9);
  }
  
  span {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
  }
`,Me.div`
  position: absolute;
  bottom: 40px;
  left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 1s;
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: translateY(0);
  `}
  
  span {
    font-size: 0.85rem;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.6);
    transform: rotate(-90deg);
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  .scroll-indicator {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, rgba(203, 157, 118, 0.9), transparent);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 15px;
      background-color: rgba(203, 157, 118, 0.9);
      animation: ${Je} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,Me.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 15px 0;
  z-index: 10;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
  transition-delay: 1.2s;
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: translateY(0);
  `}
  
  @media (max-width: 768px) {
    display: none;
  }
`),at=Me.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 70px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, #0a0a0a, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, #0a0a0a, transparent);
  }
`,lt=Me.div`
  display: flex;
  gap: 25px;
  animation: ${be`${et} 30s linear infinite`};
  padding: 5px 0;
`,st=Me.div`
  height: 30px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  img {
    height: 100%;
    max-width: 80px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
`,ct=Me.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: rgba(203, 157, 118, 0.7);
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-weight: 500;
`,ut=[{src:"/control4.png",alt:"Control4"},{src:"/lutron.png",alt:"Lutron"},{src:"/sonos.png",alt:"Sonos"},{src:"/sony.png",alt:"Sony"},{src:"/jvc.png",alt:"JVC"},{src:"/leon.png",alt:"Leon"},{src:"/senhizer.png",alt:"Sennheiser"},{src:"/seura.png",alt:"Seura"},{src:"/urc.png",alt:"URC"},{src:"/araknis.png",alt:"Araknis"}],dt=Ne`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`,pt=Ne`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ft=Me.div`
  background: rgba(25, 25, 25, 0.8);
  border-radius: 16px;
  padding: 25px;
  width: 100%;
  border: 1px solid rgba(203, 157, 118, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  margin-top: 120px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.6s;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.3), rgba(203, 157, 118, 0.9), rgba(203, 157, 118, 0.3));
    z-index: 1;
  }
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: translateY(0);
  `}
`,ht=Me.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #fff;
  position: relative;
  
  span {
    color: rgba(203, 157, 118, 0.9);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: rgba(203, 157, 118, 0.6);
  }
`,gt=Me.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 15px;
  
  @media (max-width: 520px) {
    flex-direction: column;
    gap: 10px;
  }
`,mt=Me.div`
  flex: 1;
  position: relative;
`,xt=Me.label`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  display: block;
  margin-bottom: 5px;
  transition: color 0.3s ease;
`,bt=Me.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid rgba(203, 157, 118, 0.2);
  background: rgba(20, 20, 20, 0.6);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(203, 157, 118, 0.8);
    box-shadow: 0 0 0 2px rgba(203, 157, 118, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  
  &:hover {
    border-color: rgba(203, 157, 118, 0.4);
  }
  
  &.invalid {
    border-color: #ff6b6b;
    animation: ${dt} 0.5s cubic-bezier(.36,.07,.19,.97) both;
  }
`,vt=Me.button`
  width: 100%;
  padding: 14px 20px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${Xe} 2s infinite;
  margin-top: 5px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: all 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`,yt=Me.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(203, 157, 118, 0.1);
  border: 1px dashed rgba(203, 157, 118, 0.3);
  border-radius: 8px;
  padding: 10px 15px;
  margin: 15px 0;
`,wt=Me.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  
  strong {
    color: rgba(203, 157, 118, 0.9);
    font-weight: 600;
  }
`,kt=Me.div`
  font-size: 0.85rem;
  font-weight: 600;
  background: rgba(203, 157, 118, 0.2);
  padding: 5px 10px;
  border-radius: 4px;
  color: #fff;
`,jt=Me.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 15px;
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    color: rgba(203, 157, 118, 0.8);
  }
`,St=Me.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`,Ct=Me.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  animation: ${pt} 0.5s ease;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    color: rgba(203, 157, 118, 0.9);
    flex-shrink: 0;
  }
`,zt=()=>(0,Re.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-2 h-4 w-4 flex-shrink-0 text-[#cb9d76]",children:(0,Re.jsx)("polyline",{points:"20 6 9 17 4 12"})}),Et=()=>(0,Re.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6 text-[#cb9d76]",children:(0,Re.jsx)("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),_t=()=>(0,Re.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6 text-[#cb9d76]",children:(0,Re.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),Lt=()=>(0,Re.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6 text-[#cb9d76]",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),(0,Re.jsx)("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),Pt=()=>{const t=(0,e.useRef)(null),[n]=(0,e.useState)((()=>(e=>{const t=[];for(let n=0;n<e;n++)t.push({size:3*Math.random()+1,posX:100*Math.random(),posY:100*Math.random(),speed:10*Math.random()+10});return t})(30))),[r,i]=(0,e.useState)(!1),[o,a]=(0,e.useState)({name:"",phone:""}),[l,s]=(0,e.useState)(900),[c,u]=(0,e.useState)({}),[d,p]=Ke({triggerOnce:!0,threshold:.1}),[f,h]=Ke({triggerOnce:!0,threshold:.1}),[g,m]=Ke({triggerOnce:!0,threshold:.1}),[x,b]=Ke({triggerOnce:!0,threshold:.1}),[v,y]=Ke({triggerOnce:!0,threshold:.1}),[w,k]=(0,e.useState)(!1);(0,e.useEffect)((()=>{setTimeout((()=>{k(!0)}),500),t.current&&t.current.play().catch((e=>{console.error("Video playback error:",e),i(!0)}));const e=setInterval((()=>{s((t=>t<=1?(clearInterval(e),0):t-1))}),1e3);return()=>clearInterval(e)}),[]);const j=e=>{const{name:t,value:n}=e.target;a((e=>({...e,[t]:n}))),c[t]&&u((e=>({...e,[t]:!1})))};return(0,Re.jsxs)("section",{id:"hero",className:"relative flex h-screen w-full overflow-hidden bg-[#0a0a0a] text-white md:flex-row flex-col-reverse",children:[(0,Re.jsxs)("div",{className:"absolute left-4 top-4 z-20 flex items-center text-2xl font-medium tracking-wide text-white sm:left-12 sm:top-10",children:[(0,Re.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"mr-2 h-5 w-5 fill-[#cb9d76]",children:(0,Re.jsx)("path",{d:"M12 2L1 21h22L12 2zm0 4.2L20.1 19h-16L12 6.2z"})}),"HOME",(0,Re.jsx)("span",{className:"relative text-[#cb9d76] after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-[10px] after:w-full after:rounded-md after:bg-[#cb9d76]/10",children:"VISION"})]}),(0,Re.jsxs)("div",{className:"relative z-10 flex flex-[0.4] flex-col items-center justify-between overflow-hidden bg-[#0a0a0a] px-4 py-6 sm:px-12 md:px-[50px] md:py-0 lg:px-[50px]",children:[(0,Re.jsxs)(tt,{ref:d,children:[(0,Re.jsxs)(nt,{inView:p,children:[["Transform","Your","Home"].map(((e,t)=>(0,Re.jsxs)("span",{className:"reveal-text",children:[e," "]},t))),(0,Re.jsxs)("span",{className:"reveal-text",children:["with ",(0,Re.jsx)("span",{children:"Smart Technology"})]})]}),(0,Re.jsxs)(it,{inView:p,children:["Elevate your lifestyle with ",(0,Re.jsx)("strong",{children:"seamless, integrated"})," home automation systems designed for ",(0,Re.jsx)(rt,{children:"comfort"}),", ",(0,Re.jsx)(rt,{children:"security"}),", and ",(0,Re.jsx)(rt,{children:"efficiency"}),"."]}),(0,Re.jsxs)(ft,{ref:v,inView:y,children:[(0,Re.jsxs)(ht,{children:["Get Your ",(0,Re.jsx)("span",{children:"Free Consultation"})]}),(0,Re.jsxs)(yt,{children:[(0,Re.jsxs)(wt,{children:[(0,Re.jsx)("strong",{children:"Limited Time:"})," 20% off installation"]}),(0,Re.jsx)(kt,{children:(e=>{const t=e%60;return`${Math.floor(e/60)}:${t<10?"0":""}${t}`})(l)})]}),(0,Re.jsxs)("form",{onSubmit:e=>{e.preventDefault();const t={};o.name.trim()||(t.name=!0),o.phone.trim()&&/^[0-9]{10,}$/.test(o.phone.replace(/[^0-9]/g,""))||(t.phone=!0),Object.keys(t).length>0?u(t):(console.log("Form submitted:",o),alert("Thank you for your interest! Our team will contact you shortly."),a({name:"",phone:""}))},children:[(0,Re.jsxs)(gt,{children:[(0,Re.jsxs)(mt,{children:[(0,Re.jsx)(xt,{children:"Your Name"}),(0,Re.jsx)(bt,{type:"text",placeholder:"Enter your name",name:"name",value:o.name,onChange:j,className:c.name?"invalid":""})]}),(0,Re.jsxs)(mt,{children:[(0,Re.jsx)(xt,{children:"Phone Number"}),(0,Re.jsx)(bt,{type:"tel",placeholder:"Enter your phone",name:"phone",value:o.phone,onChange:j,className:c.phone?"invalid":""})]})]}),(0,Re.jsxs)(St,{children:[(0,Re.jsxs)(Ct,{children:[(0,Re.jsx)(zt,{}),"Free in-home assessment ($150 value)"]}),(0,Re.jsxs)(Ct,{children:[(0,Re.jsx)(zt,{}),"Personalized smart home plan"]}),(0,Re.jsxs)(Ct,{children:[(0,Re.jsx)(zt,{}),"No obligation quote"]})]}),(0,Re.jsx)(vt,{type:"submit",children:"Schedule Consultation"})]}),(0,Re.jsxs)(jt,{children:[(0,Re.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,Re.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}),(0,Re.jsx)("span",{children:"Join 500+ homeowners who upgraded this year"})]})]})]}),(0,Re.jsxs)(ot,{ref:x,inView:b,children:[(0,Re.jsx)(ct,{children:"Trusted Technology Partners"}),(0,Re.jsx)(at,{children:(0,Re.jsx)(lt,{children:[...ut,...ut].map(((e,t)=>(0,Re.jsx)(st,{children:(0,Re.jsx)("img",{src:e.src,alt:e.alt})},`${e.alt}-${t}`)))})})]})]}),(0,Re.jsxs)("div",{className:"relative flex-[0.6] overflow-hidden md:h-screen h-[50vh] perspective-1000 preserve-3d",children:[(0,Re.jsx)("div",{className:"absolute top-0 left-0 z-0 h-full w-full overflow-hidden bg-[#0a0a0a] scale-[1.15] -translate-z-[50px] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-l before:from-[#0a0a0a]/20 before:to-[#0a0a0a]/40 before:z-[1] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-radial after:from-transparent after:to-[#0a0a0a]/40 after:opacity-50 after:z-[2]",children:r?(0,Re.jsx)("div",{className:"flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]",children:(0,Re.jsx)("p",{className:"text-white/50",children:"Video could not be loaded"})}):(0,Re.jsxs)("video",{ref:t,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"h-full w-full object-cover object-center transition-all duration-1500 ease-in-out "+(w?"scale-105":""),onError:()=>i(!0),children:[(0,Re.jsx)("source",{src:"/video1.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})}),(0,Re.jsx)("div",{className:"pointer-events-none absolute top-0 left-0 z-[2] h-full w-full overflow-hidden",children:n.map(((e,t)=>(0,Re.jsx)("div",{className:"absolute rounded-full bg-[#cb9d76]/20 opacity-20",style:{width:`${e.size}px`,height:`${e.size}px`,top:`${e.posY}%`,left:`${e.posX}%`,animation:`float ${e.speed}s ease-in-out infinite`}},t)))}),(0,Re.jsxs)("div",{ref:f,className:"absolute bottom-10 right-12 z-10 hidden gap-6 transition-all duration-800 delay-800 md:flex "+(h?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[(0,Re.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,Re.jsx)(Et,{}),(0,Re.jsx)("span",{className:"text-sm font-medium text-white/80",children:"Energy Efficient"})]}),(0,Re.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,Re.jsx)(_t,{}),(0,Re.jsx)("span",{className:"text-sm font-medium text-white/80",children:"Enhanced Security"})]}),(0,Re.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,Re.jsx)(Lt,{}),(0,Re.jsx)("span",{className:"text-sm font-medium text-white/80",children:"24/7 Support"})]})]}),(0,Re.jsxs)("div",{ref:g,className:"absolute bottom-10 left-12 z-10 hidden flex-col items-center transition-all duration-800 delay-1000 md:flex "+(m?"translate-y-0 opacity-100":"translate-y-8 opacity-0"),children:[(0,Re.jsx)("span",{className:"mb-2.5 -rotate-90 text-xs uppercase tracking-[2px] text-white/60",children:"Scroll"}),(0,Re.jsx)("div",{className:"relative h-[60px] w-[1px] overflow-hidden bg-gradient-to-b from-[#cb9d76]/90 to-transparent before:absolute before:top-0 before:left-0 before:h-[15px] before:w-full before:animate-slideInRight before:bg-[#cb9d76]/90"})]})]})]})},$t=(Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`),Ot=Ne`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,Tt=(Ne`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,Ne`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`),Nt=Me.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.15) 0%, rgba(10, 10, 10, 0) 70%);
    top: -200px;
    left: -200px;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.1) 0%, rgba(10, 10, 10, 0) 70%);
    bottom: -150px;
    right: -150px;
    z-index: 0;
  }
`,Mt=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.3;
`,Rt=Me.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 0 30px;
  }
`,Vt=Me.h2`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(203, 157, 118, 0.9);
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
  font-weight: 600;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    transform-origin: left;
    animation: ${Ot} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
`,At=Me.h3`
  font-size: clamp(2.5rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: translateY(0);
  `}
  
  span {
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: rgba(203, 157, 118, 0.1);
      z-index: -1;
      border-radius: 10px;
    }
  }
`,It=Me.div`
  p {
    margin-bottom: 25px;
    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.9s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.3s;
    
    ${e=>e.inView&&be`
      opacity: 1;
      transform: translateY(0);
    `}
  }
`,Dt=Me.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ft=Me.div`
  display: flex;
  gap: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: ${e=>.1*e.delay}s;
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: translateY(0);
  `}
`,Yt=Me.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(203, 157, 118, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(203, 157, 118, 0.9);
  border: 1px solid rgba(203, 157, 118, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      transparent, 
      transparent, 
      transparent, 
      rgba(203, 157, 118, 0.1)
    );
    transform: rotate(45deg);
    animation: ${$t} 3s linear infinite;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`,Bt=Me.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #fff;
  }
  
  p {
    margin: 0;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,Wt=Me.div`
  position: relative;
  height: 550px;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(0);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: translateY(40px) rotateY(-5deg);
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.2s;
    filter: brightness(1.1) contrast(1.05);
    
    ${e=>e.inView&&be`
      opacity: 1;
      transform: translateY(0) rotateY(0deg);
    `}
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 30px;
    left: -30px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(203, 157, 118, 0.3);
    border-radius: 20px;
    z-index: -1;
    opacity: 0;
    transform: translate(20px, -20px);
    transition: all 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.6s;
    
    ${e=>e.inView&&be`
      opacity: 1;
      transform: translate(0, 0);
    `}
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 140px;
    height: 140px;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96 4H4V96H96V4Z' stroke='%23CB9D76' stroke-width='1.5' stroke-linecap='round' stroke-dasharray='1 8'/%3E%3C/svg%3E");
    background-size: cover;
    z-index: -1;
    opacity: 0;
    transition: all 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.8s;
    
    ${e=>e.inView&&be`
      opacity: 0.7;
    `}
  }
  
  @media (max-width: 992px) {
    height: 450px;
  }
  
  @media (max-width: 576px) {
    height: 350px;
  }
`,Ht=Me.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: radial-gradient(circle at center, rgba(203, 157, 118, 0.2) 0%, transparent 70%);
  z-index: -1;
  opacity: 0.7;
  filter: blur(20px);
`,Ut=Me.div`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  border: 2px dashed rgba(203, 157, 118, 0.4);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transform: scale(0.8);
  transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.9s;
  
  ${e=>e.inView&&be`
    opacity: 1;
    transform: scale(1);
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.6);
  }
`,Kt=Me.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px dashed rgba(203, 157, 118, 0.3);
  opacity: 0;
  z-index: -1;
  animation: ${Tt} 20s linear infinite;
  transition: opacity 1s ease;
  transition-delay: 1s;
  
  ${e=>e.inView&&be`
    opacity: 1;
  `}
`,Qt=[{icon:(0,Re.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),(0,Re.jsx)("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),(0,Re.jsx)("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),title:"Client Satisfaction",description:"We put our clients first, ensuring your complete satisfaction with every project and installation."},{icon:(0,Re.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),title:"Premium Quality",description:"We partner only with the most trusted brands and technologies for reliable, long-lasting results."},{icon:(0,Re.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),(0,Re.jsx)("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),(0,Re.jsx)("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),title:"Expert Design",description:"Our certified designers create custom solutions tailored to your specific home and lifestyle needs."},{icon:(0,Re.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,Re.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,Re.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),(0,Re.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),title:"Dedicated Support",description:"Our team provides ongoing maintenance and support long after installation is complete."}],qt=()=>{const[e,t]=Ke({triggerOnce:!0,threshold:.1}),[n,r]=Ke({triggerOnce:!0,threshold:.1});return(0,Re.jsxs)(Nt,{id:"about",children:[(0,Re.jsx)(Mt,{}),(0,Re.jsxs)(Rt,{children:[(0,Re.jsxs)(It,{ref:e,inView:t,children:[(0,Re.jsx)(Vt,{children:"About Us"}),(0,Re.jsxs)(At,{inView:t,children:["We Make Smart Homes ",(0,Re.jsx)("span",{children:"Simple & Elegant"})]}),(0,Re.jsx)("p",{children:"For over a decade, HomeVision has been at the forefront of smart home innovation, designing and implementing premium automation solutions for discerning homeowners."}),(0,Re.jsx)("p",{children:"Our team of certified smart home specialists brings together expertise in technology, design, and customer service to deliver seamless integration of intelligent systems that enhance your lifestyle."}),(0,Re.jsx)(Dt,{inView:t,children:Qt.map(((e,n)=>(0,Re.jsxs)(Ft,{delay:n+3,inView:t,children:[(0,Re.jsx)(Yt,{children:e.icon}),(0,Re.jsxs)(Bt,{children:[(0,Re.jsx)("h4",{children:e.title}),(0,Re.jsx)("p",{children:e.description})]})]},n)))})]}),(0,Re.jsxs)(Wt,{ref:n,inView:r,children:[(0,Re.jsx)(Kt,{inView:r}),(0,Re.jsx)("img",{src:"/homevison.jpg",alt:"HomeVision Smart Home"}),(0,Re.jsx)(Ht,{}),(0,Re.jsx)(Ut,{inView:r})]})]})]})},Xt=[{src:"/control4.png",alt:"Control4"},{src:"/lutron.png",alt:"Lutron"},{src:"/sonos.png",alt:"Sonos"},{src:"/sony.png",alt:"Sony"},{src:"/jvc.png",alt:"JVC"},{src:"/leon.png",alt:"Leon"},{src:"/senhizer.png",alt:"Sennheiser"},{src:"/seura.png",alt:"Seura"},{src:"/araknis.png",alt:"Araknis"},{src:"/urc.png",alt:"Urc"},{src:"/smart-clare.png",alt:"Smart Clare"},{src:"/seura.png",alt:"Seura"},{src:"/line.png",alt:"Linde"},{src:"/clare.png",alt:"Clare"},{src:"/luma.png",alt:"Luma"}],Gt=(Ne`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`,Ne`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`),Zt=Ne`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,Jt=Ne`
  0% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(203, 157, 118, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.1);
  }
`,en=Ne`
  0% {
    transform: rotate(0deg) translateX(80px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(80px) rotate(-360deg);
  }
`,tn=Me.section`
  padding: 100px 0;
  background-color: #0a0a0a;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.1) 0%, rgba(10, 10, 10, 0) 70%);
    top: -300px;
    right: -300px;
    z-index: 0;
  }
`,nn=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
  opacity: 0.2;
`,rn=Me.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`,on=Me.h2`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(203, 157, 118, 0.9);
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  ${e=>e.inView&&"\n    opacity: 1;\n    transform: translateY(0);\n  "}
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    transform-origin: left;
  }
`,an=Me.h3`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 60px;
  color: #fff;
  font-weight: 300;
  max-width: 650px;
  line-height: 1.3;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.2s;
  
  ${e=>e.inView&&"\n    opacity: 1;\n    transform: translateY(0);\n  "}
  
  span {
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 400;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: rgba(203, 157, 118, 0.1);
      z-index: -1;
      border-radius: 10px;
    }
  }
`,ln=Me.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 0.8s ease;
  
  ${e=>e.inView&&"\n    opacity: 1;\n  "}
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, #0a0a0a, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, #0a0a0a, transparent);
  }
`,sn=Me.div`
  display: flex;
  align-items: center;
  width: fit-content;
`,cn=Me.div`
  display: flex;
  align-items: center;
  animation: ${e=>be`${Zt} ${e.speed}s linear infinite`};
  animation-direction: ${e=>e.reverse?"reverse":"normal"};
  animation-delay: ${e=>e.delay}s;
  animation-play-state: paused;
  
  ${e=>e.inView&&"\n    animation-play-state: running;\n  "}
`,un=Me.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  padding: 10px;
  opacity: 0.7;
  background: rgba(30, 30, 30, 0.3);
  border-radius: 8px;
  min-width: 150px;
  filter: brightness(1.2);
  transition: all 0.5s ease;
  position: relative;
  
  ${e=>e.featured&&be`
    animation: ${Jt} 4s infinite ease-in-out;
    border: 1px solid rgba(203, 157, 118, 0.3);
    background: rgba(40, 40, 40, 0.5);
    opacity: 0.85;
  `}
  
  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(203, 157, 118, 0.2);
    background: rgba(30, 30, 30, 0.5);
    z-index: 10;
  }
  
  img {
    max-height: 100%;
    max-width: 120px;
    object-fit: contain;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.5), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,dn=(Me.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(203, 157, 118, 0.9);
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`,Me.div`
  position: absolute;
  top: 50px;
  right: 80px;
  width: 120px;
  height: 120px;
  z-index: 0;
  opacity: 0.7;
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }
  
  &::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px dashed rgba(203, 157, 118, 0.3);
    animation: ${be`${Gt} 6s ease-in-out infinite`};
  }
  
  &::after {
    top: 20px;
    left: 20px;
    width: 60%;
    height: 60%;
    border: 1px solid rgba(203, 157, 118, 0.2);
    animation: ${be`${Gt} 4s ease-in-out infinite`};
    animation-delay: 1s;
  }
`),pn=Me.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.7);
  top: 60px;
  left: 60px;
  animation: ${be`${en} 12s linear infinite`};
  
  &:nth-child(2) {
    width: 5px;
    height: 5px;
    animation-duration: 8s;
    animation-delay: 1s;
  }
  
  &:nth-child(3) {
    width: 4px;
    height: 4px;
    animation-duration: 15s;
    animation-delay: 2s;
    background: rgba(255, 255, 255, 0.5);
  }
`,fn=Me.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.2), transparent);
  margin: 30px 0;
  position: relative;
  opacity: 0;
  transition: opacity 0.6s ease;
  
  ${e=>e.inView&&"\n    opacity: 1;\n  "}
  
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.2);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,hn=Me.div`
  position: absolute;
  ${e=>"left"===e.align?"left: 15px;":"right: 15px;"}
  top: 50%;
  transform: translateY(-50%);
  background: rgba(40, 40, 40, 0.7);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  color: rgba(203, 157, 118, 0.8);
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.8s ease;
  
  ${e=>e.inView&&"\n    opacity: 1;\n  "}
`,gn=()=>{const[e,t]=Ke({triggerOnce:!0,threshold:.1}),n=e=>{const t=e.target,n=t.parentElement;n&&(t.style.display="none",n.innerHTML='<div style="color: rgba(203, 157, 118, 0.9); font-weight: 500; font-size: 14px; text-align: center;">Brand Logo</div>')},r=Math.ceil(Xt.length/2),i=Xt.slice(0,r),o=Xt.slice(r),a=[1,3,5],l=[0,2,4];return(0,Re.jsxs)(tn,{id:"partners",ref:e,children:[(0,Re.jsx)(nn,{}),(0,Re.jsxs)(dn,{children:[(0,Re.jsx)(pn,{}),(0,Re.jsx)(pn,{}),(0,Re.jsx)(pn,{})]}),(0,Re.jsxs)(rn,{children:[(0,Re.jsx)(on,{inView:t,children:"Trusted Partners"}),(0,Re.jsxs)(an,{inView:t,children:["We integrate with the ",(0,Re.jsx)("span",{children:"world's leading brands"})," to create a seamless smart home experience"]})]}),(0,Re.jsxs)(ln,{inView:t,children:[(0,Re.jsx)(hn,{inView:t,align:"left",children:"Premium Brands"}),(0,Re.jsx)(cn,{speed:40,inView:t,delay:.2,children:(0,Re.jsx)(sn,{children:[...i,...i].map(((e,t)=>(0,Re.jsx)(un,{featured:a.includes(t%i.length),children:(0,Re.jsx)("img",{src:e.src,alt:e.alt,onError:n})},`row1-${t}`)))})})]}),(0,Re.jsx)(fn,{inView:t}),(0,Re.jsxs)(ln,{inView:t,children:[(0,Re.jsx)(hn,{inView:t,align:"right",children:"Integration Partners"}),(0,Re.jsx)(cn,{speed:35,reverse:!0,inView:t,delay:.5,children:(0,Re.jsx)(sn,{children:[...o,...o].map(((e,t)=>(0,Re.jsx)(un,{featured:l.includes(t%o.length),children:(0,Re.jsx)("img",{src:e.src,alt:e.alt,onError:n})},`row2-${t}`)))})})]})]})},mn=[{id:"bedroom1",title:"1 Bedroom Smart Package",subtitle:"Perfect for apartments and smaller spaces",price:"$17,000",image:"/1bed.png",features:["Smart lighting (5 zones)","Audio system (4 speakers)","1 smart thermostat","1 video doorbell","1 smart touchscreen","2 Wi-Fi access points","Smart lock","Full installation + network setup"],color:"#f8d7bc",colorEnd:"#eac7ab"},{id:"bedroom2",title:"2 Bedroom Smart Package",subtitle:"Ideal for condos and townhomes",price:"$24,000",image:"/2bed.png",features:["Smart lighting (7 zones)","Audio (6 speakers)","2 thermostats","Video doorbell + touchscreen","Smart lock","Control4 automation hub","Full install + tuning"],featured:!0,color:"#CB9D76",colorEnd:"#bb8d66"},{id:"bedroom3",title:"3 Bedroom Smart Package",subtitle:"Comprehensive coverage for larger spaces",price:"$33,000",image:"/3bed.png",features:["Smart lighting (10 zones)","Audio (8\u201310 speakers)","3 thermostats","Touchscreen x2 + TV control","Video doorbell + smart lock","Full network + access points","Intercom/gate options"],color:"#b78a63",colorEnd:"#a77a53"},{id:"custom",title:"Custom Luxury Homes",subtitle:"Bespoke solutions for premium properties",price:"Starting at $50,000+",image:"/cusrombed.png",features:["Full panelized lighting","Multi-zone audio/video","In-ceiling speakers","Motorized shades","Rack system & power conditioning","Full-service engineering + install"],color:"#8d6c4e",colorEnd:"#7d5c3e"}],xn=Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,bn=Ne`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`,vn=Ne`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`,yn=Ne`
  0% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(203, 157, 118, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0);
  }
`,wn=Me.section`
  padding: 120px 0 150px;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`,kn=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(rgba(203, 157, 118, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
  z-index: 0;
`,jn=Me.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
`,Sn=Me.div`
  text-align: center;
  margin-bottom: 80px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,Cn=Me.h2`
  color: #fff;
  margin-bottom: 15px;
  font-size: 2.6rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: rgba(203, 157, 118, 0.15);
      z-index: -1;
    }
  }
`,zn=Me.p`
  font-size: 1.2rem;
  max-width: 750px;
  margin: 25px auto 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
`,En=Me.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`,_n=Me.div`
  background-color: rgba(20, 20, 20, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: ${xn} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: ${e=>.15+.15*e.delay}s;
  
  ${e=>e.featured&&be`
    transform: translateY(${e.active?"-20px":"-10px"});
    box-shadow: 0 25px 50px rgba(0, 0, 0, ${e.active?"0.4":"0.3"});
    border: 2px solid ${e.color};
    z-index: 2;
  `}
  
  ${e=>e.active&&!e.featured&&be`
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  `}
  
  &:hover {
    transform: translateY(${e=>e.featured?"-20px":"-15px"});
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, ${e=>e.color}, ${e=>e.colorEnd});
    opacity: ${e=>e.featured||e.active?1:.5};
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,Ln=Me.div`
  position: relative;
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
    background-color: #1a1a1a;
  }
  
  ${_n}:hover & img {
    transform: scale(1.05);
  }
`,Pn=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    ${e=>e.color}15 100%
  );
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  ${_n}:hover & {
    opacity: 1;
  }
`,$n=Me.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, var(--primary) 0%, #b78a63 100%);
  color: white;
  padding: 10px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(203, 157, 118, 0.3);
  z-index: 3;
  animation: ${yn} 2s infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    animation: ${bn} 3s infinite;
    border-radius: 30px;
  }
`,On=Me.div`
  padding: 35px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,Tn=Me.div`
  margin-bottom: 30px;
  position: relative;
`,Nn=Me.h3`
  color: #fff;
  font-size: 1.6rem;
  margin-bottom: 5px;
  font-weight: 700;
`,Mn=Me.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-bottom: 15px;
  opacity: 0.8;
`,Rn=Me.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${e=>e.color};
  margin-top: 15px;
  display: flex;
  align-items: baseline;
  
  span {
    font-size: 1rem;
    opacity: 0.7;
    margin-left: 5px;
    font-weight: normal;
  }
`,Vn=Me.div`
  height: 1px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.01));
  margin: 5px 0 25px;
`,An=Me.div`
  flex: 1;
  margin-bottom: 30px;
`,In=Me.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Dn=Me.li`
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  
  &:last-child {
    border-bottom: none;
  }
`,Fn=Me.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: ${e=>e.color}15;
  color: ${e=>e.color};
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
  font-size: 12px;
  
  svg {
    width: 12px;
    height: 12px;
  }
`,Yn=Me.span`
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
`,Bn=Me.div`
  margin-top: auto;
`,Wn=Me(Ae)`
  background: linear-gradient(135deg, ${e=>e.bgColor} 0%, ${e=>e.bgColor}dd 100%);
  border: none;
  padding: 14px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 10px 20px ${e=>e.bgColor}33;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px ${e=>e.bgColor}40;
  }
`,Hn=Me.div`
  position: absolute;
  width: 150px;
  height: 150px;
  opacity: 0.04;
  z-index: 0;
  animation: ${vn} 6s ease-in-out infinite;
  
  &.icon1 {
    top: 10%;
    right: 5%;
    animation-delay: 0s;
  }
  
  &.icon2 {
    bottom: 5%;
    left: 5%;
    animation-delay: 2s;
  }
  
  svg {
    width: 100%;
    height: 100%;
    color: var(--primary);
  }
`,Un=()=>{const{ref:t,inView:n}=Ke({threshold:.1,triggerOnce:!0}),[r,i]=(0,e.useState)(null),o=()=>{i(null)};return(0,Re.jsxs)(wn,{id:"packages",ref:t,children:[(0,Re.jsx)(kn,{}),(0,Re.jsx)(Hn,{className:"icon1",children:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,Re.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),(0,Re.jsx)(Hn,{className:"icon2",children:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"6"}),(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"2"})]})}),(0,Re.jsxs)(jn,{children:[(0,Re.jsxs)(Sn,{inView:n,children:[(0,Re.jsxs)(Cn,{children:["Choose Your ",(0,Re.jsx)("span",{children:"Smart Home"})," Package"]}),(0,Re.jsx)(zn,{children:"Select the perfect smart home solution for your space. Each package includes professional design, installation, and programming with our white-glove service guarantee."})]}),(0,Re.jsx)(En,{children:mn.map(((e,t)=>(0,Re.jsxs)(_n,{color:e.color,colorEnd:e.colorEnd,featured:e.featured,delay:t,active:r===e.id,onMouseEnter:()=>{return t=e.id,void i(t);var t},onMouseLeave:o,children:[e.featured&&(0,Re.jsx)($n,{children:"MOST POPULAR"}),(0,Re.jsxs)(Ln,{children:[(0,Re.jsx)("img",{src:e.image,alt:e.title}),(0,Re.jsx)(Pn,{color:e.color})]}),(0,Re.jsxs)(On,{children:[(0,Re.jsxs)(Tn,{children:[(0,Re.jsx)(Nn,{children:e.title}),(0,Re.jsx)(Mn,{children:e.subtitle}),(0,Re.jsx)(Vn,{}),(0,Re.jsxs)(Rn,{color:e.color,children:[e.price,"custom"===e.id&&(0,Re.jsx)("span",{children:"starting price"})]})]}),(0,Re.jsx)(An,{children:(0,Re.jsx)(In,{children:e.features.map(((t,n)=>(0,Re.jsxs)(Dn,{children:[(0,Re.jsx)(Fn,{color:e.color,children:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),(0,Re.jsx)(Yn,{children:t})]},n)))})}),(0,Re.jsx)(Bn,{children:(0,Re.jsx)(Wn,{onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})})("contact"),fullWidth:!0,bgColor:e.color,children:"Get Started"})})]})]},e.id)))})]})]})},Kn=[{id:"blinds",icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),(0,Re.jsx)("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),(0,Re.jsx)("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),title:"Motorized Blinds",description:"Automatic control of natural light with scheduling and remote access",color:"rgba(203, 157, 118, 0.9)",colorEnd:"rgba(183, 137, 98, 0.8)"},{id:"touchpanels",icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),(0,Re.jsx)("rect",{x:"9",y:"9",width:"6",height:"6"}),(0,Re.jsx)("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),(0,Re.jsx)("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),(0,Re.jsx)("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),(0,Re.jsx)("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),(0,Re.jsx)("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),(0,Re.jsx)("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),(0,Re.jsx)("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),(0,Re.jsx)("line",{x1:"1",y1:"14",x2:"4",y2:"14"})]}),title:"Touch Panel Upgrades",description:"Premium control interfaces with sleek, intuitive designs",color:"rgba(203, 157, 118, 1)",colorEnd:"rgba(183, 137, 98, 0.9)"},{id:"outdoor",icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),title:"Outdoor Audio Systems",description:"Extend your entertainment experiences to patios and gardens",color:"rgba(203, 157, 118, 0.9)",colorEnd:"rgba(183, 137, 98, 0.8)"},{id:"theatre",icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("rect",{x:"2",y:"7",width:"20",height:"15",rx:"2",ry:"2"}),(0,Re.jsx)("polyline",{points:"17 2 12 7 7 2"})]}),title:"Home Theatre Integration",description:"Immersive cinematic experiences with professional calibration",color:"rgba(203, 157, 118, 0.95)",colorEnd:"rgba(183, 137, 98, 0.85)"},{id:"voice",icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("path",{d:"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"})]}),title:"Voice Assistant Support",description:"Seamless integration with Alexa, Google Assistant, and more",color:"rgba(203, 157, 118, 1)",colorEnd:"rgba(183, 137, 98, 0.9)"}],Qn=(Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Ne`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`),qn=Ne`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Xn=Ne`
  0% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(203, 157, 118, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(203, 157, 118, 0.3);
  }
`,Gn=Ne`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`,Zn=Me.section`
  padding: 120px 0 140px;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`,Jn=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(rgba(203, 157, 118, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.2;
  z-index: 0;
`,er=Me.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
`,tr=Me.div`
  text-align: center;
  margin-bottom: 80px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,nr=Me.h2`
  color: #fff;
  margin-bottom: 15px;
  font-size: 2.6rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: rgba(203, 157, 118, 0.15);
      z-index: -1;
    }
  }
`,rr=Me.p`
  font-size: 1.2rem;
  max-width: 750px;
  margin: 25px auto 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
`,ir=Me.div`
  overflow: hidden;
  position: relative;
  margin: 0 -30px;
  padding: 0 30px;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 3;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, #0a0a0a, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, #0a0a0a, transparent);
  }
`,or=Me.div`
  display: flex;
  gap: 25px;
  padding: 20px 0;
  width: 100%;
  position: relative;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  scroll-behavior: smooth;
  justify-content: center;
  flex-wrap: nowrap;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 1400px) {
    gap: 20px;
    justify-content: flex-start;
  }
`,ar=Me.div`
  background-color: rgba(20, 20, 20, 0.9);
  border-radius: 16px;
  padding: 40px 25px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  flex: 0 0 250px;
  max-width: 250px;
  min-height: 320px;
  
  ${e=>e.active&&be`
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    animation: ${Xn} 2s infinite;
  `}
  
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    ${e=>!e.active&&be`
      animation: ${Xn} 2s infinite;
    `}
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, ${e=>e.color}, ${e=>e.colorEnd});
    border-radius: 16px 16px 0 0;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  @media (max-width: 1400px) {
    flex: 0 0 230px;
    max-width: 230px;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 220px;
    max-width: 220px;
    min-height: 300px;
  }
`,lr=Me.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${e=>`${e.color}10`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  color: ${e=>e.color};
  font-size: 28px;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    border: 2px dashed ${e=>e.color}40;
    opacity: 0.6;
    animation: ${qn} 15s linear infinite;
  }
  
  svg {
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
  }
  
  ${ar}:hover & {
    transform: translateY(-8px);
    
    svg {
      transform: scale(1.1);
    }
    
    &::after {
      animation: ${qn} 8s linear infinite;
    }
  }
`,sr=Me.h3`
  font-size: 1.35rem;
  margin-bottom: 12px;
  font-weight: 700;
  color: #fff;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.2), rgba(203, 157, 118, 0.8), rgba(203, 157, 118, 0.2));
    background-size: 200% auto;
    animation: ${Gn} 3s linear infinite;
  }
`,cr=Me.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin-top: 15px;
`,ur=Me.div`
  position: absolute;
  width: 150px;
  height: 150px;
  opacity: 0.04;
  z-index: 0;
  animation: ${Qn} 6s ease-in-out infinite;
  
  &.icon1 {
    top: 10%;
    right: 5%;
    animation-delay: 0s;
  }
  
  &.icon2 {
    bottom: 5%;
    left: 5%;
    animation-delay: 2s;
  }
  
  svg {
    width: 100%;
    height: 100%;
    color: rgba(203, 157, 118, 0.9);
  }
`,dr=Me.div`
  margin-top: 70px;
  text-align: center;
  background: rgba(20, 20, 20, 0.6);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.3s;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(183, 137, 98, 0.8));
    border-radius: 20px 20px 0 0;
  }
`,pr=Me.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 15px;
  font-weight: 700;
`,fr=Me.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 25px;
  
  span {
    position: relative;
    color: rgba(203, 157, 118, 0.9);
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: rgba(203, 157, 118, 0.15);
      z-index: -1;
    }
  }
`,hr=()=>{const{ref:t,inView:n}=Ke({threshold:.1,triggerOnce:!0}),[r,i]=(0,e.useState)(null),o=(0,e.useRef)(null),a=()=>{i(null)};return(0,Re.jsxs)(Zn,{ref:t,id:"addons",children:[(0,Re.jsx)(Jn,{}),(0,Re.jsx)(ur,{className:"icon1",children:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),(0,Re.jsx)("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),(0,Re.jsx)("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]})}),(0,Re.jsx)(ur,{className:"icon2",children:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M17 18a5 5 0 0 0-10 0"}),(0,Re.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"9"}),(0,Re.jsx)("line",{x1:"4.22",y1:"10.22",x2:"5.64",y2:"11.64"}),(0,Re.jsx)("line",{x1:"1",y1:"18",x2:"3",y2:"18"}),(0,Re.jsx)("line",{x1:"21",y1:"18",x2:"23",y2:"18"}),(0,Re.jsx)("line",{x1:"18.36",y1:"11.64",x2:"19.78",y2:"10.22"}),(0,Re.jsx)("line",{x1:"23",y1:"22",x2:"1",y2:"22"}),(0,Re.jsx)("polyline",{points:"8 6 12 2 16 6"})]})}),(0,Re.jsxs)(er,{children:[(0,Re.jsxs)(tr,{inView:n,children:[(0,Re.jsxs)(nr,{children:["Enhance Your ",(0,Re.jsx)("span",{children:"Smart Home"})," Experience"]}),(0,Re.jsx)(rr,{children:"Customize your system with these premium add-ons. Each integrates seamlessly with your core package to expand functionality and enhance your living experience."})]}),(0,Re.jsx)(ir,{children:(0,Re.jsx)(or,{ref:o,children:Kn.map((e=>(0,Re.jsxs)(ar,{color:e.color,colorEnd:e.colorEnd,active:r===e.id,onMouseEnter:()=>{return t=e.id,void i(t);var t},onMouseLeave:a,children:[(0,Re.jsx)(lr,{color:e.color,children:e.icon}),(0,Re.jsx)(sr,{children:e.title}),(0,Re.jsx)(cr,{children:e.description})]},e.id)))})}),(0,Re.jsxs)(dr,{inView:n,children:[(0,Re.jsx)(pr,{children:"Interested in Add-Ons?"}),(0,Re.jsxs)(fr,{children:[(0,Re.jsx)("span",{children:"Just mention it in your consultation"})," and we'll create a custom package that includes all the features you want."]})]})]})]})},gr=(Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`),mr=Ne`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`,xr=[{question:"Is this DIY?",answer:"No, we provide a full-service solution. Our certified technicians handle everything from design and installation to programming and training. You don't need any technical expertise\u2014we take care of it all.",icon:"\ud83d\udee0\ufe0f"},{question:"Can this be done during renovation?",answer:"Yes, and it's actually ideal! We work directly with your contractors to integrate smart home technology during construction or renovation. This allows for cleaner installation and more options for wired components.",icon:"\ud83c\udfd7\ufe0f"},{question:"Do I need a new home?",answer:"No, we work with homes of all ages. Our solutions can be retrofitted into existing homes without major construction. We offer both wireless solutions and minimally invasive wired options.",icon:"\ud83c\udfe0"},{question:"How long does it take?",answer:"Typically 14 days from start to finish, depending on the complexity and size of your project. The consultation process takes 1-2 days, planning takes 3-5 days, and installation takes 5-7 days.",icon:"\u23f1\ufe0f"},{question:"What's included?",answer:"Our packages include smart lighting control, audio systems, climate control, security features (smart locks, video doorbells), and a centralized control system. Each system is custom designed based on your specific needs and home layout.",icon:"\ud83d\udce6"},{question:"Is financing available?",answer:"Yes, we offer flexible financing options. During your consultation, we can discuss payment plans that fit your budget, including 0% interest options for qualified customers.",icon:"\ud83d\udcb3"}],br=Me.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`,vr=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.05;
  background-image: radial-gradient(circle at 25% 25%, rgba(203, 157, 118, 0.5) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(203, 157, 118, 0.5) 0%, transparent 50%);
`,yr=Me.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`,wr=Me.div`
  text-align: center;
  margin-bottom: 80px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out;
`,kr=Me.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  }
`,jr=Me.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 20px auto 0;
  line-height: 1.6;
`,Sr=Me.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out 0.2s;
`,Cr=Me.div`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(203, 157, 118, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"20px"});
  transition-delay: ${e=>.1*e.delay}s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(203, 157, 118, 0.2);
  }
`,zr=Me.div`
  padding: 25px 30px;
  background-color: ${e=>e.isOpen?"rgba(203, 157, 118, 0.1)":"transparent"};
  color: ${e=>e.isOpen?"#fff":"rgba(255, 255, 255, 0.9)"};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.isOpen?"rgba(203, 157, 118, 0.1)":"rgba(255, 255, 255, 0.05)"};
  }
`,Er=Me.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,_r=Me.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>e.isOpen?"linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9))":"rgba(203, 157, 118, 0.15)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  animation: ${e=>e.isOpen?mr:"none"} 3s infinite ease-in-out;
`,Lr=Me.span`
  font-size: 1.1rem;
`,Pr=Me.div`
  width: 24px;
  height: 24px;
  position: relative;
  transition: all 0.3s ease;
  transform: ${e=>e.isOpen?"rotate(45deg)":"rotate(0)"};
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: rgba(203, 157, 118, 0.9);
    transition: all 0.3s ease;
  }
  
  &::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateY(-50%);
  }
  
  &::after {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    transform: translateX(-50%);
    opacity: ${e=>e.isOpen?0:1};
  }
`,$r=Me.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,Or=Me.div`
  padding: 0 30px 25px 85px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-size: 1rem;
`,Tr=Me.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.3), transparent);
  background-size: 200px 100%;
  animation: ${gr} 2s infinite linear;
`,Nr=()=>{const[t,n]=(0,e.useState)(0),[r,i]=Ke({threshold:.1,triggerOnce:!0}),[o,a]=Ke({threshold:.1,triggerOnce:!0});return(0,Re.jsxs)(br,{id:"faq",children:[(0,Re.jsx)(vr,{}),(0,Re.jsxs)(yr,{children:[(0,Re.jsxs)(wr,{ref:r,inView:i,children:[(0,Re.jsx)(kr,{children:"Frequently Asked Questions"}),(0,Re.jsx)(jr,{children:"Get answers to the most common questions about our premium smart home solutions"})]}),(0,Re.jsx)(Sr,{ref:o,inView:a,children:xr.map(((e,r)=>(0,Re.jsxs)(Cr,{delay:r+1,inView:a,children:[(0,Re.jsxs)(zr,{isOpen:t===r,onClick:()=>(e=>{n(t===e?null:e)})(r),children:[(0,Re.jsxs)(Er,{children:[(0,Re.jsx)(_r,{isOpen:t===r,children:e.icon}),(0,Re.jsx)(Lr,{children:e.question})]}),(0,Re.jsx)(Pr,{isOpen:t===r})]}),(0,Re.jsx)(Tr,{}),(0,Re.jsx)($r,{isOpen:t===r,children:(0,Re.jsx)(Or,{children:e.answer})})]},r)))})]})]})},Mr=(Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`),Rr=(Ne`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`,Ne`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`),Vr=Me.section`
  background-color: #0a0a0a;
  color: #fff;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
`,Ar=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(203, 157, 118, 0.15) 0%, transparent 70%),
              radial-gradient(circle at 80% 70%, rgba(203, 157, 118, 0.1) 0%, transparent 70%);
  z-index: 0;
`,Ir=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.3;
`,Dr=Me.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
`,Fr=Me.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out;
`,Yr=Me.div`
  text-align: center;
  margin-bottom: 60px;
`,Br=Me.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Wr=Me.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 30px auto 60px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`,Hr=Me.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(203, 157, 118, 0.1);
  padding: 50px;
  margin-bottom: 60px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out 0.2s;
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`,Ur=Me.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,Kr=Me.div`
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out;
  transition-delay: ${e=>.1*e.delay}s;
`,Qr=Me.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  color: rgba(203, 157, 118, 0.9);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.9), transparent);
  }
`,qr=Me.ul`
  list-style: none;
  padding: 0;
`,Xr=Me.li`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.9);
`,Gr=Me.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  color: rgba(203, 157, 118, 0.9);
`,Zr=Me.span`
  font-size: 1.1rem;
  line-height: 1.5;
`,Jr=Me.div`
  width: 100%;
  margin-bottom: 60px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out 0.4s;
`,ei=Me.div`
  background: rgba(203, 157, 118, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(203, 157, 118, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
`,ti=Me.h4`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 600;
  position: relative;
  display: inline-block;
  
  span {
    color: rgba(203, 157, 118, 0.9);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.9), transparent);
  }
`,ni=Me.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  
  @media (max-width: 576px) {
    gap: 15px;
  }
`,ri=Me.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ii=Me.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: rgba(203, 157, 118, 0.1);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  border: 1px solid rgba(203, 157, 118, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${Mr} 3s infinite ease-in-out;
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    width: 60px;
    height: 60px;
  }
`,oi=Me.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 1px;
`,ai=Me.div`
  margin-bottom: 40px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out 0.6s;
`,li=Me.div`
  display: inline-block;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.2), rgba(203, 157, 118, 0.05));
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
  border: 1px solid rgba(203, 157, 118, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${Rr} 3s infinite ease-in-out;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    margin-left: 5px;
  }
`,si=Me.div`
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out 0.7s;
`,ci=Me(Ae)`
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  padding: 18px 40px;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`,ui=()=>{const[t,n]=Ke({threshold:.1,triggerOnce:!0}),[r,i]=Ke({threshold:.1,triggerOnce:!0}),[o,a]=Ke({threshold:.1,triggerOnce:!0}),[l,s]=Ke({threshold:.1,triggerOnce:!0}),[c,u]=Ke({threshold:.1,triggerOnce:!0}),[d,p]=(0,e.useState)({days:0,hours:0,minutes:0,seconds:0});(0,e.useEffect)((()=>{const e=()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,0);t.setHours(23,59,59,999);const n=t.getTime()-e.getTime();n>0&&p({days:Math.floor(n/864e5),hours:Math.floor(n/36e5%24),minutes:Math.floor(n/1e3/60%60),seconds:Math.floor(n/1e3%60)})};e();const t=setInterval(e,1e3);return()=>clearInterval(t)}),[]);return(0,Re.jsxs)(Vr,{id:"limited-offer",children:[(0,Re.jsx)(Ar,{}),(0,Re.jsx)(Ir,{}),(0,Re.jsxs)(Dr,{children:[(0,Re.jsx)(Fr,{ref:t,inView:n,children:(0,Re.jsxs)(Yr,{children:[(0,Re.jsx)(Br,{children:"Limited Time Offer"}),(0,Re.jsx)(Wr,{children:"Schedule your free consultation today and receive these exclusive bonuses that will enhance your premium smart home experience"})]})}),(0,Re.jsx)(Hr,{ref:r,inView:i,children:(0,Re.jsxs)(Ur,{children:[(0,Re.jsxs)(Kr,{delay:1,inView:i,children:[(0,Re.jsx)(Qr,{children:"Premium Exclusives"}),(0,Re.jsxs)(qr,{children:[(0,Re.jsxs)(Xr,{children:[(0,Re.jsx)(Gr,{children:"\u2713"}),(0,Re.jsx)(Zr,{children:"Complimentary Design Consultation ($450 Value)"})]}),(0,Re.jsxs)(Xr,{children:[(0,Re.jsx)(Gr,{children:"\u2713"}),(0,Re.jsx)(Zr,{children:"15% OFF Premium Installation Package"})]}),(0,Re.jsxs)(Xr,{children:[(0,Re.jsx)(Gr,{children:"\u2713"}),(0,Re.jsx)(Zr,{children:"Priority Installation Scheduling"})]}),(0,Re.jsxs)(Xr,{children:[(0,Re.jsx)(Gr,{children:"\u2713"}),(0,Re.jsx)(Zr,{children:"Custom Smart Home Blueprint & Roadmap"})]})]})]}),(0,Re.jsxs)(Kr,{delay:2,inView:i,children:[(0,Re.jsx)(Qr,{children:"Luxury Additions"}),(0,Re.jsxs)(qr,{children:[(0,Re.jsxs)(Xr,{children:[(0,Re.jsx)(Gr,{children:"\u2713"}),(0,Re.jsx)(Zr,{children:"Exclusive Smart Home Technology Guide"})]}),(0,Re.jsxs)(Xr,{children:[(0,Re.jsx)(Gr,{children:"\u2713"}),(0,Re.jsx)(Zr,{children:"Private Demo of Latest Premium Features"})]}),(0,Re.jsxs)(Xr,{children:[(0,Re.jsx)(Gr,{children:"\u2713"}),(0,Re.jsx)(Zr,{children:"Personalized Energy Efficiency Analysis"})]}),(0,Re.jsxs)(Xr,{children:[(0,Re.jsx)(Gr,{children:"\u2713"}),(0,Re.jsx)(Zr,{children:"Lifetime VIP Support & Priority Service"})]})]})]})]})}),(0,Re.jsx)(Jr,{ref:o,inView:a,children:(0,Re.jsxs)(ei,{children:[(0,Re.jsxs)(ti,{children:["Offer Expires in ",(0,Re.jsx)("span",{children:"Limited Time"})]}),(0,Re.jsxs)(ni,{children:[(0,Re.jsxs)(ri,{children:[(0,Re.jsx)(ii,{children:d.days.toString().padStart(2,"0")}),(0,Re.jsx)(oi,{children:"Days"})]}),(0,Re.jsxs)(ri,{children:[(0,Re.jsx)(ii,{children:d.hours.toString().padStart(2,"0")}),(0,Re.jsx)(oi,{children:"Hours"})]}),(0,Re.jsxs)(ri,{children:[(0,Re.jsx)(ii,{children:d.minutes.toString().padStart(2,"0")}),(0,Re.jsx)(oi,{children:"Minutes"})]}),(0,Re.jsxs)(ri,{children:[(0,Re.jsx)(ii,{children:d.seconds.toString().padStart(2,"0")}),(0,Re.jsx)(oi,{children:"Seconds"})]})]})]})}),(0,Re.jsx)(ai,{ref:l,inView:s,children:(0,Re.jsxs)(li,{children:["\ud83d\udd52 Only ",(0,Re.jsx)("span",{children:"5 premium slots"})," remaining this month"]})}),(0,Re.jsx)(si,{ref:c,inView:u,children:(0,Re.jsx)(ci,{onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})})("contact"),children:"Reserve Your Consultation"})})]})]})},di=(Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`),pi=Ne`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`,fi=Ne`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,hi=Me.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  position: relative;
  overflow: hidden;
`,gi=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: radial-gradient(circle at 20% 30%, rgba(203, 157, 118, 0.15) 0%, transparent 70%),
              radial-gradient(circle at 80% 70%, rgba(203, 157, 118, 0.1) 0%, transparent 70%);
`,mi=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(203, 157, 118, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.3;
`,xi=Me.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
`,bi=Me.div`
  text-align: center;
  margin-bottom: 70px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out;
`,vi=Me.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,yi=Me.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 30px auto 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`,wi=Me.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out 0.2s;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`,ki=Me.div`
  color: #fff;
`,ji=Me.div`
  margin-bottom: 40px;
`,Si=Me.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, rgba(203, 157, 118, 0.9), transparent);
  }
`,Ci=Me.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
`,zi=Me.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background: rgba(203, 157, 118, 0.1);
  border-radius: 15px;
  padding: 20px;
  border: 1px solid rgba(203, 157, 118, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: rgba(203, 157, 118, 0.15);
  }
`,Ei=Me.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  animation: ${fi} 2s infinite ease-in-out;
  color: rgba(203, 157, 118, 0.9);
  
  svg {
    width: 24px;
    height: 24px;
  }
`,_i=Me.div`
  h4 {
    font-size: 1.1rem;
    color: rgba(203, 157, 118, 0.9);
    margin-bottom: 5px;
  }
  
  a {
    font-size: 1.4rem;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: rgba(203, 157, 118, 0.9);
    }
  }
`,Li=Me.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Pi=Me.li`
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.9);
`,$i=Me.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  color: rgba(203, 157, 118, 0.9);
`,Oi=Me.span`
  font-size: 1rem;
  line-height: 1.4;
`,Ti=Me.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 50px;
  border: 1px solid rgba(203, 157, 118, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`,Ni=Me.div`
  text-align: center;
  margin-bottom: 40px;
`,Mi=Me.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 15px;
`,Ri=Me.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
`,Vi=Me.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Ai=Me.div`
  display: flex;
  flex-direction: column;
  
  label {
    margin-bottom: 10px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.05rem;
  }
  
  input {
    padding: 15px;
    border: 1px solid rgba(203, 157, 118, 0.3);
    border-radius: 10px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: rgba(203, 157, 118, 0.6);
      box-shadow: 0 0 15px rgba(203, 157, 118, 0.2);
      background: rgba(255, 255, 255, 0.1);
    }
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`,Ii=Me.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, rgba(203, 157, 118, 0.3), transparent);
  background-size: 200px 100%;
  animation: ${di} 2s infinite linear;
  margin: 20px 0;
`,Di=Me(Ae)`
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  padding: 18px 40px;
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`,Fi=Me.div`
  text-align: center;
  padding: 20px;
  color: #fff;
`,Yi=Me.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  animation: ${pi} 3s infinite ease-in-out;
  font-size: 2rem;
`,Bi=Me.h3`
  font-size: 2rem;
  color: rgba(203, 157, 118, 0.9);
  margin-bottom: 20px;
`,Wi=Me.p`
  margin-bottom: 30px;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`,Hi=()=>{const[t,n]=(0,e.useState)(!1),[r,i]=Ke({threshold:.1,triggerOnce:!0}),[o,a]=Ke({threshold:.1,triggerOnce:!0});return(0,Re.jsxs)(hi,{id:"contact",children:[(0,Re.jsx)(gi,{}),(0,Re.jsx)(mi,{}),(0,Re.jsxs)(xi,{children:[(0,Re.jsxs)(bi,{ref:r,inView:i,children:[(0,Re.jsx)(vi,{children:"Contact Us"}),(0,Re.jsx)(yi,{children:"Ready to transform your home? We're here to help with your smart home journey"})]}),(0,Re.jsxs)(wi,{ref:o,inView:a,children:[(0,Re.jsxs)(ki,{children:[(0,Re.jsxs)(ji,{children:[(0,Re.jsx)(Si,{children:"Get In Touch"}),(0,Re.jsx)(Ci,{children:"Schedule your free consultation with our smart home specialists. We'll discuss your needs and create a custom plan specifically for your home."}),(0,Re.jsxs)(zi,{children:[(0,Re.jsx)(Ei,{children:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})})}),(0,Re.jsxs)(_i,{children:[(0,Re.jsx)("h4",{children:"Call us directly"}),(0,Re.jsx)("a",{href:"tel:+18005551234",children:"(800) 555-1234"})]})]})]}),(0,Re.jsx)(Si,{children:"Why Choose Us"}),(0,Re.jsxs)(Li,{children:[(0,Re.jsxs)(Pi,{children:[(0,Re.jsx)($i,{children:"\u2713"}),(0,Re.jsx)(Oi,{children:"Free consultation and custom design"})]}),(0,Re.jsxs)(Pi,{children:[(0,Re.jsx)($i,{children:"\u2713"}),(0,Re.jsx)(Oi,{children:"Premium installation by certified technicians"})]}),(0,Re.jsxs)(Pi,{children:[(0,Re.jsx)($i,{children:"\u2713"}),(0,Re.jsx)(Oi,{children:"Top quality products and components"})]}),(0,Re.jsxs)(Pi,{children:[(0,Re.jsx)($i,{children:"\u2713"}),(0,Re.jsx)(Oi,{children:"Ongoing support and maintenance"})]}),(0,Re.jsxs)(Pi,{children:[(0,Re.jsx)($i,{children:"\u2713"}),(0,Re.jsx)(Oi,{children:"Exclusive promotions for new clients"})]}),(0,Re.jsxs)(Pi,{children:[(0,Re.jsx)($i,{children:"\u2713"}),(0,Re.jsx)(Oi,{children:"Satisfaction guarantee"})]})]})]}),(0,Re.jsx)(Ti,{children:t?(0,Re.jsxs)(Fi,{children:[(0,Re.jsx)(Yi,{children:"\u2713"}),(0,Re.jsx)(Bi,{children:"Thank You!"}),(0,Re.jsx)(Wi,{children:"Your request has been received. One of our smart home specialists will call you back within 24 hours to discuss your needs."}),(0,Re.jsx)(Di,{onClick:()=>n(!1),children:"Submit Another Request"})]}):(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)(Ni,{children:[(0,Re.jsx)(Mi,{children:"Request a Callback"}),(0,Re.jsx)(Ri,{children:"Fill out the form below and we'll call you back promptly"})]}),(0,Re.jsxs)(Vi,{onSubmit:e=>{e.preventDefault(),n(!0)},children:[(0,Re.jsxs)(Ai,{children:[(0,Re.jsx)("label",{htmlFor:"fullName",children:"Full Name*"}),(0,Re.jsx)("input",{type:"text",id:"fullName",placeholder:"John Smith",required:!0})]}),(0,Re.jsxs)(Ai,{children:[(0,Re.jsx)("label",{htmlFor:"phone",children:"Phone Number*"}),(0,Re.jsx)("input",{type:"tel",id:"phone",placeholder:"(123) 456-7890",required:!0})]}),(0,Re.jsx)(Ii,{}),(0,Re.jsx)(Di,{type:"submit",children:"Request Callback"})]})]})})]})]})]})},Ui=Me.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--secondary);
  padding: 15px 0;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: translateY(${e=>e.isVisible?"0":"100%"});
`,Ki=Me.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`,Qi=Me.div`
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 15px;
  
  .icon {
    font-size: 1.5rem;
  }
  
  .text {
    span {
      color: var(--primary);
      font-weight: 600;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 5px;
  }
`,qi=()=>{const[t,n]=(0,e.useState)(!1);(0,e.useEffect)((()=>{const e=()=>{const e=window.scrollY;n(e>500)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);return(0,Re.jsx)(Ui,{isVisible:t,children:(0,Re.jsxs)(Ki,{children:[(0,Re.jsxs)(Qi,{children:[(0,Re.jsx)("div",{className:"icon",children:"\ud83c\udfe0"}),(0,Re.jsxs)("div",{className:"text",children:["Smart Home Installed in 14 Days \u2013 From ",(0,Re.jsx)("span",{children:"$17K"})]})]}),(0,Re.jsx)(Ae,{primary:!0,onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})})("contact"),children:"Book My Free Consult"})]})})},Xi=Me.footer`
  background-color: var(--secondary);
  color: var(--white);
  padding: 80px 0 30px;
`,Gi=Me.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,Zi=Me.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Ji=Me.div`
  h3 {
    color: var(--white);
    margin-bottom: 25px;
    font-size: 1.2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: var(--primary);
    }
  }
`,eo=Me.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
  span {
    color: var(--primary);
  }
`,to=Me.p`
  margin-bottom: 25px;
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.9;
`,no=Me.div`
  display: flex;
  gap: 15px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: var(--transition);
    
    &:hover {
      background-color: var(--primary);
      transform: translateY(-3px);
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,ro=Me.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 12px;
    
    a {
      color: var(--white);
      opacity: 0.8;
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      
      &:hover {
        opacity: 1;
        color: var(--primary);
        transform: translateX(5px);
      }
      
      svg {
        margin-right: 8px;
        font-size: 14px;
      }
    }
  }
`,io=Me.div`
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
    
    svg {
      margin-top: 5px;
      color: var(--primary);
    }
    
    p {
      margin: 0;
      font-size: 0.95rem;
      opacity: 0.9;
    }
  }
`,oo=Me.div`
  p {
    margin-bottom: 20px;
    font-size: 0.95rem;
    line-height: 1.7;
    opacity: 0.9;
  }
  
  form {
    display: flex;
    
    input {
      flex: 1;
      padding: 12px 15px;
      border: none;
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--white);
      border-radius: 4px 0 0 4px;
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
      
      &:focus {
        outline: none;
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
    
    button {
      border-radius: 0 4px 4px 0;
      border: none;
      background-color: var(--primary);
      color: var(--white);
      padding: 0 15px;
      cursor: pointer;
      transition: var(--transition);
      
      &:hover {
        background-color: #b78a63;
      }
    }
  }
`,ao=Me.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 50px 0 30px;
`,lo=Me.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.7;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`,so=Me(Ae)`
  background-color: var(--primary);
  color: var(--white);
  font-weight: 500;
  padding: 10px 15px;
  font-size: 0.9rem;
  border-radius: 0 4px 4px 0;
  
  &:hover {
    background-color: #b78a63;
  }
`,co=()=>{const e=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})};return(0,Re.jsx)(Xi,{children:(0,Re.jsxs)(Gi,{children:[(0,Re.jsxs)(Zi,{children:[(0,Re.jsxs)(Ji,{children:[(0,Re.jsxs)(eo,{children:["Home ",(0,Re.jsx)("span",{children:"Vision"})," Solutions"]}),(0,Re.jsx)(to,{children:"Vancouver's premier smart home integration team. We design, install, and support custom automation systems for homes of all sizes. Experience the future of home living with our cutting-edge smart technology."}),(0,Re.jsxs)(no,{children:[(0,Re.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}),(0,Re.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,Re.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),(0,Re.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),(0,Re.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})})]})]}),(0,Re.jsxs)(Ji,{children:[(0,Re.jsx)("h3",{children:"Quick Links"}),(0,Re.jsxs)(ro,{children:[(0,Re.jsx)("li",{children:(0,Re.jsxs)("a",{href:"#",onClick:()=>e("about"),children:[(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("polyline",{points:"9 18 15 12 9 6"})}),"About Us"]})}),(0,Re.jsx)("li",{children:(0,Re.jsxs)("a",{href:"#",onClick:()=>e("packages"),children:[(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("polyline",{points:"9 18 15 12 9 6"})}),"Smart Home Packages"]})}),(0,Re.jsx)("li",{children:(0,Re.jsxs)("a",{href:"#contact",children:[(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("polyline",{points:"9 18 15 12 9 6"})}),"Free Consultation"]})}),(0,Re.jsx)("li",{children:(0,Re.jsxs)("a",{href:"#",children:[(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("polyline",{points:"9 18 15 12 9 6"})}),"Privacy Policy"]})})]})]}),(0,Re.jsxs)(Ji,{children:[(0,Re.jsx)("h3",{children:"Contact Us"}),(0,Re.jsxs)(io,{children:[(0,Re.jsxs)("div",{className:"contact-item",children:[(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,Re.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),(0,Re.jsx)("p",{children:"123 Marine Drive, West Vancouver, BC V7T 1A1"})]}),(0,Re.jsxs)("div",{className:"contact-item",children:[(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),(0,Re.jsx)("p",{children:"(604) 123-4567"})]}),(0,Re.jsxs)("div",{className:"contact-item",children:[(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,Re.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),(0,Re.jsx)("p",{children:"info@homevision.com"})]})]})]}),(0,Re.jsxs)(Ji,{children:[(0,Re.jsx)("h3",{children:"Newsletter"}),(0,Re.jsxs)(oo,{children:[(0,Re.jsx)("p",{children:"Subscribe to get updates on smart home tips, exclusive offers, and new product announcements."}),(0,Re.jsxs)("form",{children:[(0,Re.jsx)("input",{type:"email",placeholder:"Your email address"}),(0,Re.jsx)(so,{as:"button",type:"submit",children:"Send"})]})]})]})]}),(0,Re.jsx)(ao,{}),(0,Re.jsxs)(lo,{children:[(0,Re.jsxs)("div",{children:["\xa9 ",(new Date).getFullYear()," Home Vision Solutions. All rights reserved."]}),(0,Re.jsx)("div",{children:"Designed with \u2665 in Vancouver"})]})]})})},uo=Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,po=Ne`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`,fo=Ne`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,ho=Me.section`
  padding: 130px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`,go=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/noise-pattern.png');
  opacity: 0.05;
  z-index: 0;
`,mo=Me.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`,xo=Me.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"40px"});
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`,bo=Me.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 2;
  }
`,vo=Me.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 60%);
    z-index: 1;
    pointer-events: none;
  }
  
  img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.7s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`,yo=Me.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(203, 157, 118, 0.3) 0%, rgba(203, 157, 118, 0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  animation: ${fo} 6s ease-in-out infinite;
`,wo=Me.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  height: 40px;
  width: 80%;
  z-index: 2;
`,ko=Me.div`
  width: 6px;
  margin: 0 3px;
  height: ${e=>e.height}px;
  background-color: rgba(203, 157, 118, 0.8);
  border-radius: 3px;
  opacity: 0.7;
  animation: ${e=>be`
    ${jo(e.height)} 1.2s ease-in-out ${e.delay}s infinite alternate
  `};
`,jo=e=>Ne`
  0% {
    height: 5px;
  }
  100% {
    height: ${e}px;
  }
`,So=Me.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(203, 157, 118, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 8px 20px rgba(203, 157, 118, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: rgba(203, 157, 118, 0.8);
    z-index: -1;
    animation: ${po} 2s infinite;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`,Co=Me.div`
  @media (max-width: 992px) {
    order: 1;
  }
`,zo=Me.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
  color: rgba(203, 157, 118, 0.9);
  font-weight: 500;
`,Eo=Me.h2`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 25px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`,_o=Me.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
`,Lo=Me.div`
  margin-bottom: 40px;
`,Po=Me.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: ${uo} 0.6s forwards;
  animation-delay: ${e=>.1+.15*e.delay}s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    border-color: rgba(203, 157, 118, 0.4);
  }
`,$o=Me.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`,Oo=Me.div`
  width: 36px;
  height: 36px;
  background-color: rgba(203, 157, 118, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  svg {
    width: 20px;
    height: 20px;
    color: rgba(203, 157, 118, 0.9);
  }
`,To=Me.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`,No=Me.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin: 0;
  padding-left: 51px;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    font-style: italic;
  }
`,Mo=Me(Ae)`
  background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 15px 35px;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(203, 157, 118, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(203, 157, 118, 0.4);
  }
`,Ro=()=>{const{ref:t,inView:n}=Ke({threshold:.1,triggerOnce:!0}),[r,i]=(0,e.useState)(!1),o=[{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),(0,Re.jsx)("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),(0,Re.jsx)("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),(0,Re.jsx)("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),(0,Re.jsx)("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),title:"Lighting Control",example:'"Hey Home, set living room lights to 50 percent"'},{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,Re.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),title:"Home Security",example:'"Hey Home, arm the security system" or "unlock front door"'},{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",ry:"2"}),(0,Re.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"18"})]}),title:"Entertainment",example:'"Hey Home, play music in the kitchen" or "turn on the TV"'},{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("line",{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"}),(0,Re.jsx)("line",{x1:"9.69",y1:"8",x2:"21.17",y2:"8"}),(0,Re.jsx)("line",{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"}),(0,Re.jsx)("line",{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"}),(0,Re.jsx)("line",{x1:"14.31",y1:"16",x2:"2.83",y2:"16"}),(0,Re.jsx)("line",{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"})]}),title:"Climate Control",example:'"Hey Home, set temperature to 72 degrees" or "turn on AC"'}],a=Array.from({length:12},(()=>Math.floor(25*Math.random())+10)),l=Array.from({length:12},((e,t)=>.1*t));return(0,Re.jsxs)(ho,{id:"voice-control",ref:t,children:[(0,Re.jsx)(go,{}),(0,Re.jsx)(mo,{children:(0,Re.jsxs)(xo,{inView:n,children:[(0,Re.jsxs)(Co,{children:[(0,Re.jsx)(zo,{children:"Smart Home Assistant"}),(0,Re.jsx)(Eo,{children:"Voice Command Service"}),(0,Re.jsx)(_o,{children:"Control your entire smart home ecosystem with the power of your voice. Our advanced voice recognition system understands natural language and can perform complex tasks across multiple integrated systems."}),(0,Re.jsx)(Lo,{children:o.map(((e,t)=>(0,Re.jsxs)(Po,{delay:t,children:[(0,Re.jsxs)($o,{children:[(0,Re.jsx)(Oo,{children:e.icon}),(0,Re.jsx)(To,{children:e.title})]}),(0,Re.jsxs)(No,{children:["Example: ",(0,Re.jsx)("span",{children:e.example})]})]},t)))}),(0,Re.jsx)(Mo,{onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})})("contact"),children:"Explore Voice Control Options"})]}),(0,Re.jsxs)(bo,{children:[(0,Re.jsxs)(vo,{children:[(0,Re.jsx)("img",{src:"/voiceCommand.jpg",alt:"Voice Assistant"}),r&&(0,Re.jsx)(wo,{children:a.map(((e,t)=>(0,Re.jsx)(ko,{height:e,delay:l[t]},t)))}),(0,Re.jsx)(So,{onClick:()=>{i(!r)},children:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),(0,Re.jsx)("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),(0,Re.jsx)("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),(0,Re.jsx)("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]})})]}),(0,Re.jsx)(yo,{})]})]})})]})},Vo=Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ao=Ne`
  0% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(203, 157, 118, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0);
  }
`,Io=Ne`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,Do=Me.section`
  padding: 140px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`,Fo=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(rgba(203, 157, 118, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
  z-index: 0;
`,Yo=Me.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`,Bo=Me.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"40px"});
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`,Wo=Me.div`
  @media (max-width: 992px) {
    order: 1;
  }
`,Ho=Me.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 2;
  }
`,Uo=Me.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  background: #fff;
  padding: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: #e1e8ed;
    z-index: 1;
  }
`,Ko=Me.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 350px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 0.5s ease;
  }
`,Qo=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${e=>100-e.openPercent}%;
  background-color: #f8f9fa;
  transition: height 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 12px;
    background: #e1e8ed;
    border-bottom: 2px solid #cbd5e0;
  }
`,qo=Me.div`
  position: relative;
  margin-top: 30px;
  background: rgba(30, 30, 32, 0.8);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`,Xo=Me.h4`
  font-size: 1.1rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  
  svg {
    margin-right: 10px;
    color: rgba(203, 157, 118, 0.9);
  }
`,Go=Me.div`
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Zo=Me.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
  span {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  strong {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
  }
`,Jo=Me.input.attrs({type:"range"})`
  width: 100%;
  height: 6px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.9);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.5);
  }
  
  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    animation: ${Ao} 2s infinite;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.9);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.5);
  }
  
  &::-moz-range-thumb:hover {
    transform: scale(1.1);
  }
`,ea=Me.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`,ta=Me.button`
  padding: 8px 15px;
  background: ${e=>e.active?"linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9))":"rgba(255, 255, 255, 0.05)"};
  color: ${e=>e.active?"#fff":"rgba(255, 255, 255, 0.9)"};
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${e=>e.active?"0 10px 20px rgba(203, 157, 118, 0.3)":"none"};
  
  &:hover {
    background: ${e=>e.active?"linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9))":"rgba(255, 255, 255, 0.1)"};
    transform: translateY(-2px);
    box-shadow: ${e=>e.active?"0 15px 30px rgba(203, 157, 118, 0.4)":"0 5px 15px rgba(0, 0, 0, 0.1)"};
  }
`,na=Me.button`
  display: flex;
  align-items: center;
  padding: 10px 18px;
  background: ${e=>e.active?"rgba(203, 157, 118, 0.15)":"rgba(255, 255, 255, 0.05)"};
  border: 1px solid ${e=>e.active?"rgba(203, 157, 118, 0.3)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  svg {
    color: rgba(203, 157, 118, 0.9);
    margin-right: 10px;
  }
  
  .time {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    margin-right: 5px;
  }
  
  .label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
  }
  
  .toggle {
    margin-left: auto;
    width: 36px;
    height: 20px;
    background: ${e=>e.active?"rgba(203, 157, 118, 0.9)":"rgba(255, 255, 255, 0.2)"};
    border-radius: 10px;
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: ${e=>e.active?"calc(100% - 18px)":"2px"};
      width: 16px;
      height: 16px;
      background: #fff;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
  }
  
  &:hover {
    border-color: rgba(203, 157, 118, 0.5);
    
    .toggle {
      background: ${e=>e.active?"rgba(203, 157, 118, 1)":"rgba(255, 255, 255, 0.3)"};
    }
  }
`,ra=Me.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
  color: rgba(203, 157, 118, 0.9);
  font-weight: 500;
`,ia=Me.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
`,oa=Me.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
`,aa=Me.div`
  margin-bottom: 40px;
`,la=Me.div`
  margin-bottom: 25px;
  display: flex;
  opacity: 0;
  transform: translateY(20px);
  animation: ${Vo} 0.6s forwards;
  animation-delay: ${e=>.2+.15*e.delay}s;
  
  &:last-child {
    margin-bottom: 0;
  }
`,sa=Me.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 15px;
  background-color: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  
  svg {
    color: rgba(203, 157, 118, 0.9);
    width: 24px;
    height: 24px;
  }
`,ca=Me.div``,ua=Me.h4`
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 600;
  color: #fff;
`,da=Me.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`,pa=Me.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(203, 157, 118, 0.15) 0%, rgba(203, 157, 118, 0) 70%);
  bottom: -80px;
  left: -50px;
  z-index: -1;
  animation: ${Io} 6s ease-in-out infinite;
`,fa=Me(Ae)`
  margin-top: 40px;
  background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(203, 157, 118, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(203, 157, 118, 0.4);
  }
`,ha=()=>{const{ref:t,inView:n}=Ke({threshold:.1,triggerOnce:!0}),[r,i]=(0,e.useState)(75),[o,a]=(0,e.useState)(!0),[l,s]=(0,e.useState)(!0),[c,u]=(0,e.useState)("privacy"),d=[{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"6"}),(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"2"})]}),title:"Precision Controls",description:"Set your shades to the exact position you want with precise controls, from fully closed to fully open."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),title:"Energy Efficiency",description:"Smart shades automatically adjust based on time of day and temperature to reduce heating and cooling costs."},{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),title:"Automated Schedules",description:"Set schedules for your shades to open in the morning and close in the evening automatically."},{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),(0,Re.jsx)("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),title:"Remote Control",description:"Control your shades from anywhere using your smartphone, tablet, or voice assistant."}];return(0,Re.jsxs)(Do,{id:"motorized-shades",ref:t,children:[(0,Re.jsx)(Fo,{}),(0,Re.jsx)(Yo,{children:(0,Re.jsxs)(Bo,{inView:n,children:[(0,Re.jsxs)(Wo,{children:[(0,Re.jsx)(ra,{children:"Smart Home Integration"}),(0,Re.jsxs)(ia,{children:["Motorized ",(0,Re.jsx)("span",{children:"Shades"})]}),(0,Re.jsx)(oa,{children:"Enhance your home with sophisticated motorized window treatments that combine elegant design with smart technology. Our motorized shades provide privacy, light control, and energy efficiency while seamlessly integrating with your smart home system."}),(0,Re.jsx)(aa,{children:d.map(((e,t)=>(0,Re.jsxs)(la,{delay:t,children:[(0,Re.jsx)(sa,{children:e.icon}),(0,Re.jsxs)(ca,{children:[(0,Re.jsx)(ua,{children:e.title}),(0,Re.jsx)(da,{children:e.description})]})]},t)))}),(0,Re.jsx)(fa,{onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})})("contact"),children:"Explore Shade Options"}),(0,Re.jsx)(pa,{})]}),(0,Re.jsxs)(Ho,{children:[(0,Re.jsx)(Uo,{children:(0,Re.jsxs)(Ko,{children:[(0,Re.jsx)("img",{src:"/motorizesShade.jpg",alt:"View through window"}),(0,Re.jsx)(Qo,{openPercent:r})]})}),(0,Re.jsxs)(qo,{children:[(0,Re.jsxs)(Xo,{children:[(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),(0,Re.jsx)("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),(0,Re.jsx)("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),"Shade Controls"]}),(0,Re.jsxs)(Go,{children:[(0,Re.jsxs)(Zo,{children:[(0,Re.jsx)("span",{children:"Shade Position"}),(0,Re.jsxs)("strong",{children:[r,"% Open"]})]}),(0,Re.jsx)(Jo,{min:"0",max:"100",value:r,onChange:e=>{i(parseInt(e.target.value)),u("")}}),(0,Re.jsx)(ea,{children:[{id:"open",name:"Open",value:100},{id:"privacy",name:"Privacy",value:75},{id:"movie",name:"Movie",value:20},{id:"closed",name:"Closed",value:0}].map((e=>(0,Re.jsx)(ta,{active:c===e.id,onClick:()=>(e=>{i(e.value),u(e.id)})(e),children:e.name},e.id)))})]}),(0,Re.jsxs)(Go,{children:[(0,Re.jsx)(Zo,{children:(0,Re.jsx)("span",{children:"Daily Schedules"})}),(0,Re.jsxs)(na,{active:o,onClick:()=>a(!o),children:[(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,Re.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,Re.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,Re.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,Re.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,Re.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,Re.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,Re.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,Re.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),(0,Re.jsxs)("div",{children:[(0,Re.jsx)("span",{className:"time",children:"7:30 AM"}),(0,Re.jsx)("span",{className:"label",children:"Open shades"})]}),(0,Re.jsx)("div",{className:"toggle"})]}),(0,Re.jsx)("div",{style:{height:"10px"}}),(0,Re.jsxs)(na,{active:l,onClick:()=>s(!l),children:[(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),(0,Re.jsxs)("div",{children:[(0,Re.jsx)("span",{className:"time",children:"7:00 PM"}),(0,Re.jsx)("span",{className:"label",children:"Close shades"})]}),(0,Re.jsx)("div",{className:"toggle"})]})]})]})]})]})})]})},ga=(Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(203, 157, 118, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0);
  }
`),ma=Me.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`,xa=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(rgba(203, 157, 118, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
  z-index: 0;
`,ba=Me.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`,va=Me.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"40px"});
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`,ya=Me.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
  }
`,wa=Me.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%);
    z-index: 1;
    pointer-events: none;
  }
  
  img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.7s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`,ka=Me.div`
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: -40px;
  left: -40px;
  border-radius: 30px;
  background-color: rgba(203, 157, 118, 0.8);
  z-index: -1;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    bottom: -20px;
    left: -20px;
  }
`,ja=Me.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  z-index: 2;
  
  img {
    height: 24px;
    width: auto;
  }
`,Sa=Me.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 2;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #4dff91;
    border-radius: 50%;
    margin-right: 8px;
    animation: ${ga} 2s infinite;
  }
`,Ca=Me.div`
  @media (max-width: 992px) {
    order: 2;
  }
`,za=Me.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
  color: rgba(203, 157, 118, 0.9);
  font-weight: 500;
`,Ea=Me.h2`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 25px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`,_a=Me.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
`,La=Me.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 40px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Pa=Me.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`,$a=Me.div`
  width: 46px;
  height: 46px;
  background-color: rgba(203, 157, 118, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: rgba(203, 157, 118, 0.9);
  }
`,Oa=Me.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
`,Ta=Me(Ae)`
  background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 15px 35px;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(203, 157, 118, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(203, 157, 118, 0.4);
  }
`,Na=()=>{const{ref:e,inView:t}=Ke({threshold:.1,triggerOnce:!0}),n=[{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),(0,Re.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),title:"Keyless Entry",description:"Access your home using your smartphone, PIN code, or fingerprint."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),title:"Enhanced Security",description:"Military-grade encryption keeps your entry points secure at all times."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M2 12h10M12 2v10M12 12l8 8M22 2L12 12"})}),title:"Remote Access",description:"Lock or unlock your door from anywhere using our secure mobile app."},{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),title:"Entry Logs",description:"Review a detailed history of who entered your home and when."}];return(0,Re.jsxs)(ma,{id:"smart-locks",ref:e,children:[(0,Re.jsx)(xa,{}),(0,Re.jsx)(ba,{children:(0,Re.jsxs)(va,{inView:t,children:[(0,Re.jsxs)(Ca,{children:[(0,Re.jsx)(za,{children:"Smart Security"}),(0,Re.jsx)(Ea,{children:"Automated Door Locks"}),(0,Re.jsx)(_a,{children:"Upgrade your home's entry points with our premium smart locks that combine elegant design with advanced security features. Control access from anywhere and enjoy peace of mind knowing your home is secure."}),(0,Re.jsx)(La,{children:n.map(((e,t)=>(0,Re.jsxs)(Pa,{children:[(0,Re.jsx)($a,{children:e.icon}),(0,Re.jsxs)(Oa,{children:[(0,Re.jsx)("h4",{children:e.title}),(0,Re.jsx)("p",{children:e.description})]})]},t)))}),(0,Re.jsx)(Ta,{onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})})("contact"),children:"Explore Smart Lock Options"})]}),(0,Re.jsxs)(ya,{children:[(0,Re.jsxs)(wa,{children:[(0,Re.jsx)("img",{src:"/smar-door-lock.jpg",alt:"Smart Door Lock"}),(0,Re.jsx)(ja,{children:(0,Re.jsx)("img",{src:"/logo.png",alt:"HomeVision Solutions"})}),(0,Re.jsx)(Sa,{children:"Armed & Secured"})]}),(0,Re.jsx)(ka,{})]})]})})]})},Ma=[{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M12 2v8M12 18v4M4.93 10.93l1.41 1.41M17.66 10.93l-1.41 1.41M2 18h2M20 18h2M19.437 3.406l-1.612 1.035M5.563 3.406l1.612 1.035M19.437 20.594l-1.612-1.035M5.563 20.594l1.612-1.035"}),(0,Re.jsx)("circle",{cx:"12",cy:"14",r:"4"})]}),title:"Smart Scenes",description:"Pre-program custom lighting scenes that activate with a single touch or voice command."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M2 12h10M12 2v10M12 12l8 8M22 2L12 12"})}),title:"Intuitive Controls",description:"Control your lighting through elegant wall panels, mobile app, or voice assistants."},{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Re.jsx)("path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}),(0,Re.jsx)("path",{d:"M2 12h20"})]}),title:"Whole Home Integration",description:"Seamlessly integrate with other smart home systems for comprehensive automation."},{icon:(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M18 8h1a4 4 0 1 1 0 8h-1"}),(0,Re.jsx)("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),(0,Re.jsx)("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),(0,Re.jsx)("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),(0,Re.jsx)("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),title:"Energy Efficient",description:"Reduce electricity consumption with smart scheduling and motion-based activation."}],Ra=(Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    box-shadow: 0 0 15px rgba(203, 157, 118, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(203, 157, 118, 0.8);
  }
  100% {
    box-shadow: 0 0 15px rgba(203, 157, 118, 0.5);
  }
`),Va=Ne`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Aa=Me.section`
  padding: 140px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`,Ia=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(203, 157, 118, 0.15) 0%, transparent 45%),
              radial-gradient(circle at 20% 80%, rgba(203, 157, 118, 0.15) 0%, transparent 45%);
  background-image: radial-gradient(rgba(203, 157, 118, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
  z-index: 0;
`,Da=Me.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
`,Fa=Me.div`
  text-align: center;
  margin-bottom: 80px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,Ya=Me.h2`
  color: white;
  margin-bottom: 15px;
  font-size: 3.4rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  letter-spacing: -0.5px;
  
  span {
    background: linear-gradient(90deg, #e94ca1, #f5b454, #42c6ff);
    background-size: 200% 200%;
    animation: ${Va} 7s ease infinite;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
  }
`,Ba=Me.p`
  font-size: 1.2rem;
  max-width: 750px;
  margin: 25px auto 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
`,Wa=(Me.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 100px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4);
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"40px"});
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
  
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
  }
`,Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 60px;
`,Me.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  
  span {
    background: linear-gradient(90deg, #ffee96, #ffb347);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`,Me.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 30px;
  line-height: 1.7;
`,Me.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"40px"});
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`),Ha=Me.div`
  @media (max-width: 992px) {
    order: 1;
  }
`,Ua=Me.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 2;
  }
`,Ka=Me.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.5s ease;
  }
`,Qa=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${e=>e.color};
  opacity: ${e=>e.brightness/100*.5};
  mix-blend-mode: soft-light;
  transition: all 0.5s ease;
`,qa=Me.div`
  position: relative;
  margin-top: -50px;
  z-index: 10;
  background: rgba(30, 30, 32, 0.8);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-left: 40px;
  margin-right: 40px;
`,Xa=Me.h4`
  font-size: 1.1rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  
  svg {
    margin-right: 10px;
    color: rgba(255, 238, 150, 0.9);
  }
`,Ga=Me.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Za=Me.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
  span {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  strong {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.9);
  }
`,Ja=Me.input.attrs({type:"range"})`
  width: 100%;
  height: 6px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.9);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.5);
  }
  
  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    animation: ${Ra} 2s infinite;
  }
  
  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 50%;
    background: rgba(203, 157, 118, 0.9);
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.5);
  }
  
  &::-moz-range-thumb:hover {
    transform: scale(1.1);
  }
`,el=Me.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-top: 15px;
`,tl=Me.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  border: 3px solid ${e=>e.active?"rgba(203, 157, 118, 0.9)":"rgba(255, 255, 255, 0.2)"};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${e=>e.active?`0 0 15px ${e.color}`:"none"};
  
  &:hover {
    transform: scale(1.1);
  }
`,nl=Me.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
  color: rgba(203, 157, 118, 0.9);
  font-weight: 500;
`,rl=Me.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  
  span {
    background: linear-gradient(90deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`,il=Me.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  line-height: 1.7;
`,ol=Me.div`
  margin-top: 40px;
`,al=Me.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  opacity: ${e=>e.inView?1:0};
  transform: translateX(${e=>e.inView?0:"30px"});
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: ${e=>.1*e.delay+"s"};
  
  &:last-child {
    margin-bottom: 0;
  }
`,ll=Me.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 15px;
  background-color: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  
  svg {
    color: rgba(203, 157, 118, 0.9);
    width: 24px;
    height: 24px;
  }
`,sl=Me.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: white;
  }
  
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,cl=Me(Ae)`
  margin-top: 40px;
  background: linear-gradient(to right, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(203, 157, 118, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(203, 157, 118, 0.4);
  }
`,ul=()=>{const[t,n]=Ke({triggerOnce:!0,threshold:.1}),[r,i]=Ke({triggerOnce:!0,threshold:.1}),[o,a]=Ke({triggerOnce:!0,threshold:.1}),[l,s]=Ke({triggerOnce:!0,threshold:.1}),[c,u]=(0,e.useState)(70),[d,p]=(0,e.useState)("#cb9d76");return(0,Re.jsxs)(Aa,{id:"smart-lighting",children:[(0,Re.jsx)(Ia,{}),(0,Re.jsxs)(Da,{children:[(0,Re.jsxs)(Fa,{ref:t,inView:n,children:[(0,Re.jsxs)(Ya,{children:["Smart ",(0,Re.jsx)("span",{children:"Lighting"})," Control"]}),(0,Re.jsx)(Ba,{children:"Transform any space with intelligent lighting that adapts to your needs, mood, and activities. Experience the perfect ambience with just a tap."})]}),(0,Re.jsxs)(Wa,{ref:o,inView:a,children:[(0,Re.jsxs)(Ha,{children:[(0,Re.jsx)(nl,{children:"Smart Control"}),(0,Re.jsxs)(rl,{children:["Complete ",(0,Re.jsx)("span",{children:"Control"})," at Your Fingertips"]}),(0,Re.jsx)(il,{children:"Adjust brightness, color, and mood with intuitive controls through our app, voice commands, or elegant wall panels. Create custom scenes for any occasion."}),(0,Re.jsx)(ol,{ref:l,children:Ma.map(((e,t)=>(0,Re.jsxs)(al,{inView:s,delay:t+1,children:[(0,Re.jsx)(ll,{children:e.icon}),(0,Re.jsxs)(sl,{children:[(0,Re.jsx)("h4",{children:e.title}),(0,Re.jsx)("p",{children:e.description})]})]},t)))}),(0,Re.jsx)(cl,{children:"Explore Lighting Solutions"})]}),(0,Re.jsxs)(Ua,{children:[(0,Re.jsxs)(Ka,{children:[(0,Re.jsx)("img",{src:"/lightingControl.jpg",alt:"Smart Lighting Demo"}),(0,Re.jsx)(Qa,{color:d,brightness:c})]}),(0,Re.jsxs)(qa,{children:[(0,Re.jsxs)(Xa,{children:[(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Re.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),"Live Lighting Control"]}),(0,Re.jsxs)(Ga,{children:[(0,Re.jsxs)(Za,{children:[(0,Re.jsx)("span",{children:"Brightness"}),(0,Re.jsxs)("strong",{children:[c,"%"]})]}),(0,Re.jsx)(Ja,{min:"10",max:"100",value:c,onChange:e=>u(parseInt(e.target.value))})]}),(0,Re.jsxs)(Ga,{children:[(0,Re.jsx)(Za,{children:(0,Re.jsx)("span",{children:"Color"})}),(0,Re.jsx)(el,{children:["#cb9d76","#ff5f5f","#5ea7ff","#7dff7d","#ff7dff","#ffaa5e"].map(((e,t)=>(0,Re.jsx)(tl,{color:e,active:d===e,onClick:()=>p(e)},t)))})]})]})]})]})]})]})},dl=(Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ne`
  0% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(203, 157, 118, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(203, 157, 118, 0);
  }
`,Ne`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`),pl=(Ne`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`,Ne`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Ne`
  0% { height: 5px; }
  50% { height: 20px; }
  100% { height: 5px; }
`,Me.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`),fl=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
  }
  
  &::before {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.9) 0%, transparent 70%);
    top: -200px;
    right: -200px;
  }
  
  &::after {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(203, 157, 118, 0.9) 0%, transparent 70%);
    bottom: -300px;
    left: -200px;
  }
`,hl=Me.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`,gl=Me.div`
  text-align: center;
  margin-bottom: 80px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out;
`,ml=Me.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  
  span {
    color: rgba(203, 157, 118, 0.9);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(203, 157, 118, 0.2);
      z-index: -1;
    }
  }
`,xl=Me.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,bl=Me.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"40px"});
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`,vl=Me.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
  }
`,yl=Me.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.2) 0%, transparent 50%);
    z-index: 1;
  }
  
  img {
    width: 100%;
    display: block;
    transition: transform 0.7s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`,wl=Me.div`
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 150px;
  height: 150px;
  background: rgba(203, 157, 118, 0.9);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  animation: ${dl} 5s ease-in-out infinite;
  z-index: 2;
  
  h3 {
    font-size: 1.8rem;
    margin: 0;
    line-height: 1;
  }
  
  p {
    margin: 10px 0 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`,kl=Me.div`
  @media (max-width: 992px) {
    order: 2;
  }
`,jl=Me.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Sl=Me.div`
  display: flex;
  gap: 25px;
  opacity: ${e=>e.inView?1:0};
  transform: translateX(${e=>e.inView?0:"30px"});
  transition: all 0.6s ease-out;
  transition-delay: ${e=>.1*e.delay}s;
`,Cl=Me.div`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 28px;
    height: 28px;
    color: rgba(203, 157, 118, 0.9);
  }
`,zl=Me.div`
  h4 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #fff;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
  }
`,El=Me.div`
  margin-top: 50px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"20px"});
  transition: all 0.8s ease-out;
  transition-delay: 0.6s;
`,_l=Me.div`
  margin-top: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Ll=Me.h4`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`,Pl=Me.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`,$l=Me.input`
  flex-grow: 1;
  height: 6px;
  -webkit-appearance: none;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--primary) ${e=>e.value}%, rgba(255, 255, 255, 0.2) ${e=>e.value}%);
  outline: none;
  margin: 0 15px;
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--primary);
    box-shadow: 0 0 10px rgba(203, 157, 118, 0.5);
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`,Ol=Me.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--primary);
  }
`,Tl=Me.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 40px;
  gap: 3px;
  margin-bottom: 20px;
`,Nl=Me.div`
  width: 5px;
  background: var(--primary);
  border-radius: 2px;
  height: ${e=>e.height}px;
  transition: height 0.1s ease;
`,Ml=Me.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`,Rl=Me.button`
  background: ${e=>e.active?"var(--primary)":"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.active?"#000":"rgba(255, 255, 255, 0.8)"};
  border: none;
  border-radius: 30px;
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"rgba(255, 255, 255, 0.15)"};
    transform: translateY(-2px);
  }
`,Vl=Me.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  border-left: 3px solid var(--primary);
`,Al=Me.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--primary);
`,Il=Me.div`
  flex-grow: 1;
  
  h5 {
    font-size: 1rem;
    margin: 0 0 5px;
  }
  
  p {
    font-size: 0.85rem;
    margin: 0;
    opacity: 0.7;
  }
`,Dl=Me.div`
  text-align: center;
  color: var(--primary);
  font-weight: 500;
  margin-top: 15px;
  font-size: 0.9rem;
  height: 20px;
`,Fl=[{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"})}),title:"Premium Sound Quality",description:"Experience crystal clear audio with deep bass and rich tones, perfectly balanced for any room size."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12z"})}),title:"Wireless Connectivity",description:"Seamlessly connect via Bluetooth, Wi-Fi, or AirPlay 2 for effortless streaming from any device."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})}),title:"Multi-Room Audio",description:"Create synchronized audio experiences throughout your home with our whole-home audio solution."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Smart Integration",description:"Control your speakers with voice commands via Amazon Alexa, Google Assistant, or Apple Siri."}],Yl=()=>{const[t,n]=Ke({triggerOnce:!0,threshold:.1}),[r,i]=Ke({triggerOnce:!0,threshold:.1}),[o,a]=Ke({triggerOnce:!0,threshold:.1}),[l,s]=(0,e.useState)(60),[c,u]=(0,e.useState)(!1),[d,p]=(0,e.useState)("natural"),[f,h]=(0,e.useState)(Array.from({length:20},(()=>5))),[g,m]=(0,e.useState)(!1),[x,b]=(0,e.useState)("");(0,e.useEffect)((()=>{if(c)return void h(Array.from({length:20},(()=>5)));const e=setInterval((()=>{const e=f.map((()=>{let e;return e="cinema"===d?25*Math.random()*(l/100):"music"===d?Math.max(5,35*Math.random()*(l/100)):"night"===d?Math.min(15,15*Math.random()*(l/100)):20*Math.random()*(l/100),Math.max(3,e)}));h(e)}),100);return()=>clearInterval(e)}),[l,c,d]);return(0,Re.jsxs)(pl,{id:"speakers",children:[(0,Re.jsx)(fl,{}),(0,Re.jsxs)(hl,{children:[(0,Re.jsxs)(gl,{ref:t,inView:n,children:[(0,Re.jsxs)(ml,{children:["Premium ",(0,Re.jsx)("span",{children:"Speaker Systems"})]}),(0,Re.jsx)(xl,{children:"Transform your living space with immersive audio that delivers concert-quality sound throughout your entire home."})]}),(0,Re.jsxs)(bl,{ref:r,inView:i,children:[(0,Re.jsxs)(vl,{children:[(0,Re.jsx)(yl,{children:(0,Re.jsx)("img",{src:"/ArchitecturalSpeaker.jpg",alt:"Premium Smart Speaker System"})}),(0,Re.jsxs)(wl,{children:[(0,Re.jsx)("h3",{children:"360\xb0"}),(0,Re.jsx)("p",{children:"Immersive Sound"})]})]}),(0,Re.jsxs)(kl,{children:[(0,Re.jsx)(jl,{children:Fl.map(((e,t)=>(0,Re.jsxs)(Sl,{delay:t+1,inView:i,children:[(0,Re.jsx)(Cl,{children:e.icon}),(0,Re.jsxs)(zl,{children:[(0,Re.jsx)("h4",{children:e.title}),(0,Re.jsx)("p",{children:e.description})]})]},t)))}),(0,Re.jsxs)(_l,{children:[(0,Re.jsxs)(Ll,{children:[(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M2 18L10 10 14 14 22 6"}),(0,Re.jsx)("path",{d:"M22 6H14"}),(0,Re.jsx)("path",{d:"M14 14H22V6"})]}),"Interactive Demo"]}),(0,Re.jsx)(Tl,{children:f.map(((e,t)=>(0,Re.jsx)(Nl,{height:e},t)))}),(0,Re.jsxs)(Pl,{children:[(0,Re.jsx)(Ol,{onClick:()=>{u(!c),c&&s(0===l?60:l)},children:c?(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),(0,Re.jsx)("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"}),(0,Re.jsx)("path",{d:"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"}),(0,Re.jsx)("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),(0,Re.jsx)("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]}):(0,Re.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Re.jsx)("path",{d:"M15 8a5 5 0 0 1 4 5 5 5 0 0 1-4 5"}),(0,Re.jsx)("path",{d:"M9 12v-4a3 3 0 0 1 5.12-2.12"}),(0,Re.jsx)("path",{d:"M18 8.12A7 7 0 0 1 21 12a7 7 0 0 1-3 5.88"}),(0,Re.jsx)("path",{d:"M12 19v4"}),(0,Re.jsx)("path",{d:"M8 23h8"})]})}),(0,Re.jsx)($l,{type:"range",min:"0",max:"100",value:c?0:l,onChange:e=>{const t=parseInt(e.target.value);s(t),u(0===t),100!==t||g||(m(!0),b("\ud83c\udfc6 Achievement Unlocked: Sound Enthusiast!"),setTimeout((()=>b("")),3e3))}}),(0,Re.jsx)("span",{style:{minWidth:"40px",textAlign:"right",color:"rgba(255,255,255,0.8)"},children:c?"0%":`${l}%`})]}),(0,Re.jsx)(Ml,{children:[{id:"natural",name:"Natural"},{id:"cinema",name:"Cinema"},{id:"music",name:"Music"},{id:"night",name:"Night"}].map((e=>(0,Re.jsx)(Rl,{active:d===e.id,onClick:()=>(e=>{p(e),"cinema"===e?b("\ud83c\udfac Cinema Mode Activated"):"music"===e?b("\ud83c\udfb5 Music Mode Activated"):"night"===e?b("\ud83c\udf19 Night Mode Activated"):"natural"===e&&b("\ud83c\udf3f Natural Mode Activated"),setTimeout((()=>b("")),2e3)})(e.id),children:e.name},e.id)))}),g&&(0,Re.jsxs)(Vl,{children:[(0,Re.jsx)(Al,{children:"\ud83c\udfc6"}),(0,Re.jsxs)(Il,{children:[(0,Re.jsx)("h5",{children:"Sound Enthusiast"}),(0,Re.jsx)("p",{children:"You've experienced our speakers at maximum volume!"})]})]}),(0,Re.jsx)(Dl,{children:x})]}),(0,Re.jsx)(El,{ref:o,inView:a,children:(0,Re.jsx)(Ae,{style:{background:"var(--primary)",color:"#fff",padding:"15px 35px",fontSize:"1.1rem",borderRadius:"12px",fontWeight:"600"},children:"Learn More"})})]})]})]})]})},Bl=Ne`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Wl=Ne`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`,Hl=Ne`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`,Ul=(Ne`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Me.section`
  padding: 120px 0;
  background-color: #0a0a0a;
  color: #fff;
  position: relative;
  overflow: hidden;
`),Kl=Me.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 50%, rgba(203, 157, 118, 0.15) 0%, rgba(16, 16, 36, 0) 70%);
  z-index: 0;
`,Ql=Me.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`,ql=Me.div`
  text-align: center;
  margin-bottom: 60px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out;
`,Xl=Me.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  }
`,Gl=Me.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,Zl=Me.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out 0.2s;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,Jl=Me.div`
  position: relative;
  
  @media (max-width: 991px) {
    order: 1;
  }
`,es=Me.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(203, 157, 118, 0.3) 0%, transparent 70%);
    z-index: 1;
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`,ts=Me.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  color: #fff;
  padding: 15px 25px;
  border-radius: 15px;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 10px 25px rgba(203, 157, 118, 0.4);
  animation: ${Wl} 6s ease-in-out infinite;
  z-index: 2;
  
  @media (max-width: 767px) {
    bottom: -15px;
    right: 20px;
    padding: 10px 20px;
    font-size: 1rem;
  }
`,ns=Me.div`
  @media (max-width: 991px) {
    order: 2;
  }
`,rs=Me.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fff;
  
  span {
    color: rgba(203, 157, 118, 0.9);
  }
`,is=Me.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 30px;
`,os=Me.div`
  margin-bottom: 40px;
`,as=Me.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ls=Me.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: rgba(203, 157, 118, 0.9);
  }
`,ss=Me.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 10px;
    color: #fff;
  }
  
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
  }
`,cs=Me.div`
  margin-top: 120px;
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out 0.4s;
`,us=Me.h3`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: #fff;
  
  span {
    color: rgba(203, 157, 118, 0.9);
  }
`,ds=Me.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,ps=Me.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(203, 157, 118, 0.1);
  transition: all 0.3s ease;
  animation: ${Bl} 0.8s ease-out forwards;
  animation-delay: ${e=>.1+.1*e.delay}s;
  opacity: 0;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(203, 157, 118, 0.3);
  }
`,fs=Me.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(203, 157, 118, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  animation: ${Hl} 3s infinite ease-in-out;
  
  svg {
    width: 35px;
    height: 35px;
    color: rgba(203, 157, 118, 0.9);
  }
`,hs=Me.h4`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #fff;
`,gs=Me.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`,ms=Me.div`
  margin-top: 100px;
  background: rgba(203, 157, 118, 0.05);
  border-radius: 20px;
  padding: 60px;
  text-align: center;
  border: 1px solid rgba(203, 157, 118, 0.15);
  opacity: ${e=>e.inView?1:0};
  transform: translateY(${e=>e.inView?0:"30px"});
  transition: all 0.8s ease-out 0.6s;
  
  @media (max-width: 767px) {
    padding: 40px 20px;
  }
`,xs=Me.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
`,bs=Me.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 30px;
  line-height: 1.6;
`,vs=Me(Ae)`
  background: linear-gradient(135deg, rgba(203, 157, 118, 0.9), rgba(178, 132, 93, 0.9));
  border: none;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  border-radius: 12px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(203, 157, 118, 0.4);
  }
`,ys=()=>{const[e,t]=Ke({triggerOnce:!0,threshold:.1}),[n,r]=Ke({triggerOnce:!0,threshold:.1}),[i,o]=Ke({triggerOnce:!0,threshold:.1}),[a,l]=Ke({triggerOnce:!0,threshold:.1}),s=[{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),title:"Cinematic Visuals",description:"Experience stunning 4K HDR visuals with professional-grade projectors and premium OLED displays for true cinematic picture quality."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.06-7.072m-1.06 7.072a9 9 0 001.06-12.728M12 18v-3"})}),title:"Immersive Audio",description:"Dolby Atmos and DTS:X surround sound systems with precision acoustic treatments for a fully immersive audio experience."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})}),title:"Custom Aesthetics",description:"Professionally designed theater spaces with premium seating, acoustic treatments, and customized lighting to match your home's design."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})}),title:"One-Touch Control",description:"Intuitive control systems that let you manage your entire theater with a single touch from your mobile device or elegant wall panel."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})}),title:"Media Library",description:"Centralized storage solutions for your movie collection with elegant browsing interfaces and instant access to your favorite content."},{icon:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})}),title:"Premium Streaming",description:"Access to premium streaming services with optimized networking for buffer-free 4K content delivery and the latest releases."}];return(0,Re.jsxs)(Ul,{id:"home-theater",children:[(0,Re.jsx)(Kl,{}),(0,Re.jsxs)(Ql,{children:[(0,Re.jsxs)(ql,{ref:e,inView:t,children:[(0,Re.jsx)(Xl,{children:"Ultimate Home Theater Experience"}),(0,Re.jsx)(Gl,{children:"Transform your living space into an immersive entertainment destination with our custom home theater solutions designed for the ultimate cinematic experience."})]}),(0,Re.jsxs)(Zl,{ref:n,inView:r,children:[(0,Re.jsxs)(Jl,{children:[(0,Re.jsx)(es,{children:(0,Re.jsx)("img",{src:"/home-theater.jpg",alt:"Luxury Home Theater"})}),(0,Re.jsx)(ts,{children:"Premium Experience"})]}),(0,Re.jsxs)(ns,{children:[(0,Re.jsxs)(rs,{children:["Bringing the ",(0,Re.jsx)("span",{children:"Cinema"})," to Your Home"]}),(0,Re.jsx)(is,{children:"Our custom home theater solutions combine state-of-the-art technology with luxurious comfort to create an immersive viewing experience that rivals commercial theaters."}),(0,Re.jsxs)(os,{children:[(0,Re.jsxs)(as,{children:[(0,Re.jsx)(ls,{children:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"})})}),(0,Re.jsxs)(ss,{children:[(0,Re.jsx)("h4",{children:"Professional Design"}),(0,Re.jsx)("p",{children:"Expert acoustic design and space planning to optimize your viewing experience with proper seating arrangements and optimal screen placement."})]})]}),(0,Re.jsxs)(as,{children:[(0,Re.jsx)(ls,{children:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),(0,Re.jsxs)(ss,{children:[(0,Re.jsx)("h4",{children:"Personalized Experience"}),(0,Re.jsx)("p",{children:"Customized control systems with user profiles that remember each family member's preferences for lighting, sound, and content recommendations."})]})]}),(0,Re.jsxs)(as,{children:[(0,Re.jsx)(ls,{children:(0,Re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})})}),(0,Re.jsxs)(ss,{children:[(0,Re.jsx)("h4",{children:"Smart Integration"}),(0,Re.jsx)("p",{children:"Seamless integration with your existing smart home system, allowing for automation of the entire viewing experience from entry to exit."})]})]})]}),(0,Re.jsx)(vs,{children:"Explore Theater Solutions"})]})]}),(0,Re.jsxs)(cs,{ref:i,inView:o,children:[(0,Re.jsxs)(us,{children:["The Complete ",(0,Re.jsx)("span",{children:"Theater"})," Experience"]}),(0,Re.jsx)(ds,{children:s.map(((e,t)=>(0,Re.jsxs)(ps,{delay:t,children:[(0,Re.jsx)(fs,{children:e.icon}),(0,Re.jsx)(hs,{children:e.title}),(0,Re.jsx)(gs,{children:e.description})]},t)))})]}),(0,Re.jsxs)(ms,{ref:a,inView:l,children:[(0,Re.jsx)(xs,{children:"Ready for Your Dream Home Theater?"}),(0,Re.jsx)(bs,{children:"Let our experts design a custom home theater solution that perfectly matches your space, style, and entertainment needs. Schedule a consultation today."}),(0,Re.jsx)(vs,{children:"Schedule a Theater Consultation"})]})]})]})},ws=Me.div`
  position: relative;
`;const ks=function(){return(0,Re.jsxs)(ws,{children:[(0,Re.jsx)(Pt,{}),(0,Re.jsx)(qt,{}),(0,Re.jsx)(gn,{}),(0,Re.jsx)(Un,{}),(0,Re.jsx)(hr,{}),(0,Re.jsx)(Ro,{}),(0,Re.jsx)(ha,{}),(0,Re.jsx)(Na,{}),(0,Re.jsx)(ul,{}),(0,Re.jsx)(Yl,{}),(0,Re.jsx)(ys,{}),(0,Re.jsx)(Nr,{}),(0,Re.jsx)(ui,{}),(0,Re.jsx)(Hi,{}),(0,Re.jsx)(qi,{}),(0,Re.jsx)(co,{})]})},js=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:a}=t;n(e),r(e),i(e),o(e),a(e)}))};t.createRoot(document.getElementById("root")).render((0,Re.jsx)(e.StrictMode,{children:(0,Re.jsx)(ks,{})})),js()})()})();
//# sourceMappingURL=main.74b175c2.js.map