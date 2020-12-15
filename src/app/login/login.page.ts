import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component, OnChanges, SimpleChanges,OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  KakaoCordovaSDK } from 'kakao-sdk/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alrtCtrl: AlertController , private _kakaoSDK:KakaoCordovaSDK, private fb: FormBuilder, private router: Router,private kakaoAuth: AuthService) {

   }

   @Input() isLoggenIn: boolean=true;


  get password(){
    return this.loginForm.get('password');
  }
  get email(){
    return this.loginForm.get('email');
  }

  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(5)]]
  });



  



  ngOnInit() {
    // this.isLoggenIn = this.kakaoAuth.isLoggenIn;
}

    login(){
        this.kakaoAuth.login();
    }


// ngOnChanges(changes: SimpleChanges): void {
//   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
//   //Add '${implements OnChanges}' to the class.
//     const loggedInValue = changes['isLoggedIn'];
//     if(loggedInValue.currentValue === true){

//       this.router.navigate(['/home']);
//     }else{
//       this.router.navigate(['/login']);
//     }
// }
}