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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const user_1 = require("./models/entities/user");
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
function initializeApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield (0, typeorm_1.createConnection)("default"); // Create the database connection
            // Now, you can get the repository inside this function
            const userRepository = (0, typeorm_1.getRepository)(user_1.User);
            // Define routes for users and calls within the /api route
            app.use('/', (0, user_route_1.default)(userRepository)); // Define /api/users route
            // app.use('/api/calls', callsRoutes(callsRepository)); // Define /api/calls route
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        }
        catch (error) {
            console.error('Error starting the application:', error);
        }
    });
}
initializeApp();
