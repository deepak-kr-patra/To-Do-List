import List from "../models/list.model.js";
import Task from "../models/task.model.js";


export const getTasks = async (req, res) => {
    try {
        const userId = req.user._id;

        const list = await List.findOne({ user: userId }).populate("tasks");

        if (!list) {
            return res.status(200).json([]);
        }

        const tasks = list.tasks;
        res.status(200).json(tasks);

    } catch (error) {
        console.log("Error in getTasks:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const addTask = async (req, res) => {
    try {
        const userId = req.user._id;
        const { title } = req.body;

        let list = await List.findOne({ user: userId });

        if (!list) {
            list = await new List({
                user: userId
            });
        };

        const newTask = new Task({
            user: userId,
            title
        });

        if (newTask) {
            list.tasks.push(newTask._id);
        }

        await Promise.all([list.save(), newTask.save()]);

        res.status(201).json(newTask);

    } catch (error) {
        console.log("Error in addTask:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const removeTask = async (req, res) => {
    try {
        // removing the task from tasks collection
        const { id: toDeleteID } = req.params;

        const taskToDelete = await Task.findById(toDeleteID);

        if (!taskToDelete) {
            return res.status(404).json({ error: "Task not found" });
        }

        if (taskToDelete.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ error: "Unauthorized - Invalid User" });
        }

        await Task.findByIdAndDelete(taskToDelete);

        // removing the task id from tasks array of list collection
        const list = await List.findOne({ user: taskToDelete.user });

        await list.tasks.pull(taskToDelete._id);

        const newList = { // creating new list object for updating
            tasks: list.tasks
        };

        await List.findByIdAndUpdate(list._id, { $set: newList }, { new: true });

        res.status(200).json(taskToDelete);

    } catch (error) {
        console.log("Error in removeTask:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const updateTask = async (req, res) => {
    try {
        const { title } = req.body;
        const { id: toUpdateID } = req.params;

        const taskToUpdate = await Task.findById(toUpdateID);

        if (!taskToUpdate) {
            return res.status(404).json({ error: "Task not found" });
        }

        if (taskToUpdate.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ error: "Unauthorized - Invalid User" });
        }

        const newTask = {
            title
        };

        let updatedTask = await Task.findByIdAndUpdate(taskToUpdate._id, { $set: newTask }, { new: true });

        res.status(200).json(updatedTask);

    } catch (error) {
        console.log("Error in updateTask:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}