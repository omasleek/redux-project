// Component to add a new task
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (desc.trim()) {
      dispatch(addTask(desc));
      setDesc("");
    }
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        className="border border-gray-300 rounded px-4 text-blue-400 py-2 w-full"
        placeholder="Add a new task..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
