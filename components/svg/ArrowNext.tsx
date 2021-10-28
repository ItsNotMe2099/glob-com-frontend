import React from 'react'

interface Props {
  color?: string
  className?: string
}

function ArrowNext(props: Props) {
  return (
    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.05" cx="26" cy="26.5" r="26" transform="rotate(90 26 26.5)" fill="url(#paint0_linear_45:598)"/>
      <path d="M21.9998 15.5L32.9998 26L21.9998 36.5" stroke="#B8B8B8" stroke-width="3"/>
      <defs>
        <linearGradient id="paint0_linear_45:598" x1="26" y1="0.499998" x2="26" y2="52.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>


  )
}

export default ArrowNext
