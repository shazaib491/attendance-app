import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
class signIn {
  constructor(public email: string, public password: string) {}
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  {
  public signInDetail = new signIn('', '');

  constructor(private storage:Storage,public authService: AuthService) { }

   //method for submitting signup form
   public onLogin(formDetail: NgForm): void {
    if (formDetail.valid) {
     this.authService.login(this.signInDetail)
     formDetail.reset();
    }
  }

}
