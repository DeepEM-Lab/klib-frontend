import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
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

console.log("APPLICATION PUBLIC URL:", process.env.PUBLIC_URL)

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                    </Routes>
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </BrowserRouter>
        </React.StrictMode >
    )
}

export default App;
