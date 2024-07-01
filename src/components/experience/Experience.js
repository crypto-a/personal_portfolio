import React from 'react'
import { experiense } from '../../utility/experiense'
import { education } from '../../utility/education'

function Experience() {
    return (
        <div>
            {/* <!-- Start Experience & Education section --> */}
            <section id="experience" className="br-experience padding-tb-80">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>My <span>Resume</span></h2>
                            <span className="ligh-title">Achievements</span>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="education br-ex-box m-b-991">
                                <h4>Education</h4>
                                <ul className="timeline">
                                    {
                                        education.map((data, index) => (
                                            <li key={index} className="timeline-item" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                                                <div className="timeline-info">
                                                    <span>{data.date}</span>
                                                </div>
                                                <div className="timeline-content">
                                                    <h5 className="timeline-title">{data.title}<span className="sub">- {data.category}</span></h5>
                                                    <p>{data.description}</p>
                                                </div>
                                            </li>
                                        ))
                                    }

                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="experiense br-ex-box">
                                <h4>Experiense</h4>
                                <ul className="timeline">
                                    {
                                        experiense.map((data, index) => (
                                            <li key={index} className="timeline-item">
                                                <div className="timeline-info">
                                                    <span>{data.date}</span>
                                                </div>
                                                <div className="timeline-content">
                                                    <h5 className="timeline-title">{data.title}<span className="sub">- {data.category}</span></h5>
                                                    <p>{data.description}</p>
                                                </div>
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Experience & Education Section --> */}
        </div>
    )
}

export default Experience
