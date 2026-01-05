import React from 'react';
import './Dashboard.css';

function Dashboard({ events, onViewEvent }) {
  const myEvents = events.filter(e => e.organizer === 'You');
  const totalAttendees = myEvents.reduce((sum, e) => sum + e.attendees, 0);
  const totalRevenue = myEvents.reduce((sum, e) => sum + (e.attendees * e.price), 0);
  const avgAttendance = myEvents.length > 0 ? Math.round(totalAttendees / myEvents.length) : 0;

  return (
    <div className="dashboard-section">
      <div className="container">
        <h1 className="dashboard-title">Event Dashboard</h1>
        
        <div className="dashboard-stats">
          <div className="dashboard-stat-card">
            <div className="stat-icon">🎉</div>
            <div className="stat-info">
              <div className="stat-number">{myEvents.length}</div>
              <div className="stat-text">Total Events</div>
            </div>
          </div>
          <div className="dashboard-stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <div className="stat-number">{totalAttendees}</div>
              <div className="stat-text">Total Attendees</div>
            </div>
          </div>
          <div className="dashboard-stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <div className="stat-number">${totalRevenue.toLocaleString()}</div>
              <div className="stat-text">Total Revenue</div>
            </div>
          </div>
          <div className="dashboard-stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <div className="stat-number">{avgAttendance}</div>
              <div className="stat-text">Avg Attendance</div>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <h2 className="section-heading">Your Events</h2>
          {myEvents.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📅</div>
              <h3>No Events Yet</h3>
              <p>Create your first event to get started!</p>
            </div>
          ) : (
            <div className="dashboard-events-grid">
              {myEvents.map(event => (
                <div key={event.id} className="dashboard-event-card" onClick={() => onViewEvent(event)}>
                  <div className="dashboard-event-image" style={{ backgroundImage: `url(${event.image})` }} />
                  <div className="dashboard-event-info">
                    <h3>{event.title}</h3>
                    <div className="dashboard-event-meta">
                      <span>📅 {event.date}</span>
                      <span>👥 {event.attendees}/{event.capacity}</span>
                    </div>
                    <div className="dashboard-event-stats">
                      <div className="mini-stat">
                        <span className="mini-stat-label">Revenue</span>
                        <span className="mini-stat-value">${(event.attendees * event.price).toLocaleString()}</span>
                      </div>
                      <div className="mini-stat">
                        <span className="mini-stat-label">Fill Rate</span>
                        <span className="mini-stat-value">{Math.round((event.attendees / event.capacity) * 100)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;