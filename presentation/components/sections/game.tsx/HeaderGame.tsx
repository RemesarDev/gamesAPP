import { Ionicons } from '@expo/vector-icons';
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
                <Text className='font-normal'>{nombre}</Text>
            </View>
        </View>
        </>
    )
}

export default HeaderGame