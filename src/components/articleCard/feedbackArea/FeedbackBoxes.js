import React from 'react';
import styled from 'styled-components';
// onClick={() => props.clickOnFeedbackRating(props.feedbackOptionText)}
import {MdThumbDown, MdStar, MdStarBorder, MdStarHalf, MdEmail} from 'react-icons/md';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} from 'react-share';

import {IconBox, iconFacebook, iconTwitter, iconLinkedin, iconReddit, iconWhatsapp,
  // iconPocket
} from "../../../utils/Icons";
import {FeedbackRatingOption} from './FeedbackRatingOption';
import {FeedbackFlagOption} from './FeedbackFlagOption';


export const FeedbackRatingBoxes = (props) => (
  <HorizontalWrapper>
    <FeedbackRatingOption
      articleRating={props.articleRating}
      changeRating={props.changeRating}
      feedbackOptionIcon={<MdThumbDown/>}
      feedbackOptionText={'crap'}
      fontSize={25}
    />
    <FeedbackRatingOption
      articleRating={props.articleRating}
      changeRating={props.changeRating}
      feedbackOptionIcon={<MdStarBorder/>}
      feedbackOptionText={'ok'}
      fontSize={25}
    />
    <FeedbackRatingOption
      articleRating={props.articleRating}
      changeRating={props.changeRating}
      feedbackOptionIcon={<MdStarHalf/>}
      feedbackOptionText={'good'}
      fontSize={25}
    />
    <FeedbackRatingOption
      articleRating={props.articleRating}
      changeRating={props.changeRating}
      feedbackOptionIcon={<MdStar/>}
      feedbackOptionText={'great'}
      fontSize={25}
    />
  </HorizontalWrapper>
)

export const FeedbackFlagBoxes = (props) => {
  return (
    <VerticalWrapper>
      <FeedbackFlagOption
        articleFlag={props.articleFlag}
        changeFlag={props.changeFlag}
        feedbackOptionText={`editor's pick`}
        fontSize={25}
      />

      <FeedbackFlagOption
        articleFlag={props.articleFlag}
        changeFlag={props.changeFlag}
        feedbackOptionText={'triggered me'}
        fontSize={25}
      />
      <FeedbackFlagOption
        articleFlag={props.articleFlag}
        changeFlag={props.changeFlag}
        feedbackOptionText={'wrong location'}
        fontSize={25}
      />
      <FeedbackFlagOption
        articleFlag={props.articleFlag}
        changeFlag={props.changeFlag}
        feedbackOptionText={'duplicate article'}
        fontSize={25}
      />
    </VerticalWrapper>
  )
}


// <FeedbackFlagOption
//   articleFlag={props.articleFlag}
//   changeFlag={props.changeFlag}
//   feedbackOptionText={'not Mimis quality'}
//   fontSize={25}
// />
// <FeedbackFlagOption
//   articleFlag={props.articleFlag}
//   changeFlag={props.changeFlag}
//   feedbackOptionText={'too old'}
//   fontSize={25}
// />


const iconEmail = <MdEmail size={'100%'} style={{color: 'white'}}/>
// <FacebookIcon size={25} background={'none'} round logoFillColor={color.dashColor} />
export const FeedbackShareBoxes = (props) => (
  <HorizontalWrapper>
    <FacebookShareButton url={props.articleUrl}>
      <IconBox icon={iconFacebook} fill={'white'} color={'white'} size={'20px'} />
    </FacebookShareButton>
    <LinkedinShareButton url={props.articleUrl}>
      <IconBox icon={iconLinkedin} fill={'white'} color={'white'} size={'20px'} />
    </LinkedinShareButton>
    <TwitterShareButton url={props.articleUrl} via={'theModernEditor'}>
      <IconBox icon={iconTwitter} fill={'white'} color={'white'} size={'20px'}/>
    </TwitterShareButton>
    <RedditShareButton url={props.articleUrl}>
      <IconBox icon={iconReddit} fill={'white'} color={'white'} size={'20px'}/>
    </RedditShareButton>
    <WhatsappShareButton url={props.articleUrl}>
      <IconBox icon={iconWhatsapp} fill={'white'} color={'white'} size={'20px'}/>
    </WhatsappShareButton>
    <EmailShareButton url={props.articleUrl}>
      <IconBox icon={iconEmail} fill={'white'} color={'white'} size={'20px'}/>
    </EmailShareButton>

  </HorizontalWrapper>
)

// <PocketShareButton url={props.readerUrl}>
//   <IconBox icon={iconPocket} fill={'white'} color={'white'} size={'20px'}/>
// </PocketShareButton>

export const FeedbackSourceBox = (props) => (
  <HorizontalWrapper>
    <JustText>
      {props.primaryChannelText}
    </JustText>
  </HorizontalWrapper>
)
// <MdFlag size={25}/>


export const FeedbackRatingReceivedBox = (props) => (
  <HorizontalWrapper>
    <JustText>
      thanks. this will make Mimis better.
    </JustText>
  </HorizontalWrapper>
)

export const FeedbackFlagReceivedBox = (props) => (
  <HorizontalWrapper>
    <JustText>
      thanks. the editors will have a look.
    </JustText>
  </HorizontalWrapper>
)

// const FlagBox = styled.div`
//   cursor: pointer;
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `

// const TextWithLeftMargin = styled.div`
//   text-align: center;
//   width: 100%;
//   margin-left: 1rem;
//   font-size: 80%;
// `

const JustText = styled.div`
  text-align: center;
  width: 100%;
  font-size: 80%;
`

const HorizontalWrapper = styled.div`
  padding-top: 1.4rem;
  width: 80%;
  max-width: 350px;
  display: flex;
  font-size: 120%;
  justify-content: space-between;
  color: white;
  @media (max-width: 767px) {
    width: 100%;
  }
`


const VerticalWrapper = styled.div`
  padding-top: 1rem;
  width: 80%;
  display: flex;
  flex-direction: column
  font-size: 120%;
  justify-content: space-between;
  color: white;
  @media (max-width: 767px) {
    width: 100%;
  }
`
