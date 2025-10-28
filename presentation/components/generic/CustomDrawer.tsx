import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, View } from 'react-native'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
        <View className='flex justify-center items-center m-3 p-10 h-[150px] rounded-xl bg-white ' >
            <View >
                <Image
                    source={require('@/assets/images/perfil.jpg')}
                    style={{ width: 80, height: 80 }}
                    className='rounded-full'
                />
            </View>
            <View className='flex justify-center items-center rounded-full h-24 w-24'>
                <Text className='font-extrabold text-3xl text-indigo-500'>Nombre Jugador</Text>
            </View>
        </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer