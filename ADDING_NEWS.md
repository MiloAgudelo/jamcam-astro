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
**Imágenes adicionales en el contenido (OPCIONAL):**

Puedes insertar imágenes adicionales dentro del texto del artículo usando markdown estándar:
```markdown
![Descripción de la imagen](/images/news/content/nombre-imagen.jpg)
*© Crédito del fotógrafo*
```
- Ubicación: `public/images/news/content/`
- Estas imágenes son **opcionales** y se insertan directamente en el markdown
- Se mostrarán dentro del cuerpo del artículo, no como portada
- Ejemplo: `public/images/news/content/aldea-interamericana.jpg`

### 3. Crear Archivos Markdown (4 idiomas obligatorios)

**Ubicación:** `src/content/news/`

**Nombres de archivo:**
```
{newsId}-es.md  (Español - obligatorio)
{newsId}-en.md  (English - obligatorio)
{newsId}-pt.md  (Português - obligatorio)
{newsId}-fr.md  (Français - obligatorio)
```

**IMPORTANTE:** Los nombres de archivo DEBEN usar el mismo newsId del paso 1.

### 4. Estructura del Frontmatter

```yaml
---
newsId: 'id-semantico'                    # CRÍTICO: El ID creado en paso 1 (se usa para cargar imágenes)
title: 'Título de la noticia'             # Traducido a cada idioma
category: 'Categoría'                     # Ver categorías abajo
publishDate: YYYY-MM-DD                   # Formato ISO
image: 'id-semantico'                     # DEBE ser idéntico a newsId
imageAlt: 'Descripción de la imagen'      # Traducido (para imagen de portada)
locale: 'es'                              # es, en, pt, o fr
keywords: ['palabra1', 'palabra2']        # Array de palabras clave
metaTitle: 'Título SEO (opcional)'        # Para motores de búsqueda
metaDescription: 'Descripción SEO'        # Para motores de búsqueda
---

# Título (H1)

Párrafo introductorio o lead de la noticia...

## Subtítulo (H2)

Contenido de la sección...

<!-- OPCIONAL: Puedes insertar imágenes adicionales dentro del texto -->
![Descripción imagen dentro del artículo](/images/news/content/imagen-adicional.jpg)
*© Crédito del fotógrafo*

Más contenido después de la imagen...
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

1. **EL newsId ES CRÍTICO** - El sistema usa `newsId` para cargar las imágenes automáticamente, NO el campo `image`
2. **Consistencia del newsId** - Debe ser idéntico en:
   - Frontmatter (`newsId` e `image`)
   - Nombres de archivos markdown (`{newsId}-{locale}.md`)
   - Nombres de imágenes (`{newsId}-preview.png` y `{newsId}-full.png`)
3. **NO necesitas importar imágenes manualmente** - El sistema las carga dinámicamente usando el newsId
4. **Todos los 4 idiomas son obligatorios** - El sitio es multilingüe
5. **El newsId debe ser único** - Revisa los archivos existentes para evitar duplicados
6. **Las imágenes deben existir** - El build fallará si faltan las imágenes con el nombre correcto
7. **Imágenes dentro del contenido son OPCIONALES** - Puedes agregar imágenes adicionales dentro del texto usando markdown estándar en `public/images/news/content/`

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
- presidente-aldea-interamericana
- descubre-aldea-interamericana

## Sistema Técnico (Referencia)

- **Schema:** `src/content/config.ts` - Define la estructura
- **Componente de tarjeta:** `src/components/NewsCard.astro` - Muestra preview
- **Páginas individuales:** `src/pages/{locale}/news/[slug].astro` - Muestra noticia completa
- **Carga dinámica:** Usa `import.meta.glob()` para cargar imágenes automáticamente

## Troubleshooting / Solución de Problemas

### Las imágenes de portada no cargan

**Causa común:** El `newsId` en el frontmatter no coincide con los nombres de las imágenes.

**Solución:**
1. Verifica que el `newsId` en el frontmatter sea exactamente igual al nombre base de las imágenes
2. Verifica que existan ambas imágenes:
   - `src/assets/images/news/preview/{newsId}-preview.png`
   - `src/assets/images/news/full/{newsId}-full.png`
3. El campo `image` debe ser idéntico al `newsId`

**Ejemplo correcto:**
```yaml
newsId: 'descubre-aldea-interamericana'
image: 'descubre-aldea-interamericana'
```
Con imágenes:
- `src/assets/images/news/preview/descubre-aldea-interamericana-preview.png`
- `src/assets/images/news/full/descubre-aldea-interamericana-full.png`

### La noticia no aparece en la lista

**Causa común:** Falta alguno de los 4 idiomas o hay errores en el frontmatter.

**Solución:**
1. Verifica que existan los 4 archivos markdown ({newsId}-es.md, -en.md, -pt.md, -fr.md)
2. Verifica que cada archivo tenga el `locale` correcto en el frontmatter
3. Ejecuta `npm run build` para ver errores específicos

### Error al hacer build

**Causa común:** Imágenes faltantes o frontmatter inválido.

**Solución:**
1. Lee el mensaje de error cuidadosamente
2. Verifica que todos los campos requeridos existan en el frontmatter
3. Verifica que las categorías estén correctamente traducidas
4. Verifica que las fechas estén en formato ISO (YYYY-MM-DD)
