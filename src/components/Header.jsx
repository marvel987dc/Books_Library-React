import React from 'react'

const Header = (props) => {
  return (
    <body >
      <div className='header'>
        <h1>{props.title}</h1>
     </div>
    </body>
  )
}

export default Header
