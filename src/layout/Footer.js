import React from 'react'

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <footer className="margin-t-80">
        <div className="container">
            <div className="br-footer-detail">
                <div className="br-copy">
                    Copyright © <a onClick={(e) => handleSubmit(e)} className="site-name" href="/">Brog</a> all rights reserved. Powered by Brog.
                </div>
                <div className="br-social">
                    <ul>
                        <li><a href="https://www.facebook.com/" rel='noreferrer' target="_blank"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" rel='noreferrer' target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/" rel='noreferrer' target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="https://linkedin.com/" rel='noreferrer' target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
