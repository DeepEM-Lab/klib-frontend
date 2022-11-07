import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import ElementPage from "./pages/ElementPage";
import React from "react";
import HomePage from './pages/HomePage';
import './App.css';
import { Home } from "@mui/icons-material";



const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000, // 1 minute
        },
    },
});

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/klib-lab" element={<HomePage />} />
                        <Route path="/dev-tools" element={<ReactQueryDevtools />} />
                        <Route path="/klib-lab/elements/*" element={<ElementPage />} />
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        </React.StrictMode >
    )
}

export default App;
