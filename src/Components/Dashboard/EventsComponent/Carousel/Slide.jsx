import React, { memo, useState } from 'react'
import useWindowDimensions from '../../../../Layouts/useWindowDimensions'

const Slide = ({ content, width }) => {
  const [size] = useState(useWindowDimensions())
  let desk = {
    height: '100%',
    width: `${width}px`,
    backgroundImage: `url(${content})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left'
  }

  let mobile = {
      height: '100%',
      width: `${size.width}px`,
      backgroundImage: `url(${content})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius: '10px'
  }

  return (    
    <div style={size.width > 768 ? desk : mobile }/>
  )
}

export default memo(Slide)
