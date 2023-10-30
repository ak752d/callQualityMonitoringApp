"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calls = void 0;
const typeorm_1 = require("typeorm");
let Calls = class Calls extends typeorm_1.BaseEntity {
    constructor() {
        super();
        this.startTime = new Date(); // Initialize with the current date and time
        this.end_Time = new Date(); // Initialize with the current date and time
        this.is_Answered = false; // Initialize with a default value
        this.rating = 0; // Initialize with a default value
    }
};
exports.Calls = Calls;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Calls.prototype, "call_Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Calls.prototype, "question_Id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => "CURRENT_TIMESTAMP" }) // Set default to current timestamp
    ,
    __metadata("design:type", Date)
], Calls.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => "CURRENT_TIMESTAMP" }) // Set default to current timestamp
    ,
    __metadata("design:type", Date)
], Calls.prototype, "end_Time", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }) // Set default to false
    ,
    __metadata("design:type", Boolean)
], Calls.prototype, "is_Answered", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }) // Set default to 0
    ,
    __metadata("design:type", Number)
], Calls.prototype, "rating", void 0);
exports.Calls = Calls = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Calls);
