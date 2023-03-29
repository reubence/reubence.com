import { useEffect } from 'react'

const HackerEffectText = () => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      // querySelector by ID
    } else {
      // list of letters
      const letters = 'abcdefghijklmnopqrstuvwxyz'

      document.getElementById('rando').addEventListener('mouseover', () => {
        let iterations = 0

        const interval = setInterval(() => {
          document.getElementById('rando').innerText = document
            .getElementById('rando')
            .innerText.split('')
            .map((letter, index) => {
              if (index < iterations) {
                return document.getElementById('rando').dataset.value[index]
              }
              return letters[Math.floor(Math.random() * letters.length)] // Added the missing return statement
            })
            .join('')

          if (iterations >= document.getElementById('rando').innerText.length) {
            clearInterval(interval)
          }
          iterations += 1 / 3
        }, 30)
      })
    }
  }, [])

  return (
    <h1
      id="rando"
      data-value="HOVER HERE"
      className="mx-auto cursor-pointer rounded-md py-2 px-4 font-mono text-4xl font-bold uppercase text-white hover:bg-white hover:text-black md:text-7xl "
    >
      HOVER HERE
    </h1>
  )
}

export default HackerEffectText
