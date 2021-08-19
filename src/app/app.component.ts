import {Component, OnInit} from '@angular/core';
import {NotificationService} from "./core/service/notification.service";
import {HelloComponent} from "./core/component/hello/hello.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public service: NotificationService) {
  }

  public ngOnInit() {

  }

  public onAddClick() {
    this.service.content$.next(HelloComponent);
  }
}
