import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegmentMasterComponent } from './segment-master/segment-master.component';
import { AppComponent } from './app.component';
import { MappingComponent } from './mapping/mapping.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavComponent } from './nav/nav.component';
import { GradeComponent } from './grade/grade.component';


const routes: Routes = [
  {path:'SegmentMaster',component:SegmentMasterComponent},
  {path:'',component:UserLoginComponent},
  {path:'UserLogin',component:UserLoginComponent},
  {path:'nav',component:NavComponent},
  {path:'mapping',component:MappingComponent},
  {path:'grade',component:GradeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
