import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegmentMasterComponent } from './segment-master/segment-master.component';
import { SegmentAddComponent } from './segment-add/segment-add.component';
import { MappingComponent } from './mapping/mapping.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { GradeComponent } from './grade/grade.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { CTCComponent } from './ctc/ctc.component';
import { TestComponent } from './test/test.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MonthPayrollReportComponent } from './month-payroll-report/month-payroll-report.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FrameComponent } from './frame/frame.component';
import { AnimationComponent } from './animation/animation.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';
import { RegionMasterComponent } from './region-master/region-master.component';
import { ElementComponent } from './element/element.component';
import { PhotosShowerComponent } from './photos-shower/photos-shower.component';
import { DbtScreenComponent } from './dbt-screen/dbt-screen.component';
// import { CharttComponent } from './chartt/chartt.component';
// import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    SegmentMasterComponent,
    SegmentAddComponent,
    MappingComponent,
    UserLoginComponent,
    NavComponent,
    GradeComponent,
    CTCComponent,
    TestComponent,
    MonthPayrollReportComponent,
    FrameComponent,
    AnimationComponent,
    NgClassComponent,
    RegionMasterComponent,
    ExcelUploadComponent,
    ElementComponent,
    PhotosShowerComponent,
    DbtScreenComponent,
    // CharttComponent,
    // HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,MatSliderModule,MatSelectModule,MatAutocompleteModule,MatCheckboxModule,MatChipsModule,MatDatepickerModule,MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
