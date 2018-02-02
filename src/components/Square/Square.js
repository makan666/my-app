import React from 'react'
import PropTypes from 'prop-types'

import './Square.css'

const Square = ({number, onClick}) => {

  return (
    <button className="square" onClick={onClick}>
      {number}
    </button>
  )
}

Square.propTypes = {
  number: PropTypes.any,
  onClick: PropTypes.func
}

export default Square
