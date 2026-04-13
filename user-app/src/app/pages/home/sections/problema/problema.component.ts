import { Component } from '@angular/core';

/**
 * Interfaz que define la estructura de cada tarjeta de problema.
 * - title: nombre corto del problema
 * - description: explicación breve del impacto en la clínica
 * - svgPath: trazado SVG del icono ilustrativo
 */
interface ProblemCard {
  title: string;
  description: string;
  svgPath: string;
}

/**
 * Sección "El Problema" — identifica los puntos de dolor del cliente objetivo.
 *
 * Muestra cuatro tarjetas que representan los principales problemas
 * que enfrentan las clínicas de nutrición sin un asistente de IA:
 * consultas repetitivas, baja adherencia, falta de visibilidad y carga operativa.
 *
 * Esta sección prepara al visitante para recibir la solución (app-solucion).
 */
@Component({
  selector: 'app-problema',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.scss'],
})
export class ProblemaComponent {
  /** Tarjetas de problemas, renderizadas con @for en la plantilla */
  cards: ProblemCard[] = [
    {
      title: 'Consultas repetitivas',
      description: 'Preguntas frecuentes sobre alimentos, cantidades, sustituciones o hábitos que consumen tiempo del equipo.',
      svgPath: 'M8 9h8M8 13h5M4 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2z',
    },
    {
      title: 'Baja adherencia',
      description: 'Muchos pacientes se desvían del plan porque no tienen apoyo en el momento en que lo necesitan.',
      svgPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      title: 'Poca visibilidad del día a día',
      description: 'El nutricionista no siempre sabe qué ha pasado entre una sesión y la siguiente.',
      svgPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    },
    {
      title: 'Carga operativa innecesaria',
      description: 'Agendar citas, responder dudas simples y recopilar contexto quita tiempo al trabajo clínico de valor.',
      svgPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];
}
