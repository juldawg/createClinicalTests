import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaltestsComponent } from './clinicaltests.component';

describe('ClinicaltestsComponent', () => {
  let component: ClinicaltestsComponent;
  let fixture: ComponentFixture<ClinicaltestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicaltestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicaltestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
