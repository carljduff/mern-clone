import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useEventStore = create((set) => ({
    // singleEvent: null,
    events: [],

    createEvent: async (data) => {
        try {
            await axiosInstance.post('/events', data);
            toast.success("Event Created");
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    getEvents: async () => {
        try {
            const response = await axiosInstance.get('/events')
            set({events: response.data});
        } catch (error) {
            set({events: null})
            console.log("ERROR GETTINGE EVENTS", error);
        }
    },
}))