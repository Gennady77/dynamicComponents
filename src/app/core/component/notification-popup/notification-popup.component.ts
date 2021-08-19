import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit, AfterViewInit {
  @ViewChild('content', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  constructor(
    public service: NotificationService,
    private componentFactoryResolver: ComponentFactoryResolver
    ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.service.content$.subscribe(value => {
      this.vcr.clear();

      if(!value) {
        return;
      }

      const factory = this.componentFactoryResolver.resolveComponentFactory(value);

      this.vcr.createComponent(factory);
    })
  }

  @HostListener('click')
  onHostClick() {
    this.service.content$.next(undefined);
  }

}
