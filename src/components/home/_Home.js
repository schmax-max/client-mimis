import React from 'react';
import styled from 'styled-components';

// import {color, messaging} from "../../utils/constants";
import {ArticlesSearch} from './ArticlesSearch';
import {ArticlesObject} from '../articles/ArticlesHome';
import {SearchBox} from '../searchBox/_SearchBox';
import {BigDivider, NarrowWrapper, BannerTitle, SmallDivider  } from '../../utils/CommonItems';


export class Home extends React.Component {
  render () {
    return (  
      <ArticlesObject articles={}/>}
    )
  }
}




// <SearchArea {...this.props}/>

const SearchArea = (props) => {
  return (
    <Wrapper>
      <BannerTitle text={'TOP PICKS IN OUR LIBRARY'}/>
      <SmallDivider/>
      <SearchBox {...props} searchType={'simple'}/>
      <ArticlesSearch articles={props.relevantData.detailedArticlesShown} {...props}/>
      <BigDivider/>
    </Wrapper>
  )

}



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
