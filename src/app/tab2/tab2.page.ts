import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../services/api.service";
import { AuthService } from "../auth/auth.service";
import { ToastrService } from "../toastr.service";
import { TabService } from "../tabs/tab.service";
import { ZXingScannerComponent } from "@zxing/ngx-scanner";
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  public qrLoader: boolean = false;
  public spinnerLoading: boolean = true;
  public isToasterEnabled: boolean = true;
  public currentUser = {
    username: "",
    email: "",
  };
  @ViewChild("isComponentLoaded") scanner: any;
  constructor(
    private apiService: ApiService,
    public authService: AuthService,
    private toasterService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private tabService: TabService,
    private router:Router
  ) {}

  async ngOnInit() {
    this.activatedRoute.data.subscribe(({ user }) => {
      this.currentUser.username = user.username;
      this.currentUser.email = user.email;
    });
  }

  ionViewWillEnter() {
    this.scanner.enable=true;
    this.tabService.setSignalTabName = "qrScanner";
  }


  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      this.scanner.enable=true;
      this.isToasterEnabled=true;
      event.target.complete();
    }, 2000);
  }


  /**
   * @param attendanceKey string
   */
  public onCodeResult(attendanceKey: any) {
    this.spinnerLoading = true;
    this.isToasterEnabled = false;
    this.apiService.markAttendance({ attendanceKey, present: true }).subscribe(
      (successResponse: any) => {
        if (successResponse.success) {
          this.router.navigate(["/qrCode/tab3"]);
          this.spinnerLoading = false;
        } else {
          this.spinnerLoading = false;
          this.toasterService.toasterError("bottom", successResponse.message);
        }
      },
      (errorResponse) => {
        this.spinnerLoading = false;
        this.toasterService.toasterError("bottom", errorResponse.message);
      }
    );
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      if (this.scanner._ready) {
        this.spinnerLoading = false;
      }
    });
  }

  ngDestroy() {
    this.isToasterEnabled = false;
  }
}
