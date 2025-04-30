import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapprenantComponent } from './formapprenant.component';

describe('FormapprenantComponent', () => {
  let component: FormapprenantComponent;
  let fixture: ComponentFixture<FormapprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormapprenantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
