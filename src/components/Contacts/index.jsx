import React from 'react'
import ContactCard from './ContactCard'
import { useSelector } from 'react-redux';

function Contacts() {
    const themeMode = useSelector((state) => state.image.themeMode);

  return (
    <div>
      {/* <!-- Start Contact Section --> */}
    <section id="contact" className="br-contact padding-tb-80 sec-bg">
        <div className="container d-block">
            <div className="section-title">
                <h2>Get in <span>Touch</span></h2>
                <span className="ligh-title">Contact</span>
            </div>
            <div className="row m-b-minus-30px">
                <div className="col-lg-5 col-md-12 m-b-991-20">
                  
                   <ContactCard icon={"fa fa-envelope"}>
                   <    h3 className="title">Mail & Website</h3>
                        <p>
                            <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp; mail.example@gmail.com
                        </p>
                        <p>
                            <i className="fa fa-globe" aria-hidden="true"></i> &nbsp; www.yourdomain.com
                        </p>
                   </ContactCard>
                   <ContactCard icon={"fa fa-mobile"}>
                   <    h3 className="title">Contact</h3>
                        <p>
                            <i className="fa fa-mobile" aria-hidden="true"></i> &nbsp; (+91)-9876XXXXX
                        </p>
                        <p>
                            <i className="fa fa-mobile" aria-hidden="true"></i> &nbsp; (+91)-987654XXXX
                        </p>
                   </ContactCard>
                   <ContactCard icon={"fa fa-map-marker"}>
                   <    h3 className="title">Mail & Website</h3>
                        <p>
                            <i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp;  Ruami Mello Moraes Filho,
                                    987 - Salvador - MA, 40352, Brazil.
                        </p>
                   </ContactCard>
                </div>
                <div className="col-lg-7 col-md-12" >
                    <form className={` ${themeMode === "light" ? "form-light" : ""}`}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="fname" placeholder="Full Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="umail" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="phone" placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"
                                placeholder="Message"></textarea>
                        </div>
                        <button  type="submit" className="br-learn-more-right"><span className="text">Submit</span></button>
                    </form>
                </div>
            </div>
        </div>
    </section> 
    {/* <!-- End Contact Section --> */}
    </div>
  )
}

export default Contacts
