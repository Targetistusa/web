import React from 'react';
import '../styles/Pricing.css';
import { Element } from 'react-scroll';
const PricingSection: React.FC = () => {
    return (
        <Element name='pricing'>       
         <div className="pricing-container">
            <div className="pricing-card">
                <h2>Students</h2>
                <p className="price">$0 / month</p>
            </div>
            <div className="pricing-card highlighted">
                <h2>Personal</h2>
                <p className="price">$4 / month</p>
            </div>
            <div className="pricing-card">
                <h2>Corporate</h2>
                <p className="price">$10 / month</p>
            </div>
        </div>
        </Element>

    );
};

export default PricingSection;
