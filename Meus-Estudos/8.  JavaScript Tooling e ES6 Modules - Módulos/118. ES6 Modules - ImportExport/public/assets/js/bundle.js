/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pessoa),
/* harmony export */   enderecoObj: () => (/* binding */ enderecoObj),
/* harmony export */   idade: () => (/* binding */ idade),
/* harmony export */   nome2: () => (/* binding */ nome),
/* harmony export */   sobrenome: () => (/* binding */ sobrenome),
/* harmony export */   soma: () => (/* binding */ soma)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// Definindo variáveis para armazenar informações pessoais
var nome = 'Jonh'; // Primeiro nome da pessoa
var sobrenome = 'Doe'; // Sobrenome da pessoa
var idade = 28; // Idade da pessoa
var cpf = '103.198.128 - 00'; // CPF da pessoa

// Exportando um objeto com informações de endereço
var enderecoObj = {
  rua: 'Rua tal',
  numero: 344
};

// Definindo uma função de soma
function soma(x, y) {
  return x + y;
}

// Exportando a classe Pessoa
var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome, endereco) {
  _classCallCheck(this, Pessoa);
  this.nome = nome; // Nome da pessoa
  this.sobrenome = sobrenome; // Sobrenome da pessoa
  this.endereco = endereco; // Endereço da pessoa
}); // Exportando variáveis adicionais e renomeando uma delas



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
// Importando todo o módulo1 e armazenando-o em um objeto chamado meuModulo


// Importando a exportação padrão do módulo1 e atribuindo-a à variável padrao


// Importando exportações específicas do módulo1


// Definindo uma variável local
var nome = 'Joana';

// Imprimindo no console informações pessoais
console.log(nome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.nome2, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.idade);

// Imprimindo a soma de dois números
console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.soma)(10, 5));

// Imprimindo informações de endereço
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.enderecoObj);

// Imprimindo todo o módulo1
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__);

// Criando uma nova instância da classe Pessoa utilizando a exportação padrão do módulo1
var pessoa = new _modulo1__WEBPACK_IMPORTED_MODULE_0__["default"](_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome2, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.enderecoObj);
console.log(pessoa);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map