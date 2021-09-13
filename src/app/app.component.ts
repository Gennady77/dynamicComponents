import {Component, OnInit} from '@angular/core';
import {NotificationService} from "./core/service/notification.service";
import { DialogConfig, DialogContainerComponent } from "./dialog/dialog-container/dialog-container.component";
import { PersonComponent } from "./database/person/person.component";

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
    this.service.open<DialogConfig>(DialogContainerComponent, {
      data: {
        header: 'header!',
        body: {component: PersonComponent},
        footer: 'footer!'
      }
    });
  }
}
