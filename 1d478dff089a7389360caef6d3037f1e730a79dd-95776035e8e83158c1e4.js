(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{GGa8:function(e,t,r){},HbZ0:function(e,t,r){e.exports=r.p+"static/hero-42abcfff6b1feb27884aaa579e658531.png"},JvEO:function(e,t,r){"use strict";var i=r("q1tI"),n=r.n(i),o=(r("4QlT"),r("ZSiC"),r("93Eu"),r("/eHF")),a=r.n(o);t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(a.a,{delay:100,duration:1e3},n.a.createElement("div",{className:"inner__txt"},n.a.createElement("h3",{className:"brow"},e.heroCategory," - ",e.heroYear," - ",e.heroDeliverable),n.a.createElement("h2",{className:"lead"},e.heroTitle),n.a.createElement("h2",{className:"head"},e.heroSummary))))}},KmJ5:function(e,t,r){e.exports=r.p+"static/hero-b150075d89a7135dbe5631c7a5994154.png"},Mq0D:function(e,t,r){"use strict";var i=r("q1tI"),n=r.n(i),o=(r("n4/w"),r("4QlT"),r("93Eu"),r("X7BR")),a=r("Wbzz"),s=(r("0l/t"),r("bWfx"),r("XfO3"),r("HEwt"),r("LK8F"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("pIFo"),r("xfY5"),r("8+KV"),r("a1Th"),r("h7Nl"),r("Btvt"),r("17x9")),c=r.n(s),l=function(e,t){var r=void 0;return function(){var i=this,n=arguments,o=function(){return e.apply(i,n)};clearTimeout(r),r=setTimeout(o,t)}},u=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};function h(e){var t=0;return e.forEach((function(e){e.rect.height>t&&(t=e.rect.height)})),t}function f(e){var t=e.rect,r=e.mode,i=(e.prevOffset,e.position),n=e.direction,o=e.width;if("chain"!==r)return!1;switch(n){case"toRight":return i.from>0;case"toLeft":default:return t.width+i.from<=o}}function d(e){var t=e.mode,r=e.from,i=e.direction,n=e.rect,o=e.width,a=r||0;switch(t){case"await":switch(i){case"toRight":return o;case"toLeft":default:return-n.width}case"smooth":switch(i){case"toRight":return n.width>o?0:o-n.width;case"toLeft":default:return n.width>o?o-n.width:0}case"chain":default:switch(i){case"toRight":return 0;case"toLeft":default:return n.width+a>o?o-n.width:o-n.left-n.width}}}var p=function(e){var t=e.mode,r=e.index,i=e.rect,n=e.offset,o=e.width,a=e.direction,s=function(e){var t=e.index,r=e.rect,i=e.offset,n=e.width,o=e.direction;if(0===t)return i;if("number"==typeof i)return function(e){var t=e.rect,r=e.offset;switch(e.direction){case"toRight":return r-t.width;case"toLeft":default:return r}}({rect:r,offset:i,direction:o});switch(o){case"toRight":return-r.width;case"toLeft":default:return n}}({index:r,rect:i,offset:n,width:o,direction:a});return{from:s,to:function(e){var t=e.rect,r=e.width;switch(e.direction){case"toRight":return r;case"toLeft":default:return-t.width}}({rect:i,width:o,direction:a}),next:d({mode:t,from:s,direction:a,rect:i,width:o})}};function m(e){var t=e.from,r=e.rect;switch(e.direction){case"toRight":return t;case"toLeft":default:return t+r.width}}function g(e){var t=e.offset,r=e.rect,i=e.direction,n=e.width;if("run-in"===t)switch(i){case"toRight":return-r.width;case"toLeft":default:return n}if("string"==typeof t){var o=Number(t.replace("%",""));if(o)return n/100*o}return t}var b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},w=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},M=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},x=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},L=function(e){function t(){var e,r,i;b(this,t);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return r=i=M(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i.state={children:i.props.children({index:i.props.index}),move:i.props.move,position:{from:void 0,to:void 0,next:void 0},offset:i.props.offset,rect:null},i.x=0,i.isMoving=!1,i.nextTriggered=!1,i.elementRef=n.a.createRef(),i.componentDidMount=function(){i.setPosition(!0),i.observer=new MutationObserver(i.onMutation),i.observer.observe(i.elementRef.current,{characterData:!0,childList:!0,subtree:!0})},i.componentWillUnmount=function(){i.observer.disconnect()},i.onMutation=function(){i.setPosition()},i.componentDidUpdate=function(e,t){i.x||t.position.from===i.state.position.from||(i.x=i.state.position.from,i.elementRef.current.style.transform="translate3d("+i.x+"px, 0, 0)"),i.x!==i.state.position.from&&e.prevRect&&i.props.prevRect&&e.prevRect.width!==i.props.prevRect.width&&(i.props.offset?i.x=i.x+(i.props.offset-e.offset):i.x=i.x+(i.props.prevRect.width-e.prevRect.width),i.elementRef.current.style.transform="translate3d("+i.x+"px, 0, 0)"),i.props.move&&!e.start&&i.props.start&&i.animate(),i.props.start&&!e.move&&i.props.move&&i.animate(),e.move&&!i.props.move&&(i.isMoving=!1)},i.setPosition=function(e){var t=i.props,r=t.mode,n=t.width,o=t.id,a=t.onNext,s=t.direction,c=t.index,l=t.setRect,u=i.elementRef.current.getBoundingClientRect();if(0!==u.width){var h=0===i.props.index?g({offset:i.props.offset,rect:u,direction:s,width:n}):i.props.offset,d=p({mode:r,rect:u,index:c,offset:h,width:n,direction:s});if(l({index:i.props.index,rect:u,offset:h,nextOffset:m({from:d.from,rect:u,direction:s})}),e){var b=f({mode:r,rect:u,position:d,offset:h,direction:s,width:n});b&&a({id:o,index:c,rect:u,nextOffset:m({from:d.from,rect:u,direction:s})}),b||!h&&0!==c||a({id:o,index:c,rect:u}),i.nextTriggered=b}i.setState({rect:u,offset:h,position:d})}},i.shouldTriggerNext=function(){return!i.nextTriggered&&("toLeft"===i.props.direction?i.x<=i.state.position.next:i.x>=i.state.position.next)},i.triggerNext=function(){i.shouldTriggerNext()&&(i.nextTriggered=!0,i.props.onNext({id:i.props.id,index:i.props.index,rect:i.state.rect}))},i.shouldFinish=function(){switch(i.props.direction){case"toRight":return i.x>=i.state.position.to;case"toLeft":default:return i.x<=i.state.position.to}},i.animate=function(){if(!i.isMoving){i.isMoving=!0;var e=null;window.requestAnimationFrame((function t(r){if(i.isMoving&&i.elementRef.current){var n=e?r-e:0;i.x="toLeft"===i.props.direction?i.x-n/100*i.props.speed:i.x+n/100*i.props.speed,i.elementRef.current.style.transform="translate3d("+i.x+"px, 0, 0)",i.triggerNext(),i.shouldFinish()?(i.isMoving=!1,e=null,i.props.onFinish(i.props.id)):(e=r,window.requestAnimationFrame(t))}}))}},i.render=function(){return n.a.createElement("div",{className:"ticker__element",style:{willChange:"transform",position:"absolute",left:0,top:0,transform:"translate3d("+i.x+"px, 0, 0)"},ref:i.elementRef},i.state.children)},M(i,r)}return w(t,e),t}(n.a.Component);L.propTypes={children:Object(s.oneOfType)([s.node,s.func]).isRequired,direction:s.string.isRequired,speed:s.number.isRequired,id:s.string.isRequired,index:s.number.isRequired,mode:s.string.isRequired,move:s.bool.isRequired,onNext:s.func.isRequired,onFinish:s.func.isRequired,setRect:s.func.isRequired,start:s.bool.isRequired,offset:Object(s.oneOfType)([s.number,s.string]),prevRect:s.object,width:s.number},L.defaultProps={offset:void 0,width:void 0,prevRect:null};var N=function(e,t){return{elements:[{id:u(),index:0,height:0,start:!1,offset:e,rect:null,prevRect:null}],width:t,height:0}},I=function(e){function t(){var e,r,i;b(this,t);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return r=i=M(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i.next=null,i.state=N(i.props.offset),i.tickerRef=n.a.createRef(),i.dOnResize=l((function(){return i.onResize()}),150),i.componentDidMount=function(){i.setState({width:i.tickerRef.current.offsetWidth,height:i.props.height}),window.addEventListener("resize",i.dOnResize)},i.componentWillUnmount=function(){window.removeEventListener("resize",i.dOnResize)},i.setRect=function(e){var t=e.index,r=e.rect,n=(e.offset,e.nextOffset);i.setState((function(e){var o=e.elements.map((function(e){var i=e;return e.index===t&&(i.rect=r),e.index===t+1&&(i.prevRect=r,i.offset&&(i.offset=n)),i}));return{elements:o,height:i.props.height?e.height:h(o)}}))},i.onResize=function(){i.tickerRef.current&&i.tickerRef.current.offsetWidth!==i.state.width&&i.setState(v({},N(i.props.offset,i.tickerRef.current.offsetWidth),{height:i.props.height}))},i.onFinish=function(e){i.setState((function(t){return{elements:t.elements.filter((function(t){return t.id!==e}))}}))},i.onNext=function(e){e.id;var t=e.index,r=e.rect,n=e.nextOffset;i.setState((function(e){return{elements:[].concat(x(e.elements.map((function(e){var i=e;return e.index===t&&(i.rect=r),(0===e.index||e.offset||i.index===t+1)&&(i.start=!0),i}))),[{id:u(),index:e.elements[e.elements.length-1].index+1,height:0,start:!1,offset:n,rect:null,prevRect:r}])}}))},M(i,r)}return w(t,e),y(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"ticker",ref:this.tickerRef,style:{position:"relative",overflow:"hidden",height:this.state.height&&this.state.height+"px"}},this.state.width&&this.state.elements.map((function(t){return n.a.createElement(L,{key:t.id,id:t.id,index:t.index,start:t.start,offset:t.offset,prevRect:t.prevRect,direction:e.props.direction,mode:e.props.mode,move:e.props.move,speed:e.props.speed,onFinish:e.onFinish,onNext:e.onNext,setRect:e.setRect,width:e.state.width},e.props.children)})))}}]),t}(n.a.Component);I.propTypes={children:Object(s.oneOfType)([s.node,s.func]).isRequired,direction:s.string,mode:s.string,move:s.bool,offset:Object(s.oneOfType)([s.number,s.string]),speed:s.number,height:Object(s.oneOfType)([s.number,s.string])},I.defaultProps={offset:0,speed:5,direction:"toLeft",mode:"chain",move:!0,height:void 0};var C=I,E=(r("2Spj"),"undefined"!=typeof document),D=[{hidden:"hidden",event:"visibilitychange",state:"visibilityState"},{hidden:"webkitHidden",event:"webkitvisibilitychange",state:"webkitVisibilityState"},{hidden:"mozHidden",event:"mozvisibilitychange",state:"mozVisibilityState"},{hidden:"msHidden",event:"msvisibilitychange",state:"msVisibilityState"},{hidden:"oHidden",event:"ovisibilitychange",state:"oVisibilityState"}],T=E&&Boolean(document.addEventListener),j=function(){if(!T)return null;for(var e=0;e<D.length;e++){var t=D[e];if(t.hidden in document)return t}return null}(),A=function(){if(!j)return[!0,function(){}];var e=j.hidden,t=j.state;return[!document[e],document[t]]},O=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();function R(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var z=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={isSupported:T&&j},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),O(t,[{key:"componentDidMount",value:function(){this.state.isSupported&&(this.handleVisibilityChange=this.handleVisibilityChange.bind(this),document.addEventListener(j.event,this.handleVisibilityChange))}},{key:"componentWillUnmount",value:function(){this.state.isSupported&&document.removeEventListener(j.event,this.handleVisibilityChange)}},{key:"handleVisibilityChange",value:function(){var e;"function"==typeof this.props.onChange&&(e=this.props).onChange.apply(e,R(A()));"function"==typeof this.props.children&&this.forceUpdate()}},{key:"render",value:function(){return this.props.children?"function"==typeof this.props.children?this.state.isSupported?(e=this.props).children.apply(e,R(A())):this.props.children():n.a.Children.only(this.props.children):null;var e}}]),t}(n.a.Component);z.displayName="PageVisibility",z.propTypes={onChange:c.a.func,children:c.a.oneOfType([c.a.node,c.a.func])};var S=z,P=r("Xj7D"),_=r.n(P),k=r("Rrg0"),Z=r.n(k),Y=r("KmJ5"),H=r.n(Y),U=r("lfaM"),G=r.n(U),W=r("eaA5"),V=r.n(W),F=r("HbZ0"),B=r.n(F),X=r("jgBf"),J=r.n(X),Q=r("XUob"),q=r.n(Q),K={default:_.a,phisher:Z.a,cluse:H.a,ditto:G.a,semaphore:q.a,fisqual:V.a,webx:B.a,trunks:J.a},$=["cluse","ditto","semaphore","fisqual","trunks","phisher"];t.a=function(){var e=Object(i.useState)(!0),t=e[0],r=e[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"more"},n.a.createElement(S,{onChange:function(e){r(e)}},t&&n.a.createElement(C,null,(function(e){e.index;return n.a.createElement("div",{className:"more__group"},function(e){for(var t=[],r=0;r<$.length;r++)t.push(n.a.createElement(a.Link,{to:$[r]},n.a.createElement("figure",{className:"more__item"},n.a.createElement("img",{className:"more__img",src:K[$[r]],alt:""}),n.a.createElement("figcaption",{className:"more__title"},e[$[r]].heroTitle),n.a.createElement("h4",{className:"more__head"},e[$[r]].heroYear," - ",e[$[r]].heroDeliverable))));return t}(o.a))})))))}},Rrg0:function(e,t,r){e.exports=r.p+"static/hero-99578b0237fdd2c7b8a8b764d6af3066.png"},X7BR:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var i={default:{heroName:"",heroCategory:"",heroYear:"",heroDeliverable:"",heroTitle:"Multidisciplinary Product Designer"},phisher:{heroName:"Phisher",heroCategory:"UX Design",heroYear:"2019",heroDeliverable:"Phishing Site",heroTitle:"Raising Awareness About Infosec Hands-On"},cluse:{heroName:"Cluse",heroCategory:"Software Design",heroYear:"2020",heroDeliverable:"Accessibility Tool",heroTitle:"Developing Inclusive Design Habits for the Average Sketch User"},ditto:{heroName:"Ditto",heroCategory:"Software Design",heroYear:"2019",heroDeliverable:"Type Converter",heroTitle:"Optimizing a Unique Typography Workflow for UI Designers at Yext"},fisqual:{heroName:"Fisqual",heroCategory:"Interaction Design",heroYear:"2019",heroDeliverable:"Fintech Hack",heroTitle:"Ensuring Financial Wellness for Those with Variable Incomes"},trunks:{heroName:"Trunks",heroCategory:"Visual Design",heroYear:"2018",heroDeliverable:"Ancestry Tracker",heroTitle:"Chopping Down the Family Tree Model of Ancestry Visualization"},semaphore:{heroName:"Semaphore",heroCategory:"Machine Learning",heroYear:"2019",heroDeliverable:"Gesture Game",heroTitle:"Gamifying Flag Semaphore with Pose Recognition Models"},avam:{heroName:"AVAM",heroCategory:"User Research",heroYear:"2018",heroDeliverable:"Information Architecture",heroTitle:"Untitled For Now"},bitshit:{heroName:"BitShit",heroCategory:"Publication Design",heroYear:"2018",heroDeliverable:"Bootleg Newspaper",heroTitle:"Capturing the Underground Cryptocurrency Scene on Newsprint"},spiral:{heroName:"VortexPaint",heroCategory:"Net Art",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Untitled For Now"},lissitzky:{heroName:"Lissitzky",heroCategory:"Net Art",heroYear:"2018",heroDeliverable:"Web App",heroTitle:"Throwing Together Constructivist Paintings with Physics Engines"},madlads:{heroName:"MadLads",heroCategory:"Machine Learning",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Reinventing Mad Libs with Machine Learning and Camera Lens"},tarpits:{heroName:"TarPits",heroCategory:"Experience Design",heroYear:"2019",heroDeliverable:"User Journey",heroTitle:"Crafting a Foam Pit Experience for the La Brea Tar Pits"},yext:{heroName:"Yext",heroCategory:"Visual Design",heroYear:"2019",heroDeliverable:"Information Architecture",heroTitle:"Boosting SEO for Fortune 500 Companies with Visual Design"},carpets:{heroName:"Carpets",heroCategory:"Machine Learning",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Generating Nightmarish Oriental Textiles with Pix2Pix"},decred:{heroName:"Decred",heroCategory:"Experience Design",heroYear:"2019",heroDeliverable:"Crypto Calculator",heroTitle:"Visualizing Ticket Staking History for the Decred Cryptocurrency"},arteca:{heroName:"ARTECA",heroCategory:"UI/UX Design",heroYear:"2016",heroDeliverable:"Publishing Platform",heroTitle:"Creating an Online Publishing Platform for MIT Press"},webx:{heroName:"Pixelation",heroCategory:"Web Development",heroYear:"2020",heroDeliverable:"Exhibition",heroTitle:"Hosting a Virtual Graduation Exhibit in Times of COVID-19"}}},XUob:function(e,t,r){e.exports=r.p+"static/hero-f340e4e7daf569b56d1ab45538686b61.png"},Xj7D:function(e,t,r){e.exports=r.p+"static/hero-c3d0eb53df635025ef2b0827ff51da76.gif"},ZSiC:function(e,t,r){},aN6S:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOHB4IiBoZWlnaHQ9IjE0cHgiIHZpZXdCb3g9IjAgMCA4IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MyAoOTI0NDUpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkNoZXZ5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIxNiAxMi4wMTQ1NzczIDguODY5MjU0OCAxOSA4LjAyOTc0ODYyIDE4LjE3Nzg0MjYgMTQuMzE1NjMyOSAxMi4wMTQ1NzczIDggNS44MjIxNTc0MyA4LjgzOTUwNjE3IDUiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTdHlsZXMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJFbGVtZW50cy9JY29ucy9DYXJvdXNlbFNtYWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOC4wMDAwMDAsIC01LjAwMDAwMCkiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9IkNoZXZ5IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},eaA5:function(e,t,r){e.exports=r.p+"static/hero-365662866966a63e30d96688624ca867.png"},fuVz:function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("HEwt");var i=r("q1tI"),n=r.n(i),o=(r("/eHF"),r("GGa8"),r("4QlT"),r("93Eu"),r("tHYZ")),a=r.n(o),s=r("aN6S"),c=r.n(s);function l(e){return Array.from(Array(e.length).keys()).map((function(t){return n.a.createElement("div",{className:"abstract__img--wrapper","data-width":e[t].length},(r=e[t],Array.from(Array(r.length).keys()).map((function(e){if(Array.isArray(r[e])){for(var t=[],i=0;i<r[e].length;i++)"webm"===r[e][i].extension?t.push(n.a.createElement("source",{src:r[e][i].file,type:"video/webm"})):"mp4"===r[e][i].extension&&t.push(n.a.createElement("source",{src:r[e][i].file,type:"video/mp4"}));return n.a.createElement("video",{className:"abstract__img",preload:"yes",autoPlay:"autoplay",loop:!0,muted:!0,playsInline:!0},t)}return n.a.createElement("img",{alt:"",className:"abstract__img",src:r[e]})}))));var r}))}t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"abstract"},n.a.createElement("section",{className:"abstract__gallery"},l(e.glams)),n.a.createElement("section",{className:"abstract__txt--wrapper"},n.a.createElement("aside",{className:"abstract__txt--left"},n.a.createElement("section",{className:"abstract__details"},n.a.createElement("aside",{className:"abstract__head"},n.a.createElement("h4",null,"Role"),n.a.createElement("h4",null,"Tools"),n.a.createElement("h4",null,"Time"),e.abstractTeam?n.a.createElement("h4",null,"Team"):""),n.a.createElement("aside",{className:"abstract__body"},n.a.createElement("p",null,e.abstractRole),n.a.createElement("p",null,e.abstractTools),n.a.createElement("p",null,e.abstractTime),n.a.createElement("p",null,e.abstractTeam))),n.a.createElement("section",{className:"btn__wrapper"},e.liveLink?n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.liveLink},n.a.createElement("div",{className:"btn__live--wrapper"},n.a.createElement("button",{className:"btn__live"},"View Live"),n.a.createElement("span",{className:"btn__live--iconbg"},n.a.createElement("img",{className:"btn__live--icon",alt:"",src:c.a})))):"",e.gitLink?n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.gitLink},n.a.createElement("span",{className:"btn__git--iconbg"},n.a.createElement("img",{alt:"Devpost Logo",className:"btn__git--icon",src:a.a}))):"")),n.a.createElement("section",{className:"abstract__txt"},n.a.createElement("h4",{className:"abstract__head"},"Abstract"),n.a.createElement("p",{className:"abstract__body--paragraph"},e.abstractBody)))))}},gVvB:function(e,t,r){},jgBf:function(e,t,r){e.exports=r.p+"static/hero-4269f8a4990a650c527c996d4e0f8811.png"},lfaM:function(e,t,r){e.exports=r.p+"static/hero-907eedc9b90a1578021afd9efe13b904.png"},mlXe:function(e,t,r){"use strict";var i=r("q1tI"),n=r.n(i),o=(r("gVvB"),r("4QlT"),r("93Eu"),r("/eHF")),a=r.n(o);t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(a.a,{delay:100,duration:1e3},n.a.createElement("section",{className:"hero"},n.a.createElement("figure",{className:"hero__img"},n.a.createElement("img",{alt:"",className:"inner__img--limiter",src:e.img})))))}},"n4/w":function(e,t,r){},tHYZ:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMjQgMTAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTEyLDBDMjI5LjEsMCwwLDIyOS4xLDAsNTEyYzAsMjI2LjYsMTQ2LjYsNDE3LjksMzUwLjEsNDg1LjhjMjUuNiw0LjUsMzUuMi0xMC45LDM1LjItMjQuMwoJYzAtMTIuMi0wLjYtNTIuNS0wLjYtOTUuNGMtMTI4LjYsMjMuNy0xNjEuOS0zMS40LTE3Mi4yLTYwLjJjLTUuOC0xNC43LTMwLjctNjAuMi01Mi41LTcyLjNjLTE3LjktOS42LTQzLjUtMzMuMy0wLjYtMzMuOQoJYzQwLjMtMC42LDY5LjEsMzcuMSw3OC43LDUyLjVjNDYuMSw3Ny40LDExOS43LDU1LjcsMTQ5LjEsNDIuMmM0LjUtMzMuMywxNy45LTU1LjcsMzIuNi02OC41Yy0xMTMuOS0xMi44LTIzMy01Ny0yMzMtMjUyLjgKCWMwLTU1LjcsMTkuOC0xMDEuOCw1Mi41LTEzNy42Yy01LjEtMTIuOC0yMy02NS4zLDUuMS0xMzUuN2MwLDAsNDIuOS0xMy40LDE0MC44LDUyLjVjNDEtMTEuNSw4NC41LTE3LjMsMTI4LTE3LjMKCWM0My41LDAsODcsNS44LDEyOCwxNy4zYzk3LjktNjYuNiwxNDAuOC01Mi41LDE0MC44LTUyLjVjMjguMiw3MC40LDEwLjIsMTIyLjksNS4xLDEzNS43YzMyLjYsMzUuOCw1Mi41LDgxLjMsNTIuNSwxMzcuNgoJYzAsMTk2LjUtMTE5LjcsMjQwLTIzMy42LDI1Mi44YzE4LjYsMTYsMzQuNiw0Ni43LDM0LjYsOTQuN2MwLDY4LjUtMC42LDEyMy41LTAuNiwxNDAuOGMwLDEzLjQsOS42LDI5LjQsMzUuMiwyNC4zCglDODc3LjQsOTI5LjksMTAyNCw3MzcuOSwxMDI0LDUxMkMxMDI0LDIyOS4xLDc5NC45LDAsNTEyLDB6Ii8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=1d478dff089a7389360caef6d3037f1e730a79dd-95776035e8e83158c1e4.js.map