import React from 'react'

const SF = ({location}) => (
  <div>
    {
      location.state ? 
        location.state.context === 'ok' && (
          <h1>ok</h1>
        ) || 
        location.state.context === 'existing' && (
          <h1>existing</h1>
        ) :
        (
          <h1>default</h1>
        )
    }
  </div>
)

export default SF;
