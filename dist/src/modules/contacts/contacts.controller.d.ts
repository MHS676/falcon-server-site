import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(createContactDto: CreateContactDto): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
    } | null>;
}
