import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/services/api.service";
import { AuthService } from "../auth.service";
import { NgForm } from "@angular/forms";
import { ModalController, Platform } from "@ionic/angular";
import { Router } from "@angular/router";

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
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  public signupDetail = new signUp("", "", "", "", "", "", "");
  public allBatches$?: Observable<any>;

  constructor(
    public authService: AuthService,
    private apiService: ApiService,
    public modalCtrl: ModalController,
    private router: Router,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.allBatches$ = this.apiService.getAllBatches();
  }

  ionViewWillEnter() {
    this.router.navigate(["/welcome"]);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(0, () => {
        navigator["app"].exitApp();
      });
    });
  }

  //method for submitting signup form
  public async onRegister(formDetail: NgForm) {
    if (formDetail.valid) {
      this.authService.createUser(this.signupDetail);
      formDetail.reset();
      await this.modalCtrl.dismiss();
    }
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
