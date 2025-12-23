# Task Management API

A RESTful API built with Express.js for managing tasks with JSON file storage.

## Features

- ✅ Create, Read, Update, and Delete tasks
- ✅ JSON file-based storage
- ✅ Input validation
- ✅ Error handling
- ✅ RESTful architecture

## Project Structure
```
task-management-api/
├── data/
│   └── tasks.json          # Task storage
├── routes/
│   └── tasks.js            # API routes
├── middleware/
│   └── validation.js       # Validation middleware
├── utils/
│   └── fileHandler.js      # File operations
├── server.js               # Main application
└── package.json            # Dependencies
```

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd task-management-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The API will run on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get task by ID |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/:id` | Update task by ID |
| DELETE | `/tasks/:id` | Delete task by ID |

## Testing

### Using Postman

1. **Create a task (POST):**
   - URL: `http://localhost:3000/tasks`
   - Method: POST
   - Body (JSON):
```json
   {
     "title": "Buy groceries",
     "description": "Milk, eggs, bread",
     "status": "pending"
   }
```

2. **Get all tasks (GET):**
   - URL: `http://localhost:3000/tasks`
   - Method: GET

3. **Update a task (PUT):**
   - URL: `http://localhost:3000/tasks/1`
   - Method: PUT
   - Body (JSON):
```json
   {
     "title": "Buy groceries - Updated",
     "description": "Milk, eggs, bread, cheese",
     "status": "completed"
   }
```

4. **Delete a task (DELETE):**
   - URL: `http://localhost:3000/tasks/1`
   - Method: DELETE

## Task Object Structure
```json
{
  "id": 1,
  "title": "Task title",
  "description": "Task description",
  "status": "pending",
  "createdAt": "2025-12-23T10:30:00.000Z",
  "updatedAt": "2025-12-23T10:30:00.000Z"
}
```

### Valid Status Values:
- `pending`
- `in-progress`
- `completed`

## Technologies Used

- Node.js
- Express.js
- File System (fs) for JSON storage

## Author

Betelhem Legesse

## License

ISC