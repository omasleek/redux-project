// Redux slice to manage task state
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [], // list of all tasks
    filter: "all", // filter type: all, done, or notDone
  },
  reducers: {
    // Add new task with a unique ID
    addTask: (state, action) => {
      state.list.push({
        id: uuidv4(),
        description: action.payload,
        isDone: false,
      });
    },
    // Toggle task completion status
    toggleDone: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    // Edit an existing task description
    editTask: (state, action) => {
      const { id, newDesc } = action.payload;
      const task = state.list.find((t) => t.id === id);
      if (task) task.description = newDesc;
    },
    // Set filter type
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleDone, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
