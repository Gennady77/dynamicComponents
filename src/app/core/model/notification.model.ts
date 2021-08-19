import { Type } from "@angular/core";

export type NotificationType = {
  component: Type<any>;
  config: NotificationConfig;
};


export class NotificationConfig<D = any> {
  public data!: D;
}
