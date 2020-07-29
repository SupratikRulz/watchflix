import { navigate } from 'gatsby'
import React from 'react'

import SignIn from 'components/SignIn'

import paths from 'constants/paths'

import firebase from 'services/firebase'

export default function SignInPage() {
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

  return firebaseInitialized !== false && <SignIn />
}
