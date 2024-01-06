import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  public emp=new BehaviorSubject('')
  get(){
    return this.emp
  }
}
