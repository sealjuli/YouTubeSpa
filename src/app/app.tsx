import { JSX } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { youTubeSpaRoutes } from '../shared/routes/routes'
import { LoginPage } from '../pages/loginPage/loginPage'
import { PrivateRoute } from '../pages/privateRoute/privateRoute'
import { HomePage } from '../pages/homePage/homePage'

import './appStyle.css'

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={youTubeSpaRoutes.root} element={<Outlet />}>
        <Route
          index
          element={<Navigate to={youTubeSpaRoutes.login} replace />}
        />
        <Route path={youTubeSpaRoutes.login} element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path={youTubeSpaRoutes.search} element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  )
}
