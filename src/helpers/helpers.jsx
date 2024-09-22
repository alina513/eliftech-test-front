import axios from 'axios';
export const fetchEvents = async () => {
  const response = await axios.get(
    `https://eliftech-test-back-vkh9.onrender.com/api/events/`
  );
  const events = response.data;
  return events;
};

export const addParticipant = async ({
  event_id,
  fullname,
  email,
  birth,
  source,
}) => {
  const response = await axios.post(
    `https://eliftech-test-back-vkh9.onrender.com/api/members/`,
    { event_id, fullname, email, birth, source }
  );
  return response.data;
};

export const fetchParticipants = async id => {
  const response = await axios.get(
    `https://eliftech-test-back-vkh9.onrender.com/api/members/`
  );
  return response.data;
};
