import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VitrineComponent } from './vitrine';
import { CommonModule } from '@angular/common';

describe('VitrineComponent', () => {
  let component: VitrineComponent;
  let fixture: ComponentFixture<VitrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VitrineComponent],
      imports: [CommonModule], // Adicione outros módulos se necessário
    }).compileComponents();

    fixture = TestBed.createComponent(VitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});