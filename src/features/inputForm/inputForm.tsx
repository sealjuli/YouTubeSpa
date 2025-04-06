import { ChangeEvent, JSX } from 'react'
import { Input } from 'antd'
import type { GetProps } from 'antd'
import { LikeButton } from '../likeButton/likeButton'
import {
  fetchGetVideos,
  selectVideoStatus,
} from '../../shared/redux/slices/videosSlice'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/storeHooks'
import {
  updateInputValue,
  updateSearchInputValue,
  selectInputValue,
} from '../../shared/redux/slices/inputValueSlice'
import {
  selectLikeValue,
  removeLikeButton,
} from '../../shared/redux/slices/likeSlice'
import { clearQuery } from '../../shared/redux/slices/modalWindowSlice'

type SearchProps = GetProps<typeof Input.Search>
const { Search } = Input

export const InputForm = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const videosStatus = useAppSelector(selectVideoStatus)
  const inputValue = useAppSelector(selectInputValue)
  const like = useAppSelector(selectLikeValue)

  const onSearch: SearchProps['onSearch'] = (value) => {
    dispatch(updateSearchInputValue())
    dispatch(fetchGetVideos({ request: value, quantity: 12, sortBy: 'none' }))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateInputValue(event.target.value))
    dispatch(clearQuery())
    if (like) {
      dispatch(removeLikeButton())
    }
  }

  return (
    <div className="inputForm">
      <h1>Поиск видео</h1>
      <Search
        placeholder="Что ищем?"
        enterButton="Найти"
        size="large"
        onSearch={onSearch}
        onChange={handleChange}
        value={inputValue}
        style={{ maxWidth: '40vw' }}
        loading={videosStatus === 'loading'}
        suffix={<LikeButton />}
      />
    </div>
  )
}
