import { Component } from '@angular/core';

/**
 * Interfaz para cada bloque numerado de la solución.
 * - num: número de orden visible (ej: '01', '02')
 * - title: nombre corto de la capacidad
 * - description: explicación breve de cómo funciona
 */
interface Bloque {
  num: string;
  title: string;
  description: string;
}

/**
 * Sección "La Solución" — presenta cómo NutriMind resuelve los problemas detectados.
 *
 * Muestra una cuadrícula de dos columnas:
 *  - Izquierda: titular, subtítulo y tres bloques numerados que explican
 *    el funcionamiento del asistente paso a paso.
 *  - Derecha: cita destacada de una nutricionista real que da credibilidad
 *    al producto (prueba social).
 */
@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.scss'],
})
export class SolucionComponent {
  /** Capacidades principales del asistente, mostradas en orden numerado */
  bloques: Bloque[] = [
    {
      num: '01',
      title: 'Habla con el paciente',
      description: 'Responde de forma clara, útil y coherente con el enfoque nutricional definido.',
    },
    {
      num: '02',
      title: 'Aprende del contexto',
      description: 'Tiene en cuenta objetivos, preferencias, evolución y conversaciones anteriores.',
    },
    {
      num: '03',
      title: 'Complementa al profesional',
      description: 'Toda la interacción puede quedar conectada al nutricionista para mejorar el seguimiento y afinar recomendaciones.',
    },
  ];
}
