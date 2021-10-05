import React, { memo } from 'react'
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => {
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

  return (
      <div
        onClick={handleClick}
        style={direction === 'right' ? right : left}
      >
        {direction === 'right' ?
          <img style={{ color: '#3E3A6F', height: '26px', width: '15px' }} src={rightArrow} /> : <img style={{ color: '#3E3A6F', height: '26px', width: '15px' }} src={leftArrow} />}
      </div>
  )
}

export default memo(Arrow)
