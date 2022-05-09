import './styles/normalize.css'
import './styles/style.scss'
let isCaps = false,
    isLang = false
const body = document.querySelector('body')
const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
body.append(wrapper)
const heading = document.createElement('h1')
heading.textContent = 'My virtual keyboard'

wrapper.append(heading)
const textarea = document.createElement('textarea')
textarea.classList.add('text')
wrapper.append(textarea)
const keyboard = document.createElement('div')
keyboard.classList.add('keyboard')
wrapper.append(keyboard)

//======class===========

const result = []

class KeysLetter {
    constructor(En, en, Ru, ru, code, name = 'name') {
        this.En = En
        this.en = en
        this.Ru = Ru
        this.ru = ru
        this.code = code
        this.name = name
    }
    addLetter(En, en, Ru, ru, code, name) {
        const letter = new KeysLetter(En, en, Ru, ru, code, name)
        result.push(letter)
    }
    addSpec(le, cod, name) {
        le = new KeysLetter(le, le, le, le, cod, name)
        result.push(le)
    }
    addFocusCursor(e, type) {
        let textar = document.querySelector('.text')
        let cursor = textar.selectionStart
        e.preventDefault()
        textar.focus()
        let x, y, z, a
        if (type == 'Tab') {
            x = '    '
            y = 4
            z = 0
            a = 0
        } else if (type == 'Backspace') {
            if (textar.selectionStart !== textar.selectionEnd) {
                textar.value = textar.value.slice(0, textar.selectionStart) + textar.value.slice(textar.selectionEnd)
                textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd))
                return focus
            } else {
                x = ''
                y = -1
                z = 1
                a = 0
            }
        } else if (type == 'Space') {
            x = ' '
            y = 1
            z = 0
            a = 0
        } else if (type == 'Del') {
            if (textar.selectionStart !== textar.selectionEnd) {
                textar.value = textar.value.slice(0, textar.selectionStart) + textar.value.slice(textar.selectionEnd)
                textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd))
                return focus
            } else {
                x = ''
                y = 1
                z = 0
                a = 1
            }
        } else if (type == 'Enter') {
            textar.value = textar.value.slice(0, cursor) + '\n' + textar.value.slice(cursor)
            textar.setSelectionRange(cursor + 1, cursor + 1)
            return focus
        } else if (type == 'Win' || type == 'Shift' || type == 'Alt' || type == 'Ctrl' || type == 'AltGraph') {
            x = ''
            y = 0
            z = 0
            a = 0
        } else if (type == 'ArrowLeft') {
            x = '←'
            y = 1
            z = 0
            a = 0
        } else if (type == 'ArrowUp') {
            x = '↑'
            y = 1
            z = 0
            a = 0
        } else if (type == 'ArrowRight') {
            x = '→'
            y = 1
            z = 0
            a = 0
        } else if (type == 'ArrowDown') {
            x = '↓'
            y = 1
            z = 0
            a = 0
        } else {
            if (isCaps) {
                if (textar.selectionStart !== textar.selectionEnd) {
                    textar.value = textar.value.slice(0, textar.selectionStart) + type.toUpperCase() + textar.value.slice(textar.selectionEnd)
                    textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd))
                    return focus
                } else {
                    if (e.key == '`') {
                        x = '~'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 1) {
                        x = '!'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 2) {
                        x = '@'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 3) {
                        x = '#'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 4) {
                        x = '$'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 5) {
                        x = '%'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 6) {
                        x = '^'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 7) {
                        x = '&'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 8) {
                        x = '*'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 9) {
                        x = '('
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == 0) {
                        x = ')'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '-') {
                        x = '_'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '=') {
                        x = '+'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '[') {
                        x = '{'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == ']') {
                        x = '}'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '\\') {
                        x = '|'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == ';') {
                        x = ':'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '\'') {
                        x = '"'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == ',') {
                        x = '<'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '.') {
                        x = '>'
                        y = 1
                        z = 0
                        a = 0
                    } else if (e.key == '/') {
                        x = '?'
                        y = 1
                        z = 0
                        a = 0
                    } else {
                        x = type.toUpperCase()
                        y = 1
                        z = 0
                        a = 0
                    }
                }
            } else {
                if (textar.selectionStart !== textar.selectionEnd) {
                    textar.value = textar.value.slice(0, textar.selectionStart) + type + textar.value.slice(textar.selectionEnd)
                    textar.setSelectionRange(cursor - (textar.selectionStart - textar.selectionEnd), cursor - (textar.selectionStart - textar.selectionEnd))
                    return focus
                } else {
                    x = type
                    y = 1
                    z = 0
                    a = 0
                }
            }
        }
        textar.value = textar.value.slice(0, cursor - z) + x + textar.value.slice(cursor + a)
        textar.setSelectionRange(cursor + y, cursor + y - a)
        return focus
    }

    addAffect(e, eff, key) {
        if (eff == 'mousedown') {
            key.classList.add('back')
            if (key.innerHTML == 'Tab') {
                this.addFocusCursor(e, 'Tab')
            } else if (key.innerHTML == 'Enter') {
                this.addFocusCursor(e, 'Enter')
            } else if (key.innerHTML == 'Backspace') {
                this.addFocusCursor(e, 'Backspace')
            } else if (key.innerHTML == 'Del') {
                this.addFocusCursor(e, 'Del')
            } else if (key.innerHTML == 'CapsLock') {
                this.clearKeys()
                if (!isLang) {
                    if (!isCaps) {
                        this.showKeys('En')
                        document.querySelectorAll('.keylong')[1].classList.add('back')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('en')
                        document.querySelectorAll('.keylong')[1].classList.remove('back')
                        isCaps = !isCaps
                    }
                } else {
                    if (!isCaps) {
                        this.showKeys('Ru')
                        document.querySelectorAll('.keylong')[1].classList.add('back')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('ru')
                        document.querySelectorAll('.keylong')[1].classList.remove('back')
                        isCaps = !isCaps
                    }
                }
            } else if (key.innerHTML == 'Space') {
                this.addFocusCursor(e, 'Space')
            } else if (key.innerHTML == 'Shift') {
                this.clearKeys()
                if (!isLang) {
                    if (!isCaps) {
                        this.showKeys('En')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('en')
                        isCaps = !isCaps
                    }
                } else {
                    if (!isCaps) {
                        this.showKeys('Ru')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('ru')
                        isCaps = !isCaps
                    }
                }
            } else {
                this.addFocusCursor(e, key.innerHTML)
            }
        } else {
            if (key.innerHTML == 'Shift') {
                this.clearKeys()
                if (!isLang) {
                    if (!isCaps) {
                        this.showKeys('En')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('en')
                        isCaps = !isCaps
                    }
                } else {
                    if (!isCaps) {
                        this.showKeys('Ru')
                        isCaps = !isCaps
                    } else {
                        this.showKeys('ru')
                        isCaps = !isCaps
                    }
                }
            } else if (!isCaps) {
                key.classList.remove('back')

                // document.querySelectorAll('.keylong')[1].classList.add('back')
            }
        }
    }
    //======clear=====
    clearKeys() {
        keyboard.innerHTML = ' '
    }
    //=======add keys=========
    showKeys(lang = 'en') {
        console.log(result)

        result.forEach(el => {
            const key = document.createElement('div')
            key.addEventListener('mousedown', (e) => word.addAffect(e, 'mousedown', key))
            key.addEventListener('mouseup', (e) => word.addAffect(e, 'mouseup', key))
            key.classList.add('key')
            if (el.code == 38) {
                key.innerHTML = '&#8593;'
            } else if (el.code == 37) {
                key.innerHTML = '&#8592;'
            } else if (el.code == 39) {
                key.innerHTML = '&#8594;'
            } else if (el.code == 40) {
                key.innerHTML = '&#8595;'
            } else if (el.En == 'Control') {
                key.innerHTML = 'Ctrl'
            } else if (el.En == 'Meta') {
                key.innerHTML = 'Win'
            } else if (el.En == 'Delete') {
                key.innerHTML = 'Del'
            } else {
                key.innerHTML = el[lang]
            }
            keyboard.append(key)
            if (el.En == 'Backspace' || el.En == 'Delete' || el.En == 'Enter' || el.name == 'ShiftRight') {
                const clear = document.createElement('div')
                clear.classList.add('clear')
                keyboard.append(clear)
            }
            if (el.En == 'Enter' || el.En == 'Backspace' || el.En == 'CapsLock' || el.En == 'Shift') {
                key.classList.add('keylong')
            }
            if (el.En == 'Tab') {
                key.classList.add('litle-keylong')
            }
            if (el.En == 'Space') {
                key.classList.add('long-keylong')
            }

        })
    }
}
//=======cancel class=========
const word = new KeysLetter()
word.addLetter('~', '`', 'Ё', 'ё', 192, 'Backquote')
word.addLetter('!', 1, '!', 1, 49, 'Digit1')
word.addLetter('@', 2, '@', 2, 50, 'Digit2')
word.addLetter('#', 3, '#', 3, 51, 'Digit3')
word.addLetter('$', 4, '$', 4, 52, 'Digit4')
word.addLetter('%', 5, '%', 5, 53, 'Digit5')
word.addLetter('^', 6, '^', 6, 54, 'Digit6')
word.addLetter('&', 7, '&', 7, 55, 'Digit7')
word.addLetter('*', 8, '*', 8, 56, 'Digit8')
word.addLetter('(', 9, '(', 9, 57, 'Digit9')
word.addLetter(')', 0, ')', 0, 58, 'Digit0')
word.addLetter('_', '-', '_', '-', 189, 'Minus')
word.addLetter('+', '=', '+', '=', 187, 'Equal')
word.addSpec('Backspace', 8, 'Backspace')
word.addSpec('Tab', 9, 'Tab')
word.addLetter('Q', 'q', 'Й', 'й', 81, 'KeyQ')
word.addLetter('W', 'w', 'Ц', 'ц', 87, 'KeyW')
word.addLetter('E', 'e', 'У', 'у', 69, 'KeyE')
word.addLetter('R', 'r', 'К', 'к', 82, 'KeyR')
word.addLetter('T', 't', 'Е', 'е', 84, 'KeyT')
word.addLetter('Y', 'y', 'Н', 'н', 89, 'KeyY')
word.addLetter('U', 'u', 'Г', 'г', 85, 'KeyU')
word.addLetter('I', 'i', 'Ш', 'ш', 73, 'KeyI')
word.addLetter('O', 'o', 'Щ', 'щ', 79, 'KeyO')
word.addLetter('P', 'p', 'З', 'з', 80, 'KeyP')
word.addLetter('{', '[', 'Х', 'х', 219, 'BracketLeft')
word.addLetter('}', ']', 'Ъ', 'ъ', 221, 'BracketRight')
word.addLetter('|', '\\', '|', '\\', 220, 'Backslash')
word.addSpec('Delete', 46, 'Delete')
word.addSpec('CapsLock', 20, 'CapsLock')
word.addLetter('A', 'a', 'Ф', 'ф', 65, 'KeyA')
word.addLetter('S', 's', 'Ы', 'ы', 83, 'KeyS')
word.addLetter('D', 'd', 'В', 'в', 68, 'KeyD')
word.addLetter('F', 'f', 'А', 'а', 70, 'KeyF')
word.addLetter('G', 'g', 'П', 'п', 71, 'KeyG')
word.addLetter('H', 'h', 'Р', 'р', 72, 'KeyH')
word.addLetter('J', 'j', 'О', 'о', 74, 'KeyJ')
word.addLetter('K', 'k', 'Л', 'л', 75, 'KeyK')
word.addLetter('L', 'l', 'Д', 'д', 76, 'KeyL')
word.addLetter(':', ';', 'Ж', 'ж', 186, 'Semicolon')
word.addLetter('"', '\'', 'Э', 'э', 186, 'Quote')
word.addSpec('Enter', 13, 'Enter')
word.addSpec('Shift', 16, 'ShiftLeft')
word.addLetter('Z', 'z', 'Я', 'я', 90, 'KeyZ')
word.addLetter('X', 'x', 'Ч', 'ч', 88, 'KeyX')
word.addLetter('C', 'c', 'С', 'с', 67, 'KeyC')
word.addLetter('V', 'v', 'М', 'м', 86, 'KeyV')
word.addLetter('B', 'b', 'И', 'и', 66, 'KeyB')
word.addLetter('N', 'n', 'Т', 'т', 78, 'KeyN')
word.addLetter('M', 'm', 'Ь', 'ь', 77, 'KeyM')
word.addLetter('<', ',', 'Б', 'б', 188, 'Comma')
word.addLetter('>', '.', 'Ю', 'ю', 190, 'Period')
word.addLetter('?', '/', ',', '.', 191, 'Slash')
word.addSpec('ArrowUp', 38, 'ArrowUp')
word.addSpec('Shift', 16, 'ShiftRight')
word.addSpec('Control', 17, 'ControlLeft')
word.addSpec('Meta', 91, 'MetaLeft')
word.addSpec('Alt', 18, 'AltLeft')
word.addSpec('Space', 32, 'Space')
word.addSpec('Alt', 18, 'AltRight')
word.addSpec('ArrowLeft', 37, 'ArrowLeft')
word.addSpec('ArrowDown', 40, 'ArrowDown')
word.addSpec('ArrowRight', 39, 'ArrowRight')
word.addSpec('Control', 17, 'ControlRight')
word.showKeys()

