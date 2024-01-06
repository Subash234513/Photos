import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http:HttpClient) { }
  url="http://139.59.32.22:8188/"
  post(form):Observable<any>{
    return this.http.post(this.url+'usrserv/auth_token',form)
  }
  Valueget():Observable<any>{
    const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
    const headers={'Authorization':'Token '+token}
    return this.http.get(this.url+'mstserv/create_segmentmaster',{'headers':headers})
  }
  Valuepost(form):Observable<any>{
    const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
    const headers={'Authorization':'Token '+token}
    return this.http.post(this.url+'mstserv/create_segmentmaster',form,{'headers':headers})
  }
  component():Observable<any>{
    const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
    const headers={'Authorization':'Token '+token}
    return this.http.get(this.url+'mstserv/create_componenttype',{'headers':headers})
  }
  type():Observable<any>{
    const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
    const headers={'Authorization':'Token '+token}
    return this.http.get(this.url+'mstserv/payrolldeduction_type_dropdown',{'headers':headers})
  }
  delete(form):Observable<any>{
    const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
    const headers={'Authorization':'Token '+token}
    return this.http.delete(this.url+'mstserv/segment_get/'+form,{'headers':headers})
  }
  edit(form){
    const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
    const headers={'Authorization':'Token '+token}
    return this.http.get(this.url+'mstserv/segment_get/'+form,{'headers':headers})
  }
  update(form):Observable<any>{
    const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
    const headers={'Authorization':'Token '+token}
    // const ses=JSON.parse(sessionStorage.getItem('data'))
    // const session=ses['data'].id
    return this.http.post(this.url+`mstserv/create_segmentmaster`,form,{'headers':headers})
  }
  SegmentName(form){
    const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
    const headers={'Authorization':'Token '+token}
    return this.http.get(this.url+'mstserv/create_segmentmaster?name='+form+'&page=1',{'headers':headers})
  }
  
}
