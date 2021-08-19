import {Injectable, Type} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public content$ = new BehaviorSubject<Type<any> | undefined>(undefined);

  constructor() { }
}
