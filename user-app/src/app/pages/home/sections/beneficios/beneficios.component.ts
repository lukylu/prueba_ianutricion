import { Component } from '@angular/core';

/**
 * Interfaz para cada ítem de beneficio.
 * - title: beneficio concreto y medible
 * - description: explicación del impacto en la clínica
 * - svgPath: trazado del icono SVG representativo
 */
interface Beneficio {
  title: string;
  description: string;
  svgPath: string;
}

/**
 * Sección "Beneficios" — muestra el valor diferencial de NutriMind para la clínica.
 *
 * Usa una disposición asimétrica de dos columnas (1fr 2fr):
 *  - Columna izquierda: titular de la sección y descripción introductoria
 *  - Columna derecha: lista vertical de beneficios con icono, título y descripción
 *
 * Cada beneficio tiene un icono con fondo amarillo-lima (--lime) que
 * aporta calidez y contrasta con el fondo crema de la sección.
 */
@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss'],
})
export class BeneficiosComponent {
  /** Lista de beneficios tangibles para la clínica de nutrición */
  beneficios: Beneficio[] = [
    {
      title: 'Menos tiempo en tareas repetitivas',
      description: 'El equipo recupera horas para dedicarlas a consulta de valor, no a responder las mismas preguntas.',
      svgPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Mayor adherencia al tratamiento',
      description: 'Los pacientes con acceso a respuestas inmediatas mantienen mejor sus hábitos y alcanzan sus objetivos.',
      svgPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
    {
      title: 'Diferenciación de marca',
      description: 'Ofreces una experiencia moderna y personalizada que ninguna clínica tradicional puede igualar.',
      svgPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    },
    {
      title: 'Escalabilidad sin aumentar plantilla',
      description: 'Puedes atender el doble de pacientes sin necesitar más personal de soporte ni atención al cliente.',
      svgPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    },
  ];
}
