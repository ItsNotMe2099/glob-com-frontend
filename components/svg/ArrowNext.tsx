import React from 'react'

interface Props {
  color?: string
  className?: string
}

function ArrowNext(props: Props) {
  return (
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.99976 1.5L12.9998 12L1.99976 22.5" stroke="#B8B8B8" stroke-width="3"/>
    </svg>
  )
}

export default ArrowNext
