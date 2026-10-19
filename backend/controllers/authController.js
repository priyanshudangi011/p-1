// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Required fields check
//     if (
//       typeof name !== 'string' ||
//       typeof email !== 'string' ||
//       typeof password !== 'string' ||
//       !name.trim() ||
//       !email.trim() ||
//       !password
//     ) {
//       return res.status(400).json({
//         message: 'Name, email and password are required',
//       });
//     }

//     const cleanName = name.trim();
//     const cleanEmail = email.trim().toLowerCase();

//     if (cleanName.length < 2 || cleanName.length > 50) {
//       return res.status(400).json({
//         message: 'Name must be between 2 and 50 characters',
//       });
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
//       return res.status(400).json({
//         message: 'Please enter a valid email',
//       });
//     }

//     if (password.length < 8 || password.length > 72) {
//       return res.status(400).json({
//         message: 'Password must be between 8 and 72 characters',
//       });
//     }

//     // Check existing account
//     const existingUser = await User.findOne({
//       email: cleanEmail,
//     });

//     if (existingUser) {
//       return res.status(409).json({
//         message: 'Email is already registered',
//       });
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 12);

//     // Default image: avatar generated from user's initials
//     const profileImage =
//       `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(cleanName)}`;

//     const user = await User.create({
//       name: cleanName,
//       email: cleanEmail,
//       password: hashedPassword,
//       profileImage,
//     });

//     // Never send password to frontend
//     return res.status(201).json({
//       message: 'Registration successful',
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         profileImage: user.profileImage,
//         createdAt: user.createdAt,
//       },
//     });
//   } catch (error) {
//     // Also handles duplicate-email race conditions
//     if (error.code === 11000) {
//       return res.status(409).json({
//         message: 'Email is already registered',
//       });
//     }

//     console.error('Registration error:', error.message);

//     return res.status(500).json({
//       message: 'Registration failed. Please try again.',
//     });
//   }
// };

// module.exports = { registerUser };

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (!process.env.JWT_SECRET) {
      console.error("Login error: JWT_SECRET is not configured");
      return res.status(500).json({
        message: "Login is unavailable. Please try again later.",
      });
    }

    const token = jwt.sign({ sub: user._id.toString() }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        createdAt: user.createdAt,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Login failed. Please try again.",
    });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Validate name
    if (cleanName.length < 2 || cleanName.length > 50) {
      return res.status(400).json({
        message: "Name must be between 2 and 50 characters",
      });
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        message: "Please enter a valid email",
      });
    }

    // Validate password
    if (password.length < 8 || password.length > 72) {
      return res.status(400).json({
        message: "Password must be between 8 and 72 characters",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({
      email: cleanEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email is already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate default profile avatar
    const profileImage = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(cleanName)}`;

    // Create user
    const user = await User.create({
      name: cleanName,
      email: cleanEmail,
      password: hashedPassword,
      profileImage,
    });

    return res.status(201).json({
      message: "Registration successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email is already registered",
      });
    }

    console.error("Registration error:", error);

    return res.status(500).json({
      message: "Registration failed. Please try again.",
    });
  }
};

module.exports = { loginUser, registerUser };
