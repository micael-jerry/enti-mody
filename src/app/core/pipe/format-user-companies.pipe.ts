import { Pipe, PipeTransform } from '@angular/core';
import { Company, Setting } from '../model/company.model';

@Pipe({
	name: 'formatUserCompanies',
	pure: false,
})
export class FormatUserCompaniesPipe implements PipeTransform {
	transform(companies?: Company[]): string {
		if (!companies || companies.length === 0) {
			return '_';
		}
		const settings: Setting[] = [];
		for (const company of companies) {
			settings.push(...company.Settings);
		}
		return settings.map((setting) => setting.value).join(', ');
	}
}
