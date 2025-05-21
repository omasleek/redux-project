// Displays and filters list of tasks
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./task";
import { setFilter } from "../redux/taskSlice";
import { AnimatePresence } from "framer-motion";

const ListTask = () => {
  const { list, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Filter task list based on status
  const filteredList = list.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => dispatch(setFilter("all"))}
          className={`px-3 py-1 rounded ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter("done"))}
          className={`px-3 py-1 rounded ${
            filter === "done"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Done
        </button>
        <button
          onClick={() => dispatch(setFilter("notDone"))}
          className={`px-3 py-1 rounded ${
            filter === "notDone"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Not Done
        </button>
      </div>

      {/* Task List with Animation */}
      <AnimatePresence>
        {filteredList.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ListTask;
