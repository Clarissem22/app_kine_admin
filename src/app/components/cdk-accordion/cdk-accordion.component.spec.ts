import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkAccordionComponent } from './cdk-accordion.component';

describe('CdkAccordionComponent', () => {
  let component: CdkAccordionComponent;
  let fixture: ComponentFixture<CdkAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
