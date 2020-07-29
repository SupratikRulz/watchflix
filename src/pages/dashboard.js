import React from 'react'

import Dashboard from 'components/Dashboard'
import RoutePrivate from 'components/RoutePrivate'

import paths from 'constants/paths'

export default function DashboardPage() {
  return <RoutePrivate path={paths.DASHBOARD} component={Dashboard} default />
}
