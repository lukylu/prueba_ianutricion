import { Component } from '@angular/core';

/**
 * Interfaz que define la estructura de cada mensaje del chat.
 * - type: indica si el mensaje lo envía la IA o el usuario
 * - text: contenido textual del mensaje
 * - delay: retraso de la animación fadeUp en segundos (para efecto escalonado)
 */
interface ChatMessage {
  type: 'ai' | 'user';
  text: string;
  delay: number;
}

/**
 * Componente de maqueta visual del chat (mockup).
 *
 * Simula una conversación real entre un paciente y el asistente NutriMind
 * para ilustrar su funcionamiento en la sección hero de la landing.
 *
 * Los mensajes se animan con fadeUp de forma escalonada usando
 * animation-delay, generando la sensación de conversación en tiempo real.
 * Es un componente puramente presentacional: no tiene lógica de negocio.
 */
@Component({
  selector: 'app-chat-mockup',
  templateUrl: './chat-mockup.component.html',
  styleUrls: ['./chat-mockup.component.scss'],
})
export class ChatMockupComponent {
  /**
   * Mensajes de la conversación de demostración.
   * El delay escalonado (0.1s, 0.3s, 0.5s...) crea el efecto
   * de que los mensajes aparecen uno tras otro al cargar la página.
   */
  messages: ChatMessage[] = [
    { type: 'ai',   text: 'Hola Laura 👋 ¿Cómo has llevado el plan esta semana?', delay: 0.1 },
    { type: 'user', text: 'Bien, aunque ayer comí fuera y no supe qué pedir', delay: 0.3 },
    { type: 'ai',   text: 'Sin problema. Para restaurantes, prioriza proteína magra con ensalada o verduras. Pollo a la plancha, merluza o huevo son buenas opciones. ¿Qué tipo de restaurante era?', delay: 0.5 },
    { type: 'user', text: 'Italiano 😅', delay: 0.7 },
    { type: 'ai',   text: 'Perfecto. En italiano puedes pedir carpaccio de ternera o ensalada caprese de primero, y una pasta al pomodoro sin nata de segundo. Pide media ración si puedes.', delay: 0.9 },
  ];
}
