import styled from 'styled-components'
import Link from 'gatsby-link';
import { lighten, desaturate } from 'polished';

export const StyledLink = styled(Link)`
  z-index: 2;
  border: none;
  background: none;
  padding: 0;
  text-decoration: none;
  color: ${props => props.theme.main};
  box-shadow: inset 0 -2px 0 ${props => lighten(0.25, props.theme.main)};/*rgba(245,83,83,0.3)*/
  transition: all 0.5s ease;
  &:hover,
  &:focus {
    color: ${props => lighten(0.1, props.theme.main)};
    box-shadow: inset 0 0 0 rgba(255,255,255,0);  
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    color: ${props => desaturate(.5, props.theme.main)};
  }
`;

StyledLink.defaultProps = {
  theme: {
    main: '#777777'
  }
}

export const StyledButton = StyledLink.withComponent('button');

export const ArrowLink = StyledLink.extend`
  position: relative;
  margin: 0 24px 0 0;
  &:after {
    content: " →";
    right: -24px;
    position: absolute;
    transition: right 0.5s ease;
  }
  &:hover:after,
  &:focus:after {
    right: -31px;
  }
`;

export const ArrowButton = ArrowLink.withComponent('button');
