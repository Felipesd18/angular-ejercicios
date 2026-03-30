import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { UserDirectory } from './pages/user-directory/user-directory';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Inicio - Angular Ejercicios',
  },
  {
    path: 'users',
    component: UserDirectory,
    title: 'Directorio de Usuarios',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
