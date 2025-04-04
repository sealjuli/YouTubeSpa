import { JSX } from 'react'
import { Col, Row } from 'antd'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectVideosArray } from '../../shared/redux/slices/videosSlice'
import { selectDisplayValue } from '../../shared/redux/slices/dispaySlice'
import { displayEnum } from '../../shared/helpers/displayEnum'

import './VideosStyle.css'

export const Videos = (): JSX.Element => {
  const videos = useAppSelector(selectVideosArray)
  const displayBlocks =
    useAppSelector(selectDisplayValue) === displayEnum.blocks

  if (videos) {
    const arr = videos.items.map((val, index) => {
      return (
        <Col
          key={index}
          span={displayBlocks ? 6 : 24}
          className={`videoCard ${displayBlocks ? 'blocks' : 'lines'}`}
          onClick={() =>
            window.open(
              `https://www.youtube.com/watch?v=${val.id.videoId}`,
              '_blank'
            )
          }
        >
          <img src={val.snippet.thumbnails.medium.url} alt="img" />
          <div
            className={`videoInformation ${displayBlocks ? 'blocks' : 'lines'}`}
          >
            <b>{val.snippet.title}</b>
            <span className="channelTitle">{val.snippet.channelTitle}</span>
          </div>
        </Col>
      )
    })

    return <Row className="container">{arr}</Row>
  }

  return <p>Нет видео по текущему запросу</p>
}
