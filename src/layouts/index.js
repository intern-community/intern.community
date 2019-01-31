import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import media from '../utils/media'

import { Header, Footer } from '../components'
import { Favicon, OgImage} from '../assets'
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
    max-width: 690px;
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
        defaultTitle="intern.community"
        titleTemplate="%s | intern.community"
        meta={[
          { name: 'description', 
            content: 'Your one-stop guide for the best summer internship experience! We’re a community of designers, developers, product managers, data engineers, digital marketers—interns.' },
          { name: 'keywords', 
            content: 'interns community, community of interns, intern community in sf, intern community in seattle, intern community in seattle, tech intern community, 2019 intern slack, 2019 tech intern slack' },
          { prefix: "og: http://ogp.me/ns#", property: 'og:title', content: 'intern.community' },
          { prefix: "og: http://ogp.me/ns#", property: 'og:description', content: 'intern.community is a space for interns by interns. We want our summers to be about more than just work. It should be about exploring new cities, making new friends and having a good old time.' },
          { prefix: "og: http://ogp.me/ns#", property: 'og:type', content: 'website' },
          { prefix: "og: http://ogp.me/ns#", property: 'og:image', content: 'http://intern.community' + OgImage },
          { prefix: "og: http://ogp.me/ns#", property: 'og:image:secure_url', content: 'https://intern.community' + OgImage },
          { prefix: "og: http://ogp.me/ns#", property: 'og:url', content: 'http://intern.community/' },
        ]}
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: Favicon
          }
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
