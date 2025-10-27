import CustomDrawer from '@/presentation/components/generic/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import '../global.css';

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Drawer
          drawerContent= { CustomDrawer }
          screenOptions={{
          //headerShown: false,
          overlayColor: 'rgba(0, 0, 0, 0.4)', //puede ser 'transparent' o 'rgba(0, 0, 0, 0.5)' para semitransparente
          drawerActiveTintColor: 'indigo',
          sceneStyle: { backgroundColor: 'white' },
          headerShadowVisible: false,
        }}
        >
        <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
            headerShown: false,
            drawerLabel: 'Inicio',
            title: 'Inicio',
            drawerIcon: ({color, size}) => <Ionicons name='home' size={size} color={color}/>,
          }}
        />
      </Drawer>
    </QueryClientProvider>
  )
}

export default RootLayout