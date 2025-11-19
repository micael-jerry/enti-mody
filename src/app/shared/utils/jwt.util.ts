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
		const currentTime = Date.now();

		return !(!decodedToken.exp || currentTime > decodedToken.exp);
	}
}
