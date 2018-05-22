import React from 'react'
import styled from 'styled-components'
import { TextHero, Image } from '../components'

const NotFoundPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <TextHero centered>
      <h1>404 NOT FOUND</h1>
      <Image src="https://i.redd.it/ni7xbwxvdbh01.gif"/>
    </TextHero>
  </div>
)

export default NotFoundPage
