/**
 * Week 8 Day 4 Daily Challenge: Registration Form.
 * This app demonstrates a registration form with basic validation.
 */
import { useState } from 'react'
import './App.css'

function App() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would validate and send to server
    setSubmittedData(inputs);
    console.log('User Registered:', inputs);
  };

  return (
    <div className="RegistrationApp">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit} className="reg-form">
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={inputs.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={inputs.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>

      {submittedData && (
        <div className="success-message">
          <h2>Registration Successful!</h2>
          <p>Welcome, {submittedData.firstName}!</p>
          <div className="summary">
            <p><strong>Username:</strong> {submittedData.username}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
