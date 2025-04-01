import { youtubeInstance } from '../api/youTubeInstance'
import { YouTubeResponse } from '../types/youTubeTypes'

export const youTubeApi = {
    getVideos(query: string) {
        return youtubeInstance.get<YouTubeResponse>('/search', {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                key: import.meta.env.VITE_YOUTUBE_API_KEY
            }
        });
    },
}