import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public userIsAuthenticated = false;

  private authListenerSubs?: Subscription;
  constructor(private storage: Storage,private authService: AuthService) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated:any) => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.authService.autoAuthUser();
  }


  ngOnDestroy() {
    this.authListenerSubs?.unsubscribe();
  }
}
