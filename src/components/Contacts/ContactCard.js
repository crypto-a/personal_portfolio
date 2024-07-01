import React from 'react'

function ContactCard({ children, icon }) {
    return (
        <div>
            <div className="br-box">
                <div className="detail">
                    <div className="icon"><i className={icon} aria-hidden="true"></i></div>
                    <div className="info">
                        {children}
                    </div>
                </div>
                <div className="space"></div>
            </div>
        </div>
    )
}

export default ContactCard
