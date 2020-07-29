import { navigate } from 'gatsby'
import qs from 'qs'
import PropTypes from 'prop-types'
import React from 'react'
import Route from 'components/Route'

import firebase from 'services/firebase'
import paths from 'constants/paths'

// export default class RoutePrivate extends React.Component {

//   queryString = (typeof window !== 'undefined' && window.location.search) || ''

//   componentDidMount() {
//     this.getAuthStatus()
//   }

//   getAuthStatus = async () => {
//     const { fullPath, path } = this.props

//     const verifyStatus = await verifyPhone.status()

//     if (verifyStatus) {
//       this.context.updateUser({ user: true })
//     } else {
//       navigate(
//         `${paths.SIGN_IN}?${qs.stringify({ redirect: `${fullPath || path}${this.queryString}` })}`
//       )
//     }
//   }

//   render() {
//     const { fullPath, path, ...props } = this.props

//     if (!get(this, 'context.user')) return null

//     return <Route {...props} />
//   }
// }

export default function RoutePrivate({ path, fullPath, ...props }) {
  const queryString = (typeof window !== 'undefined' && window.location.search) || ''

  if (firebase.getCurrentUsername()) {
    return <Route {...props} />
  } else {
    navigate(`${paths.SIGN_IN}?${qs.stringify({ redirect: `${fullPath || path}${queryString}` })}`)
  }
  return null
}

RoutePrivate.propTypes = {
  component: PropTypes.any.isRequired,
  fullPath: PropTypes.string,
  path: PropTypes.string.isRequired,
}
