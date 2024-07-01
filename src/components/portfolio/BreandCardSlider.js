import React from 'react'
import { clientitem } from '../../utility/clientItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import { clientdarkitem } from '../../utility/clientdarkitem';


function BreandCardSlider() {
    const themeMode = useSelector((state) => state.image.themeMode);


    const settings = {
        rows: 1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
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
            {/* <!-- Start Clients Section --> */}
            <section className="br-client padding-tb-80">
                <h2 className="d-none">Clients</h2>
                <div className="container">
                    <div className="row">
                        <div className="br-client-outer">
                            <Slider {...settings} id="br-client-slider">
                                {
                                    clientitem.map((data, index) => (
                                        <li key={index} className="br-client-item" data-animation="zoomIn">
                                            <div className="br-client-img"><a onClick={(e) => handleSubmit(e)} href="/">
                                                {themeMode === "light" && <img alt="client" style={{objectFit : "cover"}} title="client" src={data.image} />}
                                            </a></div>
                                        </li>
                                    ))
                                }
                            </Slider>
                            <Slider {...settings} id="br-client-slider">
                                {
                                    clientdarkitem.map((data, index) => (
                                        <li key={index} className="br-client-item" data-animation="zoomIn">
                                            <div className="br-client-img"><a onClick={(e) => handleSubmit(e)} href="/">
                                                {themeMode === "dark" && <img alt="client"  title="client" src={data.image} />}
                                            </a></div>
                                        </li>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Clients Section --> */}
        </div>
    )
}

export default BreandCardSlider
