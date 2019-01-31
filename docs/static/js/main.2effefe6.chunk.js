(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),l=(a(13),a(15),a(3));function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e.trim()){var t=0,a=0;if(e.match(/\S/g)){var n=/[\u0600-\u06FF]+/g;n.test(e)&&(t=e.match(n).length);var r=/\w+/g;return r.test(e)&&(a=e.match(r).length),t+a}return 0}return 0}function i(e){return e?e.length:0}function m(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function u(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function d(){if(function(){try{var e=window.localStorage,t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(a){return a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}()){var e=localStorage.getItem("textmani_state");return e?JSON.parse(e):function(){var e={localStorageIsAvailable:!0,allTabs:["Manipulate text","Language detector","Lorem ipsum Generator"],activeTab:"Manipulate text",manipulatorTab:{text:"",replaceThis:"",replacseWith:"",removeThis:"",matchString:"",caseSensetive:!1,regexEnabled:!1,statusMessage:"Ready"},langDetectorTab:{text:"",statusMessage:"Ready"},generatorTab:{selectedType:"Words",selectedTimes:10,startWithLoremIpsum:!1,statusMessage:"Ready"}};return localStorage.setItem("textmani_state",JSON.stringify(e)),e}()}}var b=function(e){var t=e.tabs,a=e.activeTab,n=e.setActiveTab;return r.a.createElement("div",{className:"bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-2 text-center"},r.a.createElement("p",{className:"h3"},"Textmani"),r.a.createElement("span",null,"Online text manipulator, language detector, dummy text generator, and more.")),r.a.createElement("ul",{className:"nav nav-tabs"},t.map(function(e,t){return r.a.createElement("li",{key:t,className:"nav-item"},r.a.createElement("span",{className:"nav-link ".concat(a===e?"active":""),onClick:function(e){var t=e.target;return n(t.innerText)}},e))}))))},p=a(2),v=a(1);function g(e){var t=e.manipulatorTab,a=e.setManipulatorTab,n=e.textareaRef,s=t.text,c=t.statusMessage;return r.a.createElement("div",{className:"container mb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("span",{className:"counters"},"words: ",r.a.createElement("strong",null,o(s)))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("span",{className:"counters"},"chars: ",r.a.createElement("strong",null,i(s)))))),r.a.createElement("div",{className:"col-6 text-center dotted"},c),r.a.createElement("div",{className:"col-3 text-right"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Clear | Copy"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){a(Object(v.a)({},t,{text:"",statusMessage:"Cleared"})),n.current.focus()}},"Clear"),r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){s.trim()?document.queryCommandSupported("copy")?(n.current.select(),document.execCommand("copy"),a(Object(v.a)({},t,{statusMessage:"Copied"}))):a(Object(v.a)({},t,{statusMessage:"Can not copy from your browser!"})):a(Object(v.a)({},t,{statusMessage:"No text to copy!"}))}},"Copy")))))}function E(e){var t=e.manipulatorTab,a=e.setManipulatorTab,s=t.caseSensetive,c=t.regexEnabled,l=Object(n.useRef)(),o=Object(n.useRef)();function i(e){var n,r=e.target,s=r.id,c=r.defaultChecked,l=("caseSensetive"===s?"Case Sensetive ":"regexEnabled"===s?"Regular Expression ":"")+(c?"Disabled":"Enabled");a(Object(v.a)({},t,(n={},Object(p.a)(n,s,!c),Object(p.a)(n,"statusMessage",l),n)))}return r.a.createElement("div",{className:"container section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2 text-right"},"Options"),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("small",{className:"form-text"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",id:"caseSensetive",defaultChecked:s,onClick:i,ref:l,className:"form-check-input"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"caseSensetive"},"Case sensetive")))),r.a.createElement("div",{className:"col-3"},r.a.createElement("small",{className:"form-text"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",id:"regexEnabled",defaultChecked:c,onClick:i,ref:o,className:"form-check-input"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"regexEnabled"},"Enable RegEx"))))))))}function f(e){var t=e.manipulatorTab,a=e.setManipulatorTab,n=e.handleOnChange,s=t.text,c=t.replaceThis,l=t.replacseWith,o=t.caseSensetive,i=t.regexEnabled;function m(e,n,r){if(e){var s=function(e){var t=e.text,a=void 0===t?"":t,n=e.replaceThis,r=void 0===n?"":n,s=e.replacseWith,c=void 0===s?"":s,l=e.caseSensetive,o=void 0!==l&&l,i=e.regexEnabled,m=void 0!==i&&i;if(console.log(a),!a.trim())return{error:"No text to replace at."};if(!m)return o||(a=a.toLowerCase(),r=r.toLowerCase(),c=c.toLowerCase()),{replacedText:a.split(r).join(c),found:a.split(r).length-1};var u=o?"g":"ig",d=null;try{return d=new RegExp(r,u),a.match(d,u)?{replacedText:a.split(d).join(c),found:a.split(r).length-1}:{found:0}}catch(b){return{error:"Invalid RegExp expression."}}}({text:e,replaceThis:n,replacseWith:r,caseSensetive:o,regexEnabled:i}),c=s.error,l=s.replacedText,m=s.found;a(c?Object(v.a)({},t,{statusMessage:c}):Object(v.a)({},t,{text:l,statusMessage:"Replaced ".concat(m," times")}))}else a(Object(v.a)({},t,{statusMessage:"No text to replace"}))}return r.a.createElement("div",{className:"container section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2 text-right"},"Replace"),r.a.createElement("div",{className:"col-4 pb-1"},r.a.createElement("input",{id:"replaceThis",value:c,onChange:n,className:"form-control",type:"text","aria-describedby":"replace text"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2 text-right"},"with"),r.a.createElement("div",{className:"col-4"},r.a.createElement("input",{id:"replacseWith",value:l,type:"text",className:"form-control","aria-describedby":"replace with",onChange:n})),r.a.createElement("div",{className:"col-1 text-right"},r.a.createElement("div",{className:"text-left","aria-label":"Replace"},r.a.createElement("button",{onClick:function(){return m(s,c,l)},type:"button",className:"btn btn-warning"},"Replace")))))}function h(e){var t=e.manipulatorTab,a=e.setManipulatorTab,n=e.handleOnChange,s=t.text,c=t.removeThis,l=t.caseSensetive,o=t.regexEnabled;function i(e){var n=function(e){var t=e.text,a=void 0===t?"":t,n=e.string,r=void 0===n?"":n,s=e.caseSensetive,c=void 0!==s&&s,l=e.regexEnabled,o=void 0!==l&&l;if(!a.trim())return{error:"No text provided"};if(!r.trim())return{error:"What would you like to remove?"};if("madd"===r||"tashkeel"===r){var i="madd"===r?/\u0640/:/[\u064e\u064b\u064f\u064c\u0650\u064d\u0651\u2018\u2019\u0652]/;return{replacedText:a.split(i).join(""),found:a.split(i).length-1}}if("trim lines"===r){for(var m=a.split(/\n/),u=[],d=0;d<m.length;d++)u.push(m[d].trim());var b=a.split(/\n/).length-1;return{replacedText:u.toString().split(",").join("\n"),found:b}}if(!o)return c||(a=a.toLowerCase(),r=r.toLowerCase()),{replacedText:a.split(r).join(""),found:a.split(r).length-1};var p=c?"g":"ig",v=null;try{v=new RegExp(r,p);var g=a.match(v,p);return g?{replacedText:a.split(v).join(""),found:g.length}:{found:0}}catch(E){return{error:"Invalid RegExp expression."}}}({text:s,string:e,caseSensetive:l,regexEnabled:o}),r=n.error,c=n.replacedText,i=n.found;a(r?Object(v.a)({},t,{statusMessage:r}):Object(v.a)({},t,{text:c,statusMessage:"Removed ".concat(i," times")}))}return r.a.createElement("div",{className:"container section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2 text-right"},"Remove"),r.a.createElement("div",{className:"col-4 pb-1"},r.a.createElement("input",{id:"removeThis",value:c,onChange:n,type:"text",className:"form-control","aria-describedby":"remove text"})),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Remove something"},r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return i(c)}},"remove"),r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return i("trim lines")}}," trim lines"),r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return i("madd")}},"\u062d\u0630\u0641 \u0627\u0644\u0645\u0640\u0640\u062f"),r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return i("tashkeel")}},"\u062d\u0630\u0641 \u0627\u0644\u062a\u0634\u0643\u064a\u0644")))))}function N(e){var t=e.manipulatorTab,a=e.setManipulatorTab,n=e.handleOnChange,s=t.text,c=t.matchString,l=t.caseSensetive,o=t.regexEnabled;return r.a.createElement("div",{className:"container section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2 text-right"},"Count matches for"),r.a.createElement("div",{className:"col-4"},r.a.createElement("input",{id:"matchString",value:c,onChange:n,type:"text",className:"form-control","aria-describedby":"count words"})),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Remove something"},r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){var e=function(e){var t=e.text,a=void 0===t?"":t,n=e.matchString,r=void 0===n?"":n,s=e.caseSensetive,c=void 0!==s&&s,l=e.regexEnabled,o=void 0!==l&&l;if(!a.trim())return{error:"No text to count matches against."};if(!o)return c||(a=a.toLowerCase(),r=r.toLowerCase()),{found:a.split(r).length-1};var i=c?"g":"ig",m=null,u=0;try{return m=new RegExp(r,i),a.match(m,i)?{found:u=a.match(m,i).length}:{found:u}}catch(d){return{error:"Invalid RegExp expression."}}}({text:s,matchString:c,caseSensetive:l,regexEnabled:o}),n=e.error,r=e.found;a(n?Object(v.a)({},t,{statusMessage:n}):Object(v.a)({},t,{statusMessage:"Found ".concat(r," matches")}))}},"count")))))}function x(e){function t(t){var a,n=e.manipulatorTab,r=e.setManipulatorTab,s=n.text;switch(t){case"lower":a=s.toLowerCase(),r(Object(v.a)({},n,{text:a}));break;case"upper":a=s.toUpperCase(),r(Object(v.a)({},n,{text:a}));break;case"capitalizeEachWord":a=s.toLowerCase().split(" ").map(function(e){return u(e)}).join(" "),r(Object(v.a)({},n,{text:a}))}}return r.a.createElement("div",{className:"container section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2 text-right"},"Change case"),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Change case"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return t("lower")}},"lowercase"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return t("upper")}},"UPPERCASE"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return t("capitalizeEachWord")}},"Capitalize Every Word")))))}var y=function(e){var t=e.manipulatorTab,a=e.setManipulatorTab,s=t.text,c=Object(n.useRef)();function l(e){var n,r=e.target,s=r.value,c=r.id;a(Object(v.a)({},t,(n={},Object(p.a)(n,c,s),Object(p.a)(n,"statusMessage","Ready"),n)))}return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{id:"text",value:s,onChange:l,className:"form-control",ref:c,rows:"4",placeholder:"Type or paste text here to manipulate",autoFocus:!0})),r.a.createElement(g,Object.assign({textareaRef:c},e)),r.a.createElement(E,e),r.a.createElement(f,Object.assign({handleOnChange:l},e)),r.a.createElement("hr",null),r.a.createElement(h,Object.assign({handleOnChange:l},e)),r.a.createElement("hr",null),r.a.createElement(N,Object.assign({handleOnChange:l},e)),r.a.createElement("hr",null),r.a.createElement(x,e))};function w(e){var t=e.generatorTab,a=e.setGeneratorTab,n=e.textareaRef,s=t.text,c=t.statusMessage;return r.a.createElement("div",{className:"container mb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("span",{className:"counters"},"words: ",r.a.createElement("strong",null,o(s)))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("span",{className:"counters"},"chars: ",r.a.createElement("strong",null,i(s)))))),r.a.createElement("div",{className:"col-6 text-center dotted"},c),r.a.createElement("div",{className:"col-3 text-right"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Clear"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){a(Object(v.a)({},t,{text:"",statusMessage:"Cleared"})),n.current.focus()}},"Clear"),r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){s.trim()?document.queryCommandSupported("copy")?(n.current.select(),document.execCommand("copy"),a(Object(v.a)({},t,{statusMessage:"Copied"}))):a(Object(v.a)({},t,{statusMessage:"Can not copy from your browser!"})):a(Object(v.a)({},t,{statusMessage:"No text to copy!"}))}},"Copy")))))}function C(e){var t=e.generatorTab,a=e.setGeneratorTab,n=t.text,s=void 0===n?"":n,c=t.startWithLoremIpsum;return r.a.createElement("div",{className:"container section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 text-right"},"Options"),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("small",{className:"form-text"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",id:"startWithLoremIpsum",defaultChecked:c,onClick:function(e){return function(e,n){var r,s=e.target,c=s.id,l=s.defaultChecked;l?"lorem ipsum "===n.substring(0,12).toLowerCase()&&(n=n.slice(12)):"lorem ipsum "!==n.substring(0,12).toLowerCase()&&(n="Lorem ipsum "+n),a(Object(v.a)({},t,(r={},Object(p.a)(r,c,!l),Object(p.a)(r,"text",n),Object(p.a)(r,"statusMessage","Ready"),r)))}(e,s)},className:"form-check-input"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"startWithLoremIpsum"},'Start with "Lorem ipsum "'))))))))}function T(e){var t=e.generatorTab,a=e.setGeneratorTab,n=t.selectedType,s=t.selectedTimes;function c(e){var n,r=e.target,s=r.value,c=r.id;s="selectedTimes"===c?Number(s):s,a(Object(v.a)({},t,(n={},Object(p.a)(n,c,s),Object(p.a)(n,"statusMessage","Ready"),n)))}return r.a.createElement("div",null,r.a.createElement("div",{className:"container section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 text-right"},"Type of text"),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Select type of text to generate"},["Words","Sentences","Paragraphs"].map(function(e){return r.a.createElement("button",{id:"selectedType",key:e,value:e,type:"button",className:"btn btn-outline-success ".concat(e===n?"active":""),onClick:c}," ",e)}))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"container section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 text-right"},"How many times"),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Select how many times"},[1,3,5,10,20,50,100,250,500].map(function(e){return r.a.createElement("button",{id:"selectedTimes",key:e,value:e,type:"button",className:"btn btn-outline-success ".concat(e===Number(s)?"active":""),onClick:c}," ",e)}))))))}var O=function(e){var t=e.generatorTab,a=e.setGeneratorTab,s=t.text,c=t.selectedType,l=t.selectedTimes,o=t.startWithLoremIpsum,i=Object(n.useRef)();function d(e){var n,r=e.target,s=r.value,c=r.id;a(Object(v.a)({},t,(n={},Object(p.a)(n,c,s),Object(p.a)(n,"statusMessage","Ready"),n)))}function b(e,n){var r=function(e,t){var a="sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipiscing velit sed quia non numquam do eius modi tempora incididunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint obcaecati cupiditate non-provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non-recusandae itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat".split(" "),n=a.length;function r(e){for(var t,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=[],c=0;c<e;c++)t=a[m(0,n)],s.push(t);return s[0]=r?u(s[0]):s[0],s.join(" ")}function s(e){for(var t,a,n=m(3,6),s=m(6,15),c=[],l=0;l<e;l++)a=0===l,t=r(m(n,s),a),c.push(t);return c.join(", ")+"."}switch(e){case"Words":return r(t);case"Sentences":return s(t);case"Paragraphs":return function(e){for(var t,a=m(5,8),n=m(8,15),r=[],c=0;c<e;c++)t=s(m(a,n)),r.push(t);return r.join("\n\n")}(t);default:return}}(e,n);o?"lorem ipsum "!==r.substring(0,12).toLowerCase()&&(r="Lorem ipsum "+r):"lorem ipsum "===r.substring(0,12).toLowerCase()&&(r=r.slice(12)),a(Object(v.a)({},t,{text:r,statusMessage:"".concat(n," ").concat(e," generated")}))}return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{id:"text",value:s,onChange:d,className:"form-control",ref:i,rows:"4",placeholder:"Lorem ipsum text will be generated here"})),r.a.createElement(w,Object.assign({textareaRef:i},e)),r.a.createElement(C,{generatorTab:t,setGeneratorTab:a}),r.a.createElement(T,{generatorTab:t,setGeneratorTab:a,handleOnChange:d}),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Change case"},r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return b(c,l)},autoFocus:!0}," Generate text"))))},j=a(6);function k(e){var t=e.langDetectorTab,a=e.setLangDetectorTab,n=e.textareaRef,s=t.statusMessage;return r.a.createElement("div",{className:"container mb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-8 text-center dotted"},s),r.a.createElement("div",{className:"col-2 text-right"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Clear"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){a(Object(v.a)({},t,{text:"",statusMessage:"Cleared"})),n.current.focus()}},"Clear")))))}var M=new(a.n(j).a),S=function(e){var t=e.langDetectorTab,a=e.setLangDetectorTab,s=t.text,c=Object(n.useRef)();return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{id:"text",value:s,onChange:function(e){var n,r=e.target,s=r.value,c=r.id;a(Object(v.a)({},t,(n={},Object(p.a)(n,c,s),Object(p.a)(n,"statusMessage","Ready"),n)))},className:"form-control",ref:c,rows:"4",placeholder:"Type or paste text here to detect the language",autoFocus:!0})),r.a.createElement(k,Object.assign({textareaRef:c},e)),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Change case"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return function(){if(s.trim()){var e=M.detect(s,4),n=e.lenght?"Language undetectable":"Top guesses: ".concat(e.map(function(e){return u(e[0])}).join(", "));a(Object(v.a)({},t,{statusMessage:n}))}else a(Object(v.a)({},t,{statusMessage:"No text to detect language"}))}()}},"Detect Language"))))},R=[{title:"Clear poems",timestamp:Date.now()},{title:"Mat note",timestamp:Date.now()},{title:"lorem data",timestamp:Date.now()}];function q(e){console.log(e.target)}var L=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"My Docs"),R.map(function(e){return r.a.createElement("div",{key:e.title,className:"alert alert-secondary alert-dismissible fade show doc",role:"alert"},r.a.createElement("strong",null,e.title)," ",r.a.createElement("span",{className:"small"},e.timestamp),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:q},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-xs fa-trash"}))))}))};var W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(function(){var e=d(),t=e.localStorageIsAvailable,a=e.allTabs,s=Object(n.useState)(a),c=Object(l.a)(s,1)[0],o=Object(n.useState)(e.activeTab),i=Object(l.a)(o,2),m=i[0],u=i[1],p=Object(n.useState)(e.manipulatorTab),v=Object(l.a)(p,2),g=v[0],E=v[1],f=Object(n.useState)(e.langDetectorTab),h=Object(l.a)(f,2),N=h[0],x=h[1],w=Object(n.useState)(e.generatorTab),C=Object(l.a)(w,2),T=C[0],j=C[1];return Object(n.useEffect)(function(){if(t){var e={localStorageIsAvailable:t,allTabs:a,activeTab:m,manipulatorTab:g,langDetectorTab:N,generatorTab:T};localStorage.setItem("textmani_state",JSON.stringify(e))}}),r.a.createElement("div",null,r.a.createElement(b,{tabs:c,activeTab:m,setActiveTab:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"pt-2 pb-3"},function(e){switch(e){case"Manipulate text":return r.a.createElement(y,{manipulatorTab:g,setManipulatorTab:E});case"Lorem ipsum Generator":return r.a.createElement(O,{generatorTab:T,setGeneratorTab:j});case"My Docs":return r.a.createElement(L,null);case"Language detector":return r.a.createElement(S,{langDetectorTab:N,setLangDetectorTab:x})}}(m)),r.a.createElement("hr",null)),r.a.createElement("div",{className:"text-center my-5"},r.a.createElement("span",{className:"small"},"Textmani 2016 - ",(new Date).getFullYear()),r.a.createElement("a",{href:"https://github.com/ihani/textmani-react"},r.a.createElement("span",null," ",r.a.createElement("i",{className:"fab fa-github"})))))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");W?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):D(t,e)})}}()},7:function(e,t,a){e.exports=a(22)}},[[7,2,1]]]);
//# sourceMappingURL=main.2effefe6.chunk.js.map