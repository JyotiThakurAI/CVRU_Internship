const User = require("../models/User");

const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
try {
const { name, email, password } = req.body;

// 1. Validate fields
if (!name || !email || !password) {
return res.status(400).json({ message: "All fields are required" });
}

// 2. Check if email already exists
const existingUser = await User.findOne({ email });
if (existingUser) {
return res.status(400).json({ message: "Email already registered" });
}

// 3. Hash password
const hashedPassword = await bcrypt.hash(password, 10);

// 4. Create user
const newUser = await User.create({
name,
email,
password: hashedPassword
});

// 5. Response
res.status(201).json({
message: "User registered successfully",
user: {
id: newUser._id,
name: newUser.name,
email: newUser.email
}
});
} catch (error) {
console.error(error);
res.status(500).json({ message: "Server error" });
}
};
