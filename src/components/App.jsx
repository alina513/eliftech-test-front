import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import {Loader} from './Loader'

const HomePage = lazy(() => import('../pages/HomePage'));
const EventDetailsPage = lazy(() => import('../pages/EventDetailPage'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:eventId" element={<EventDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
