import React from 'react';
import './text.css'

export default function Text ({text}) {
  return (
    <div className='textWrapper'>
      {text.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  )
} 


