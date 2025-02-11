import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiData } from '../../interfaces/api-data.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./card.component.html`,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() data!: ApiData;
  isDarkTheme = false;
  showOnlyId = false;

  enableDarkTheme() {
    this.isDarkTheme = true; // Forzar modo oscuro al entrar
  }

  disableDarkTheme() {
    this.isDarkTheme = false; // Forzar modo claro al salir
  }

  // Hecho con dos métodos porque, de usar uno sólo, puede dar lugar a comportamientos inconsistentes si no se registra bien el ratón

  toggleVariant() {
    this.showOnlyId = !this.showOnlyId;
  }
}
