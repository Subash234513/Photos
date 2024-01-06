import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPayrollReportComponent } from './month-payroll-report.component';

describe('MonthPayrollReportComponent', () => {
  let component: MonthPayrollReportComponent;
  let fixture: ComponentFixture<MonthPayrollReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthPayrollReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPayrollReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
