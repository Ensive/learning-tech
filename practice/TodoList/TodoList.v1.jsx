import { useState } from 'react';
import './styles.css';

export default function App() {
  const [newTodoItem, setNewTodoItem] = useState('');
  const [todoItems, setTodoItems] = useState([
    'Walk the dog',
    'Water the plants',
    'Wash the dishes',
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <form
        onSubmit={onSubmit({
          todoItems,
          newTodoItem,
          setTodoItems,
          setNewTodoItem,
        })}
      >
        <input
          onChange={onInputChange(setNewTodoItem)}
          value={newTodoItem}
          type="text"
          placeholder="Add your task"
          name="todo"
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
      <ul>
        {todoItems.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
              <button
                onClick={onDelete({
                  setTodoItems,
                  todoItems,
                  index,
                })}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function onInputChange(setNewTodoItem) {
  return (e) => {
    setNewTodoItem(e.target.value);
  };
}

function onDelete({ setTodoItems, todoItems, index }) {
  return () => {
    setTodoItems([...todoItems.slice(0, index), ...todoItems.slice(index + 1)]);
  };
}

function onSubmit({ todoItems, newTodoItem, setTodoItems, setNewTodoItem }) {
  return (e) => {
    e.preventDefault();

    if (newTodoItem) {
      setTodoItems([...todoItems, newTodoItem]);
      setNewTodoItem('');
    }
  };
}
