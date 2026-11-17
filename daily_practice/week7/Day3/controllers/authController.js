const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                error: "Invalid email or password"
            });
        }

        // 2. Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                error: "Invalid email or password"
            });
        }

        // 3. Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // 4. Send response
        res.status(200).json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Server error"
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.updatePassword = async (req, res) => {
    try {
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({
                message: "Password is required"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { password: hashedPassword },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Password updated successfully"
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.status(200).json({
            message: "Users fetched successfully",
            users
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
};