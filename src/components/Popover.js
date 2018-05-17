import React, { Component } from 'react'
import styled from 'styled-components'

const TextCircle = styled.span`
  &:before {
    content: '${props => props.text ? props.text : ''}';
    margin: 4px;
    color: #ff7c7c;
    border: 2px solid #ececec;
    border-radius: 50%;
    position: absolute;
    top: -1px;
    width: 17px;
    height: 17px;
    text-align: center;
    line-height: 1.5;
    font-size: 0.65em;
    text-transform: initial;
  }
`

const PopoverBody = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  background: #f1f1f1;
  color: #5a595f;
  position: absolute;
  z-index: 99;
  right: -21px;
  top: 26px;
  width: 170px;
  padding: 12px;
  border-radius: 4px;
`

class Popover extends Component {
  state = {
    open: false
  }
  toggle = () => this.setState({open: !this.state.open})
  render() {
    return (
      <span onClick={this.toggle}>
        <TextCircle text="?" onClick={this.toggle}/>
        <PopoverBody isOpen={this.state.open}>{this.props.body}</PopoverBody>
      </span>
    )
  }
}

export default Popover;
