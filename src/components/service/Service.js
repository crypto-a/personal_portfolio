import React, { useEffect } from 'react'
import { services } from '../../utility/services'
import { ReactSVG } from 'react-svg';


function Service() {



    useEffect(() => {
        // Function to replace SVG images with inline SVGs
        const replaceSVGs = () => {
            document.querySelectorAll('img.svg_img[src$=".svg"]').forEach((img) => {
                const imgURL = img.getAttribute('src');
                fetch(imgURL)
                    .then((response) => {
                        // Check if the image exists
                        if (!response.ok) {
                            throw new Error('Failed to load SVG');
                        }
                        return response.text();
                    })
                    .then((svgText) => {
                        // Create a new div to hold the SVG content
                        const div = document.createElement('div');
                        div.innerHTML = svgText.trim();
                        // Replace the image with the SVG content
                        if (img.parentNode) {
                            img.parentNode.replaceChild(div.firstChild, img);
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            });
        };

        // Replace SVGs when the document is ready
        replaceSVGs();
    }, []); // Run once on component mount




    const handlesubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            {/* Start service section */}
            <section id="service" className="br-service padding-tb-80 sec-bg">
                <div className="container">
                    <div className="section-title d-none">
                        <h2>My<span> service</span></h2>
                        <span className="ligh-title">service</span>
                    </div>
                    <div className="row service-box m-tb-minus-15px">

                        {
                            services.map((data, index) => (
                                <div key={index} className="col-lg-3 col-md-6 col-xs-12">
                                    <div className="flipper">
                                        <div className="main-box">
                                            <div className="box-front height-300 white-bg">
                                                <div className="content-wrap">
                                                    <div className="icon">
                                                        <ReactSVG
                                                            beforeInjection={(svg) => {
                                                                svg.classList.add('svg_img')
                                                            }}
                                                            className="icofont icofont-headphone-alt font-40px dark-color"
                                                            src={data.image} alt="Graphics Design" />
                                                    </div>
                                                    <h3>{data.title}</h3>
                                                    <p>{data.description}</p>
                                                </div>
                                            </div>
                                            <div className="box-back height-300 gradient-bg">
                                                <div className="content-wrap">
                                                    <h3>{data.title}</h3>
                                                    <p>{data.description}</p>
                                                    <a onClick={(e) => handlesubmit(e)} href="/" className="btn">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* End service section */}
        </div>
    )
}

export default Service
