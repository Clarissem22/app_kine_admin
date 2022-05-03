import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgHomeComponent } from './bg-home.component';

describe('BgHomeComponent', () => {
  let component: BgHomeComponent;
  let fixture: ComponentFixture<BgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
