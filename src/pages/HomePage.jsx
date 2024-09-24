import Home from '../components/Home/Home';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchEvents } from '../helpers/helpers';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader';

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getEventsData = async () => {
      try {
        setLoading(true);
        const eventsData = await fetchEvents();
        setEvents(eventsData);
        setFilteredEvents(eventsData);
      } catch (error) {
        toast.error('Please, try loading page again');
      } finally {
        setLoading(false);
      }
    };
    getEventsData();
  }, []);

  
  const onChangeInputHandler = (e, name) => {
    const value = e.target.value.toLowerCase().trim();
    if (value === '') {
      setFilteredEvents(events);  
      return;
    }
    const result = events.filter((element) => {
      return element[name].toLowerCase().includes(value);
    });
  
    setFilteredEvents(result);
    
  };

  return (
    <>
      {loading && <Loader />}
      <Home events={filteredEvents} onChangeInputHandler = {onChangeInputHandler} />
      <Toaster />
    </>
  );
}

