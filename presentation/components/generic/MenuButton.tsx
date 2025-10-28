import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from "expo-router";
import React from 'react';
import { Pressable } from 'react-native';

const MenuButton = () => {
    const navigation = useNavigation();

	const abrirMenu = () => {
		navigation.dispatch(DrawerActions.toggleDrawer());
	}

  return (
    
    <Pressable onPress={() => abrirMenu()}>
	    <Ionicons name='menu-outline' size={30} color='white' className='shadow' />
	</Pressable>
    
  )
}

export default MenuButton