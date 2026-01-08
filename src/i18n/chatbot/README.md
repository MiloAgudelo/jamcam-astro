# Guía para Modificar el Chatbot JAMCAM 2025

## Introducción
Este documento explica cómo funciona y cómo modificar el archivo de configuración del chatbot. El archivo que estás viendo es un objeto JavaScript/TypeScript que define todo el flujo de conversación del chatbot "Cholao" para el evento JAMCAM 2025.

**Nota**: Este chatbot existe en 4 idiomas (español, inglés, portugués y francés), pero esta guía se enfoca en el archivo en español (`es.ts`). La estructura es idéntica en todos los idiomas, solo cambia el contenido de los textos.

## Estructura del Archivo

El archivo exporta un objeto con esta estructura:

```typescript
export default {
    title: "Cholao",                    // Nombre del chatbot
    close: "Cerrar",                    // Texto del botón cerrar
    restart: "🔄 Reiniciar",            // Texto del botón reiniciar
    typing: "Escribiendo",              // Indicador de escritura
    nodes: {
        // ... todos los nodos de conversación
    }
}
```

## Propiedades Principales

### Propiedades del Nivel Superior
- **`title`**: Nombre que se muestra del chatbot (ej: "Cholao")
- **`close`**: Texto del botón para cerrar el chatbot (ej: "Cerrar")
- **`restart`**: Texto del botón para reiniciar la conversación (ej: "🔄 Reiniciar")
- **`typing`**: Texto que se muestra mientras el bot "escribe" (ej: "Escribiendo")

### El Objeto `nodes`

El objeto `nodes` es el corazón del chatbot. Contiene TODOS los estados de conversación posibles. Cada clave (key) es un identificador único de nodo, y cada valor es la configuración de ese nodo (qué mensaje mostrar y qué opciones dar al usuario).

## Estructura de un Nodo

Cada nodo dentro de `nodes` puede tener las siguientes propiedades:

### Propiedades Obligatorias
- **`message`** (string): El texto que se muestra al usuario. Puede incluir:
  - Múltiples líneas (usa `\n\n` para separar párrafos)
  - Emojis para hacerlo más visual
  - Texto formateado

- **`options`** (array): Array de opciones/botones que se muestran al usuario

### Propiedades Opcionales
- **`image`** (string): Ruta a una imagen para mostrar (ej: `/images/mapa-jamcam.png`)
- **`download`** (string): Ruta a un archivo descargable (ej: `/docs/documento.pdf`)
- **`downloadLabel`** (string): Texto del botón de descarga (obligatorio si usas `download`)

## Estructura de una Opción

Cada opción dentro del array `options` tiene:

### Propiedades Obligatorias
- **`icon`** (string): Emoji o ícono que se muestra en el botón
- **`label`** (string): Texto del botón
- **`action`** (string): Tipo de acción, puede ser:
  - `"goto"`: Navegar a otro nodo del chatbot
  - `"link"`: Abrir un enlace externo

### Propiedades Condicionales
- **`nodeId`** (string): ID del nodo de destino (obligatorio cuando `action: "goto"`)
- **`url`** (string): URL externa (obligatorio cuando `action: "link"`)

## Ejemplos de Nodos

### Nodo Simple de Navegación
```typescript
"welcome": {
    message: "👋 Hola, ¿qué necesitas?",
    options: [
        { icon: "🎯", label: "Actividades", action: "goto", nodeId: "actividades" },
        { icon: "ℹ️", label: "Info General", action: "goto", nodeId: "info-general" }
    ]
}
```
**Explicación**: Muestra un mensaje y dos botones. Al presionar cada botón, navega a otro nodo.

### Nodo con Imagen
```typescript
"ubicaciones": {
    message: "📖 Aquí está el mapa general del JAMCAM 2025",
    image: "/images/mapa-jamcam.png",
    download: "/images/mapa-jamcam.png",
    downloadLabel: "Descargar mapa",
    options: [
        { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
    ]
}
```
**Explicación**: Muestra un mensaje, una imagen, un botón de descarga y una opción para volver.

