import React, { memo } from 'react'
import parse from 'html-react-parser'

const Dot = ({ active }) => {
  return (
    <span
      style={{
        padding: '5px',
        marginRight: '5px',
        cursor: 'pointer',
        borderRadius: '50%',
        background: `${active ? '#ffffff' : 'rgba(255,255,255,0.6)'}`
      }}
    />
  )
}

const MemoDot = memo(Dot)

const Dots = ({ slides, activeSlide }) => {
  var text = [{ one: 'Youth Talent & <br/> Education', two: 'May, 20' }, { one: 'Education without <br/> borders', two: 'May, 15' }, { one: 'Developing your <br/> talents', two: 'May, 20' }]
  return (
    <>
      <div
        style={{
          position: 'absolute',
          bottom: '25px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {slides.map((slide, i) => (
          <MemoDot key={slide} active={activeSlide === i} />
        ))}
      </div>
      <>
        <div style={{
          display: 'flex',
          position: 'absolute',
          top: '37%',
          right: '100px',
          color: '#ffffff'
        }}>
          <span style={{
            fontFamily: 'Gotham',
            fontStyle: 'normal',
            fontSize: '40px',
            fontWeight: 600,
            lineHeight: '48px'
          }}> {text[activeSlide].two} </span>
        </div>

        <div style={{
          display: 'flex',
          position: 'absolute',
          top: '30%',
          left: '100px',
          color: '#ffffff'
        }}>
          <span style={{
            fontFamily: 'Gotham',
            fontStyle: 'normal',
            fontSize: '40px',
            fontWeight: 600,
            lineHeight: '48px'
          }}> {parse(text[activeSlide].one)} </span>
        </div>
      </>
    </>
  )
}

export default Dots
