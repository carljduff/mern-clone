import { Category } from "../models/models";
export const addCategory = async (request, response) => {
    try {
        const { label, type } = request.body;
        if (!label || !type) {
            return response.status(400).json({message: "All fields required."});
        }

        const newCategory = await Category.create({label, type});

        return response.status(201).json(newCategory);
    } catch (error) {
       console.error("Error creating category:", error.message);
       return response.status(500).json({ message: "Internal server error" }); 
    }
}

export const getCategories = async (request, response) => {
    try {
        const categories = await Category.findAll()
        return response.status(200).json(categories);
    } catch (error) {
        console.error("Error getting categories:", error.message);
        return response.status(500).json({ message: "Internal server error" });
    }
}