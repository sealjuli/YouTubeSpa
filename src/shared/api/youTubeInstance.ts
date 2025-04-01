import axios from 'axios'

export const youtubeInstance = axios.create({
    baseURL: import.meta.env.VITE_YOUTUBE_URL

})
