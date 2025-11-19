import { Company } from './company.model';

export type Role = {
	id: number;
	name: string;
};

export type User = {
	id: number;
	code: string;
	photo: string | null;
	name: string;
	email: string;
	last_logged_in_at: Date;
	enabled: boolean;
	created_at: Date;
	Companies: Company[];
	Roles: Role[];
};
