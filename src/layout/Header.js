import React, { useEffect, useState } from 'react'
import { Slide } from 'react-awesome-reveal';
import BgSlider from '../components/Contacts/BgSlider';
import { sidebarpage } from '../utility/sidebarpage';
import { ReactSVG } from 'react-svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [openlink, setOpenlink] = useState("#home")
    const [ShowLoader, setShowLoader] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const closeSidebar = () => {
        setIsOpen(false);
    };
    const handleOverlayClick = () => {
        closeSidebar();
    };

    const handleClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        setOpenlink(href)
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        const topMenu = document.querySelector(".navbar-nav");
        const topMenuHeight = topMenu ? topMenu.offsetHeight : 0;
        const target = document.querySelector(href);
        const offsetTop = target ? target.offsetTop - topMenuHeight + 1 : 0;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        const handleLoad = () => {
            setShowLoader(false);
            const loader = document.querySelector(".br-loader");
            if (loader) {
                loader.style.opacity = "0";
            }
        };
        window.addEventListener("load", handleLoad);
        setTimeout(() => {
            setShowLoader(false);
        }, 1000);
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const topMenu = document.querySelector(".navbar-nav");
            const topMenuHeight = topMenu ? topMenu.offsetHeight : 0;
            const fromTop = window.scrollY + topMenuHeight;

            const scrollItems = sidebarpage.map(data => document.querySelector(data.href));
            const cur = scrollItems.filter(item => item.offsetTop < fromTop).pop();
            const id = cur ? cur.id : "";

            setOpenlink(`#${id}`);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            {/* <!-- Site loader  --> */}

            {ShowLoader && (
                <div className="br-loader">
                    <div className="br-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
            <div>
            </div>
            <header>
                <nav>
                    <button onClick={toggleSidebar} className="br-sidebar-toggle" >
                        <ReactSVG
                            beforeInjection={(svg) => {
                                svg.classList.add('svg_img')
                                svg.setAttribute('style', 'width: 30px')
                            }}
                            src="assets/img/icons/menu.svg" className="" alt="menu" />
                    </button>
                </nav>
            </header>
            {/* <!-- Sidebar Start --> */}
            {isOpen && (
                <div >
                    <div onClick={handleOverlayClick} className="br-sidebar-overlay" style={{ display: 'block' }}>
                        <Slide triggerOnce direction='right' className="br-sidebar br-open">
                            <div className="menu-list">
                                <a onClick={(e) => handleClick(e, "#home")} href="/" className="close-sidebar">×</a>
                                <ul className="navbar-nav mb-2 ml-auto" id="top-manu">
                                    {
                                        sidebarpage.map((data, index) => (
                                            <li key={index} className={`nav-item ${openlink === data.href ? "active" : ""}`}>
                                                <a onClick={(e) => handleClick(e, data.href)} className="nav-link br-nav" aria-current="page" href={data.href}>{data.title}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Slide>
                    </div>
                </div>
            )}
            {/* <!-- Sidebar End --> */}

            <div >
                {isOpen ? null : <BgSlider />}
            </div>
        </div>
    )
}

export default Header
