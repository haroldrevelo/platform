import React, { memo, useState } from 'react'
import useWindowDimensions from '../../../../Layouts/useWindowDimensions'
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => {
  const [size] = useState(useWindowDimensions())

  let right = {
    display: 'flex',
    position: 'absolute',
    top: '40%',
    right: '25px',
    height: '32px',
    width: '47px',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    alignItems: 'center',
    transition: 'transform ease-in 0.1s',
    '&:hover': {
      transform: 'scale(1.1)'
    },
    'img': {
      transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
      '&:focus': {
        outline: 0
      }
    }
  }

  let rightMobile = {
    display: 'flex',
    position: 'absolute',
    top: '60%',
    right: '25px',
    height: '32px',
    width: '47px',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    alignItems: 'center',
    transition: 'transform ease-in 0.1s',
    '&:hover': {
      transform: 'scale(1.1)'
    },
    'img': {
      transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
      '&:focus': {
        outline: 0
      }
    }
  }

  let left = {
    display: 'flex',
    position: 'absolute',
    top: '40%',
    left: '25px',
    height: '32px',
    width: '47px',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    alignItems: 'center',
    transition: 'transform ease-in 0.1s',
    '&:hover': {
      transform: 'scale(1.1)'
    },
    'img': {
      transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
      '&:focus': {
        outline: 0
      }
    }
  }

  let leftMobile = {
    display: 'flex',
    position: 'absolute',
    top: '60%',
    left: '25px',
    height: '32px',
    width: '47px',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    alignItems: 'center',
    transition: 'transform ease-in 0.1s',
    '&:hover': {
      transform: 'scale(1.1)'
    },
    'img': {
      transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
      '&:focus': {
        outline: 0
      }
    }
  }


  return (
    <>
      {
        size.width > 768 ?
          <div onClick={handleClick} style={direction === 'right' ? right : left}>
            {direction === 'right' ?
              <img style={{ color: '#3E3A6F', height: '26px', width: '15px' }} src={rightArrow} alt={''}/> : <img style={{ color: '#3E3A6F', height: '26px', width: '15px' }} src={leftArrow} alt={''}/>}
          </div>
          :
          <div onClick={handleClick} style={direction === 'right' ? rightMobile : leftMobile}>
            {direction === 'right' ?
              <img style={{ color: '#3E3A6F', height: '26px', width: '15px' }} src={rightArrow} alt={''}/> : <img style={{ color: '#3E3A6F', height: '26px', width: '15px' }} src={leftArrow} alt={''}/>}
          </div> 
      }

    </>
  )
}

export default memo(Arrow)
