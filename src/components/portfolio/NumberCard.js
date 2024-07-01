import React from 'react'
import { counter_card } from '../../utility/counter_card'
import { Tilt } from 'react-tilt'

function NumberCard() {
    return (
        <div>
            {/* <!-- Start Counter Section --> */}
            <section id="counters" className="br-counter padding-tb-80 sec-bg">
                <div className="container">
                    <div className="section-title d-none">
                        <h2>My <span>Achievements</span></h2>
                        <span className="ligh-title">Achievements</span>
                    </div>
                    <div className="row achive m-tb-minus-12px" id="counter">

                        {
                            counter_card.map((data, index) => (
                                <div key={index} className="col-lg-3 col-md-6">
                                    <Tilt
                                        className="count-block"
                                        options={{
                                            max: 15, perspective: 1400,
                                            easing: "cubic-bezier(.03,.98,.52,.99)",
                                            speed: 1200,
                                            glare: true,
                                            maxGlare: 0.4,
                                            scale: 1.04
                                        }} data-tilt>
                                        <h3><span className={`counter counter-value ${data.number === 37 ? "active-num" : ""}`} data-count="156">{data.number}+</span></h3>
                                        <p>{data.title}</p>
                                    </Tilt>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            {/* <!-- End Counter Section --> */}
        </div>
    )
}

export default NumberCard
