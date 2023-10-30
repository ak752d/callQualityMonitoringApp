import 'reflect-metadata';
import { createConnection, getRepository } from 'typeorm';
import express from 'express';
import { User } from './models/entities/user';
import userRoutes from './routes/user.route';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function initializeApp() {
  try {
    const connection = await createConnection("default"); // Create the database connection

    // Now, you can get the repository inside this function
    const userRepository = getRepository(User);

   

    // Define routes for users and calls within the /api route
    app.use('/', userRoutes(userRepository)); // Define /api/users route
    // app.use('/api/calls', callsRoutes(callsRepository)); // Define /api/calls route

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the application:', error);
  }
}

initializeApp();
