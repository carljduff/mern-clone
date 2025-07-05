import { useEventStore } from "../store/useEventStore";
import { useState } from "react";
import toast from "react-hot-toast";

export const AddEvent = () => {
    const { createEvent } = useEventStore();
    
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        address:"",
        date: "",
        startTime: "",
        endTime: "",
        isPublic: false,
        status: "",
    });

  
    const handleSubmit = async (e) => {
        e.preventDefault()
        createEvent(eventData);
        
    };
    
return (

<div>

<form onSubmit={handleSubmit}>
{/* // Title  */}
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Title:</span>
  </div>
  <input type="text" onChange={(e) => {setEventData({...eventData, title: e.target.value})}} value={eventData.title} name="title" placeholder="Event title" class="input input-bordered w-full max-w-xs" />
</label>

{/* // <!-- Description --> */}
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Description:</span>
  </div>
  <input type="text" onChange={(e) => {setEventData({...eventData, description: e.target.value})}} value={eventData.description} name="description" placeholder="Event description" class="input input-bordered w-full max-w-xs" />
</label>

{/* // <!-- Address --> */}
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Address:</span>
  </div>
  <input type="text" onChange={(e) => {setEventData({...eventData, address: e.target.value})}} value={eventData.address} name="address" placeholder="Event location" class="input input-bordered w-full max-w-xs" />
</label>

{/* // <!-- Date --> */}
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Date:</span>
  </div>
  <input type="date" onChange={(e) => {setEventData({...eventData, date: e.target.value})}} value={eventData.date} name="date" class="input input-bordered w-full max-w-xs" />
</label>

{/* // <!-- Start Time --> */}
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Start Time:</span>
  </div>
  <input type="time" onChange={(e) => {setEventData({...eventData, startTime: e.target.value})}} value={eventData.startTime} name="startTime" class="input input-bordered w-full max-w-xs" />
</label>

{/* // <!-- End Time --> */}
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">End Time:</span>
  </div>
  <input type="time" onChange={(e) => {setEventData({...eventData, endTime: e.target.value})}} value={eventData.endTime} name="endTime" class="input input-bordered w-full max-w-xs" />
</label>

{/* // <!-- isPublic --> */}
<label class="form-control w-full max-w-xs flex-row items-center gap-2 mt-4">
  <span class="label-text">Public?</span>
  <input type="checkbox" checked={eventData.isPublic}
          onChange={(e) => setEventData({ ...eventData, isPublic: e.target.checked })} name="isPublic" class="checkbox" />
</label>

{/* // <!-- Status --> */}
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">Status:</span>
  </div>
  <input type="text" onChange={(e) => {setEventData({...eventData, status: e.target.value})}} value={eventData.status} name="status" placeholder="e.g. upcoming, cancelled" class="input input-bordered w-full max-w-xs" />
</label>

<button
              type="submit"
              className="btn btn-primary"
              
            >Submit</button>
</form>
</div>
)    

}