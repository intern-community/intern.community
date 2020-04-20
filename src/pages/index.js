import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import styled from 'styled-components'

import media from '../utils/media'
import {
  // SfMonument,
  // NycMonument,
  // SeaMonument,
  ICLandmark,
  JSCollab,
  FaqIcon,
} from '../assets'
import {
  StyledAnchor,
  StyledLink,
  StyledButton,
  ArrowButton,
  TextHero,
  SignUpContainer,
  SignUpCard,
  Logo,
  LogoWrap,
  Faq,
  FaqArrow,
  Main
} from '../components'

const CollabPic = styled.img`
  width: 230px;
  margin: .8rem auto 0;
  display: block;
`

const IndexPage = ({ transition }) => (
  <Main style={transition && transition.style}>
    <TextHero centered>
      <LogoWrap>
        <Logo />intern.community
      </LogoWrap>
      <p>
        We’re a group of designers, developers, product managers, data
        engineers, digital marketers—interns. We nourish a Slack
        community, and usually organize events, meetups, and Q&As for interns. This time, it’s different.
        Rather than planning events to go to, students are fumbling to even secure an internship.
        The strength and support of this community is more important than ever, and we're providing an online community for interns working remotely over the summer.
      </p>
    </TextHero>
    <SignUpContainer>
      <SignUpCard
        theme={{
          main: '#8669FC',
          landmark: ICLandmark,
          city: 'intern.community',
          id: 'ic',
          url: 'interncommunity2020.slack.com',
        }}
      />
      {/* <SignUpCard
        theme={{
          main: '#f55353',
          landmark: SfMonument,
          city: 'SF/Bay Area',
          id: 'sf',
          url: 'sfbayinterns2019.slack.com',
        }}
      />
      <SignUpCard
        theme={{
          main: '#6279F2',
          landmark: NycMonument,
          city: 'New York City',
          id: 'nyc',
          url: 'nycinterns2019.slack.com',
        }}
      />
      <SignUpCard
        theme={{
          main: '#A762F2',
          landmark: SeaMonument,
          city: 'Seattle',
          id: 'sea',
          url: 'seattleinterns2019.slack.com',
        }}
      /> */}
    </SignUpContainer>
    <TextHero centered>
      <img src={FaqIcon} style={{ marginBottom: '0' }} />
      <h2>Say what?</h2>
    </TextHero>
    <Faq>
      <h3>what is intern.community?</h3>
      <FaqArrow />
      <p>
        intern.community is a space for interns by interns. Being an intern
        can be a really cool experience and we want to make it super
        easy for you to meet new people and have an amazing time. Hence, we have
        created a Slack group, and will be holding virtual events,
        socials, and Q&As where you can meet other interns as well.
      </p>
      <h3>how is intern.community going to be different in 2020?</h3>
      <FaqArrow />
      <p>
        It's true, this time, it’s different. The strength 
        and support of this community is more important than ever, and we've decided to partner with <StyledAnchor href="http://www.jumpstart.me">Jumpstart</StyledAnchor> to pull it off.<br/><CollabPic src={JSCollab}/><br/>
        Jumpstart is doing everything it can to support interns and help them navigate this tough phase. With that commitment, Jumpstart is officially partnering with us to provide support in a variety of ways, including financially, so that we can continue to create a community that is there for each other in every way.
      </p>
      <h3>how will this improve my internship experience?</h3>
      <FaqArrow />
      <p>
        You get to meet amazing people who, like you, might be interning remotely.
        You can leave work and connect with others who might be facing the hardships of a remote internship too. All in all, our
        hope is that more interns have the opportunity to meet interns in other companies, and make some friends along the way.
      </p>
      <h3>who started this?</h3>
      <FaqArrow />
      <p>
        intern.community started by way of the annual bay area intern Slack
        group. We expanded on two years ago, and now encompass a cohesive, recurring community, helping other interns outside of work.
      </p>
      <h3>how can i contact you?</h3>
      <FaqArrow />
      <p>
        You can DM <strong>@greg</strong> in the
        Slack channel, or email{' '}
        <StyledAnchor href="mailto:gregwwolff@gmail.com">
          gregwwolff@gmail.com
        </StyledAnchor>{' '}
      </p>
    </Faq>
  </Main>
)

export default IndexPage
