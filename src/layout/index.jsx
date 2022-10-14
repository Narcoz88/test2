import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../feature/Header";
import Footer from "../feature/Footer";

const MainLayout = () => {
    return (
        <div className="App">
            <div className="wrap">
                <Header/>
                <div className="container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default MainLayout;