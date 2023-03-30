import { useEffect } from 'react'
import 'font-awesome/css/font-awesome.min.css'

//JSON OBJECT LIST WITH ALL THE CARDS
const cards = [
  {
    icon: 'fa-apartment',
    title: 'Apartments',
    description: 'Places to be apart. Wait, what?',
  },
  {
    icon: 'fa-unicorn',
    title: 'Unicorns',
    description: 'A single corn. Er, I mean horn.',
  },
  {
    icon: 'fa-blender-phone',
    title: 'Blender Phones',
    description: 'These absolutely deserve to exist.',
  },
  {
    icon: 'fa-person-to-portal',
    title: 'Adios',
    description: 'See you...',
  },
  {
    icon: 'fa-person-from-portal',
    title: 'I mean hello',
    description: '...over here.',
  },
  {
    icon: 'fa-otter',
    title: 'Otters',
    description: 'Look at me, imma cute lil fella.',
  },
]

export const MagicalHoverEffect = () => {
  useEffect(() => {
    document.getElementById('cards').onmousemove = (e) => {
      for (const card of document.getElementsByClassName('card')) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card['style'].setProperty('--mouse-x', `${x}px`)
        card['style'].setProperty('--mouse-y', `${y}px`)
      }
    }
  }, [])

  return (
    <div className='bg-[var(--bg-color)] p-0" m-0 flex items-center justify-center overflow-hidden lg:max-w-[1000px] lg:items-start lg:overflow-auto lg:py-2'>
      <div
        id="cards"
        className="hover:group flex w-[calc(100%-20px)] max-w-[916px] flex-wrap gap-2"
      >
        {cards.map((card, index) => (
          <div className="card group-hover:after:opacity-100" key={index}>
            <div className="card-content">
              <div className="card-image">
                <i className={`fa fa-spinner fa-spin ${card.icon}`}></i>
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <i className={`fa fa-spinner fa-spin ${card.icon}`}></i>
                  <div className="card-info-title">
                    <h3>{card.title}</h3>
                    <h4>{card.description}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MagicalHoverEffect
