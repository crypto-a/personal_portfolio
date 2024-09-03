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
                    Copyright © <a onClick={(e) => handleSubmit(e)} className="site-name" href="/">Ali Rahbar</a> all rights reserved.
                </div>
                <div className="br-social">
                    <ul>
                        <li><a href="https://leetcode.com/u/rahbaral/" rel='noreferrer' target="_blank"><i className="fa fa-lightbulb"></i></a></li>
                        <li><a href="https://github.com/crypto-a" rel='noreferrer' target="_blank"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="https://linkedin.com/in/rahbarali" rel='noreferrer' target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
