import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-ejercicios');
  users = signal([
    { id: 1, name: 'Felipe', role: 'Ingeniero Informático', active: true },
    { id: 2, name: 'Camila', role: 'Diseñadora UX/UI', active: false },
    { id: 3, name: 'Roberto', role: 'DevOps Engineer', active: true },
  ]);
}
