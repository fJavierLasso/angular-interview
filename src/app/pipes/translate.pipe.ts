import { Pipe, PipeTransform } from '@angular/core';
import esTranslations from '../i18n/es.json';

@Pipe({
  name: 'translate',
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  private translations: Record<string, string> = esTranslations;

  transform(value: string, params?: Record<string, any>): string {
    let translated = this.translations[value] || value;
    if (params) {
      Object.keys(params).forEach((key) => {
        translated = translated.replace(`{{ ${key} }}`, params[key]);
      });
    }
    return translated;
  }
}
