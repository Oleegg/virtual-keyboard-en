import './styles/normalize.css'
import './styles/style.scss'
import katy from './assets/imges/pets-Katrine.jpg'
const heading = document.createElement('h1')
heading.textContent = 'My virtual keyboard'
// создание свойства класса без конструктора
class Game {
    name = 'Oleegg'
}
const myGame = new Game()

// создаем параграф
const p = document.createElement('p')
p.textContent = `My name is ${myGame.name}.`

// добавляем заголовок в DOM
const bbody = document.querySelector('body')
bbody.append(heading, p)

// create img
const img = document.createElement('img')
img.classList.add('img')
img.src = katy
img.alt = 'cat'
bbody.append(img)