import { css } from 'styled-components';

const sizes = {
  desktop: 1690,
  tablet: 839,
  phone: 480
}
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media;
