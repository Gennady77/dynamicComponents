import {
  Component,
  OnInit,
} from '@angular/core';
import { NotificationConfig, NotificationType } from "../../core/model/notification.model";

export type DialogConfig = {
  header: string;
  body: NotificationType;
  footer: string;
};

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent implements OnInit {

  constructor(
    public config: NotificationConfig<DialogConfig>,
  ) { }

  ngOnInit(): void {
  }
}
