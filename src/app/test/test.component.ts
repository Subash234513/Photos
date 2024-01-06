import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }
  list=[]
  i:number

  ngOnInit(): void {
    console.log(this.list)
  }
  TestGroup=new FormGroup({
    Name:new FormControl('',[Validators.required]),
    Age:new FormControl('',[Validators.required]),
    Place:new FormControl('',[Validators.required]),
    Work:new FormControl('',[Validators.required])

  })
  Submit(){
    console.log("Submit",this.TestGroup.value)
    this.list.push(this.TestGroup.value)
    this.TestGroup.reset()
  }
  update(){
    this.list[this.i]=this.TestGroup.value
    this.TestGroup.reset()
  }
  Edit(i,l){
    this.i=l
    console.log('i',i)
    this.TestGroup.patchValue({
      Name:i.Name,
      Age:i.Age,
      Place:i.Place,
      Work:i.Work
    })
  }
  Delete(l){
    this.list.splice(l)
    console.log(l)
  }

}
