import { Component } from '@angular/core';

/**
 * Sección CTA Final — llamada a la acción de cierre de la landing page.
 *
 * Es la última sección antes del footer y tiene como único objetivo
 * convertir al visitante en lead mediante dos acciones posibles:
 *  - Botón primario: "Solicitar demo gratuita" → ancla al footer/contacto
 *  - Botón secundario: "Ver cómo funciona" → vuelve a la sección de proceso
 *
 * El fondo verde salvia (--sage) diferencia visualmente esta sección
 * y refuerza el carácter de cierre y urgencia suave.
 *
 * Este componente no tiene lógica: es puramente presentacional.
 * Si en el futuro se conecta a un formulario o CRM, la lógica
 * debería añadirse aquí o delegarse a un servicio.
 */
@Component({
  selector: 'app-cta-final',
  templateUrl: './cta-final.component.html',
  styleUrls: ['./cta-final.component.scss'],
})
export class CtaFinalComponent {}
