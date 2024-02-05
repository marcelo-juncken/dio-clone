import React from 'react';
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Feed} from "./pages/Feed";
import {Register} from "./pages/Register";
import Login from "./pages/Login";
import {ThemeProvider} from 'styled-components';
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import {ROUTES} from "./routes";
import {AuthContextProvider} from "./contexts/AuthContext";

function App() {

    return (
        <BrowserRouter>
            <AuthContextProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle/>
                    <Header/>
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Home/>}/>
                        <Route path={ROUTES.LOGIN} element={<Login/>}/>
                        <Route path={ROUTES.REGISTER} element={<Register/>}/>
                        <Route path={ROUTES.FEED} element={<Feed/>}/>
                    </Routes>
                </ThemeProvider>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
