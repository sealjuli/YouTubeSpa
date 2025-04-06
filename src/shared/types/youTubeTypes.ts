export type YouTubeResponse = {
  kind: string
  etag: string
  items: YoutubeSearchResult[]
  nextPageToken?: string
  regionCode?: string
  pageInfo: PageInfo
}

export type YoutubeSearchResult = {
  kind: string
  etag: string
  id: Id
  snippet: Snippet
}

type PageInfo = {
  totalResults: number
  resultsPerPage: number
}

type Id = {
  kind: string
  videoId?: string
  channelId?: string
  playlistId?: string
}

type Snippet = {
  title: string
  description: string
  channelTitle: string
  publishTime: string
  thumbnails: Thumbnails
}

type Thumbnails = {
  default: Thumbnail
  medium: Thumbnail
  high: Thumbnail
}

type Thumbnail = {
  url: string
  width: number
  height: number
}
