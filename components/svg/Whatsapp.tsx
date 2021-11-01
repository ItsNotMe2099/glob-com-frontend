import React from 'react'

interface Props {
  color?: string
  className?: string
}

function Whatsapp(props: Props) {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0052 0H20.9948C9.41588 0 0 9.4185 0 21C0 25.5938 1.4805 29.8515 3.99787 33.3086L1.38075 41.1101L9.45263 38.5298C12.7733 40.7295 16.7344 42 21.0052 42C32.5841 42 42 32.5789 42 21C42 9.42113 32.5841 0 21.0052 0Z" fill="#4CAF50"/>
      <path d="M33.2246 29.6547C32.718 31.0854 30.7073 32.2719 29.1034 32.6184C28.0061 32.852 26.5729 33.0384 21.7481 31.0381C15.5768 28.4814 11.6025 22.2102 11.2928 21.8034C10.9961 21.3965 8.79901 18.4827 8.79901 15.4692C8.79901 12.4557 10.3294 10.9884 10.9463 10.3584C11.4529 9.84123 12.2903 9.60498 13.0935 9.60498C13.3534 9.60498 13.587 9.61811 13.797 9.62861C14.4139 9.65486 14.7236 9.69161 15.1305 10.6655C15.6371 11.8861 16.8709 14.8996 17.0179 15.2094C17.1675 15.5191 17.3171 15.9391 17.1071 16.346C16.9103 16.766 16.737 16.9524 16.4273 17.3094C16.1175 17.6664 15.8235 17.9394 15.5138 18.3226C15.2303 18.656 14.91 19.013 15.267 19.6299C15.624 20.2336 16.8578 22.247 18.6743 23.864C21.0184 25.9509 22.9189 26.6176 23.5988 26.9011C24.1054 27.1111 24.7091 27.0612 25.0793 26.6675C25.5491 26.1609 26.1293 25.3209 26.7199 24.494C27.1399 23.9007 27.6701 23.8272 28.2266 24.0372C28.7936 24.2341 31.794 25.7172 32.4109 26.0244C33.0278 26.3341 33.4346 26.4811 33.5843 26.741C33.7313 27.0009 33.7313 28.2215 33.2246 29.6547Z" fill="#FAFAFA"/>
    </svg>
  )
}

export default Whatsapp
