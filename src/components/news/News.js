import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { newscard } from '../../utility/newscard';



function News() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            {/* <!-- Start News Section --> */}
                <section id="news" className="br-news padding-tb-80">
                    <div className="container">
                        <div className="section-title">
                            <h2>Latest <span>News</span></h2>
                            <span className="ligh-title">Blogs</span>
                        </div>
                        <div className="row m-b-minus-30px">
                            <Slider {...settings} className="news-carousel">
                                {
                                    newscard.map((data,index) => (
                                        <div key={index} className="br-item">
                                            <div className="news-info">
                                                <figure className="news-img">
                                                    <a onClick={(e) => handleSubmit(e)} href="/">
                                                        <img src={data.image} alt="news imag" />
                                                    </a>
                                                </figure>
                                                <div className="detail">
                                                    <label>July 30,2019 - <a onClick={(e) => handleSubmit(e)} href="/">{data.title}</a></label>
                                                    <h3><a onClick={(e) => handleSubmit(e)} href="/">{data.description}</a></h3>
                                                    <div className="more-info">
                                                        <a onClick={(e) => handleSubmit(e)} href="/">Read More<span></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </section>
            {/* <!-- End News Section --> */}
        </div >
    )
}

export default News
