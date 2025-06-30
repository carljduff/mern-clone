import { User } from "../models/user.model.js";
import "../models/user.model.js"; 




export const signup = async (request, response) => {
    User.sync();

    const { firstName, lastName, email, password } = request.body;
    


    try {
        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });

        if (newUser) {
            return response.status(201).json({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                
            });
        } else {
            response.status(400).json({ message: "Invalid user data." });
        }
       
    } catch (error) {
        console.log("Error in signup controller: ", error.message);
        response.status(500).json({ message: "Internal Server Error"})
    }
}