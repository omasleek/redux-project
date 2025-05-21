// Single task item with edit and toggle options
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleDone, editTask } from "../redux/taskSlice";
import { motion } from "framer-motion";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  // Save edited task
  const handleSave = () => {
    dispatch(editTask({ id: task.id, newDesc }));
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded p-4 mb-3"
    >
      {isEditing ? (
        <input
          className="flex-1 border px-3 py-2 rounded mr-2"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
      ) : (
        <span
          className={`flex-1 ${
            task.isDone ? "line-through text-gray-400" : ""
          }`}
        >
          {task.description}
        </span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch(toggleDone(task.id))}
          className={`px-3 py-1 rounded text-white ${
            task.isDone
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {task.isDone ? "Undo" : "Done"}
        </button>
      </div>
    </motion.div>
  );
};

export default Task;