### Nodo con Link Externo
```typescript
"info-safe-from-harm": {
    message: "🛡️ Safe From Harm\n\nSelecciona una opción:",
    options: [
        { icon: "ℹ️", label: "Info General", action: "link", url: "https://www.jamcam2025.com/safe-from-harm" },
        { icon: "🔙", label: "Atrás", action: "goto", nodeId: "info-general" }
    ]
}
```
**Explicación**: El primer botón abre un enlace externo en el navegador, el segundo navega a otro nodo.

### Nodo con Descarga de Archivo
```typescript
"info-boletin": {
    message: "🕒 Boletín General\n\nDescarga la información oficial:",
    download: "/docs/boletin-jamcam-5.pdf",
    downloadLabel: "Descargar boletín",
    options: [
        { icon: "🔙", label: "Atrás", action: "goto", nodeId: "info-general" }
    ]
}
```
**Explicación**: Muestra un mensaje con un botón de descarga automático para un PDF.

## Cómo Modificar el Chatbot

### ➕ Agregar un Nuevo Nodo

**Paso 1**: Elige un ID único para tu nodo (usa kebab-case, ej: `"nueva-seccion"`)

**Paso 2**: Agrega el nodo al objeto `nodes`:
```typescript
"nueva-seccion": {
    message: "Tu mensaje aquí",
    options: [
        { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
    ]
}
```

**Paso 3**: Enlázalo desde otro nodo agregando una opción:
```typescript
{ icon: "✨", label: "Nueva Sección", action: "goto", nodeId: "nueva-seccion" }
```

**Ejemplo completo**:
```typescript
// En el nodo welcome, agregar esta opción:
{ icon: "🎨", label: "Arte y Cultura", action: "goto", nodeId: "arte-cultura" }

// Y crear el nuevo nodo:
"arte-cultura": {
    message: "🎨 Bienvenido a la sección de Arte y Cultura\n\nAquí encontrarás información sobre actividades artísticas.",
    options: [
        { icon: "🖼️", label: "Talleres", action: "goto", nodeId: "talleres-arte" },
        { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
    ]
}
```

### ➖ Eliminar un Nodo

**Paso 1**: Borra el nodo del objeto `nodes`

**Paso 2**: Busca y elimina TODAS las referencias a ese nodo en otros nodos (busca `nodeId: "nodo-a-eliminar"`)

**Paso 3**: Verifica que no queden rutas rotas - los usuarios deben poder navegar de vuelta

**⚠️ Importante**: Si eliminas un nodo, asegúrate de que ningún otro nodo tenga una opción que apunte a él.

### ✏️ Modificar Contenido Existente

**Cambiar un mensaje**:
```typescript
// Antes:
message: "Hola, ¿qué necesitas?"

// Después:
message: "👋 ¡Bienvenido! ¿En qué puedo ayudarte hoy?"
```

**Cambiar texto de un botón**:
```typescript
// Antes:
{ icon: "🎯", label: "Actividades", action: "goto", nodeId: "actividades" }

// Después:
{ icon: "🎯", label: "Ver Actividades", action: "goto", nodeId: "actividades" }
```

**Cambiar el destino de navegación**:
```typescript
// Antes:
{ icon: "📍", label: "Ubicaciones", action: "goto", nodeId: "ubicaciones" }

// Después:
{ icon: "📍", label: "Ubicaciones", action: "goto", nodeId: "mapa-general" }
```

**Agregar una nueva opción a un nodo existente**:
```typescript
"info-general": {
    message: "ℹ️ Información General",
    options: [
        { icon: "🕒", label: "Boletín General", action: "goto", nodeId: "info-boletin" },
        { icon: "📌", label: "Código Conducta", action: "goto", nodeId: "info-codigo-conducta" },
        // ⬇️ NUEVA OPCIÓN AGREGADA
        { icon: "🏥", label: "Centro Médico", action: "goto", nodeId: "info-medico" },
        { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
    ]
}
```

## 💡 Mejores Prácticas

### 1. Siempre proporciona una salida
TODOS los nodos deben tener al menos una opción para volver atrás o al menú principal:
```typescript
{ icon: "🔙", label: "Atrás", action: "goto", nodeId: "nodo-anterior" }
// O
{ icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
```

