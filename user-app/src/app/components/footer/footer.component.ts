import { Component } from '@angular/core';

/**
 * Componente de pie de página.
 *
 * Muestra cuatro columnas de información:
 *  - Descripción de la marca
 *  - Enlaces del producto (anclas internas)
 *  - Información de contacto
 *  - Vínculos legales
 *
 * El año de copyright se calcula dinámicamente para que nunca quede desactualizado.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  /** Año actual calculado en tiempo de ejecución */
  currentYear = new Date().getFullYear();

  /** Enlaces internos a secciones del producto */
  productLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  /** Datos de contacto de la empresa */
  contactLinks = [
    { label: 'hola@nutrimind.ai', href: 'mailto:hola@nutrimind.ai' },
    { label: '+34 900 000 000', href: 'tel:+34900000000' },
    { label: 'Online — toda España', href: '#' },
  ];

  /** Páginas legales requeridas por normativa */
  legalLinks = [
    { label: 'Aviso legal', href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Cookies', href: '#' },
  ];
}
