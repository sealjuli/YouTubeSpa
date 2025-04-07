import { JSX } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { youTubeSpaRoutes } from '../../shared/routes/routes'

export const PrivateRoute = (): JSX.Element => {
  const isAuth = localStorage.getItem('token')
  return isAuth ? <Outlet /> : <Navigate to={youTubeSpaRoutes.login} replace />
}
