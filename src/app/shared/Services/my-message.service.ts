import { Injectable } from '@angular/core';
import { Confirmation, Message, MessageService, ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MyMessageService {

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  private showMessage(msg: string, isSuccess: boolean): void {
    let objMsg: Message;
    switch(isSuccess){
      case true:
        objMsg = { severity: 'success', summary: 'Успешно!!', detail: msg, life: 3000 };
        break;

      case false:
        objMsg = { severity: 'error', summary: 'Ошибка!!', detail: msg, life: 3000 };
        break;
    }
    this.messageService.add(objMsg);
  }

  public showInfo(msg: string) {
    this.messageService.add({ severity: 'info', summary: 'Интформация', detail: msg, life: 3000 });
  }

  public showSuccess(msg: string) {
    this.showMessage(msg, true);
  }

  public showError(msg: string) {
    this.showMessage(msg, false);
  }

  public showException(error: Error) {
    const err = {
      message: error.message ? error.message : error.toString(),
      stack: error.stack ? error.stack : ''
    };
    this.showError(err.message);
  }

  public openConfirmDialog(header: string, msg: string, acceptFunc: Function) {
    let obj: Confirmation = {
      message: msg,
      icon: 'pi pi-exclamation-triangle',
      header: header,
      accept: acceptFunc,
      key: 'top'
    };
    this.confirmationService.confirm(obj);
  }
}
