import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import styled from 'styled-components'
import SignUpCard from '../components/SignUpCard'
import sfbridge from '../assets/sfbridge.svg'
import nycbuilding from '../assets/nycbuilding.svg'
import seaneedle from '../assets/seaneedle.svg'
import faq from '../assets/faq.svg'
import logo from '../assets/logo.svg'
import media from '../utils/media'
import { StyledLink, StyledButton, ArrowButton } from '../components/Links'

const TextHero = styled.div`
  text-align: ${props => props.centered && 'center'};
  padding: 3rem 0 1rem;
`

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0 -50vw;
  ${media.tablet`
    flex-direction: column;
    margin: 0;
    width: initial;
    left: auto;
    right: auto;
  `};
`

const Logo = styled.div`
  background: no-repeat url(${logo});
  display: inline-block;
  vertical-align: center;
  width: 37px;
  height: 50px;
  ${media.phone`
    transform: scale(0.9);
  `};
`
const LogoWrap = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  > div {
    margin-right: 20px;
    ${media.phone`
      margin-right: 10px;
    `};
  }
`

const FaqArrow = styled.span`
  font-size: 1.7em;
  line-height: 0.8;
  font-family: 'Times New Roman';
  color: #dcdcdc;
  justify-self: center;
  &:after {
    content: '→';
    ${media.phone`
      content: "↓";
      line-height: 1;
    `};
  }
`

const Faq = styled.div`
  display: grid;
  grid-gap: 10px 5%;
  grid-template-columns: 0.7fr 0.2fr 1fr;
  font-size: 0.9em;
  justify-items: flex-start;
  > h3 {
    font-size: 1.3em;
    ${media.phone`
      margin-bottom: 0;
    `};
  }
  ${media.phone`
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      grid-gap: 15px;
      justify-items: center;
      text-align: center;
  `};
`

const IndexPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <TextHero centered>
      <LogoWrap>
        <Logo />Intern Community
      </LogoWrap>
      <p>
        We’re a community of designers, developers, product managers, data
        engineers, digital marketers—interns. We hold monthly Q&A’s throughout
        the summer, and help to provide any resources needed to be your one-stop
        guide for the best summer internship experience!
      </p>
    </TextHero>
    <SignUpContainer>
      <SignUpCard
        theme={{
          main: '#f55353',
          landmark: sfbridge,
          city: 'SF/Bay Area',
          id: 'sf',
          url: 'sfbayinterns2018.slack.com',
        }}
      />
      <SignUpCard
        theme={{
          main: '#6279F2',
          landmark: nycbuilding,
          city: 'New York City',
          id: 'nyc',
          url: 'nycinterns2018.slack.com',
        }}
      />
      <SignUpCard
        theme={{
          main: '#A762F2',
          landmark: seaneedle,
          city: 'Seattle',
          id: 'sea',
          url: 'seattleinterns2018.slack.com',
        }}
      />
    </SignUpContainer>
    <TextHero centered>
      <img src={faq} style={{ marginBottom: '0' }} />
      <h2>Say what?</h2>
    </TextHero>
    <Faq>
      <h3>whoa whoa whoa, hold on, what is this?</h3>
      <FaqArrow />
      <p>
        intern.community is a Separated they live in Bookmarksgrove right at the
        coast of the Semantics, a large language ocean. A small river named
        Duden flows by their place and supplies it with the necessary
        regelialia.
      </p>
      <h3>how might this improve my intern experience?</h3>
      <FaqArrow />
      <p>
        A large language ocean. A small river named Duden flows by their place
        and supplies it with the necessary regelialia.
      </p>
      <h3>who’s in the community?</h3>
      <FaqArrow />
      <p>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. A small river named Duden flows.
      </p>
      <h3>i'm not convinced.</h3>
      <FaqArrow />
      <p>
        We compiled a small bit of experiences from past community members for
        you right <StyledLink to="/">here</StyledLink>! We’d love to give you
        this same experience.
      </p>
    </Faq>
  </div>
)

export default IndexPage
