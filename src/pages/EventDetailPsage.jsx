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
      } catch (error) {
        toast.error('Please, try loading page again');
      } finally {
        setLoading(false);
      }
    };
    getMembersData(); 
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      <EventDetail participants={members} />
      <Toaster />
    </>
  );
}
