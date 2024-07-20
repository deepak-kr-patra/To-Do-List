import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";


export const changeUsername = async (req, res) => {
    try {
        const userID = req.user._id;
        const { username } = req.body;

        const user = await User.findById(userID);

        if (!user) {
            return res.status(404).json({ error: "No user found" });
        }

        if (username === user.username) {
            return res.status(400).json({ error: "Username already in use" });
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ error: "Username already taken" });
        }

        const newUser = {
            username
        };

        const updatedUser = await User.findByIdAndUpdate(userID, { $set: newUser }, { new: true });

        res.status(200).json({
            _id: updatedUser._id,
            username: updatedUser.username
        });

    } catch (error) {
        console.log("Error in changeUsername:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const changePassword = async (req, res) => {
    try {
        const userID = req.user._id;
        const { oldPassword, newPassword, confirmedNewPassword } = req.body;

        const user = await User.findById(userID);

        if (!user) {
            return res.status(404).json({ error: "No user found" });
        }

        const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Incorrect current password" });
        }

        if (newPassword !== confirmedNewPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }
        
        if (oldPassword === newPassword) {
            return res.status(400).json({ error: "Password already in use" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        const newUser = {
            password: hashedPassword
        };

        const updatedUser = await User.findByIdAndUpdate(userID, { $set: newUser }, { new: true });

        res.status(200).json(updatedUser);

    } catch (error) {
        console.log("Error in changePassword:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};