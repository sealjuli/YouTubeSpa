import { JSX } from 'react'
import { Row } from 'antd'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectVideosArray } from '../../shared/redux/slices/videosSlice'
import { VideoCard } from '../../entities/VideoCard/VideoCard'

import './VideosStyle.css'

export const Videos = (): JSX.Element => {
  const videos = useAppSelector(selectVideosArray)

  if (videos) {
    const arr = videos.items.map((val, index) => {
      return <VideoCard key={index} info={val} />
    })

    return <Row className="container">{arr}</Row>
  }

  return <p>Нет видео по текущему запросу</p>
}
