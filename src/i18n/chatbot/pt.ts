export default {
    title: "Cholao",
    close: "Fechar",
    restart: "🔄 Reiniciar",
    typing: "Digitando",
    nodes: {
        welcome: {
            message: "👋 Olá! Sou Cholao, seu assistente digital no JamCam 2025.\n\nEstou aqui para te guiar em atividades, localizações, serviços e apoio durante todo o evento.\n\n👉 Me diga, o que você precisa agora?",
            options: [
                { icon: "🦜", label: "Desafio Aves Guardiãs", action: "goto", nodeId: "desafio-inicio" },
                { icon: "🌿", label: "Check-in Bem-estar", action: "goto", nodeId: "checkin-bienestar" },
                { icon: "📍", label: "Localizações JamCam", action: "goto", nodeId: "ubicaciones" },
                { icon: "🎯", label: "Atividades", action: "goto", nodeId: "actividades" },
                { icon: "🧠", label: "Listening Ears", action: "goto", nodeId: "listening-ears" },
                { icon: "ℹ️", label: "Info Geral", action: "goto", nodeId: "info-general" },
                { icon: "🗣️", label: "Sua opinião conta", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🌍", label: "Curiosidades", action: "goto", nodeId: "datos-curiosos" }
            ]
        },
        "checkin-bienestar": {
            message: "🦅 Estou aqui para te ajudar a preparar tua chegada e fazer teu registro prévio.\n\nVamos tornar este processo rápido e fácil.",
            options: [
                { icon: "✅", label: "Estou Pronto", action: "goto", nodeId: "checkin-pais" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "checkin-pais": {
            message: "🌎 Primeiro, me diga: de qual país você vem?",
            options: [
                { icon: "🇨🇴", label: "Colômbia", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇧🇷", label: "Brasil", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇦🇷", label: "Argentina", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇦", label: "Canadá", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇭🇳", label: "Honduras", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇷", label: "Costa Rica", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇲🇽", label: "México", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇱", label: "Chile", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇪🇨", label: "Equador", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇩🇴", label: "República Dominicana", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇸🇻", label: "El Salvador", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇬🇹", label: "Guatemala", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇳🇮", label: "Nicarágua", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇦", label: "Panamá", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇾", label: "Paraguai", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇪", label: "Peru", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇷", label: "Porto Rico", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇻🇪", label: "Venezuela", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇸🇪", label: "Suécia", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇦🇺", label: "Austrália", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇱", label: "Polônia", action: "goto", nodeId: "checkin-rol" },
                { icon: "🌍", label: "FSI", action: "goto", nodeId: "checkin-rol" },
                { icon: "🌍", label: "CICE", action: "goto", nodeId: "checkin-rol" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "checkin-bienestar" }
            ]
        },
        "checkin-rol": {
            message: "🙋 Selecione seu papel no evento:",
            options: [
                { icon: "👦", label: "Escoteiro", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🧑", label: "Sênior", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👨", label: "Pioneiro", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🤝", label: "EIS / Serviço", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👔", label: "Chefe de Delegação", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👤", label: "Adulto Acompanhante", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "📋", label: "Staff", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "checkin-pais" }
            ]
        },
        "checkin-sintomas": {
            message: "🧑‍⚕️ Sintomas ou desconfortos",
            options: [
                { icon: "😣", label: "Dor de cabeça", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤢", label: "Dor de estômago", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤮", label: "Náusea", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🌡️", label: "Febre", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🌡️", label: "Sensação de Febre", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😷", label: "Tosse", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😤", label: "Problema ao respirar", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😵", label: "Tontura ou fraqueza", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🩹", label: "Lesão recente", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤧", label: "Alergia ativa", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "✅", label: "Nenhum", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "checkin-rol" }
            ]
        },
        "checkin-apoyo": {
            message: "Você precisa de Apoio Especial?\n\n✨ Se você precisa de apoio especial durante sua chegada ou estadia, posso transmitir a informação à equipe de Hospitalidade e Protocolo.",
            options: [
                { icon: "✅", label: "Sim, preciso", action: "goto", nodeId: "checkin-apoyo-si" },
                { icon: "❌", label: "Não, está tudo bem", action: "goto", nodeId: "checkin-apoyo-no" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "checkin-sintomas" }
            ]
        },
        "checkin-apoyo-si": {
            message: "Obrigado por nos informar.\n\nAo chegar no Welcome Center, aproxime-se da equipe de Protocolo e Hospitalidade e indique que você solicitou apoio médico no check-in de bem-estar. Te acompanharemos com a equipe de saúde.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "checkin-apoyo-no": {
            message: "Obrigado por nos informar. Se mais tarde você precisar de apoio, aproxime-se com confiança do Welcome Center ou da equipe de Protocolo e Hospitalidade. Estamos atentos para te ajudar.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        ubicaciones: {
            message: "📍 Localizações JamCam\n\nSelecione o mapa que você precisa:",
            options: [
                { icon: "🗺️", label: "Mapa Geral", action: "goto", nodeId: "ubicaciones-general" },
                { icon: "🏕️", label: "Mapa de Serviços", action: "goto", nodeId: "ubicaciones-servicios" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "ubicaciones-general": {
            message: "🗺️ Mapa Geral do JAMCAM 2025\n\nAqui você encontrará o mapa geral do evento, onde poderá identificar todas as localizações principais do acampamento.",
            image: "/images/mapa-jamcam.png",
            download: "/images/mapa-jamcam.png",
            downloadLabel: "Baixar mapa geral",
            options: [
                { icon: "🔙", label: "Voltar a Localizações", action: "goto", nodeId: "ubicaciones" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "ubicaciones-servicios": {
            message: "🏕️ Mapa de Serviços JamCam 2025\n\nAqui você encontrará a localização de todos os serviços: banheiros, chuveiros, pontos de hidratação, áreas comerciais, zonas de atividades e muito mais.",
            image: "/images/mapa-servicios.png",
            download: "/docs/mapa-servicios.pdf",
            downloadLabel: "Baixar mapa de serviços (PDF)",
            options: [
                { icon: "🔙", label: "Voltar a Localizações", action: "goto", nodeId: "ubicaciones" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        actividades: {
            message: "🎯 Atividades\n\nSelecione seu programa:",
            options: [
                { icon: "🏕️", label: "Jamboree", action: "goto", nodeId: "actividades-jamboree" },
                { icon: "⛺", label: "Camporee", action: "goto", nodeId: "actividades-camporee" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-jamboree": {
            message: "Selecione seu Subcampo:",
            options: [
                { icon: "🔰", label: "Urá Jürú", action: "goto", nodeId: "actividades-jamboree-juru" },
                { icon: "🔰", label: "Urá Chamí", action: "goto", nodeId: "actividades-jamboree-chami" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "actividades" }
            ]
        },
        "actividades-camporee": {
            message: "Selecione seu Subcampo:",
            options: [
                { icon: "🔰", label: "Urá Dó", action: "goto", nodeId: "actividades-camporee-do" },
                { icon: "🔰", label: "Urá Chi", action: "goto", nodeId: "actividades-camporee-chi" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "actividades" }
            ]
        },
        "actividades-jamboree-juru": {
            message: "📅 Cronograma de atividades - Urá Jürú\n\nAqui você pode baixar o cronograma completo de atividades para seu subcampo.",
            download: "/docs/horario-jamboree.pdf",
            downloadLabel: "Baixar cronograma",
            options: [
                { icon: "🔙", label: "Voltar a Atividades", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-jamboree-chami": {
            message: "📅 Cronograma de atividades - Urá Chamí\n\nAqui você pode baixar o cronograma completo de atividades para seu subcampo.",
            download: "/docs/horario-jamboree.pdf",
            downloadLabel: "Baixar cronograma",
            options: [
                { icon: "🔙", label: "Voltar a Atividades", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-camporee-do": {
            message: "📅 Cronograma de atividades - Urá Dó\n\nAqui você pode baixar o cronograma completo de atividades para seu subcampo.",
            download: "/docs/horario-camporee.pdf",
            downloadLabel: "Baixar cronograma",
            options: [
                { icon: "🔙", label: "Voltar a Atividades", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-camporee-chi": {
            message: "📅 Cronograma de atividades - Urá Chi\n\nAqui você pode baixar o cronograma completo de atividades para seu subcampo.",
            download: "/docs/horario-camporee.pdf",
            downloadLabel: "Baixar cronograma",
            options: [
                { icon: "🔙", label: "Voltar a Atividades", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "listening-ears": {
            message: "🧠 LISTENING EARS\n\nLembre-se de que temos pessoas prontas para te ouvir 💚.",
            options: [
                { icon: "🙋", label: "Solicitar Apoio", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-solicitar-apoyo": {
            message: "Este é um espaço seguro para te ouvir e acompanhar.\n\nAqui você pode tirar um momento para identificar como se sente e encontrar apoio, no seu ritmo.\n\nVocê gostaria de compartilhar como se sente agora?",
            options: [
                { icon: "😊", label: "Bem", action: "goto", nodeId: "le-bien" },
                { icon: "😟", label: "Ansioso", action: "goto", nodeId: "le-ansioso" },
                { icon: "😢", label: "Triste", action: "goto", nodeId: "le-triste" },
                { icon: "😡", label: "Bravo", action: "goto", nodeId: "le-enojado" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "listening-ears" }
            ]
        },
        "le-bien": {
            message: "Que bom que você compartilha! 💚 Às vezes só precisamos conversar um pouco.\n\nVocê pode se aproximar do 🛖 Ponto de Escuta Escoteiro.",
            image: "/images/mapa-jamcam.png",
            options: [
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-ansioso": {
            message: "Obrigado por dizer 🙏. Quando a ansiedade aparece, o melhor é fazer uma pausa.\n\nTente isso agora 👇\n\n1️⃣ Respire fundo: inspire contando até 4, expire contando até 6.\n2️⃣ Beba um pouco de água.",
            options: [
                { icon: "✅", label: "Me sinto melhor", action: "goto", nodeId: "le-mejor" },
                { icon: "🛖", label: "Ponto de apoio", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-triste": {
            message: "Entendo como você se sente 💚. A tristeza também faz parte da vida, e é normal falar sobre isso.\n\nVocê tem duas opções:\n\nPode se aproximar do 🛖 Ponto de Escuta Escoteiro para falar com alguém cara a cara.\n\nOu podemos te guiar com uma técnica breve de respiração para te ajudar a encontrar calma.",
            options: [
                { icon: "🛖", label: "Ponto de apoio", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🧘", label: "Técnica breve", action: "goto", nodeId: "le-tecnica-breve" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-enojado": {
            message: "Obrigado por reconhecer 💪. A raiva pode parecer forte, mas também pode ser canalizada.\n\nRecomendo:\n\n1️⃣ Caminhe alguns minutos antes de responder a alguém.\n2️⃣ Se preferir, podemos te guiar com uma técnica breve de respiração para liberar tensão.",
            options: [
                { icon: "✅", label: "Me sinto melhor", action: "goto", nodeId: "le-mejor" },
                { icon: "🧘", label: "Técnica breve", action: "goto", nodeId: "le-tecnica-breve" },
                { icon: "🛖", label: "Ponto de apoio", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-mejor": {
            message: "Ficamos felizes em saber que você se sente melhor agora.\n\nLembre-se de que você não está sozinho/a: se em algum momento precisar de apoio novamente, estaremos aqui para te acompanhar.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-tecnica-breve": {
            message: "🧘 Técnica de Respiração\n\nVamos fazer uma pausa juntos:\n\n1. Inspire profundamente por 4 segundos\n2. Segure a respiração por 2 segundos\n3. Expire lentamente por 6 segundos\n4. Repita 3 vezes\n\nVocê se sente melhor?",
            options: [
                { icon: "✅", label: "Sim, me sinto melhor", action: "goto", nodeId: "le-mejor" },
                { icon: "🛖", label: "Preciso de mais apoio", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-punto-atencion": {
            message: "Você pode se aproximar do 🛖 Ponto de Escuta Escoteiro.\n\nObrigado por confiar em nós.\n\nDentro do acampamento temos uma equipe preparada para fornecer apoio emocional.",
            image: "/images/mapa-jamcam.png",
            options: [
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-general": {
            message: "ℹ️ Informação Geral\n\nTenho informações úteis para você 📖:",
            options: [
                { icon: "🕒", label: "Boletim Geral", action: "goto", nodeId: "info-boletin" },
                { icon: "📌", label: "Código de Conduta", action: "goto", nodeId: "info-codigo-conducta" },
                { icon: "☎️", label: "Emergência 911", action: "goto", nodeId: "info-emergencia" },
                { icon: "🛡️", label: "Safe From Harm", action: "goto", nodeId: "info-safe-from-harm" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-boletin": {
            message: "🕒 Boletim Geral\n\n📎 Anexamos o Boletim Geral do JamCam, onde você encontrará 🧭 todas as informações oficiais, 📅 atualizadas e relevantes para sua participação no evento.",
            download: "/docs/boletin-jamcam-5.pdf",
            downloadLabel: "Baixar boletim",
            options: [
                { icon: "🔙", label: "Voltar a Info Geral", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-codigo-conducta": {
            message: "📌 Código de Conduta JAMCAM 2025\n\nEste Código de Conduta é um guia para cuidarmos uns dos outros e vivermos o JAMCAM em um ambiente seguro, respeitoso e inclusivo.\n\nAqui você encontrará as diretrizes que nos ajudam a conviver com respeito, proteger nosso bem-estar físico e emocional, e representar com orgulho os valores do Movimento Escoteiro durante o evento.\n\nAlguns pontos-chave:\n\n1️⃣ Respeito entre participantes e voluntários.\n2️⃣ Não é permitido consumo de álcool ou substâncias.\n3️⃣ Cuidado com instalações e meio ambiente.\n4️⃣ Participação ativa nas atividades designadas.\n\n👉 Você pode ler o regulamento completo aqui:",
            download: "/docs/asp-codigo-de-conducta.pdf",
            downloadLabel: "Baixar código de conduta",
            options: [
                { icon: "🔙", label: "Voltar a Info Geral", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-emergencia": {
            message: "🚨 LINHA DE EMERGÊNCIA – JAMCAM COLÔMBIA 2025 🚨\n\nEquipe EIS, lembramos que diante de qualquer emergência médica, situação de risco ou necessidade de apoio imediato, está disponível a seguinte linha oficial:\n\n📞 +57 311 690 9423\n\n👉 Use quando:\n\n• Houver uma emergência médica.\n• Surgir uma situação de risco\n• Um participante ou voluntário precisar de ajuda imediata.\n\n🧭 Lembre-se de aplicar o procedimento PAS:\nProteger – Alertar – Socorrer",
            options: [
                { icon: "📞", label: "Ligar agora", action: "link", url: "tel:+573116909423" },
                { icon: "🔙", label: "Voltar a Info Geral", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-safe-from-harm": {
            message: "🛡️ Safe From Harm\n\nSelecione a opção que você precisa:",
            options: [
                { icon: "ℹ️", label: "Info Geral", action: "link", url: "https://www.jamcam2025.com/safe-from-harm" },
                { icon: "📚", label: "Curso de Safe from Harm", action: "link", url: "https://learn.scout.org/resource/safe-harm-interamerican-scout-jamcam-learning-path" },
                { icon: "🔙", label: "Voltar a Info Geral", action: "goto", nodeId: "info-general" }
            ]
        },
        "tu-voz-cuenta": {
            message: "🗣️ Sua opinião conta\n\nEste espaço foi pensado para que você possa compartilhar sua experiência e percepção do JAMCAM.\nAtravés de pesquisas breves, você poderá nos ajudar a identificar o que está funcionando bem e no que podemos melhorar, para continuar cuidando da experiência de todos.",
            options: [
                { icon: "✅", label: "Pesquisa de boas-vindas", action: "goto", nodeId: "encuesta-bienvenida" },
                { icon: "📋", label: "Pesquisa diária", action: "goto", nodeId: "encuesta-diaria" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-bienvenida": {
            message: "📊 Pesquisa de Chegada e Boas-vindas\n\nEsta pesquisa é apenas para chefes de contingente.\n\nSua opinião é muito importante para nós. Por favor, complete a pesquisa para nos ajudar a melhorar a experiência do JamCam.\n\n🔗 https://forms.cloud.microsoft/r/75WqDHq5LP",
            options: [
                { icon: "📝", label: "Abrir pesquisa", action: "link", url: "https://forms.cloud.microsoft/r/75WqDHq5LP" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-diaria": {
            message: "📊 Pesquisa de avaliação diária\n\nSeu feedback diário nos ajuda a melhorar continuamente o evento.\n\nPor favor, compartilhe sua experiência do dia.\n\n🔗 https://forms.cloud.microsoft/r/VzQeNiMw29",
            options: [
                { icon: "📝", label: "Abrir pesquisa", action: "link", url: "https://forms.cloud.microsoft/r/VzQeNiMw29" },
                { icon: "🔙", label: "Voltar", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-curiosos": {
            message: "🥤 Você sabia que \"Cholao\" é uma bebida típica de Cali?\n\nCali está localizada na região do Pacífico da Colômbia, conhecida por sua diversidade cultural, alegria e sabor.\n\n👉 Gostaria de conhecer mais curiosidades sobre Cali e o JamCam?",
            options: [
                { icon: "🌍", label: "Outra curiosidade", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-curiosos-menu": {
            message: "🌍 Escolha uma curiosidade para descobrir:",
            options: [
                { icon: "🌎", label: "JamCam Internacional", action: "goto", nodeId: "datos-jamcam" },
                { icon: "🐦", label: "Cholao te acompanha", action: "goto", nodeId: "datos-cholao" },
                { icon: "☁️", label: "Filial do Céu", action: "goto", nodeId: "datos-sucursal" },
                { icon: "💃", label: "Capital da Salsa", action: "goto", nodeId: "datos-salsa" },
                { icon: "🏛️", label: "História de Cali", action: "goto", nodeId: "datos-historia" },
                { icon: "👥", label: "Terceira cidade", action: "goto", nodeId: "datos-poblacion" },
                { icon: "🗿", label: "Cristo Rei", action: "goto", nodeId: "datos-cristo" },
                { icon: "🎵", label: "Festival Petronio", action: "goto", nodeId: "datos-petronio" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-jamcam": {
            message: "🌎 O JamCam 2025 reúne participantes de mais de 20 países, tornando-se um dos maiores encontros escoteiros internacionais da região.",
            options: [
                { icon: "🌍", label: "Outra curiosidade", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-cholao": {
            message: "🐦 Cholao não apenas informa... também acompanha, foi projetado para ajudá-lo, orientá-lo e ouvi-lo durante todo o evento.",
            options: [
                { icon: "🌍", label: "Outra curiosidade", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-sucursal": {
            message: "☁️ Cali é conhecida como a \"Filial do Céu\", um apelido que reflete a beleza de suas paisagens, seu clima quente e o calor de seu povo.",
            options: [
                { icon: "🌍", label: "Outra curiosidade", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-salsa": {
            message: "💃 Cali é reconhecida como a \"Capital Mundial da Salsa\". A cidade vibra com essa música e possui academias, festivais e uma cultura salsera única que atrai dançarinos de todo o mundo.",
            options: [
                { icon: "🌍", label: "Outra curiosidade", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-historia": {
            message: "🏛️ Santiago de Cali foi fundada em 25 de julho de 1536 por Sebastián de Belalcázar, tornando-a uma das cidades mais antigas da América. Tem mais de 480 anos de história rica em cultura e tradição.",
            options: [
                { icon: "🌍", label: "Outra curiosidade", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-poblacion": {
            message: "👥 Cali é a terceira cidade mais populosa da Colômbia, depois de Bogotá e Medellín. É o principal centro econômico e cultural do sudoeste colombiano.",
            options: [
                { icon: "🌍", label: "Outra curiosidade", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-cristo": {
            message: "🗿 No cerro de los Cristales está o monumento ao Cristo Rei, uma imponente estátua de 26 metros de altura que domina a cidade e é um dos símbolos mais emblemáticos de Cali.",
            options: [
                { icon: "🌍", label: "Outra curiosidade", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-petronio": {
            message: "🎵 Cali é sede do Festival de Música do Pacífico Petronio Álvarez, o evento de música afro-colombiana mais importante do país, que celebra a riqueza cultural do Pacífico colombiano todos os anos.",
            options: [
                { icon: "🌍", label: "Outra curiosidade", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-bloqueado": {
            message: "🔒 Desafio Bloqueado\n\nLamentamos, você já participou do Desafio das Aves Guardiãs com uma resposta incorreta.\n\nCada participante tem apenas uma oportunidade para completar o desafio.\n\nObrigado pela sua participação e continue aproveitando o JamCam 2025!",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-inicio": {
            message: "🦜 JAMCAM 2025\n\nO DESAFIO DAS AVES GUARDIÃS\n\n✨ Américas Unidas Pela Paz ✨\n\nVocê está pronto para começar esta aventura?\n\nVocê deve responder 3 perguntas corretamente para completar o desafio.",
            options: [
                { icon: "🚀", label: "Começar desafio!", action: "goto", nodeId: "desafio-nivel1" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel1": {
            message: "🔹 NÍVEL 1 – A ORIGEM\n\nQuem é a arara lendária que guia o JamCam 2025?",
            options: [
                { icon: "A)", label: "Anu-preto", action: "goto", nodeId: "desafio-nivel1-incorrecto" },
                { icon: "B)", label: "Cholao", action: "goto", nodeId: "desafio-nivel1-correcto" },
                { icon: "C)", label: "Pato-do-mato", action: "goto", nodeId: "desafio-nivel1-incorrecto" },
                { icon: "D)", label: "Sanhaço-cinzento", action: "goto", nodeId: "desafio-nivel1-incorrecto" }
            ]
        },
        "desafio-nivel1-correcto": {
            message: "✅ Correto!\n\nVocê demonstrou conhecer a origem! Cholao é a arara lendária que nos guia nesta aventura.\n\nContinue para o Nível 2.",
            options: [
                { icon: "➡️", label: "Nível 2", action: "goto", nodeId: "desafio-nivel2" }
            ]
        },
        "desafio-nivel1-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio das Aves Guardiãs foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel2": {
            message: "🔹 NÍVEL 2 – AS AVES GUARDIÃS\n\nQue valor está desaparecendo segundo o Papagaio-de-cabeça-azul?",
            options: [
                { icon: "A)", label: "A cooperação", action: "goto", nodeId: "desafio-nivel2-incorrecto" },
                { icon: "B)", label: "A liberdade", action: "goto", nodeId: "desafio-nivel2-incorrecto" },
                { icon: "C)", label: "A empatia", action: "goto", nodeId: "desafio-nivel2-correcto" },
                { icon: "D)", label: "A criatividade", action: "goto", nodeId: "desafio-nivel2-incorrecto" }
            ]
        },
        "desafio-nivel2-correcto": {
            message: "✅ Muito bem!\n\nVocê ouviu as aves guardiãs! A empatia é o valor que o Papagaio-de-cabeça-azul protege.\n\nAvance para o Nível 3.",
            options: [
                { icon: "➡️", label: "Nível 3 (Final)", action: "goto", nodeId: "desafio-nivel3" }
            ]
        },
        "desafio-nivel2-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio das Aves Guardiãs foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel3": {
            message: "🔹 NÍVEL 3 – O VOO FINAL\n\nQuantos dias dura a aventura do JamCam 2025?",
            options: [
                { icon: "A)", label: "Quatro dias", action: "goto", nodeId: "desafio-nivel3-incorrecto" },
                { icon: "B)", label: "Cinco dias", action: "goto", nodeId: "desafio-nivel3-incorrecto" },
                { icon: "C)", label: "Seis dias", action: "goto", nodeId: "desafio-nivel3-correcto" },
                { icon: "D)", label: "Sete dias", action: "goto", nodeId: "desafio-nivel3-incorrecto" }
            ]
        },
        "desafio-nivel3-correcto": {
            message: "✅ CORRETO! 🎉\n\nVocê completou o Desafio das Aves Guardiãs!\n\n🏁 INSTRUÇÃO FINAL:\n\nVá AGORA MESMO ao WELCOME CENTER para reivindicar seu prêmio.\n\n*Os primeiros a chegar serão os vencedores.*\n\n📍 REIVINDICAÇÃO DO PRÊMIO:\n• Validação de identidade\n• Confirmação da resposta\n• Entrega do prêmio\n\n🛑 REGRAS:\n• Um prêmio por pessoa\n• Prêmios não transferíveis\n• Decisões da equipe são finais\n• Dinâmica válida até esgotar prêmios",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel3-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio das Aves Guardiãs foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        }
    }
};

