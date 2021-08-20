import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { NotificationConfig } from "../../core/model/notification.model";

export type DialogConfig = {
  header: string;
  body: Type<any>;
  footer: string;
};

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('body', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  constructor(
    public config: NotificationConfig<DialogConfig>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.config.data.body);

    const componentRef = factory.create(this.injector);

    this.vcr.insert(componentRef.hostView);
  }

}
