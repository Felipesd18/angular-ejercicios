import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserCardComponent } from '../../components/user-card/user-card';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-directory',
  imports: [ReactiveFormsModule, UserCardComponent],
  templateUrl: './user-directory.html',
  styleUrl: './user-directory.css',
})
export class UserDirectory {
  private userService = inject(User);

  users = this.userService.users;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl('', [Validators.required]),
  });

  saveUser() {
    if (this.userForm.valid) {
      const newName = this.userForm.value.name ?? '';
      const newRole = this.userForm.value.role ?? '';

      this.userService.addUser(newName, newRole);

      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
