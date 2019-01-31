import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from '../../utils/media'
import { LogoSvg } from '../../assets'

export const Header = props => {
  const { isSF, isSEA, isNYC } = props
  return (
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to={
            (isSF && '/sf') || (isSEA && '/seattle') || (isNYC && '/nyc') || '/'
          }
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {(isSF && 'SF/Bay Area Interns 2019') ||
            (isSEA && 'Seattle Interns 2019') ||
            (isNYC && 'New York City Interns 2019')}
        </Link>
      </h1>
    </div>
  )
}

const FooterWrap = styled.div`
  margin-top: 7em;
  padding: 30px 70px;
  font-size: 0.75em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
    color: #888;
    letter-spacing: 0.5px;
  }
  a {
    color: #888;
  }
  ${media.phone`
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 30px 7%;
  `};
`

export const Footer = () => {
  return (
    <FooterWrap>
      <p>© 2019 Intern Community. All rights reserved.</p>
      <div>
        <p>Made with ♥ by interns</p>
        <p>
          Having problems?{' '}
          <a href="https://m.me/grgwlff" target="_blank">
            Let us know!
          </a>
        </p>
      </div>
    </FooterWrap>
  )
}

export const Image = styled.img`
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(58, 71, 80, 0.2);
`

export const Main = styled.div`
  opacity: 0;
`

export const TextHero = styled.div`
  text-align: ${props => props.centered && 'center'};
  padding: 3rem 0 1rem;
`
export const SignUpContainer = styled.div`
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

export const Logo = styled.div`
  background: no-repeat url(${LogoSvg});
  display: inline-block;
  vertical-align: middle;
  width: ${props => (props.width || '37') + 'px'};
  height: ${props => (props.height || '50') + 'px'};
  background-size: ${props => props.width + 'px' || 'initial'};
  ${props =>
    props.icon &&
    `
    background-size: 35%;
    width: 30px;
    background-size: 20px;
    height: 28px;
    background-position: center;
  `} ${media.phone`
    transform: scale(0.9);
  `};
`

export const LogoWrap = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    margin-right: 20px;
    ${media.phone`
      margin-right: 10px;
    `};
  }
  ${props =>
    props.bg &&
    `
    padding: 40px;
    border-radius: 80px;
    width: 510px;
    margin: 90px auto 140px;
    background: white;  
    &:after {
      position: absolute;
      z-index: -1;
      content: "";
      background: #C1CAFF;
      height: 330px;
      width: 720px;
      border-radius: 18px;
      box-shadow: 0 5px 20px rgba(58,71,80,0.1);
      left: -15px;
      top: 47px;
    }
    @media(min-width: 1690px) {
        margin: 120px auto 180px
        &:after {
          width: 1000px;
          height: 400px;
        }
      }

  `}
  ${media.phone`
    ${props =>
      props.bg &&
      `
      padding: 20px;
      font-size: 1.4em;
      border-radius: 80px;
      width: 90%;
      margin: 45px auto 150px;
      background: white;  
      &:after {
        position: absolute;
        left: -200px;
        top: 0;
        z-index: -1;
        content: "";
        background: #C1CAFF;
        height: 300px;
        width: 300%;
        border-radius: 18px;
        box-shadow: 0 5px 20px rgba(58,71,80,0.1);
      }
    `}
  `};
`

export const FaqArrow = styled.span`
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
export const Faq = styled.div`
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
