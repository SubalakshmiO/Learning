import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Exercise1 } from './pages/exercise1/exercise1';
import { Exercise2 } from './pages/exercise2/exercise2';
import { Exercise4 } from './pages/exercise4/exercise4';
import { Exercise5 } from './pages/exercise5/exercise5';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: Dashboard
  },

  {
    path: 'exercise1',
    component: Exercise1
  },

  {
    path: 'exercise2',
    component: Exercise2
  },

  {
    path: 'exercise4',
    component: Exercise4
  },

  {
    path: 'exercise5',
    component: Exercise5
  },

  // Lazy Route 1
  {
    path: 'exercise10',
    loadComponent: () =>
      import('./pages/exercise10/exercise10')
        .then(m => m.Exercise10)
  },

  // Lazy Route 2 + Parameterized Route
  {
    path: 'lead/:id',
    loadComponent: () =>
      import('./pages/lead-view/lead-view')
        .then(m => m.LeadView)
  },
  {
    path: 'pipeline',
    loadComponent: () =>
      import('./components/pipeline/pipeline')
       .then(m => m.Pipeline),
    canActivate: [authGuard]
  },

  // Wildcard Route
  {
    path: '**',
    redirectTo: ''
  }

];