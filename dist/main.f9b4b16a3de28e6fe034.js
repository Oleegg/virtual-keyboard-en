/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var isCaps = false,
    isLang = false;
var body = document.querySelector('body');
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.append(wrapper);
var heading = document.createElement('h1');
heading.textContent = 'My virtual keyboard';
wrapper.append(heading);
var textarea = document.createElement('textarea');
textarea.classList.add('text');
wrapper.append(textarea);
var keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard); //======class===========

var result = [];

var KeysLetter = /*#__PURE__*/function () {
  function KeysLetter(En, en, Ru, ru, code) {
    var name = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'name';

    _classCallCheck(this, KeysLetter);

    this.En = En;
    this.en = en;
    this.Ru = Ru;
    this.ru = ru;
    this.code = code;
    this.name = name;
  }

  _createClass(KeysLetter, [{
    key: "addLetter",
    value: function addLetter(En, en, Ru, ru, code, name) {
      var letter = new KeysLetter(En, en, Ru, ru, code, name);
      result.push(letter);
    }
  }, {
    key: "addSpec",
    value: function addSpec(le, cod, name) {
      le = new KeysLetter(le, le, le, le, cod, name);
      result.push(le);
    }
  }, {
    key: "addFocusCursor",
    value: function addFocusCursor(e, type) {
      var textar = document.querySelector('.text');
      var cursor = textar.selectionStart;
      e.preventDefault();
      textar.focus();
      var x, y, z, a;

      if (type == 'Tab') {
        x = '    ';
        y = 4;
        z = 0;
        a = 0;
      } else if (type == 'Backspace') {
        if (textar.selectionStart !== textar.selectionEnd) {
          textar.value = textar.value.slice(0, textar.selectionStart) + textar.value.slice(textar.selectionEnd);
          textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd));
          return focus;
        } else {
          x = '';
          y = -1;
          z = 1;
          a = 0;
        }
      } else if (type == 'Space') {
        x = ' ';
        y = 1;
        z = 0;
        a = 0;
      } else if (type == 'Del') {
        if (textar.selectionStart !== textar.selectionEnd) {
          textar.value = textar.value.slice(0, textar.selectionStart) + textar.value.slice(textar.selectionEnd);
          textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd));
          return focus;
        } else {
          x = '';
          y = 1;
          z = 0;
          a = 1;
        }
      } else if (type == 'Enter') {
        textar.value = textar.value.slice(0, cursor) + '\n' + textar.value.slice(cursor);
        textar.setSelectionRange(cursor + 1, cursor + 1);
        return focus;
      } else if (type == 'Win' || type == 'Shift' || type == 'Alt' || type == 'Ctrl' || type == 'AltGraph') {
        x = '';
        y = 0;
        z = 0;
        a = 0;
      } else if (type == 'ArrowLeft') {
        x = '←';
        y = 1;
        z = 0;
        a = 0;
      } else if (type == 'ArrowUp') {
        x = '↑';
        y = 1;
        z = 0;
        a = 0;
      } else if (type == 'ArrowRight') {
        x = '→';
        y = 1;
        z = 0;
        a = 0;
      } else if (type == 'ArrowDown') {
        x = '↓';
        y = 1;
        z = 0;
        a = 0;
      } else {
        if (isCaps) {
          if (textar.selectionStart !== textar.selectionEnd) {
            textar.value = textar.value.slice(0, textar.selectionStart) + type.toUpperCase() + textar.value.slice(textar.selectionEnd);
            textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd));
            return focus;
          } else {
            if (e.key == '`') {
              x = '~';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 1) {
              x = '!';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 2) {
              x = '@';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 3) {
              x = '#';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 4) {
              x = '$';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 5) {
              x = '%';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 6) {
              x = '^';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 7) {
              x = '&';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 8) {
              x = '*';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 9) {
              x = '(';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == 0) {
              x = ')';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == '-') {
              x = '_';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == '=') {
              x = '+';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == '[') {
              x = '{';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == ']') {
              x = '}';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == '\\') {
              x = '|';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == ';') {
              x = ':';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == '\'') {
              x = '"';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == ',') {
              x = '<';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == '.') {
              x = '>';
              y = 1;
              z = 0;
              a = 0;
            } else if (e.key == '/') {
              x = '?';
              y = 1;
              z = 0;
              a = 0;
            } else {
              x = type.toUpperCase();
              y = 1;
              z = 0;
              a = 0;
            }
          }
        } else {
          if (textar.selectionStart !== textar.selectionEnd) {
            textar.value = textar.value.slice(0, textar.selectionStart) + type + textar.value.slice(textar.selectionEnd);
            textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd));
            return focus;
          } else {
            x = type;
            y = 1;
            z = 0;
            a = 0;
          }
        }
      }

      textar.value = textar.value.slice(0, cursor - z) + x + textar.value.slice(cursor + a);
      textar.setSelectionRange(cursor + y, cursor + y - a);
      return focus;
    }
  }, {
    key: "addAffect",
    value: function addAffect(e, eff, key) {
      if (eff == 'mousedown') {
        key.classList.add('back');

        if (key.innerHTML == 'Tab') {
          this.addFocusCursor(e, 'Tab');
        } else if (key.innerHTML == 'Enter') {
          this.addFocusCursor(e, 'Enter');
        } else if (key.innerHTML == 'Backspace') {
          this.addFocusCursor(e, 'Backspace');
        } else if (key.innerHTML == 'Del') {
          this.addFocusCursor(e, 'Del');
        } else if (key.innerHTML == 'CapsLock') {
          this.clearKeys();

          if (!isLang) {
            if (!isCaps) {
              this.showKeys('En');
              document.querySelectorAll('.keylong')[1].classList.add('back');
              isCaps = !isCaps;
            } else {
              this.showKeys('en');
              document.querySelectorAll('.keylong')[1].classList.remove('back');
              isCaps = !isCaps;
            }
          } else {
            if (!isCaps) {
              this.showKeys('Ru');
              document.querySelectorAll('.keylong')[1].classList.add('back');
              isCaps = !isCaps;
            } else {
              this.showKeys('ru');
              document.querySelectorAll('.keylong')[1].classList.remove('back');
              isCaps = !isCaps;
            }
          }
        } else if (key.innerHTML == 'Space') {
          this.addFocusCursor(e, 'Space');
        } else if (key.innerHTML == 'Shift') {
          this.clearKeys();

          if (!isLang) {
            if (!isCaps) {
              this.showKeys('En');
              isCaps = !isCaps;
            } else {
              this.showKeys('en');
              isCaps = !isCaps;
            }
          } else {
            if (!isCaps) {
              this.showKeys('Ru');
              isCaps = !isCaps;
            } else {
              this.showKeys('ru');
              isCaps = !isCaps;
            }
          }
        } else {
          this.addFocusCursor(e, key.innerHTML);
        }
      } else {
        if (key.innerHTML == 'Shift') {
          this.clearKeys();

          if (!isLang) {
            if (!isCaps) {
              this.showKeys('En');
              isCaps = !isCaps;
            } else {
              this.showKeys('en');
              isCaps = !isCaps;
            }
          } else {
            if (!isCaps) {
              this.showKeys('Ru');
              isCaps = !isCaps;
            } else {
              this.showKeys('ru');
              isCaps = !isCaps;
            }
          }
        } else if (!isCaps) {
          key.classList.remove('back'); // document.querySelectorAll('.keylong')[1].classList.add('back')
        }
      }
    } //======clear=====

  }, {
    key: "clearKeys",
    value: function clearKeys() {
      keyboard.innerHTML = ' ';
    } //=======add keys=========

  }, {
    key: "showKeys",
    value: function showKeys() {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      console.log(result);
      result.forEach(function (el) {
        var key = document.createElement('div');
        key.addEventListener('mousedown', function (e) {
          return word.addAffect(e, 'mousedown', key);
        });
        key.addEventListener('mouseup', function (e) {
          return word.addAffect(e, 'mouseup', key);
        });
        key.classList.add('key');

        if (el.code == 38) {
          key.innerHTML = '&#8593;';
        } else if (el.code == 37) {
          key.innerHTML = '&#8592;';
        } else if (el.code == 39) {
          key.innerHTML = '&#8594;';
        } else if (el.code == 40) {
          key.innerHTML = '&#8595;';
        } else if (el.En == 'Control') {
          key.innerHTML = 'Ctrl';
        } else if (el.En == 'Meta') {
          key.innerHTML = 'Win';
        } else if (el.En == 'Delete') {
          key.innerHTML = 'Del';
        } else {
          key.innerHTML = el[lang];
        }

        keyboard.append(key);

        if (el.En == 'Backspace' || el.En == 'Delete' || el.En == 'Enter' || el.name == 'ShiftRight') {
          var clear = document.createElement('div');
          clear.classList.add('clear');
          keyboard.append(clear);
        }

        if (el.En == 'Enter' || el.En == 'Backspace' || el.En == 'CapsLock' || el.En == 'Shift') {
          key.classList.add('keylong');
        }

        if (el.En == 'Tab') {
          key.classList.add('litle-keylong');
        }

        if (el.En == 'Space') {
          key.classList.add('long-keylong');
        }
      });
    }
  }]);

  return KeysLetter;
}(); //=======cancel class=========


