import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// TODO: challenge #2 update the code
export default function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" />
        <div>
          <button>Submit</button>
        </div>
      </div>
      <ul>
        <li>
          <span>Walk the dog</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Water the plants</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Wash the dishes</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
