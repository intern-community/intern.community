import styled from 'styled-components'
import Link from 'gatsby-link';
import { darken, desaturate, lighten } from 'polished';

const defaultTheme = {
  theme: {
    main: '#777777'
  }
}

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

StyledLink.defaultProps = defaultTheme;

export const StyledButton = StyledLink.withComponent('button');
export const StyledAnchor = StyledLink.withComponent('a');

export const ArrowLink = StyledLink.extend`
  position: relative;
  margin: 0 24px 0 0;
  transition: opacity 0.5s ease;
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
export const ArrowAnchor = StyledLink.withComponent('a');

export const CtaButton = styled.button`
  margin-top: 0.4em;
  width: 100%;
  border: 1px solid ${props => props.theme.main};
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 15px 7px 15px;
  color: ${props => props.theme.main};
  box-shadow: 0px 0px 0 ${props => props.theme.main};
  transition: all 0.2s ease;
  position: relative;
  text-transform: uppercase;
  top: 0;
  left: 0;
  &:hover,
  &:focus {
    top: -2px;
    left: -2px;
    color: ${props => lighten(0.1, props.theme.main)};
    box-shadow: 2px 2px 0 ${props => lighten(0.1, props.theme.main)};
    border: 1px solid ${props => lighten(0.1, props.theme.main)}
  }
  &:active {
    top: 0;
    left: 0;
    color: ${props => props.theme.main};
    border: 1px solid ${props => props.theme.main};
    box-shadow: 0 0 0 ${props => props.theme.main};
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    color: ${props => desaturate(.5, props.theme.main)};
  }
`;

CtaButton.defaultProps = defaultTheme;
