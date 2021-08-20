import {
  Component,
  OnInit,
} from '@angular/core';
import { NotificationService } from "../../service/notification.service";

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {

  constructor(
    public service: NotificationService
    ) {
  }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.service.close();
  }

}