var word = new KeysLetter();
word.addLetter('~', '`', 'Ё', 'ё', 192, 'Backquote');
word.addLetter('!', 1, '!', 1, 49, 'Digit1');
word.addLetter('@', 2, '@', 2, 50, 'Digit2');
word.addLetter('#', 3, '#', 3, 51, 'Digit3');
word.addLetter('$', 4, '$', 4, 52, 'Digit4');
word.addLetter('%', 5, '%', 5, 53, 'Digit5');
word.addLetter('^', 6, '^', 6, 54, 'Digit6');
word.addLetter('&', 7, '&', 7, 55, 'Digit7');
word.addLetter('*', 8, '*', 8, 56, 'Digit8');
word.addLetter('(', 9, '(', 9, 57, 'Digit9');
word.addLetter(')', 0, ')', 0, 58, 'Digit0');
word.addLetter('_', '-', '_', '-', 189, 'Minus');
word.addLetter('+', '=', '+', '=', 187, 'Equal');
word.addSpec('Backspace', 8, 'Backspace');
word.addSpec('Tab', 9, 'Tab');
word.addLetter('Q', 'q', 'Й', 'й', 81, 'KeyQ');
word.addLetter('W', 'w', 'Ц', 'ц', 87, 'KeyW');
word.addLetter('E', 'e', 'У', 'у', 69, 'KeyE');
word.addLetter('R', 'r', 'К', 'к', 82, 'KeyR');
word.addLetter('T', 't', 'Е', 'е', 84, 'KeyT');
word.addLetter('Y', 'y', 'Н', 'н', 89, 'KeyY');
word.addLetter('U', 'u', 'Г', 'г', 85, 'KeyU');
word.addLetter('I', 'i', 'Ш', 'ш', 73, 'KeyI');
word.addLetter('O', 'o', 'Щ', 'щ', 79, 'KeyO');
word.addLetter('P', 'p', 'З', 'з', 80, 'KeyP');
word.addLetter('{', '[', 'Х', 'х', 219, 'BracketLeft');
word.addLetter('}', ']', 'Ъ', 'ъ', 221, 'BracketRight');
word.addLetter('|', '\\', '|', '\\', 220, 'Backslash');
word.addSpec('Delete', 46, 'Delete');
word.addSpec('CapsLock', 20, 'CapsLock');
word.addLetter('A', 'a', 'Ф', 'ф', 65, 'KeyA');
word.addLetter('S', 's', 'Ы', 'ы', 83, 'KeyS');
word.addLetter('D', 'd', 'В', 'в', 68, 'KeyD');
word.addLetter('F', 'f', 'А', 'а', 70, 'KeyF');
word.addLetter('G', 'g', 'П', 'п', 71, 'KeyG');
word.addLetter('H', 'h', 'Р', 'р', 72, 'KeyH');
word.addLetter('J', 'j', 'О', 'о', 74, 'KeyJ');
word.addLetter('K', 'k', 'Л', 'л', 75, 'KeyK');
word.addLetter('L', 'l', 'Д', 'д', 76, 'KeyL');
word.addLetter(':', ';', 'Ж', 'ж', 186, 'Semicolon');
word.addLetter('"', '\'', 'Э', 'э', 186, 'Quote');
word.addSpec('Enter', 13, 'Enter');
word.addSpec('Shift', 16, 'ShiftLeft');
word.addLetter('Z', 'z', 'Я', 'я', 90, 'KeyZ');
word.addLetter('X', 'x', 'Ч', 'ч', 88, 'KeyX');
word.addLetter('C', 'c', 'С', 'с', 67, 'KeyC');
word.addLetter('V', 'v', 'М', 'м', 86, 'KeyV');
word.addLetter('B', 'b', 'И', 'и', 66, 'KeyB');
word.addLetter('N', 'n', 'Т', 'т', 78, 'KeyN');
word.addLetter('M', 'm', 'Ь', 'ь', 77, 'KeyM');
word.addLetter('<', ',', 'Б', 'б', 188, 'Comma');
word.addLetter('>', '.', 'Ю', 'ю', 190, 'Period');
word.addLetter('?', '/', ',', '.', 191, 'Slash');
word.addSpec('ArrowUp', 38, 'ArrowUp');
word.addSpec('Shift', 16, 'ShiftRight');
word.addSpec('Control', 17, 'ControlLeft');
word.addSpec('Meta', 91, 'MetaLeft');
word.addSpec('Alt', 18, 'AltLeft');
word.addSpec('Space', 32, 'Space');
word.addSpec('Alt', 18, 'AltRight');
word.addSpec('ArrowLeft', 37, 'ArrowLeft');
word.addSpec('ArrowDown', 40, 'ArrowDown');
word.addSpec('ArrowRight', 39, 'ArrowRight');
word.addSpec('Control', 17, 'ControlRight');
word.showKeys(); //======KEYBOARD =================

