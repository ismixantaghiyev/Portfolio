import React from 'react'
import "./PortfolioAll.css"
import Navbar from '../Navbar/Navbar'
import ImgAndAbout from '../ImageAndAbout/ImgAndAbout'
import Scroll from '../Scroll/Scroll'

function PortfolioAll() {
    return (
        <div className='portfolioAll'>
            <Navbar/>
            <ImgAndAbout/>
            <Scroll/>
        </div>
    )
}

export default PortfolioAll