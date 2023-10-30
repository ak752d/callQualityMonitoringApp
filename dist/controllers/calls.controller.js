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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCalls = void 0;
const typeorm_1 = require("typeorm");
const calls_service_1 = require("../services/calls.service"); // Import your Call Service
const calls_1 = require("../models/entities/calls"); // Import your Call Entity
const callsRepository = (0, typeorm_1.getRepository)(calls_1.calls); // Replace 'Call' with your actual Entity
const callsService = new calls_service_1.CallService(callsRepository); // Pass the callRepository as an argument
function getAllCalls(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const calls = yield callsService.getAllCalls();
            res.status(200).json(calls);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}
exports.getAllCalls = getAllCalls;
// You can create additional controller functions for handling calls as needed, such as creating new calls, updating calls, etc.
