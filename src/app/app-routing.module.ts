import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegmentMasterComponent } from './segment-master/segment-master.component';
import { AppComponent } from './app.component';
import { MappingComponent } from './mapping/mapping.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavComponent } from './nav/nav.component';
import { GradeComponent } from './grade/grade.component';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';


const routes: Routes = [
  {path:'SegmentMaster',component:SegmentMasterComponent},
  {path:'d',component:UserLoginComponent},
  {path:'UserLogin',component:UserLoginComponent},
  {path:'nav',component:NavComponent},
  {path:'mapping',component:MappingComponent},
  {path:'',component:GradeComponent},
  {path:'excel',component:ExcelUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