### 2. Usa íconos consistentes
Mantén los mismos emojis para acciones similares en todo el chatbot:
- 🔙 = "Atrás" (volver al nodo anterior)
- 🏠 = "Menú Principal" (volver al inicio)
- ✅ = Confirmación / "Sí"
- ❌ = Cancelación / "No"
- 📍 = Ubicaciones
- 🎯 = Actividades
- ℹ️ = Información
- 🛖 = Punto de atención/apoyo

### 3. Mensajes concisos
Si un mensaje es muy largo, divídelo en múltiples nodos. Es mejor tener más nodos cortos que uno muy largo.

### 4. IDs descriptivos
Usa nombres de nodos que expliquen qué hacen:
- ✅ **Bien**: `"actividades-jamboree-juru"`, `"checkin-sintomas"`, `"le-solicitar-apoyo"`
- ❌ **Mal**: `"node1"`, `"seccion-a"`, `"temp"`

### 5. Agrupa nodos relacionados
Usa prefijos para flujos relacionados:
- `"checkin-*"` para todo el flujo de check-in (checkin-pais, checkin-rol, checkin-sintomas)
- `"le-*"` para Listening Ears (le-ansioso, le-triste, le-mejor)
- `"actividades-*"` para actividades
- `"info-*"` para información general

### 6. Verifica la navegación
Antes de terminar, recorre mentalmente cada ruta posible para asegurarte de que:
- No hay nodos "huérfanos" (sin forma de llegar a ellos)
- No hay nodos "sin salida" (sin forma de salir)
- Todos los `nodeId` apuntan a nodos que existen

## 🎨 Patrones Comunes (Copia y Adapta)

### Patrón: Menú Multinivel
Usa esto cuando quieras categorías y subcategorías:

```typescript
"menu-principal": {
    message: "Elige una categoría:",
    options: [
        { icon: "🎯", label: "Categoría A", action: "goto", nodeId: "categoria-a" },
        { icon: "📍", label: "Categoría B", action: "goto", nodeId: "categoria-b" }
    ]
},
"categoria-a": {
    message: "Elige una subcategoría:",
    options: [
        { icon: "1️⃣", label: "Opción 1", action: "goto", nodeId: "opcion-1" },
        { icon: "2️⃣", label: "Opción 2", action: "goto", nodeId: "opcion-2" },
        { icon: "🔙", label: "Volver", action: "goto", nodeId: "menu-principal" }
    ]
}
```

### Patrón: Confirmación Sí/No
Usa esto cuando necesites que el usuario confirme algo:

```typescript
"confirmar-accion": {
    message: "¿Estás seguro de que quieres continuar?",
    options: [
        { icon: "✅", label: "Sí, continuar", action: "goto", nodeId: "accion-ejecutada" },
        { icon: "❌", label: "No, cancelar", action: "goto", nodeId: "accion-cancelada" }
    ]
}
```

### Patrón: Información + Descarga
Usa esto para mostrar info y dar un archivo para descargar:

```typescript
"recurso-importante": {
    message: "📄 Aquí está la información importante\n\nPuedes descargar el documento completo:",
    download: "/docs/documento.pdf",
    downloadLabel: "Descargar PDF",
    options: [
        { icon: "🔙", label: "Volver", action: "goto", nodeId: "welcome" }
    ]
}
```

### Patrón: Selección de País/Lista Larga
Usa esto para listas largas de opciones:

```typescript
"seleccionar-pais": {
    message: "🌎 ¿De qué país vienes?",
    options: [
        { icon: "🇨🇴", label: "Colombia", action: "goto", nodeId: "siguiente-paso" },
        { icon: "🇧🇷", label: "Brasil", action: "goto", nodeId: "siguiente-paso" },
        { icon: "🇦🇷", label: "Argentina", action: "goto", nodeId: "siguiente-paso" },
        // ... más opciones
        { icon: "🔙", label: "Atrás", action: "goto", nodeId: "menu-anterior" }
    ]
}
```

### Patrón: Estado Emocional con Diferentes Rutas
Usa esto cuando la respuesta determine rutas diferentes:

