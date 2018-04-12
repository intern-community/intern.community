import React from 'react'
import styled from 'styled-components'
import TextHero from '../components/TextHero'

const Image = styled.img`
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(58,71,80,.2);
`

const NotFoundPage = () => (
  <div>
    <TextHero centered>
      <h1>404 NOT FOUND</h1>
      <Image src="https://i.redd.it/ni7xbwxvdbh01.gif"/>
    </TextHero>
  </div>
)

export default NotFoundPage
