class LoadAnim {
  constructor (symbol = '●') {
    this.holder = document.createElement('div')
    this.holder.style = `
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      background: black;
      width: 100vw;
      height: 100vh;
    `
    const letter = document.createElement('h1')
    letter.style = `
      color: black;
      text-shadow: 0px 0px 4px white;
      font-size: 10vw;
      margin: 0;
      pointer-events: none;
      user-select: none;
    `
    letter.innerText = symbol
    letter.animate(
      {
        textShadow: [
          '0px 0px 4px white',
          '-0.5vw -0.5vw 4px white',
          '0.5vw 0.5vw 4px white',
          '0 0.5vw 4px white',
          '0.5vw -0.5vw 4px white',
          '0px 0px 4px white'
        ]
      },
      {
        duration: 3000,
        iterations: Infinity,
        easing: 'ease'
      }
    )
    this.holder.appendChild(letter)
    document.body.appendChild(this.holder)
  }

  async load () {
    function scale (number) {
      return `scale(${number})`
    }

    await this.holder.animate(
      [
        { opacity: 1, transform: scale(1) },
        { opacity: 0, transform: scale(2) }
      ],
      {
        duration: 1000,
        easing: 'ease-in',
        fill: 'forwards'
      }
    ).finished // When it's done

    this.holder.remove() // Remove it
  }
}

class Game {
  constructor () {
    const load = new LoadAnim()
    setTimeout(() => load.load(), 5000)
  }
}

const beagleGame = new Game()
console.log(beagleGame)
