export type Role = {
	id: number;
	name: string;
};

export type User = {
	id: number;
	email: string;
	name: string;
	photo: string | null;
	Roles: Role[];
	activeCompany: object;
	activeMenu: [];
	defaultRoutes: string[];
	Facility: object | null;
	extra: object | null;
	menus: [];
};
