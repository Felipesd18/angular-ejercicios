import { Component, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCardComponent {
  userId = input.required<number>();
  userName = model.required<string>();

  role = input.required<string>();
  isActive = input.required<boolean>();

  likes = signal(0);

  darLike() {
    this.likes.update((valor) => valor + 1);
  }
}
