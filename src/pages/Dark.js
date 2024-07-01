import React, { useEffect } from 'react'
import Header from '../layout/Header'
import Hero from '../components/hero/Hero'
import AboutMe from '../components/about/AboutMe'
import Experience from '../components/experience/Experience'
import Service from '../components/service/Service'
import Portfolio from '../components/portfolio/Portfolio'
import NumberCard from '../components/portfolio/NumberCard'
import News from '../components/news/News'
import Contacts from '../components/Contacts'
import BreandCardSlider from '../components/portfolio/BreandCardSlider'
import Footer from '../layout/Footer'
import { useDispatch } from 'react-redux'
import { setDark } from '../store/counter/ImageSlice'



function Dark() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDark())
    },[dispatch])
    

    return (
        <div>
            <Header />
            <Hero />
            <AboutMe />
            <Experience />
            <Service />
            <Portfolio />
            <NumberCard />
            <News />
            <Contacts />
            <BreandCardSlider />
            <Footer />
        </div>
    )
}

export default Dark
