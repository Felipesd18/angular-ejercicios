import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  private http = inject(HttpClient);

  users = signal<any[]>([]);
  isLoading = signal(false);

  loadUsersFromApi() {
    this.isLoading.set(true);
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(1500), // Simula retraso de red
      )
      .subscribe({
        next: (apiUsers) => {
          const mappedUsers = apiUsers.map((u) => ({
            id: u.id,
            name: u.name,
            role: 'Usuario de API',
            active: true,
          }));

          this.users.set(mappedUsers);
        },
        error: (err) => {
          console.error('Error al cargar usuarios:', err);
        },
        complete: () => {
          this.isLoading.set(false);
        },
      });
  }

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
