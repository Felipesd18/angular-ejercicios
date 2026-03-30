import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-ejercicios');

  private userService = inject(User);

  users = this.userService.users;
}
