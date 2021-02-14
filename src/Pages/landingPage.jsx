import React from 'react'
import Header from '../Components/LandingPage/Header/Header'
import './landingPage.css'
import Body from "../Components/LandingPage/Body/MainBody/Body"
import Footer from '../Components/LandingPage/Footer/MainFooter/Footer';
import Links from '../Components/links/links';


function landingPage() {
    return (
        <div class='landingPage'>

            <Header />
            <Body size="7rem" color="rgba(255, 72, 0, 0.74)" />
            <Footer />
             <Links/>
        </div>
    )
}

export default landingPage;
