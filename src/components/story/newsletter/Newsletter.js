import React from 'react';
import styled from 'styled-components';
import './newsletter.css'
import MailchimpSubscribe from "react-mailchimp-subscribe"


// import {inputStyleLight, inputStyleDark} from "../../../utils/InputStyles";
import './newsletter.css'
// const url = "https://getflightmode.us15.list-manage.com/subscribe/post?u=b79d6d129c5ce6295fc838e05&amp;id=30d4c16fa0"

const url = "https://mimis.us20.list-manage.com/subscribe/post?u=364a7b92b87fda9cd64fed90c&amp;id=6a0a92b7ed"


export default function newsletter () {
  return (
    <MailchimpSubscribe className='newsletter'
     url={url}
     render={({ subscribe, status, message }) => (
       <CustomForm
         status={status}
         message={message}
         onValidated={formData => subscribe(formData)}
       />
     )}
   />
  )
}

const CustomForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div className='newsletterMainWrapper'>
      <div className='newsletterSubWrapper'>
        <input
          className='inputLight'
          ref={node => (email = node)}
          type="email"
          placeholder="your email address"
        />
        <div style={{height: '20px', width: '20px'}}/>
        <button 
          className='inputDark' 
          onClick={submit}
        >
          subscribe to our newsletter
        </button>
      </div>
      {status === "sending" && <Text>sending...</Text>}
      {status === "error" && (<Text dangerouslySetInnerHTML={{ __html: message }}/>)}
      {status === "success" && (<Text dangerouslySetInnerHTML={{ __html: message }}/>)}
    </div>
  );
};

const Text = styled.div `
  padding-top: 1rem;
  color: #003366;
`


