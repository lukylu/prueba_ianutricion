import { Component } from '@angular/core';

// Componentes de estructura global (cabecera y pie)
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

// Secciones de la landing page, en orden de aparición
import { HeroComponent } from './sections/hero/hero.component';
import { ProblemaComponent } from './sections/problema/problema.component';
import { SolucionComponent } from './sections/solucion/solucion.component';
import { FuncionalidadesComponent } from './sections/funcionalidades/funcionalidades.component';
import { ComoFuncionaComponent } from './sections/como-funciona/como-funciona.component';
import { BeneficiosComponent } from './sections/beneficios/beneficios.component';
import { ImplementacionComponent } from './sections/implementacion/implementacion.component';
import { FaqComponent } from './sections/faq/faq.component';
import { CtaFinalComponent } from './sections/cta-final/cta-final.component';

/**
 * Página de inicio (landing page) de NutriMind AI.
 *
 * Actúa como componente contenedor que ensambla todas las secciones
 * de la página en el orden correcto. Cada sección es un componente
 * standalone independiente con su propia lógica, plantilla y estilos.
 *
 * Estructura de secciones:
 *  1. Hero          — Titular principal y mockup del chat
 *  2. Problema      — Dolor que resuelve el producto
 *  3. Solución      — Cómo lo resuelve NutriMind
 *  4. Funcionalidades — Qué puede hacer el asistente
 *  5. Cómo funciona — Proceso de personalización por clínica
 *  6. Beneficios    — Ventajas para la clínica
 *  7. Implementación — Pasos y plazos de puesta en marcha
 *  8. FAQ           — Preguntas frecuentes
 *  9. CTA Final     — Llamada a la acción para solicitar demo
 */
@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProblemaComponent,
    SolucionComponent,
    FuncionalidadesComponent,
    ComoFuncionaComponent,
    BeneficiosComponent,
    ImplementacionComponent,
    FaqComponent,
    CtaFinalComponent,
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
