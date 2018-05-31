import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  LabelList,
  Cell,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
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

const COLORS = ['#f55353', '#6279F2', '#A762F2', '#F5A653', '#F5E153']
let locations = [
  {
    name: 'SF/Bay Area',
    value: 1499,
  },
  {
    name: 'New York City',
    value: 465,
  },
  {
    name: 'Seattle',
    value: 965,
  },
]

let schools = [
  {
    name: 'University of Washington',
    value: 218,
  },
  {
    name: 'University of Michigan',
    value: 143,
  },
  {
    name: 'UC Berkeley',
    value: 179,
  },
  {
    name: 'Carnegie Mellon University',
    value: 91,
  },
  {
    name: 'UIUC',
    value: 96,
  },
]

injectGlobal`
.recharts-tooltip-item {
  margin-bottom: 0;
  padding-top: 0 !important;
}
.recharts-legend-item {
  margin-bottom: 0;
}
.recharts-legend-item-text {
  font-size: 0.8em;
}
`
const TooltipFormatter = value => `${value} interns`

const CollabPic = styled.img`
  width: ${props => (props.small ? '160px' : '330px')};
  margin: ${props => (props.small ? '0 0 34px' : '1.58rem 0 3.16rem')};
`

const TwoCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px -50vw;
  padding: 30px 0;
  right: 50%;
  ${media.tablet`
    flex-direction: ${props => (props.reverse ? `column-reverse` : `column`)};
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 50px 0;
    margin: 40px 0;
  `};
`

const ColDetail = styled.div`
  ${props =>
    props.left &&
    `
    text-align: left;
    padding-right: 60px;
    margin-right: 50px;
  `} ${props =>
    props.right &&
    `
    text-align: right;
    padding-left: 60px;
    margin-left: 50px;
  `}
  width: 345px;
  h4 {
    margin-bottom: 10px;
  }
  p {
    font-size: 0.85em;
    margin-bottom: 0;
  }
  ${media.tablet`
    text-align: center;
    padding: 0;
    margin: 0 0 30px 0;
  `};
