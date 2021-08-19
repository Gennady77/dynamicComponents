import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  HostListener, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {NotificationService} from "../../service/notification.service";
import {Subscription} from "rxjs";

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
    private componentFactoryResolver: ComponentFactoryResolver
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

      const factory = this.componentFactoryResolver.resolveComponentFactory(value.component);

      const componentRef = this.vcr.createComponent(factory);

      componentRef.instance.data = value.data;
    });

    this.subscription.add(content$);
  }

  @HostListener('click')
  onHostClick() {
    this.service.close();
  }

}
