import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiData } from '../interfaces/api-data.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ApiData[]> {
    // For development, return mock data instead of making HTTP request
    const mockData: ApiData[] = [
      {
        id: '1',
        title: 'Duis consequat sunt, nostrud dolor do. Nostrud dolor, do anim mollit.',
        image: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        id: '2',
        title: 'Duis consequat sunt, nostrud dolor do. Nostrud dolor, do anim mollit.',
        image: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        id: '3',
        title: 'Duis consequat sunt, nostrud dolor do. Nostrud dolor, do anim mollit.',
        image: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        id: '4',
        title: 'Duis consequat sunt, nostrud dolor do. Nostrud dolor, do anim mollit.',
        image: 'https://picsum.photos/seed/picsum/200/300',
      }

      // ... more items
    ];
    return of(mockData); // 'of' creates an Observable from the mock data
  }
}
