import React from 'react';
import './Features.css';
import { FaBitcoin, FaBell, FaChartLine, FaUserShield, FaSyncAlt, FaWallet } from 'react-icons/fa';

const features = [
  {
    icon: <FaBitcoin />,
    title: 'Real-Time Price Tracking',
    description: 'Track live prices of your favorite cryptocurrencies including Bitcoin, Ethereum, and altcoins.',
  },
  {
    icon: <FaWallet />,
    title: 'Portfolio Management',
    description: 'Add your assets and manage your portfolio in one place with automatic balance updates.',
  },
  {
    icon: <FaChartLine />,
    title: 'Advanced Analytics',
    description: 'Visualize trends, performance history, and coin comparisons with rich interactive charts.',
  },
  {
    icon: <FaBell />,
    title: 'Custom Alerts',
    description: 'Set price alerts and receive notifications when coins hit your target prices.',
  },
  {
    icon: <FaUserShield />,
    title: 'Secure & Private',
    description: 'Your data is encrypted and never shared. Track anonymously or with an account.',
  },
  {
    icon: <FaSyncAlt />,
    title: 'Exchange Sync',
    description: 'Connect to exchanges like Binance or Coinbase to sync your portfolio automatically.',
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Explore Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-title">{feature.title}</div>
            <div className="feature-description">{feature.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
