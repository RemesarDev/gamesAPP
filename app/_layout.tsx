import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'

import '../global.css'

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
    
    </QueryClientProvider>
  )
}

export default RootLayout