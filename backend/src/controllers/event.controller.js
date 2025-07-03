import { request } from "express";
import { Event } from "../models/models.js";

export const createEvent = async (request, response) => {
    const { title, description, address, date, startTime, endTime, isPublic, status} = request.body;

    try {
        if(!title || !description || !address || !date || !startTime || !endTime || !status) {
            return response.status(400).json({ message: "All fields are required." });
        }
        
        const userID = request.user?.id;
        // request.event.id = 
        if (!userID) {
             return response.status(401).json({ message: "Unauthorized - No user ID found." });
        }
        // console.log(request.body);

        const newEvent = await Event.create({
            title, description, address, date, startTime, endTime, isPublic, status, userID,
        });

        return response.status(201).json(newEvent);

    } catch (error) {
        console.error("Error creating event:", error.message);
        return response.status(500).json({ message: "Internal server error" });
    }
}

export const getEvents = async (request, response) => {
    try {
        const userID = request.user?.id;

        if (!userID) {
                 return response.status(401).json({ message: "Unauthorized - No user ID found." });
        };
        console.log(request)
        const events = await Event.findAll({where: {userID: userID}});
        return response.status(201).json(events);
    } catch (error) {
        console.error("Error getting event:", error.message);
        return response.status(500).json({ message: "Internal server error" });
    }
        
}

export const getSingleEvent = async (request, response) => {
  try {
    const eventID = request.params.id;
    const userID = request.user?.id;

    if (!userID) {
      return response.status(401).json({ message: "Unauthorized - No user ID found." });
    }
    
    // includes event details with items for the event and user...
    const event = await Event.findOne({
         where: { id: eventID, userID },
         include: [
            {
                model: Item,
                as: "Items",
            },
            {
                model: User,
                attributes: {exlucde: ["password"]}
            }
         ]
        });

    if (!event) {
      return response.status(404).json({ message: "Event not found." });
    }

    return response.status(200).json(event);
  } catch (error) {
    console.error("Error fetching single event:", error.message);
    return response.status(500).json({ message: "Internal server error" });
  }
};