import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { ApiData } from '../../interfaces/api-data.interface';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.data = { id: '1', title: 'Test Card', image: 'test.jpg' } as ApiData;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el ID si no hay título ni imagen', () => {
    component.data = { id: '1' } as ApiData;
    fixture.detectChanges();

    const idElement = fixture.debugElement.query(By.css('.id'));
    expect(idElement.nativeElement.textContent).toContain('Id: 1');
  });

  it('debería renderizar la imagen y el título si existen', () => {
    const imgElement = fixture.debugElement.query(By.css('img'));
    const titleElement = fixture.debugElement.query(By.css('.title'));

    expect(imgElement.nativeElement.src).toContain('test.jpg');
    expect(titleElement.nativeElement.textContent).toContain('Test Card');
  });

  it('debería alternar a modo oscuro al hacer hover', () => {
    const cardElement = fixture.debugElement.query(By.css('.card'));

    cardElement.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(component.isDarkTheme).toBeTrue();
    expect(cardElement.nativeElement.classList).toContain('dark-theme');

    cardElement.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(component.isDarkTheme).toBeFalse();
    expect(cardElement.nativeElement.classList).not.toContain('dark-theme');
  });

  it('debería alternar entre mostrar solo el ID o toda la información al hacer click', () => {
    const cardElement = fixture.debugElement.query(By.css('.card'));

    cardElement.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.showOnlyId).toBeTrue();
    expect(fixture.debugElement.query(By.css('.title'))).toBeNull();
    expect(fixture.debugElement.query(By.css('img'))).toBeNull();

    cardElement.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.showOnlyId).toBeFalse();
    expect(fixture.debugElement.query(By.css('.title'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('img'))).toBeTruthy();
  });
});
