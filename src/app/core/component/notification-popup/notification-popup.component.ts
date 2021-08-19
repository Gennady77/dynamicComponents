import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector, OnDestroy,
  OnInit, Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { NotificationService } from "../../service/notification.service";
import { Subscription } from "rxjs";
import { NotificationPopupInjector } from "./class/notification-popup-injector";
import { NotificationConfig } from "../../model/notification.model";

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('content', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  private subscription = new Subscription();

  constructor(
    public service: NotificationService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
    ) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const content$ = this.service.content$.subscribe(value => {
      this.vcr.clear();

      if(!value) {
        return;
      }

      const map = new WeakMap<Type<any>, any>();

      map.set(NotificationConfig, value.config);

      const factory = this.componentFactoryResolver.resolveComponentFactory(value.component);

      this.vcr.createComponent(factory, 0, new NotificationPopupInjector(this.injector, map));
    });

    this.subscription.add(content$);
  }

  onCloseClick() {
    this.service.close();
  }

}
