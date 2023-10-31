
import express, { Router, Request, Response } from "express";
import { Repository } from "typeorm";
import { Questionnaires } from "../models/entities/Questionnaires";

const questionnairesRoutes = (questionnairesRepository: Repository<Questionnaires>): Router => {
  const router = express.Router();


  router.get("/getAllQuestionnaires", async (req: Request, res: Response) => {
    try {
      const questionnaires = await questionnairesRepository.find();
      res.json(questionnaires);
    } catch (error) {
      console.error("Error fetching questionnaires:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });




  return router;
};

export default questionnairesRoutes;
