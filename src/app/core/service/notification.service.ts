import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public content$ = new BehaviorSubject<string | undefined>(undefined);

  constructor() { }
}
