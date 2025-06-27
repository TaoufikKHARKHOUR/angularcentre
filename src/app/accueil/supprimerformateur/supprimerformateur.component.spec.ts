import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerformateurComponent } from './supprimerformateur.component';

describe('SupprimerformateurComponent', () => {
  let component: SupprimerformateurComponent;
  let fixture: ComponentFixture<SupprimerformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerformateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
