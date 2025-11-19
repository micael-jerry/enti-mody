import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Injectable({
	providedIn: 'root',
})
export class JwtUtil {
	private decodeToken(token: string): JwtPayload {
		return jwtDecode(token);
	}

	isExpiredToken(token: string): boolean {
		const decodedToken: JwtPayload = this.decodeToken(token);
		const currentTimeInSecond = Math.round(Date.now() / 1000);

		return !(!decodedToken.exp || currentTimeInSecond > decodedToken.exp);
	}
}
