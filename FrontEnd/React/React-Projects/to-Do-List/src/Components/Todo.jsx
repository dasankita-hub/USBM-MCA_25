// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState(["Assignment completion", "DSA problem Solving", "Backend learning"]);
  const [newTask, setNewTask] = useState("");

  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="bg-slate-900 min-h-screen flex flex-col items-center py-8">
        <h1 className="text-4xl text-center text-white py-2 px-4">To Do List</h1>
        <div className="flex items-center w-full max-w-md mt-4">
          <input
            type="text"
            className="outline-none w-full py-2 px-4 rounded-l border border-gray-300 focus:ring-2 focus:ring-green-500"
            placeholder="Enter Your Task"
            value={newTask}
            onChange={handleInput}
          />
          <button
            className="bg-red-500   text-white py-2 px-4 rounded-r hover:bg-red-600 "
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ol className="text-white mt-4 w-full max-w-md">
          {tasks.map((task, index) => (
            <li key={index} className="py-2 px-4 flex justify-between items-center bg-green-800 rounded border border-gray-300 mt-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600 mr-2"
              />
              <span className='text-green-200'>{task}</span>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 "
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Todo;
