import './App.css';

import { useState } from 'react';
//
//
// this is the form
// [
//   [firstName, value as defaultValue in 2nd form],
//   [lastName, value as defaultValue in 2nd form],
// ]

// we need to save data in "session memory"
// {
// form1: formData
// }
// submit => generates a second form based on what was saved in "session memory" (field, values)

const formData = [
  ['firstName', 'Anton'],
  ['lastName', 'Honcahruk'],
  ['car', 'red'],
];

const sessionMemory = {
  form1: [],
  // form2: []
};

export default function App() {
  // {formData.length > 0 }
  return (
    <main>
      <Form inputs={formData} />
    </main>
  );
}

function Form({ inputs }) {
  const [formDataStateSecondary, setFormDataStateSecondary] = useState([]);
  const [formDataState, setFormDataState] = useState([...inputs]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        {formDataState.map((input, index) => {
          return (
            <p>
              <input
                data-key={index}
                key={index}
                name={input[0]}
                value={input[1]}
                type="text"
                onChange={onChange}
              />
            </p>
          );
        })}
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={onSubmitSecondary}>
        {formDataStateSecondary.map((input, index) => {
          return (
            <p>
              <input
                data-key={index}
                key={index}
                name={input[0]}
                value={input[1]}
                type="text"
                onChange={onChange}
              />
            </p>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  function onSubmit(e) {
    sessionMemory['form1'] = [...formDataState];
    setFormDataStateSecondary([...formDataState]);
  }

  function onSubmitSecondary() {
    sessionMemory['form2'] = [...formDataStateSecondary];
  }

  function onChange(e) {
    const key = e.target.dataset['key'];
    const name = e.target.name;
    const value = e.target.value;
    console.log('name', name);
    console.log('value', value);
    const newFormState = [...formDataState];
    newFormState[key] = [name, value];
    setFormDataState(newFormState);
  }
}

/*

Today you're going to be creating a simple React application that creates a form which saves data in session memory. The form component takes in an array of tuples where each tuple is [Field Name, Default Value]. It then generates a second form with a submit button, where the default value is the default value for the input, and the field name is the name for the input. This second form also saves its data in session memory. Then, add a button that displays the data on the page.

(api_key, api.google.com/api)
(secret_key, secret)
(timing, 0)

*/
