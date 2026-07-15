import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const isLoggedIn = false;

  if (isLoggedIn) {
    return true;
  }

  alert('Access denied. Please login first.');

  return false;
};