document.addEventListener('keydown', function (e) {
  return addAffectInKey(e, 'keydown');
});
document.addEventListener('keyup', function (e) {
  return addAffectInKey(e, 'keyup');
}); //=======languegues change=========

var press = new Set();

function addAffectInKey(e, affect) {
  console.log(e);

  if (affect == 'keydown') {
    e.preventDefault();
    var keyys = document.querySelectorAll('.key');

    if (e.key == 'CapsLock') {
      word.clearKeys();

      if (!isLang) {
        if (!isCaps) {
          word.showKeys('En');
          document.querySelectorAll('.keylong')[1].classList.add('back');
          console.log(document.querySelectorAll('.keylong')[1]);
          isCaps = !isCaps;
        } else {
          word.showKeys('en');
          document.querySelectorAll('.keylong')[1].classList.remove('back');
          console.log([document.querySelectorAll('.keylong')[1], 2]);
          isCaps = !isCaps;
        }
      } else {
        if (!isCaps) {
          word.showKeys('Ru');
          document.querySelectorAll('.keylong')[1].classList.add('back');
          console.log([document.querySelectorAll('.keylong')[1], 3]);
          isCaps = !isCaps;
        } else {
          word.showKeys('ru');
          document.querySelectorAll('.keylong')[1].classList.remove('back');
          console.log([document.querySelectorAll('.keylong')[1], 4]);
          isCaps = !isCaps;
        }
      }

      return null;
    }

    keyys.forEach(function (el) {
      if (e.key == 'Meta') {
        if (el.innerHTML == 'Win') {
          el.classList.add('back');
        }
      }

      if (isCaps) {
        if (e.key == '`') {
          if (el.innerHTML == '~') {
            el.classList.add('back');
          }
        } else if (e.key == '1') {
          if (el.innerHTML == '!') {
            el.classList.add('back');
          }
        } else if (e.key == '2') {
          if (el.innerHTML == '@') {
            el.classList.add('back');
          }
        } else if (e.key == '3') {
          if (el.innerHTML == '#') {
            el.classList.add('back');
          }
        } else if (e.key == '4') {
          if (el.innerHTML == '$') {
            el.classList.add('back');
          }
        } else if (e.key == '5') {
          if (el.innerHTML == '%') {
            el.classList.add('back');
          }
        } else if (e.key == '6') {
          if (el.innerHTML == '^') {
            el.classList.add('back');
          }
        } else if (e.key == '7') {
          if (el.innerHTML == '&amp;') {
            el.classList.add('back');
          }
        } else if (e.key == '8') {
          if (el.innerHTML == '*') {
            el.classList.add('back');
          }
        } else if (e.key == '9') {
          if (el.innerHTML == '(') {
            el.classList.add('back');
          }
        } else if (e.key == '0') {
          if (el.innerHTML == ')') {
            el.classList.add('back');
          }
        } else if (e.key == '-') {
          if (el.innerHTML == '_') {
            el.classList.add('back');
          }
        } else if (e.key == '=') {
          if (el.innerHTML == '+') {
            el.classList.add('back');
          }
        } else if (e.key == '[') {
          if (el.innerHTML == '{') {
            el.classList.add('back');
          }
        } else if (e.key == ']') {
          if (el.innerHTML == '}') {
            el.classList.add('back');
          }
        } else if (e.key == '\\') {
          if (el.innerHTML == '|') {
            el.classList.add('back');
          }
        } else if (e.key == ';') {
          if (el.innerHTML == ':') {
            el.classList.add('back');
          }
        } else if (e.key == '\'') {
          if (el.innerHTML == '"') {
            el.classList.add('back');
          }
        } else if (e.key == ',') {
          if (el.innerHTML == '&lt;') {
            el.classList.add('back');
          }
        } else if (e.key == '.') {
          if (el.innerHTML == '&gt;') {
            el.classList.add('back');
          }
        } else if (e.key == '/') {
          if (el.innerHTML == '?') {
            el.classList.add('back');
          }
        }

        if (e.key == 'ArrowLeft') {
          if (el.innerHTML == '←') {
            el.classList.add('back');
          }
        } else if (e.key == 'ArrowRight') {
          if (el.innerHTML == '→') {
            el.classList.add('back');
          }
        } else if (e.key == 'ArrowUp') {
          if (el.innerHTML == '↑') {
            el.classList.add('back');
          }
        } else if (e.key == 'ArrowDown') {
          if (el.innerHTML == '↓') {
            el.classList.add('back');
          }
        } else if (e.key == 'Control') {
          if (el.innerHTML == 'Ctrl') {
            el.classList.add('back');
          }
        } else if (e.key == 'Delete') {
          if (el.innerHTML == 'Del') {
            el.classList.add('back');
          }
        } else if (e.key == ' ') {
          if (el.innerHTML == 'Space') {
            el.classList.add('back');
          }
        } else if (el.innerHTML.toLowerCase() == e.key || el.innerHTML == e.key) {
          el.classList.add('back');
        }
      } else {
        if (e.key == 'ArrowLeft') {
          if (el.innerHTML == '←') {
            el.classList.add('back');
          }
        } else if (e.key == 'ArrowRight') {
          if (el.innerHTML == '→') {
            el.classList.add('back');
          }
        } else if (e.key == 'ArrowUp') {
          if (el.innerHTML == '↑') {
            el.classList.add('back');
          }
        } else if (e.key == 'ArrowDown') {
          if (el.innerHTML == '↓') {
            el.classList.add('back');
          }
        } else if (e.key == 'Control') {
          if (el.innerHTML == 'Ctrl') {
            el.classList.add('back');
          }
        } else if (e.key == 'Delete') {
          if (el.innerHTML == 'Del') {
            el.classList.add('back');
          }
        } else if (e.key == ' ') {
          if (el.innerHTML == 'Space') {
            el.classList.add('back');
          }
        }

        if (el.innerHTML == e.key || e.code == el.innerHTML) {
          el.classList.add('back');
        }
      }
    }); //=====change lang==========

    if (e.code == 'ShiftLeft' || e.code == 'AltLeft') {
      press.add(e.code);
    }

    if (press.has('ShiftLeft') && press.has('AltLeft')) {
      if (isLang) {
        if (isCaps) {
          word.clearKeys();
          word.showKeys('En');
          document.querySelectorAll('.keylong')[1].classList.add('back');
        } else {
          word.clearKeys();
          word.showKeys('en');
        }

        isLang = !isLang;
      } else {
        if (isCaps) {
          word.clearKeys();
          word.showKeys('Ru');
          document.querySelectorAll('.keylong')[1].classList.add('back');
        } else {
          word.clearKeys();
          word.showKeys('ru');
        }

        isLang = !isLang;
      }
    } //===all keys========


    if (e.key == 'Tab') {
      word.addFocusCursor(e, 'Tab');
    } else if (e.key == ' ') {
      word.addFocusCursor(e, 'Space');
    } else if (e.key == 'Enter') {
      word.addFocusCursor(e, 'Enter');
    } else if (e.key == 'Backspace') {
      word.addFocusCursor(e, 'Backspace');
    } else if (e.key == 'Delete') {
      word.addFocusCursor(e, 'Del');
    } else if (e.key == 'ArrowLeft') {
      word.addFocusCursor(e, 'ArrowLeft');
    } else if (e.key == 'ArrowUp') {
      word.addFocusCursor(e, 'ArrowUp');
    } else if (e.key == 'ArrowDown') {
      word.addFocusCursor(e, 'ArrowDown');
    } else if (e.key == 'ArrowRight') {
      word.addFocusCursor(e, 'ArrowRight');
    } else if (e.key == 'CapsLock' || e.key == 'Shift' || e.key == 'Alt' || e.key == 'Meta' || e.key == 'Escape' || e.key == 'AudioVolumeMute' || e.key == 'AudioVolumeDown' || e.key == 'AudioVolumeUp' || e.key == 'Insert' || e.key == 'Control' || e.key == 'F1' || e.key == 'F2' || e.key == 'F3' || e.key == 'F4' || e.key == 'F5' || e.key == 'F6' || e.key == 'F7' || e.key == 'F8' || e.key == 'F9' || e.key == 'F10' || e.key == 'F11' || e.key == 'F12' || e.key == 'AltGraph') {
      return null;
    } else {
      word.addFocusCursor(e, e.key);
    }
  } else {
    var _keyys = document.querySelectorAll('.key');

    _keyys.forEach(function (el) {
      if (e.key == 'Meta') {
        if (el.innerHTML == 'Win') {
          el.classList.remove('back');
        }
      }

      if (isCaps) {
        if (isCaps) {
          if (e.key == '`') {
            if (el.innerHTML == '~') {
              el.classList.remove('back');
            }
          } else if (e.key == '1') {
            if (el.innerHTML == '!') {
              el.classList.remove('back');
            }
          } else if (e.key == '2') {
            if (el.innerHTML == '@') {
              el.classList.remove('back');
            }
          } else if (e.key == '3') {
            if (el.innerHTML == '#') {
              el.classList.remove('back');
            }
          } else if (e.key == '4') {
            if (el.innerHTML == '$') {
              el.classList.remove('back');
            }
          } else if (e.key == '5') {
            if (el.innerHTML == '%') {
              el.classList.remove('back');
            }
          } else if (e.key == '6') {
            if (el.innerHTML == '^') {
              el.classList.remove('back');
            }
          } else if (e.key == '7') {
            if (el.innerHTML == '&amp;') {
              el.classList.remove('back');
            }
          } else if (e.key == '8') {
            if (el.innerHTML == '*') {
              el.classList.remove('back');
            }
          } else if (e.key == '9') {
            if (el.innerHTML == '(') {
              el.classList.remove('back');
            }
          } else if (e.key == '0') {
            if (el.innerHTML == ')') {
              el.classList.remove('back');
            }
          } else if (e.key == '-') {
            if (el.innerHTML == '_') {
              el.classList.remove('back');
            }
          } else if (e.key == '=') {
            if (el.innerHTML == '+') {
              el.classList.remove('back');
            }
          } else if (e.key == '[') {
            if (el.innerHTML == '{') {
              el.classList.remove('back');
            }
          } else if (e.key == ']') {
            if (el.innerHTML == '}') {
              el.classList.remove('back');
            }
          } else if (e.key == '\\') {
            if (el.innerHTML == '|') {
              el.classList.remove('back');
            }
          } else if (e.key == ';') {
            if (el.innerHTML == ':') {
              el.classList.remove('back');
            }
          } else if (e.key == '\'') {
            if (el.innerHTML == '"') {
              el.classList.remove('back');
            }
          } else if (e.key == ',') {
            if (el.innerHTML == '&lt;') {
              el.classList.remove('back');
            }
          } else if (e.key == '.') {
            if (el.innerHTML == '&gt;') {
              el.classList.remove('back');
            }
          } else if (e.key == '/') {
            if (el.innerHTML == '?') {
              el.classList.remove('back');
            }
          } else if (e.key == 'ArrowLeft') {
            if (el.innerHTML == '←') {
              el.classList.remove('back');
            }
          } else if (e.key == 'ArrowRight') {
            if (el.innerHTML == '→') {
              el.classList.remove('back');
            }
          } else if (e.key == 'ArrowUp') {
            if (el.innerHTML == '↑') {
              el.classList.remove('back');
            }
          } else if (e.key == 'ArrowDown') {
            if (el.innerHTML == '↓') {
              el.classList.remove('back');
            }
          } else if (e.key == 'Control') {
            if (el.innerHTML == 'Ctrl') {
              el.classList.remove('back');
            }
          } else if (e.key == 'Delete') {
            if (el.innerHTML == 'Del') {
              el.classList.remove('back');
            }
          } else if (e.key == ' ') {
            if (el.innerHTML == 'Space') {
              el.classList.remove('back');
            }
          } else if (el.innerHTML.toLowerCase() == e.key || el.innerHTML == e.key) {
            el.classList.remove('back');
            document.querySelectorAll('.keylong')[1].classList.add('back');
          }
        }
      } else {
        if (e.key == 'ArrowLeft') {
          if (el.innerHTML == '←') {
            el.classList.remove('back');
          }
        } else if (e.key == 'ArrowRight') {
          if (el.innerHTML == '→') {
            el.classList.remove('back');
          }
        } else if (e.key == 'ArrowUp') {
          if (el.innerHTML == '↑') {
            el.classList.remove('back');
          }
        } else if (e.key == 'ArrowDown') {
          if (el.innerHTML == '↓') {
            el.classList.remove('back');
          }
        } else if (e.key == 'Control') {
          if (el.innerHTML == 'Ctrl') {
            el.classList.remove('back');
          }
        }

        if (el.innerHTML == e.key || e.code == el.innerHTML) {
          el.classList.remove('back');
        }
      }
    });

    if (press.has('ShiftLeft') || press.has('AltLeft')) {
      press.clear();
    }
  }
} //=========remove syles ==========


