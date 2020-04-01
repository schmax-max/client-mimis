// import React from "react"
import styled from 'styled-components';
import {color, sizeCutoff} from "./constants";

export const Circle = styled.div`
    padding: 10;
    margin: 20;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.dashColor};
    border-radius: 50%;
    width: 100%;
    height: 100%;
    @media (max-width: ${sizeCutoff.lowerTablet}) {
        display: none;
    }
`

export const Triangle = styled.div`
    z-index: 100;
    position: absolute;
    top: 0px;
    left: 0px;
    border-left: 25rem solid ${color.primaryColor};
    border-bottom: 5rem solid transparent;
    border-right: 25rem solid transparent;
    border-top: 5rem solid ${color.primaryColor};
`
