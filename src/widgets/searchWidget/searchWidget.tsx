import { JSX } from 'react'
import { InputForm } from '../../features/inputForm/inputForm'
import { VideosWidget } from '../videosWidget/videosWidget'
import { DisplayInformation } from '../../features/displayInformation/displayInformation'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import {
  selectVideoStatus,
  selectVideosError,
} from '../../shared/redux/slices/videosSlice'
import { ModalWindow } from '../../features/modalWindow/modalWindow'

export const SearchtWidget = (): JSX.Element => {
  const videosStatus = useAppSelector(selectVideoStatus)
  const error = useAppSelector(selectVideosError)

  if (videosStatus === 'succeeded') {
    return (
      <>
        <InputForm />
        <DisplayInformation />
        <VideosWidget />
        <ModalWindow />
      </>
    )
  } else if (videosStatus === 'failed') {
    return <p>Ошибка загрузки: {error}</p>
  }

  return <InputForm></InputForm>
}
