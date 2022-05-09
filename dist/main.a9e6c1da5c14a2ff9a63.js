(()=>{"use strict";var e,r,t,n,o,a,s={579:(e,r,t)=>{function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t(395),t(858);var a=!1,s=!1,c=document.querySelector("body"),i=document.createElement("div");i.classList.add("wrapper"),c.append(i);var d=document.createElement("h1");d.textContent="My virtual keyboard",i.append(d);var l=document.createElement("textarea");l.classList.add("text"),i.append(l);var u=document.createElement("div");u.classList.add("keyboard"),i.append(u);var f=[],p=new(function(){function e(r,t,o,a,s){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"name";n(this,e),this.En=r,this.en=t,this.Ru=o,this.ru=a,this.code=s,this.name=c}var r,t;return r=e,t=[{key:"addLetter",value:function(r,t,n,o,a,s){var c=new e(r,t,n,o,a,s);f.push(c)}},{key:"addSpec",value:function(r,t,n){r=new e(r,r,r,r,t,n),f.push(r)}},{key:"addFocusCursor",value:function(e,r){var t,n,o,s,c=document.querySelector(".text"),i=c.selectionStart;if(e.preventDefault(),c.focus(),"Tab"==r)t="    ",n=4,o=0,s=0;else if("Backspace"==r){if(c.selectionStart!==c.selectionEnd)return c.value=c.value.slice(0,c.selectionStart)+c.value.slice(c.selectionEnd),c.setSelectionRange(i-(c.selectionStart-c.selectionEnd),i-(c.selectionStart-c.selectionEnd)),focus;t="",n=-1,o=1,s=0}else if("Space"==r)t=" ",n=1,o=0,s=0;else if("Del"==r){if(c.selectionStart!==c.selectionEnd)return c.value=c.value.slice(0,c.selectionStart)+c.value.slice(c.selectionEnd),c.setSelectionRange(i-(c.selectionStart-c.selectionEnd),i-(c.selectionStart-c.selectionEnd)),focus;t="",n=1,o=0,s=1}else{if("Enter"==r)return c.value=c.value.slice(0,i)+"\n"+c.value.slice(i),c.setSelectionRange(i+1,i+1),focus;if("Win"==r||"Shift"==r||"Alt"==r||"Ctrl"==r||"AltGraph"==r)t="",n=0,o=0,s=0;else if("ArrowLeft"==r)t="←",n=1,o=0,s=0;else if("ArrowUp"==r)t="↑",n=1,o=0,s=0;else if("ArrowRight"==r)t="→",n=1,o=0,s=0;else if("ArrowDown"==r)t="↓",n=1,o=0,s=0;else if(a){if(c.selectionStart!==c.selectionEnd)return c.value=c.value.slice(0,c.selectionStart)+r.toUpperCase()+c.value.slice(c.selectionEnd),c.setSelectionRange(i-(c.selectionStart-c.selectionEnd),i-(c.selectionStart-c.selectionEnd)),focus;"`"==e.key?(t="~",n=1,o=0,s=0):1==e.key?(t="!",n=1,o=0,s=0):2==e.key?(t="@",n=1,o=0,s=0):3==e.key?(t="#",n=1,o=0,s=0):4==e.key?(t="$",n=1,o=0,s=0):5==e.key?(t="%",n=1,o=0,s=0):6==e.key?(t="^",n=1,o=0,s=0):7==e.key?(t="&",n=1,o=0,s=0):8==e.key?(t="*",n=1,o=0,s=0):9==e.key?(t="(",n=1,o=0,s=0):0==e.key?(t=")",n=1,o=0,s=0):"-"==e.key?(t="_",n=1,o=0,s=0):"="==e.key?(t="+",n=1,o=0,s=0):"["==e.key?(t="{",n=1,o=0,s=0):"]"==e.key?(t="}",n=1,o=0,s=0):"\\"==e.key?(t="|",n=1,o=0,s=0):";"==e.key?(t=":",n=1,o=0,s=0):"'"==e.key?(t='"',n=1,o=0,s=0):","==e.key?(t="<",n=1,o=0,s=0):"."==e.key?(t=">",n=1,o=0,s=0):"/"==e.key?(t="?",n=1,o=0,s=0):(t=r.toUpperCase(),n=1,o=0,s=0)}else{if(c.selectionStart!==c.selectionEnd)return c.value=c.value.slice(0,c.selectionStart)+r+c.value.slice(c.selectionEnd),c.setSelectionRange(i-(c.selectionStart-c.selectionEnd),i-(c.selectionStart-c.selectionEnd)),focus;t=r,n=1,o=0,s=0}}return c.value=c.value.slice(0,i-o)+t+c.value.slice(i+s),c.setSelectionRange(i+n,i+n-s),focus}},{key:"addAffect",value:function(e,r,t){"mousedown"==r?(t.classList.add("back"),"Tab"==t.innerHTML?this.addFocusCursor(e,"Tab"):"Enter"==t.innerHTML?this.addFocusCursor(e,"Enter"):"Backspace"==t.innerHTML?this.addFocusCursor(e,"Backspace"):"Del"==t.innerHTML?this.addFocusCursor(e,"Del"):"CapsLock"==t.innerHTML?(this.clearKeys(),s?a?(this.showKeys("ru"),document.querySelectorAll(".keylong")[1].classList.remove("back"),a=!a):(this.showKeys("Ru"),document.querySelectorAll(".keylong")[1].classList.add("back"),a=!a):a?(this.showKeys("en"),document.querySelectorAll(".keylong")[1].classList.remove("back"),a=!a):(this.showKeys("En"),document.querySelectorAll(".keylong")[1].classList.add("back"),a=!a)):"Space"==t.innerHTML?this.addFocusCursor(e,"Space"):"Shift"==t.innerHTML?(this.clearKeys(),s?a?(this.showKeys("ru"),a=!a):(this.showKeys("Ru"),a=!a):a?(this.showKeys("en"),a=!a):(this.showKeys("En"),a=!a)):this.addFocusCursor(e,t.innerHTML)):"Shift"==t.innerHTML?(this.clearKeys(),s?a?(this.showKeys("ru"),a=!a):(this.showKeys("Ru"),a=!a):a?(this.showKeys("en"),a=!a):(this.showKeys("En"),a=!a)):a||t.classList.remove("back")}},{key:"clearKeys",value:function(){u.innerHTML=" "}},{key:"showKeys",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";console.log(f),f.forEach((function(r){var t=document.createElement("div");if(t.addEventListener("mousedown",(function(e){return p.addAffect(e,"mousedown",t)})),t.addEventListener("mouseup",(function(e){return p.addAffect(e,"mouseup",t)})),t.classList.add("key"),38==r.code?t.innerHTML="&#8593;":37==r.code?t.innerHTML="&#8592;":39==r.code?t.innerHTML="&#8594;":40==r.code?t.innerHTML="&#8595;":"Control"==r.En?t.innerHTML="Ctrl":"Meta"==r.En?t.innerHTML="Win":"Delete"==r.En?t.innerHTML="Del":t.innerHTML=r[e],u.append(t),"Backspace"==r.En||"Delete"==r.En||"Enter"==r.En||"ShiftRight"==r.name){var n=document.createElement("div");n.classList.add("clear"),u.append(n)}"Enter"!=r.En&&"Backspace"!=r.En&&"CapsLock"!=r.En&&"Shift"!=r.En||t.classList.add("keylong"),"Tab"==r.En&&t.classList.add("litle-keylong"),"Space"==r.En&&t.classList.add("long-keylong")}))}}],t&&o(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}());p.addLetter("~","`","Ё","ё",192,"Backquote"),p.addLetter("!",1,"!",1,49,"Digit1"),p.addLetter("@",2,"@",2,50,"Digit2"),p.addLetter("#",3,"#",3,51,"Digit3"),p.addLetter("$",4,"$",4,52,"Digit4"),p.addLetter("%",5,"%",5,53,"Digit5"),p.addLetter("^",6,"^",6,54,"Digit6"),p.addLetter("&",7,"&",7,55,"Digit7"),p.addLetter("*",8,"*",8,56,"Digit8"),p.addLetter("(",9,"(",9,57,"Digit9"),p.addLetter(")",0,")",0,58,"Digit0"),p.addLetter("_","-","_","-",189,"Minus"),p.addLetter("+","=","+","=",187,"Equal"),p.addSpec("Backspace",8,"Backspace"),p.addSpec("Tab",9,"Tab"),p.addLetter("Q","q","Й","й",81,"KeyQ"),p.addLetter("W","w","Ц","ц",87,"KeyW"),p.addLetter("E","e","У","у",69,"KeyE"),p.addLetter("R","r","К","к",82,"KeyR"),p.addLetter("T","t","Е","е",84,"KeyT"),p.addLetter("Y","y","Н","н",89,"KeyY"),p.addLetter("U","u","Г","г",85,"KeyU"),p.addLetter("I","i","Ш","ш",73,"KeyI"),p.addLetter("O","o","Щ","щ",79,"KeyO"),p.addLetter("P","p","З","з",80,"KeyP"),p.addLetter("{","[","Х","х",219,"BracketLeft"),p.addLetter("}","]","Ъ","ъ",221,"BracketRight"),p.addLetter("|","\\","|","\\",220,"Backslash"),p.addSpec("Delete",46,"Delete"),p.addSpec("CapsLock",20,"CapsLock"),p.addLetter("A","a","Ф","ф",65,"KeyA"),p.addLetter("S","s","Ы","ы",83,"KeyS"),p.addLetter("D","d","В","в",68,"KeyD"),p.addLetter("F","f","А","а",70,"KeyF"),p.addLetter("G","g","П","п",71,"KeyG"),p.addLetter("H","h","Р","р",72,"KeyH"),p.addLetter("J","j","О","о",74,"KeyJ"),p.addLetter("K","k","Л","л",75,"KeyK"),p.addLetter("L","l","Д","д",76,"KeyL"),p.addLetter(":",";","Ж","ж",186,"Semicolon"),p.addLetter('"',"'","Э","э",186,"Quote"),p.addSpec("Enter",13,"Enter"),p.addSpec("Shift",16,"ShiftLeft"),p.addLetter("Z","z","Я","я",90,"KeyZ"),p.addLetter("X","x","Ч","ч",88,"KeyX"),p.addLetter("C","c","С","с",67,"KeyC"),p.addLetter("V","v","М","м",86,"KeyV"),p.addLetter("B","b","И","и",66,"KeyB"),p.addLetter("N","n","Т","т",78,"KeyN"),p.addLetter("M","m","Ь","ь",77,"KeyM"),p.addLetter("<",",","Б","б",188,"Comma"),p.addLetter(">",".","Ю","ю",190,"Period"),p.addLetter("?","/",",",".",191,"Slash"),p.addSpec("ArrowUp",38,"ArrowUp"),p.addSpec("Shift",16,"ShiftRight"),p.addSpec("Control",17,"ControlLeft"),p.addSpec("Meta",91,"MetaLeft"),p.addSpec("Alt",18,"AltLeft"),p.addSpec("Space",32,"Space"),p.addSpec("Alt",18,"AltRight"),p.addSpec("ArrowLeft",37,"ArrowLeft"),p.addSpec("ArrowDown",40,"ArrowDown"),p.addSpec("ArrowRight",39,"ArrowRight"),p.addSpec("Control",17,"ControlRight"),p.showKeys(),document.addEventListener("keydown",(function(e){return h(e,"keydown")})),document.addEventListener("keyup",(function(e){return h(e,"keyup")}));var y=new Set;function h(e,r){if(console.log(e),"keydown"==r){e.preventDefault();var t=document.querySelectorAll(".key");if("CapsLock"==e.key)return p.clearKeys(),s?a?(p.showKeys("ru"),document.querySelectorAll(".keylong")[1].classList.remove("back"),console.log([document.querySelectorAll(".keylong")[1],4]),a=!a):(p.showKeys("Ru"),document.querySelectorAll(".keylong")[1].classList.add("back"),console.log([document.querySelectorAll(".keylong")[1],3]),a=!a):a?(p.showKeys("en"),document.querySelectorAll(".keylong")[1].classList.remove("back"),console.log([document.querySelectorAll(".keylong")[1],2]),a=!a):(p.showKeys("En"),document.querySelectorAll(".keylong")[1].classList.add("back"),console.log(document.querySelectorAll(".keylong")[1]),a=!a),null;if(t.forEach((function(r){"Meta"==e.key&&"Win"==r.innerHTML&&r.classList.add("back"),a?("`"==e.key?"~"==r.innerHTML&&r.classList.add("back"):"1"==e.key?"!"==r.innerHTML&&r.classList.add("back"):"2"==e.key?"@"==r.innerHTML&&r.classList.add("back"):"3"==e.key?"#"==r.innerHTML&&r.classList.add("back"):"4"==e.key?"$"==r.innerHTML&&r.classList.add("back"):"5"==e.key?"%"==r.innerHTML&&r.classList.add("back"):"6"==e.key?"^"==r.innerHTML&&r.classList.add("back"):"7"==e.key?"&amp;"==r.innerHTML&&r.classList.add("back"):"8"==e.key?"*"==r.innerHTML&&r.classList.add("back"):"9"==e.key?"("==r.innerHTML&&r.classList.add("back"):"0"==e.key?")"==r.innerHTML&&r.classList.add("back"):"-"==e.key?"_"==r.innerHTML&&r.classList.add("back"):"="==e.key?"+"==r.innerHTML&&r.classList.add("back"):"["==e.key?"{"==r.innerHTML&&r.classList.add("back"):"]"==e.key?"}"==r.innerHTML&&r.classList.add("back"):"\\"==e.key?"|"==r.innerHTML&&r.classList.add("back"):";"==e.key?":"==r.innerHTML&&r.classList.add("back"):"'"==e.key?'"'==r.innerHTML&&r.classList.add("back"):","==e.key?"&lt;"==r.innerHTML&&r.classList.add("back"):"."==e.key?"&gt;"==r.innerHTML&&r.classList.add("back"):"/"==e.key&&"?"==r.innerHTML&&r.classList.add("back"),"ArrowLeft"==e.key?"←"==r.innerHTML&&r.classList.add("back"):"ArrowRight"==e.key?"→"==r.innerHTML&&r.classList.add("back"):"ArrowUp"==e.key?"↑"==r.innerHTML&&r.classList.add("back"):"ArrowDown"==e.key?"↓"==r.innerHTML&&r.classList.add("back"):"Control"==e.key?"Ctrl"==r.innerHTML&&r.classList.add("back"):"Delete"==e.key?"Del"==r.innerHTML&&r.classList.add("back"):" "==e.key?"Space"==r.innerHTML&&r.classList.add("back"):r.innerHTML.toLowerCase()!=e.key&&r.innerHTML!=e.key||r.classList.add("back")):("ArrowLeft"==e.key?"←"==r.innerHTML&&r.classList.add("back"):"ArrowRight"==e.key?"→"==r.innerHTML&&r.classList.add("back"):"ArrowUp"==e.key?"↑"==r.innerHTML&&r.classList.add("back"):"ArrowDown"==e.key?"↓"==r.innerHTML&&r.classList.add("back"):"Control"==e.key?"Ctrl"==r.innerHTML&&r.classList.add("back"):"Delete"==e.key?"Del"==r.innerHTML&&r.classList.add("back"):" "==e.key&&"Space"==r.innerHTML&&r.classList.add("back"),r.innerHTML!=e.key&&e.code!=r.innerHTML||r.classList.add("back"))})),"ShiftLeft"!=e.code&&"AltLeft"!=e.code||y.add(e.code),y.has("ShiftLeft")&&y.has("AltLeft")&&(s?(a?(p.clearKeys(),p.showKeys("En"),document.querySelectorAll(".keylong")[1].classList.add("back")):(p.clearKeys(),p.showKeys("en")),s=!s):(a?(p.clearKeys(),p.showKeys("Ru"),document.querySelectorAll(".keylong")[1].classList.add("back")):(p.clearKeys(),p.showKeys("ru")),s=!s)),"Tab"==e.key)p.addFocusCursor(e,"Tab");else if(" "==e.key)p.addFocusCursor(e,"Space");else if("Enter"==e.key)p.addFocusCursor(e,"Enter");else if("Backspace"==e.key)p.addFocusCursor(e,"Backspace");else if("Delete"==e.key)p.addFocusCursor(e,"Del");else if("ArrowLeft"==e.key)p.addFocusCursor(e,"ArrowLeft");else if("ArrowUp"==e.key)p.addFocusCursor(e,"ArrowUp");else if("ArrowDown"==e.key)p.addFocusCursor(e,"ArrowDown");else if("ArrowRight"==e.key)p.addFocusCursor(e,"ArrowRight");else{if("CapsLock"==e.key||"Shift"==e.key||"Alt"==e.key||"Meta"==e.key||"Escape"==e.key||"AudioVolumeMute"==e.key||"AudioVolumeDown"==e.key||"AudioVolumeUp"==e.key||"Insert"==e.key||"Control"==e.key||"F1"==e.key||"F2"==e.key||"F3"==e.key||"F4"==e.key||"F5"==e.key||"F6"==e.key||"F7"==e.key||"F8"==e.key||"F9"==e.key||"F10"==e.key||"F11"==e.key||"F12"==e.key||"AltGraph"==e.key)return null;p.addFocusCursor(e,e.key)}}else document.querySelectorAll(".key").forEach((function(r){"Meta"==e.key&&"Win"==r.innerHTML&&r.classList.remove("back"),a?a&&("`"==e.key?"~"==r.innerHTML&&r.classList.remove("back"):"1"==e.key?"!"==r.innerHTML&&r.classList.remove("back"):"2"==e.key?"@"==r.innerHTML&&r.classList.remove("back"):"3"==e.key?"#"==r.innerHTML&&r.classList.remove("back"):"4"==e.key?"$"==r.innerHTML&&r.classList.remove("back"):"5"==e.key?"%"==r.innerHTML&&r.classList.remove("back"):"6"==e.key?"^"==r.innerHTML&&r.classList.remove("back"):"7"==e.key?"&amp;"==r.innerHTML&&r.classList.remove("back"):"8"==e.key?"*"==r.innerHTML&&r.classList.remove("back"):"9"==e.key?"("==r.innerHTML&&r.classList.remove("back"):"0"==e.key?")"==r.innerHTML&&r.classList.remove("back"):"-"==e.key?"_"==r.innerHTML&&r.classList.remove("back"):"="==e.key?"+"==r.innerHTML&&r.classList.remove("back"):"["==e.key?"{"==r.innerHTML&&r.classList.remove("back"):"]"==e.key?"}"==r.innerHTML&&r.classList.remove("back"):"\\"==e.key?"|"==r.innerHTML&&r.classList.remove("back"):";"==e.key?":"==r.innerHTML&&r.classList.remove("back"):"'"==e.key?'"'==r.innerHTML&&r.classList.remove("back"):","==e.key?"&lt;"==r.innerHTML&&r.classList.remove("back"):"."==e.key?"&gt;"==r.innerHTML&&r.classList.remove("back"):"/"==e.key?"?"==r.innerHTML&&r.classList.remove("back"):"ArrowLeft"==e.key?"←"==r.innerHTML&&r.classList.remove("back"):"ArrowRight"==e.key?"→"==r.innerHTML&&r.classList.remove("back"):"ArrowUp"==e.key?"↑"==r.innerHTML&&r.classList.remove("back"):"ArrowDown"==e.key?"↓"==r.innerHTML&&r.classList.remove("back"):"Control"==e.key?"Ctrl"==r.innerHTML&&r.classList.remove("back"):"Delete"==e.key?"Del"==r.innerHTML&&r.classList.remove("back"):" "==e.key?"Space"==r.innerHTML&&r.classList.remove("back"):r.innerHTML.toLowerCase()!=e.key&&r.innerHTML!=e.key||(r.classList.remove("back"),document.querySelectorAll(".keylong")[1].classList.add("back"))):("ArrowLeft"==e.key?"←"==r.innerHTML&&r.classList.remove("back"):"ArrowRight"==e.key?"→"==r.innerHTML&&r.classList.remove("back"):"ArrowUp"==e.key?"↑"==r.innerHTML&&r.classList.remove("back"):"ArrowDown"==e.key?"↓"==r.innerHTML&&r.classList.remove("back"):"Control"==e.key&&"Ctrl"==r.innerHTML&&r.classList.remove("back"),r.innerHTML!=e.key&&e.code!=r.innerHTML||r.classList.remove("back"))})),(y.has("ShiftLeft")||y.has("AltLeft"))&&y.clear()}i.addEventListener("mouseup",(function(){var e=document.querySelectorAll(".key");a?e.forEach((function(e){"CapsLock"!==e.innerHTML&&e.classList.remove("back")})):e.forEach((function(e){return e.classList.remove("back")}))}))},783:(e,r,t)=>{var n=t(618),o=Object.create(null),a="undefined"==typeof document,s=Array.prototype.forEach;function c(){}function i(e,r){if(!r){if(!e.href)return;r=e.href.split("?")[0]}if(l(r)&&!1!==e.isLoaded&&r&&r.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(r,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function d(){var e=document.querySelectorAll("link");s.call(e,(function(e){!0!==e.visited&&i(e)}))}function l(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,r){if(a)return console.log("no window.document found, will not HMR CSS"),c;var t,u,f=function(e){var r=o[e];if(!r){if(document.currentScript)r=document.currentScript.src;else{var t=document.getElementsByTagName("script"),a=t[t.length-1];a&&(r=a.src)}o[e]=r}return function(e){if(!r)return null;var t=r.split(/([^\\/]+)\.js$/),o=t&&t[1];return o&&e?e.split(",").map((function(e){var t=new RegExp("".concat(o,"\\.js$"),"g");return n(r.replace(t,"".concat(e.replace(/{fileName}/g,o),".css")))})):[r.replace(".js",".css")]}}(e);return t=function(){var e=f(r.filename),t=function(e){if(!e)return!1;var r=document.querySelectorAll("link"),t=!1;return s.call(r,(function(r){if(r.href){var o=function(e,r){var t;return e=n(e),r.some((function(n){e.indexOf(r)>-1&&(t=n)})),t}(r.href,e);l(o)&&!0!==r.visited&&o&&(i(r,o),t=!0)}})),t}(e);if(r.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},50,u=0,function(){var e=this,r=arguments,n=function(){return t.apply(e,r)};clearTimeout(u),u=setTimeout(n,50)}}},618:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var r=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(r,"i"),"").split("/"),n=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",r+n+t.reduce((function(e,r){switch(r){case"..":e.pop();break;case".":break;default:e.push(r)}return e}),[]).join("/")}},395:(e,r,t)=>{var n=t(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},858:(e,r,t)=>{var n=t(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)}},c={};function i(e){var r=c[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var t=c[e]={id:e,exports:{}};try{var n={id:e,module:t,factory:s[e],require:i};i.i.forEach((function(e){e(n)})),t=n.module,n.factory.call(t.exports,t,t.exports,n.require)}catch(e){throw t.error=e,e}return t.exports}i.m=s,i.c=c,i.i=[],i.hu=e=>e+"."+i.h()+".hot-update.js",i.miniCssF=e=>{},i.hmrF=()=>"main."+i.h()+".hot-update.json",i.h=()=>"bf82a68baed3139b8fbf",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},i.l=(r,t,n,o)=>{if(e[r])e[r].push(t);else{var a,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==r){a=l;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=r),e[r]=[t];var u=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),s&&document.head.appendChild(a)}},(()=>{var e,r,t,n={},o=i.c,a=[],s=[],c="idle",d=0,l=[];function u(e){c=e;for(var r=[],t=0;t<s.length;t++)r[t]=s[t].call(null,e);return Promise.all(r)}function f(){0==--d&&u("ready").then((function(){if(0===d){var e=l;l=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return u("check").then(i.hmrM).then((function(t){return t?u("prepare").then((function(){var n=[];return r=[],Promise.all(Object.keys(i.hmrC).reduce((function(e,o){return i.hmrC[o](t.c,t.r,t.m,e,r,n),e}),[])).then((function(){return r=function(){return e?h(e):u("ready").then((function(){return n}))},0===d?r():new Promise((function(e){l.push((function(){e(r())}))}));var r}))})):u(k()?"ready":"idle").then((function(){return null}))}))}function y(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):h(e)}function h(e){e=e||{},k();var n=r.map((function(r){return r(e)}));r=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var a=u("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var s,c=u("apply"),i=function(e){s||(s=e)},d=[];return n.forEach((function(e){if(e.apply){var r=e.apply(i);if(r)for(var t=0;t<r.length;t++)d.push(r[t])}})),Promise.all([a,c]).then((function(){return s?u("fail").then((function(){throw s})):t?h(e).then((function(e){return d.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):u("idle").then((function(){return d}))}))}function k(){if(t)return r||(r=[]),Object.keys(i.hmrI).forEach((function(e){t.forEach((function(t){i.hmrI[e](t,r)}))})),t=void 0,!0}i.hmrD=n,i.i.push((function(l){var h,k,L,v,m=l.module,b=function(r,t){var n=o[t];if(!n)return r;var s=function(s){if(n.hot.active){if(o[s]){var c=o[s].parents;-1===c.indexOf(t)&&c.push(t)}else a=[t],e=s;-1===n.children.indexOf(s)&&n.children.push(s)}else console.warn("[HMR] unexpected require("+s+") from disposed module "+t),a=[];return r(s)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&"e"!==l&&Object.defineProperty(s,l,i(l));return s.e=function(e){return function(e){switch(c){case"ready":u("prepare");case"prepare":return d++,e.then(f,f),e;default:return e}}(r.e(e))},s}(l.require,l.id);m.hot=(h=l.id,k=m,v={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:L=e!==h,_requireSelf:function(){a=k.parents.slice(),e=L?void 0:h,i(h)},active:!0,accept:function(e,r,t){if(void 0===e)v._selfAccepted=!0;else if("function"==typeof e)v._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)v._acceptedDependencies[e[n]]=r||function(){},v._acceptedErrorHandlers[e[n]]=t;else v._acceptedDependencies[e]=r||function(){},v._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)v._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)v._declinedDependencies[e[r]]=!0;else v._declinedDependencies[e]=!0},dispose:function(e){v._disposeHandlers.push(e)},addDisposeHandler:function(e){v._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=v._disposeHandlers.indexOf(e);r>=0&&v._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](h,r)})),u("ready");break;case"ready":Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](h,r)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(h)}},check:p,apply:y,status:function(e){if(!e)return c;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var r=s.indexOf(e);r>=0&&s.splice(r,1)},data:n[h]},e=void 0,v),m.parents=a,m.children=[],a=[],l.require=b})),i.hmrC={},i.hmrI={}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),r=(e,r,t,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var s=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=s,i.request=c,o.parentNode.removeChild(o),n(i)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(s=t[n]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===r))return s}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var s;if((o=(s=a[n]).getAttribute("data-href"))===e||o===r)return s}},n=[],o=[],a=e=>({dispose:()=>{for(var e=0;e<n.length;e++){var r=n[e];r.parentNode&&r.parentNode.removeChild(r)}n.length=0},apply:()=>{for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}}),i.hmrC.miniCss=(e,s,c,d,l,u)=>{l.push(a),e.forEach((e=>{var a=i.miniCssF(e),s=i.p+a,c=t(a,s);c&&d.push(new Promise(((t,a)=>{var i=r(e,s,(()=>{i.as="style",i.rel="preload",t()}),a);n.push(c),o.push(i)})))}))},(()=>{var e,r,t,n,o,a=i.hmrS_jsonp=i.hmrS_jsonp||{179:0},s={};function c(r,t){return e=t,new Promise(((e,t)=>{s[r]=e;var n=i.p+i.hu(r),o=new Error;i.l(n,(e=>{if(s[r]){s[r]=void 0;var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,t(o)}}))}))}function d(e){function s(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),a=o.id,s=o.chain,d=i.c[a];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var l=0;l<d.parents.length;l++){var u=d.parents[l],f=i.c[u];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([u]),moduleId:a,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[a]?(t[u]||(t[u]=[]),c(t[u],[a])):(delete t[u],r.push(u),n.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}i.f&&delete i.f.jsonpHmr,r=void 0;var d={},l=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(i.o(t,p)){var y,h=t[p],k=!1,L=!1,v=!1,m="";switch((y=h?s(p):{type:"disposed",moduleId:p}).chain&&(m="\nUpdate propagation: "+y.chain.join(" -> ")),y.type){case"self-declined":e.onDeclined&&e.onDeclined(y),e.ignoreDeclined||(k=new Error("Aborted because of self decline: "+y.moduleId+m));break;case"declined":e.onDeclined&&e.onDeclined(y),e.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+y.moduleId+" in "+y.parentId+m));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(y),e.ignoreUnaccepted||(k=new Error("Aborted because "+p+" is not accepted"+m));break;case"accepted":e.onAccepted&&e.onAccepted(y),L=!0;break;case"disposed":e.onDisposed&&e.onDisposed(y),v=!0;break;default:throw new Error("Unexception type "+y.type)}if(k)return{error:k};if(L)for(p in u[p]=h,c(l,y.outdatedModules),y.outdatedDependencies)i.o(y.outdatedDependencies,p)&&(d[p]||(d[p]=[]),c(d[p],y.outdatedDependencies[p]));v&&(c(l,[y.moduleId]),u[p]=f)}t=void 0;for(var b,g=[],w=0;w<l.length;w++){var H=l[w],T=i.c[H];T&&(T.hot._selfAccepted||T.hot._main)&&u[H]!==f&&!T.hot._selfInvalidated&&g.push({module:H,require:T.hot._requireSelf,errorHandler:T.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete a[e]})),n=void 0;for(var r,t=l.slice();t.length>0;){var o=t.pop(),s=i.c[o];if(s){var c={},u=s.hot._disposeHandlers;for(w=0;w<u.length;w++)u[w].call(null,c);for(i.hmrD[o]=c,s.hot.active=!1,delete i.c[o],delete d[o],w=0;w<s.children.length;w++){var f=i.c[s.children[w]];f&&(e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1)}}}for(var p in d)if(i.o(d,p)&&(s=i.c[p]))for(b=d[p],w=0;w<b.length;w++)r=b[w],(e=s.children.indexOf(r))>=0&&s.children.splice(e,1)},apply:function(r){for(var t in u)i.o(u,t)&&(i.m[t]=u[t]);for(var n=0;n<o.length;n++)o[n](i);for(var a in d)if(i.o(d,a)){var s=i.c[a];if(s){b=d[a];for(var c=[],f=[],p=[],y=0;y<b.length;y++){var h=b[y],k=s.hot._acceptedDependencies[h],L=s.hot._acceptedErrorHandlers[h];if(k){if(-1!==c.indexOf(k))continue;c.push(k),f.push(L),p.push(h)}}for(var v=0;v<c.length;v++)try{c[v].call(null,b)}catch(t){if("function"==typeof f[v])try{f[v](t,{moduleId:a,dependencyId:p[v]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:p[v],error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:a,dependencyId:p[v],error:t}),e.ignoreErrored||r(t)}}}for(var m=0;m<g.length;m++){var w=g[m],H=w.module;try{w.require(H)}catch(t){if("function"==typeof w.errorHandler)try{w.errorHandler(t,{moduleId:H,module:i.c[H]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:H,error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:H,error:t}),e.ignoreErrored||r(t)}}return l}}}self.webpackHotUpdate=(r,n,a)=>{for(var c in n)i.o(n,c)&&(t[c]=n[c],e&&e.push(c));a&&o.push(a),s[r]&&(s[r](),s[r]=void 0)},i.hmrI.jsonp=function(e,r){t||(t={},o=[],n=[],r.push(d)),i.o(t,e)||(t[e]=i.m[e])},i.hmrC.jsonp=function(e,s,l,u,f,p){f.push(d),r={},n=s,t=l.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){i.o(a,e)&&void 0!==a[e]?(u.push(c(e,p)),r[e]=!0):r[e]=!1})),i.f&&(i.f.jsonpHmr=function(e,t){r&&i.o(r,e)&&!r[e]&&(t.push(c(e)),r[e]=!0)})},i.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(i.p+i.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),i(579)})();
//# sourceMappingURL=main.a9e6c1da5c14a2ff9a63.js.map