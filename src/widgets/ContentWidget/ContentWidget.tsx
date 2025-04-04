import { JSX } from 'react'
import { InputForm } from '../../features/InputForm'
import { Videos } from '../VideosWidget/Videos'
import { DisplayInformation } from '../../features/DisplayInformation/DisplayInformation'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import {
  selectVideoStatus,
  selectVideosError,
} from '../../shared/redux/slices/videosSlice'
import { ModalWindow } from '../../features/ModalWindow/ModalWindow'

export const ContentWidget = (): JSX.Element => {
  const videosStatus = useAppSelector(selectVideoStatus)
  const error = useAppSelector(selectVideosError)

  if (videosStatus === 'succeeded') {
    return (
      <>
        <InputForm />
        <DisplayInformation />
        <Videos />
        <ModalWindow />
      </>
    )
  } else if (videosStatus === 'failed') {
    return <p>Ошибка загрузки: {error}</p>
  }

  return <InputForm></InputForm>
}
