import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import media from '../utils/media'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/fonts.css'

const Container = styled.div`
  -webkit-font-smoothing: antialiased;
  font-size: 1.2em;
  ${media.desktop`
    font-size: 1em;
  `}
  ${media.tablet`
    font-size: .9em;
  `};
`;

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  ${media.desktop`
    margin: 0 auto;
    max-width: 680px;
  `};
  ${media.tablet`
    max-width: 85%;
  `};
  ${media.phone`
    max-width: 90%;
  `};

`;

class Layout extends React.Component {
  render() {
    const isLanding = this.props.location.pathname === '/'
    const isSF = this.props.location.pathname.split('/')[1] === 'sf'
    const isSEA = this.props.location.pathname.split('/')[1] === 'seattle'
    const isNYC = this.props.location.pathname.split('/')[1] === 'nyc'

    return (
      <Container>
      <Helmet
        defaultTitle="Intern Community"
        titleTemplate="%s | Intern Community"
        meta={[
          { name: 'description', 
            content: 'Your one-stop guide for the best summer internship experience! We’re a community of designers, developers, product managers, data engineers, digital marketers—interns.' },
          { name: 'keywords', content: 'interns community, community of interns, intern community in sf, intern community in seattle, intern community in seattle, tech intern community, 2018 intern slack, 2018 tech intern slack' },
        ]}
      />
      { !isLanding && (
        <Header 
          isSF={isSF}
          isSEA={isSEA}
          isNYC={isNYC}
        />
      )}
      <Wrapper>
        {this.props.children()}
      </Wrapper>
      <Footer />
    </Container>
    );
  }
}

export default Layout;

injectGlobal`
  ${media.phone`
    h1 {
      font-size: 1.8em;
      margin-bottom: 1.2rem;
    }
  `}
`
