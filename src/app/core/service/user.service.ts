import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { lastValueFrom, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../constants/api-endpoints';

@Injectable()
export class UserService {
	private http: HttpClient = inject(HttpClient);

	getUsers(): Promise<User[]> {
		const users$: Observable<User[]> = this.http.get<User[]>(API_ENDPOINTS.user.list);
		return lastValueFrom(users$);
	}
}
