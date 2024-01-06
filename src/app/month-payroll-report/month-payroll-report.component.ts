import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-month-payroll-report',
  templateUrl: './month-payroll-report.component.html',
  styleUrls: ['./month-payroll-report.component.scss']
})
export class MonthPayrollReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  startDate = new Date(1990, 0, 1);
  DateFormgroup=new FormGroup({
    DatePicker:new FormControl('')
  })
  data=[
    {name:'subash',age:20,Place:'London',Pincode:612662},
    {name:'ramesh',age:22,Place:'America',Pincode:612663},
    {name:'aravinth',age:20,Place:'India',Pincode:612632},
    {name:'ravi',age:25,Place:'antartica',Pincode:612662},
  ]

}
