import React from 'react';
// import {MdEmail} from 'react-icons/md';
import { 
  // medium, 
  // facebook, 
  // twitter, 
  // patreon 
} from "./icons";

// function clickHandler (type) {
//   const urls = {
//     twitter: 'https://twitter.com/theModernEditor',
//     facebook: 'https://www.facebook.com/groups/590505824787674/',
//     medium: 'https://www.medium.com/900words/',
//     patreon: 'https://www.patreon.com/mimis/',
//     mimis: 'mailto:mimis@mimis.io'
//   }
//   window.open(urls[type])
// }

export default function () {
  // const iconEmail = <MdEmail size={'100%'} style={{color: color.white}}/>

  return (
    <div className='icons'>
      {/* <IconBox icon={patreon} onClick={() => clickHandler('patreon')}/>
      <IconBox icon={facebook} onClick={() => clickHandler('facebook')}/> */}

      {/* <IconBox icon={iconEmail} onClick={() => this.clickOnEmail()} size={iconSize} padding={iconPadding} /> */}
    </div>
  )
}




// <IconBox icon={iconTwitter} onClick={() => this.clickOnTwitter()} fill={color.white} background={color.primaryColor} size={iconSize} padding={iconPadding} />
// <IconBox icon={iconMedium} onClick={() => this.clickOnMedium()} fill={color.white} background={color.primaryColor} size={iconSize} padding={iconPadding} />
// <IconBox icon={iconFacebook} onClick={() => this.clickOnFacebook()} fill={color.white} background={color.primaryColor} size={iconSize} padding={iconPadding} />


export const IconBox = (props) => (
  <div className='iconBox'>
    {props.icon}
  </div>
)