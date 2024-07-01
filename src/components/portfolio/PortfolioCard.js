import React from 'react'
import FancyBox from './FancyBox'
import "animate.css"
import ZoomOut from './ZoomOut'

function PortfolioCard({ data, selectedCategory }) {

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <ZoomOut category={selectedCategory} data={data} className='col-lg-6 mix graphics templates ' >
            <div className="br-project-box">
                <h3>{data.title}</h3>
                <div className="links">
                    <a onClick={(e) => handleSubmit(e)} href="/">{data.link.hreflink1}</a> |
                    <a onClick={(e) => handleSubmit(e)} href="/">{data.link.hreflink2}</a>
                </div>
                <p>{data.description}
                    <a onClick={(e) => handleSubmit(e)} href="/">Read more</a>
                </p>
                <div className="br-info">
                    <div className="portfolio-img">
                        <a data-fancybox="gallery"
                            data-src={data.image}
                            href={data.image}
                            style={{ backgroundImage: `url(${data.image})` }}>
                            <span className="overlay">+</span>
                        </a>
                        <FancyBox />
                    </div>
                    <div className="br-detail">
                        <ul>
                            <li>Date : {data.date}</li>
                            <li>Client : {data.client}</li>
                            <li>Tech : {data.Tech}</li>
                            <li>Type : {data.Type}</li>
                            <li>URL : <a onClick={(e) => handleSubmit(e)} href="/">{data.url}</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </ZoomOut>

    )
}

export default PortfolioCard
