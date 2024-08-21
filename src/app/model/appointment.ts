import { User } from "./user";

export class Appointment {
    date?: string;
    status?: string;
    id?: string;
    theropyId?: string;
    user: User = {};
}
