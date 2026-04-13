import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

/**
 * Configuración principal de la aplicación Angular 21.
 * Se usa en main.ts con bootstrapApplication().
 *
 * - provideZoneChangeDetection: agrupa los eventos de detección de cambios
 *   para mejorar el rendimiento (eventCoalescing).
 * - provideRouter: registra las rutas definidas en app.routes.ts.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
