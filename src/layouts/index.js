import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../assets/fonts.css'

class Layout extends React.Component {
  render() {
    const isLanding = this.props.location.pathname === '/'
    const isSF = this.props.location.pathname.split('/')[1] === 'sf'
    const isSEA = this.props.location.pathname.split('/')[1] === 'seattle'
    const isNYC = this.props.location.pathname.split('/')[1] === 'nyc'

    return (
      <div>
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
      <main
        style={{
          margin: '0 auto',
          maxWidth: 680,
          WebkitFontSmoothing: 'antialiased'
        }}
      >
        {this.props.children()}
      </main>
    </div>
    );
  }
}

export default Layout;
