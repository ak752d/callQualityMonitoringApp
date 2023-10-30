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
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const calls_1 = require("./models/entities/calls");
const user_1 = require("./models/entities/user");
const calls_route_1 = __importDefault(require("./routes/calls.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const root_route_1 = __importDefault(require("./routes/root.route"));
const weightage_Lookup_route_1 = __importDefault(require("./routes/weightage_Lookup.route"));
const weightage_Lookup_1 = require("./models/entities/weightage_Lookup");
const Questionnaires_route_1 = __importDefault(require("./routes/Questionnaires.route"));
const Questionnaires_1 = require("./models/entities/Questionnaires");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
function initializeApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield (0, typeorm_1.createConnection)("default"); // Create the database connection
            const userRepository = (0, typeorm_1.getRepository)(user_1.User);
            const callRepository = (0, typeorm_1.getRepository)(calls_1.Calls);
            const weightageLookupRepository = (0, typeorm_1.getRepository)(weightage_Lookup_1.weightage_Lookup); // Get the repository for Weightage_Lookup
            const questionnairesRepository = (0, typeorm_1.getRepository)(Questionnaires_1.questionnaires);
            app.use("/", root_route_1.default); // Mount the root route at the root URL
            app.use("/users", (0, user_route_1.default)(userRepository)); // User routes
            app.use("/calls", (0, calls_route_1.default)(callRepository)); // Calls routes
            app.use("/weightage_Lookup", (0, weightage_Lookup_route_1.default)(weightageLookupRepository));
            app.use("/questionnaires", (0, Questionnaires_route_1.default)(questionnairesRepository));
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        }
        catch (error) {
            console.error("Error starting the application:", error);
        }
    });
}
initializeApp();
