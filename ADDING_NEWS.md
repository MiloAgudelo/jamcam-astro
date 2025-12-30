# Guía para Agregar Noticias (Para Agentes IA)

## Resumen del Sistema
Las noticias usan un sistema de IDs semánticos que simplifica la gestión de imágenes y código.

## Checklist Completa

### 1. Crear ID Semántico
```
Formato: kebab-case descriptivo y corto
Ejemplo: "historia-jamcam", "staff-en-accion", "inauguracion"

Reglas:
- Solo minúsculas
- Palabras separadas por guiones
- Sin tildes ni caracteres especiales
- Máximo 3-4 palabras
```

### 2. Preparar Imágenes (2 versiones requeridas)

**Ubicación:** `src/assets/images/news/`

```
preview/{newsId}-preview.png  (imagen optimizada para tarjetas)
full/{newsId}-full.png        (imagen de alta calidad para página completa)

Ejemplo:
src/assets/images/news/preview/historia-jamcam-preview.png
src/assets/images/news/full/historia-jamcam-full.png
```

**Notas:**
- Formato: PNG preferido
- Preview: ~600x338px recomendado
- Full: ~1200x675px recomendado

### 3. Crear Archivos Markdown (4 idiomas obligatorios)

**Ubicación:** `src/content/news/`

**Nombres de archivo:**
```
{slug}-es.md  (Español - obligatorio)
{slug}-en.md  (English - obligatorio)
{slug}-pt.md  (Português - obligatorio)
{slug}-fr.md  (Français - obligatorio)
```

### 4. Estructura del Frontmatter

```yaml
---
newsId: 'id-semantico'                    # El ID creado en paso 1
title: 'Título de la noticia'             # Traducido a cada idioma
category: 'Categoría'                     # Ver categorías abajo
publishDate: YYYY-MM-DD                   # Formato ISO
image: 'id-semantico'                     # Mismo que newsId
imageAlt: 'Descripción de la imagen'      # Traducido
locale: 'es'                              # es, en, pt, o fr
keywords: ['palabra1', 'palabra2']        # Array de palabras clave
metaTitle: 'Título SEO (opcional)'        # Para motores de búsqueda
metaDescription: 'Descripción SEO'        # Para motores de búsqueda
---

# Título (H1)

Contenido en Markdown...
```

### 5. Categorías Válidas (Traducciones)

| Español | English | Português | Français |
|---------|---------|-----------|----------|
| Información | Information | Informação | Information |
| Preparación | Preparation | Preparação | Préparation |
| Cultura y Música | Culture and Music | Cultura e Música | Culture et Musique |
| Experiencia | Experience | Experiência | Expérience |
| Anuncio | Announcement | Anúncio | Annonce |
| Noticia | News | Notícia | Nouvelles |

### 6. Ejemplo Completo

**ID:** `nuevo-evento`

**Imágenes:**
```
src/assets/images/news/preview/nuevo-evento-preview.png
src/assets/images/news/full/nuevo-evento-full.png
```

**Archivos:**
```
src/content/news/nuevo-evento-es.md
src/content/news/nuevo-evento-en.md
src/content/news/nuevo-evento-pt.md
src/content/news/nuevo-evento-fr.md
```

**Contenido de nuevo-evento-es.md:**
```markdown
---
newsId: 'nuevo-evento'
title: 'Nuevo Evento Scout en Cali'
category: 'Anuncio'
publishDate: 2025-01-15
image: 'nuevo-evento'
imageAlt: 'Scouts reunidos en el nuevo evento'
locale: 'es'
keywords: ['evento', 'scouts', 'Cali', 'JamCam 2025']
metaTitle: 'Nuevo Evento Scout en Cali - JamCam 2025'
metaDescription: 'Descubre el nuevo evento scout que se realizará en Cali durante el JamCam 2025'
---

# Nuevo Evento Scout en Cali

Este es el contenido de la noticia en español...

## Subtítulo

Más contenido...
```

### 7. Verificación

```bash
# Verificar que el build funciona
npm run build

# Verificar localmente
npm run dev
```

**Páginas a revisar:**
- `/news` (español)
- `/en/news` (inglés)
- `/pt/news` (portugués)
- `/fr/news` (francés)
- `/news/{slug}` (página individual en cada idioma)

## Notas Importantes

1. **NO necesitas importar imágenes manualmente** - El sistema las carga dinámicamente usando el newsId
2. **Todos los 4 idiomas son obligatorios** - El sitio es multilingüe
3. **El newsId debe ser único** - Revisa los archivos existentes para evitar duplicados
4. **Las imágenes deben existir** - El build fallará si faltan
5. **Usa el mismo newsId en todos los archivos** - Es el identificador común entre idiomas

## IDs Existentes (No Duplicar)

- colombia-sede-ideal
- historia-jamcam
- jamcam-llega-colombia
- cali-recibir-mundo
- staff-en-accion
- equipo-internacional
- himno-oficial
- inauguracion
- llegada-contingentes
- dia2-actividades
- stand-oficial
- fundacion-scout

## Sistema Técnico (Referencia)

- **Schema:** `src/content/config.ts` - Define la estructura
- **Componente de tarjeta:** `src/components/NewsCard.astro` - Muestra preview
- **Páginas individuales:** `src/pages/{locale}/news/[slug].astro` - Muestra noticia completa
- **Carga dinámica:** Usa `import.meta.glob()` para cargar imágenes automáticamente

