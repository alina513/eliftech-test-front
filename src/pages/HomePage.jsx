
import Home from '../components/Home/Home';
import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../helpers/helpers';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../components/Loader';
import { Pagination } from '../components/Pagination/Pagination';

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
    setCurrentPage(1); 

    if (value === '') {
      setFilteredEvents(events);
      return;
    }

    const result = events.filter(element => {
      return element[name].toLowerCase().includes(value);
    });
    setFilteredEvents(result);
  };

  
  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  
  const paginate = pageNumber => setCurrentPage(pageNumber);

  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredEvents.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {loading && <Loader />}
      <Home
        events={currentEvents}
        onChangeInputHandler={onChangeInputHandler}
      />
      <Pagination
        pageNumbers={pageNumbers}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Toaster />
    </>
  );
}
