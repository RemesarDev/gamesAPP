import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface props extends PressableProps{
    children : string;
    color?: 'primary' | 'secondary' | 'tertiary'
    variant?: 'contenido' | 'solo-texto'
    className?: string;
    icon?: string
}


const CustomButton = ({children,color='primary',variant='contenido',onPress,onLongPress,className,icon}:props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary:'bg-tertiary',

    }[color];

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary:'text-tertiary',

    }[color];

    // color del icono: blanco para botones con fondo, oscuro para solo-texto
    const iconColor = variant === 'solo-texto' ? '#111' : '#fff';
    const iconSize = variant === 'solo-texto' ? 18 : 40;

    if(variant === 'solo-texto'){
      return(
        <Pressable className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {/* ahora columna: texto arriba, icono debajo */}
          <View className="flex-col items-center justify-center">
            <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
            {icon ? <Ionicons name={icon as any} size={iconSize} color={iconColor} style={{ marginTop: 6 }} /> : null}
          </View>
        </Pressable>
      )
    }


  return (
    <Pressable className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {/* ahora columna: texto arriba, icono debajo */}
      <View className="flex-col items-center justify-center">
        <Text className={` text-white text-center font-work-medium`}>{children}</Text>
        {icon ? <Ionicons name={icon as any} size={iconSize} color={iconColor} style={{ marginTop: 8 }} /> : null}
      </View>
    </Pressable>
  )
}

export default CustomButton