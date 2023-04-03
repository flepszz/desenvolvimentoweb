import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIMCComponent } from './pagina-imc.component';

describe('PaginaIMCComponent', () => {
  let component: PaginaIMCComponent;
  let fixture: ComponentFixture<PaginaIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaIMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
