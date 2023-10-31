import "reflect-metadata";
import express from "express";
import { createConnection, getRepository } from "typeorm";
import { Calls } from "./models/entities/calls";
import { User } from "./models/entities/user";
import callsRoutes from "./routes/calls.route";
import userRoutes from "./routes/user.route";
import rootRoute from "./routes/root.route";
import weightageLookupRoutes from "./routes/weightage_Lookup.route";
import { weightage_Lookup } from "./models/entities/weightage_Lookup";
import questionnairesRoutes from "./routes/Questionnaires.route";
import { Questionnaires } from "./models/entities/Questionnaires";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

async function initializeApp() {
  try {
    const connection = await createConnection("default"); // Create the database connection

    const userRepository = getRepository(User);
    const callRepository = getRepository(Calls);
    const weightageLookupRepository = getRepository(weightage_Lookup); // Get the repository for Weightage_Lookup
    const  questionnairesRepository = getRepository(Questionnaires);


    app.use("/", rootRoute); // Mount the root route at the root URL
    app.use("/users", userRoutes(userRepository)); // User routes
    app.use("/calls", callsRoutes(callRepository)); // Calls routes
    app.use("/weightage_Lookup", weightageLookupRoutes(weightageLookupRepository)); 
    app.use("/questionnaires", questionnairesRoutes(questionnairesRepository)); 

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the application:", error);
  }
}

initializeApp();
