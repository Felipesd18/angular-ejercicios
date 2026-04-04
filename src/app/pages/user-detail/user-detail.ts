import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-detail',
  imports: [RouterLink],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  private route = inject(ActivatedRoute);
  private userService = inject(User);

  private userId = Number(this.route.snapshot.paramMap.get('id'));

  user = computed(() => {
    return this.userService.users().find((user) => user.id === this.userId);
  });
}
