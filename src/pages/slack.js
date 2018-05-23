import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import Collab from '../assets/collab.svg'

import media from '../utils/media'
import {
  StyledAnchor,
  StyledLink,
  StyledButton,
  ArrowButton,
  TextHero,
  SignUpContainer,
  SignUpCard,
  Logo,
  LogoWrap,
  Faq,
  FaqArrow,
} from '../components'

const COLORS = ['#f55353', '#6279F2', '#A762F2']
let data = [
  {
    name: 'SF/Bay Area',
    value: 1227,
  },
  {
    name: 'New York City',
    value: 286,
  },
  {
    name: 'Seattle',
    value: 873,
  },
]

injectGlobal`
.recharts-tooltip-item {
  margin-bottom: 0;
  padding-top: 0 !important;
}
`

const CollabPic = styled.img`
  width: 330px;
  margin: 20px 0;
`

const SlackPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <TextHero centered>
      <LogoWrap bg>
        <Logo />intern.community
      </LogoWrap>
      {/* <p>
        intern.community<Logo size="s"/> is a group of designers 🎨, developers 💻, product managers 💼, data
        engineers 📊, digital marketers—interns. We nourish a growing Slack
        community 💪, and will be hosting events 🎟, meetups 🚙, and Q&As throughout the
        summer. We want to provide a community for the thousands of students
        interning over the summer, and become your one-stop guide to an awesome
        summer experience! 👍
      </p> */}
      <p>
        intern.community is a group of designers, developers, product managers,
        data engineers, digital marketers—interns. We nourish a growing Slack
        community, and will be hosting events, meetups, and Q&As throughout the
        summer. We want to provide a community for the thousands of students
        interning over the summer, and become your one-stop guide to an awesome
        summer experience!
      </p>
      <p>
        Want to obtain a diversified community, to prepare interns for a
        meaningful career and to nourish a community that is intellectually
        transformative. We want to challenge interns to make educated and
        ethically engaged connections across common tech disciplinary
        boundaries.
      </p>
      <p><CollabPic src={Collab}/></p>
      <p>
        The summer internship experience is unique. You get to meet amazing
        people who, like you, might be in a new city. You can leave work and
        enjoy yourself by checking out a new neighborhood or a new bar with
        erstwhile strangers. All in all, our hope is that more interns take the
        time to enjoy themselves outside of work and make some friends along the
        way.
      </p>
      <p>
        We facilitate this interdisciplinary communication between interns by:
        targeting both universities and companies to obtain a diverse range of
        backgrounds, and by performing outreach on a wide range of disciplines,
        to grow the community beyond typical tech-focused communities.
      </p>
    <p>
    <PieChart width={690} height={250}>
      <h2>Intern City</h2>
      <Pie data={data} cx={340} cy={120} innerRadius={50} outerRadius={100}>
        {data.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]}>{entry}</Cell>
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </p>
    <p>
      Towards the end of each summer, intern.community throws the biggest intern
      event—internpalooza. Uniting, supporting, and nourishing communication
      within our community. This huge event opens opportunities for sponsorship
      recognition, allowing a company's brand values to be pushed forward to an
      ambitious class of young professionals.
    </p>
    </TextHero>
  </div>
)

export default SlackPage
