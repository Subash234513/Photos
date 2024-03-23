import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  constructor(private shared:SharedService,private router:Router) { }
  Name=new FormControl('')

  ngOnInit(): void {
  }
  add(){
    this.shared.emp.next(this.Name.value)
    this.router.navigate(['/excel'])
    // this.dkkd()
  }
  dkkd(){
   alert(this.shared.emp.value)
  }

}
