import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message: string;
  isKakaoLogin: boolean;

  constructor(private _kakaoCordovaSDK: KakaoCordovaSDK,private router: Router, private alerCtrl: AlertController) {

//The access token will verify is the user has loggedin.
//This checks if the token is present in the localstorage
//Note: While implementing the logout, the token must be removed from the local storage too.

    
    



   }

//Login method with the KakaoSDK
login() {
  this.message = '';

  let values = {
    authTypes: [AuthTypes.AuthTypeTalk, AuthTypes.AuthTypeStory, AuthTypes.AuthTypeAccount],
  };
  // values.authTypes = [AuthTypes.AuthTypeTalk];

  this._kakaoCordovaSDK
    .login(values)
    .then(
      res => {
        this.router.navigate(['/home']);
        this.alerCtrl.create({
          
          header: "Login Succesful",
          message: `You have succesfully logged in.${JSON.stringify(res)}`,
          buttons: [
            {
              text: "Continue",
              role: "cancel"
            }
          ]
          
        }).then(el => el.present());
      },
      err => {
        this.alerCtrl.create({
          header: 'Something went wrong',
          message: JSON.stringify(err),
          buttons: [
            {
              text: 'Okay',
              role: 'cancel'
            }
          ]
          
        }).then(el => el.present());
      }
    )
    .catch(err => {
   
      this.alerCtrl.create({
        header: "Something went wrong.",
        message: JSON.stringify(err),
        buttons: [
          {
            text: "Okay",
            role:"cancel"
          }
        ]
      }).then(el => el.present())
    });
}

}
