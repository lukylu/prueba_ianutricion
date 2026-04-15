import { Component } from '@angular/core';

/**
 * Componente de cabecera principal de la aplicación.
 *
 * Contiene el logotipo, la navegación por anclas a las distintas
 * secciones de la landing y el botón de llamada a la acción principal.
 *
 * Está fijado en la parte superior de la pantalla (position: fixed)
 * mediante su SCSS, por lo que el contenido de la página lleva
 * un padding-top equivalente a su altura (68px).
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * Lista de enlaces de navegación.
   * Cada objeto define el texto visible y el ancla destino dentro de la página.
   */
  navLinks = [
    { label: 'Qué puede hacer', href: '#funcionalidades' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Implementación', href: '#implementacion' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];
}
