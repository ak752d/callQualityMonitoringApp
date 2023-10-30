
import express, { Router } from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the root API endpoint!');
});

export default router;
