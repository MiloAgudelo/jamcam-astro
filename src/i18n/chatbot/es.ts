export default {
    title: "Cholao",
    close: "Cerrar",
    restart: "🔄 Reiniciar",
    typing: "Escribiendo",
    nodes: {
        welcome: {
            message: "👋 ¡Hola! Soy Cholao, tu asistente digital en el JamCam 2025.\n\nEstoy aquí para guiarte en actividades, ubicaciones, servicios y apoyo durante todo el evento.\n\n👉 Dime, ¿qué necesitas ahora?",
            options: [
                { icon: "🏆", label: "Desafíos JamCam", action: "goto", nodeId: "desafios-menu" },
                { icon: "🌿", label: "Check in Bienestar", action: "goto", nodeId: "checkin-bienestar" },
                { icon: "📍", label: "Ubicaciones JamCam", action: "goto", nodeId: "ubicaciones" },
                { icon: "🎯", label: "Actividades", action: "goto", nodeId: "actividades" },
                { icon: "🧠", label: "Listening Ears", action: "goto", nodeId: "listening-ears" },
                { icon: "ℹ️", label: "Info General", action: "goto", nodeId: "info-general" },
                { icon: "🗣️", label: "Tu opinión cuenta", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🌍", label: "Datos curiosos", action: "goto", nodeId: "datos-curiosos" }
            ]
        },
        "desafios-menu": {
            message: "🏆 DESAFÍOS JAMCAM 2025\n\n¡Pon a prueba tus conocimientos y gana premios!\n\nElige uno de los 3 desafíos disponibles:\n\n🦜 **Aves Guardianas** - Descubre las 4 aves y sus valores sagrados\n\n🌈 **Viaje de Cholao** - Conoce la historia ancestral de nuestra guacamaya\n\n⛺ **Guardianes del Campamento** - Demuestra que conoces el JamCam\n\n⚠️ Cada desafío tiene 7 preguntas. Si fallas, ese desafío se bloqueará permanentemente.\n\n¿Qué desafío quieres intentar?",
            options: [
                { icon: "🦜", label: "Aves Guardianas", action: "goto", nodeId: "desafio-inicio" },
                { icon: "🌈", label: "Viaje de Cholao", action: "goto", nodeId: "desafio2-inicio" },
                { icon: "⛺", label: "Guardianes del Campamento", action: "goto", nodeId: "desafio3-inicio" },
                { icon: "🔙", label: "Volver al menú", action: "goto", nodeId: "welcome" }
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
            message: "📍 Ubicaciones JamCam\n\nSelecciona el mapa que necesitas:",
            options: [
                { icon: "🗺️", label: "Mapa General", action: "goto", nodeId: "ubicaciones-general" },
                { icon: "🏕️", label: "Mapa de Servicios", action: "goto", nodeId: "ubicaciones-servicios" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "ubicaciones-general": {
            message: "🗺️ Mapa General del JAMCAM 2025\n\nAquí encontrarás el mapa general del evento, donde podrás identificar todas las ubicaciones principales del campamento.",
            image: "/images/mapa-jamcam.png",
            download: "/images/mapa-jamcam.png",
            downloadLabel: "Descargar mapa general",
            options: [
                { icon: "🔙", label: "Volver a Ubicaciones", action: "goto", nodeId: "ubicaciones" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "ubicaciones-servicios": {
            message: "🏕️ Mapa de Servicios JamCam 2025\n\nAquí encontrarás la ubicación de todos los servicios: baños, duchas, puntos de hidratación, zonas comerciales, áreas de actividades y más.",
            image: "/images/mapa-servicios.png",
            download: "/docs/mapa-servicios.pdf",
            downloadLabel: "Descargar mapa de servicios (PDF)",
            options: [
                { icon: "🔙", label: "Volver a Ubicaciones", action: "goto", nodeId: "ubicaciones" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
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
                { icon: "☎️", label: "Linea de Emergencia", action: "goto", nodeId: "info-emergencia" },
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
            message: "🚨 LÍNEA DE EMERGENCIAS – JAMCAM COLOMBIA 2025 🚨\n\nEquipo EIS, les recordamos que ante cualquier emergencia médica, situación de riesgo o necesidad de apoyo inmediato, está habilitada la siguiente línea oficial:\n\n📞 +57 311 690 9423\n\n👉 Úsala cuando:\n\n• Exista una emergencia médica.\n• Se presente una situación de riesgo\n• Un participante o voluntario requiera ayuda inmediata.\n\n🧭 Recuerda aplicar el procedimiento PAS:\nProteger – Avisar – Socorrer",
            options: [
                { icon: "📞", label: "Llamar ahora", action: "link", url: "tel:+573116909423" },
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
            message: "🗣️ Tu opinión cuenta\n\nEste espacio está pensado para que puedas compartir tu experiencia y percepción del JAMCAM.\nA través de encuestas breves, podrás ayudarnos a identificar qué está funcionando bien y en qué podemos mejorar, para seguir cuidando la experiencia de todos.",
            options: [
                { icon: "✅", label: "Encuesta bienvenida", action: "goto", nodeId: "encuesta-bienvenida" },
                { icon: "📋", label: "Encuesta diaria", action: "goto", nodeId: "encuesta-diaria" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-bienvenida": {
            message: "📊 Encuesta de Llegada y Bienvenida\n\nEsta encuesta es solo para jefes de contingente.\n\nTu opinión es muy importante para nosotros. Por favor, completa la encuesta para ayudarnos a mejorar la experiencia del JamCam.\n\n🔗 https://forms.cloud.microsoft/r/75WqDHq5LP",
            options: [
                { icon: "📝", label: "Abrir encuesta", action: "link", url: "https://forms.cloud.microsoft/r/75WqDHq5LP" },
                { icon: "🔙", label: "Volver", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-diaria": {
            message: "📊 Encuesta de evaluación diaria\n\nTu feedback diario nos ayuda a mejorar continuamente el evento.\n\nPor favor, comparte tu experiencia del día.\n\n🔗 https://forms.cloud.microsoft/r/VzQeNiMw29",
            options: [
                { icon: "📝", label: "Abrir encuesta", action: "link", url: "https://forms.cloud.microsoft/r/VzQeNiMw29" },
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
        },
        "desafio-bloqueado": {
            message: "🔒 Desafío Bloqueado\n\nLo sentimos, ya has participado en el Desafío de las Aves Guardianas con una respuesta incorrecta.\n\nCada participante tiene solo una oportunidad para completar el desafío.\n\n¡Gracias por tu participación y sigue disfrutando del JamCam 2025!",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-inicio": {
            message: "🦜 JAMCAM 2025\n\nEL DESAFÍO DE LAS AVES GUARDIANAS\n\n✨ Américas Unidas Por La Paz ✨\n\n¿Estás listo para comenzar esta aventura?\n\nDeberás responder 3 preguntas correctamente para completar el desafío.",
            options: [
                { icon: "🚀", label: "¡Comenzar desafío!", action: "goto", nodeId: "desafio-nivel1" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel1": {
            message: "🔹 NIVEL 1 – EL ORIGEN\n\n¿Quién es la guacamaya legendaria que guía el JamCam 2025?",
            options: [
                { icon: "A)", label: "Aní de Pico Liso", action: "goto", nodeId: "desafio-nivel1-incorrecto" },
                { icon: "B)", label: "Cholao", action: "goto", nodeId: "desafio-nivel1-correcto" },
                { icon: "C)", label: "Pato de Moscovia", action: "goto", nodeId: "desafio-nivel1-incorrecto" },
                { icon: "D)", label: "Tangara Azul Grisácea", action: "goto", nodeId: "desafio-nivel1-incorrecto" }
            ]
        },
        "desafio-nivel1-correcto": {
            message: "✅ ¡Correcto!\n\n¡Has demostrado conocer el origen! Cholao es la guacamaya legendaria que nos guía en esta aventura.\n\nContinúa al Nivel 2.",
            options: [
                { icon: "➡️", label: "Nivel 2", action: "goto", nodeId: "desafio-nivel2" }
            ]
        },
        "desafio-nivel1-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de las Aves Guardianas ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel2": {
            message: "🔹 NIVEL 2 – LAS AVES GUARDIANAS\n\n¿Qué valor está desapareciendo según el Loro de Cabeza Azul?",
            options: [
                { icon: "A)", label: "La cooperación", action: "goto", nodeId: "desafio-nivel2-incorrecto" },
                { icon: "B)", label: "La libertad", action: "goto", nodeId: "desafio-nivel2-incorrecto" },
                { icon: "C)", label: "La empatía", action: "goto", nodeId: "desafio-nivel2-correcto" },
                { icon: "D)", label: "La creatividad", action: "goto", nodeId: "desafio-nivel2-incorrecto" }
            ]
        },
        "desafio-nivel2-correcto": {
            message: "✅ ¡Muy bien!\n\n¡Has escuchado a las aves guardianas! La empatía es el valor que el Loro de Cabeza Azul protege.\n\nAvanza al Nivel 3.",
            options: [
                { icon: "➡️", label: "Nivel 3 (Final)", action: "goto", nodeId: "desafio-nivel3" }
            ]
        },
        "desafio-nivel2-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de las Aves Guardianas ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel3": {
            message: "🔹 NIVEL 3 – EL VUELO FINAL\n\n¿Cuántos días dura la aventura del JamCam 2025?",
            options: [
                { icon: "A)", label: "Cuatro días", action: "goto", nodeId: "desafio-nivel3-incorrecto" },
                { icon: "B)", label: "Cinco días", action: "goto", nodeId: "desafio-nivel3-incorrecto" },
                { icon: "C)", label: "Seis días", action: "goto", nodeId: "desafio-nivel3-correcto" },
                { icon: "D)", label: "Siete días", action: "goto", nodeId: "desafio-nivel3-incorrecto" }
            ]
        },
        "desafio-nivel3-correcto": {
            message: "✅ ¡Muy bien!\n\n¡Has avanzado al siguiente nivel! Continúa con el desafío.\n\nAvanza al Nivel 4.",
            options: [
                { icon: "➡️", label: "Nivel 4", action: "goto", nodeId: "desafio-nivel4" }
            ]
        },
        "desafio-nivel3-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de las Aves Guardianas ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel4": {
            message: "🔹 NIVEL 4 – LOS VALORES SAGRADOS\n\n¿Qué ave entregó a Cholao el valor de la solidaridad?",
            options: [
                { icon: "A)", label: "Loro de Cabeza Azul", action: "goto", nodeId: "desafio-nivel4-incorrecto" },
                { icon: "B)", label: "Pato de Moscovia", action: "goto", nodeId: "desafio-nivel4-incorrecto" },
                { icon: "C)", label: "Tangara Azul Grisácea", action: "goto", nodeId: "desafio-nivel4-correcto" },
                { icon: "D)", label: "Aní de Pico Liso", action: "goto", nodeId: "desafio-nivel4-incorrecto" }
            ]
        },
        "desafio-nivel4-correcto": {
            message: "✅ ¡Excelente!\n\nLa Tangara Azul Grisácea ofreció la solidaridad para que los jóvenes disfruten la vida en comunidad.\n\nAvanza al Nivel 5.",
            options: [
                { icon: "➡️", label: "Nivel 5", action: "goto", nodeId: "desafio-nivel5" }
            ]
        },
        "desafio-nivel4-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de las Aves Guardianas ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel5": {
            message: "🔹 NIVEL 5 – EL TEMA OFICIAL\n\n¿Cuál es el tema oficial del JamCam 2025?",
            options: [
                { icon: "A)", label: "Unidos por la Naturaleza", action: "goto", nodeId: "desafio-nivel5-incorrecto" },
                { icon: "B)", label: "Américas Unidas por la Paz", action: "goto", nodeId: "desafio-nivel5-correcto" },
                { icon: "C)", label: "Juntos por un Futuro Mejor", action: "goto", nodeId: "desafio-nivel5-incorrecto" },
                { icon: "D)", label: "Scouts sin Fronteras", action: "goto", nodeId: "desafio-nivel5-incorrecto" }
            ]
        },
        "desafio-nivel5-correcto": {
            message: "✅ ¡Perfecto!\n\n'Américas Unidas por la Paz' es el tema oficial, inspirado en la declaratoria de la ONU del 2025 como el Año Internacional de la Paz y la Confianza.\n\nAvanza al Nivel 6.",
            options: [
                { icon: "➡️", label: "Nivel 6", action: "goto", nodeId: "desafio-nivel6" }
            ]
        },
        "desafio-nivel5-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de las Aves Guardianas ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel6": {
            message: "🔹 NIVEL 6 – LA CIUDAD ANFITRIONA\n\n¿Por qué es conocida mundialmente la ciudad de Cali?",
            options: [
                { icon: "A)", label: "Capital del Café", action: "goto", nodeId: "desafio-nivel6-incorrecto" },
                { icon: "B)", label: "Capital Mundial de la Salsa", action: "goto", nodeId: "desafio-nivel6-correcto" },
                { icon: "C)", label: "Ciudad de la Eterna Primavera", action: "goto", nodeId: "desafio-nivel6-incorrecto" },
                { icon: "D)", label: "Puerta de Oro de Colombia", action: "goto", nodeId: "desafio-nivel6-incorrecto" }
            ]
        },
        "desafio-nivel6-correcto": {
            message: "✅ ¡Increíble!\n\nCali es reconocida como la Capital Mundial de la Salsa, una ciudad vibrante con rica historia y cultura incomparable.\n\nAvanza al Nivel 7 (FINAL).",
            options: [
                { icon: "➡️", label: "Nivel 7 (FINAL)", action: "goto", nodeId: "desafio-nivel7" }
            ]
        },
        "desafio-nivel6-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de las Aves Guardianas ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel7": {
            message: "🔹 NIVEL 7 – LA ÚLTIMA PRUEBA\n\n¿Qué valor le encargó el Aní de Pico Liso a Cholao?",
            options: [
                { icon: "A)", label: "La libertad", action: "goto", nodeId: "desafio-nivel7-incorrecto" },
                { icon: "B)", label: "La solidaridad", action: "goto", nodeId: "desafio-nivel7-incorrecto" },
                { icon: "C)", label: "La cooperación", action: "goto", nodeId: "desafio-nivel7-correcto" },
                { icon: "D)", label: "La empatía", action: "goto", nodeId: "desafio-nivel7-incorrecto" }
            ]
        },
        "desafio-nivel7-correcto": {
            message: "✅ ¡CORRECTO! 🎉🏆\n\n¡Has completado el Desafío de las Aves Guardianas con los 7 niveles!\n\n🏁 INSTRUCCIÓN FINAL:\n\n📝 RECLAMA TU PREMIO AQUÍ:\nhttps://forms.gle/PytYXN9hoELX8dmk8\n\n*El primer registro válido será el ganador del concurso de Cholao Store.*\n\nDirígete también al WELCOME CENTER para validar tu participación.\n\n📍 INFORMACIÓN:\n• Completa todos los campos del formulario\n• Un premio por persona\n• Premios no transferibles\n• Decisiones del staff son finales\n• Dinámica válida hasta agotar premios",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel7-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de las Aves Guardianas ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-bloqueado": {
            message: "🔒 Desafío Bloqueado\n\nLo sentimos, ya has participado en el Desafío del Viaje de Cholao con una respuesta incorrecta.\n\nCada participante tiene solo una oportunidad para completar el desafío.\n\n¡Gracias por tu participación y sigue disfrutando del JamCam 2025!",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-inicio": {
            message: "🌈 JAMCAM 2025\n\nEL VIAJE DE CHOLAO\n\n✨ El Legado Ancestral ✨\n\n¿Estás listo para descubrir la historia de Cholao?\n\nDeberás responder 7 preguntas correctamente para completar el desafío.",
            options: [
                { icon: "🚀", label: "¡Comenzar desafío!", action: "goto", nodeId: "desafio2-nivel1" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel1": {
            message: "🔹 NIVEL 1 – EL NACIMIENTO\n\n¿De qué nació Cholao?",
            options: [
                { icon: "A)", label: "De un huevo dorado", action: "goto", nodeId: "desafio2-nivel1-incorrecto" },
                { icon: "B)", label: "De los sueños y esperanzas de los pueblos de América", action: "goto", nodeId: "desafio2-nivel1-correcto" },
                { icon: "C)", label: "De las montañas más altas", action: "goto", nodeId: "desafio2-nivel1-incorrecto" },
                { icon: "D)", label: "De un rayo de sol", action: "goto", nodeId: "desafio2-nivel1-incorrecto" }
            ]
        },
        "desafio2-nivel1-correcto": {
            message: "✅ ¡Correcto!\n\nCholao nació de todos los sueños y esperanzas que los pueblos de América habían compartido alguna vez.\n\nContinúa al Nivel 2.",
            options: [
                { icon: "➡️", label: "Nivel 2", action: "goto", nodeId: "desafio2-nivel2" }
            ]
        },
        "desafio2-nivel1-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío del Viaje de Cholao ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel2": {
            message: "🔹 NIVEL 2 – EL GUARDIÁN\n\n¿Cuánto tiempo llevaba Cholao volando de incógnito observando las culturas de América?",
            options: [
                { icon: "A)", label: "Décadas", action: "goto", nodeId: "desafio2-nivel2-incorrecto" },
                { icon: "B)", label: "Siglos", action: "goto", nodeId: "desafio2-nivel2-correcto" },
                { icon: "C)", label: "Años", action: "goto", nodeId: "desafio2-nivel2-incorrecto" },
                { icon: "D)", label: "Milenios", action: "goto", nodeId: "desafio2-nivel2-incorrecto" }
            ]
        },
        "desafio2-nivel2-correcto": {
            message: "✅ ¡Muy bien!\n\nDurante siglos, Cholao voló de incógnito de norte a sur, observando la evolución de las culturas y aprendiendo de cada tradición.\n\nAvanza al Nivel 3.",
            options: [
                { icon: "➡️", label: "Nivel 3", action: "goto", nodeId: "desafio2-nivel3" }
            ]
        },
        "desafio2-nivel2-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío del Viaje de Cholao ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel3": {
            message: "🔹 NIVEL 3 – LOS COLORES\n\n¿Qué representan los colores vibrantes del plumaje de Cholao?",
            options: [
                { icon: "A)", label: "Las flores de Colombia", action: "goto", nodeId: "desafio2-nivel3-incorrecto" },
                { icon: "B)", label: "Los colores de las banderas americanas", action: "goto", nodeId: "desafio2-nivel3-correcto" },
                { icon: "C)", label: "El arcoíris", action: "goto", nodeId: "desafio2-nivel3-incorrecto" },
                { icon: "D)", label: "Las aves del continente", action: "goto", nodeId: "desafio2-nivel3-incorrecto" }
            ]
        },
        "desafio2-nivel3-correcto": {
            message: "✅ ¡Excelente!\n\nLas plumas de Cholao brillan con todos los colores de las banderas americanas, representando la unidad del continente.\n\nAvanza al Nivel 4.",
            options: [
                { icon: "➡️", label: "Nivel 4", action: "goto", nodeId: "desafio2-nivel4" }
            ]
        },
        "desafio2-nivel3-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío del Viaje de Cholao ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel4": {
            message: "🔹 NIVEL 4 – LA MISIÓN\n\n¿Qué poder especial tiene el llamado de Cholao?",
            options: [
                { icon: "A)", label: "Controlar el clima", action: "goto", nodeId: "desafio2-nivel4-incorrecto" },
                { icon: "B)", label: "Despertar el recuerdo ancestral de que América es una gran familia", action: "goto", nodeId: "desafio2-nivel4-correcto" },
                { icon: "C)", label: "Hacer volar a las personas", action: "goto", nodeId: "desafio2-nivel4-incorrecto" },
                { icon: "D)", label: "Curar enfermedades", action: "goto", nodeId: "desafio2-nivel4-incorrecto" }
            ]
        },
        "desafio2-nivel4-correcto": {
            message: "✅ ¡Perfecto!\n\nEl llamado de Cholao tiene el poder de despertar en cada corazón joven el recuerdo ancestral de que todas las naciones pertenecen a una misma gran familia: América.\n\nAvanza al Nivel 5.",
            options: [
                { icon: "➡️", label: "Nivel 5", action: "goto", nodeId: "desafio2-nivel5" }
            ]
        },
        "desafio2-nivel4-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío del Viaje de Cholao ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel5": {
            message: "🔹 NIVEL 5 – LOS CUATRO VALORES\n\n¿Cuántos valores fundamentales custodiaban las aves guardianas?",
            options: [
                { icon: "A)", label: "Tres valores", action: "goto", nodeId: "desafio2-nivel5-incorrecto" },
                { icon: "B)", label: "Cinco valores", action: "goto", nodeId: "desafio2-nivel5-incorrecto" },
                { icon: "C)", label: "Cuatro valores", action: "goto", nodeId: "desafio2-nivel5-correcto" },
                { icon: "D)", label: "Seis valores", action: "goto", nodeId: "desafio2-nivel5-incorrecto" }
            ]
        },
        "desafio2-nivel5-correcto": {
            message: "✅ ¡Increíble!\n\nLas cuatro aves guardianas custodiaban cuatro valores fundamentales: cooperación, empatía, solidaridad y libertad.\n\nAvanza al Nivel 6.",
            options: [
                { icon: "➡️", label: "Nivel 6", action: "goto", nodeId: "desafio2-nivel6" }
            ]
        },
        "desafio2-nivel5-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío del Viaje de Cholao ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel6": {
            message: "🔹 NIVEL 6 – EL TESORO\n\n¿Qué era el tesoro más preciado del continente que Cholao guardaba en su memoria?",
            options: [
                { icon: "A)", label: "El oro y las riquezas", action: "goto", nodeId: "desafio2-nivel6-incorrecto" },
                { icon: "B)", label: "Las historias de unión y hermandad", action: "goto", nodeId: "desafio2-nivel6-correcto" },
                { icon: "C)", label: "Los templos antiguos", action: "goto", nodeId: "desafio2-nivel6-incorrecto" },
                { icon: "D)", label: "Las montañas sagradas", action: "goto", nodeId: "desafio2-nivel6-incorrecto" }
            ]
        },
        "desafio2-nivel6-correcto": {
            message: "✅ ¡Fantástico!\n\nLas historias de unión y hermandad eran el tesoro más preciado del continente, guardadas en la memoria de Cholao.\n\nAvanza al Nivel 7 (FINAL).",
            options: [
                { icon: "➡️", label: "Nivel 7 (FINAL)", action: "goto", nodeId: "desafio2-nivel7" }
            ]
        },
        "desafio2-nivel6-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío del Viaje de Cholao ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel7": {
            message: "🔹 NIVEL 7 – LA TRANSFORMACIÓN\n\n¿Qué pasó cuando Cholao recibió los cuatro valores de las aves guardianas?",
            options: [
                { icon: "A)", label: "Perdió sus plumas", action: "goto", nodeId: "desafio2-nivel7-incorrecto" },
                { icon: "B)", label: "Se volvió invisible", action: "goto", nodeId: "desafio2-nivel7-incorrecto" },
                { icon: "C)", label: "Sus colores brillaron aún más", action: "goto", nodeId: "desafio2-nivel7-correcto" },
                { icon: "D)", label: "Creció de tamaño", action: "goto", nodeId: "desafio2-nivel7-incorrecto" }
            ]
        },
        "desafio2-nivel7-correcto": {
            message: "✅ ¡CORRECTO! 🎉🏆\n\n¡Has completado el Desafío del Viaje de Cholao con los 7 niveles!\n\nCholao guardó los valores en su plumaje haciendo que sus colores brillaran aún más.\n\n🏁 INSTRUCCIÓN FINAL:\n\n📝 RECLAMA TU PREMIO AQUÍ:\nhttps://forms.gle/PytYXN9hoELX8dmk8\n\n*El primer registro válido será el ganador del concurso de Cholao Store.*\n\nDirígete también al WELCOME CENTER para validar tu participación.\n\n📍 INFORMACIÓN:\n• Completa todos los campos del formulario\n• Un premio por persona\n• Premios no transferibles\n• Decisiones del staff son finales\n• Dinámica válida hasta agotar premios",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel7-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío del Viaje de Cholao ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-bloqueado": {
            message: "🔒 Desafío Bloqueado\n\nLo sentimos, ya has participado en el Desafío de los Guardianes del Campamento con una respuesta incorrecta.\n\nCada participante tiene solo una oportunidad para completar el desafío.\n\n¡Gracias por tu participación y sigue disfrutando del JamCam 2025!",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-inicio": {
            message: "⛺ JAMCAM 2025\n\nLOS GUARDIANES DEL CAMPAMENTO\n\n✨ Conoce tu Aventura ✨\n\n¿Estás listo para demostrar que conoces el JamCam?\n\nDeberás responder 7 preguntas correctamente sobre el campamento y el evento.",
            options: [
                { icon: "🚀", label: "¡Comenzar desafío!", action: "goto", nodeId: "desafio3-nivel1" },
                { icon: "🔙", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel1": {
            message: "🔹 NIVEL 1 – LAS FECHAS\n\n¿Cuándo ingresan los miembros del EIS y CMT al sitio del JamCam?",
            options: [
                { icon: "A)", label: "25 de diciembre de 2025", action: "goto", nodeId: "desafio3-nivel1-incorrecto" },
                { icon: "B)", label: "26 de diciembre de 2025", action: "goto", nodeId: "desafio3-nivel1-correcto" },
                { icon: "C)", label: "27 de diciembre de 2025", action: "goto", nodeId: "desafio3-nivel1-incorrecto" },
                { icon: "D)", label: "28 de diciembre de 2025", action: "goto", nodeId: "desafio3-nivel1-incorrecto" }
            ]
        },
        "desafio3-nivel1-correcto": {
            message: "✅ ¡Correcto!\n\nLos miembros del EIS y CMT ingresan el 26 de diciembre de 2025, un día antes del inicio oficial.\n\nContinúa al Nivel 2.",
            options: [
                { icon: "➡️", label: "Nivel 2", action: "goto", nodeId: "desafio3-nivel2" }
            ]
        },
        "desafio3-nivel1-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de los Guardianes del Campamento ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel2": {
            message: "🔹 NIVEL 2 – EL EQUIPO\n\n¿Qué significa EIS?",
            options: [
                { icon: "A)", label: "Equipo Interamericano Scout", action: "goto", nodeId: "desafio3-nivel2-incorrecto" },
                { icon: "B)", label: "Equipo Internacional de Servicio", action: "goto", nodeId: "desafio3-nivel2-correcto" },
                { icon: "C)", label: "Escuadrón Internacional de Seguridad", action: "goto", nodeId: "desafio3-nivel2-incorrecto" },
                { icon: "D)", label: "Equipo Instructor Scout", action: "goto", nodeId: "desafio3-nivel2-incorrecto" }
            ]
        },
        "desafio3-nivel2-correcto": {
            message: "✅ ¡Muy bien!\n\nEIS significa Equipo Internacional de Servicio, conformado por voluntarios scouts que apoyan el desarrollo del evento.\n\nAvanza al Nivel 3.",
            options: [
                { icon: "➡️", label: "Nivel 3", action: "goto", nodeId: "desafio3-nivel3" }
            ]
        },
        "desafio3-nivel2-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de los Guardianes del Campamento ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel3": {
            message: "🔹 NIVEL 3 – EL LUGAR\n\n¿Dónde se realiza el JamCam 2025?",
            options: [
                { icon: "A)", label: "Parque Nacional Tayrona", action: "goto", nodeId: "desafio3-nivel3-incorrecto" },
                { icon: "B)", label: "Centro Campestre Comfandi Pance", action: "goto", nodeId: "desafio3-nivel3-correcto" },
                { icon: "C)", label: "Parque Simón Bolívar", action: "goto", nodeId: "desafio3-nivel3-incorrecto" },
                { icon: "D)", label: "Campamento Scout Nacional", action: "goto", nodeId: "desafio3-nivel3-incorrecto" }
            ]
        },
        "desafio3-nivel3-correcto": {
            message: "✅ ¡Excelente!\n\nEl JamCam se realiza en el Centro Campestre Comfandi Pance, un espacio natural rodeado de montañas, ríos y senderos.\n\nAvanza al Nivel 4.",
            options: [
                { icon: "➡️", label: "Nivel 4", action: "goto", nodeId: "desafio3-nivel4" }
            ]
        },
        "desafio3-nivel3-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de los Guardianes del Campamento ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel4": {
            message: "🔹 NIVEL 4 – LA EDAD\n\n¿Qué edad mínima debes tener al inicio del JamCam para ser parte del EIS?",
            options: [
                { icon: "A)", label: "16 años", action: "goto", nodeId: "desafio3-nivel4-incorrecto" },
                { icon: "B)", label: "17 años", action: "goto", nodeId: "desafio3-nivel4-incorrecto" },
                { icon: "C)", label: "18 años", action: "goto", nodeId: "desafio3-nivel4-correcto" },
                { icon: "D)", label: "21 años", action: "goto", nodeId: "desafio3-nivel4-incorrecto" }
            ]
        },
        "desafio3-nivel4-correcto": {
            message: "✅ ¡Perfecto!\n\nDebes tener 18 años o más al inicio del JamCam 2025 para poder ser parte del Equipo Internacional de Servicio.\n\nAvanza al Nivel 5.",
            options: [
                { icon: "➡️", label: "Nivel 5", action: "goto", nodeId: "desafio3-nivel5" }
            ]
        },
        "desafio3-nivel4-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de los Guardianes del Campamento ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel5": {
            message: "🔹 NIVEL 5 – LOS PARTICIPANTES\n\n¿Qué edades tienen los participantes juveniles del JamCam?",
            options: [
                { icon: "A)", label: "10 a 16 años", action: "goto", nodeId: "desafio3-nivel5-incorrecto" },
                { icon: "B)", label: "11 a 17 años", action: "goto", nodeId: "desafio3-nivel5-correcto" },
                { icon: "C)", label: "12 a 18 años", action: "goto", nodeId: "desafio3-nivel5-incorrecto" },
                { icon: "D)", label: "13 a 19 años", action: "goto", nodeId: "desafio3-nivel5-incorrecto" }
            ]
        },
        "desafio3-nivel5-correcto": {
            message: "✅ ¡Increíble!\n\nLos participantes juveniles son niños y adolescentes entre 11 y 17 años, organizados en patrullas o equipos según su edad.\n\nAvanza al Nivel 6.",
            options: [
                { icon: "➡️", label: "Nivel 6", action: "goto", nodeId: "desafio3-nivel6" }
            ]
        },
        "desafio3-nivel5-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de los Guardianes del Campamento ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel6": {
            message: "🔹 NIVEL 6 – LA INSPIRACIÓN\n\n¿En qué declaración de la ONU se inspira el tema del JamCam 2025?",
            options: [
                { icon: "A)", label: "Año Internacional del Medio Ambiente", action: "goto", nodeId: "desafio3-nivel6-incorrecto" },
                { icon: "B)", label: "Año Internacional de la Paz y la Confianza", action: "goto", nodeId: "desafio3-nivel6-correcto" },
                { icon: "C)", label: "Año Internacional de la Juventud", action: "goto", nodeId: "desafio3-nivel6-incorrecto" },
                { icon: "D)", label: "Año Internacional de la Cooperación", action: "goto", nodeId: "desafio3-nivel6-incorrecto" }
            ]
        },
        "desafio3-nivel6-correcto": {
            message: "✅ ¡Fantástico!\n\nEl JamCam 2025 se inspira en la declaratoria de la ONU del 2025 como el Año Internacional de la Paz y la Confianza.\n\nAvanza al Nivel 7 (FINAL).",
            options: [
                { icon: "➡️", label: "Nivel 7 (FINAL)", action: "goto", nodeId: "desafio3-nivel7" }
            ]
        },
        "desafio3-nivel6-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de los Guardianes del Campamento ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel7": {
            message: "🔹 NIVEL 7 – EL MONUMENTO\n\n¿Cuál es el monumento más emblemático de Cali que se encuentra en el cerro de los Cristales?",
            options: [
                { icon: "A)", label: "Torre de Cali", action: "goto", nodeId: "desafio3-nivel7-incorrecto" },
                { icon: "B)", label: "Catedral Metropolitana", action: "goto", nodeId: "desafio3-nivel7-incorrecto" },
                { icon: "C)", label: "Cristo Rey", action: "goto", nodeId: "desafio3-nivel7-correcto" },
                { icon: "D)", label: "Cerro de las Tres Cruces", action: "goto", nodeId: "desafio3-nivel7-incorrecto" }
            ]
        },
        "desafio3-nivel7-correcto": {
            message: "✅ ¡CORRECTO! 🎉🏆\n\n¡Has completado el Desafío de los Guardianes del Campamento con los 7 niveles!\n\nEl Cristo Rey es un monumento de 26 metros de altura que ofrece una vista panorámica espectacular de Cali.\n\n🏁 INSTRUCCIÓN FINAL:\n\n📝 RECLAMA TU PREMIO AQUÍ:\nhttps://forms.gle/PytYXN9hoELX8dmk8\n\n*El primer registro válido será el ganador del concurso de Cholao Store.*\n\nDirígete también al WELCOME CENTER para validar tu participación.\n\n📍 INFORMACIÓN:\n• Completa todos los campos del formulario\n• Un premio por persona\n• Premios no transferibles\n• Decisiones del staff son finales\n• Dinámica válida hasta agotar premios",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel7-incorrecto": {
            message: "❌ Respuesta incorrecta\n\n🔒 El Desafío de los Guardianes del Campamento ha sido bloqueado para ti.\n\nCada participante tiene solo una oportunidad para completar el desafío. Gracias por tu participación.",
            options: [
                { icon: "🏠", label: "Menú Principal", action: "goto", nodeId: "welcome" }
            ]
        }
    }
};

