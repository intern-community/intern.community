import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => {
  const {isSF, isSEA, isNYC} = props; 
  return (
    <div
      style={{
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to={
              isSF && '/sf' ||
              isSEA && '/seattle' ||
              isNYC && '/nyc'
            }
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            { 
              isSF && 'SF/Bay Area Interns 2018' ||
              isSEA && 'Seattle Interns 2018' ||
              isNYC && 'New York City Interns 2018'
            }
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Header
