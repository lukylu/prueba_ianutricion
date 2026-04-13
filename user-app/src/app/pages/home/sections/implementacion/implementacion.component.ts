import { Component } from '@angular/core';

/**
 * Interfaz para cada paso del proceso de implementación.
 * - num: número visible del paso (ej: '01', '02')
 * - title: nombre del hito de implementación
 * - description: descripción de las actividades de ese paso
 */
interface ImplStep {
  num: string;
  title: string;
  description: string;
}

/**
 * Sección "Implementación" — transmite la rapidez y sencillez del proceso de puesta en marcha.
 *
 * Sección con fondo oscuro (--dark) que contrasta visualmente con las anteriores.
 * Los pasos se muestran en una cuadrícula con separadores de 1px,
 * generando la apariencia de celdas de tabla sin bordes gruesos.
 *
 * El objetivo de esta sección es reducir la fricción de compra al demostrar
 * que el proceso de implementación es rápido (7-14 días) y no requiere
 * esfuerzo técnico por parte de la clínica.
 */
@Component({
  selector: 'app-implementacion',
  templateUrl: './implementacion.component.html',
  styleUrls: ['./implementacion.component.scss'],
})
export class ImplementacionComponent {
  /** Pasos del proceso de implementación, del onboarding al lanzamiento */
  steps: ImplStep[] = [
    {
      num: '01',
      title: 'Reunión de onboarding',
      description: 'Entendemos tu clínica, metodología y casos de uso más frecuentes. Definimos el alcance juntos.',
    },
    {
      num: '02',
      title: 'Configuración del asistente',
      description: 'Construimos la base de conocimiento y entrenamos el modelo con el enfoque de tu clínica.',
    },
    {
      num: '03',
      title: 'Pruebas y ajustes',
      description: 'Testamos en escenarios reales junto a ti y corregimos antes del lanzamiento.',
    },
    {
      num: '04',
      title: 'Lanzamiento y soporte',
      description: 'Activamos el asistente en tu canal y hacemos seguimiento continuo de la calidad de respuestas.',
    },
  ];
}
