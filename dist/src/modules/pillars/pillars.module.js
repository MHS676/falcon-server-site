"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PillarsModule = void 0;
const common_1 = require("@nestjs/common");
const pillars_service_1 = require("./pillars.service");
const pillars_controller_1 = require("./pillars.controller");
const database_module_1 = require("../../database/database.module");
let PillarsModule = class PillarsModule {
};
exports.PillarsModule = PillarsModule;
exports.PillarsModule = PillarsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [pillars_controller_1.PillarsController],
        providers: [pillars_service_1.PillarsService],
        exports: [pillars_service_1.PillarsService],
    })
], PillarsModule);
//# sourceMappingURL=pillars.module.js.map