wrapper.addEventListener('mouseup', function () {
  var keyys = document.querySelectorAll('.key');

  if (!isCaps) {
    keyys.forEach(function (el) {
      return el.classList.remove('back');
    });
  } else {
    keyys.forEach(function (el) {
      if (el.innerHTML !== 'CapsLock') {
        el.classList.remove('back');
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* eslint-env browser */

/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */
var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");

var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;
/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */

function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this; // eslint-disable-next-line prefer-rest-params

    var args = arguments;

    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };

    clearTimeout(timeout); // @ts-ignore

    timeout = setTimeout(functionCall, time);
  };
}

function noop() {}
/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */


function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];

  if (!src) {
    if (document.currentScript) {
      src =
      /** @type {HTMLScriptElement} */
      document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];

      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }

    srcByModuleId[moduleId] = src;
  }
  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */


  return function (fileMap) {
    if (!src) {
      return null;
    }

    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];

    if (!filename) {
      return [src.replace(".js", ".css")];
    }

    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }

    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}
/**
 * @param {TODO} el
 * @param {string} [url]
 */


function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    } // eslint-disable-next-line


    url = el.href.split("?")[0];
  }

  if (!isUrlRequest(
  /** @type {string} */
  url)) {
    return;
  }

  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }

  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  } // eslint-disable-next-line no-param-reassign


  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());

  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}
