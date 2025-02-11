import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { ApiService } from '../../services/api.service';
import { CardComponent } from '../card/card.component';
import { of } from 'rxjs';
import { ApiData } from '../../interfaces/api-data.interface';
import { CommonModule } from '@angular/common';

// Mock de datos de prueba
const mockData: ApiData[] = [
  { id: '1', title: 'Test Card 1', image: 'image1.jpg' },
  { id: '2', title: 'Test Card 2', image: 'image2.jpg' },
];

// Mock del servicio ApiService
class MockApiService {
  getData = jasmine.createSpy('getData').and.returnValue(of(mockData));
}

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GridComponent, CardComponent, CommonModule],
      providers: [{ provide: ApiService, useClass: MockApiService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getData del ApiService en ngOnInit', () => {
    expect(component.data.length).toBe(mockData.length);
  });

  it('debería mostrar el número correcto de tarjetas', () => {
    const cardElements = fixture.nativeElement.querySelectorAll('app-card');
    expect(cardElements.length).toBe(mockData.length);
  });
});
