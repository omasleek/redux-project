// Root app component with dark mode toggle
import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { hasWarned } from "framer-motion";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-gray-700 dark:bg-gray-900 text-neutral-800  transition-colors duration-300 flex justify-center items-start py-10 px-4"
          : "min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex justify-center items-start py-10 px-4"
      }
    >
      <div className="w-full max-w-xl">
        {/* Title and Mode Switch */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300">
            Omachilda ToDo App
          </h1>
          <button
            onClick={() => setDark(!dark)}
            className="text-sm px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
};

export default App;
