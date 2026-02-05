import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [responseMessage, setResponseMessage] = useState('')

  // Part I: Fetch message from GET /api/hello
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/hello')
        const text = await response.text()
        setMessage(text)
      } catch (error) {
        console.error('Error fetching message:', error)
      }
    }

    fetchMessage()
  }, [])

  // Part II: Handle form submission to POST /api/world
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: inputValue }),
      })

      const text = await response.text()
      setResponseMessage(text)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message || 'Loading title...'}</h1>
      </header>

      <main>
        <div className="card">
          <h2>Post to Server:</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something..."
              className="text-input"
            />
            <button type="submit">Submit</button>
          </form>

          <p className="response-message">{responseMessage}</p>
        </div>
      </main>
    </div>
  )
}

export default App
