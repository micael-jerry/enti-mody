import { User } from './user.model';

export type AuthLoginModel = {
	email: string;
	password: string;
};

export type AuthLoginResponse = {
	token: string;
	user: User;
};
