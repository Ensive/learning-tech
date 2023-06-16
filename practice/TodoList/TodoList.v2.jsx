import { useState } from 'react';
import './styles.css';

export default function App() {
  const [newTodoItem, setNewTodoItem] = useState('');
  const [todoItems, setTodoItems] = useState([
    { id: 1, text: 'Walk the dog' },
    { id: 2, text: 'Water the plants' },
    { id: 3, text: 'Wash the dishes' },
  ]);

  function onInputChange(e) {
    setNewTodoItem(e.target.value);
  }

  function onDelete(index) {
    setTodoItems(todoItems.filter((_, i) => i !== index));
  }

  function onSubmit(e) {
    e.preventDefault();

    if (newTodoItem.trim() !== '') {
      const newItem = { id: Date.now(), text: newTodoItem };
      setTodoItems([...todoItems, newItem]);
      setNewTodoItem('');
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInputChange}
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
        {todoItems.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
