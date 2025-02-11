import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiData } from '../../interfaces/api-data.interface';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: `./card.component.html`,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() data!: ApiData;
  isDarkTheme = false;
  showOnlyId = false;

  enableDarkTheme() {
    this.isDarkTheme = true;
  }

  disableDarkTheme() {
    this.isDarkTheme = false;
  }

  // Hecho con dos métodos porque, de usar uno sólo, puede dar lugar a comportamientos inconsistentes si no se registra bien el ratón

  toggleVariant() {
    this.showOnlyId = !this.showOnlyId;
  }
}
