import { JSX } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { YouTubeSpaRoutes } from '../shared/helpers/Routes'

export const PrivateRoute = (): JSX.Element => {
  const isAuth = localStorage.getItem('token')
  return isAuth ? <Outlet /> : <Navigate to={YouTubeSpaRoutes.login} replace />
}
