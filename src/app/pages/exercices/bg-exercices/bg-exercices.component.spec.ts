import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgExercicesComponent } from './bg-exercices.component';

describe('BgExercicesComponent', () => {
  let component: BgExercicesComponent;
  let fixture: ComponentFixture<BgExercicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgExercicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgExercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
