import {useState, useEffect} from 'react'
import { AddEvent } from '../components/AddEvent.jsx'
import { useEventStore } from '../store/useEventStore.js'
import { useAuthStore } from '../store/useAuthStore.js';
import { Link } from 'react-router-dom';
const Homepage = () => {
  const { events, getEvents } = useEventStore();
  const { authUser } = useAuthStore();

  // useEffect(() => {
  //   getEvents();
  // },[]);
  return (
    <div>
 <div className="min-h-screen bg-pink-50 flex flex-col items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-2">Welcome to Open Dish 🍽️</h1>
        <p className="text-gray-600 mb-6">
          {authUser?.firstName
            ? `Hello, ${authUser.firstName}! Ready to plan your next potluck?`
            : `Plan, share, and celebrate meals together.`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Link
            to="/events"
            className="btn btn-outline btn-lg w-full"
          >
            🗓️ View Events
          </Link>

          <Link
            to="/items"
            className="btn btn-outline btn-lg w-full"
          >
            🧺 Manage Items
          </Link>

          <Link
            to="/guests"
            className="btn btn-outline btn-lg w-full"
          >
            👥 Guest List
          </Link>

          <Link
            to="/profile"
            className="btn btn-outline btn-lg w-full"
          >
            👤 My Profile
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homepage