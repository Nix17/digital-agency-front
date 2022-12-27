import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../../shared/Models/Classes/DTOs/user.dto';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  user: UserDTO = new UserDTO();

  ngOnInit(): void {
    this.user = {
      lastName: 'Иванов',
      firstName: 'Иван',
      middleName: 'Иванович',
      email: 'user67@mail.ru',
      password: '**************',
      role: 'Пользователь',
      phone: '+7(900)766-88-77',
      id: '',
      created: new Date(),
      lastModified: new Date(),
      createdBy: '',
      lastModifiedBy: ''
    };
  }
}
