(()=>{var e={678:(e,t,r)=>{"use strict";r.r(t)},479:(e,t,r)=>{"use strict";r.r(t)},425:(e,t,r)=>{"use strict";r.r(t)},421:(e,t,r)=>{"use strict";r.r(t)},337:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(294)),u=n(r(935)),l=n(r(188)),o=n(r(684));u.default.render(a.default.createElement((function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(l.default,{name:"user"}),a.default.createElement(o.default,null))}),null),document.getElementById("root"))},684:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=u(r(294)),s=l(r(870));t.default=function(){var e=o.useState(""),t=e[0],r=e[1],n=o.useState(""),a=n[0],u=n[1],l=o.useState(""),i=l[0],c=l[1];return o.default.createElement("form",{className:"common-form",onSubmit:function(e){e.preventDefault(),r(""!==i?"Заполните корректно все поля":"Форма успешно отправлена"),setTimeout((function(){return r("")}),2e3)}},o.default.createElement("h3",{className:"common-form__title"},"Форма №223-B"),o.default.createElement(s.default,{type:"text",placeholder:"Иванов Иван Иванович",errorMessage:i,handler:function(e){switch(e.fieldName){case"fullName":u(e.value),c(a.length>20?"Текст не должен содержать более 20 символов":"");break;default:r("Ошибка обработки данных формы")}},fieldName:"fullName",value:a}),o.default.createElement("button",{type:"submit",className:"common-form__button-submit"},"Отправить"),o.default.createElement("h3",{className:"common-form__error-message"},t))}},188:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(294));t.default=function(e){var t=e.name;return a.default.createElement("h1",{className:"greetings"},"Hello,"," ",t)}},870:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(294));t.default=function(e){var t,r=e.type,n=e.placeholder,u=e.errorMessage,l=e.handler,o=e.fieldName,s=e.value;switch(r){case"text":t="text";break;case"tel":t="tel";break;case"email":t="email";break;default:t="text"}return a.default.createElement("div",{className:"input-field"},a.default.createElement("input",{className:u?"input-field__input input-field__input_wrong":"input-field__input",type:t,placeholder:n,onChange:function(e){return l({fieldName:o,value:e.target.value})},value:s}),a.default.createElement("p",{className:"input-field__error-message"},u))}},607:(e,t,r)=>{"use strict";var n;r(337),(n=r(312)).keys().forEach(n)},312:(e,t,r)=>{var n={"./App/index.scss":678,"./blocks/CommonForm/CommonForm.scss":479,"./blocks/Greeting/greeting.scss":425,"./blocks/InputField/InputField.scss":421};function a(e){var t=u(e);return r(t)}function u(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=u,e.exports=a,a.id=312}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,r.x=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={296:0},t=[[607,736]],n=e=>{},a=(a,u)=>{for(var l,o,[s,i,c,f]=u,d=0,m=[];d<s.length;d++)o=s[d],r.o(e,o)&&e[o]&&m.push(e[o][0]),e[o]=0;for(l in i)r.o(i,l)&&(r.m[l]=i[l]);for(c&&c(r),a&&a(u);m.length;)m.shift()();return f&&t.push.apply(t,f),n()},u=self.webpackChunkreact_sandbox=self.webpackChunkreact_sandbox||[];function l(){for(var n,a=0;a<t.length;a++){for(var u=t[a],l=!0,o=1;o<u.length;o++){var s=u[o];0!==e[s]&&(l=!1)}l&&(t.splice(a--,1),n=r(r.s=u[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}u.forEach(a.bind(null,0)),u.push=a.bind(null,u.push.bind(u));var o=r.x;r.x=()=>(r.x=o||(e=>{}),(n=l)())})(),r.x()})();