import { Component } from '@angular/core';
import { ChatMockupComponent } from '../../../../components/chat-mockup/chat-mockup.component';

/**
 * Sección Hero — primera sección visible de la landing page.
 *
 * Contiene:
 *  - Etiqueta identificativa del producto
 *  - Titular principal con llamada emocional
 *  - Subtítulo descriptivo del servicio
 *  - Dos botones de llamada a la acción (CTA)
 *  - Insignias de características clave
 *  - Mockup visual del chat (componente app-chat-mockup)
 *
 * En móvil (< 900px), el mockup se oculta mediante CSS
 * para priorizar el texto en pantallas pequeñas.
 */
@Component({
  selector: 'app-hero',
  imports: [ChatMockupComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  /**
   * Lista de insignias (badges) que destacan las características
   * principales del producto en un vistazo rápido.
   */
  badges = [
    'Disponible 24/7',
    'Menús personalizados',
    'Historial de paciente conectado',
    'Integrable con tu flujo profesional',
  ];
}
