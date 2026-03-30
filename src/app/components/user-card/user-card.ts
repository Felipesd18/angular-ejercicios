import { Component, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCardComponent {
  userName = model.required<string>();

  role = input.required<string>();
  isActive = input.required<boolean>();

  likes = signal(0);

  darLike() {
    this.likes.update((valor) => valor + 1);
  }
}
