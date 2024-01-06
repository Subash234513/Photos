import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

 

  name=false
  constructor(private login:LoginServiceService ,private router:Router) { }
  output:any
  ngOnInit(): void {
  }
  userlogin=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  signUp(){
    if(this.userlogin.controls.username.value=='EMP007' && this.userlogin.controls.password.value=='1234'){
      this.login.post(this.userlogin.value).subscribe(data=>{
        this.name=false
        sessionStorage.setItem('UserLogin',JSON.stringify(data))
        console.log(data)
      })
      this.router.navigate(['nav'])
    }
    else{
      // console.log('incorrect username')
      if(this.userlogin.controls.username.value!=='EMP007' || this.userlogin.controls.password.value!=='1234'){
        this.output='USER NOT FOUND'
        this.name=true
      }
      // else if(this.userlogin.controls.username.value!=='EMP007'){
      //   this.output='Invalid username'
      //   this.name=true
      // }
      // else if(this.userlogin.controls.password.value!=='1234'){
      //   this.output='Invalid password'
      //   this.name=true
      // }
      
    }
  }
}
