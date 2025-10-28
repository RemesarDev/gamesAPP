import { Video } from '@/infraestructure/interfaces/video';
import { VideoMapper } from '@/infraestructure/mappers/video.mapper';
import { igdbApi } from '../../api/games-api';

export const getVideoGameByID = async (id: number): Promise<Video[]> => {
  try {
    const query = `
      fields id, name, video_id;
      where game = ${id};
      limit 10;
    `;
    const { data } = await igdbApi.post('/game_videos', query);
    const videos = data.map(VideoMapper.fromIGDBToVideo);
    return videos;

  } catch (error) {
    console.error(error);
    throw new Error('No se pudo cargar ningun video');
  }
};