import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { PropsWithChildren } from 'react'

const queryClient = new QueryClient({ defaultOptions : { queries: {
  staleTime: 1000 * 60 * 5
}}})

function TanstackProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default TanstackProvider