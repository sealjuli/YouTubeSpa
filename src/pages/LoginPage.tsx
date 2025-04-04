import { JSX, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearUsersState } from '../shared/redux/slices/usersSlice'
import { useAppSelector, useAppDispatch } from '../shared/hooks/storeHooks'
import { selectStatus } from '../shared/redux/slices/usersSlice'
import { YouTubeSpaRoutes } from '../shared/helpers/Routes'
import { LoginForm } from '../features/LoginForm'
import { ErrorPage } from './ErrorPage'

export const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'succeeded') {
      navigate(`/${YouTubeSpaRoutes.root}/${YouTubeSpaRoutes.search}`)
      dispatch(clearUsersState())
    }
  }, [status, navigate])

  if (status === 'failed') {
    return <ErrorPage />
  }

  return <LoginForm />
}
