import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
	private readonly http: HttpClient = inject(HttpClient);

	getUsers(): Promise<User[]> {
		const users$: Observable<User[]> = this.http.get<User[]>(API_ENDPOINTS.user.list);
		return lastValueFrom(users$);
	}
}
