import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { SignInComponent } from "../auth/sign-in/sign-in.component";
import { SignUpComponent } from "../auth/sign-up/sign-up.component";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  async login() {
    const modal = await this.modalCtrl.create({
      component: SignInComponent,
      animated: true,
      mode: "ios",
      backdropDismiss: false,
      cssClass: ["login-modal"],
      initialBreakpoint:0.60,
      breakpoints: [0, 0.25, 0.5, 0.75]

    });

    return await modal.present();
  }

  async register() {
    const modal = await this.modalCtrl.create({
      component: SignUpComponent,
      animated: true,
      mode: "ios",
      backdropDismiss: false,
      cssClass: "register-modal",
      initialBreakpoint:1,
      breakpoints: [0, 0.25, 0.5, 0.75]
    });

    return await modal.present();
  }
}
