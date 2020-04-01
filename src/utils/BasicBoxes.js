import React from 'react';
import styled from 'styled-components';

import {color} from "./constants";

export const BlueBox = styled.div`
  width: 100%;
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.primaryColorFade};
`

export const PinkBox = styled.div`
  widht: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.dashColorFade};
`


export const TransparentBox = styled.div`
  widht: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 4rem;
`

export const SmallBox = styled.div`
  widht: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageBox = (props) => (
    <ImageBoxStyle alt="" src={props.imageUrl} left={'50%'} top={'25%'}/>
)

const ImageBoxStyle = styled.img`

    opacity: 0.4;
    filter: alpha(opacity=40);

    filter: blur(6px);
    -webkit-filter: blur(6px);
    position: absolute;
    z-index: 50;
    -ms-transform: translate(-${props => props.left},-${props => props.top}) !important;
    -webkit-transform: translate(-${props => props.left},-${props=> props.top}) !important;
    -moz-transform: translate(-${props => props.left},-${props=> props.top}) !important;
    left: ${props=> props.left};
    top: ${props=> props.top};
    width: 100%;
    height: 100%;
    object-fit: cover;

`

export const ProfileImage = (props) => (
    <ProfileImageWrapper size={props.size}>
      <ProfileImageStyle alt="" src={props.imageUrl} left={'50%'} top={'25%'}/>
    </ProfileImageWrapper>
)


const ProfileImageStyle = styled.img`
  position: absolute;
  -ms-transform: translate(-${props => props.left},-${props => props.top}) !important;
  -webkit-transform: translate(-${props => props.left},-${props=> props.top}) !important;
  -moz-transform: translate(-${props => props.left},-${props=> props.top}) !important;
  left: ${props=> props.left};
  top: ${props=> props.top};
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ProfileImageWrapper = styled.div `
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
`

// position: relative;
//
