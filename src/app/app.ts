import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-ejercicios');

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
