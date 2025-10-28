import { Video } from '@/infraestructure/interfaces/video';
import { useState } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

interface Props {
  videos: Video[]; // Array de IDs de YouTube
}

const FooterVideoGame = ({ videos }: Props) => {
  const screenWidth = Dimensions.get('window').width;
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

type YouTubePlayerState =
  | 'unstarted'
  | 'ended'
  | 'playing'
  | 'paused'
  | 'buffering'
  | 'cued';

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: 'white'
      }}>
        Videos
      </Text>

      <FlatList
        horizontal
        data={videos}
        keyExtractor={(_, index) => `${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ width: screenWidth * 0.8, marginHorizontal: 10 }}>
            <YoutubePlayer
              height={200}
              play={playingIndex === index}
              videoId={item.videoId}
                onChangeState={(state: YouTubePlayerState) => {
                if (state === 'playing') setPlayingIndex(index);
                if (state === 'paused' || state === 'ended') setPlayingIndex(null);
                }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default FooterVideoGame;