import { Component } from '@angular/core';

/**
 * Interfaz para cada paso del proceso de personalización.
 * - title: nombre corto del paso
 * - description: explicación de qué ocurre en ese paso
 */
interface Paso {
  title: string;
  description: string;
}

/**
 * Sección "Cómo Funciona" — explica el proceso de onboarding y personalización.
 *
 * Muestra cuatro tarjetas en cuadrícula con fondo verde menta (--mint),
 * cada una numerada automáticamente con CSS counter (decimal-leading-zero).
 * Está pensada para disipar dudas sobre el esfuerzo de implementación
 * y transmitir que el proceso es guiado y sencillo.
 */
@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.scss'],
})
export class ComoFuncionaComponent {
  /**
   * Pasos del proceso de personalización de la clínica.
   * El numerado (01, 02...) lo gestiona CSS con counter-increment
   * para no duplicar lógica en el componente.
   */
  pasos: Paso[] = [
    {
      title: 'Definimos el perfil de tu clínica',
      description: 'Recogemos tu metodología, enfoque nutricional, tono de comunicación y casos más frecuentes.',
    },
    {
      title: 'Configuramos el asistente',
      description: 'Programamos el asistente con tu base de conocimiento, restricciones y flujos de respuesta.',
    },
    {
      title: 'Lo integramos en tu canal',
      description: 'Web, WhatsApp, app propia o cualquier plataforma. Sin fricción para el paciente.',
    },
    {
      title: 'Supervisas y mejoras',
      description: 'Accedes al panel de conversaciones, corriges respuestas y el sistema aprende continuamente.',
    },
  ];
}
