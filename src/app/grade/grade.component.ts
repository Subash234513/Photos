import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  constructor(private shared:SharedService) { }
  Name=new FormControl('')

  ngOnInit(): void {
  }
  add(){
    this.shared.emp=this.Name.value
  }

}
