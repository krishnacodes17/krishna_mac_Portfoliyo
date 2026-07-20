import React from 'react'
import { Rnd } from 'react-rnd'

function Test() {
  return (
    <Rnd
      default={{ x: 180, y: 180, width: 420, height: 280 }}
      minWidth={260}
      minHeight={180}
      bounds="parent"
      style={{ zIndex: 6 }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#222',
          color: '#fff',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '10px 12px',
            background: 'rgba(0,0,0,0.35)',
            cursor: 'move',
            userSelect: 'none',
          }}
        >
          Test Window
        </div>
        <div style={{ padding: '12px' }}>
          <h1 style={{ fontSize: '1rem', lineHeight: 1.5 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iusto iste sint quaerat perspiciatis ipsa et repudiandae voluptates enim, nobis autem quas aliquam neque nisi? Cumque aliquid iure quaerat iste.
          </h1>
        </div>
      </div>
    </Rnd>
  )
}

export default Test
