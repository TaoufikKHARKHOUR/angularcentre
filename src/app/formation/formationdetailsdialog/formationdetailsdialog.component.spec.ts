import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationdetailsdialogComponent } from './formationdetailsdialog.component';

describe('FormationdetailsdialogComponent', () => {
  let component: FormationdetailsdialogComponent;
  let fixture: ComponentFixture<FormationdetailsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationdetailsdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationdetailsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
