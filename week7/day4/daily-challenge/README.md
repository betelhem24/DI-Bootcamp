# Week 7 Day 4 - Daily Challenge: Voting App

## Project Overview

A React application that allows users to vote for their favorite programming language. This project demonstrates state management, event handling, and dynamic list rendering in React.

## Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS** - Custom styling

## Features

- ✅ Display list of programming languages
- ✅ Vote counter for each language
- ✅ Interactive voting buttons
- ✅ Real-time vote count updates
- ✅ Immutable state management

## Project Structure

```
src/
├── App.jsx              # Main application with voting logic
├── App.css              # Application styles
├── index.css            # Global styles
└── main.jsx             # Application entry point
```

## How It Works

### State Management

The application uses React's `useState` hook to manage an array of programming languages and their vote counts:

```javascript
const [languages, setLanguages] = useState([
  { name: "Php", votes: 0 },
  { name: "Python", votes: 0 },
  { name: "JavaScript", votes: 0 },
  { name: "Java", votes: 0 },
]);
```

### Voting Logic

When a user clicks the vote button:
1. A shallow copy of the languages array is created
2. The vote count for the selected language is incremented
3. The state is updated with the new array

```javascript
const vote = (index) => {
  const newLanguages = [...languages];
  newLanguages[index].votes += 1;
  setLanguages(newLanguages);
};
```

### Rendering

The application maps over the languages array to render each language with its vote count and button:

```javascript
{languages.map((language, index) => (
  <div key={index}>
    <span>{language.votes}</span>
    <span>{language.name}</span>
    <button onClick={() => vote(index)}>Click here!</button>
  </div>
))}
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Running the Project

1. Navigate to the project directory:
   ```bash
   cd week7/day4/daily-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Key Concepts Demonstrated

1. **State Management**: Using `useState` to manage complex state (array of objects)
2. **Immutability**: Creating shallow copies to avoid direct state mutation
3. **Event Handling**: Handling click events with parameters
4. **Dynamic Rendering**: Using `map()` to render lists
5. **Component Structure**: Organizing logic within a single component

## Styling

The application includes custom CSS for:
- Clean, modern layout
- Hover effects on buttons
- Responsive design
- Visual feedback for user interactions

## Future Enhancements

Potential improvements could include:
- Sorting languages by vote count
- Reset votes functionality
- Add new languages dynamically
- Persist votes to localStorage
- Visual charts/graphs for vote distribution

## Notes

This project demonstrates fundamental React patterns for building interactive applications with dynamic state management. The voting mechanism showcases proper state handling practices in React.

## License

This project is for educational purposes as part of the DI Bootcamp program.
