import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

/**
 * Definición de rutas de la aplicación.
 *
 * - Ruta raíz '': carga la página de inicio (HomePage).
 * - Ruta comodín '**': redirige cualquier URL desconocida a la raíz.
 *
 * Si en el futuro se añaden más páginas (ej: /contacto, /blog),
 * se declaran aquí como nuevas entradas en el array.
 */
export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    // Redirige rutas no encontradas a la página principal
    path: '**',
    redirectTo: '',
  },
];
