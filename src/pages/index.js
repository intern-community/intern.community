import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import styled from 'styled-components'

import media from '../utils/media'
import { 
  SfMonument,
  NycMonument,
  SeaMonument,
  FaqIcon
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

const IndexPage = ({ transition }) => (
  <Main style={transition && transition.style}>
    <TextHero centered>
      <LogoWrap>
        <Logo />intern.community
      </LogoWrap>
      <p>
        We’re a group of designers, developers, product managers, data
        engineers, digital marketers—interns. We nourish a growing Slack
        community, and will be hosting events, meetups, and Q&As throughout the
        summer. We want to provide a community for the thousands of students
        interning over the summer, and become your one-stop guide to an awesome
        summer experience!
      </p>
    </TextHero>
    <SignUpContainer>
      <SignUpCard
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
      />
    </SignUpContainer>
    <TextHero centered>
      <img src={FaqIcon} style={{ marginBottom: '0' }} />
      <h2>Say what?</h2>
    </TextHero>
    <Faq>
      <h3>what is intern.community?</h3>
      <FaqArrow />
      <p>
        intern.community is a space for interns by interns. Being an intern in a
        new city can be a really cool experience and we want to make it super
        easy for you to meet new people and have an amazing time. Hence, we have
        created Slack groups in the major cities, and will be holding events,
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
        intern.community started by way of the annual bay area intern Slack
        group. We expanded on that this year by launching intern.community in
        three cities to allow interns to meet other interns around them and do
        stuff outside of work.
      </p>
      <h3>how can i contact you?</h3>
      <FaqArrow />
      <p>
        You can DM <strong>@greg</strong> or <strong>@anant</strong> in the
        Slack channel, or email{' '}
        <StyledAnchor href="mailto:gregwwolff@gmail.com">
          gregwwolff@gmail.com
        </StyledAnchor>{' '}
        We recommend recruiters reach out to one of the admins.
      </p>
    </Faq>
  </Main>
)

export default IndexPage
