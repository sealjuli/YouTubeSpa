import { Button } from 'antd'
import { selectError } from '../../shared/redux/slices/usersSlice'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import { clearUsersState } from '../../shared/redux/slices/usersSlice'
import './errorPageStyle.css'

export const ErrorPage = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)

  const closeErrorWindow = () => {
    dispatch(clearUsersState())
  }

  return (
    <div className="styledDiv">
      <p>{error}</p>
      <Button onClick={closeErrorWindow}>OK</Button>
    </div>
  )
}
