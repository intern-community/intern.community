import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import styled, { injectGlobal, ThemeProvider, keyframes, css } from 'styled-components'
import { lighten, darken, desaturate, transparentize } from 'polished'
import { Formik, Form, Field } from 'formik'
import Yup from 'yup'
import axios from 'axios'
import 'gsap/TweenMax'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


import { StyledAnchor, StyledLink, ArrowLink, ArrowButton, CtaButton } from './Links'
import media from '../utils/media'

const Card = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
  height: 526px;
  padding: 40px 35px 35px 40px;
  margin: 0 -9px;
  overflow: hidden;
  background: white;
  border: 2px solid #f1f1f1;
  /* box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.13), 0 9px 22px rgba(0, 0, 0, 0.11), */
  border-radius: 6px;
  transform: scale(0.9);
  ${media.tablet`
    width: 115%;
  `}
`

const CardSubtitle = styled.div`
  color: ${props => darken(0.3, desaturate(0.35, props.theme.main))};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9em;
`

const CardTitle = styled.h1`
  color: ${props => props.theme.main};
  margin-bottom: 0;
`

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => (props.theme.id === 'sf' && '19%') ||
              (props.theme.id === 'nyc' && '31%') ||
              (props.theme.id === 'sea' && '31%')};
  bottom: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(0, white,
    ${props => (props.theme.id === 'sf' && '91%') ||
              (props.theme.id === 'nyc' && '81%') ||
              (props.theme.id === 'sea' && '79%')}, rgba(255, 255, 255, 0));
  border-radius: 6px;
`

const Moon = styled.div`
  width: 330px;
  height: 330px;
  position: absolute;
  left: -155px;
  top: 140px;
  background: linear-gradient(180deg, ${props => props.theme.main + ', ' + lighten(0.3, props.theme.main)});
  opacity: 0;
  border-radius: 50%;
  transform: translateY(250px);
`

const Landmark = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top:  ${props => (props.theme.id === 'sf' && '186px') ||
              (props.theme.id === 'nyc' && '128px') ||
              (props.theme.id === 'sea' && '104px')};
  left:  ${props => (props.theme.id === 'sf' && '0') ||
              (props.theme.id === 'nyc' && '120px') ||
              (props.theme.id === 'sea' && '114px')};
  transform: translate(10px, 50px);
  background: no-repeat url(${props => props.landmark});
  background-position-x: ${props => (props.theme.id === 'sf' && '-22px')};
`

const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
`

const SignUpLabel = styled.label`
  font-size: 0.8rem;
  color: ${props =>
    props.submitting ? desaturate(0.5, props.theme.main) : props.theme.main};
  transition: color 0.5s ease;
`

const SignUpInput = styled(Field)`
  font-size: 1rem;
  width: 100%;
  color: ${props =>
    desaturate(
      props.submitting ? '.2' : '.3',
      props.submitting
        ? lighten(0.15, props.theme.main)
        : darken(0.45, props.theme.main)
    )};
  padding: 2px 0;
  margin-bottom: 19px;
  outline: none;
  border: none;
  box-shadow: inset 0 -1px #efefef;
  transition: box-shadow 0.2s ease, color 0.5s ease;
  &::placeholder {
    font-weight: normal;
    color: #d2d2d2;
  }
  &:focus {
    box-shadow: inset 0 -2px ${props => lighten(0.25, props.theme.main)};
  }
`

const SignUpError = styled.span`
  color: #ff7c7c;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
  position: absolute;
  bottom: -3px;
  left: 0;
  &:before {
    content: '→';
  }
`

const SignUpInputContainer = styled.div`
  position: relative;
`

const FormResponse = styled.p`
  margin: 1rem 0 auto;
  color: ${props => props.theme.main};
`

const Loader = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  &:after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.main};
    border-color: ${props => props.theme.main + ' transparent ' + props.theme.main + ' ' + props.theme.main};
    animation: ${
      keyframes`
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }`} 1.2s linear infinite;
  }
