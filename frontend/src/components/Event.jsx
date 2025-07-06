import { useState, useEffect } from "react";
import { useEventStore } from "../store/useEventStore.js";
import { Link } from "react-router-dom";

const Event = () => {
  const { events, getEvents } = useEventStore();

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 space-y-10">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white shadow-lg rounded-2xl max-w-3xl mx-auto p-8 space-y-6"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-pink-600">{event.title}</h1>
            <span
              className={`badge badge-lg ${
                event.status === "cancelled" ? "badge-error" : "badge-success"
              }`}
            >
              {event.status}
            </span>
          </div>

          <p className="text-gray-600">{event.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-sm text-gray-500">📍 Location</h3>
              <p>{event.address}</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-500">📅 Date</h3>
              <p>{event.date}</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-500">🕒 Start Time</h3>
              <p>{event.startTime}</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-500">🕓 End Time</h3>
              <p>{event.endTime}</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Link to={`/events/${event.id}/edit`} className="btn btn-outline btn-sm">
              ✏️ Edit Event
            </Link>
            <Link to={`/events/${event.id}/items`} className="btn btn-outline btn-sm">
              🍽️ View Items
            </Link>
            <Link to={`/events/${event.id}/guests`} className="btn btn-outline btn-sm">
              👥 Guest List
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
