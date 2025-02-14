import React from 'react'

interface Props {
  color?: string
  className?: string
}

function Dots(props: Props) {
  return (
    <svg width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="2.5" r="2"/>
      <circle cx="8" cy="2.5" r="2"/>
      <circle cx="2" cy="2.5" r="2"/>
    </svg>
  )
}

export default Dots
