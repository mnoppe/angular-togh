import { Component } from '@angular/core';
import { MessagesService } from './shared/service/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public messagesService: MessagesService) { }
}
