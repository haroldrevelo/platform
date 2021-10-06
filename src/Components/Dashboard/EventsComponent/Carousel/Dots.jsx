import React, { memo, useState } from 'react'
import parse from 'html-react-parser'
import useWindowDimensions from '../../../../Layouts/useWindowDimensions'

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
  const [size, setSize] = useState(useWindowDimensions())
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
      {
        size.width > 768 ?
          <>

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

            <div style={{
              display: 'flex',
              position: 'absolute',
              top: '8%',
              right: '20px',
              color: '#ffffff',
              backgroundColor: '#3D84FF',
              padding: '0 20px',
              borderRadius: '15px',
            }}>
              <span style={{
                fontFamily: 'Gotham',
                fontStyle: 'normal',
                fontSize: '13px',
                fontWeight: 500
              }}>SCIENCE</span>
            </div>

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

          </>
          :
          <>

            <div style={{
              display: 'flex',
              position: 'absolute',
              top: '15%',
              left: '20px',
              color: '#ffffff'
            }}>
              <span style={{
                fontFamily: 'Gotham',
                fontStyle: 'normal',
                fontSize: '35px',
                fontWeight: 600,
                lineHeight: '48px'
              }}> {parse(text[activeSlide].one)} </span>
            </div>

            <div style={{
              display: 'flex',
              position: 'absolute',
              top: '8%',
              right: '20px',
              color: '#ffffff',
              backgroundColor: '#3D84FF',
              padding: '0 10px',
              borderRadius: '10px'
            }}>
              <span style={{
                fontFamily: 'Gotham',
                fontStyle: 'normal',
                fontSize: '13px',
                fontWeight: 500
              }}>SCIENCE</span>
            </div>

            <div style={{
              display: 'flex',
              position: 'absolute',
              top: '42%',
              left: '20px',
              color: '#ffffff'
            }}>
              <span style={{
                fontFamily: 'Gotham',
                fontStyle: 'normal',
                fontSize: '30px',
                fontWeight: 500,
                lineHeight: '48px'
              }}> {text[activeSlide].two} </span>
            </div>

          </>
      }
    </>
  )
}

export default Dots
