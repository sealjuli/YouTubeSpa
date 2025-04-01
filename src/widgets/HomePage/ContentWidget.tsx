import { JSX } from 'react'
import { InputForm } from '../../features/InputForm'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectVideoStatus } from '../../shared/redux/slices/videosSlice'

export const ContentWidget = (): JSX.Element => {
  const videosStatus = useAppSelector(selectVideoStatus)

  console.log(videosStatus)

  // if (videosStatus === 'succeeded') {
  // }

  return <InputForm></InputForm>
}
