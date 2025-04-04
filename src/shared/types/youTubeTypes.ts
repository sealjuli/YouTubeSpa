export type YouTubeResponse = {
  kind: string;
  etag: string;
  items: YoutubeSearchResult[];
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export type YoutubeSearchResult = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  };
  snippet: {
    title: string;
    description: string;
    channelTitle: string;
    publishTime: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
    };
  };
}

type Thumbnail = {
  url: string;
  width: number;
  height: number;
}
