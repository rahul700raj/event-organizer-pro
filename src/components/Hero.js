import React from 'react';
import './Hero.css';

function Hero({ setCurrentView }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Plan, Promote & Manage Events</h1>
        <p className="hero-subtitle">
          Create unforgettable experiences with our powerful event management platform
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => setCurrentView('create')}>
            Create Event
          </button>
          <button className="btn btn-secondary" onClick={() => {
            document.getElementById('events-section').scrollIntoView({ behavior: 'smooth' });
          }}>
            Browse Events
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Events Created</div>
          </div>
          <div className="stat">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Happy Attendees</div>
          </div>
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Organizers</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;