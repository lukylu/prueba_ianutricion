# NutriMind AI — Angular 21

Landing page de NutriMind AI migrada a Angular 21 con arquitectura standalone y componentes independientes por sección.

## Requisitos

- Node.js >= 20
- Angular CLI >= 21

```bash
npm install -g @angular/cli@21
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
ng serve
```

Abre [http://localhost:4200](http://localhost:4200) en el navegador.

## Build de producción

```bash
ng build
```

Los archivos compilados se generan en `dist/nutrimind-angular/`.

---

## Estructura del proyecto

```
src/
└── app/
    ├── components/            # Componentes globales reutilizables
    │   ├── header/
    │   ├── footer/
    │   └── chat-mockup/
    ├── pages/
    │   └── home/              # Página principal
    │       ├── home.page.ts
    │       ├── home.page.html
    │       ├── home.page.scss
    │       └── sections/      # Secciones de la landing
    │           ├── hero/
    │           ├── problema/
    │           ├── solucion/
    │           ├── funcionalidades/
    │           ├── como-funciona/
    │           ├── beneficios/
    │           ├── implementacion/
    │           ├── faq/
    │           └── cta-final/
    ├── services/
    │   └── scroll.service.ts
    ├── app.component.ts
    ├── app.config.ts
    └── app.routes.ts
```

## Convenciones Angular 21

- **Standalone components**: todos los componentes usan `imports: []` directamente, sin NgModules.
- **Control flow**: se usa la sintaxis `@for`, `@if` nativa (sin `*ngFor` / `*ngIf`).
- **Signals-ready**: la arquitectura está preparada para adoptar signals cuando sea necesario.
- **SCSS con variables CSS**: los colores y tokens de diseño se definen en `styles.scss` como custom properties y se usan en todos los componentes.
