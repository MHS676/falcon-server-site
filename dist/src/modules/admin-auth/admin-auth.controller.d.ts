import { AdminAuthService } from './admin-auth.service';
export declare class AdminAuthController {
    private readonly adminAuthService;
    constructor(adminAuthService: AdminAuthService);
    register(registerDto: {
        name: string;
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user: {
            id: string;
            name: string | null;
            email: string;
            role: string;
        };
    }>;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
        user: {
            id: string;
            name: string | null;
            email: string;
            role: string;
        };
    }>;
    verifyToken(req: any): Promise<{
        valid: boolean;
        user: any;
    }>;
}