/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */


function getReloadUrl(href, src) {
  var ret; // eslint-disable-next-line no-param-reassign

  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}
/**
 * @param {string} [src]
 * @returns {boolean}
 */


function reloadStyle(src) {
  if (!src) {
    return false;
  }

  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }

    var url = getReloadUrl(el.href, src);

    if (!isUrlRequest(url)) {
      return;
    }

    if (el.visited === true) {
      return;
    }

    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}

function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }

    updateCss(el);
  });
}
/**
 * @param {string} url
 * @returns {boolean}
 */


function isUrlRequest(url) {
  // An URL is not an request if
  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }

  return true;
}
/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */


module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }

  var getScriptSrc = getCurrentScriptUrl(moduleId);

  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);

    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }

    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }

  return debounce(update, 50);
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {



/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;

      case ".":
        break;

      default:
        accumulator.push(item);
    }

    return accumulator;
  },
  /** @type {string[]} */
  []).join("/");
}
/**
 * @param {string} urlString
 * @returns {string}
 */


module.exports = function (urlString) {
  urlString = urlString.trim();

  if (/^data:/i.test(urlString)) {
    return urlString;
  }

  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1652107348025
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1652107348017
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("df87f98f189e5af35581")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.f9b4b16a3de28e6fe034.js.map