//======KEYBOARD =================
document.addEventListener('keydown', (e) => addAffectInKey(e, 'keydown'))
document.addEventListener('keyup', (e) => addAffectInKey(e, 'keyup'))

//=======languegues change=========
let press = new Set()
function addAffectInKey(e, affect) {
    console.log(e);
    if (affect == 'keydown') {
        e.preventDefault()
        const keyys = document.querySelectorAll('.key')
        if (e.key == 'CapsLock') {
            word.clearKeys()
            if (!isLang) {
                if (!isCaps) {
                    word.showKeys('En')
                    document.querySelectorAll('.keylong')[1].classList.add('back')
                    console.log(document.querySelectorAll('.keylong')[1]);
                    isCaps = !isCaps
                } else {
                    word.showKeys('en')
                    document.querySelectorAll('.keylong')[1].classList.remove('back')
                    console.log([document.querySelectorAll('.keylong')[1], 2]);
                    isCaps = !isCaps
                }
            } else {
                if (!isCaps) {
                    word.showKeys('Ru')
                    document.querySelectorAll('.keylong')[1].classList.add('back')
                    console.log([document.querySelectorAll('.keylong')[1], 3]);
                    isCaps = !isCaps
                } else {
                    word.showKeys('ru')
                    document.querySelectorAll('.keylong')[1].classList.remove('back')
                    console.log([document.querySelectorAll('.keylong')[1], 4]);
                    isCaps = !isCaps
                }
            }
            return null
        }
        keyys.forEach(el => {
            if (e.key == 'Meta') {
                if (el.innerHTML == 'Win') {
                    el.classList.add('back')
                }
            }
            if (isCaps) {
                if (e.key == '`') {
                    if (el.innerHTML == '~') {
                        el.classList.add('back')
                    }
                } else if (e.key == '1') {
                    if (el.innerHTML == '!') {
                        el.classList.add('back')
                    }
                } else if (e.key == '2') {
                    if (el.innerHTML == '@') {
                        el.classList.add('back')
                    }
                } else if (e.key == '3') {
                    if (el.innerHTML == '#') {
                        el.classList.add('back')
                    }
                } else if (e.key == '4') {
                    if (el.innerHTML == '$') {
                        el.classList.add('back')
                    }
                } else if (e.key == '5') {
                    if (el.innerHTML == '%') {
                        el.classList.add('back')
                    }
                } else if (e.key == '6') {
                    if (el.innerHTML == '^') {
                        el.classList.add('back')
                    }
                } else if (e.key == '7') {
                    if (el.innerHTML == '&amp;') {
                        el.classList.add('back')
                    }
                } else if (e.key == '8') {
                    if (el.innerHTML == '*') {
                        el.classList.add('back')
                    }
                } else if (e.key == '9') {
                    if (el.innerHTML == '(') {
                        el.classList.add('back')
                    }
                } else if (e.key == '0') {
                    if (el.innerHTML == ')') {
                        el.classList.add('back')
                    }
                } else if (e.key == '-') {
                    if (el.innerHTML == '_') {
                        el.classList.add('back')
                    }
                } else if (e.key == '=') {
                    if (el.innerHTML == '+') {
                        el.classList.add('back')
                    }
                } else if (e.key == '[') {
                    if (el.innerHTML == '{') {
                        el.classList.add('back')
                    }
                } else if (e.key == ']') {
                    if (el.innerHTML == '}') {
                        el.classList.add('back')
                    }
                } else if (e.key == '\\') {
                    if (el.innerHTML == '|') {
                        el.classList.add('back')
                    }
                } else if (e.key == ';') {
                    if (el.innerHTML == ':') {
                        el.classList.add('back')
                    }
                } else if (e.key == '\'') {
                    if (el.innerHTML == '"') {
                        el.classList.add('back')
                    }
                } else if (e.key == ',') {
                    if (el.innerHTML == '&lt;') {
                        el.classList.add('back')
                    }
                } else if (e.key == '.') {
                    if (el.innerHTML == '&gt;') {
                        el.classList.add('back')
                    }
                } else if (e.key == '/') {
                    if (el.innerHTML == '?') {
                        el.classList.add('back')
                    }
                } if (e.key == 'ArrowLeft') {
                    if (el.innerHTML == '←') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowRight') {
                    if (el.innerHTML == '→') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowUp') {
                    if (el.innerHTML == '↑') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowDown') {
                    if (el.innerHTML == '↓') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'Control') {
                    if (el.innerHTML == 'Ctrl') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'Delete') {
                    if (el.innerHTML == 'Del') {
                        el.classList.add('back')
                    }
                } else if (e.key == ' ') {
                    if (el.innerHTML == 'Space') {
                        el.classList.add('back')
                    }
                } else if (el.innerHTML.toLowerCase() == e.key || el.innerHTML == e.key) {
                    el.classList.add('back')
                }
            } else {
                if (e.key == 'ArrowLeft') {
                    if (el.innerHTML == '←') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowRight') {
                    if (el.innerHTML == '→') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowUp') {
                    if (el.innerHTML == '↑') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'ArrowDown') {
                    if (el.innerHTML == '↓') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'Control') {
                    if (el.innerHTML == 'Ctrl') {
                        el.classList.add('back')
                    }
                } else if (e.key == 'Delete') {
                    if (el.innerHTML == 'Del') {
                        el.classList.add('back')
                    }
                } else if (e.key == ' ') {
                    if (el.innerHTML == 'Space') {
                        el.classList.add('back')
                    }
                }
                if (el.innerHTML == e.key || e.code == el.innerHTML) {
                    el.classList.add('back')
                }
            }

        })
        //=====change lang==========
        if (e.code == 'ShiftLeft' || e.code == 'AltLeft') {
            press.add(e.code)
        }
        if (press.has('ShiftLeft') && press.has('AltLeft')) {
            if (isLang) {
                if (isCaps) {
                    word.clearKeys()
                    word.showKeys('En')
                    document.querySelectorAll('.keylong')[1].classList.add('back')
                } else {
                    word.clearKeys()
                    word.showKeys('en')
                }
                isLang = !isLang
            } else {
                if (isCaps) {
                    word.clearKeys()
                    word.showKeys('Ru')
                    document.querySelectorAll('.keylong')[1].classList.add('back')
                } else {
                    word.clearKeys()
                    word.showKeys('ru')
                }
                isLang = !isLang
            }
        }
        //===all keys========

        if (e.key == 'Tab') {
            word.addFocusCursor(e, 'Tab')
        } else if (e.key == ' ') {
            word.addFocusCursor(e, 'Space')
        } else if (e.key == 'Enter') {
            word.addFocusCursor(e, 'Enter')
        } else if (e.key == 'Backspace') {
            word.addFocusCursor(e, 'Backspace')
        } else if (e.key == 'Delete') {
            word.addFocusCursor(e, 'Del')
        } else if (e.key == 'ArrowLeft') {
            word.addFocusCursor(e, 'ArrowLeft')
        } else if (e.key == 'ArrowUp') {
            word.addFocusCursor(e, 'ArrowUp')
        } else if (e.key == 'ArrowDown') {
            word.addFocusCursor(e, 'ArrowDown')
        } else if (e.key == 'ArrowRight') {
            word.addFocusCursor(e, 'ArrowRight')
        } else if (e.key == 'CapsLock' || e.key == 'Shift' || e.key == 'Alt' || e.key == 'Meta' || e.key == 'Escape' || e.key == 'AudioVolumeMute' || e.key == 'AudioVolumeDown' || e.key == 'AudioVolumeUp' || e.key == 'Insert' || e.key == 'Control' || e.key == 'F1' || e.key == 'F2' || e.key == 'F3' || e.key == 'F4' || e.key == 'F5' || e.key == 'F6' || e.key == 'F7' || e.key == 'F8' || e.key == 'F9' || e.key == 'F10' || e.key == 'F11' || e.key == 'F12' || e.key == 'AltGraph') {
            return null
        } else {
            word.addFocusCursor(e, e.key)
        }





    } else {
        const keyys = document.querySelectorAll('.key')
        keyys.forEach(el => {
            if (e.key == 'Meta') {
                if (el.innerHTML == 'Win') {
                    el.classList.remove('back')
                }
            }
            if (isCaps) {
                if (isCaps) {
                    if (e.key == '`') {
                        if (el.innerHTML == '~') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '1') {
                        if (el.innerHTML == '!') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '2') {
                        if (el.innerHTML == '@') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '3') {
                        if (el.innerHTML == '#') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '4') {
                        if (el.innerHTML == '$') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '5') {
                        if (el.innerHTML == '%') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '6') {
                        if (el.innerHTML == '^') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '7') {

                        if (el.innerHTML == '&amp;') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '8') {
                        if (el.innerHTML == '*') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '9') {
                        if (el.innerHTML == '(') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '0') {
                        if (el.innerHTML == ')') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '-') {
                        if (el.innerHTML == '_') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '=') {
                        if (el.innerHTML == '+') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '[') {
                        if (el.innerHTML == '{') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == ']') {
                        if (el.innerHTML == '}') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '\\') {
                        if (el.innerHTML == '|') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == ';') {
                        if (el.innerHTML == ':') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '\'') {
                        if (el.innerHTML == '"') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == ',') {
                        if (el.innerHTML == '&lt;') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '.') {
                        if (el.innerHTML == '&gt;') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == '/') {
                        if (el.innerHTML == '?') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'ArrowLeft') {
                        if (el.innerHTML == '←') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'ArrowRight') {
                        if (el.innerHTML == '→') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'ArrowUp') {
                        if (el.innerHTML == '↑') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'ArrowDown') {
                        if (el.innerHTML == '↓') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'Control') {
                        if (el.innerHTML == 'Ctrl') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == 'Delete') {
                        if (el.innerHTML == 'Del') {
                            el.classList.remove('back')
                        }
                    } else if (e.key == ' ') {
                        if (el.innerHTML == 'Space') {
                            el.classList.remove('back')
                        }
                    } else if (el.innerHTML.toLowerCase() == e.key || el.innerHTML == e.key) {
                        el.classList.remove('back')
                        document.querySelectorAll('.keylong')[1].classList.add('back')
                    }
                }

            } else {
                if (e.key == 'ArrowLeft') {
                    if (el.innerHTML == '←') {
                        el.classList.remove('back')
                    }
                } else if (e.key == 'ArrowRight') {
                    if (el.innerHTML == '→') {
                        el.classList.remove('back')
                    }
                } else if (e.key == 'ArrowUp') {
                    if (el.innerHTML == '↑') {
                        el.classList.remove('back')
                    }
                } else if (e.key == 'ArrowDown') {
                    if (el.innerHTML == '↓') {
                        el.classList.remove('back')
                    }
                } else if (e.key == 'Control') {
                    if (el.innerHTML == 'Ctrl') {
                        el.classList.remove('back')
                    }
                }
                if (el.innerHTML == e.key || e.code == el.innerHTML) {
                    el.classList.remove('back')
                }

            }
        })
        if (press.has('ShiftLeft') || press.has('AltLeft')) {
            press.clear()
        }
    }
}
//=========remove syles ==========

wrapper.addEventListener('mouseup', () => {
    const keyys = document.querySelectorAll('.key')
    if (!isCaps) {
        keyys.forEach(el => el.classList.remove('back'))
    } else {
        keyys.forEach(el => {
            if (el.innerHTML !== 'CapsLock') {
                el.classList.remove('back')
            }
        })
    }
})



