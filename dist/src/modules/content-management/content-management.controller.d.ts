import { ContentManagementService } from './content-management.service';
export declare class ContentManagementController {
    private readonly contentService;
    constructor(contentService: ContentManagementService);
    updateHomeBanner(req: any, contentDto: any): Promise<{
        success: boolean;
        message: string;
        page: string;
        data: any;
    }>;
    updatePhysicalSecurity(req: any, contentDto: any): Promise<{
        success: boolean;
        message: string;
        page: string;
        data: any;
    }>;
    updateElectronicSecurity(req: any, contentDto: any): Promise<{
        success: boolean;
        message: string;
        page: string;
        data: any;
    }>;
    updateCentralMonitoring(req: any, contentDto: any): Promise<{
        success: boolean;
        message: string;
        page: string;
        data: any;
    }>;
    updateSecurityConsulting(req: any, contentDto: any): Promise<{
        success: boolean;
        message: string;
        page: string;
        data: any;
    }>;
    getHomeBanner(): Promise<{
        page: string;
        title: string;
        content: {};
    }>;
    getPhysicalSecurity(): Promise<{
        page: string;
        title: string;
        content: {};
    }>;
    getElectronicSecurity(): Promise<{
        page: string;
        title: string;
        content: {};
    }>;
    getCentralMonitoring(): Promise<{
        page: string;
        title: string;
        content: {};
    }>;
    getSecurityConsulting(): Promise<{
        page: string;
        title: string;
        content: {};
    }>;
}
