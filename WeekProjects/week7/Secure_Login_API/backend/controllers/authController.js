
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const {
    generateAccessToken,
    generateRefreshToken,
} = require("../utils/generateTokens");

// POST /api/register
exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ message: "Name, email and password are required" });
        }

        const existing = await User.findOne({ email });

        if (existing)
            return res.status(400).json({ message: "Email already registered" });

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashed,
        });

        res.status(201).json({
            message: "User registered",
            user: user.toJSON(),
        });
    } catch (err) {
        next(err);
    }
};

// POST /api/login
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ message: "Email and password required" });

        const user = await User.findOne({ email });

        if (!user)
            return res.status(401).json({ message: "Invalid credentials" });

        const match = await bcrypt.compare(password, user.password);

        if (!match)
            return res.status(401).json({ message: "Invalid credentials" });

        // Prepare token payload
        const payload = { id: user._id, role: user.role };

        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        // Save refresh token in DB (so we can revoke it)
        user.refreshTokens.push({ token: refreshToken });
        await user.save();

        res.json({
            message: "Login successful",
            accessToken,
            refreshToken,
            user: user.toJSON(),
        });
    } catch (err) {
        next(err);
    }
};

// POST /api/refresh-token
exports.refreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken)
            return res.status(400).json({ message: "Refresh token required" });

        // Verify refresh token
        let decoded;

        try {
            decoded = jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET
            );
        } catch (err) {
            return res
                .status(401)
                .json({ message: "Invalid or expired refresh token" });
        }

        // Ensure token exists in DB for the user
        const user = await User.findById(decoded.id);

        if (!user)
            return res.status(401).json({ message: "User not found" });

        const found = user.refreshTokens.find(
            (rt) => rt.token === refreshToken
        );

        if (!found)
            return res.status(401).json({ message: "Refresh token revoked" });

        // Create new access token and rotate refresh token
        const payload = { id: user._id, role: user.role };

        const newAccessToken = generateAccessToken(payload);
        const newRefreshToken = generateRefreshToken(payload);

        user.refreshTokens = user.refreshTokens.filter(
            (rt) => rt.token !== refreshToken
        );

        user.refreshTokens.push({ token: newRefreshToken });
        await user.save();

        res.json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    } catch (err) {
        next(err);
    }
};

// POST /api/logout
exports.logout = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken)
            return res.status(400).json({ message: "Refresh token required" });

        // Verify to find user ID
        let decoded;

        try {
            decoded = jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET
            );
        } catch (err) {
            // If token is invalid or expired, respond successfully
            return res.json({ message: "Logged out" });
        }

        const user = await User.findById(decoded.id);

        if (user) {
            user.refreshTokens = user.refreshTokens.filter(
                (rt) => rt.token !== refreshToken
            );

            await user.save();
        }

        res.json({ message: "Logged out" });
    } catch (err) {
        next(err);
    }
};
