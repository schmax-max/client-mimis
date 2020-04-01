import React from 'react';
import './box.css'

export const BoxAction = ({buttonType, buttonText}) => (
  <div className='actionWrapper'>
    <button className='actionButton' onClick={() => {buttonClick(buttonType)}}>
      {buttonText}
    </button >
  </div>
)


function buttonClick (type) {
  const externalLinks = {
    patreon: 'https://www.patreon.com/mimis',
    email: 'mailto:mimis@mimis.io'
  }
  
  if (externalLinks[type]) {
    window.open(externalLinks[type])
  } else {
    // navigate(`/${slug}`)
    // window.scrollTo(0, 0)
  }
  
  // 
  // const nexUrl = `/${slug}`
  // history.push(nexUrl)
  
}

