# ✨ Galería de Momentos Especiales

Una galería interactiva tipo Instagram Stories, diseñada para revivir momentos especiales con transiciones suaves y diseño moderno.

## ✨ Características

- **Diseño tipo Stories** con transiciones fluidas
- **Barras de progreso** en la parte superior
- **Navegación múltiple** (flechas, teclado, click, swipe)
- **Pantalla completa** para experiencia inmersiva
- **Control de música** de fondo
- **Totalmente responsive** y optimizado para móviles
- **Animaciones suaves** y modernas
- **Fácil de personalizar** y agregar más momentos

## 🎮 Cómo usar

### Desktop
- **Flechas del teclado**: ← → para navegar
- **Click**: Haz click en los lados de la pantalla (izquierda/derecha)
- **Botones**: Usa las flechas laterales

### Móvil
- **Swipe**: Desliza hacia los lados
- **Tap**: Toca en los lados de la pantalla
- **Botones**: Usa las flechas laterales

### Controles
- **Música**: Botón superior derecho
- **Pantalla completa**: Botón superior derecho
- **Progreso**: Barras en la parte superior muestran tu posición

## 📝 Cómo agregar más momentos

Copia esta estructura y pégala antes de la historia final:

```html
<!-- Nueva Historia -->
<div class="story" data-index="X">
    <div class="story-background">
        <img src="TU_IMAGEN.jpg" alt="Descripción">
    </div>
    <div class="story-content">
        <div class="story-text-box">
            <span class="story-emoji">✨</span>
            <h2 class="story-heading">Tu Título</h2>
            <p class="story-description">Tu descripción aquí</p>
        </div>
    </div>
</div>
```

### Para una historia con fondo de color:

```html
<div class="story" data-index="X">
    <div class="story-background" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
    <div class="story-content">
        <div class="story-header fade-in">
            <div class="story-icon">💕</div>
            <h1 class="story-title">Tu Título</h1>
            <p class="story-subtitle">Tu subtítulo</p>
        </div>
    </div>
</div>
```

## 🎨 Personalización

### Cambiar imágenes

Reemplaza las URLs en el atributo `src`:
```html
<img src="ruta/a/tu/imagen.jpg" alt="Descripción">
```

### Cambiar textos

Edita el contenido dentro de:
- `.story-heading` - Título principal
- `.story-description` - Descripción
- `.story-emoji` - Emoji decorativo

### Cambiar colores de fondo

Para fondos con gradiente:
```html
<div class="story-background" style="background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);"></div>
```

### Agregar música personalizada

En `script.js`, línea 103, reemplaza la URL:
```javascript
audio = new Audio('ruta/a/tu/musica.mp3');
```

## 🎯 Emojis sugeridos

- ✨ Especial
- 💕 Amor
- 😊 Alegría
- 🌅 Atardecer
- 🗺️ Aventura
- 💫 Magia
- 💝 Regalo
- 🌟 Estrella
- 🌸 Naturaleza
- ❤️ Corazón
- 🎉 Celebración
- 🌈 Arcoíris
- 🎵 Música
- 📸 Foto
- 🌙 Noche

## 📱 Optimizaciones

- **Responsive**: Se adapta a cualquier tamaño de pantalla
- **Touch-friendly**: Gestos táctiles optimizados
- **Animaciones suaves**: Transiciones fluidas
- **Carga rápida**: Imágenes optimizadas
- **Sin zoom accidental**: Prevención de doble tap

## 🚀 Despliegue

Puedes subir estos archivos a:
- **GitHub Pages** (gratis)
- **Netlify** (gratis)
- **Vercel** (gratis)
- Cualquier hosting web

## 📂 Estructura

```
├── index.html      # Estructura de las historias
├── styles.css      # Estilos y animaciones
├── script.js       # Funcionalidad interactiva
└── README.md       # Documentación
```

## 💡 Tips

1. **Imágenes**: Usa fotos de alta calidad (1200px de ancho mínimo)
2. **Formato**: JPG para fotos, PNG para transparencias
3. **Peso**: Optimiza las imágenes (máximo 500KB cada una)
4. **Textos**: Mantén los mensajes cortos y emotivos
5. **Orden**: Actualiza el `data-index` al agregar historias
6. **Progreso**: Las barras se actualizan automáticamente

---

Hecho con ❤️ para momentos especiales
