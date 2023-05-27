import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TabService {
  public _tabName$ = new BehaviorSubject("");

  constructor() {}

  get getSignalTabName() {
    return this._tabName$.asObservable();
  }

  set setSignalTabName(tabName: string) {
    this._tabName$.next(tabName);
  }
}
