import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface props extends PressableProps{
    children: React.ReactNode;
    txtColor?: string;
    btnColor?: string;
    variant?: 'contenido' | 'solo-texto'
    className?: string;
    icon?: string
}


const CustomButton = ({children, btnColor, txtColor='white' ,variant='contenido',onPress,onLongPress,className,icon}:props) => {

    // color del icono: blanco para botones con fondo, oscuro para solo-texto
    const iconColor = variant === 'solo-texto' ? '#111' : '#fff';
    const iconSize = 24;

    if(variant === 'solo-texto'){
      return(
        <Pressable className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {/* ahora columna: texto arriba, icono debajo */}
          <View className="flex-col items-center justify-center">
            <Text className={`text-center ${txtColor} font-work-medium`}>{children}</Text>
            {icon ? <Ionicons name={icon as any} size={iconSize} color={iconColor} style={{ marginTop: 6 }} /> : null}
          </View>
        </Pressable>
      )
    }


  return (
    <Pressable className={`p-3 rounded-3xl ${btnColor} active:opacity-90 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {/* ahora columna: texto arriba, icono debajo */}
      <View className="flex-col items-center justify-center">
        <Text className={`text-center font-bold text-white text-2xl`}>{children}</Text>
        {icon ? <Ionicons name={icon as any} size={iconSize} color={iconColor} style={{ marginTop: 8 }} /> : null}
      </View>
    </Pressable>
  )
}

export default CustomButton