import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

class signUp {
  constructor(
    public username: string,
    public email: string,
    public mobile: string,
    public age: string,
    public password: string,
    public confirmPassword: string,
    public batchId: string
  ) {}
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signupDetail = new signUp('', '', '', '', '', '', '');
  public allBatches$?: Observable<any>;

  constructor(
    public authService: AuthService,
    private apiService: ApiService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.allBatches$ = this.apiService.getAllBatches();
  }

  //method for submitting signup form
  public  async onRegister(formDetail: NgForm) {
    if (formDetail.valid) {
      this.authService.createUser(this.signupDetail);
      formDetail.reset();
      ;
    await this.modalCtrl.dismiss();

    }
  }


  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
