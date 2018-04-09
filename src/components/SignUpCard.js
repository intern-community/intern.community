import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'
import { lighten, darken, desaturate } from 'polished'
import { StyledLink, ArrowLink, ArrowButton } from './Links'
import { Formik, Form, Field } from 'formik'
import Yup from 'yup'

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
`

const CardSubtitle = styled.div`
  color: ${props => darken(0.1, desaturate(0.35, props.theme.main))};
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
  height: 18%;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(0, white, 91%, rgba(255, 255, 255, 0));
  border-radius: 6px;
`

const Moon = styled.div`
  width: 330px;
  height: 330px;
  position: absolute;
  right: -155px;
  top: 120px;
  background: linear-gradient(
    180deg,
    ${props => props.theme.main + ', ' + lighten(0.3, props.theme.main)}
  );
  opacity: 0.44;
  border-radius: 50%;
  /* transform: translateY(250px); */
`

const Landmark = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 184px;
  left: 0;
  /* transform: translate(-10px, 50px); */
  background: url(${props => props.landmark});
`

const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
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

const SignUp = props => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      company: '',
      school: '',
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email("Email isn't valid")
        .required('Email is required'),
      company: Yup.string(),
      school: Yup.string(),
    })}
    onSubmit={values => {
      console.log(values)
      console.log(props.city)
    }}
    render={({ values, errors, touched, isSubmitting }) => (
      <SignUpForm>
        <SignUpLabel for="name" submitting={isSubmitting}>
          Your name
        </SignUpLabel>
        <SignUpInputContainer>
          <SignUpInput
            // type="text"
            name="name"
            placeholder="Jane Doe"
            data-submitting={isSubmitting}
          />
          {touched.name &&
            errors.name && <SignUpError>{errors.name}</SignUpError>}
        </SignUpInputContainer>
        <SignUpLabel for="email" submitting={isSubmitting}>
          Your Email
        </SignUpLabel>
        <SignUpInputContainer>
          <SignUpInput
            type="email"
            name="email"
            placeholder="you@example.com"
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
            // type="text"
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
            // type="text"
            name="school"
            placeholder="Harvard"
            data-submitting={isSubmitting}
          />
          {touched.school &&
            errors.school && <SignUpError>{errors.school}</SignUpError>}
        </SignUpInputContainer>
        <ArrowButton disabled={isSubmitting}>Join the Community</ArrowButton>
      </SignUpForm>
    )}
  />
)

class SignUpCard extends Component {
  state = {
    open: false,
  }
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Card>
          <div>
            <CardSubtitle>INTERNS 2018</CardSubtitle>
            <CardTitle>{this.props.theme.city}</CardTitle>
          </div>
          {!this.state.open ? (
            <div>
              <Cover />
              <Moon />
              <Landmark landmark={this.props.theme.landmark} />
            </div>
          ) : (
            <SignUp city={this.props.theme.city} />
          )}
          {!this.state.open && (
            <ArrowButton
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