```typescript
"como-te-sientes": {
    message: "¿Cómo te sientes ahora?",
    options: [
        { icon: "😊", label: "Bien", action: "goto", nodeId: "respuesta-bien" },
        { icon: "😟", label: "Ansioso", action: "goto", nodeId: "respuesta-ansioso" },
        { icon: "😢", label: "Triste", action: "goto", nodeId: "respuesta-triste" }
    ]
},
"respuesta-bien": {
    message: "¡Qué bueno! 💚",
    options: [
        { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
    ]
},
"respuesta-ansioso": {
    message: "Entiendo. Prueba esta técnica de respiración...",
    options: [
        { icon: "✅", label: "Me siento mejor", action: "goto", nodeId: "respuesta-bien" },
        { icon: "🛖", label: "Necesito más apoyo", action: "goto", nodeId: "punto-apoyo" }
    ]
}
```

## 🚀 Punto de Entrada

El chatbot **SIEMPRE** comienza en el nodo **`"welcome"`**. Este es el primer nodo que ven los usuarios al abrir el chatbot.

Si creas nodos nuevos, asegúrate de que se pueda llegar a ellos desde `welcome` o desde otros nodos accesibles desde `welcome`.

## 📁 Rutas de Archivos

Cuando uses `image`, `download` o `url`, sigue estas reglas:

- **Imágenes**: Rutas relativas al directorio `public` 
  - ✅ Correcto: `/images/mapa-jamcam.png`
  - ❌ Incorrecto: `../public/images/mapa.png`

- **Documentos**: Rutas relativas al directorio `public`
  - ✅ Correcto: `/docs/boletin-jamcam-5.pdf`
  - ❌ Incorrecto: `./docs/boletin.pdf`

- **Enlaces externos**: URLs completas con protocolo
  - ✅ Correcto: `https://www.jamcam2025.com/safe-from-harm`
  - ❌ Incorrecto: `www.jamcam2025.com` o `jamcam2025.com`

## 🌍 Nota sobre Idiomas

Este chatbot existe en 4 idiomas (español, inglés, portugués, francés). Si haces cambios estructurales (agregar/eliminar nodos, cambiar IDs, agregar opciones), recuerda que esos cambios deben replicarse en TODOS los idiomas.

**Lo que debe ser idéntico en todos los idiomas**:
- IDs de nodos (ej: `"welcome"`, `"actividades"`)
- Referencias `nodeId` en las opciones
- Rutas de archivos (`image`, `download`)
- URLs externas
- Emojis en los `icon`

**Lo que debe traducirse**:
- Contenido del `message`
- Texto del `label` en las opciones
- Textos de `downloadLabel`

## ✅ Checklist de Validación

Antes de considerar terminados los cambios, verifica:

### Estructura Básica
- [ ] Todos los IDs de nodos son únicos (no hay dos nodos con el mismo ID)
- [ ] Todas las referencias `nodeId` apuntan a nodos que existen
- [ ] Cada nodo tiene al menos una opción de navegación (no hay nodos sin salida)
- [ ] Todos los nodos son alcanzables desde el nodo `welcome` (no hay nodos huérfanos)

### Contenido
- [ ] Los mensajes están bien escritos y son claros
- [ ] Los emojis se ven correctamente
- [ ] Las rutas de archivos comienzan con `/` (ej: `/images/mapa.png`)
- [ ] Las URLs externas tienen `https://` al inicio
- [ ] Los `downloadLabel` están presentes cuando hay un `download`

### Navegación
- [ ] Puedes llegar del nodo `welcome` a cualquier nodo nuevo que hayas creado
- [ ] Desde cualquier nodo nuevo puedes volver al menú principal
- [ ] No hay "callejones sin salida" donde el usuario se quede atrapado

### Consistencia
- [ ] Los íconos son consistentes (🔙 para atrás, 🏠 para menú principal, etc.)
- [ ] Los nodos relacionados usan prefijos similares (ej: `"checkin-*"`)

## 🗺️ Mapa de Nodos Actual (archivo es.ts)

Estructura de navegación principal (árbol completo):

