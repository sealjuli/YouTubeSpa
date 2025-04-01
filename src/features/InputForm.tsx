import { JSX, useState } from 'react'
import { Input } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import type { GetProps } from 'antd'
import { fetchGetVideos } from '../shared/redux/slices/videosSlice'
import { useAppDispatch } from '../shared/hooks/storeHooks'

import { useAppSelector } from '../shared/hooks/storeHooks'
import { selectVideoStatus } from '../shared/redux/slices/videosSlice'

type SearchProps = GetProps<typeof Input.Search>
const { Search } = Input

export const InputForm = (): JSX.Element => {
  const [liked, setLiked] = useState(false)
  const dispatch = useAppDispatch()

  const videosStatus = useAppSelector(selectVideoStatus)

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value)
    dispatch(fetchGetVideos(value))
  }

  return (
    <div>
      <h1>Поиск видео</h1>
      <Search
        placeholder="Что ищем?"
        // allowClear
        enterButton="Найти"
        size="large"
        onSearch={onSearch}
        // value={}
        style={{ maxWidth: '40vw' }}
        loading={videosStatus === 'loading'}
        suffix={
          videosStatus === 'succeeded' && (
            <span
              onClick={() => setLiked(!liked)}
              style={{
                cursor: 'pointer',
                fontSize: '18px',
                color: liked ? 'red' : 'gray',
              }}
            >
              {liked ? <HeartFilled /> : <HeartOutlined />}
            </span>
          )
        }
      />
    </div>
  )
}
