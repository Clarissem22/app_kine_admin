import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgPatientsComponent } from './bg-patients.component';

describe('BgPatientsComponent', () => {
  let component: BgPatientsComponent;
  let fixture: ComponentFixture<BgPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
