import React from 'react'
import Link from 'gatsby-link'
import SignUpCard from '../components/SignUpCard'

const IndexPage = () => (
  <div>
    <div
      style={{
        textAlign: 'center',
        padding: '5rem 0',
      }}
    >
      <h1>intern community</h1>
      <p>
        We’re a community of designers, developers, product managers, data
        engineers, digital marketers—interns. We hold monthly Q&A’s throughout
        the summer, and help to provide any resources needed to be your one-stop
        guide for the best summer internship experience!
      </p>
    </div>
    <SignUpCard />
  </div>
)

export default IndexPage
