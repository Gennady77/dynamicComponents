import { Injector, ProviderToken } from "@angular/core";

export class NotificationPopupInjector implements Injector {
  constructor(private parentInjector: Injector, private additionalTokens: WeakMap<ProviderToken<any>, any>) {}

  public get(token: ProviderToken<any>, notFoundValue: any) {
    const value = this.additionalTokens.get(token);

    if(value) {
      return value;
    }

    return this.parentInjector.get(token, notFoundValue);
  }
}
