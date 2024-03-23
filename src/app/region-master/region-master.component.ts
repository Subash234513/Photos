import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-region-master',
  templateUrl: './region-master.component.html',
  styleUrls: ['./region-master.component.scss']
})
export class RegionMasterComponent implements OnInit {

  @ViewChild('labelImport')  labelImport: ElementRef;
  isFileUpload: boolean=false;
  images: File;
  Action='payrollmaster_reportcolumns_upload';
uploadForms: FormGroup;

  constructor( ) { }
  Searchform=true
  Createform=false
  Editform=false
  Summarytable=true
  SummaryData:any
  DropdownData:any
  pagination={
    has_previous:false,
    has_next:false,
    index:1

  }
  ngOnInit(): void {
    this.Summary(this.pagination.index)
    this.dropdown()
  }

  NameSearch=new FormControl('')
  CreateForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required])
  })
  EditForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    id:new FormControl('')
  })
  Add(){
    this.Searchform=false
  this.Createform=true
  // this.Editform=false
  this.Summarytable=false
  }
  edit(i){
    this.Searchform=false
    // this.Createform=true
    this.Editform=true
    this.Summarytable=false
    // let id=this.EditForm.get('id').value
    // this.service.reportEditSummary(i).subscribe(data=>{
    //   this.EditForm.patchValue({
    //     name:data.name,
    //     type:data.type.id,
    //     id:data.id
    //   })
    // })
    this.Search()
  }
  cancel(){
    this.Searchform=true
    this.Createform=false
    this.Editform=false
    this.Summarytable=true
    this.CreateForm.reset();
    this.EditForm.reset();
  }
  submit(){
    if(this.CreateForm.value.name=='' || this.CreateForm.value.name==null){
      // this.notification.showError('Please Enter Name')
    }
    else if(this.CreateForm.value.type=='' || this.CreateForm.value.type==null){
      // this.notification.showError('Please Select Type')
    }
    else{
      // this.service.reportSubmit(this.CreateForm.value).subscribe(data=>{
      //   if(data.status=='success'){
      //     this.notification.showSuccess('Successfully Created')
      //     this.Searchform=true
      //     this.Createform=false
      //     this.Editform=false
      //     this.Summarytable=true
      //     this.Search()
      //     this.CreateForm.reset();
          
      //   }
      //   else if(data.name_message){
      //     this.notification.showError(data.name_message)
      //   }
      // })
    }
  
 
  }
  prevpage(){
    if(this.pagination.has_previous){
      this.pagination.index=this.pagination.index-1
    }
    this.Summary(this.pagination.index)

  }
  nextpage(){
    if(this.pagination.has_next){
      this.pagination.index=this.pagination.index+1
    }
    this.Summary(this.pagination.index)
  }
  update(){
    if(this.EditForm.value.name=='' || this.EditForm.value.name==null){
      // this.notification.showError('Please Enter Name')
    }
    else if(this.EditForm.value.type=='' || this.EditForm.value.type==null){
      // this.notification.showError('Please Select Type')
    }
    else{
      // this.service.reportSubmit(this.EditForm.value).subscribe(data=>{
      //   if(data.status=='success'){
      //     this.notification.showSuccess('Successfully Updated')
      //     this.Searchform=true
      //     this.Createform=false
      //     this.Editform=false
      //     this.Summarytable=true
      //     this.Search()
      //     this.EditForm.reset();
      //   }
      //   else if(data.name_message){
      //     this.notification.showError(data.name_message)
      //   }
      // })
    }
   
    
  }
  Search(){
    // this.service.reportSummary(this.NameSearch.value,this.pagination.index).subscribe(data=>{
    //   this.SummaryData=data['data']
    // })
  }
  Summary(page){
    // this.service.reportSummary(this.NameSearch.value,page).subscribe(data=>{
    //   this.SummaryData=data['data']
    // })
  }
  delete(i){
    // this.service.reportDeleteSummary(i).subscribe(data=>{
    //   if(data.status=='success'){
    //     this.notification.showSuccess('Successfully Deleted')
    //     this.Search()
    //   }
    // })
   
    
  }
  clear(){
    this.NameSearch.reset();
    this.Search()
  }
  dropdown(){
    // this.service.reportDropdown().subscribe(data=>{
    //   this.DropdownData=data['data']
    // })
  }  
  fileChange(file, files:FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
    .map(f => f.name)
    .join(', ');
    this.images = <File>file.target.files[0];
  }
  uploadfile()
  {
    this.isFileUpload = true;
    this.Searchform=false
    this.Createform=false
    this.Editform=false
    this.Summarytable=false

  }
  uploadDocuments(){
    // this.service.MasterUpload(this.Action,this.images).subscribe(data=>{
    //   this.notification.showSuccess(data.message)
    // })
  }
  downloadTemplate()
  {
    const download='payrollmaster_reportcolumns_upload'
    // this.service.MasterUploadDownload(download,1).subscribe(data=>{
    //   let binaryData = [];
    //   binaryData.push(data)
    //   let downloadUrl = window.URL.createObjectURL(new Blob(binaryData));
    //   let link = document.createElement('a');
    //   link.href = downloadUrl;
    //   link.download = "payrollmaster_reportcolumns_upload" + ".xlsx";
    //   link.click();
    // })
  }
  cancelupload(){
    this.Searchform=true
    this.Createform=false
    this.Editform=false
    this.Summarytable=true
    this.isFileUpload=false
  }
}
