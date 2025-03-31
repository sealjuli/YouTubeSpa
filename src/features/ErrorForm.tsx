import { Button } from 'antd'
import { selectError } from '../shared/redux/slices/usersSlice'
import { StyledDiv } from '../shared/UI/StyledComponents'
import { useAppSelector, useAppDispatch } from '../shared/hooks/storeHooks'
import { clearUsersState } from '../shared/redux/slices/usersSlice'

export const ErrorForm = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)

  const closeErrorWindow = () => {
    dispatch(clearUsersState())
  }

  return (
    <StyledDiv>
      <p>{error}</p>
      <Button onClick={closeErrorWindow}>OK</Button>
    </StyledDiv>
  )
}
