import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../../services/api.service';
import { ApiData } from '../../interfaces/api-data.interface';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: `./grid.component.html`,
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  data: ApiData[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((data) => (this.data = data));
  }
}
