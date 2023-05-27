import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { ApiService } from "../services/api.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { TabService } from "../tabs/tab.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  public attendance_key: string = "";
  public username?: string;
  public email?: string;

  public currentUser = {
    username: "",
    email: "",
  };

  public loading: boolean = false;
  constructor(
    public authService: AuthService,
    private apiService: ApiService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private tabService: TabService
  ) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ user }) => {
      this.currentUser.username = user.username;
      this.currentUser.email = user.email;
    });
    this.getAttendanceKey();
  }


  ionViewWillEnter(){
    this.tabService.setSignalTabName = "qrCode";
   }

  //method for getting the attendance key
  public getAttendanceKey() {
    this.loading = true;
    this.apiService.getAttendanceKey().subscribe(
      (successResponse: any) => {
        if (successResponse.success) {
          this.loading = false;
          this.attendance_key = successResponse.loginKey;
          this.toastr.success(successResponse.message, "Success");
        } else {
          this.loading = false;
          this.toastr.error(successResponse.message, "Error!");
        }
      },
      (errorResponse: any) => {
        this.loading = false;
        this.toastr.error(errorResponse.message, "Error!");
      }
    );
  }
}
