import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctc',
  templateUrl: './ctc.component.html',
  styleUrls: ['./ctc.component.scss']
})
export class CTCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  foods= [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  hide:boolean=false
  Gross(){
    this.hide=true
  }
}
