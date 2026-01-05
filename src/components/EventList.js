import React, { useState } from 'react';
import './EventList.css';

function EventList({ events, onViewEvent }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...new Set(events.map(e => e.category))];

  const filteredEvents = events.filter(event => {
    const matchesCategory = filter === 'all' || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="event-list-section" id="events-section">
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>
        
        <div className="filters">
          <input
            type="text"
            placeholder="Search events..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="events-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card" onClick={() => onViewEvent(event)}>
              <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}>
                <div className="event-category">{event.category}</div>
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-info">
                  <div className="info-item">
                    <span className="icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="info-item">
                    <span className="icon">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="info-item">
                    <span className="icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-footer">
                  <div className="attendees">
                    <span className="icon">👥</span>
                    <span>{event.attendees} attending</span>
                  </div>
                  <div className="price">${event.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventList;