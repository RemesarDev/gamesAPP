import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'

import { Slot } from 'expo-router'
import '../global.css'

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Slot/>
    </QueryClientProvider>
  )
}

export default RootLayout