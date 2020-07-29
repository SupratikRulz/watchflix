import PropTypes from 'prop-types'
import React from 'react'

export default function Route({ component: Component, ...props }) {
  return <Component {...props} />
}

Route.propTypes = {
  component: PropTypes.any.isRequired,
}
