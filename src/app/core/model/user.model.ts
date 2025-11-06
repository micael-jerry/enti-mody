export type User = {
	id: number;
	email: string;
	name: string;
	photo: string | null;
	Roles: number[];
	activeCompany: object;
	activeMenu: [];
	defaultRoutes: string[];
	Facility: object | null;
	extra: object | null;
	menus: [];
};
