import { Video } from "../interfaces/video";

export const VideoMapper = {
  fromIGDBToVideo: (rawVideo: any): Video => {
    // soportar video_id (snake_case) o videoId (camelCase) y convertir a string
    return {
      id: rawVideo.id,
      name: rawVideo.name ?? 'Video',
      videoId: rawVideo.video_id,
    };
  },
};