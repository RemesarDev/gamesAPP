import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';

interface Props{
    poster: string;
    nombre: string;
}

const HeaderGame = ({poster,nombre}:Props) => {
    const {height:altoPantalla} = useWindowDimensions();
    const navigation = useNavigation();
    return (
        <>
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'transparent', 'transparent']} // tercer color añadido
          start={[0, 0]}
          style={{
            height: altoPantalla *0.4,
            position: 'absolute',
            zIndex: 1,
            width: '100%',
          }}
        />
        <View style={{
            position:'absolute',
            zIndex:99,
            elevation:10,
            top:40,
            left:10
        }}>
            <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back' size={30} color='white' className='shadow'/>
            </Pressable>
        </View>
        <View style={{height:altoPantalla * 0.7}} className='shadow-xl shadow-black/20'>
            <View className='flex-1 rounded-b-[25] overflow-hidden'>
                <Image source={{uri:poster}} resizeMode='cover' className='flex-1'/>
            </View>

            <View className='px-5 mt-5'>
                <Text className='text-2xl font-bold color-white'>{nombre}</Text>
            </View>
        </View>
        </>
    )
}

export default HeaderGame