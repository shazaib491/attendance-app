import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  //method for calling toastr
  async toasterSuccess(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: position,
      color: 'success',
    });
    await toast.present();
  }

  async toasterError(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: position,
      color: 'danger',
    });
    await toast.present();
  }

  async toasterWarning(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: position,
      color: 'warning',
    });
    await toast.present();
  }

  async toasterAlert(subHeaderMessage: string, message: string) {
    const alert = await this.alertController.create({
      header: subHeaderMessage,
      // subHeader: subHeaderMessage,
      message: `${message}!`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
