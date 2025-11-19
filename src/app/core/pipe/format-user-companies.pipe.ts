import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../model/company.model';

@Pipe({
	name: 'formatUserCompanies',
	pure: false,
})
export class FormatUserCompaniesPipe implements PipeTransform {
	transform(companies?: Company[]): string {
		if (!companies || companies.length === 0) {
			return '_';
		}
		return companies
			.flatMap((company) => company.Settings)
			.map((setting) => setting.value)
			.join(', ');
	}
}
