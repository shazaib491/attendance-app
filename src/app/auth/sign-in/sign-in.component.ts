import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../auth.service';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  public signInForm!:FormGroup;
  public isFormSubmitted=false;
  constructor(private storage:Storage,public authService: AuthService,private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.initLoginForm();
  }
  

  initLoginForm(){
    this.signInForm=this.formBuilder.group({
      email:[null,Validators.required],
      password:[null,Validators.required]
    })
  }


  get signInFormControl():{ [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }

   //method for submitting signup form
   public onLogin(): void {
    this.isFormSubmitted=true;
    if (this.signInForm.valid) {
     this.authService.login(this.signInForm.value)
     this.signInForm.reset();
    this.isFormSubmitted=false;

    }
  }
}
