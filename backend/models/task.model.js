import mongoose from "mongoose";


const taskSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

export default Task;