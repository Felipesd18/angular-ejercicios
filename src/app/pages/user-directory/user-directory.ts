import { Component, inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { UserCardComponent } from '../../components/user-card/user-card';
import { User } from '../../services/user';

export function forbiddenWordValidator(forbiddenWord: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const valueStr = control.value.toLowerCase();
    const isForbidden = valueStr.includes(forbiddenWord.toLowerCase());

    return isForbidden ? { forbiddenWord: { word: forbiddenWord } } : null;
  };
}

@Component({
  selector: 'app-user-directory',
  imports: [ReactiveFormsModule, UserCardComponent],
  templateUrl: './user-directory.html',
  styleUrl: './user-directory.css',
})
export class UserDirectory implements OnInit {
  private userService = inject(User);

  users = this.userService.users;
  isLoading = this.userService.isLoading;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl('', [
      Validators.required,
      forbiddenWordValidator('admin'),
      forbiddenWordValidator('hacker'),
      forbiddenWordValidator('root'),
    ]),
  });

  ngOnInit() {
    if (this.users().length === 0) {
      this.userService.loadUsersFromApi();
    }
  }

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
