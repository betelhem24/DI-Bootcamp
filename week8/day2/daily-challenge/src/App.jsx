import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    // The form submission will naturally reload the page with query params
    // because we are using a standard HTML form action/method or manually constructing it.
    // The instructions say: "On submit you will pass the entered data in the URL."
    // We can just let the default form GET behavior happen if we don't preventDefault,
    // OR we can construct the URL. Given it's a React app, usually we preventDefault,
    // but the requirement explicitly asks for URL output like: 
    // http://localhost:3000/?firstName=John&lastName=Doe...

    // If we use <form action="http://localhost:3000/" method="GET"> it will do exactly that.
    // Let's use the standard native form behavior for this specific requirement.
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sample form</h1>
      </header>

      <main className="form-container">
        <form action="http://localhost:5173/" method="GET" className="data-form">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              /> Female
            </label>
          </div>

          <div className="form-group">
            <label className="select-label">Select your destination</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            >
              <option value="">-- Please Choose a destination --</option>
              <option value="Japan">Japan</option>
              <option value="Thailand">Thailand</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>

          <div className="form-group checkbox-group">
            <label>Dietary restrictions:</label>
            <div className="checkbox-item">
              <input
                type="checkbox"
                name="nutsFree"
                checked={formData.nutsFree}
                onChange={handleChange}
              />
              <span>Nuts free</span>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                name="lactoseFree"
                checked={formData.lactoseFree}
                onChange={handleChange}
              />
              <span>Lactose free</span>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                name="vegan"
                checked={formData.vegan}
                onChange={handleChange}
              />
              <span>Vegan</span>
            </div>
          </div>

          <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
        </form>

        <div className="results-container">
          <h2>Entered information:</h2>
          <p>Your name: {formData.firstName} {formData.lastName}</p>
          <p>Your age: {formData.age}</p>
          <p>Your gender: {formData.gender}</p>
          <p>Your destination: {formData.destination}</p>
          <p>Your dietary restrictions:</p>
          <ul className="restrictions-list">
            <li>**Nuts free : {formData.nutsFree ? 'Yes' : 'No'}</li>
            <li>**Lactose free : {formData.lactoseFree ? 'Yes' : 'No'}</li>
            <li>**Vegan : {formData.vegan ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;