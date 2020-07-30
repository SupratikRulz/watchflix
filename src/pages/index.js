import React from "react"
import { Router } from '@reach/router'

import Dashboard from 'components/Dashboard'
import Home from 'components/Home'
import Register from 'components/Register'
import Route from 'components/Route'
import RoutePrivate from 'components/RoutePrivate'
import SignIn from 'components/SignIn'

import paths from 'constants/paths'

import firebase from 'services/firebase'
import { navigate } from "gatsby"


function Index() {
  const [firebaseInitialized, setFirebaseInitialized] = React.useState(false)
  const name = typeof window !== 'undefined' && firebase().getCurrentUsername()

	React.useEffect(() => {
		firebase().isInitialized().then(val => {
			setFirebaseInitialized(val)
    })
  }, [])
  
  if (name) {
    if (typeof window !== 'undefined') {
      navigate(paths.DASHBOARD)
    }
    return null
  }

  return firebaseInitialized !== false && (
    <Router>
      <RoutePrivate path={paths.DASHBOARD} component={Dashboard} default />
      <Route path={paths.SIGN_IN} component={SignIn} />
      <Route path={paths.REGISTER} component={Register} />
      <Route path={paths.HOME} component={Home} />
    </Router>
  )
}

export default Index
