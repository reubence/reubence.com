import React from 'react'
import ReactDOM from 'react-dom'
import { toString } from 'mdast-util-to-string'

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2']
const TAGS = [
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'Tailwind',
  'React',
  'Next.js',
  'Gatsby',
  'UI/UX',
  'SVG',
  'animation',
  'webdev',
]
const DURATION = 15000
const ROWS = 5
const TAGS_PER_ROW = 5

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random())

const InfiniteLoopSlider = ({
  children,
  duration,
  reverse = NaN,
}: {
  children: React.ReactNode
  duration: number
  reverse?: number
}) => {
  //set --duration and --direction using js
  return (
    <div
      className="loop-slider"
      style={
        {
          '--duration': `${duration}ms`,
          '--direction': reverse ? 'reverse' : 'normal',
        } as React.CSSProperties
      }
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  )
}

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
)

const InfiniteScrollHead = () => (
  <div className="app">
    <header>
      <h1>Show Off App Features</h1>
    </header>
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  </div>
)

export default InfiniteScrollHead
