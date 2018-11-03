import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private messageService: MessageService) { }

  success(detail: string) {
    this.messageService.add({severity: 'success', summary: 'Success', detail: detail});
  }

  info(detail: string) {
    this.messageService.add({severity: 'info', summary: 'Info', detail: detail});
  }

  warn(detail: string) {
    this.messageService.add({severity: 'warn', summary: 'Warn', detail: detail});
  }

  error(detail: string) {
    this.messageService.add({severity: 'error', summary: 'Error', detail: detail});
  }
}
