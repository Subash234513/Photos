import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {switchMap} from 'rxjs/operators'
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { interval } from 'rxjs';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.autocomplete.valueChanges.pipe(switchMap(value=>))
    const emp=interval(1000)
    
  }
  autocomplete=new FormControl('')
  Dropdown=[{id:1,name:'subash'},{id:2,name:'Rahul'},{id:3,name:'Mahesh'},{id:4,name:'Anand'}]
  ChipDropdown=['Ramesh']
  separatorKeysCodes: number[] = [ENTER, COMMA];
  RemoveChip=[]
  Option(event:MatAutocompleteSelectedEvent){
    const drop=event.option.value.name
    const FoundDropdown=this.Dropdown.filter(name=>name.name==drop)
    const FoundChipdown=this.ChipDropdown.filter(name=>name==drop)
    if(FoundChipdown.length){
      return
    }
    if(FoundDropdown.length){
      this.ChipDropdown.push(drop)
    }

    console.log('Drop',drop)
    
  }
  remove(chip){
    this.RemoveChip.push(chip)
    let index=this.ChipDropdown.indexOf(chip)
    
    this.ChipDropdown.splice(index,1)
   

  }
  public displayW(id){
    // return id?id.name:undefined
  }
}
