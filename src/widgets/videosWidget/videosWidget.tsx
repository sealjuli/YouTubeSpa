import { JSX } from 'react'
import { Row } from 'antd'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectVideosArray } from '../../shared/redux/slices/videosSlice'
import { VideoCard } from '../../entities/videoCard/videoCard'

import './videosWidgetStyle.css'

export const VideosWidget = (): JSX.Element => {
  const videos = useAppSelector(selectVideosArray)

  if (videos && videos.items.length > 0) {
    const arr = videos.items.map((val, index) => {
      return <VideoCard key={index} info={val} />
    })

    return <Row className="container">{arr}</Row>
  }

  return <p>Нет видео по текущему запросу</p>
}
