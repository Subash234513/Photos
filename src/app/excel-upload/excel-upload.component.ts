import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx';
import { SharedService } from '../shared.service';
type AA=any[][];
@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.scss']
})

export class ExcelUploadComponent implements OnInit {
  data:any;
  tableData: any;
  tableTitle: string[];
  tableRecords: any;

  constructor(private shared:SharedService) { }
  @ViewChild('labelImport')  labelImport: ElementRef;
  name:any
  ngOnInit(): void {
    this.name=this.shared.get()
  }
  images:any
  uploadForms:FormGroup;
//   fileChange(file, files:FileList) {
//     const target: DataTransfer = <DataTransfer>(<unknown>file.target);
//     const filess:FileList=file.target.files
//     this.labelImport.nativeElement.innerText = Array.from(filess)
//     .map(f => f.name)
//     .join(', ');
//     this.images = file.target.files;
  

//     const reader: FileReader = new FileReader();
//     reader.readAsBinaryString(this.images[0]);
//     reader.onload = (e: any) => {
//       /* read workbook */
//       const bstr: string = e.target.result;
//       const wb = XLSX.read(bstr, { type: 'binary' });
//       // const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

//       /* grab first sheet */
//       const wsname: string = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       // const ws: XLSX.WorkSheet = wb.Sheets[wsname];

//       /* save data */
//       this.data =(XLSX.utils.sheet_to_json(ws, { header: 1 }));
//       console.log(this.data);
//     console.log('Images',this.images)
//     this.tableData = this.data;
//       this.tableTitle = Object.keys(this.tableData[0]);
//       this.tableRecords = this.tableData.slice(
//         this.pageStartCount,
//         this.pageEndCount
//       );
      
//   }

// }
fileChange(file, files:FileList) {
  const read=new FileReader()
  read.readAsBinaryString(file.target.files[0])
  read.onload=(e)=>{
    const blob=e.target.result
    const BlobRead=XLSX.read(blob,{type:'binary'})
    const SheetNames=BlobRead.SheetNames[0]
    const Sheets=BlobRead.Sheets[SheetNames]
    this.data=XLSX.utils.sheet_to_json(Sheets,{header:1})

  }
  this.labelImport.nativeElement.innerText=Array.from(files).map(f=>f.name)
}
  pageEndCount(pageStartCount: (pageStartCount: any, pageEndCount: any) => any, pageEndCount: any): any {
    throw new Error('Method not implemented.');
  }
  pageStartCount(pageStartCount: any, pageEndCount: any): any {
    throw new Error('Method not implemented.');
  }
}
