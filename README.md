# Soviet Connection

Landing page de e-commerce con estética soviética retro, construida con React 19, TypeScript y Vite.

## Vista general

Proyecto de demostración de una tienda conceptual que combina diseño editorial con funcionalidad de catálogo de productos. El enfoque visual es brutalista/propaganda soviética adaptado a moda contemporánea.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite** — entorno de desarrollo rápido
- **Tailwind CSS** — estilos utilitarios
- **Lucide React** — íconos

## Componentes principales

| Componente | Descripción |
|---|---|
| `AnnouncementBar` | Barra superior con mensajes de promoción en desfile |
| `Nav` | Navegación fija con menú y carrito |
| `Hero` | Bloque principal con imagen editorial y llamada a la acción |
| `Collection` | Grilla de colección con tarjetas de producto |
| `ProductCard` | Tarjeta individual con hover animado y botón de agregar |
| `Editorial` | Sección de contenido visual estilo revista |
| `Manifesto` | Bloque de texto de marca con tipografía grande |
| `Footer` | Pie de página con links y redes sociales |

## Inicio rápido

```bash
npm install
npm run dev
```

La aplicación corre en `http://localhost:5173` por defecto.

## Estructura del proyecto

```
src/
├── components/
│   ├── AnnouncementBar.tsx
│   ├── Collection.tsx
│   ├── Editorial.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Manifesto.tsx
│   ├── Nav.tsx
│   └── ProductCard.tsx
├── App.tsx
└── main.tsx
```

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Vista previa del build
npm run lint     # Linter
```