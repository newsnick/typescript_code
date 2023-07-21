import express, { Request, Response } from 'express'
import TaskRoutes from './app/routes/task.routes' // Import your task routes
import Database from './app/db' // Import your database setup

const app = express()
const port = 3000 // Choose a port number you prefer

// Middleware to parse JSON request bodies
app.use(express.json())

// Connect to the database
const database = new Database()

// Set up your routes
app.use('/api/tasks', TaskRoutes)

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
