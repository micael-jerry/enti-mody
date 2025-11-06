import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { environment } from '../../../environments/environment';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class UserService {
	private http: HttpClient = inject(HttpClient);

	getUsers(): Promise<User[]> {
		const users$: Observable<User[]> = this.http.get<User[]>(`${environment.apiUrl}/users?type=all`);
		return lastValueFrom(users$);
	}
}
