export default {
    title: "Cholao",
    close: "Cerrar",
    restart: "🔄 Reiniciar",
    typing: "Escribiendo",
    nodes: {
        welcome: {
            message: "👋 ¡Hola! Soy Cholao, tu asistente digital en el JamCam 2025.\n\nEstoy aquí para guiarte en actividades, ubicaciones, servicios y apoyo durante todo el evento.\n\n👉 Dime, ¿qué necesitas ahora?",
            options: [
                { icon: "🌿", label: "Check in Bienestar", action: "goto", nodeId: "checkin-bienestar" },
                { icon: "📍", label: "Ubicaciones JamCam", action: "goto", nodeId: "ubicaciones" },
                { icon: "🎯", label: "Actividades", action: "goto", nodeId: "actividades" },
                { icon: "🧠", label: "Listening Ears", action: "goto", nodeId: "listening-ears" },
                { icon: "ℹ️", label: "Info General", action: "goto", nodeId: "info-general" },
                { icon: "🗣️", label: "Tu voz cuenta", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🌍", label: "Datos curiosos", action: "goto", nodeId: "datos-curiosos" }
            ]
        },
        "checkin-bienestar": {
            message: "🦅 Estoy aquí para ayudarte a preparar tu llegada y hacer tu registro previo.\n\nVamos a hacer este proceso rápido y fácil.",
            options: [
                { icon: "✅", label: "Estoy Listo", action: "goto", nodeId: "checkin-pais" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "checkin-pais": {
            message: "🌎 Primero, cuéntame: ¿de qué país vienes?",
            options: [
                { icon: "🇨🇴", label: "Colombia", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇧🇷", label: "Brasil", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇦🇷", label: "Argentina", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇦", label: "Canadá", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇭🇳", label: "Honduras", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇷", label: "Costa Rica", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇲🇽", label: "México", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇱", label: "Chile", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇪🇨", label: "Ecuador", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇩🇴", label: "República Dominicana", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇸🇻", label: "El Salvador", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇬🇹", label: "Guatemala", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇳🇮", label: "Nicaragua", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇦", label: "Panamá", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇾", label: "Paraguay", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇪", label: "Perú", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇷", label: "Puerto Rico", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇻🇪", label: "Venezuela", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇸🇪", label: "Suecia", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇦🇺", label: "Australia", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇱", label: "Polonia", action: "goto", nodeId: "checkin-rol" },
                { icon: "🌍", label: "FSI", action: "goto", nodeId: "checkin-rol" },
                { icon: "🌍", label: "CICE", action: "goto", nodeId: "checkin-rol" },
                { icon: "🔙", label: "Atrás", action: "goto", nodeId: "checkin-bienestar" }
            ]
        },
        "checkin-rol": {
            message: "🙋 Selecciona tu rol en el evento:",
            options: [
                { icon: "👦", label: "Scout", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🧑", label: "Caminante", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👨", label: "Rover", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🤝", label: "EIS / Servicio", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👔", label: "Jefe de Delegación", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👤", label: "Adulto Acomp", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "📋", label: "Staff", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🔙", label: "Atrás", action: "goto", nodeId: "checkin-pais" }
            ]
        },
        "checkin-sintomas": {
            message: "🧑‍⚕️ Síntomas o malestares",
            options: [
                { icon: "😣", label: "Dolor de cabeza", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤢", label: "Dolor de estómago", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤮", label: "Náuseas", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🌡️", label: "Fiebre", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🌡️", label: "Sensación de Fiebre", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😷", label: "Tos", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😤", label: "Problema al respirar", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😵", label: "Mareo o debilidad", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🩹", label: "Lesión reciente", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤧", label: "Alergia activa", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "✅", label: "Ninguno", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🔙", label: "Atrás", action: "goto", nodeId: "checkin-rol" }
            ]
        },
        "checkin-apoyo": {
            message: "¿Necesitas Apoyo Especial?\n\n✨ Si necesitas apoyo especial durante tu llegada o tu estadía, puedo transmitir la información al equipo de Hospitalidad y Protocolo.",
            options: [
                { icon: "✅", label: "Sí, necesito", action: "goto", nodeId: "checkin-apoyo-si" },
                { icon: "❌", label: "No, todo bien", action: "goto", nodeId: "checkin-apoyo-no" },
                { icon: "🔙", label: "Atrás", action: "goto", nodeId: "checkin-sintomas" }
            ]
        },
        "checkin-apoyo-si": {
            message: "Gracias por informarnos.\n\nAl llegar al Welcome Center, acércate al equipo de Protocolo y Hospitalidad e indica que solicitaste apoyo médico en el check-in de bienestar. Te acompañaremos con el personal de salud.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "checkin-apoyo-no": {
            message: "Gracias por informarnos. Si más adelante necesitas apoyo, acércate con confianza al Welcome Center o al equipo de Protocolo y Hospitalidad. Estamos atentos para ayudarte.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        ubicaciones: {
            message: "📖 Aquí encontrarás el mapa general del JAMCAM 2025, donde podrás identificar todas las ubicaciones principales del evento en un solo lugar.",
            image: "/images/mapa-jamcam.png",
            download: "/images/mapa-jamcam.png",
            downloadLabel: "Descargar mapa",
            options: [
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        actividades: {
            message: "🎯 Actividades\n\nSelecciona tu programa:",
            options: [
                { icon: "🏕️", label: "Jamboree", action: "goto", nodeId: "actividades-jamboree" },
                { icon: "⛺", label: "Camporee", action: "goto", nodeId: "actividades-camporee" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-jamboree": {
            message: "Selecciona tu Subcampo:",
            options: [
                { icon: "🔰", label: "Urá Jürú", action: "goto", nodeId: "actividades-jamboree-juru" },
                { icon: "🔰", label: "Urá Chamí", action: "goto", nodeId: "actividades-jamboree-chami" },
                { icon: "🔙", label: "Atrás", action: "goto", nodeId: "actividades" }
            ]
        },
        "actividades-camporee": {
            message: "Selecciona tu Subcampo:",
            options: [
                { icon: "🔰", label: "Urá Dó", action: "goto", nodeId: "actividades-camporee-do" },
                { icon: "🔰", label: "Urá Chi", action: "goto", nodeId: "actividades-camporee-chi" },
                { icon: "🔙", label: "Atrás", action: "goto", nodeId: "actividades" }
            ]
        },
        "actividades-jamboree-juru": {
            message: "📅 Cronograma de actividades - Urá Jürú\n\nAquí puedes descargar el cronograma completo de actividades para tu subcampo.",
            download: "/docs/horario-jamboree.pdf",
            downloadLabel: "Descargar cronograma",
            options: [
                { icon: "🔙", label: "Volver a Actividades", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-jamboree-chami": {
            message: "📅 Cronograma de actividades - Urá Chamí\n\nAquí puedes descargar el cronograma completo de actividades para tu subcampo.",
            download: "/docs/horario-jamboree.pdf",
            downloadLabel: "Descargar cronograma",
            options: [
                { icon: "🔙", label: "Volver a Actividades", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-camporee-do": {
            message: "📅 Cronograma de actividades - Urá Dó\n\nAquí puedes descargar el cronograma completo de actividades para tu subcampo.",
            download: "/docs/horario-camporee.pdf",
            downloadLabel: "Descargar cronograma",
            options: [
                { icon: "🔙", label: "Volver a Actividades", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-camporee-chi": {
            message: "📅 Cronograma de actividades - Urá Chi\n\nAquí puedes descargar el cronograma completo de actividades para tu subcampo.",
            download: "/docs/horario-camporee.pdf",
            downloadLabel: "Descargar cronograma",
            options: [
                { icon: "🔙", label: "Volver a Actividades", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "listening-ears": {
            message: "🧠 LISTENING EARS\n\nRecuerda que tenemos personas listas para escucharte 💚.",
            options: [
                { icon: "🙋", label: "Solicitar Apoyo", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-solicitar-apoyo": {
            message: "Este es un espacio seguro para escucharte y acompañarte.\n\nAquí puedes tomarte un momento para identificar cómo te sientes y encontrar apoyo, a tu ritmo.\n\n¿Quieres compartir cómo te sientes ahora mismo?",
            options: [
                { icon: "😊", label: "Bien", action: "goto", nodeId: "le-bien" },
                { icon: "😟", label: "Ansioso", action: "goto", nodeId: "le-ansioso" },
                { icon: "😢", label: "Triste", action: "goto", nodeId: "le-triste" },
                { icon: "😡", label: "Enojado", action: "goto", nodeId: "le-enojado" },
                { icon: "🔙", label: "Atrás", action: "goto", nodeId: "listening-ears" }
            ]
        },
        "le-bien": {
            message: "¡Qué bueno que lo compartes! 💚 A veces solo necesitamos conversar un rato.\n\nPuedes acercarte al 🛖 Punto de Escucha Scout.",
            image: "/images/mapa-jamcam.png",
            options: [
                { icon: "🔙", label: "Volver", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-ansioso": {
            message: "Gracias por decirlo 🙏. Cuando la ansiedad aparece, lo mejor es hacer una pausa.\n\nPrueba esto ahora mismo 👇\n\n1️⃣ Respira profundo: inhala contando hasta 4, exhala contando hasta 6.\n2️⃣ Bebe un poco de agua.",
            options: [
                { icon: "✅", label: "Me siento mejor", action: "goto", nodeId: "le-mejor" },
                { icon: "🛖", label: "Punto de atención", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Volver", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-triste": {
            message: "Entiendo cómo te sientes 💚. La tristeza también forma parte de la vida, y es normal hablar de ello.\n\nTienes dos opciones:\n\nPuedes acercarte al 🛖 Punto de Escucha Scout para hablar con alguien cara a cara.\n\nO podemos guiarte con una técnica breve de respiración para ayudarte a encontrar calma.",
            options: [
                { icon: "🛖", label: "Punto de atención", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🧘", label: "Técnica breve", action: "goto", nodeId: "le-tecnica-breve" },
                { icon: "🔙", label: "Volver", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-enojado": {
            message: "Gracias por reconocerlo 💪. El enojo puede sentirse fuerte, pero también se puede canalizar.\n\nTe recomiendo:\n\n1️⃣ Caminar un par de minutos antes de responder a alguien.\n2️⃣ Si lo prefieres, podemos guiarte con una técnica breve de respiración para soltar tensión.",
            options: [
                { icon: "✅", label: "Me siento mejor", action: "goto", nodeId: "le-mejor" },
                { icon: "🧘", label: "Técnica breve", action: "goto", nodeId: "le-tecnica-breve" },
                { icon: "🛖", label: "Punto de atención", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Volver", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-mejor": {
            message: "Nos alegra saber que ahora te sientes mejor.\n\nRecuerda que no estás solo/a: si en algún momento vuelves a necesitar apoyo, aquí estaremos para acompañarte.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-tecnica-breve": {
            message: "🧘 Técnica de Respiración\n\nHagamos una pausa juntos:\n\n1. Inhala profundamente durante 4 segundos\n2. Mantén la respiración durante 2 segundos\n3. Exhala lentamente durante 6 segundos\n4. Repite 3 veces\n\n¿Te sientes mejor?",
            options: [
                { icon: "✅", label: "Sí, me siento mejor", action: "goto", nodeId: "le-mejor" },
                { icon: "🛖", label: "Necesito más apoyo", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Volver", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-punto-atencion": {
            message: "Puedes acercarte al 🛖 Punto de Escucha Scout.\n\nGracias por confiar en nosotros.\n\nDentro del campamento contamos con un equipo preparado para brindar apoyo emocional.",
            image: "/images/mapa-jamcam.png",
            options: [
                { icon: "🔙", label: "Volver", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-general": {
            message: "ℹ️ Información General\n\nTengo datos útiles para ti 📖:",
            options: [
                { icon: "🕒", label: "Boletín General", action: "goto", nodeId: "info-boletin" },
                { icon: "📌", label: "Código Conducta", action: "goto", nodeId: "info-codigo-conducta" },
                { icon: "☎️", label: "Emergencia 911", action: "goto", nodeId: "info-emergencia" },
                { icon: "🛡️", label: "Safe From Harm", action: "goto", nodeId: "info-safe-from-harm" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-boletin": {
            message: "🕒 Boletín General\n\n📎 Te anexamos el Boletín General del JamCam, donde encontrarás 🧭 toda la información oficial, 📅 actualizada y relevante para tu participación en el evento.",
            download: "/docs/boletin-jamcam-5.pdf",
            downloadLabel: "Descargar boletín",
            options: [
                { icon: "🔙", label: "Volver a Info General", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-codigo-conducta": {
            message: "📌 Código de Conducta JAMCAM 2025\n\nEste Código de Conducta es una guía para cuidarnos entre todos y vivir el JAMCAM en un ambiente seguro, respetuoso e inclusivo.\n\nAquí encontrarás las pautas que nos ayudan a convivir con respeto, proteger nuestro bienestar físico y emocional, y representar con orgullo los valores del Movimiento Scout durante el evento.\n\nAlgunos puntos clave:\n\n1️⃣ Respeto entre participantes y voluntarios.\n2️⃣ No se permite consumo de alcohol ni sustancias.\n3️⃣ Cuidado de instalaciones y medio ambiente.\n4️⃣ Participación activa en las actividades asignadas.\n\n👉 Puedes leer el reglamento completo aquí:",
            download: "/docs/asp-codigo-de-conducta.pdf",
            downloadLabel: "Descargar código de conducta",
            options: [
                { icon: "🔙", label: "Volver a Info General", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-emergencia": {
            message: "☎️ Emergencia 911\n\nAquí tienes los contactos de emergencia del campamento 📞:\n\n🚑 Salud / Atención psicológica: +57 XXX XXX XXXX\n🚨 Seguridad campamento: +57 XXX XXX XXXX\n📢 Organización general: +57 XXX XXX XXXX",
            options: [
                { icon: "🔙", label: "Volver a Info General", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-safe-from-harm": {
            message: "🛡️ Safe From Harm\n\nSelecciona la opción que necesitas:",
            options: [
                { icon: "ℹ️", label: "Info General", action: "link", url: "https://www.jamcam2025.com/safe-from-harm" },
                { icon: "📚", label: "Curso de Safe from Harm", action: "link", url: "https://learn.scout.org/resource/safe-harm-interamerican-scout-jamcam-learning-path" },
                { icon: "🔙", label: "Volver a Info General", action: "goto", nodeId: "info-general" }
            ]
        },
        "tu-voz-cuenta": {
            message: "🗣️ Tu voz cuenta\n\nEste espacio está pensado para que puedas compartir tu experiencia y percepción del JAMCAM.\nA través de encuestas breves, podrás ayudarnos a identificar qué está funcionando bien y en qué podemos mejorar, para seguir cuidando la experiencia de todos.",
            options: [
                { icon: "✅", label: "Encuesta bienvenida", action: "goto", nodeId: "encuesta-bienvenida" },
                { icon: "📋", label: "Encuesta diaria", action: "goto", nodeId: "encuesta-diaria" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-bienvenida": {
            message: "📊 Encuesta bienvenida\n\n(Información próximamente disponible)",
            options: [
                { icon: "🔙", label: "Volver", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-diaria": {
            message: "📊 Encuesta diaria\n\n(Información próximamente disponible)",
            options: [
                { icon: "🔙", label: "Volver", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-curiosos": {
            message: "🥤 ¿Sabías que \"Cholao\" es una bebida típica de Cali?\n\nCali está ubicada en la región Pacífica de Colombia, conocida por su diversidad cultural, alegría y sabor.\n\n👉 ¿Quieres conocer más datos curiosos sobre Cali y el JamCam?",
            options: [
                { icon: "🌍", label: "Otro dato curioso", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-curiosos-menu": {
            message: "🌍 Elige un dato curioso para descubrir:",
            options: [
                { icon: "🌎", label: "JamCam Internacional", action: "goto", nodeId: "datos-jamcam" },
                { icon: "🐦", label: "Cholao te acompaña", action: "goto", nodeId: "datos-cholao" },
                { icon: "☁️", label: "Sucursal del Cielo", action: "goto", nodeId: "datos-sucursal" },
                { icon: "💃", label: "Capital de la Salsa", action: "goto", nodeId: "datos-salsa" },
                { icon: "🏛️", label: "Historia de Cali", action: "goto", nodeId: "datos-historia" },
                { icon: "👥", label: "Tercera ciudad", action: "goto", nodeId: "datos-poblacion" },
                { icon: "🗿", label: "Cristo Rey", action: "goto", nodeId: "datos-cristo" },
                { icon: "🎵", label: "Festival Petronio", action: "goto", nodeId: "datos-petronio" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-jamcam": {
            message: "🌎 El JamCam 2025 reúne a participantes de más de 20 países, convirtiéndose en uno de los encuentros scouts internacionales más grandes de la región.",
            options: [
                { icon: "🌍", label: "Otro dato curioso", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-cholao": {
            message: "🐦 Cholao no solo informa… también acompaña, está diseñado para ayudarte, orientarte y escucharte durante todo el evento.",
            options: [
                { icon: "🌍", label: "Otro dato curioso", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-sucursal": {
            message: "☁️ Cali es conocida como la \"Sucursal del Cielo\", un apodo que refleja la belleza de sus paisajes, su clima cálido y la calidez de su gente.",
            options: [
                { icon: "🌍", label: "Otro dato curioso", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-salsa": {
            message: "💃 Cali es reconocida como la \"Capital Mundial de la Salsa\". La ciudad vibra con esta música y cuenta con academias, festivales y una cultura salsera única que atrae a bailarines de todo el mundo.",
            options: [
                { icon: "🌍", label: "Otro dato curioso", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-historia": {
            message: "🏛️ Santiago de Cali fue fundada el 25 de julio de 1536 por Sebastián de Belalcázar, lo que la convierte en una de las ciudades más antiguas de América. Tiene más de 480 años de historia rica en cultura y tradición.",
            options: [
                { icon: "🌍", label: "Otro dato curioso", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-poblacion": {
            message: "👥 Cali es la tercera ciudad más poblada de Colombia, después de Bogotá y Medellín. Es el principal centro económico y cultural del suroccidente colombiano.",
            options: [
                { icon: "🌍", label: "Otro dato curioso", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-cristo": {
            message: "🗿 En el cerro de los Cristales se encuentra el monumento al Cristo Rey, una imponente estatua de 26 metros de altura que domina la ciudad y es uno de los símbolos más emblemáticos de Cali.",
            options: [
                { icon: "🌍", label: "Otro dato curioso", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-petronio": {
            message: "🎵 Cali es sede del Festival de Música del Pacífico Petronio Álvarez, el evento más importante de música afrocolombiana del país, que celebra la riqueza cultural del Pacífico colombiano cada año.",
            options: [
                { icon: "🌍", label: "Otro dato curioso", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        }
    }
};

