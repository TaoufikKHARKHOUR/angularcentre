import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerapprenantComponent } from './supprimerapprenant.component';

describe('SupprimerapprenantComponent', () => {
  let component: SupprimerapprenantComponent;
  let fixture: ComponentFixture<SupprimerapprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerapprenantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
