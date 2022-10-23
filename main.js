(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=n,this._src=e.link,this._title=e.name,this._likes=e.likes.length,this._idCard=e._id,this._idOwner=e.owner._id,this._userId=e.userId,this._handleLikeClick=i,this._handleCardClick=r,this._handleDeleteButtonClick=o,this._isLiked=e.isLiked}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".item").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton=this._element.querySelector(".item__icon"),this._likeButton.addEventListener("click",(function(){return e._handleLikeClick(e._likeButton,e._idCard,e._likePosition,e._likes)})),this._templateImg.addEventListener("click",(function(){return e._handleCardClick(e._src,e._title)})),this._idOwner===this._userId&&this._element.querySelector(".item__delete-img").addEventListener("click",(function(){return e._handleDeleteButtonClick(e._idCard,e._element)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._idOwner!==this._userId&&this._element.querySelector("#trash").remove(),this._isLiked&&this._element.querySelector(".item__icon").classList.add("item__icon_active"),this._likePosition=this._element.querySelector(".item__like-counter"),this._templateImg=this._element.querySelector(".item__img"),this._templateText=this._element.querySelector(".item__text"),this._likePosition.textContent=this._likes,this._templateImg.src=this._src,this._templateImg.alt=this._title,this._templateText.textContent=this._title,this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showInputError",(function(e){var t=o._form.querySelector("#".concat(e.id,"-error"));e.classList.add(o._settingsValidation.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(o._settingsValidation.errorClass)})),r(this,"disableSubmitButton",(function(e){e.classList.add(o._settingsValidation.inactiveButtonClass),e.disabled=!0})),r(this,"_hideInputError",(function(e){var t=o._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(o._settingsValidation.inputErrorClass),t.classList.remove(o._settingsValidation.errorClass),t.textContent=""})),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e)})),this._form=document.querySelector(n),this._settingsValidation=t,this._buttonElement=this._form.querySelector(this._settingsValidation.submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._settingsValidation.inputSelector))}var t,o;return t=e,(o=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton(this._buttonElement):(this._buttonElement.classList.remove(this._settingsValidation.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),u=document.querySelector("#submitAddButton"),c=document.querySelector(".profile__avatar"),s="/users/me",l="/cards",f={inputSelector:".popup__info",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_error_visible"};function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._container=document.querySelector(n),this._renderer=o}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){t?this._container.prepend(e):this._container.append(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),y(this,"_closePopupOverlay",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._closePopupOverlay)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._figcaption=document.querySelector("figcaption"),t._imgPopup=document.querySelector(".popup__img"),t}return t=a,(n=[{key:"open",value:function(e,t){this._imgPopup.setAttribute("src",e),this._imgPopup.setAttribute("alt",t),this._figcaption.textContent=t,m(k(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n,r=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formElement=n._popup.querySelector(".popup__form"),n._handleSubmitForm=r,n._inputList=n._formElement.querySelectorAll(".popup__info"),n._buttonSave=n._popup.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._values={},this._inputList.forEach((function(t){e._values[t.name]=t.value})),[this._values]}},{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(){e._handleSubmitForm(e._getInputValues(),e._buttonSave)})),C(A(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){C(A(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.userName,r=t.userAbout,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementName=document.querySelector(n),this._elementAbout=document.querySelector(r),this._elementAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._info={},this._info.name=this._elementName.textContent,this._info.about=this._elementAbout.textContent,this._info}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._elementName.textContent=t,this._elementAbout.textContent=n}},{key:"setAvatar",value:function(e){var t=e.avatar;this._elementAvatar.src=t}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getServerInfo",value:function(e){return fetch(this._url+e,{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"editServerProfileInfo",value:function(e,t,n){var r=this;return this._loading(n,!0),fetch(this._url+t,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).catch((function(e){return console.log(e)})).finally((function(){return r._loading(n,!1)}))}},{key:"addServerCard",value:function(e,t,n){var r=this;return this._loading(n,!0),fetch(this._url+t,{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).catch((function(e){return console.log(e)})).finally((function(){return r._loading(n,!1)}))}},{key:"deleteServerCard",value:function(e,t,n){var r=this;return this._loading(n,!0),fetch(this._url+t+"/".concat(e),{method:"DELETE",headers:this._headers}).catch((function(e){return console.log(e)})).finally((function(){return r._loading(n,!1)}))}},{key:"setServerLike",value:function(e){return fetch(this._url+"/cards/".concat(e)+"/likes",{method:"PUT",headers:this._headers}).catch((function(e){return console.log(e)}))}},{key:"removeServerLike",value:function(e){return fetch(this._url+"/cards/".concat(e)+"/likes",{method:"DELETE",headers:this._headers}).catch((function(e){return console.log(e)}))}},{key:"setServerAvatar",value:function(e,t,n){var r=this;return this._loading(n,!0),fetch(this._url+t+"/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).catch((function(e){return console.log(e)})).finally((function(){return r._loading(n,!1)}))}},{key:"_loading",value:function(e,t){e.textContent=t?"Сохранение...":"Сохранить"}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},N.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function J(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function a(e,t){var n,r=t.handleCardDelete;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleCardDelete=r,n}return t=a,(n=[{key:"open",value:function(e,t){N(H(a.prototype),"open",this).call(this),this._id=e,this._element=t,this._elementButton=this._popup.querySelector(".popup__save-button")}},{key:"setEventListeners",value:function(){var e=this;N(H(a.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__save-button").addEventListener("click",(function(){e._handleCardDelete(e._id,e._element,e._elementButton)}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=new V({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"16231cdf-2d24-4740-acd1-51d355ac1755","Content-Type":"application/json"}}),$=new T({userName:".profile__title",userAbout:".profile__subtitle",avatar:".profile__avatar-image"});Promise.all([G.getServerInfo(s),G.getServerInfo(l)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo({name:o.name,about:o.about}),$.setAvatar({avatar:o.avatar});var a=new d({items:i,renderer:function(e){e.likes.forEach((function(t){t._id===o._id&&(e.isLiked=!0)})),e.userId=o._id,a.addItem(re(e))}},".photo-grid");a.renderItems()}));var K=new E("#popupShowImg"),Q=new M("#popupDelete",{handleCardDelete:function(e,t,n){G.deleteServerCard(e,l,n).then((function(){t.remove(),Q.close()}))}}),W=new q("#popupEditProfile",{handleSubmitForm:function(e,t){G.editServerProfileInfo({name:e[0].name,about:e[0].about},s,t).then((function(){$.setUserInfo({name:e[0].name,about:e[0].about})})),W.close()}}),X=new q("#popupEditAvatar",{handleSubmitForm:function(e,t){G.setServerAvatar({avatar:e[0].link},s,t).then((function(){$.setAvatar({avatar:e[0].link}),X.close()}))}}),Y=new q("#popupAddCard",{handleSubmitForm:function(e,t){var n=new d({items:e,renderer:function(){}},".photo-grid");G.addServerCard(e[0],l,t),G.getServerInfo(l).then((function(t){e[0]._id=t[0]._id,e[0].likes=t[0].likes,e[0].owner={_id:t[0].owner._id},e[0].userId=t[0].owner._id,n.addItem(re(e[0]),!0),ee.disableSubmitButton(u),Y.close("#popupAddCard")}))}});Q.setEventListeners(),K.setEventListeners(),W.setEventListeners(),Y.setEventListeners(),X.setEventListeners();var Z=new o(f,"#popupEditForm"),ee=new o(f,"#popupAddForm"),te=new o(f,"#popupEditAvatar");function ne(e,t,n,r){e.classList.toggle("item__icon_active"),e.classList.contains("item__icon_active")?G.setServerLike(t).then(n.textContent=r+1):G.removeServerLike(t).then((function(){n.textContent=r-1}))}function re(e){return new t(e,"#photoGrid",oe,ie,ne).generateCard()}function oe(e,t){K.open(e,t)}function ie(e,t){Q.open(e,t)}Z.enableValidation(),ee.enableValidation(),te.enableValidation(),i.addEventListener("click",(function(){return W.setInputValues($.getUserInfo()),Z.resetValidation(),void W.open()})),a.addEventListener("click",(function(){return ee.resetValidation(),void Y.open()})),c.addEventListener("click",(function(){return te.resetValidation(),void X.open()}))})();