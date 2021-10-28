import React from 'react'

interface Props {
  color?: string
  className?: string
}

function ArrowPrev(props: Props) {
  return (
    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.05" r="26" transform="matrix(4.37114e-08 1 1 -4.37114e-08 26 26.5)" fill="url(#paint0_linear_45:595)"/>
        <path d="M30.0002 15.5L19.0002 26L30.0002 36.5" stroke="#B8B8B8" stroke-width="3"/>
      <defs>
        <linearGradient id="paint0_linear_45:595" x1="26" y1="0" x2="26" y2="52" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>

  )
}

export default ArrowPrev
