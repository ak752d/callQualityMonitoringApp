"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const callsRoutes = (callRepository) => {
    const router = express_1.default.Router();
    // Define routes for calls
    router.get('/getAllCalls', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const calls = yield callRepository.find();
            res.json(calls);
        }
        catch (error) {
            console.error('Error fetching calls:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }));
    // Add more routes for calls as needed
    return router;
};
exports.default = callsRoutes;
