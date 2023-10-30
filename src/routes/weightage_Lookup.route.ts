import express, { Router, Request, Response } from "express";
import { Repository } from "typeorm";
import { weightage_Lookup } from "../models/entities/weightage_Lookup";

const weightageLookupRoutes = (weightageLookupRepository: Repository<weightage_Lookup>): Router => {
  const router = express.Router();


  router.get("/getAllweightage_Lookup", async (req: Request, res: Response) => {
    try {
      const weightageLookupData = await weightageLookupRepository.find();
      res.json(weightageLookupData);
    } catch (error) {
      console.error("Error fetching Weightage_Lookup data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });



  return router;
};

export default weightageLookupRoutes;








