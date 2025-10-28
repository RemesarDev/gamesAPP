import MarcoFondo from '@/presentation/components/generic/MarcoFondo';
import BodyGame from '@/presentation/components/sections/game/BodyGame';
import FooterGame from '@/presentation/components/sections/game/FooterGame';
import FooterVideoGame from '@/presentation/components/sections/game/FooterVideoGame';
import HeaderGame from '@/presentation/components/sections/game/HeaderGame';
import { useGames } from '@/presentation/hooks/useGames';
import { useVideos } from '@/presentation/hooks/useVideos';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const GameScreen = () => {
  const { id } = useLocalSearchParams();
  const { gameQuery } = useGames(+id);
  const { videoQuery } = useVideos(+id);
  
  if (gameQuery.isLoading || !gameQuery.data) {
    return (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='mb-4'>Espere por favor</Text>
        <ActivityIndicator color='purple' size={30} />
      </View>
    )
  }

  return (

    <MarcoFondo>
      <ScrollView>
        <HeaderGame
          poster={gameQuery.data?.coverUrl ?? ''}
          nombre={gameQuery.data?.name ?? 'Sin nombre'}
        />
        
        <BodyGame
          descripcion={gameQuery.data?.summary ?? ''}
          puntaje={gameQuery.data?.aggregatedRating ?? 0}
          releaseDate={gameQuery.data?.releaseDate ?? ''}
        />

        <FooterGame id={id} />

        {Array.isArray(videoQuery.data) && videoQuery.data.length > 0 && (
        <FooterVideoGame videos={videoQuery.data} />
)}

      </ScrollView>
    </MarcoFondo>
  )
}

export default GameScreen