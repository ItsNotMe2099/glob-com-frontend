import React from 'react'

interface Props {
  color?: string
  className?: string
}

function Logo(props: Props) {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M24.6427 33.0357C23.6212 31.0251 20.7276 32.3117 20.4119 32.1468C18.9651 34.8959 16.0713 40.4765 16.0713 40.8064C16.0713 41.1363 22.9111 44.93 26.331 46.7857L44.2856 39.5694C34.2856 43.2143 37.3652 39.1705 32.6784 38.2143C30.6166 37.7936 28.5031 39.9282 26.9229 38.5384C25.1762 37.0022 25.6642 35.0463 24.6427 33.0357Z" fill="white"/>
    <path opacity="0.8" d="M10.1784 16.6072C6.46751 14.206 12.6155 5.70061 12.3322 5.49578C10.5084 7.87238 0.945557 24.0581 0.896112 24.3701C0.846668 24.6822 6.95188 29.3281 10.0107 31.6121L16.4492 30.833C16.4492 30.833 18.2141 26.9643 16.4492 25.1786C14.6843 23.3929 12.4985 25.6624 11.0713 23.9286C9.24069 21.7047 13.2141 18.5714 10.1784 16.6072Z" fill="white"/>
    <path d="M43.9289 6.78579C33.0567 21.066 7.32959 42.3215 30.5361 44.1073L25.1565 48.5839L14.8218 46.4287C14.5366 46.4117 9.70816 42.188 7.32959 40.0783L1.82859 31.8076L3.21467 19.8215L5.89324 19.8215C4.82181 38.2144 29.6638 18.566 43.9289 6.78579Z" fill="white"/>
    <path d="M46.6204 6.5126L44.0599 3.94429L49.8874 1.02044L46.6204 6.5126Z" fill="url(#paint0_linear_24:93)"/>
    <path d="M49.8385 22.1429H44.4366C44.5725 23.0756 44.6429 24.0296 44.6429 25C44.6429 25.8469 44.5893 26.6813 44.4853 27.5H49.8766C49.9582 26.6777 50 25.8437 50 25C50 24.0338 49.9452 23.0805 49.8385 22.1429Z" fill="url(#paint1_linear_24:93)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3571 22.1429L31.25 27.5H44.4853C44.5893 26.6813 44.6429 25.8469 44.6429 25C44.6429 24.0296 44.5725 23.0756 44.4366 22.1429H35.3571Z" fill="url(#paint2_linear_24:93)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.4853 27.5C43.2572 37.168 35.0015 44.6429 25 44.6429C14.1516 44.6429 5.35714 35.8485 5.35714 25C5.35714 14.1516 14.1516 5.35714 25 5.35714C28.9135 5.35714 32.5597 6.50162 35.6222 8.47414L38.8906 4.21101C34.9178 1.5512 30.14 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C37.9634 50 48.6223 40.1333 49.8766 27.5H44.4853ZM44.4449 9.28571H44.399L44.4243 9.26037L44.4449 9.28571Z" fill="url(#paint3_linear_24:93)"/>
    <defs>
    <linearGradient id="paint0_linear_24:93" x1="47.0611" y1="0.86735" x2="46.755" y2="6.51989" gradientUnits="userSpaceOnUse">
    <stop stop-color="#0057FF"/>
    <stop offset="1" stop-color="#0241BB"/>
    </linearGradient>
    <linearGradient id="paint1_linear_24:93" x1="50" y1="1.5" x2="-9.5" y2="58.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#0057FF"/>
    <stop offset="1" stop-color="#FF5EA7"/>
    </linearGradient>
    <linearGradient id="paint2_linear_24:93" x1="50" y1="1.5" x2="-9.5" y2="58.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#0057FF"/>
    <stop offset="1" stop-color="#FF5EA7"/>
    </linearGradient>
    <linearGradient id="paint3_linear_24:93" x1="50" y1="1.5" x2="-9.5" y2="58.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#0057FF"/>
    <stop offset="1" stop-color="#FF5EA7"/>
    </linearGradient>
    </defs>
    </svg>
    

  )
}

export default Logo
