!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=11)}([function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},,,,,,,,,,,function(e,t,i){i(12),i(13),i(14),i(15),e.exports=i(17)},function(e,t,i){"use strict";var n=window.history.pushState,a=window.history.replaceState;window.history.pushState=function(e,t,i){n.apply(this,arguments),webkit.messageHandlers.historyStateHelper.postMessage({pushState:!0,state:e,title:t,url:i})},window.history.replaceState=function(e,t,i){a.apply(this,arguments),webkit.messageHandlers.historyStateHelper.postMessage({replaceState:!0,state:e,title:t,url:i})}},function(e,t,i){"use strict";Object.defineProperty(window.__firefox__,"NightMode",{enumerable:!1,configurable:!1,writable:!1,value:{enabled:!1}});var n,a="brightness(80%) invert(100%) hue-rotate(180deg)",r="html {\n  -webkit-filter: hue-rotate(180deg) invert(100%) !important;\n}\niframe,img,video {\n  -webkit-filter: "+a+" !important;\n}";function o(e){e.querySelectorAll('[style*="background"]').forEach(function(e){(e.style.backgroundImage||"").startsWith("url")&&function(e){l.push(e),e.__firefox__NightMode_originalFilter=e.style.webkitFilter,e.style.webkitFilter=a}(e)})}function s(e){e.style.webkitFilter=e.__firefox__NightMode_originalFilter,delete e.__firefox__NightMode_originalFilter}var l=null,c=new MutationObserver(function(e){e.forEach(function(e){e.addedNodes.forEach(function(e){e.nodeType===Node.ELEMENT_NODE&&o(e)})})});Object.defineProperty(window.__firefox__.NightMode,"setEnabled",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(e!==window.__firefox__.NightMode.enabled){window.__firefox__.NightMode.enabled=e;var t=n||((n=document.createElement("style")).type="text/css",n.appendChild(document.createTextNode(r)),n);if(e)return l=[],document.documentElement.appendChild(t),o(document),void c.observe(document.documentElement,{childList:!0,subtree:!0});c.disconnect(),l.forEach(s);var i=t.parentNode;i&&i.removeChild(t),l=null,"rgba(0, 0, 0, 0)"===getComputedStyle(document.documentElement)["background-color"]&&(document.documentElement.style.backgroundColor="#fff")}}}),window.addEventListener("DOMContentLoaded",function(){window.__firefox__.NightMode.setEnabled(window.__firefox__.NightMode.enabled)})},function(e,t,i){"use strict";Object.defineProperty(window.__firefox__,"NoImageMode",{enumerable:!1,configurable:!1,writable:!1,value:{enabled:!1}});var n="__firefox__NoImageMode";Object.defineProperty(window.__firefox__.NoImageMode,"setEnabled",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(e!==window.__firefox__.NoImageMode.enabled)if(window.__firefox__.NoImageMode.enabled=e,e)!function(){var e="*{background-image:none !important;}img,iframe{visibility:hidden !important;}",t=document.getElementById(n);if(t)t.innerHTML=e;else{var i=document.createElement("style");i.type="text/css",i.id=n,i.appendChild(document.createTextNode(e)),document.documentElement.appendChild(i)}}();else{var t=document.getElementById(n);t&&t.remove(),[].slice.apply(document.getElementsByTagName("img")).forEach(function(e){var t=e.src;e.src="",e.src=t}),[].slice.apply(document.querySelectorAll('[style*="background"]')).forEach(function(e){var t=e.style.backgroundImage;e.style.backgroundImage="none",e.style.backgroundImage=t}),[].slice.apply(document.styleSheets).forEach(function(e){[].slice.apply(e.rules||[]).forEach(function(e){var t=e.style;if(t){var i=t.backgroundImage;t.backgroundImage=i}})})}}}),window.addEventListener("DOMContentLoaded",function(){window.__firefox__.NoImageMode.setEnabled(window.__firefox__.NoImageMode.enabled)})},function(e,t,i){"use strict";var n=!1,a=null,r=null,o=/^http:\/\/localhost:\d+\/reader-mode\/page/,s=".content p > img:only-child, .content p > a:only-child > img:only-child, .content .wp-caption img, .content figure img";function l(e){n&&console.log(e)}function c(e){r&&r.theme&&document.body.classList.remove(r.theme),e&&e.theme&&document.body.classList.add(e.theme),r&&r.fontSize&&document.body.classList.remove("font-size"+r.fontSize),e&&e.fontSize&&document.body.classList.add("font-size"+e.fontSize),r&&r.fontType&&document.body.classList.remove(r.fontType),e&&e.fontType&&document.body.classList.add(e.fontType),r=e}Object.defineProperty(window.__firefox__,"reader",{enumerable:!1,configurable:!1,writable:!1,value:Object.freeze({checkReadability:function(){setTimeout(function(){if(document.location.href.match(o))return l({Type:"ReaderModeStateChange",Value:"Active"}),void webkit.messageHandlers.readerModeMessageHandler.postMessage({Type:"ReaderModeStateChange",Value:"Active"});if(("http:"===document.location.protocol||"https:"===document.location.protocol)&&"/"!==document.location.pathname){if(a&&a.content)return l({Type:"ReaderModeStateChange",Value:"Available"}),webkit.messageHandlers.readerModeMessageHandler.postMessage({Type:"ReaderModeStateChange",Value:"Available"}),void webkit.messageHandlers.readerModeMessageHandler.postMessage({Type:"ReaderContentParsed",Value:a});var e=i(16),t={spec:document.location.href,host:document.location.host,prePath:document.location.protocol+"//"+document.location.host,scheme:document.location.protocol.substr(0,document.location.protocol.indexOf(":")),pathBase:document.location.protocol+"//"+document.location.host+location.pathname.substr(0,location.pathname.lastIndexOf("/")+1)},r=(new XMLSerializer).serializeToString(document);if(r.indexOf("<frameset ")>-1)return l({Type:"ReaderModeStateChange",Value:"Unavailable"}),void webkit.messageHandlers.readerModeMessageHandler.postMessage({Type:"ReaderModeStateChange",Value:"Unavailable"});var s=new e(t,(new DOMParser).parseFromString(r,"text/html"),{debug:n});return(a=s.parse()).title=a.title.replace(/\&/g,"&amp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#039;"),l({Type:"ReaderModeStateChange",Value:null!==a?"Available":"Unavailable"}),webkit.messageHandlers.readerModeMessageHandler.postMessage({Type:"ReaderModeStateChange",Value:null!==a?"Available":"Unavailable"}),void webkit.messageHandlers.readerModeMessageHandler.postMessage({Type:"ReaderContentParsed",Value:a})}l({Type:"ReaderModeStateChange",Value:"Unavailable"}),webkit.messageHandlers.readerModeMessageHandler.postMessage({Type:"ReaderModeStateChange",Value:"Unavailable"})},100)},readerize:function(){return a},setStyle:c})}),window.addEventListener("load",function(e){document.location.href.match(o)&&(c(JSON.parse(document.body.getAttribute("data-readerStyle"))),function(){var e=document.getElementById("reader-message");e&&(e.style.display="none");var t=document.getElementById("reader-header");t&&(t.style.display="block");var i=document.getElementById("reader-content");i&&(i.style.display="block")}(),function(){var e=document.getElementById("reader-content");if(e)for(var t=window.innerWidth,i=e.offsetWidth,n=t+"px !important",a=function(e){e._originalWidth||(e._originalWidth=e.offsetWidth);var a=e._originalWidth;a<i&&a>.55*t&&(a=t);var r=Math.max((i-t)/2,(i-a)/2)+"px !important",o="max-width: "+n+";width: "+a+"px !important;margin-left: "+r+";margin-right: "+r+";";e.style.cssText=o},r=document.querySelectorAll(s),o=r.length;--o>=0;){var l=r[o];l.width>0?a(l):l.onload=function(){a(l)}}}())}),window.addEventListener("pageshow",function(e){document.location.href.match(o)&&webkit.messageHandlers.readerModeMessageHandler.postMessage({Type:"ReaderPageEvent",Value:"PageShow"})})},function(e,t,i){"use strict";(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e,t){if(t&&t.documentElement)e=t,t=arguments[2];else if(!e||!e.documentElement)throw new Error("First argument to Readability constructor should be a document object.");var i;t=t||{},this._doc=e,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!t.debug,this._maxElemsToParse=t.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=t.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=t.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(t.classesToPreserve||[]),this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug?(i=function(e){var t=e.nodeName+" ";if(e.nodeType==e.TEXT_NODE)return t+'("'+e.textContent+'")';var i=e.className&&"."+e.className.replace(/ /g,"."),n="";return e.id?n="(#"+e.id+i+")":i&&(n="("+i+")"),t+n},this.log=function(){if("undefined"!=typeof dump){var e=Array.prototype.map.call(arguments,function(e){return e&&e.nodeName?i(e):e}).join(" ");dump("Reader: (Readability) "+e+"\n")}else if("undefined"!=typeof console){var t=["Reader: (Readability) "].concat(arguments);console.log.apply(console,t)}}):this.log=function(){}}i.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|foot|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,whitespace:/^\s*$/,hasContent:/\S$/},DIV_TO_P_ELEMS:["A","BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL","SELECT"],ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],_postProcessContent:function(e){this._fixRelativeUris(e),this._cleanClasses(e)},_removeNodes:function(e,t){for(var i=e.length-1;i>=0;i--){var n=e[i],a=n.parentNode;a&&(t&&!t.call(this,n,i,e)||a.removeChild(n))}},_replaceNodeTags:function(e,t){for(var i=e.length-1;i>=0;i--){var n=e[i];this._setNodeTag(n,t)}},_forEachNode:function(e,t){Array.prototype.forEach.call(e,t,this)},_someNode:function(e,t){return Array.prototype.some.call(e,t,this)},_everyNode:function(e,t){return Array.prototype.every.call(e,t,this)},_concatNodeLists:function(){var e=Array.prototype.slice,t=e.call(arguments).map(function(t){return e.call(t)});return Array.prototype.concat.apply([],t)},_getAllNodesWithTag:function(e,t){return e.querySelectorAll?e.querySelectorAll(t.join(",")):[].concat.apply([],t.map(function(t){var i=e.getElementsByTagName(t);return Array.isArray(i)?i:Array.from(i)}))},_cleanClasses:function(e){var t=this._classesToPreserve,i=(e.getAttribute("class")||"").split(/\s+/).filter(function(e){return-1!=t.indexOf(e)}).join(" ");for(i?e.setAttribute("class",i):e.removeAttribute("class"),e=e.firstElementChild;e;e=e.nextElementSibling)this._cleanClasses(e)},_fixRelativeUris:function(e){var t=this._doc.baseURI,i=this._doc.documentURI;function n(e){if(t==i&&"#"==e.charAt(0))return e;try{return new URL(e,t).href}catch(e){}return e}var a=this._getAllNodesWithTag(e,["a"]);this._forEachNode(a,function(e){var t=e.getAttribute("href");if(t)if(0===t.indexOf("javascript:")){var i=this._doc.createTextNode(e.textContent);e.parentNode.replaceChild(i,e)}else e.setAttribute("href",n(t))});var r=this._getAllNodesWithTag(e,["img"]);this._forEachNode(r,function(e){var t=e.getAttribute("src");t&&e.setAttribute("src",n(t))})},_getArticleTitle:function(){var e=this._doc,t="",i="";try{"string"!=typeof(t=i=e.title.trim())&&(t=i=this._getInnerText(e.getElementsByTagName("title")[0]))}catch(e){}var n=!1;function a(e){return e.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(t))n=/ [\\\/>»] /.test(t),a(t=i.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"))<3&&(t=i.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(-1!==t.indexOf(": ")){var r=this._concatNodeLists(e.getElementsByTagName("h1"),e.getElementsByTagName("h2")),o=t.trim();this._someNode(r,function(e){return e.textContent.trim()===o})||(a(t=i.substring(i.lastIndexOf(":")+1))<3?t=i.substring(i.indexOf(":")+1):a(i.substr(0,i.indexOf(":")))>5&&(t=i))}else if(t.length>150||t.length<15){var s=e.getElementsByTagName("h1");1===s.length&&(t=this._getInnerText(s[0]))}var l=a(t=t.trim().replace(this.REGEXPS.normalize," "));return l<=4&&(!n||l!=a(i.replace(/[\|\-\\\/>»]+/g,""))-1)&&(t=i),t},_prepDocument:function(){var e=this._doc;this._removeNodes(e.getElementsByTagName("style")),e.body&&this._replaceBrs(e.body),this._replaceNodeTags(e.getElementsByTagName("font"),"SPAN")},_nextElement:function(e){for(var t=e;t&&t.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(t.textContent);)t=t.nextSibling;return t},_replaceBrs:function(e){this._forEachNode(this._getAllNodesWithTag(e,["br"]),function(e){for(var t=e.nextSibling,i=!1;(t=this._nextElement(t))&&"BR"==t.tagName;){i=!0;var n=t.nextSibling;t.parentNode.removeChild(t),t=n}if(i){var a=this._doc.createElement("p");for(e.parentNode.replaceChild(a,e),t=a.nextSibling;t;){if("BR"==t.tagName){var r=this._nextElement(t.nextSibling);if(r&&"BR"==r.tagName)break}if(!this._isPhrasingContent(t))break;var o=t.nextSibling;a.appendChild(t),t=o}for(;a.lastChild&&this._isWhitespace(a.lastChild);)a.removeChild(a.lastChild);"P"===a.parentNode.tagName&&this._setNodeTag(a.parentNode,"DIV")}})},_setNodeTag:function(e,t){if(this.log("_setNodeTag",e,t),e.__JSDOMParser__)return e.localName=t.toLowerCase(),e.tagName=t.toUpperCase(),e;for(var i=e.ownerDocument.createElement(t);e.firstChild;)i.appendChild(e.firstChild);e.parentNode.replaceChild(i,e),e.readability&&(i.readability=e.readability);for(var n=0;n<e.attributes.length;n++)try{i.setAttribute(e.attributes[n].name,e.attributes[n].value)}catch(e){}return i},_prepArticle:function(e){this._cleanStyles(e),this._markDataTables(e),this._cleanConditionally(e,"form"),this._cleanConditionally(e,"fieldset"),this._clean(e,"object"),this._clean(e,"embed"),this._clean(e,"h1"),this._clean(e,"footer"),this._clean(e,"link"),this._clean(e,"aside"),this._forEachNode(e.children,function(e){this._cleanMatchedNodes(e,/share/)});var t=e.getElementsByTagName("h2");if(1===t.length){var i=(t[0].textContent.length-this._articleTitle.length)/this._articleTitle.length;Math.abs(i)<.5&&(i>0?t[0].textContent.includes(this._articleTitle):this._articleTitle.includes(t[0].textContent))&&this._clean(e,"h2")}this._clean(e,"iframe"),this._clean(e,"input"),this._clean(e,"textarea"),this._clean(e,"select"),this._clean(e,"button"),this._cleanHeaders(e),this._cleanConditionally(e,"table"),this._cleanConditionally(e,"ul"),this._cleanConditionally(e,"div"),this._removeNodes(e.getElementsByTagName("p"),function(e){return 0===e.getElementsByTagName("img").length+e.getElementsByTagName("embed").length+e.getElementsByTagName("object").length+e.getElementsByTagName("iframe").length&&!this._getInnerText(e,!1)}),this._forEachNode(this._getAllNodesWithTag(e,["br"]),function(e){var t=this._nextElement(e.nextSibling);t&&"P"==t.tagName&&e.parentNode.removeChild(e)}),this._forEachNode(this._getAllNodesWithTag(e,["table"]),function(e){var t=this._hasSingleTagInsideElement(e,"TBODY")?e.firstElementChild:e;if(this._hasSingleTagInsideElement(t,"TR")){var i=t.firstElementChild;if(this._hasSingleTagInsideElement(i,"TD")){var n=i.firstElementChild;n=this._setNodeTag(n,this._everyNode(n.childNodes,this._isPhrasingContent)?"P":"DIV"),e.parentNode.replaceChild(n,e)}}})},_initializeNode:function(e){switch(e.readability={contentScore:0},e.tagName){case"DIV":e.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":e.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":e.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":e.readability.contentScore-=5}e.readability.contentScore+=this._getClassWeight(e)},_removeAndGetNext:function(e){var t=this._getNextNode(e,!0);return e.parentNode.removeChild(e),t},_getNextNode:function(e,t){if(!t&&e.firstElementChild)return e.firstElementChild;if(e.nextElementSibling)return e.nextElementSibling;do{e=e.parentNode}while(e&&!e.nextElementSibling);return e&&e.nextElementSibling},_checkByline:function(e,t){if(this._articleByline)return!1;if(void 0!==e.getAttribute)var i=e.getAttribute("rel");return!("author"!==i&&!this.REGEXPS.byline.test(t)||!this._isValidByline(e.textContent)||(this._articleByline=e.textContent.trim(),0))},_getNodeAncestors:function(e,t){t=t||0;for(var i=0,n=[];e.parentNode&&(n.push(e.parentNode),!t||++i!==t);)e=e.parentNode;return n},_grabArticle:function(e){this.log("**** grabArticle ****");var t=this._doc,i=null!==e;if(!(e=e||this._doc.body))return this.log("No body found in document. Abort."),null;for(var n=e.innerHTML;;){for(var a=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),r=[],o=this._doc.documentElement;o;){var s=o.className+" "+o.id;if(this._isProbablyVisible(o))if(this._checkByline(o,s))o=this._removeAndGetNext(o);else if(a&&this.REGEXPS.unlikelyCandidates.test(s)&&!this.REGEXPS.okMaybeItsACandidate.test(s)&&"BODY"!==o.tagName&&"A"!==o.tagName)this.log("Removing unlikely candidate - "+s),o=this._removeAndGetNext(o);else if("DIV"!==o.tagName&&"SECTION"!==o.tagName&&"HEADER"!==o.tagName&&"H1"!==o.tagName&&"H2"!==o.tagName&&"H3"!==o.tagName&&"H4"!==o.tagName&&"H5"!==o.tagName&&"H6"!==o.tagName||!this._isElementWithoutContent(o)){if(-1!==this.DEFAULT_TAGS_TO_SCORE.indexOf(o.tagName)&&r.push(o),"DIV"===o.tagName){for(var l=null,c=o.firstChild;c;){var d=c.nextSibling;if(this._isPhrasingContent(c))null!==l?l.appendChild(c):this._isWhitespace(c)||(l=t.createElement("p"),o.replaceChild(l,c),l.appendChild(c));else if(null!==l){for(;l.lastChild&&this._isWhitespace(l.lastChild);)l.removeChild(l.lastChild);l=null}c=d}if(this._hasSingleTagInsideElement(o,"P")&&this._getLinkDensity(o)<.25){var h=o.children[0];o.parentNode.replaceChild(h,o),o=h,r.push(o)}else this._hasChildBlockElement(o)||(o=this._setNodeTag(o,"P"),r.push(o))}o=this._getNextNode(o)}else o=this._removeAndGetNext(o);else this.log("Removing hidden node - "+s),o=this._removeAndGetNext(o)}var u=[];this._forEachNode(r,function(e){if(e.parentNode&&void 0!==e.parentNode.tagName){var t=this._getInnerText(e);if(!(t.length<25)){var i=this._getNodeAncestors(e,3);if(0!==i.length){var n=0;n+=1,n+=t.split(",").length,n+=Math.min(Math.floor(t.length/100),3),this._forEachNode(i,function(e,t){if(e.tagName&&e.parentNode&&void 0!==e.parentNode.tagName){if(void 0===e.readability&&(this._initializeNode(e),u.push(e)),0===t)var i=1;else i=1===t?2:3*t;e.readability.contentScore+=n/i}})}}}});for(var g=[],f=0,m=u.length;f<m;f+=1){var _=u[f],p=_.readability.contentScore*(1-this._getLinkDensity(_));_.readability.contentScore=p,this.log("Candidate:",_,"with score "+p);for(var b=0;b<this._nbTopCandidates;b++){var y=g[b];if(!y||p>y.readability.contentScore){g.splice(b,0,_),g.length>this._nbTopCandidates&&g.pop();break}}}var E,N=g[0]||null,v=!1;if(null===N||"BODY"===N.tagName){N=t.createElement("DIV"),v=!0;for(var T=e.childNodes;T.length;)this.log("Moving child out:",T[0]),N.appendChild(T[0]);e.appendChild(N),this._initializeNode(N)}else if(N){for(var S=[],A=1;A<g.length;A++)g[A].readability.contentScore/N.readability.contentScore>=.75&&S.push(this._getNodeAncestors(g[A]));if(S.length>=3)for(E=N.parentNode;"BODY"!==E.tagName;){for(var C=0,w=0;w<S.length&&C<3;w++)C+=Number(S[w].includes(E));if(C>=3){N=E;break}E=E.parentNode}N.readability||this._initializeNode(N),E=N.parentNode;for(var L=N.readability.contentScore,x=L/3;"BODY"!==E.tagName;)if(E.readability){var I=E.readability.contentScore;if(I<x)break;if(I>L){N=E;break}L=E.readability.contentScore,E=E.parentNode}else E=E.parentNode;for(E=N.parentNode;"BODY"!=E.tagName&&1==E.children.length;)E=(N=E).parentNode;N.readability||this._initializeNode(N)}var M=t.createElement("DIV");i&&(M.id="readability-content");for(var R=Math.max(10,.2*N.readability.contentScore),O=(E=N.parentNode).children,P=0,D=O.length;P<D;P++){var B=O[P],k=!1;if(this.log("Looking at sibling node:",B,B.readability?"with score "+B.readability.contentScore:""),this.log("Sibling has score",B.readability?B.readability.contentScore:"Unknown"),B===N)k=!0;else{var H=0;if(B.className===N.className&&""!==N.className&&(H+=.2*N.readability.contentScore),B.readability&&B.readability.contentScore+H>=R)k=!0;else if("P"===B.nodeName){var G=this._getLinkDensity(B),U=this._getInnerText(B),F=U.length;F>80&&G<.25?k=!0:F<80&&F>0&&0===G&&-1!==U.search(/\.( |$)/)&&(k=!0)}}k&&(this.log("Appending node:",B),-1===this.ALTER_TO_DIV_EXCEPTIONS.indexOf(B.nodeName)&&(this.log("Altering sibling:",B,"to div."),B=this._setNodeTag(B,"DIV")),M.appendChild(B),P-=1,D-=1)}if(this._debug&&this.log("Article content pre-prep: "+M.innerHTML),this._prepArticle(M),this._debug&&this.log("Article content post-prep: "+M.innerHTML),v)N.id="readability-page-1",N.className="page";else{var V=t.createElement("DIV");V.id="readability-page-1",V.className="page";for(var W=M.childNodes;W.length;)V.appendChild(W[0]);M.appendChild(V)}this._debug&&this.log("Article content after paging: "+M.innerHTML);var X=!0,j=this._getInnerText(M,!0).length;if(j<this._charThreshold)if(X=!1,e.innerHTML=n,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:M,textLength:j});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:M,textLength:j});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:M,textLength:j});else{if(this._attempts.push({articleContent:M,textLength:j}),this._attempts.sort(function(e,t){return t.textLength-e.textLength}),!this._attempts[0].textLength)return null;M=this._attempts[0].articleContent,X=!0}if(X){var z=[E,N].concat(this._getNodeAncestors(E));return this._someNode(z,function(e){if(!e.tagName)return!1;var t=e.getAttribute("dir");return!!t&&(this._articleDir=t,!0)}),M}}},_isValidByline:function(e){return("string"==typeof e||e instanceof String)&&(e=e.trim()).length>0&&e.length<100},_getArticleMetadata:function(){var e={},t={},i=this._doc.getElementsByTagName("meta"),n=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,a=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(i,function(e){var i=e.getAttribute("name"),r=e.getAttribute("property"),o=e.getAttribute("content");if(o){var s=null,l=null;if(r&&(s=r.match(n)))for(var c=s.length-1;c>=0;c--)l=s[c].toLowerCase().replace(/\s/g,""),t[l]=o.trim();!s&&i&&a.test(i)&&(l=i,o&&(l=l.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),t[l]=o.trim()))}}),e.title=t["dc:title"]||t["dcterm:title"]||t["og:title"]||t["weibo:article:title"]||t["weibo:webpage:title"]||t.title||t["twitter:title"],e.title||(e.title=this._getArticleTitle()),e.byline=t["dc:creator"]||t["dcterm:creator"]||t.author,e.excerpt=t["dc:description"]||t["dcterm:description"]||t["og:description"]||t["weibo:article:description"]||t["weibo:webpage:description"]||t.description||t["twitter:description"],e.siteName=t["og:site_name"],e},_removeScripts:function(e){this._removeNodes(e.getElementsByTagName("script"),function(e){return e.nodeValue="",e.removeAttribute("src"),!0}),this._removeNodes(e.getElementsByTagName("noscript"))},_hasSingleTagInsideElement:function(e,t){return 1==e.children.length&&e.children[0].tagName===t&&!this._someNode(e.childNodes,function(e){return e.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(e.textContent)})},_isElementWithoutContent:function(e){return e.nodeType===this.ELEMENT_NODE&&0==e.textContent.trim().length&&(0==e.children.length||e.children.length==e.getElementsByTagName("br").length+e.getElementsByTagName("hr").length)},_hasChildBlockElement:function(e){return this._someNode(e.childNodes,function(e){return-1!==this.DIV_TO_P_ELEMS.indexOf(e.tagName)||this._hasChildBlockElement(e)})},_isPhrasingContent:function(e){return e.nodeType===this.TEXT_NODE||-1!==this.PHRASING_ELEMS.indexOf(e.tagName)||("A"===e.tagName||"DEL"===e.tagName||"INS"===e.tagName)&&this._everyNode(e.childNodes,this._isPhrasingContent)},_isWhitespace:function(e){return e.nodeType===this.TEXT_NODE&&0===e.textContent.trim().length||e.nodeType===this.ELEMENT_NODE&&"BR"===e.tagName},_getInnerText:function(e,t){t=void 0===t||t;var i=e.textContent.trim();return t?i.replace(this.REGEXPS.normalize," "):i},_getCharCount:function(e,t){return t=t||",",this._getInnerText(e).split(t).length-1},_cleanStyles:function(e){if(e&&"svg"!==e.tagName.toLowerCase()){for(var t=0;t<this.PRESENTATIONAL_ATTRIBUTES.length;t++)e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[t]);-1!==this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName)&&(e.removeAttribute("width"),e.removeAttribute("height"));for(var i=e.firstElementChild;null!==i;)this._cleanStyles(i),i=i.nextElementSibling}},_getLinkDensity:function(e){var t=this._getInnerText(e).length;if(0===t)return 0;var i=0;return this._forEachNode(e.getElementsByTagName("a"),function(e){i+=this._getInnerText(e).length}),i/t},_getClassWeight:function(e){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var t=0;return"string"==typeof e.className&&""!==e.className&&(this.REGEXPS.negative.test(e.className)&&(t-=25),this.REGEXPS.positive.test(e.className)&&(t+=25)),"string"==typeof e.id&&""!==e.id&&(this.REGEXPS.negative.test(e.id)&&(t-=25),this.REGEXPS.positive.test(e.id)&&(t+=25)),t},_clean:function(e,t){var i=-1!==["object","embed","iframe"].indexOf(t);this._removeNodes(e.getElementsByTagName(t),function(e){if(i){var t=[].map.call(e.attributes,function(e){return e.value}).join("|");if(this.REGEXPS.videos.test(t))return!1;if(this.REGEXPS.videos.test(e.innerHTML))return!1}return!0})},_hasAncestorTag:function(e,t,i,n){i=i||3,t=t.toUpperCase();for(var a=0;e.parentNode;){if(i>0&&a>i)return!1;if(e.parentNode.tagName===t&&(!n||n(e.parentNode)))return!0;e=e.parentNode,a++}return!1},_getRowAndColumnCount:function(e){for(var t=0,i=0,n=e.getElementsByTagName("tr"),a=0;a<n.length;a++){var r=n[a].getAttribute("rowspan")||0;r&&(r=parseInt(r,10)),t+=r||1;for(var o=0,s=n[a].getElementsByTagName("td"),l=0;l<s.length;l++){var c=s[l].getAttribute("colspan")||0;c&&(c=parseInt(c,10)),o+=c||1}i=Math.max(i,o)}return{rows:t,columns:i}},_markDataTables:function(e){for(var t=e.getElementsByTagName("table"),i=0;i<t.length;i++){var n=t[i];if("presentation"!=n.getAttribute("role"))if("0"!=n.getAttribute("datatable"))if(n.getAttribute("summary"))n._readabilityDataTable=!0;else{var a=n.getElementsByTagName("caption")[0];if(a&&a.childNodes.length>0)n._readabilityDataTable=!0;else if(["col","colgroup","tfoot","thead","th"].some(function(e){return!!n.getElementsByTagName(e)[0]}))this.log("Data table because found data-y descendant"),n._readabilityDataTable=!0;else if(n.getElementsByTagName("table")[0])n._readabilityDataTable=!1;else{var r=this._getRowAndColumnCount(n);r.rows>=10||r.columns>4?n._readabilityDataTable=!0:n._readabilityDataTable=r.rows*r.columns>10}}else n._readabilityDataTable=!1;else n._readabilityDataTable=!1}},_cleanConditionally:function(e,t){if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)){var i="ul"===t||"ol"===t;this._removeNodes(e.getElementsByTagName(t),function(e){if(this._hasAncestorTag(e,"table",-1,function(e){return e._readabilityDataTable}))return!1;var t=this._getClassWeight(e);if(this.log("Cleaning Conditionally",e),t+0<0)return!0;if(this._getCharCount(e,",")<10){for(var n=e.getElementsByTagName("p").length,a=e.getElementsByTagName("img").length,r=e.getElementsByTagName("li").length-100,o=e.getElementsByTagName("input").length,s=0,l=e.getElementsByTagName("embed"),c=0,d=l.length;c<d;c+=1)this.REGEXPS.videos.test(l[c].src)||(s+=1);var h=this._getLinkDensity(e),u=this._getInnerText(e).length;return a>1&&n/a<.5&&!this._hasAncestorTag(e,"figure")||!i&&r>n||o>Math.floor(n/3)||!i&&u<25&&(0===a||a>2)&&!this._hasAncestorTag(e,"figure")||!i&&t<25&&h>.2||t>=25&&h>.5||1===s&&u<75||s>1}return!1})}},_cleanMatchedNodes:function(e,t){for(var i=this._getNextNode(e,!0),n=this._getNextNode(e);n&&n!=i;)n=t.test(n.className+" "+n.id)?this._removeAndGetNext(n):this._getNextNode(n)},_cleanHeaders:function(e){for(var t=1;t<3;t+=1)this._removeNodes(e.getElementsByTagName("h"+t),function(e){return this._getClassWeight(e)<0})},_flagIsActive:function(e){return(this._flags&e)>0},_removeFlag:function(e){this._flags=this._flags&~e},_isProbablyVisible:function(e){return!(e.style&&"none"==e.style.display||e.hasAttribute("hidden"))},parse:function(){if(this._maxElemsToParse>0){var e=this._doc.getElementsByTagName("*").length;if(e>this._maxElemsToParse)throw new Error("Aborting parsing document; "+e+" elements found")}this._removeScripts(this._doc),this._prepDocument();var t=this._getArticleMetadata();this._articleTitle=t.title;var i=this._grabArticle();if(!i)return null;if(this.log("Grabbed: "+i.innerHTML),this._postProcessContent(i),!t.excerpt){var n=i.getElementsByTagName("p");n.length>0&&(t.excerpt=n[0].textContent.trim())}var a=i.textContent;return{title:this._articleTitle,byline:t.byline||this._articleByline,dir:this._articleDir,content:i.innerHTML,textContent:a,length:a.length,excerpt:t.excerpt,siteName:t.siteName||this._articleSiteName}}},"object"===t(e)&&(e.exports=i)}).call(this,i(0)(e))},function(e,t,i){"use strict";i(18)},function(e,t,i){"use strict";webkit.messageHandlers.trackingProtectionStats&&function(){function e(e){e&&webkit.messageHandlers.trackingProtectionStats.postMessage({url:e})}function t(){[].slice.apply(document.scripts).forEach(function(t){e(t.src)}),[].slice.apply(document.images).forEach(function(t){t.src&&t.complete&&0===t.naturalWidth&&e(t.src)})}Object.defineProperty(window.__firefox__,"TrackingProtectionStats",{enumerable:!1,configurable:!1,writable:!1,value:{enabled:!1}}),Object.defineProperty(window.__firefox__.TrackingProtectionStats,"setEnabled",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){t===SECURITY_TOKEN&&e!==window.__firefox__.TrackingProtectionStats.enabled&&(window.__firefox__.TrackingProtectionStats.enabled=e,s(e))}});var i=null,n=null,a=null,r=null,o=null;function s(s){if(!s)return window.removeEventListener("load",t,!1),void(i&&(XMLHttpRequest.prototype.open=i,XMLHttpRequest.prototype.send=n,window.fetch=a,Image.prototype.src=r,o.disconnect(),i=n=r=o=null));if(!i){window.addEventListener("load",t,!1),i||(i=XMLHttpRequest.prototype.open,n=XMLHttpRequest.prototype.send);var l=new WeakMap,c=new WeakMap;XMLHttpRequest.prototype.open=function(e,t){return l.set(this,t),i.apply(this,arguments)},XMLHttpRequest.prototype.send=function(t){if(!c.get(this)){var i=function(){e(l.get(this))};c.set(this,i),this.addEventListener("error",i)}return n.apply(this,arguments)},a||(a=window.fetch),window.fetch=function(t,i){var n=a.apply(window,arguments);return n.catch(function(){"string"==typeof t?e(t):t instanceof Request&&e(t.url)}),n},r||(r=Object.getOwnPropertyDescriptor(Image.prototype,"src")),delete Image.prototype.src,Object.defineProperty(Image.prototype,"src",{get:function(){return r.get.call(this)},set:function(t){var i=this;if(!c.get(this)){var n=function(){e(i.src)};c.set(this,n),requestAnimationFrame(function(){i.src&&i.complete&&0===i.naturalWidth&&n(),i.addEventListener("error",n)})}r.set.call(this,t)}}),(o=new MutationObserver(function(t){t.forEach(function(t){t.addedNodes.forEach(function(t){"SCRIPT"===t.tagName&&t.src?t.addEventListener("error",function(){e(t.src)}):"IFRAME"===t.tagName&&t.src?setTimeout(function(){if("about:blank"!==t.src)try{"about:blank"===t.contentWindow.location.href&&e(t.src)}catch(e){}},1):"LINK"===t.tagName&&t.href&&t.addEventListener("error",function(){e(t.href)})})})})).observe(document.documentElement,{childList:!0,subtree:!0})}}window.__firefox__.TrackingProtectionStats.enabled=!0,s(!0)}()}]);