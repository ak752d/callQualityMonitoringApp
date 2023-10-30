
import express, { Router, Request, Response } from "express";
import { Repository } from "typeorm";
import { questionnaires } from "../models/entities/Questionnaires";

const questionnairesRoutes = (questionnairesRepository: Repository<questionnaires>): Router => {
  const router = express.Router();

  // GET: Fetch all questionnaires
  router.get("/getAllQuestionnaires", async (req: Request, res: Response) => {
    try {
      const questionnaires = await questionnairesRepository.find();
      res.json(questionnaires);
    } catch (error) {
      console.error("Error fetching questionnaires:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Add more routes for managing questionnaires as needed

  return router;
};

export default questionnairesRoutes;
