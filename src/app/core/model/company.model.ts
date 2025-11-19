export type Setting = {
	id: number;
	company_id: number;
	key: string;
	value: string;
};

export type Company = {
	id: number;
	Settings: Setting[];
};
