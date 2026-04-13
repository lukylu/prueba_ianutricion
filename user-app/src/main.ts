/**
 * Punto de entrada de la aplicación Angular 21.
 *
 * bootstrapApplication() arranca la app en modo standalone,
 * sin necesidad de un NgModule raíz (AppModule).
 * Recibe el componente raíz (AppComponent) y la configuración
 * de proveedores definida en app.config.ts.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
