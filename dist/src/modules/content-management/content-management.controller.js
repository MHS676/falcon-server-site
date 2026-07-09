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
exports.ContentManagementController = void 0;
const common_1 = require("@nestjs/common");
const content_management_service_1 = require("./content-management.service");
const jwt_auth_guard_1 = require("../admin-auth/jwt-auth.guard");
let ContentManagementController = class ContentManagementController {
    contentService;
    constructor(contentService) {
        this.contentService = contentService;
    }
    async updateHomeBanner(req, contentDto) {
        if (req.user.role !== 'admin') {
            throw new common_1.BadRequestException('Not authorized');
        }
        return await this.contentService.updateContent('home-banner', contentDto);
    }
    async updatePhysicalSecurity(req, contentDto) {
        if (req.user.role !== 'admin') {
            throw new common_1.BadRequestException('Not authorized');
        }
        return await this.contentService.updateContent('physical-security', contentDto);
    }
    async updateElectronicSecurity(req, contentDto) {
        if (req.user.role !== 'admin') {
            throw new common_1.BadRequestException('Not authorized');
        }
        return await this.contentService.updateContent('electronic-security', contentDto);
    }
    async updateCentralMonitoring(req, contentDto) {
        if (req.user.role !== 'admin') {
            throw new common_1.BadRequestException('Not authorized');
        }
        return await this.contentService.updateContent('central-monitoring', contentDto);
    }
    async updateSecurityConsulting(req, contentDto) {
        if (req.user.role !== 'admin') {
            throw new common_1.BadRequestException('Not authorized');
        }
        return await this.contentService.updateContent('security-consulting', contentDto);
    }
    async getHomeBanner() {
        return await this.contentService.getContent('home-banner');
    }
    async getPhysicalSecurity() {
        return await this.contentService.getContent('physical-security');
    }
    async getElectronicSecurity() {
        return await this.contentService.getContent('electronic-security');
    }
    async getCentralMonitoring() {
        return await this.contentService.getContent('central-monitoring');
    }
    async getSecurityConsulting() {
        return await this.contentService.getContent('security-consulting');
    }
};
exports.ContentManagementController = ContentManagementController;
__decorate([
    (0, common_1.Post)('home-banner'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "updateHomeBanner", null);
__decorate([
    (0, common_1.Post)('physical-security'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "updatePhysicalSecurity", null);
__decorate([
    (0, common_1.Post)('electronic-security'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "updateElectronicSecurity", null);
__decorate([
    (0, common_1.Post)('central-monitoring'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "updateCentralMonitoring", null);
__decorate([
    (0, common_1.Post)('security-consulting'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "updateSecurityConsulting", null);
__decorate([
    (0, common_1.Get)('home-banner'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "getHomeBanner", null);
__decorate([
    (0, common_1.Get)('physical-security'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "getPhysicalSecurity", null);
__decorate([
    (0, common_1.Get)('electronic-security'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "getElectronicSecurity", null);
__decorate([
    (0, common_1.Get)('central-monitoring'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "getCentralMonitoring", null);
__decorate([
    (0, common_1.Get)('security-consulting'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "getSecurityConsulting", null);
exports.ContentManagementController = ContentManagementController = __decorate([
    (0, common_1.Controller)('api/admin/content'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [content_management_service_1.ContentManagementService])
], ContentManagementController);
//# sourceMappingURL=content-management.controller.js.map