import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from './web3/wagmiConfig.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </WagmiProvider>
)
