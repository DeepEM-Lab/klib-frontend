import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import ElementPage from "./pages/ElementPage";
import HomePage from './pages/HomePage';

import './App.css';
import FormPage from "./pages/FormPage";

import BrowsePage from "./pages/BrowsePage";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000, // 1 minute
        },
    },
});

console.log("APPLICATION PUBLIC URL:", process.env.PUBLIC_URL)

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/element/:element" element={<ElementPage />} />
                        <Route path="/form" element={<FormPage />}/>
                        <Route path="/browse" element={<BrowsePage />}/>
                    </Routes>
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App;
