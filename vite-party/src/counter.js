import confetti from 'canvas-confetti'

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `You've partied ${counter} times!`
  }
  element.addEventListener('click', () => {
    setCounter(counter + 1)
    confetti()
  })
  setCounter(0)
}
