import React, { useEffect, useState } from 'react'
import { about } from '../../utility/about_me'
function AboutMe() {

  const [offset, setOffset] = useState(0);
  const [oTop, setOTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = document.getElementById('about');
      if (progress) {
        const newOTop = progress.offsetTop - window.innerHeight;
         setOTop(newOTop);
        if (offset === 0 && window.scrollY > newOTop) {
          const max = -219.99078369140625;
          const progressBars = document.querySelectorAll('.progress');
          progressBars.forEach((value) => {
            const percent = value.getAttribute('data-progress');
            value.querySelector('.fill').setAttribute('style', `stroke-dashoffset: ${((100 - percent) / 100) * max}`);
            value.querySelector('.value').innerHTML = `${percent}%`;
          });
          setOffset(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset,oTop]);

  return (
    <div>
      {/* <!-- About section --> */}
    <section id="about" className="br-about padding-tb-80 sec-bg">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2>About<span> Me</span></h2>
                    <span className="ligh-title">About</span>
                </div>
                <div className="col-lg-6">
                    <div className="br-skill-progress m-b-991">
                        <div className="row m-b-minus-30px">
                            {about?.services?.map((data,index) => (
                                <div key={index} className="col-md-6">
                                <div className="br-box">
                                    
                                    <svg className={`progress noselect ${data.persontin >= 90 ? "active" : ""}`} data-progress={data.persontin} x="0px" y="0px"
                                        viewBox="0 0 80 80">
                                        <path className="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                                            <path className="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                                                <text className="value" x="50%" y="58%">{data.persontin}</text>
                                    </svg>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="br-about-detail">
                        <h4>{about.title}</h4>
                        <p className="br-text">{about.info}</p>
                        <p className="br-text"> {about.description}</p>
                        <div className="br-about-info">
                            <ul className="m-r-30">
                                <li><span className="title">Full Name<b>:</b></span>{about.name}</li>
                                <li><span className="title">Age<b>:</b></span>{about.age}</li>
                                <li><span className="title">Language<b>:</b></span>{about.language}</li>
                                <li><span className="title">Phone No<b>:</b></span>{about.phone}</li>
                                <li><span className="title">Email<b>:</b></span>{about.email}</li>
                                <li><span className="title">Address<b>:</b></span><span>{about.address}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About section End --> */}
    </div>
  )
}

export default AboutMe
