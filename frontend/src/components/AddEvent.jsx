import { useEventStore } from "../store/useEventStore";
import { useState } from "react";
import toast from "react-hot-toast";

export const AddEvent = () => {
  const { createEvent } = useEventStore();

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    address: "",
    date: "",
    startTime: "",
    endTime: "",
    isPublic: false,
    status: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(eventData);
      toast.success("Event Created");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-pink-600">
          Create New Event
        </h2>

        {/* Title */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Title</span>
          <input
            type="text"
            value={eventData.title}
            onChange={(e) =>
              setEventData({ ...eventData, title: e.target.value })
            }
            className="input input-bordered w-full bg-white"
            
          />
        </label>

        {/* Description */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Description</span>
          <input
            type="text"
            value={eventData.description}
            onChange={(e) =>
              setEventData({ ...eventData, description: e.target.value })
            }
            className="input input-bordered w-full bg-white"
            
          />
        </label>

        {/* Address */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Location</span>
          <input
            type="text"
            value={eventData.address}
            onChange={(e) =>
              setEventData({ ...eventData, address: e.target.value })
            }
            className="input input-bordered w-full bg-white"
            
          />
        </label>

        {/* Date */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Date</span>
          <input
            type="date"
            value={eventData.date}
            onChange={(e) =>
              setEventData({ ...eventData, date: e.target.value })
            }
            className="input input-bordered w-full bg-white"
          />
        </label>

        {/* Start Time */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Start Time</span>
          <input
            type="time"
            value={eventData.startTime}
            onChange={(e) =>
              setEventData({ ...eventData, startTime: e.target.value })
            }
            className="input input-bordered w-full bg-white"
          />
        </label>

        {/* End Time */}
        <label className="form-control w-full">
          <span className="label-text font-medium">End Time</span>
          <input
            type="time"
            value={eventData.endTime}
            onChange={(e) =>
              setEventData({ ...eventData, endTime: e.target.value })
            }
            className="input input-bordered w-full bg-white"
          />
        </label>

        {/* isPublic */}
        <div className="form-control flex-row items-center gap-3">
          <span className="label-text font-medium">Public?</span>
          <input
            type="checkbox"
            checked={eventData.isPublic}
            onChange={(e) =>
              setEventData({ ...eventData, isPublic: e.target.checked })
            }
            className="checkbox"
          />
        </div>

        {/* Status */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Status</span>
          <input
            type="text"
            value={eventData.status}
            onChange={(e) =>
              setEventData({ ...eventData, status: e.target.value })
            }
            className="input input-bordered w-full bg-white"
           
          />
        </label>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};
