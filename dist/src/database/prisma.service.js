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
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    logger = new common_1.Logger('PrismaService');
    connected = false;
    constructor() {
        super({
            errorFormat: 'pretty',
        });
    }
    async onModuleInit() {
        try {
            await this.$connect();
            this.connected = true;
            this.logger.log('✅ Database connected successfully');
        }
        catch (error) {
            this.logger.warn(`⚠️ Failed to connect to database: ${error.message}\n` +
                'Backend will start but database operations will fail.\n' +
                'Please configure DATABASE_URL to point to a running PostgreSQL server.');
            this.connected = false;
        }
    }
    async onModuleDestroy() {
        if (this.connected) {
            await this.$disconnect();
        }
    }
    isConnected() {
        return this.connected;
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map