import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { AuthContextProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import Spinner  from './components/Spinner'; // Ensure you have a Spinner for loading indication

const Home = lazy(() => import('./pages/Home'));
const Feed = lazy(() => import('./pages/Feed'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Header />
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/feed" element={<Feed />} />
                        </Routes>
                    </Suspense>
                </ThemeProvider>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
