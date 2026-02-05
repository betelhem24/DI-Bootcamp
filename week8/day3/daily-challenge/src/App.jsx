/**
 * Week 8 Day 3 Daily Challenge: Form Container.
 * This app captures user data via a form and displays it in real-time.
 */
import { useState } from 'react'
import './App.css'

function App() {
  // State to hold all form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: 'Thailand',
    dietaryRestrictions: {
      nutsFree: false,
      lactoseFree: false,
      vegan: false
    }
  })

  /**
   * Universal handleChange for text, select, and radio inputs.
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        dietaryRestrictions: {
          ...prev.dietaryRestrictions,
          [name]: checked
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  return (
    <div className="MainForm">
      <h1>Sample Form</h1>
      <form className="form-container">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        /><br />

        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        /><br />

        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        /><br />

        <div className="gender-selection">
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

        <select name="destination" value={formData.destination} onChange={handleChange}>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select><br />

        <div className="dietary-restrictions">
          <label>Dietary restrictions:</label><br />
          <label>
            <input
              type="checkbox"
              name="nutsFree"
              checked={formData.dietaryRestrictions.nutsFree}
              onChange={handleChange}
            /> Nuts free
          </label><br />
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.dietaryRestrictions.lactoseFree}
              onChange={handleChange}
            /> Lactose free
          </label><br />
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={formData.dietaryRestrictions.vegan}
              onChange={handleChange}
            /> Vegan
          </label>
        </div>
      </form>

      <hr />

      <div className="entered-info">
        <h2>Entered information:</h2>
        <p>Your name: {formData.firstName} {formData.lastName}</p>
        <p>Your age: {formData.age}</p>
        <p>Your gender: {formData.gender}</p>
        <p>Your destination: {formData.destination}</p>
        <p>Your dietary restrictions:</p>
        <div className="restrictions-list">
          <p>**Nuts free: {formData.dietaryRestrictions.nutsFree ? 'Yes' : 'No'}</p>
          <p>**Lactose free: {formData.dietaryRestrictions.lactoseFree ? 'Yes' : 'No'}</p>
          <p>**Vegan: {formData.dietaryRestrictions.vegan ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  )
}

export default App
