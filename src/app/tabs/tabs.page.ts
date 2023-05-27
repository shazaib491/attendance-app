import { Component, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { TabService } from "./tab.service";
import { signal, effect } from "@angular/core";
import { Observable } from "rxjs";
@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage implements OnDestroy {
  public tabName?: string;
  constructor(public authService: AuthService, public tabService: TabService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.tabService.getSignalTabName.subscribe((tab) => {
      this.tabName = tab;
    });
  }

  ngOnDestroy() {}
}
