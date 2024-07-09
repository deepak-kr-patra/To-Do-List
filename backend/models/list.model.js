import mongoose from "mongoose";


const listSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
            default: []
        }
    ]
}, { timestamps: true });

const List = mongoose.model("List", listSchema);

export default List;