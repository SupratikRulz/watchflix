import { navigate } from 'gatsby'
import React from 'react'

import Register from 'components/Register'

import paths from 'constants/paths'
import firebase from 'services/firebase'

export default function RegisterPage() {
  const [firebaseInitialized, setFirebaseInitialized] = React.useState(false)

	React.useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
    }).then(() => {
      if (firebase.getCurrentUsername()) {
        navigate(paths.DASHBOARD)
        return null
      }
    })
  }, [])

  return firebaseInitialized !== false && <Register />
}
