import { youtubeInstance } from '../api/youTubeInstance'
import { YouTubeResponse } from '../types/youTubeTypes'
import { FieldType } from '../types/favoriteItemsTypes';

export const youTubeApi = {
    getVideos(req: Omit<FieldType, 'requestName'>) {
        return youtubeInstance.get<YouTubeResponse>('/search', {
            params: {
                part: 'snippet',
                q: req.request,
                type: 'video',
                key: import.meta.env.VITE_YOUTUBE_API_KEY,
                maxResults: req.quantity
            }
        });
    },
}