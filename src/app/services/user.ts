import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  users = signal([
    { id: 1, name: 'Felipe', role: 'Ingeniero Informático', active: true },
    { id: 2, name: 'Camila', role: 'Diseñadora UX/UI', active: false },
    { id: 3, name: 'Roberto', role: 'DevOps Engineer', active: true },
  ]);

  constructor() {}

  addUser(name: string, role: string) {
    const newUser = {
      id: Date.now(),
      name,
      role,
      active: true,
    };
    this.users.update((currentUsers) => [...currentUsers, newUser]);
  }
}
