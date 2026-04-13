import { Component } from '@angular/core';

/**
 * Interfaz para cada pregunta frecuente.
 * - question: pregunta tal como la formularía el cliente potencial
 * - answer: respuesta concisa y tranquilizadora
 */
interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Sección "FAQ" — resuelve las principales objeciones de compra.
 *
 * Las preguntas están ordenadas estratégicamente:
 *  1. Primero las más importantes (¿reemplaza al nutricionista?)
 *  2. Luego las de personalización y acceso
 *  3. Por último las técnicas y legales (seguridad de datos, RGPD)
 *
 * Se muestra en cuadrícula de 2 columnas en escritorio y 1 columna en móvil.
 * El fondo blanco de cada tarjeta contrasta con el fondo crema de la sección.
 */
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  /** Preguntas frecuentes ordenadas por relevancia e impacto en la decisión de compra */
  items: FaqItem[] = [
    {
      question: '¿El asistente reemplaza al nutricionista?',
      answer: 'No. Está diseñado para complementar al profesional, no sustituirlo. Toda decisión clínica sigue siendo del nutricionista.',
    },
    {
      question: '¿Se puede adaptar a mi metodología concreta?',
      answer: 'Sí. El asistente se entrena con el enfoque de cada clínica y puede excluir respuestas fuera de su protocolo.',
    },
    {
      question: '¿Cómo acceden los pacientes al asistente?',
      answer: 'A través de web, WhatsApp, o la app que tu clínica ya use. La integración se adapta a tu infraestructura actual.',
    },
    {
      question: '¿Los datos de los pacientes están seguros?',
      answer: 'Sí. Cumplimos con el RGPD y toda la información está cifrada y almacenada de forma segura en servidores europeos.',
    },
    {
      question: '¿Puedo ver las conversaciones de mis pacientes?',
      answer: 'Sí. Tienes acceso a un panel donde puedes revisar interacciones, detectar patrones y mejorar el asistente.',
    },
    {
      question: '¿Cuánto tiempo lleva la implementación?',
      answer: 'Entre 7 y 14 días dependiendo de la complejidad. No necesitas conocimientos técnicos ni involucrar a tu equipo IT.',
    },
  ];
}
