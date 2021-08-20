import { ComponentFactoryResolver, Directive, Injector, Input, Type, ViewContainerRef } from '@angular/core';
import { NotificationConfig, NotificationType } from "../../core/model/notification.model";
import { NotificationPopupInjector } from "../../core/component/notification-popup/class/notification-popup-injector";

@Directive({
  selector: '[appHelperContent]'
})
export class HelperContentDirective {
  @Input('appHelperContent') public set component(value: NotificationType | null | undefined) {
    if(value) {
      this.loadComponent(value.component, value.config);
    }
  }

  constructor(
    private vcr: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  private loadComponent(componentType: Type<any>, config: NotificationConfig | undefined) {
    let map: WeakMap<Type<any>, any>;
    let injector: Injector | undefined;

    this.vcr.clear();

    if(config) {
      map = new WeakMap();
      map.set(NotificationConfig, config);
      injector = new NotificationPopupInjector(this.injector, map);
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    this.vcr.createComponent(factory, 0, injector);
  }

}
