import React from 'react'

interface Props {
  color?: string
  className?: string
}

function Facebook(props: Props) {
  return (
    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_51:177)">
        <path d="M33.3 0H5.57996C3.03203 0 0.959961 2.07207 0.959961 4.62V32.34C0.959961 34.8879 3.03203 36.96 5.57996 36.96H33.3C35.8479 36.96 37.92 34.8879 37.92 32.34V4.62C37.92 2.07207 35.8479 0 33.3 0Z" fill="#1976D2"/>
        <path d="M32.1448 18.4802H26.3698V13.8602C26.3698 12.5851 27.4047 12.7052 28.6798 12.7052H30.9898V6.93018H26.3698C22.5422 6.93018 19.4398 10.0325 19.4398 13.8602V18.4802H14.8198V24.2552H19.4398V36.9602H26.3698V24.2552H29.8348L32.1448 18.4802Z" fill="#FAFAFA"/>
      </g>
      <defs>
        <clipPath id="clip0_51:177">
          <rect width="36.96" height="36.96" fill="white" transform="translate(0.959961)"/>
        </clipPath>
      </defs>
    </svg>

  )
}

export default Facebook
