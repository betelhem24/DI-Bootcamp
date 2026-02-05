# Week 7 Day 4 - Exercises XP: React Components

## Project Overview

This project demonstrates fundamental React concepts including component composition, props, state management, and event handling. It contains four separate exercises showcasing different React features.

## Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS** - Styling

## Project Structure

```
src/
├── components/
│   ├── Car.jsx          # Exercise 1: Component with props
│   ├── Events.jsx       # Exercise 2: Event handling
│   ├── Phone.jsx        # Exercise 3: State management
│   └── Color.jsx        # Exercise 4: useEffect hook
├── App.jsx              # Main application component
├── App.css              # Application styles
└── main.jsx             # Application entry point
```

## Exercises Implemented

### Exercise 1: Car Component
**File**: `src/components/Car.jsx`

Demonstrates:
- Passing props to components
- Displaying dynamic data
- Component composition

**Features**:
- Displays car information (name and model)
- Receives data via props from parent component

### Exercise 2: Events Component
**File**: `src/components/Events.jsx`

Demonstrates:
- Event handling in React
- Click events
- Keyboard events
- Button interactions

**Features**:
- Click event handlers
- Keyboard input detection
- Toggle button functionality

### Exercise 3: Phone Component
**File**: `src/components/Phone.jsx`

Demonstrates:
- State management with `useState`
- Updating component state
- Conditional rendering

**Features**:
- Phone information display
- Color change functionality
- State-driven UI updates

### Exercise 4: Color Component
**File**: `src/components/Color.jsx`

Demonstrates:
- `useEffect` hook
- Side effects in React
- Component lifecycle

**Features**:
- Favorite color state
- Color change with button
- Alert on color change using `useEffect`

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
   cd week7/day4/exercises-xp
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

## Key Concepts Learned

1. **Component Props**: Passing data from parent to child components
2. **Event Handling**: Responding to user interactions
3. **State Management**: Managing component state with `useState`
4. **Side Effects**: Using `useEffect` for lifecycle operations
5. **Component Composition**: Building complex UIs from simple components

## Code Examples

### Passing Props
```javascript
// In App.jsx
const carinfo = { name: "Porsche", model: "Carrera" };
<Car carInfo={carinfo} />
```

### Event Handling
```javascript
// In Events.jsx
<button onClick={handleClick}>Click Me</button>
```

### State Management
```javascript
// In Phone.jsx
const [color, setColor] = useState("black");
const changeColor = () => setColor("blue");
```

### Using useEffect
```javascript
// In Color.jsx
useEffect(() => {
  alert(`Color changed to ${favoriteColor}`);
}, [favoriteColor]);
```

## Notes

This project was created as part of the DI Bootcamp curriculum to practice fundamental React concepts. Each exercise builds upon the previous one, gradually introducing more advanced React features.

## License

This project is for educational purposes as part of the DI Bootcamp program.