```
welcome (PUNTO DE ENTRADA - SIEMPRE EMPIEZA AQUÍ)
│
├── 🌿 checkin-bienestar (Check-in de bienestar)
│   ├── checkin-pais (Selección de país)
│   ├── checkin-rol (Scout/Caminante/Rover/etc)
│   ├── checkin-sintomas (Síntomas o malestares)
│   └── checkin-apoyo (¿Necesitas apoyo especial?)
│       ├── checkin-apoyo-si (Respuesta: Sí)
│       └── checkin-apoyo-no (Respuesta: No)
│
├── 📍 ubicaciones (Mapa del JamCam)
│
├── 🎯 actividades (Selección de programa)
│   ├── actividades-jamboree (Programa Jamboree)
│   │   ├── actividades-jamboree-juru (Subcampo Urá Jürú)
│   │   └── actividades-jamboree-chami (Subcampo Urá Chamí)
│   └── actividades-camporee (Programa Camporee)
│       ├── actividades-camporee-do (Subcampo Urá Dó)
│       └── actividades-camporee-chi (Subcampo Urá Chi)
│
├── 🧠 listening-ears (Apoyo emocional)
│   └── le-solicitar-apoyo (¿Cómo te sientes?)
│       ├── le-bien (Me siento bien)
│       ├── le-ansioso (Me siento ansioso)
│       │   ├── le-mejor (Me siento mejor ahora)
│       │   └── le-tecnica-breve (Técnica de respiración)
│       ├── le-triste (Me siento triste)
│       │   └── le-punto-atencion (Punto de atención)
│       └── le-enojado (Me siento enojado)
│
├── ℹ️ info-general (Información general)
│   ├── info-boletin (Boletín general)
│   ├── info-codigo-conducta (Código de conducta)
│   ├── info-emergencia (Contactos de emergencia)
│   └── info-safe-from-harm (Safe From Harm)
│
├── 🗣️ tu-voz-cuenta (Encuestas)
│   ├── encuesta-bienvenida
│   └── encuesta-final
│
└── 🌍 datos-curiosos (Datos sobre Cali y JamCam)
    └── datos-curiosos-menu (Menú de datos)
        ├── datos-jamcam (JamCam Internacional)
        ├── datos-cholao (Sobre Cholao)
        ├── datos-sucursal (Sucursal del Cielo)
        ├── datos-salsa (Capital de la Salsa)
        ├── datos-historia (Historia de Cali)
        ├── datos-poblacion (Tercera ciudad)
        ├── datos-cristo (Cristo Rey)
        └── datos-petronio (Festival Petronio)
```

## 🔍 Cómo Entender un Flujo Específico

Para entender cómo funciona un flujo:

1. **Encuentra el nodo inicial** en el archivo
2. **Lee el `message`** - esto es lo que ve el usuario
3. **Mira las `options`** - estos son los botones disponibles
4. **Sigue los `nodeId`** - ve a ese nodo y repite el proceso

**Ejemplo**: Rastrear el flujo de "Listening Ears"
```
1. Usuario en "welcome" → presiona "Listening Ears"
2. Va a "listening-ears" → presiona "Solicitar Apoyo"
3. Va a "le-solicitar-apoyo" → presiona "Ansioso"
4. Va a "le-ansioso" → puede ir a "le-mejor" o "le-punto-atencion"
```

## 💡 Consejos Finales para ChatGPT

Cuando pidas a ChatGPT que modifique el chatbot:

1. **Sé específico**: "Agrega un nodo para información sobre transporte" es mejor que "agrega más info"
2. **Indica dónde enlazar**: "Agrégalo como opción en el menú principal (welcome)" 
3. **Pide verificación**: "Asegúrate de que todos los nodeId existan"
4. **Revisa el resultado**: Verifica que los IDs sean únicos y la navegación tenga sentido

**Ejemplo de prompt útil**:
> "Necesito agregar una sección sobre 'Comida y Bebidas' al chatbot. Créala como un nuevo nodo llamado 'comida-bebidas' que muestre información sobre horarios de comedor y tipos de comida disponible. Agrégalo como opción en el menú principal con el ícono 🍽️. El nodo debe tener un mensaje informativo y opciones para volver al menú principal."

