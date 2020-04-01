import React from 'react';
import {useStaticQuery} from 'gatsby'
import Img from "gatsby-image"
import {infoProfile} from "../infoProfile"
import './profile.css'

const ProfileText = ({props}) => (
  
  <div className='profileWrapper'>
    <div className='profileNameText'>
      {props.name}
    </div>
    <div className='profileRoleText'>
      {props.role}
    </div>
    <div className='profileBackgroundText'>
      <div className='profileBackgroundSplit'>
        {props.work}
      </div>
      <div className='profileBackgroundSplit'>
        {props.studies}
      </div>
    </div>
  </div>
)

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      anders: file(relativePath: { eq: "anders.jpg" }) {
        childImageSharp {
          fixed(height: 100, width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      daniel: file(relativePath: { eq: "daniel.jpg" }) {
        childImageSharp {
          fixed(height: 100, width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className='profileMainWrapper'>
      <div>
        <Img className='profileImage' fixed={data.anders.childImageSharp.fixed} />    
        <ProfileText props={infoProfile.anders}/>
      </div>
      <div>
        <Img className='profileImage' fixed={data.daniel.childImageSharp.fixed} />    
        <ProfileText props={infoProfile.daniel}/>
      </div>  
    </div>  
  )
}

export default Profile  

