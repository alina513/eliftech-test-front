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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getEventsData = async () => {
      try {
        setLoading(true);
        const eventsData = await fetchEvents();
        setEvents(eventsData);
      } catch (error) {
        toast.error('Please, try loading page again');
      } finally {
        setLoading(false);
      }
    };
    getEventsData();
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Home events={events} />
      <Toaster />
    </>
  );
}
