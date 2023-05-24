import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { ApiService } from "../services/api.service";
import { Storage } from "@ionic/storage-angular";
import { ToastrService } from "../toastr.service";

export interface AuthData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private storage: Storage,
    private toastsService: ToastrService
  ) {}

  public token?: any;
  private authStatusListner = new Subject<boolean>();
  private _loading$ = new BehaviorSubject<boolean>(false);
  private isAuthenticated = false;
  isTimer: any;
  private userId?: any;
  public username?: any;
  public email?: any;

  //method for getting the token
  getToken() {
    return this.token;
  }

  //method for getting auth information
  getIsAuth() {
    return this.isAuthenticated;
  }

  //method for getting the user id
  getUserId() {
    return this.userId;
  }

  //method for getting the auth status listener
  getAuthStatusListener() {
    return this.authStatusListner.asObservable();
  }

  //method for getting the loading state
  get loading$() {
    return this._loading$.asObservable();
  }

  //method for registering the creating the user
  createUser(authData: any) {
    this._loading$.next(true);
    this.apiService.signup(authData).subscribe(
      (successResponse: any) => {
        if (successResponse.success) {
          this._loading$.next(false);
          this.router.navigate(["/auth"]);
          this.toastsService.toasterSuccess(
            "bottom",
            `${successResponse.message}`
          );
        } else {
          this._loading$.next(false);
          this.toastsService.toasterError(
            "bottom",
            `${successResponse.message}`
          );
        }
      },
      (errorResponse: any) => {
        this._loading$.next(false);
        this.toastsService.toasterError(
          "bottom",
          `${errorResponse.status} - ${errorResponse.statusText}`
        );
      }
    );
  }

  //method for login the user
  login(authData: any) {
    this._loading$.next(true);
    this.apiService.login(authData).subscribe(
      (successResponse: any) => {
        if (successResponse.success) {
          this._loading$.next(false);
          this.token = successResponse.access_token;
          if (this.token) {
            this.isAuthenticated = true;
            this.userId = successResponse.userId;
            this.authStatusListner.next(true);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + successResponse.expiresIn * 1000
            );
            this.setAuthTimer(successResponse.expiresIn);
            this.saveAuthData(
              this.token,
              expirationDate,
              this.userId,
              successResponse.username,
              successResponse.email
            );
            this.toastsService.toasterSuccess(
              "bottom",
              `${successResponse.message}`
            );

            this.router.navigate(["/qrCode"]);
          }
        } else {
          this.authStatusListner.next(false);
          this._loading$.next(false);
          this.toastsService.toasterError(
            "bottom",
            `${successResponse.message}`
          );
        }
      },
      (errorResponse: any) => {
        this._loading$.next(false);
        this.authStatusListner.next(false);
        this.toastsService.toasterError(
          "bottom",
          `${errorResponse.status} - ${errorResponse.statusText}`
        );
      }
    );
  }

  //method for checking auto auth user
  async autoAuthUser() {
    const authInformation = await this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation!.expiresDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation?.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.userId = authInformation.userId;
      this.email = authInformation.email;
      this.username = authInformation.username;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListner.next(true);
    }
  }

  public async getUserDetails() {
    return {
      username: await this.storage.get("username"),
      email: await this.storage.get("email"),
    };
  }

  //method for logouting the user
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListner.next(false);
    this.router.navigate(["/"]);
    this.userId = null;
    this.clearAuthData();
    clearTimeout(this.isTimer);
    this.toastsService.toasterSuccess("bottom", `Thanks for login`);
  }

  //method for setting the auth timer
  setAuthTimer(duration: number) {
    this.isTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  //method for setting auth data
  private saveAuthData(
    token: string,
    expirationDate: Date,
    userId: string,
    username: string,
    email: string
  ) {
    this.storage.set("token", token);
    this.storage.set("expiration", expirationDate.toISOString());
    this.storage.set("userId", userId);
    this.storage.set("username", username);
    this.storage.set("email", email);
  }

  //method for clearing the auth data
  private clearAuthData() {
    this.storage.remove("token");
    this.storage.remove("expiration");
    this.storage.remove("userId");
    this.storage.remove("username");
    this.storage.remove("email");
  }

  //method for getting the auth data
  private async getAuthData() {
    const token = await this.storage.get("token");
    const expiresDate = await this.storage.get("expiration");
    const userId = await this.storage.get("userId");
    const email = await this.storage.get("email");
    const username = await this.storage.get("username");
    if (!token && !expiresDate) {
      return;
    }
    return {
      token: token,
      expiresDate: new Date(expiresDate || ""),
      userId: userId,
      email,
      username,
    };
  }
}
