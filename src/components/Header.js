import React from 'react';
import './Header.css';

function Header({ currentView, setCurrentView }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => setCurrentView('home')}>
          <span className="logo-icon">🎉</span>
          <span className="logo-text">Event Organizer Pro</span>
        </div>
        <nav className="nav">
          <button 
            className={`nav-btn ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentView('home')}
          >
            Home
          </button>
          <button 
            className={`nav-btn ${currentView === 'create' ? 'active' : ''}`}
            onClick={() => setCurrentView('create')}
          >
            Create Event
          </button>
          <button 
            className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentView('dashboard')}
          >
            Dashboard
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;