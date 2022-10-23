import { BrowserRouter } from "react-router-dom"
import { ReactQueryDevtools } from "react-query/devtools"
import { QueryClient, QueryClientProvider } from "react-query"
import React from "react";
import HomePage from './pages/HomePage';
import './App.css';



const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000, // 1 minute
        },
    },
})

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <HomePage />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </BrowserRouter>
        </React.StrictMode >
    )
}

export default App;
