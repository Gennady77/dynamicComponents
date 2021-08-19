import {Injectable, Type} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { NotificationType } from "../model/notification.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public content$ = new BehaviorSubject<NotificationType | undefined>(undefined);

  constructor() { }

  public open(component: Type<any>, config: any) {
    const val = {
      component,
      config
    };

    this.content$.next(val);
  }

  public close() {
    this.content$.next(undefined);
  }
}
