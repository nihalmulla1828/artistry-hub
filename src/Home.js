import React from "react";
import "./Navbar.css";

import Workshops from './Workshop';
import Description from './Description';
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Home() {
    return (
        <>
            
            <Description />
            <Workshops />
            <Footer/>

        </>

    )
}