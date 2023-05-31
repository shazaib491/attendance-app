import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public userIsAuthenticated = false;

  private authListenerSubs?: Subscription;
  constructor(private storage: Storage,private authService: AuthService,
    private platform: Platform
    
    
    ) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    this.initializeApp();
    await this.storage.create();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated:any) => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.authService.autoAuthUser();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(0, () => {
        navigator["app"].exitApp();
      });
    });
  }

  ngOnDestroy() {
    this.authListenerSubs?.unsubscribe();
  }
}
