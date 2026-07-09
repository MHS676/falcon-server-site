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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PillarsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const pillars_service_1 = require("./pillars.service");
const create_pillar_dto_1 = require("./dto/create-pillar.dto");
const update_pillar_dto_1 = require("./dto/update-pillar.dto");
const storage = (0, multer_1.diskStorage)({
    destination: './uploads/pillars',
    filename: (req, file, cb) => {
        const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
        cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
    },
});
let PillarsController = class PillarsController {
    pillarsService;
    constructor(pillarsService) {
        this.pillarsService = pillarsService;
    }
    create(createPillarDto) {
        return this.pillarsService.create(createPillarDto);
    }
    uploadFile(file) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        return {
            success: true,
            message: 'File uploaded successfully',
            filename: file.filename,
            path: `/uploads/pillars/${file.filename}`,
            size: file.size,
        };
    }
    findAll() {
        return this.pillarsService.findAll();
    }
    findOne(id) {
        return this.pillarsService.findOne(id);
    }
    update(id, updatePillarDto) {
        return this.pillarsService.update(id, updatePillarDto);
    }
    remove(id) {
        return this.pillarsService.remove(id);
    }
    reorder(data) {
        return this.pillarsService.reorder(data);
    }
};
exports.PillarsController = PillarsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pillar_dto_1.CreatePillarDto]),
    __metadata("design:returntype", void 0)
], PillarsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage,
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
                cb(new common_1.BadRequestException('Only image files are allowed'), false);
            }
            else {
                cb(null, true);
            }
        },
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PillarsController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PillarsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PillarsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pillar_dto_1.UpdatePillarDto]),
    __metadata("design:returntype", void 0)
], PillarsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PillarsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('reorder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], PillarsController.prototype, "reorder", null);
exports.PillarsController = PillarsController = __decorate([
    (0, common_1.Controller)('api/pillars'),
    __metadata("design:paramtypes", [pillars_service_1.PillarsService])
], PillarsController);
//# sourceMappingURL=pillars.controller.js.map