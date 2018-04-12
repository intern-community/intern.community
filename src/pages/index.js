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
import { StyledAnchor, StyledLink, StyledButton, ArrowButton } from '../components/Links'
import TextHero from '../components/TextHero'

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
      <h3>what is intern.community?</h3>
      <FaqArrow />
      <p>
        intern.community is a space for interns by interns. Being an intern in a
        new city can be a really cool experience and we want to make it super
        easy for you to meet new people and have an amazing time. Hence, we have
        created slack groups in the major cities, and will be holding events,
        meetups, and Q&As where you can meet other interns as well.
      </p>
      <h3>how will this improve my internship experience?</h3>
      <FaqArrow />
      <p>
        You get to meet amazing people who, like you, might be in a new city.
        You can leave work and still be able to enjoy yourself by checking out a
        new neighborhood or a new bar with erstwhile strangers. All in all, our
        hope is that more interns take the time to enjoy themselves outside of
        work and make some friends along the way.
      </p>
      <h3>who started this?</h3>
      <FaqArrow />
      <p>
        intern.community started by way of the annual bay area intern slack
        group. We expanded on that this year by launching intern.community in
        three cities to allow interns to meet other interns around them and do
        stuff outside of work.
      </p>
      <h3>how can i contact you?</h3>
      <FaqArrow />
      <p>
        You can DM <strong>@greg</strong> or <strong>@anant</strong> in the slack channel, or email <StyledAnchor href="mailto:gregwwolff@gmail.com">gregwwolff@gmail.com</StyledAnchor>
      </p>
    </Faq>
  </div>
)

export default IndexPage
