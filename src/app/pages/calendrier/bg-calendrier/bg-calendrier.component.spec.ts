import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCalendrierComponent } from './bg-calendrier.component';

describe('BgCalendrierComponent', () => {
  let component: BgCalendrierComponent;
  let fixture: ComponentFixture<BgCalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgCalendrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
