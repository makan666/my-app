import React from 'react'
import PropTypes from 'prop-types'

const Welcome = ({user}) => {
  return (
    <div>
      <h1>Hello, {user.name}</h1>
      <h1>{user.age}</h1>
    </div>
  )
}

Welcome.propTypes = {
  user: PropTypes.object
}

export default Welcome
