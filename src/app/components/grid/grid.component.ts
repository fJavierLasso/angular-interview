import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../../services/api.service';
import { ApiData } from '../../interfaces/api-data.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, CardComponent, TranslatePipe],
  templateUrl: `./grid.component.html`,
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  data: ApiData[] = [];
  errorMessage = '';
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData()
      .pipe(
        catchError((error) => {
          this.errorMessage = 'Error al cargar los datos. Inténtalo de nuevo.';
          this.isLoading = false;
          return of([]); 
        })
      )
      .subscribe((data) => {
        this.data = data;
        this.isLoading = false;
      });
  }
}
