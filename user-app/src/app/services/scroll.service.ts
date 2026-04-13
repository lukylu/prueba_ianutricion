import { Injectable } from '@angular/core';

/**
 * Servicio de desplazamiento suave (scroll).
 *
 * Proporciona un método centralizado para navegar hacia secciones
 * de la página mediante sus selectores CSS o IDs de anclaje.
 *
 * Al estar marcado como providedIn: 'root', Angular lo instancia
 * una sola vez y lo comparte en toda la aplicación (singleton).
 *
 * Uso en un componente:
 *   constructor(private scrollService: ScrollService) {}
 *   this.scrollService.scrollTo('#como-funciona');
 */
@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  /**
   * Desplaza la vista suavemente hasta el elemento que coincida
   * con el selector CSS proporcionado.
   *
   * @param selector - Selector CSS o ID del elemento destino (ej: '#hero', '.seccion')
   */
  scrollTo(selector: string): void {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
