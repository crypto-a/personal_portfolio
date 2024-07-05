import React from 'react'
import { Tilt } from 'react-tilt'

function Hero() {
  const handleScrollNext = (about) => {
    const targetElement = document.getElementById(about);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault()
}


  return (
    <div>
      {/* <!-- Hero Start --> */}

      <section id="home" className="br-hero margin-b-50">

        <div className="br-text-1">PROFESSIONAL</div>
        <div className="br-text-2">PORTFOLIO</div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-item static">
              <div className="br-hero-detail">
                <h1 className="br-hero-title title-right-overflow"><span>My Self,<br></br> <span
                  className="name">&nbsp; Ali Rahbar </span></span>
                </h1>
                <p className="br-hero-detail">Lorem Ipsum is simply
                  dummy text of the printing industry. Lorem Ipsum has been the industry's.</p>
                <a onClick={(e) => handlesubmit(e)} href="/" className="br-learn-more-right">
                  <span className="text">Download CV</span>
                </a>
              </div>
              <div className="br-hero-img">
                <Tilt
                  className="br-card "
                  data-tilt
                  options={{
                    max: 15, perspective: 1400,
                    easing: "cubic-bezier(.03,.98,.52,.99)",
                    speed: 1200,
                    glare: true,
                    maxGlare: 0.4,
                    scale: 1.04
                  }}
                >
                  <div className="br-card Tilt-inner" >
                    <img src="assets/img/hero/my-img.jpg" alt="vasantbhai" />
                  </div>
                </Tilt>
              </div>

              <div className="br-hero-name">
                <h3>I am an <br></br><span>Engineer</span></h3>
              </div>
            </div>
            <div className="art"></div>
          </div>
        </div>
        <div className="scroll-next" data-scroll="about" onClick={() => handleScrollNext("about")}>

          <div className="br-container" >
            <span className="menu" style={{ marginTop: "40px" }}>
              <span className="text"></span>
              <span className="circle"></span>
            </span>
          </div>

        </div>
      </section>
      {/* <!-- Hero End --> */}

    </div>
  )
}

export default Hero