`;

const SignUp = props => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      company: '',
      school: '',
    }}
    validate={values => {
      let errors = {};
      if (!values.email) errors.email = 'Email is required';
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.edu$/i.test(values.email)) errors.email = 'Email must be .edu address'
      if (!values.name) errors.name = 'Name is required';
      return errors;
    }}
    onSubmit={values => {
      axios.post("https://intern-community-invite.herokuapp.com/invite", {
        id: props.id,
        email: values.email,
        name: values.name,
        company: values.company,
        school: values.school
      }).then(response => {
        props.formResponse(response.data);
        //navigateTo({pathname: "/"+props.id, state: { context: response.data } })
      })
    }}
    render={({ values, errors, touched, isSubmitting }) => (
      <SignUpForm>
        <SignUpLabel for="name" submitting={isSubmitting}>
          Your name
        </SignUpLabel>
        <SignUpInputContainer>
          <SignUpInput
            name="name"
            placeholder="Jane Doe"
            data-submitting={isSubmitting}
          />
          {touched.name &&
            errors.name && <SignUpError>{errors.name}</SignUpError>}
        </SignUpInputContainer>
        <SignUpLabel for="email" submitting={isSubmitting}>
          Your school email
        </SignUpLabel>
        <SignUpInputContainer>
          <SignUpInput
            type="email"
            name="email"
            placeholder="you@example.edu"
            data-submitting={isSubmitting}
          />
          {touched.email &&
            errors.email && <SignUpError>{errors.email}</SignUpError>}
        </SignUpInputContainer>
        <SignUpLabel for="company" submitting={isSubmitting}>
          Which company are you working at?
        </SignUpLabel>
        <SignUpInputContainer>
          <SignUpInput
            name="company"
            placeholder="Google"
            data-submitting={isSubmitting}
          />
          {touched.company &&
            errors.company && <SignUpError>{errors.company}</SignUpError>}
        </SignUpInputContainer>
        <SignUpLabel for="school" submitting={isSubmitting}>
          What school do you attend?
        </SignUpLabel>
        <SignUpInputContainer>
          <SignUpInput
            name="school"
            placeholder="Harvard"
            data-submitting={isSubmitting}
          />
          {touched.school &&
            errors.school && <SignUpError>{errors.school}</SignUpError>}
        </SignUpInputContainer>
        <div>
          <CtaButton style={(values.name && values.email) ? {opacity: 1} : {opacity:0}} disabled={isSubmitting}>{isSubmitting ? <Loader /> : 'Join'}</CtaButton>
        </div>
      </SignUpForm>
    )}
  />
)

injectGlobal`
  .fade-in {
    opacity: 0;
    transform: translateY(3px);
  }
  .fade-anim-enter {
    opacity: 0.01;
    transform: translateY(4px);
  }
  .fade-anim-enter.fade-anim-enter-active {
    opacity: 1;
    transition: all 200ms ease-in;
    transform: translateY(0px);
  }
`
class SignUpCard extends Component {
  state = {
    open: false,
    response: false,
  }
  handleResponse = (msg) => {
    this.setState({response: msg})
  }
  componentDidMount () {
    new TweenMax.staggerTo('.fade-in', 0.5, {
      opacity: 1,
      delay: .5,
      y: 0
    }, .15);
    new TweenMax.staggerTo('.bridge', 2, {
      ease: Quart.easeOut,
      opacity: 1,
      delay: .2,
      y: 0,
      x: 0
    }, .15);
    new TweenMax.staggerTo('.circle', 2, {
      ease: Cubic.easeOut,
      opacity: .44,
      y: 0
    }, .15);
  }
  render() {
    const invite = (id) => ({
      "sf": "https://join.slack.com/t/sfbayinterns2018/shared_invite/enQtMzIxNDgxNDQ4MzA5LWFhNzU5YjA2MjllN2ZlMzQyOTZlODljMTA4YmFlMzM2NDg1ODBjMDRhNzkwM2ZlNGUwNDFmNjkzYjQxODY3YjI",
      "nyc": "https://join.slack.com/t/nycinterns2018/shared_invite/enQtMzYwNzUwOTM1OTM3LWI3NzE0NWE0MmRkNWUzMzNkNTc3ODlkMmJmNjMzYzEwNDE2NDZhMTRlOTZhMGM5Y2VjMTc2YjgyMTE5NzcyZGE",
      "sea": "https://join.slack.com/t/seattleinterns2018/shared_invite/enQtMzYxNDM1NDQ2Nzg5LWM3ZDdkMmVlODQyNDg2NWU1NTAyZjc3YTdjNmM2YjhmZTk5YzdiYWVhMDdiYjk2YWQ5MzRkZjliMzk3NWNiOTM"
    })[id]
    return (
      <ThemeProvider theme={this.props.theme}>
        <Card className="card-in">
          <div>
            <CardSubtitle className="fade-in">INTERNS 2018</CardSubtitle>
            <CardTitle className="fade-in">{this.props.theme.city}</CardTitle>
          </div>
          <div style={this.state.response ? {margin: '1rem 0 auto'}:{margin: '0'}}>
          <TransitionGroup>
            {!this.state.open ? (
              <div>
                <Cover />
                <Moon className="circle"/>
                <Landmark className="bridge" landmark={this.props.theme.landmark} />
              </div>
            ) : 
            this.state.response === 'ok' ? (
                <FormResponse><strong>Success! 💯</strong><br/>Check your email for the invite.</FormResponse>
            ) : 
            this.state.response === 'existing' ? (
                <FormResponse><strong>You've already been invited! 🕶</strong><br/>Visit <StyledAnchor href={'https://'+this.props.theme.url}>{this.props.theme.url}</StyledAnchor> to get your account set up!</FormResponse>
            ) : 
            this.state.response === 'failed: invite_limit_reached' ? (
                <FormResponse><strong>Success! 💯</strong><br/>Click <StyledAnchor href={invite(this.props.theme.id)}>here</StyledAnchor> to join Slack.</FormResponse>
            ) : 
            this.state.response ? (
                <FormResponse>{this.state.response}</FormResponse>
            ) :
            (
              <CSSTransition
                classNames="fade-anim"
                timeout={{ enter: 500, exit: 300 }}>
                <SignUp
                  city={this.props.theme.city}
                  id={this.props.theme.id}
                  formResponse={this.handleResponse}
                />
              </CSSTransition>
            )}
          </TransitionGroup>
          </div>
          {!this.state.open && (
            <ArrowButton
              className="fade-in"
              style={{alignSelf: 'flex-end'}}
              onClick={() => this.state.open || this.setState({ open: true })}
            >
              Join the Community
            </ArrowButton>
          )}
        </Card>
      </ThemeProvider>
    )
  }
}

export default SignUpCard
