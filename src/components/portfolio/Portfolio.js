import React, { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { products } from "../../utility/products";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "animate.css"



function Portfolio() {
    const [category, setCategory] = useState('all');
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        "all",
        'design',
        'development',
        'graphics',
        'templates',
    ];


    const filterProducts = () => {
        if (category !== 'all') {
            return products.filter((products) => products.categories.indexOf(category) !== -1);
        }
        return products;
    }

    const handleCategory = (_category) => {
        setCategory(_category);

    }

    useEffect(() => {

    }, [activeTab, category]);

    return (
        <div>
            <section id="portfolio" className="br-portfolio padding-tb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>My <span>Projects</span></h2>
                        <span className="ligh-title">Portfolio</span>
                    </div>
                    <div className="row m-b-minus-24px">
                        <div className="portfolio-content">
                            <div>
                                <div className="row">
                                    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                                        <div className="col-sm-12">
                                            <div className="portfolio-tabs">
                                                <TabList>
                                                    {categories.map((_category, index) => (
                                                        <Tab onClick={() => handleCategory(_category)} key={index} className="filter" data-filter="all">{_category}</Tab>
                                                    ))}
                                                </TabList>
                                            </div>
                                        </div>
                                        {categories.map((_category, index) => (
                                            <TabPanel key={index}>

                                                <div style={{ transform: 'scale(1)', transition: 'transform 0.3s ease-out' }} className="col-md-12 col-sm-12">
                                                    <div className="portfolio-content-items">
                                                        <div className="row m-b-minus-30px">
                                                            {filterProducts().map((data, i) => (
                                                                <PortfolioCard key={i} data={data} selectedCategory={category} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                            </TabPanel>
                                        ))}
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
