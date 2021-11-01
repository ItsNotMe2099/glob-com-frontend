import React from 'react'

interface Props {
  color?: string
  className?: string
}

function MenuMobile(props: Props) {
  return (
    <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="3" rx="1.5" fill="white"/>
      <rect y="9" width="30" height="3" rx="1.5" fill="white"/>
      <rect y="18" width="30" height="3" rx="1.5" fill="white"/>
    </svg>
  )
}

export default MenuMobile
