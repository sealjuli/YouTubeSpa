import { JSX } from 'react'
import { Col } from 'antd'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectIsBlocksValue } from '../../shared/redux/slices/dispaySlice'
import { YoutubeSearchResult } from '../../shared/types/youTubeTypes'

import './videoCardStyle.css'

type PropsType = {
  info: YoutubeSearchResult
}

const openYouTube = (videoId: string) => {
  window.open(
    `${import.meta.env.VITE_YOUTUBE_WATCH_URL}?v=${videoId}`,
    '_blank'
  )
}

export const VideoCard = ({ info }: PropsType): JSX.Element => {
  const displayBlocks = useAppSelector(selectIsBlocksValue)

  return (
    <Col
      span={displayBlocks ? 6 : 24}
      className={`videoCard ${displayBlocks ? 'blocks' : 'lines'}`}
      onClick={() => openYouTube(info.id.videoId ?? '')}
    >
      <img src={info.snippet.thumbnails.medium.url} alt="img" />
      <div className={`videoInformation ${displayBlocks ? 'blocks' : 'lines'}`}>
        <b>{info.snippet.title}</b>
        <span className="channelTitle">{info.snippet.channelTitle}</span>
      </div>
    </Col>
  )
}
