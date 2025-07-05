import { response } from "express";
import {Event, Item} from "../models/models.js";

export const addItem = async (request, response) => {
    try {
        const { label, quantity, isNeeded } = request.body
        const newItem = await Item.create({ label, quantity, isNeeded, categoryID, eventID, userID});
        const userID = request.user?.id;

        if (!userID) {
                 return response.status(401).json({ message: "Unauthorized - No user ID found." });
        };

        return response.status(201).json(newItem);

    } catch (error) {
        console.error("Error adding item:", error.message);
        return response.status(500).json({ message: "Internal server error" });
    }
}

export const getItems = async (request, response) => {
    try {
        const userID = request.user?.id;
        const eventID = request.params.eventID;

        if (!userID) {
                 return response.status(401).json({ message: "Unauthorized - No user ID found." });
        }

        // Find all returns an array
        const items = await Item.findAll({
            where: {eventID: eventID},
            include: {
                model: User,
                attributes: ["id", "firstName", "lastName"],
            },
        })

        if (items.length === 0) {
            return response.status(404).json({ message: "Items not found" });
        }

        return response.status(200).json(items);
    } catch (error) {
        console.log("Getting items error:", error)
        return response.status(500).json({message: "Server error."});
    }
}

export const getMyItems = async (request, response) => {
  try {
    const userID = request.user?.id;
    const eventID = request.params.eventID;

    if (!userID) {
      return response.status(401).json({ message: "Unauthorized - No user ID found." });
    }

    const items = await Item.findAll({
      where: {
        eventID: eventID,
        userID: userID,
      },
    });

    if (items.length === 0) {
      return response.status(404).json({ message: "No items found for this user at this event." });
    }

    return response.status(200).json(items);
  } catch (error) {
    console.error("Error getting user's items:", error);
    return response.status(500).json({ message: "Server error." });
  }
};

export const deleteItem = async (request, response) => {
  try {
    const itemID = request.params.itemID;

    const item = await Item.findByPk(itemID);

    if (!item) {
      return response.status(404).json({ message: "Item not found" });
    }

    await item.destroy();

    return response.status(200).json({ message: "Item deleted successfully" });

  } catch (error) {
    console.error("Error deleting item:", error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

export const updateItem = async (request, response) => {
    try {
        const itemID = request.params.itemID;
        const item = await Item.findByPk(itemID);
        const updatedData = request.body;

        if (!item) {
            return response.status(404).json({ message: "Item not found" });
        }

        await item.update(updatedData);
        return response.status(200).json(item);
        
    } catch (error) {
        console.error("Updating Item error:", error);
        return response.status(500).json({ message: "Server error" });
    }
}