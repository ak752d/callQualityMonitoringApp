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
exports.getAllUsers = void 0;
const typeorm_1 = require("typeorm"); // Import your Entity Repository here
const user_service_1 = require("../services/user.service");
const user_1 = require("../models/entities/user");
const userRepository = (0, typeorm_1.getRepository)(user_1.User); // Replace 'User' with your actual Entity
const userService = new user_service_1.UserService(userRepository); // Pass the userRepository as an argument
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userService.getAllUsers();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}
exports.getAllUsers = getAllUsers;
