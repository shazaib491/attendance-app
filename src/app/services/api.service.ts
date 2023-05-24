import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //method for register the user
  public signup(user: any) {
    return this.http.post(environment.apiUrl + '/auth/signUp', user);
  }

  //method for login user
  public login(user: any) {
    return this.http.post(environment.apiUrl + '/auth/signIn', user);
  }

  //method for getting all batches
  public getAllBatches() {
    return this.http.get(environment.apiUrl + '/batch');
  }

  //method for getting attendance key
  public getAttendanceKey() {
    return this.http.get(environment.apiUrl + '/attendanceKey');
  }

  //method for marking the attendance
  public markAttendance(attendance: any) {
    return this.http.post(
      environment.apiUrl + '/attendance/markAttendance',
      attendance
    );
  }
}
