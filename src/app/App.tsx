import { JSX } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { YouTubeSpaRoutes } from '../shared/helpers/Routes'
import { Layout } from '../pages/Layout'
import { LoginPage } from '../pages/LoginPage'
import { PrivateRoute } from '../pages/PrivateRoute'
import { SearchPage } from '../pages/SearchPage'

import './App.css'

export const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path={YouTubeSpaRoutes.root} element={<Layout />}>
          <Route
            index
            element={<Navigate to={YouTubeSpaRoutes.login} replace />}
          />
          <Route path={YouTubeSpaRoutes.login} element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path={YouTubeSpaRoutes.search} element={<SearchPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
