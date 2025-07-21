import React from 'react';
import './pricing.css'; // Import the custom CSS

const plans = [
  {
    title: 'Free',
    price: '₹0',
    features: [
      'Track up to 5 coins',
      'Basic price alerts',
      'Limited portfolio size',
      'No exchange sync',
      'No tax reports'
    ]
  },
  {
    title: 'Pro',
    price: '₹299/mo',
    features: [
      'Unlimited coin tracking',
      'Advanced analytics dashboard',
      'Custom alerts & watchlists',
      'Export data (CSV)',
      'Priority email support'
    ]
  },
  {
    title: 'Elite',
    price: '₹799/mo',
    features: [
      'All Pro features',
      'Real-time exchange sync',
      'Tax report generator',
      'Telegram/email notifications',
      'Dedicated support'
    ]
  }
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className="plan-button">
              {plan.title === 'Free' ? 'Get Started' : 'Subscribe'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
