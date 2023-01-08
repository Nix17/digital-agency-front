import { Component } from '@angular/core';
import { MyMessageService } from 'src/app/shared/Services/my-message.service';
import { RefBookService } from 'src/app/shared/Services/ref-book.service';

@Component({
  selector: 'app-edit-ref-book-space',
  templateUrl: './edit-ref-book-space.component.html',
  styleUrls: ['./edit-ref-book-space.component.scss']
})
export class EditRefBookSpaceComponent {

  constructor(
    private srv: RefBookService,
    private srvMsg: MyMessageService
  ) {}

}
