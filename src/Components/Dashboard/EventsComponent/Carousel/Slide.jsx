import React, { memo } from 'react'

const Slide = ({ content, width }) => {
  return (
    <div
      style={{
        height: '100%',
        width: `${width}px`,
        backgroundImage: `url(${content})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left'
      }}
    />
  )
}

export default memo(Slide)
