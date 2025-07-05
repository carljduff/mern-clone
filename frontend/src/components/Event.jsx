import { useState, useEffect } from "react";
import { useEventStore } from "../store/useEventStore.js";


const Event = () => {
    const {events,getEvents} = useEventStore();

    useEffect(() => {
        getEvents();
    }, []);

    return (
    <div>
        {events.map((item) => (
            <h1 key={item.id}>{item.title}</h1>
        ))}

    </div>
  )
}

export default Event