import { JSX } from 'react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/storeHooks'
import { selectLikeValue } from '../../shared/redux/slices/likeSlice'
import { changeShowWindow } from '../../shared/redux/slices/modalWindowSlice'
import { selectInputValue } from '../../shared/redux/slices/inputValueSlice'
import { setRequest } from '../../shared/redux/slices/modalWindowSlice'
import { selectIsSucceededStatus } from '../../shared/redux/slices/videosSlice'
import './likeButtonStyle.css'

export const LikeButton = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const liked = useAppSelector(selectLikeValue)
  const query = useAppSelector(selectInputValue)
  const succeededStatus = useAppSelector(selectIsSucceededStatus)

  const clickLike = () => {
    dispatch(setRequest(query))
    dispatch(changeShowWindow())
  }

  return (
    <div className={succeededStatus ? 'visible' : 'hidden'}>
      <span
        className={`likeButton ${liked ? 'liked' : ''}`}
        onClick={clickLike}
      >
        {liked ? <HeartFilled /> : <HeartOutlined />}
      </span>
    </div>
  )
}
