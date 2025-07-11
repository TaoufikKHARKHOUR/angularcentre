import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AuthentificationComponent } from './authentification.component';

describe('ServicesComponent', () => {
  let component: AuthentificationComponent;
  let fixture: ComponentFixture<AuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthentificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
