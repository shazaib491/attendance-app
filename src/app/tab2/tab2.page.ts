import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../services/api.service";
import { AuthService } from "../auth/auth.service";
import { ToastrService } from "../toastr.service";
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
  @ViewChild("isComponentLoaded") isComponentLoaded: any;
  constructor(
    private apiService: ApiService,
    public authService: AuthService,
    private toasterService: ToastrService,
    private activatedRoute: ActivatedRoute

  ) {}

  async ngOnInit() {
    this.activatedRoute.data.subscribe(({ user }) => {
      this.currentUser.username = user.username;
      this.currentUser.email = user.email;
    });
    this.toasterService.toasterAlert("Attendance Response", "success");
  }

  public onCodeResult(attendanceKey: any) {
    this.spinnerLoading = true;
    this.isToasterEnabled = false;
    // '$2b$10$v/f3wFPgusTThF.qxsbgQO.eiyMLAsZYjC6xO524QFz8VfjqLpJLC'
    this.apiService.markAttendance({ attendanceKey, present: true }).subscribe(
      (successResponse: any) => {
        if (successResponse.success) {
          // this.toasterService.toasterSuccess('bottom', successResponse.message);
          this.toasterService.toasterAlert("Attendance Response", successResponse.message);
          this.isToasterEnabled = true;
          this.spinnerLoading = false;
        } else {
          this.isToasterEnabled = true;
          this.spinnerLoading = false;
          this.toasterService.toasterError("bottom", successResponse.message);
        }
      },
      (errorResponse) => {
        this.isToasterEnabled = true;
        this.spinnerLoading = false;
        this.toasterService.toasterError("bottom", errorResponse.message);
      }
    );
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      if (this.isComponentLoaded._ready) {
        this.spinnerLoading = false;
      }
    });
  }

  ngDestroy() {
    console.log("Destroy");
    this.isToasterEnabled = false;
  }
}
