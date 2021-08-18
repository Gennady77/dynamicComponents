import {Component, HostListener, OnInit} from '@angular/core';
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {

  constructor(public service: NotificationService) {

  }

  ngOnInit(): void {
  }

  @HostListener('click')
  onHostClick() {
    this.service.content$.next(undefined);
  }

}
