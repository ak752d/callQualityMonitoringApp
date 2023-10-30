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
exports.getAllQuestionnaires = void 0;
const typeorm_1 = require("typeorm");
const QuestionnairesService_1 = require("../services/QuestionnairesService");
const Questionnaires_1 = require("../models/entities/Questionnaires");
const questionnairesRepository = (0, typeorm_1.getRepository)(Questionnaires_1.questionnaires);
const questionnairesService = new QuestionnairesService_1.QuestionnairesService(questionnairesRepository);
function getAllQuestionnaires(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const questionnaires = yield questionnairesService.getAllQuestionnaires();
            res.status(200).json(questionnaires);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}
exports.getAllQuestionnaires = getAllQuestionnaires;
