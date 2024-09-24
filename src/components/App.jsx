import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import {Loader} from './Loader'

const HomePage = lazy(() => import('../pages/HomePage'));
const EventDetailsPage = lazy(() => import('../pages/EventDetailPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:eventId" element={<EventDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
