import EventDetail from '../components/EventDetail/EventDetail';
import { fetchParticipants } from '../helpers/helpers';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';

export default function EventDetailPage() {
  const id = useParams().eventId;
  const [members, setMembers] = useState([]);
  const [filtredMembers, setFiltredMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMembersData = async () => {
      try {
        setLoading(true);
        const membersData = await fetchParticipants();
        const participant = membersData.filter(
          member => member.event_id === id
        );
        setMembers(participant);
        setFiltredMembers(participant);
      } catch (error) {
        toast.error('Please, try loading page again');
      } finally {
        setLoading(false);
      }
    };
    getMembersData(); 
  }, [id]);

  const onChangeInputParticipentsHandler = (e, name) => {
    const value = e.target.value.toLowerCase().trim();
    if (value === '') {
      setFiltredMembers(members);  
      return;
    }
    const result = members.filter((element) => {
      return element[name].toLowerCase().includes(value);
    });
  
    setFiltredMembers(result);
    
  };

  return (
    <>
      {loading && <Loader />}
      <EventDetail participants={filtredMembers} onChangeInputParticipentsHandler={onChangeInputParticipentsHandler}/>
      <Toaster />
    </>
  );
}
