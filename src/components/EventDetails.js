import React, { useState } from 'react';
import './EventDetails.css';

function EventDetails({ event, onBack, onDelete }) {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
    alert('Successfully registered for the event!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href
      });
    } else {
      alert('Share link copied to clipboard!');
    }
  };

  return (
    <div className="event-details-section">
      <div className="container">
        <button className="back-btn" onClick={onBack}>
          ← Back to Events
        </button>
        
        <div className="event-details-card">
          <div className="event-header-image" style={{ backgroundImage: `url(${event.image})` }}>
            <div className="event-overlay">
              <div className="event-category-badge">{event.category}</div>
            </div>
          </div>

          <div className="event-details-content">
            <h1 className="event-details-title">{event.title}</h1>
            
            <div className="event-meta">
              <div className="meta-item">
                <span className="meta-icon">📅</span>
                <div>
                  <div className="meta-label">Date</div>
                  <div className="meta-value">{event.date}</div>
                </div>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🕐</span>
                <div>
                  <div className="meta-label">Time</div>
                  <div className="meta-value">{event.time}</div>
                </div>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <div>
                  <div className="meta-label">Location</div>
                  <div className="meta-value">{event.location}</div>
                </div>
              </div>
              <div className="meta-item">
                <span className="meta-icon">👤</span>
                <div>
                  <div className="meta-label">Organizer</div>
                  <div className="meta-value">{event.organizer}</div>
                </div>
              </div>
            </div>

            <div className="event-stats">
              <div className="stat-box">
                <div className="stat-value">{event.attendees}</div>
                <div className="stat-label">Attendees</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">{event.capacity}</div>
                <div className="stat-label">Capacity</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">${event.price}</div>
                <div className="stat-label">Price</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">{Math.round((event.attendees / event.capacity) * 100)}%</div>
                <div className="stat-label">Filled</div>
              </div>
            </div>

            <div className="event-description-section">
              <h2>About This Event</h2>
              <p>{event.description}</p>
            </div>

            {event.tags && event.tags.length > 0 && (
              <div className="event-tags-section">
                <h3>Tags</h3>
                <div className="tags-container">
                  {event.tags.map(tag => (
                    <span key={tag} className="event-tag">{tag}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="event-actions">
              {!isRegistered ? (
                <button className="action-btn register-btn" onClick={handleRegister}>
                  Register Now
                </button>
              ) : (
                <button className="action-btn registered-btn" disabled>
                  ✓ Registered
                </button>
              )}
              <button className="action-btn share-btn" onClick={handleShare}>
                Share Event
              </button>
              {event.organizer === 'You' && (
                <button className="action-btn delete-btn" onClick={() => {
                  if (window.confirm('Are you sure you want to delete this event?')) {
                    onDelete(event.id);
                  }
                }}>
                  Delete Event
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;