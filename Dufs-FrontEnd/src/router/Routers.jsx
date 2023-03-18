import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "../Component/Header"
import Footer from "../Component/Footer"

import Main from '../pages/Main';
import Sub from '../pages/Sub';
import P404 from "../pages/404";
import Sidebar from "../Component/Sidebar";

const Body = styled.div`
    display: flex;
    flex-direction: row;
    height : auto;
    min-height: 100vh;
    padding-bottom: 10vh;
`

function Routers () {
    return(
        <BrowserRouter>
            <Header />
                <Body>
                    <Sidebar />
                        <Routes>    
                            <Route path="/*" element = {<Main/>} />
                            <Route path="/sub" element = {<Sub/>} />
                            <Route path="/404" element = {<P404/>} />
                        </Routes>    
                </Body>
            <Footer/>
        </BrowserRouter>
    );
}
export default Routers;