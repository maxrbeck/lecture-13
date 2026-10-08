import './style.css'
import { setupCounter } from './counter.js'

const button = document.createElement('button')
button.textContent = 'Celebrate'

document.querySelector('#app').append(button)

setupCounter(button)
