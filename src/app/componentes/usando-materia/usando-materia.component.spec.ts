import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsandoMateriaComponent } from './usando-materia.component';

describe('UsandoMateriaComponent', () => {
  let component: UsandoMateriaComponent;
  let fixture: ComponentFixture<UsandoMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsandoMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsandoMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
