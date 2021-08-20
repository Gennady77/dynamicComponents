import {Injectable, Type} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { NotificationConfig, NotificationType } from "../model/notification.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public content$ = new BehaviorSubject<NotificationType | undefined>(undefined);

  constructor() { }

  public open<T>(component: Type<any>, config: NotificationConfig<T>) {
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