`

const BenefitsList = styled.ul`
  text-align: left;
  padding: 50px 70px 35px;
  border: 2px solid #eaeaea;
  border-radius: 5px;
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
        interning over the summer, and become the one-stop guide to an awesome
        summer experience!
      </p>
      <p>
        The summer internship experience is unique. You get to meet amazing
        people who, like you, might be in a new city. You can leave work and
        enjoy yourself by checking out a new neighborhood or a new bar with
        erstwhile strangers. All in all, our hope is that we can connect interns
        outside of work and beyond their initial companies.
      </p>
      <p>some image/illustration here?</p>
      <p>
        We want to prepare interns for a meaningful career, to nourish a
        community that is intellectually transformative, and to challenge
        interns on making educated and ethically engaged connections across
        common tech disciplinary boundaries.
      </p>
      <p>
        Towards the end of each summer, intern.community throws the biggest
        intern event in SF—internapalooza. The event serves to unite, support,
        and stengthen communication and connections within our community. This
        huge event opens opportunities for sponsorship recognition, allowing a
        company's brand values to be pushed forward to an ambitious class of
        young professionals.
      </p>
      <p>
        We facilitate interdisciplinary communication between interns by:
        targeting both universities and companies to obtain a diverse range of
        backgrounds, and by performing outreach on a wide range of disciplines—
        to grow the community beyond typical tech-focused communities.
      </p>
      <TwoCol>
        <ColDetail left>
          <h4>University Breadth</h4>
          <p>
            We have interns from more than 400 universities worldwide. Forming
            the community around a wider range of schools, to us, ensures a
            diverse and open-minded community
          </p>
        </ColDetail>
        <div>
          <h5>Top Intern Universities</h5>
          <BarChart
            width={370}
            height={250}
            margin={{
              left: window.innerWidth > 839 ? 40 : 0,
              top: 0,
              right: 0,
              bottom: window.innerWidth > 839 ? 0 : 15,
            }}
            data={schools}
            layout={window.innerWidth > 839 ? 'vertical' : 'horizontal'}
          >
            <XAxis
              dataKey={window.innerWidth > 839 ? 'value' : 'name'}
              type={window.innerWidth > 839 ? 'number' : 'category'}
              tick={
                window.innerWidth > 839
                  ? { fontSize: 16, width: 60 }
                  : { fontSize: 12, width: 20 }
              }
              interval={window.innerWidth > 839 ? 'preserveEnd' : 0}
            />
            <YAxis
              dataKey={window.innerWidth > 839 ? 'name' : 'value'}
              type={window.innerWidth > 839 ? 'category' : 'number'}
              tick={
                window.innerWidth > 839
                  ? { fontSize: 12, width: 170 }
                  : { fontSize: 16, width: 60 }
              }
            />
            <Bar dataKey="value">
              {window.innerWidth < 839 && (
                <LabelList
                  dataKey="value"
                  fill="#f9f9f9"
                  position="insideTop"
                  offset={10}
                />
              )}
              {schools.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]}>
                  {entry}
                </Cell>
              ))}
            </Bar>
            <Tooltip formatter={TooltipFormatter} cursor={false} />
          </BarChart>
        </div>
      </TwoCol>
      <p>
        We launched in March and have grown our SF/Bay Area, NYC, and Seattle
        Slack organizations to more than 2900 members across our three cities.
        We are projecting even greater growth as each intern starts their
        summers, and will be close to 4,000 members in the next few weeks.
      </p>
      <TwoCol reverse>
        <PieChart
          width={370}
          height={250}
          margin={{ left: 0, top: 0, right: 0, bottom: 0 }}
        >
          <Pie
            data={locations}
            dataKey="value"
            cx={100}
            cy={120}
            innerRadius={50}
            outerRadius={100}
          >
            {window.innerWidth < 839 && (
              <LabelList
                dataKey="value"
                fill="#f9f9f9"
                position="insideTop"
                offset={10}
              />
            )}
            {locations.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]}>
                {entry}
              </Cell>
            ))}
          </Pie>
          <Tooltip formatter={TooltipFormatter} />
          <Legend
            height={240}
            align="right"
            unit="people"
            layout="vertical"
            iconType="circle"
          />
        </PieChart>
        <ColDetail right>
          <h4>Location Breakdown</h4>
          <p>
            Although we include smaller intern cities in our community, our
            three flagships locations: SF/Bay Area, NYC, and Seattle attract the
            most attention.
          </p>
        </ColDetail>
      </TwoCol>
      <p>
        We'd like to help Slack increase brand awareness and recruit even
        stronger talent with intern.community. We're focused on providing a
        space for interns of various backgrounds to come together and forge
        deeper connections, allowing for more diversified and sagacious intern
        competencies.
      </p>

      <CollabPic src={Collab} />
      <p>
        We want to provide Slack with various
        benefits from our intern community:
      </p>
      <BenefitsList>
        <CollabPic
          src={Collab}
          small
          style={{ position: 'relative', left: '-20px' }}
        />
        <li>Crediting Slack as a principal sponsor</li>
        <li>
          Inviting Slack's keynote speakers to our intern kickoff event and
          internapalooza
        </li>
        <li>Adding Slack logo to website and monthly email newsletters</li>
        <li>
          Publicizing any events that Slack is hosting—such as the intern
          hackathon
        </li>
        <li>
          Promoting any Slack job postings towards our end-of-summer
          announcements
        </li>
        <li>
          Creating awareness of Slack and educational pricing for our member's
          organizations
        </li>
      </BenefitsList>
      <p>
      Our community is growing. Each Slack organization has surpassed its free limits and
        are closing in on 40K messages. We are asking for the Standard plan across our three cities for the
        months of June, July, August and September so that our communities can
        continue growing. After September, we're open to reviewing the
        partnership, and how it might benefit Slack further.
      </p>
      <p>
        Communities are about belonging. We're building ours on trust, respect,
        honesty, and communication. We've received palpable excitement from
        interns for this summer, and with your support in aiding communication
        between them, we can further develop a cohesive, confident, and
        prosperous community of interns.
      </p>
    </TextHero>
  </div>
)

export default SlackPage
