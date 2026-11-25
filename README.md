# Landing page · Consultora ambiental

Landing page que desarrollé para una consultora ambiental emergente en México. El diseño parte de un sitio de referencia que me proporcionó el cliente: tomé su estructura como base y la adapté a las secciones de su plan estratégico. Antes de programar, presenté varias versiones de wireframes; la página está construida sobre la versión que el cliente aprobó.

## Tecnologías

- HTML5 semántico
- CSS3 con Bootstrap 5.3 (retícula, menú responsivo y componentes desplegables)
- JavaScript sin dependencias adicionales
- Fuentes e íconos alojados en el propio proyecto, sin servicios externos

## Características

- Diseño responsivo, probado en escritorio y en móvil (390 px).
- Paleta verde y dorado aplicada con la regla 60-30-10; todas las combinaciones de texto cumplen el contraste mínimo AA de WCAG 2.1.
- Accesibilidad: enlace para saltar al contenido, foco visible, botones de al menos 44 px y animaciones que se desactivan si el usuario prefiere menos movimiento.
- Sección de servicios con detalle desplegable, para mostrar los subservicios sin saturar la página.
- Botón flotante de WhatsApp con mensaje predefinido, en los colores de la paleta y sin tapar el pie de página en móvil.
- Imágenes del cliente optimizadas en WebP, sin metadatos y con carga diferida.

## Optimización SEO inicial

Investigué los términos con los que se buscan y se nombran los servicios ambientales en México, y los apliqué en la estructura, los títulos, los textos y las imágenes de la página. También incluí los aspectos técnicos para que Google pueda encontrarla, indexarla y entenderla: metadatos, Open Graph, datos estructurados de Schema.org, `sitemap.xml` con imágenes y `robots.txt`.

La idea es dejar la página preparada para posicionarse orgánicamente; no es posible garantizar una posición específica ni un tiempo determinado para aparecer en Google.

## Secciones

Inicio · Nosotros · Principios · Servicios · Por qué elegirnos · Sectores · Presencia · Contacto (pie de página)

## Estructura

    index.html          Página completa
    assets/css/         Estilos y sistema de diseño
    assets/js/          Interacciones
    assets/img/         Imágenes y logotipo
    assets/fonts/       Tipografías (Poppins e Inter)
    assets/vendor/      Bootstrap
    robots.txt          Indicaciones para buscadores
    sitemap.xml         Mapa del sitio con imágenes
    site.webmanifest    Nombre, colores e íconos para móviles
