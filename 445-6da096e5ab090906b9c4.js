(self.webpackChunkangelica=self.webpackChunkangelica||[]).push([[445],{4717:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(7294)),l=n(7921);t.default=function(e){var t,n,o=e.children,i=e.animation,u=void 0===i?{}:i,s=a.useContext(l.ScrollContainerContext),c=s.currentPage,f=s.currentProgress,d=a.useContext(l.ScrollPageContext).page,p=function(e){void 0===e&&(e={});for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=r({},e);for(var i in o)"function"==typeof o[i]&&(o[i]=o[i].apply(o,t));return o},y=c===d?r({},p(null===(t=null==u?void 0:u.out)||void 0===t?void 0:t.style,f)):c===d-1?r({},p(null===(n=null==u?void 0:u.in)||void 0===n?void 0:n.style,f)):{display:"none"};return a.default.createElement("div",{style:y},o)}},9769:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(7294)),l=n(7921),s=u(n(3462));t.default=function(e){var t=e.children,n=e.scrollParent,r=void 0===n?window:n,o=a.useState({currentY:0,viewportHeight:0,totalPage:0,totalHeight:0,totalProgress:0,realPage:0,currentPage:0,currentProgress:0}),i=o[0],u=o[1],c=a.useCallback((function(){var e=r===window?window.pageYOffset:r.scrollTop,n=r===window?s.default.height:r.clientHeight,o=t.length||0,i=o*(n-1),a=e/i,l=e/n,c=Math.floor(l);u({currentY:e,viewportHeight:n,totalPage:o,totalHeight:i,totalProgress:a,realPage:l,currentPage:c,currentProgress:l-c})}),[]);return a.useEffect((function(){return c(),r.addEventListener("scroll",c),r.addEventListener("resize",c),function(){return r.removeEventListener("scroll",c)}}),[]),a.default.createElement("div",{style:{margin:0,padding:0,userSelect:"none"}},a.default.createElement(l.ScrollContainerContext.Provider,{value:i},t))}},7921:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollPageContext=t.ScrollContainerContext=void 0;var r=n(7294);t.ScrollContainerContext=r.createContext({}),t.ScrollPageContext=r.createContext({page:0})},4196:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(7294)),l=n(7921);t.default=function(e){var t=e.children,n=e.page,o=e.debugBorder,i=void 0!==o&&o,u=a.useContext(l.ScrollContainerContext).viewportHeight,s=r({margin:0,padding:0,height:u,position:"relative",boxSizing:"border-box",scrollSnapAlign:"center",overflow:"hidden"},i?{border:"1px solid red"}:{});return a.default.createElement("div",{style:s},a.default.createElement(l.ScrollPageContext.Provider,{value:{page:n}},t))}},872:function(e,t){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.batch=void 0;var r=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return"function"==typeof e?e.apply(void 0,t):e};t.batch=function(){for(var e,t,o,i,u,a,l,s,c,f,d,p,y=[],v=0;v<arguments.length;v++)y[v]=arguments[v];for(var h={in:{style:{}},out:{style:{}}},m={in:[],out:[]},b=0,g=y;b<g.length;b++){var x=g[b];(null===(e=null==h?void 0:h.in)||void 0===e?void 0:e.style)&&(h.in.style=n(n({},null===(t=null==h?void 0:h.in)||void 0===t?void 0:t.style),null===(o=null==x?void 0:x.in)||void 0===o?void 0:o.style)),(null===(i=null==h?void 0:h.out)||void 0===i?void 0:i.style)&&(h.out.style=n(n({},null===(u=null==h?void 0:h.out)||void 0===u?void 0:u.style),null===(a=null==x?void 0:x.out)||void 0===a?void 0:a.style)),(null===(s=null===(l=null==x?void 0:x.in)||void 0===l?void 0:l.style)||void 0===s?void 0:s.transform)&&m.in.push(x.in.style.transform),(null===(f=null===(c=null==x?void 0:x.out)||void 0===c?void 0:c.style)||void 0===f?void 0:f.transform)&&m.out.push(x.out.style.transform)}return m.in.length>0&&(null===(d=null==h?void 0:h.in)||void 0===d?void 0:d.style)&&(h.in.style.transform=function(e){return m.in.map((function(t){return r(t,e)})).join(" ")}),m.out.length>0&&(null===(p=null==h?void 0:h.out)||void 0===p?void 0:p.style)&&(h.out.style.transform=function(e){return m.out.map((function(t){return r(t,e)})).join(" ")}),h}},6568:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FadeOut=t.FadeIn=t.Fade=void 0;var r=n(615);t.Fade=function(e,t){return void 0===e&&(e=0),void 0===t&&(t=1),{in:{style:{opacity:function(n){return r.SimpleInterpolation(e,t,n)}}},out:{style:{opacity:function(n){return r.SimpleInterpolation(t,e,n)}}}}};t.FadeIn=function(e,t){return void 0===e&&(e=0),void 0===t&&(t=1),{in:{style:{opacity:function(n){return r.SimpleInterpolation(e,t,n)}}}}};t.FadeOut=function(e,t){return void 0===e&&(e=0),void 0===t&&(t=1),{out:{style:{opacity:function(n){return r.SimpleInterpolation(e,t,n)}}}}}},4968:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MoveOut=t.MoveIn=t.Move=void 0;var r=n(615);t.Move=function(e,t,n,o){return void 0===e&&(e=0),void 0===t&&(t=100),void 0===n&&(n=null),void 0===o&&(o=-100),{in:{style:{transform:function(n){return"translate("+r.SimpleInterpolation(e,0,n)+"px, "+r.SimpleInterpolation(t,0,n)+"px)"}}},out:{style:{transform:function(i){return"translate("+r.SimpleInterpolation(0,n||e,i)+"px, "+r.SimpleInterpolation(0,o||t,i)+"px)"}}}}};t.MoveIn=function(e,t){return void 0===e&&(e=0),void 0===t&&(t=100),{in:{style:{transform:function(n){return"translate("+r.SimpleInterpolation(e,0,n)+"px, "+r.SimpleInterpolation(t,0,n)+"px)"}}}}};t.MoveOut=function(e,t){return void 0===e&&(e=0),void 0===t&&(t=-100),{out:{style:{transform:function(n){return"translate("+r.SimpleInterpolation(0,e,n)+"px, "+r.SimpleInterpolation(0,t,n)+"px)"}}}}}},8076:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StickyOut=t.StickyIn=t.Sticky=void 0;var o=r(n(3462));t.Sticky=function(e,t){return void 0===e&&(e=50),void 0===t&&(t=50),{in:{style:{left:function(){return e*o.default.width/100+"px"},top:function(){return t*o.default.height/100+"px"},transform:"translate(-50%, -50%)",position:"fixed"}},out:{style:{left:function(){return e*o.default.width/100+"px"},top:function(){return t*o.default.height/100+"px"},transform:"translate(-50%, -50%)",position:"fixed"}}}};t.StickyIn=function(e,t){return void 0===e&&(e=50),void 0===t&&(t=50),{in:{style:{left:function(){return e*o.default.width/100+"px"},top:function(){return t*o.default.height/100+"px"},transform:"translate(-50%, -50%)",position:"fixed"}},out:{style:{left:function(){return e*o.default.width/100+"px"},top:function(){return t*o.default.height/100+"px"},transform:"translate(-50%, -50%)",position:"absolute"}}}};t.StickyOut=function(e,t){return void 0===e&&(e=50),void 0===t&&(t=50),{in:{style:{left:e*o.default.width/100+"px",top:t*o.default.height/100+"px",transform:"translate(-50%, -50%)",position:"absolute"}},out:{style:{left:e*o.default.width/100+"px",top:t*o.default.height/100+"px",transform:"translate(-50%, -50%)",position:"fixed"}}}}},308:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZoomOut=t.ZoomIn=t.Zoom=void 0;var r=n(615);t.Zoom=function(e,t){return void 0===e&&(e=10),void 0===t&&(t=1),{in:{style:{transform:function(n){return"scale("+r.SimpleInterpolation(e,t,n)+")"}}},out:{style:{transform:function(n){return"scale("+r.SimpleInterpolation(t,e,n)+")"}}}}};t.ZoomIn=function(e,t){return void 0===e&&(e=10),void 0===t&&(t=1),{in:{style:{transform:function(n){return"scale("+r.SimpleInterpolation(e,t,n)+")"}}}}};t.ZoomOut=function(e,t){return void 0===e&&(e=1),void 0===t&&(t=10),{out:{style:{transform:function(n){return"scale("+r.SimpleInterpolation(e,t,n)+")"}}}}}},1022:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ZoomOut=t.ZoomIn=t.Zoom=t.StickyOut=t.StickyIn=t.Sticky=t.MoveOut=t.MoveIn=t.Move=t.FadeOut=t.FadeIn=t.Fade=t.batch=t.ScrollPage=t.ScrollPageContext=t.ScrollContainerContext=t.ScrollContainer=t.Animator=void 0;var o=r(n(4717));t.Animator=o.default;var i=r(n(9769));t.ScrollContainer=i.default;var u=n(7921);Object.defineProperty(t,"ScrollContainerContext",{enumerable:!0,get:function(){return u.ScrollContainerContext}}),Object.defineProperty(t,"ScrollPageContext",{enumerable:!0,get:function(){return u.ScrollPageContext}});var a=r(n(4196));t.ScrollPage=a.default;var l=n(872);Object.defineProperty(t,"batch",{enumerable:!0,get:function(){return l.batch}});var s=n(6568);Object.defineProperty(t,"Fade",{enumerable:!0,get:function(){return s.Fade}}),Object.defineProperty(t,"FadeIn",{enumerable:!0,get:function(){return s.FadeIn}}),Object.defineProperty(t,"FadeOut",{enumerable:!0,get:function(){return s.FadeOut}});var c=n(4968);Object.defineProperty(t,"Move",{enumerable:!0,get:function(){return c.Move}}),Object.defineProperty(t,"MoveIn",{enumerable:!0,get:function(){return c.MoveIn}}),Object.defineProperty(t,"MoveOut",{enumerable:!0,get:function(){return c.MoveOut}});var f=n(8076);Object.defineProperty(t,"Sticky",{enumerable:!0,get:function(){return f.Sticky}}),Object.defineProperty(t,"StickyIn",{enumerable:!0,get:function(){return f.StickyIn}}),Object.defineProperty(t,"StickyOut",{enumerable:!0,get:function(){return f.StickyOut}});var d=n(308);Object.defineProperty(t,"Zoom",{enumerable:!0,get:function(){return d.Zoom}}),Object.defineProperty(t,"ZoomIn",{enumerable:!0,get:function(){return d.ZoomIn}}),Object.defineProperty(t,"ZoomOut",{enumerable:!0,get:function(){return d.ZoomOut}})},3462:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=/iPhone/.test(navigator.userAgent),r=/Safari/.test(navigator.userAgent),o=new Proxy({width:0,height:0},{get:function(e,t){return"height"===t?n&&r?window.screen.height-80:window.innerHeight:"width"===t?n&&r?window.screen.width:window.innerWidth:void 0}});t.default=o},615:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleInterpolation=void 0;t.SimpleInterpolation=function(e,t,n){return e*(1-n)+t*n}},7336:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=d(i),a=d(n(2)),l=d(n(10)),s=d(n(12)),c=d(n(13)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function d(e){return e&&e.__esModule?e:{default:e}}var p=["🔙","⏰"],y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,o){var i=n.props.avgTypingDelay,u=n.props.stdTypingDelay;return n.props.delayGenerator(i,u,{line:e,lineIdx:t,character:r,charIdx:o,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return f.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,o=n.props.onLineTyped;return f.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):f.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="⏰"),new Promise((function(e,i){n.setState({textLines:n.state.textLines.concat([""])},(function(){f.eachPromise(r,n.typeCharacter,r,t).then((function(){return o(r,t)})).then(e).catch(i)}))}))},n.typeCharacter=function(e,t,r,o){if(!n.mounted)return Promise.resolve();var i=n.props.onCharacterTyped;return new Promise((function(u){var a=n.state.textLines.slice();f.sleep(n.introducedDelay).then((function(){n.introducedDelay=null;var l="🔙"===e;if("⏰"===e)u();else{if(l&&o>0){for(var s=o-1,c=a[s],f=s;f>=0&&(!(c.length>0)||p.includes(c[0]));f--)c=a[s=f];a[s]=c.substr(0,c.length-1)}else a[o]+=e;n.setState({textLines:a},(function(){var a=n.delayGenerator(r,o,e,t);i(e,t),setTimeout(u,a)}))}}))}))},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=f.extractTextFromElement(e.children)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return f.eachPromise(t,this.typeLine).then((function(){return e.onTypingDone()}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,o=this.state.isDone,i=f.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return u.default.createElement("div",{className:"Typist "+t},i,u.default.createElement(l.default,r({isDone:o},n)))}}]),t}(i.Component);y.propTypes={children:a.default.node,className:a.default.string,avgTypingDelay:a.default.number,stdTypingDelay:a.default.number,startDelay:a.default.number,cursor:a.default.object,onCharacterTyped:a.default.func,onLineTyped:a.default.func,onTypingDone:a.default.func,delayGenerator:a.default.func},y.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:f.gaussianRnd},t.default=y,y.Backspace=s.default,y.Delay=c.default},function(e,t){e.exports=n(7294)},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(6),u=n(7),a=n(8);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator;var l="<<anonymous>>",s={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(r.thatReturnsNull),arrayOf:function(e){return d((function(t,n,r,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a))return new f("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<a.length;l++){var s=e(a,l,r,o,i+"["+l+"]",u);if(s instanceof Error)return s}return null}))},element:d((function(t,n,r,o,i){var u=t[n];return e(u)?null:new f("Invalid "+o+" `"+i+"` of type `"+v(u)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return d((function(t,n,r,o,i){if(!(t[n]instanceof e)){var u=e.name||l;return new f("Invalid "+o+" `"+i+"` of type `"+(((a=t[n]).constructor&&a.constructor.name?a.constructor.name:l)+"` supplied to `")+r+"`, expected instance of `"+u+"`.")}var a;return null}))},node:d((function(e,t,n,r,o){return y(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(t,n,r,o,i){if("function"!=typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],l=v(a);if("object"!==l)return new f("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in a)if(a.hasOwnProperty(s)){var c=e(a,s,r,o,i+"."+s,u);if(c instanceof Error)return c}return null}))},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return d((function(t,n,r,o,i){for(var u=t[n],a=0;a<e.length;a++)if(c(u,e[a]))return null;return new f("Invalid "+o+" `"+i+"` of value `"+u+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",m(n),t),r.thatReturnsNull}return d((function(t,n,r,o,i){for(var a=0;a<e.length;a++)if(null==(0,e[a])(t,n,r,o,i,u))return null;return new f("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}))},shape:function(e){return d((function(t,n,r,o,i){var a=t[n],l=v(a);if("object"!==l)return new f("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var c=e[s];if(c){var d=c(a,s,r,o,i+"."+s,u);if(d)return d}}return null}))}};function c(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e){this.message=e,this.stack=""}function d(e){function n(n,r,i,a,s,c,d){(a=a||l,c=c||i,d!==u)&&(t&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[i]?n?null===r[i]?new f("The "+s+" `"+c+"` is marked as required in `"+a+"`, but its value is `null`."):new f("The "+s+" `"+c+"` is marked as required in `"+a+"`, but its value is `undefined`."):null:e(r,i,a,s,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function p(e){return d((function(t,n,r,o,i,u){var a=t[n];return v(a)!==e?new f("Invalid "+o+" `"+i+"` of type `"+h(a)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!y(o.value))return!1}else for(;!(o=i.next()).done;){var u=o.value;if(u&&!y(u[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function h(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function m(e){var t=h(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,s.checkPropTypes=a,s.PropTypes=s,s}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";e.exports=function(e,t,n,r,o,i,u,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,u,a],c=0;(l=new Error(t.replace(/%s/g,(function(){return s[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";var r=n(4);e.exports=r},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){}},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(7);e.exports=function(){function e(e,t,n,r,u,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=a(o),u=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}n(11);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout((function(){return t.setState({shouldRender:!1})}),this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},(function(){e.setState({shouldRender:!0},(function(){e._isReRenderingCursor=!1}))}))}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return i.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}(o.Component);l.propTypes={blink:u.default.bool,show:u.default.bool,element:u.default.node,hideWhenDone:u.default.bool,hideWhenDoneDelay:u.default.number,isDone:u.default.bool},l.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=l},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("noscript",null)};u.componentName="Backspace",u.propTypes={count:o.default.number,delay:o.default.number},u.defaultProps={count:1,delay:0},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("noscript",null)};u.componentName="Delay",u.propTypes={ms:o.default.number.isRequired},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.gaussianRnd=function(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e},t.eachPromise=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=function(e,n,o){return e.then((function(){return t.apply(void 0,[n,o].concat(r))}))};return Array.from(e).reduce(i,Promise.resolve())},t.exclude=a,t.isBackspaceElement=l,t.isDelayElement=s,t.extractTextFromElement=function(e){var t=e?[e]:[],n=[];for(;t.length>0;){var r=t.pop();if(u.default.isValidElement(r))l(r)||s(r)?n.unshift(r):u.default.Children.forEach(r.props.children,(function(e){t.push(e)}));else if(Array.isArray(r)){var o=!0,i=!1,a=void 0;try{for(var c,f=r[Symbol.iterator]();!(o=(c=f.next()).done);o=!0){var d=c.value;t.push(d)}}catch(p){i=!0,a=p}finally{try{!o&&f.return&&f.return()}finally{if(i)throw a}}}else n.unshift(r)}return n},t.cloneElement=c,t.cloneElementWithSpecifiedText=function(e){var t=e.element,n=e.textLines;if(!t)return;return f(t,n,0)[0]};var o,i=n(1),u=(o=i)&&o.__esModule?o:{default:o};t.sleep=function(e){return new Promise((function(t){return null!=e?setTimeout(t,e):t()}))};function a(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function l(e){return e&&e.type&&"Backspace"===e.type.componentName}function s(e){return e&&e.type&&"Delay"===e.type.componentName}function c(e,t){var n=e.type,r=a(e.props,["children"]),o=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+n+"-"+o,u.default.createElement.apply(u.default,[n,r].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)))}function f(e,t,n){if(n>=t.length)return[null,n];var o=n,i=function(e){var n=f(e,t,o),i=r(n,2),u=i[0],a=i[1];return o=a,u};return u.default.isValidElement(e)&&!(l(e)||s(e))?[c(e,u.default.Children.map(e.props.children,i)||[]),o]:Array.isArray(e)?[e.map(i),o]:[t[o],o+1]}}])},9445:function(e,t,n){"use strict";n.r(t);var r=n(7336),o=n.n(r),i=n(8468),u=n(1022),a=n(1513),l=n(5167),s=n(5893),c=function(){return(0,s.jsxs)(o(),{avgTypingDelay:85,children:[(0,s.jsx)(o().Delay,{ms:1700}),(0,s.jsxs)("span",{children:["  Computer ",(0,s.jsx)("br",{}),"Programmer"]}),(0,s.jsx)(o().Backspace,{count:21,delay:400}),(0,s.jsx)("span",{children:"Developer "})]})},f=function(){return(0,s.jsxs)(o(),{avgTypingDelay:85,children:[(0,s.jsx)(o().Delay,{ms:1700}),(0,s.jsx)("span",{children:"Computer Programmer"}),(0,s.jsx)(o().Backspace,{count:21,delay:400}),(0,s.jsx)("span",{children:"Developer "})]})};t.default=function(){var e=(0,i.Lm)(),t=function(){return e<769?(0,s.jsx)(c,{}):(0,s.jsx)(f,{})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{title:"About Me"}),(0,s.jsx)("main",{id:"about",className:"about",children:(0,s.jsx)(u.ScrollContainer,{children:(0,s.jsx)(u.ScrollPage,{page:1,children:(0,s.jsx)(u.Animator,{animation:(0,u.batch)((0,u.Fade)(),(0,u.Sticky)(),(0,u.MoveOut)(0,-900)),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"heading",children:(0,s.jsx)(t,{})}),(0,s.jsxs)("div",{className:"grid-container",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("h4",{children:["Hello, ",(0,s.jsx)("br",{}),"I’m Angelica Turla"]}),(0,s.jsxs)("p",{children:["I am currently on my 2nd year of Computer Science at Carleton University.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("p",{children:["Still finding my footing in the vast world of technology and so I always keep an open mind when it comes to learning new things.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"I work on a variety of technologies and frameworks including but not limited to Python, Java, C/C++, JavaScript, and React. View more ",(0,s.jsx)(a.Z,{to:"/#skills",children:"here"}),"."]})})]})]})})})})})]})}}}]);
//# sourceMappingURL=445-6da096e5ab090906b9c4.js.map