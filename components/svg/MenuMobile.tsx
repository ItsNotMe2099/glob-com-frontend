import React from 'react'

interface Props {
  color?: string
  className?: string
}

function MenuMobile(props: Props) {
  return (
    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="23" height="2" rx="1" fill="white"/>
      <rect y="8" width="23" height="2" rx="1" fill="white"/>
      <rect y="16" width="23" height="2" rx="1" fill="white"/>
    </svg>
  )
}

export default MenuMobile
