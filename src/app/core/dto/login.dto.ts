import { User } from '../model/user.model';

export type AuthLoginDto = {
	email: string;
	password: string;
};

export type AuthLoginResponse = {
	token: string;
	user: User;
};
