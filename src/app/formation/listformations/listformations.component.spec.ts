import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformationsComponent } from './listformations.component';

describe('ListformationsComponent', () => {
  let component: ListformationsComponent;
  let fixture: ComponentFixture<ListformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListformationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
