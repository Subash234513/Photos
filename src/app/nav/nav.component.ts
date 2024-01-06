import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { strict } from 'assert';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 id:number
  constructor(private login:LoginServiceService,) { }
  user=new FormGroup({
    name:new FormControl('',[Validators.required]),
    component_type:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    percentage:new FormControl('',[Validators.required]),
    // id:new FormControl()
  })
  editUser=new FormGroup({
    name:new FormControl('',[Validators.required]),
    component_type:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    percentage:new FormControl('',[Validators.required]),
    id:new FormControl('')
    
  })
  SegmentName=new FormControl('')
  // url="http://139.59.32.22:8188/"
list:any
  ngOnInit(): void {
   this.segment();
  this.component();
  this.type()
  // this.submit()
  // this.SegmentNameFun()
  }
  segmentMaster:boolean=false
  segmentAdd:boolean=false
  SegmentEdit:boolean=false
  add(){
    this.segmentMaster=false
    this.segmentAdd=true
    this.SegmentEdit=false
  }
  segment(){
    this.segmentMaster=true
    this.segmentAdd=false
    this.SegmentEdit=false
    this.login.Valueget().subscribe(data=>{
      sessionStorage.setItem('data',JSON.stringify(data))
     
    })
    const l=JSON.parse(sessionStorage.getItem('data'))
    // console.log(this.list)
    this.list=l['data']
    console.log(this.list)
  }
  cancel(){
    this.segmentMaster=true
    this.segmentAdd=false
    this.SegmentEdit=false
  }
  submit(){
    this.segmentMaster=true
    this.segmentAdd=false
    this.login.Valuepost(this.user.value).subscribe(data=>{
      console.log(data)
    })
  }
  l:any
  update(){
    // this.id=JSON.parse(sessionStorage.getItem('data'))['data'].id
    this.segmentMaster=true
    this.SegmentEdit=false
    this.login.update(this.editUser.value).subscribe(data=>{
    })
   
  }
  edit(index){
    // this.l=i
    // const l=JSON.parse(sessionStorage.getItem('data'))
    // let s=l['data']
    this.login.edit(index.id).subscribe(data=>{
      console.log(data)

    })
       this.editUser.patchValue({
       
        name:index.name,
        component_type:index.component_type.id,
        type:index.type.id,
        percentage:index.percentage,
        id: index.id
    })
    this.segmentMaster=false
    this.SegmentEdit=true
  }
  // edit(index:any,i:any){
  //   this.segmentMaster=false
  //   this.SegmentEdit=true
  //   this.editUser.patchValue({
  //     id:index.id,
  //     name:index.name,
  //     component_type:index.component_type.id,
  //     type:index.type.id,
  //     percentage:index.percentage,
  //   })
  //   console.log(this.list[i].id)
  // }
  delete(index){
    
    this.login.delete(index).subscribe(data=>{
      this.segment();
    })
  }
  componentType:any
  types:any
  type(){
    this.login.type().subscribe(data=>{
      this.types=data['data']
    })
  }
  component(){
    // const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
    // const headers={'Authorization':'Token '+token}
    // this.http.get(this.url+'mstserv/payroll_component?name=',this.user.controls.component_type.value).subscribe(data=>{
    //   this.componentType=data
    // })
    this.login.component().subscribe(data=>{
      this.componentType=data['data']
      console.log(this.componentType)
    })
  }
  // SegmentName:string
  SegmentNameFun(){
    // if(this.list.name){
    //   //  this.SegmentName='&querry='+this.list.name
    //   let page=1
     
    // }
    // if(this.SegmentName){
      this.login.SegmentName(this.SegmentName.value).subscribe(data=>{
        console.log('SegmentName',data)
        this.list=data['data']
        console.log('list',this.list.name)
      })
    // }

   
  }
  clear(){
    this.SegmentName.reset()
    this.segment()
   }
  payType=['Basic','Allowance','BONUS','Deduction','salary','other earning']
  bonusType=['QUARTERLY','HALFYEARLY','YEARLY','MONTHLY','CUSTOM']
}
