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
exports.getAllWeightageLookup = void 0;
const typeorm_1 = require("typeorm");
const weightage_lookup_service_1 = require("../services/weightage_lookup.service");
const weightage_lookup_1 = require("../models/entities/weightage_lookup");
const weightageLookupRepository = (0, typeorm_1.getRepository)(weightage_lookup_1.weightage_lookup);
const weightageLookupService = new weightage_lookup_service_1.Weightage_lookupService(weightageLookupRepository);
function getAllWeightageLookup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const weightageLookup = yield weightageLookupService.getAllWeightageLookup();
            res.status(200).json(weightageLookup);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}
exports.getAllWeightageLookup = getAllWeightageLookup;
