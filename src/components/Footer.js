import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 7em;
  padding: 30px 70px;
  font-size: .75em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
    color: #888;
    letter-spacing: .5px;
  }
  a {
    color: #888;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <p>© 2018 Intern Community. All rights reserved.</p>
      <div>
        <p>Made with ♥ by interns</p>
        <p>Having problems? <a href="https://m.me/grgwlff" target="_blank">Let us know!</a></p>
      </div>
    </Wrapper>
  );
}

export default Footer
