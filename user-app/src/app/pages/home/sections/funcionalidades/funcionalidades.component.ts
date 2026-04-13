import { Component } from '@angular/core';

/**
 * Interfaz que define la estructura de cada tarjeta de funcionalidad.
 * - title: nombre de la capacidad
 * - description: explicación breve de su utilidad para el paciente
 * - svgPath: trazado del icono SVG asociado
 * - dark: si es true, la tarjeta usa el tema oscuro (primera tarjeta destacada)
 */
interface Feature {
  title: string;
  description: string;
  svgPath: string;
  dark?: boolean;
}

/**
 * Sección "Funcionalidades" — muestra las seis capacidades concretas del asistente.
 *
 * Renderiza una cuadrícula de 3 columnas con tarjetas.
 * La primera tarjeta (índice 0) tiene fondo oscuro para destacarla visualmente
 * y generar contraste con las demás (efecto "tarjeta estrella").
 *
 * El índice de iteración ($index) se usa en la plantilla con @for
 * para aplicar la clase CSS .feature-card--dark solo a la primera tarjeta.
 */
@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.scss'],
})
export class FuncionalidadesComponent {
  /** Lista de funcionalidades del asistente IA */
  features: Feature[] = [
    {
      title: 'Generar menús saludables',
      description: 'Propone menús adaptados a objetivos, preferencias, restricciones y contexto del paciente.',
      svgPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      dark: true, // Tarjeta destacada con fondo oscuro
    },
    {
      title: 'Resolver dudas alimenticias',
      description: 'Contesta preguntas sobre alimentos, combinaciones, sustituciones, horarios o decisiones cotidianas.',
      svgPath: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Dar recomendaciones personalizadas',
      description: 'Ajusta sus respuestas según lo que el paciente ha venido haciendo en los últimos días.',
      svgPath: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Mantener memoria del historial',
      description: 'Recuerda interacciones previas para no tratar cada consulta como si fuera la primera.',
      svgPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    },
    {
      title: 'Preparar mejor la consulta',
      description: 'Recoge contexto útil antes de la sesión para que el profesional llegue con más información.',
      svgPath: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    {
      title: 'Gestionar citas y recordatorios',
      description: 'Ayuda a solicitar, organizar o recordar citas según el flujo definido por la clínica.',
      svgPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    },
  ];
}
