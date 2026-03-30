import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from '../../components/user-card/user-card';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-directory',
  imports: [FormsModule, UserCardComponent],
  templateUrl: './user-directory.html',
  styleUrl: './user-directory.css',
})
export class UserDirectory {
  private userService = inject(User);

  users = this.userService.users;

  newUserName = signal('');
  newUserRole = signal('');

  saveUser() {
    if (this.newUserName().trim() && this.newUserRole().trim()) {
      this.userService.addUser(this.newUserName(), this.newUserRole());

      this.newUserName.set('');
      this.newUserRole.set('');
    }
  }
}
