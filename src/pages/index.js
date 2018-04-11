import React from 'react'
import Link, {navigateTo} from 'gatsby-link'
import styled from 'styled-components'
import SignUpCard from '../components/SignUpCard'
import sfbridge from '../assets/sfbridge.svg'
import nycbuilding from '../assets/nycbuilding.svg'
import logo from '../assets/logo.svg'
import { StyledLink, StyledButton, ArrowButton } from '../components/Links'

const TextHero = styled.div`
  text-align: ${props => props.centered && 'center'};
  padding: 3rem 0 1rem;
`;

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0 -50vw;
`;

const Logo = styled.div`
  background: no-repeat url(${logo});
  display: inline-block;
  vertical-align: center;
  width: 37px;
  height: 50px;
`
const LogoWrap = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: lowercase; 
  > div {
    margin-right: 20px;
  }
`;

const IndexPage = () => (
  <div>
    <TextHero centered>
      <LogoWrap><Logo/>Intern Community</LogoWrap>
      <p>
        We’re a community of designers, developers, product managers, data 
        engineers, digital marketers—interns. We hold monthly Q&A’s throughout
        the summer, and help to provide any resources needed to be your one-stop
        guide for the best summer internship experience!
      </p>
    </TextHero>
    <SignUpContainer>
      <SignUpCard theme={{
        main: '#f55353',
        landmark: sfbridge,
        city: 'SF/Bay Area',
        id: 'sf',
        url: 'sfbayinterns2018.slack.com'
      }} />
      <SignUpCard theme={{
        main: '#6279F2',
        landmark: nycbuilding,
        city: 'New York City',
        id: 'nyc',
        url: 'nycinterns2018.slack.com'
      }} />
      <SignUpCard theme={{
        main: '#bd62f2',
        landmark: '',
        city: 'Seattle',
        id: 'sea',
        url: 'seattleinterns2018.slack.com'
      }} />
    </SignUpContainer>
  </div>
)

export default IndexPage
