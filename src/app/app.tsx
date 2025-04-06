import { JSX } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { YouTubeSpaRoutes } from '../shared/routes/routes'
import { LoginPage } from '../pages/loginPage/loginPage'
import { PrivateRoute } from '../pages/privateRoute/privateRoute'
import { HomePage } from '../pages/homePage/homePage'

import './app.css'

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={YouTubeSpaRoutes.root} element={<Outlet />}>
        <Route
          index
          element={<Navigate to={YouTubeSpaRoutes.login} replace />}
        />
        <Route path={YouTubeSpaRoutes.login} element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path={YouTubeSpaRoutes.search} element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  )
}
