import { User } from "../models/user.model.js";
import "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";

export const signup = async (request, response) => {
  // Receives the payload from request..retrieves the specific fields...
  const { firstName, lastName, email, password } = request.body;

  try {
    if (!firstName || !lastName || !email || !password) {
      return response.status(400).json({ message: "All fields are required." });
    }

    if (password.length < 6) {
      return response
        .status(400)
        .json({ message: "Password must be at least 6 characters." });
    }

    const user = await User.findOne({ where: { email: email } });

    if (user)
      return response.status(400).json({ message: "Email already exists." });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser.id, response);

      response.status(201).json({
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      });
    } else {
      response.status(400).json({ message: "Invalid user data." });
    }
  } catch (error) {
    console.log("Error in signup controller: ", error.message);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (request, response) => {
  console.log("LOGIN PAGE");
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return response.status(400).json({ message: "Invalid credentials." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return response.status(400).json({ message: "Invalid credentials." });
    }

    generateToken(user.id, response);

    response.status(200).json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    console.log("Login error: ", error.message);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (request, response) => {
  try {
    response.cookie("jwt", "", { maxAge: 0 });
    return response.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    console.log("Error in login controller: ", error.message);
    return res.status(500).json({ message: "Internal Server Error." });
  }
};

export const checkAuth = (request, response) => {
  try {
    response.status(200).json(request.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    response.status(500).json({ message: "Internal Server Error"});
  }
}