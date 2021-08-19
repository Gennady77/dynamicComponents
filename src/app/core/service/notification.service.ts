import {Injectable, Type} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { NotificationType } from "../model/notification.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public content$ = new BehaviorSubject<NotificationType | undefined>(undefined);

  constructor() { }

  public open(component: Type<any>, data: any) {
    const config = {
      component,
      data
    };

    this.content$.next(config);
  }

  public close() {
    this.content$.next(undefined);
  }
}
