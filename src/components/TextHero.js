import React from 'react'
import styled from 'styled-components'

const TextHero = styled.div`
  text-align: ${props => props.centered && 'center'};
  padding: 3rem 0 1rem;
`

export default TextHero;
