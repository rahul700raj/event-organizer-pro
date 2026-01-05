import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import EventDetails from './components/EventDetails';
import Dashboard from './components/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Tech Conference 2024',
      date: '2024-03-15',
      time: '09:00 AM',
      location: 'San Francisco, CA',
      category: 'Technology',
      description: 'Join us for the biggest tech conference of the year!',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      attendees: 245,
      price: 299,
      organizer: 'Tech Events Inc.',
      capacity: 500,
      tags: ['Technology', 'Networking', 'Innovation']
    },
    {
      id: 2,
      title: 'Music Festival Summer',
      date: '2024-06-20',
      time: '02:00 PM',
      location: 'Los Angeles, CA',
      category: 'Music',
      description: 'Experience the best music festival of the summer!',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
      attendees: 1200,
      price: 150,
      organizer: 'Music Events Co.',
      capacity: 2000,
      tags: ['Music', 'Festival', 'Entertainment']
    },
    {
      id: 3,
      title: 'Business Networking Mixer',
      date: '2024-02-28',
      time: '06:00 PM',
      location: 'New York, NY',
      category: 'Business',
      description: 'Connect with industry leaders and entrepreneurs.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      attendees: 89,
      price: 50,
      organizer: 'Business Network',
      capacity: 150,
      tags: ['Business', 'Networking', 'Professional']
    }
  ]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCreateEvent = (newEvent) => {
    const event = {
      ...newEvent,
      id: events.length + 1,
      attendees: 0,
      organizer: 'You'
    };
    setEvents([...events, event]);
    setCurrentView('home');
  };

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
    setCurrentView('details');
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(e => e.id !== eventId));
    setCurrentView('home');
  };

  return (
    <div className="App">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      
      {currentView === 'home' && (
        <>
          <Hero setCurrentView={setCurrentView} />
          <EventList events={events} onViewEvent={handleViewEvent} />
        </>
      )}
      
      {currentView === 'create' && (
        <CreateEvent onCreateEvent={handleCreateEvent} onCancel={() => setCurrentView('home')} />
      )}
      
      {currentView === 'details' && selectedEvent && (
        <EventDetails 
          event={selectedEvent} 
          onBack={() => setCurrentView('home')}
          onDelete={handleDeleteEvent}
        />
      )}
      
      {currentView === 'dashboard' && (
        <Dashboard events={events} onViewEvent={handleViewEvent} />
      )}
    </div>
  );
}

export default App;