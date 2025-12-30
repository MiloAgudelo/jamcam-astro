export default {
    title: "Cholao",
    close: "Fechar",
    restart: "🔄 Reiniciar",
    typing: "Digitando",
    nodes: {
        welcome: {
            message: "👋 Olá! Sou Cholao, seu assistente digital no JamCam 2025.\n\nEstou aqui para te guiar em atividades, localizações, serviços e apoio durante todo o evento.\n\n👉 Me diga, o que você precisa agora?",
            options: [
                { icon: "🏆", label: "Desafios JamCam", action: "goto", nodeId: "desafios-menu" },
                { icon: "📍", label: "Localizações JamCam", action: "goto", nodeId: "ubicaciones" },
                { icon: "🎯", label: "Atividades", action: "goto", nodeId: "actividades" },
                { icon: "🧠", label: "Listening Ears", action: "goto", nodeId: "listening-ears" },
                { icon: "ℹ️", label: "Info Geral", action: "goto", nodeId: "info-general" },
                { icon: "🗣️", label: "Sua opinião conta", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🌍", label: "Curiosidades", action: "goto", nodeId: "datos-curiosos" }
            ]
        },
        "desafios-menu": {
            message: "🏆 DESAFIOS JAMCAM 2025\n\nTeste seus conhecimentos e ganhe prêmios!\n\nEscolha um dos 3 desafios disponíveis:\n\n🦜 **Aves Guardiãs** - Descubra as 4 aves e seus valores sagrados\n\n🌈 **Viagem de Cholao** - Conheça a história ancestral de nossa arara\n\n⛺ **Guardiões do Acampamento** - Prove que você conhece o JamCam\n\n⚠️ Cada desafio tem 7 perguntas. Se você falhar, esse desafio será bloqueado permanentemente.\n\nQual desafio você quer tentar?",
            options: [
                { icon: "🦜", label: "Aves Guardiãs", action: "goto", nodeId: "desafio-inicio" },
                { icon: "🌈", label: "Viagem de Cholao", action: "goto", nodeId: "desafio2-inicio" },
                { icon: "⛺", label: "Guardiões do Acampamento", action: "goto", nodeId: "desafio3-inicio" },
                { icon: "🔙", label: "Voltar ao menu", action: "goto", nodeId: "welcome" }
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
                { icon: "☎️", label: "Linha de emergência", action: "goto", nodeId: "info-emergencia" },
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
            message: "✅ Muito bem!\n\nVocê avançou para o próximo nível! Continue com o desafio.\n\nAvance para o Nível 4.",
            options: [
                { icon: "➡️", label: "Nível 4", action: "goto", nodeId: "desafio-nivel4" }
            ]
        },
        "desafio-nivel3-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio das Aves Guardiãs foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel4": {
            message: "🔹 NÍVEL 4 – OS VALORES SAGRADOS\n\nQual ave entregou a Cholao o valor da solidariedade?",
            options: [
                { icon: "A)", label: "Papagaio-de-cabeça-azul", action: "goto", nodeId: "desafio-nivel4-incorrecto" },
                { icon: "B)", label: "Pato-do-mato", action: "goto", nodeId: "desafio-nivel4-incorrecto" },
                { icon: "C)", label: "Sanhaço-cinzento", action: "goto", nodeId: "desafio-nivel4-correcto" },
                { icon: "D)", label: "Anu-preto", action: "goto", nodeId: "desafio-nivel4-incorrecto" }
            ]
        },
        "desafio-nivel4-correcto": {
            message: "✅ Excelente!\n\nO Sanhaço-cinzento ofereceu a solidariedade para que os jovens desfrutem da vida em comunidade.\n\nAvance para o Nível 5.",
            options: [
                { icon: "➡️", label: "Nível 5", action: "goto", nodeId: "desafio-nivel5" }
            ]
        },
        "desafio-nivel4-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio das Aves Guardiãs foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel5": {
            message: "🔹 NÍVEL 5 – O TEMA OFICIAL\n\nQual é o tema oficial do JamCam 2025?",
            options: [
                { icon: "A)", label: "Unidos pela Natureza", action: "goto", nodeId: "desafio-nivel5-incorrecto" },
                { icon: "B)", label: "Américas Unidas pela Paz", action: "goto", nodeId: "desafio-nivel5-correcto" },
                { icon: "C)", label: "Juntos por um Futuro Melhor", action: "goto", nodeId: "desafio-nivel5-incorrecto" },
                { icon: "D)", label: "Escoteiros sem Fronteiras", action: "goto", nodeId: "desafio-nivel5-incorrecto" }
            ]
        },
        "desafio-nivel5-correcto": {
            message: "✅ Perfeito!\n\n'Américas Unidas pela Paz' é o tema oficial, inspirado na declaração da ONU de 2025 como o Ano Internacional da Paz e da Confiança.\n\nAvance para o Nível 6.",
            options: [
                { icon: "➡️", label: "Nível 6", action: "goto", nodeId: "desafio-nivel6" }
            ]
        },
        "desafio-nivel5-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio das Aves Guardiãs foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel6": {
            message: "🔹 NÍVEL 6 – A CIDADE ANFITRIÃ\n\nPelo que a cidade de Cali é conhecida mundialmente?",
            options: [
                { icon: "A)", label: "Capital do Café", action: "goto", nodeId: "desafio-nivel6-incorrecto" },
                { icon: "B)", label: "Capital Mundial da Salsa", action: "goto", nodeId: "desafio-nivel6-correcto" },
                { icon: "C)", label: "Cidade da Eterna Primavera", action: "goto", nodeId: "desafio-nivel6-incorrecto" },
                { icon: "D)", label: "Porta de Ouro da Colômbia", action: "goto", nodeId: "desafio-nivel6-incorrecto" }
            ]
        },
        "desafio-nivel6-correcto": {
            message: "✅ Incrível!\n\nCali é reconhecida como a Capital Mundial da Salsa, uma cidade vibrante com rica história e cultura incomparável.\n\nAvance para o Nível 7 (FINAL).",
            options: [
                { icon: "➡️", label: "Nível 7 (FINAL)", action: "goto", nodeId: "desafio-nivel7" }
            ]
        },
        "desafio-nivel6-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio das Aves Guardiãs foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel7": {
            message: "🔹 NÍVEL 7 – O TESTE FINAL\n\nQue valor o Anu-preto confiou a Cholao?",
            options: [
                { icon: "A)", label: "A liberdade", action: "goto", nodeId: "desafio-nivel7-incorrecto" },
                { icon: "B)", label: "A solidariedade", action: "goto", nodeId: "desafio-nivel7-incorrecto" },
                { icon: "C)", label: "A cooperação", action: "goto", nodeId: "desafio-nivel7-correcto" },
                { icon: "D)", label: "A empatia", action: "goto", nodeId: "desafio-nivel7-incorrecto" }
            ]
        },
        "desafio-nivel7-correcto": {
            message: "✅ CORRETO! 🎉🏆\n\nVocê completou o Desafio das Aves Guardiãs com todos os 7 níveis!\n\n🏁 INSTRUÇÃO FINAL:\n\n📝 REIVINDIQUE SEU PRÊMIO AQUI:\nhttps://forms.gle/PytYXN9hoELX8dmk8\n\n*A primeira inscrição válida será a vencedora do concurso da Cholao Store.*\n\nVá também ao WELCOME CENTER para validar sua participação.\n\n📍 INFORMAÇÃO:\n• Preencha todos os campos do formulário\n• Um prêmio por pessoa\n• Prêmios não transferíveis\n• Decisões da equipe são finais\n• Dinâmica válida até esgotar prêmios",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel7-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio das Aves Guardiãs foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-bloqueado": {
            message: "🔒 Desafio Bloqueado\n\nLamentamos, você já participou do Desafio da Viagem de Cholao com uma resposta incorreta.\n\nCada participante tem apenas uma oportunidade para completar o desafio.\n\nObrigado pela sua participação e continue aproveitando o JamCam 2025!",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-inicio": {
            message: "🌈 JAMCAM 2025\n\nA VIAGEM DE CHOLAO\n\n✨ O Legado Ancestral ✨\n\nVocê está pronto para descobrir a história de Cholao?\n\nVocê deve responder 7 perguntas corretamente para completar o desafio.",
            options: [
                { icon: "🚀", label: "Começar desafio!", action: "goto", nodeId: "desafio2-nivel1" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel1": {
            message: "🔹 NÍVEL 1 – O NASCIMENTO\n\nDo que Cholao nasceu?",
            options: [
                { icon: "A)", label: "De um ovo dourado", action: "goto", nodeId: "desafio2-nivel1-incorrecto" },
                { icon: "B)", label: "Dos sonhos e esperanças dos povos da América", action: "goto", nodeId: "desafio2-nivel1-correcto" },
                { icon: "C)", label: "Das montanhas mais altas", action: "goto", nodeId: "desafio2-nivel1-incorrecto" },
                { icon: "D)", label: "De um raio de sol", action: "goto", nodeId: "desafio2-nivel1-incorrecto" }
            ]
        },
        "desafio2-nivel1-correcto": {
            message: "✅ Correto!\n\nCholao nasceu de todos os sonhos e esperanças que os povos da América já compartilharam.\n\nContinue para o Nível 2.",
            options: [
                { icon: "➡️", label: "Nível 2", action: "goto", nodeId: "desafio2-nivel2" }
            ]
        },
        "desafio2-nivel1-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio da Viagem de Cholao foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel2": {
            message: "🔹 NÍVEL 2 – O GUARDIÃO\n\nPor quanto tempo Cholao voava incógnito observando as culturas da América?",
            options: [
                { icon: "A)", label: "Décadas", action: "goto", nodeId: "desafio2-nivel2-incorrecto" },
                { icon: "B)", label: "Séculos", action: "goto", nodeId: "desafio2-nivel2-correcto" },
                { icon: "C)", label: "Anos", action: "goto", nodeId: "desafio2-nivel2-incorrecto" },
                { icon: "D)", label: "Milênios", action: "goto", nodeId: "desafio2-nivel2-incorrecto" }
            ]
        },
        "desafio2-nivel2-correcto": {
            message: "✅ Muito bem!\n\nDurante séculos, Cholao voou incógnito de norte a sul, observando a evolução das culturas e aprendendo com cada tradição.\n\nAvance para o Nível 3.",
            options: [
                { icon: "➡️", label: "Nível 3", action: "goto", nodeId: "desafio2-nivel3" }
            ]
        },
        "desafio2-nivel2-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio da Viagem de Cholao foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel3": {
            message: "🔹 NÍVEL 3 – AS CORES\n\nO que representam as cores vibrantes da plumagem de Cholao?",
            options: [
                { icon: "A)", label: "As flores da Colômbia", action: "goto", nodeId: "desafio2-nivel3-incorrecto" },
                { icon: "B)", label: "As cores das bandeiras americanas", action: "goto", nodeId: "desafio2-nivel3-correcto" },
                { icon: "C)", label: "O arco-íris", action: "goto", nodeId: "desafio2-nivel3-incorrecto" },
                { icon: "D)", label: "As aves do continente", action: "goto", nodeId: "desafio2-nivel3-incorrecto" }
            ]
        },
        "desafio2-nivel3-correcto": {
            message: "✅ Excelente!\n\nAs penas de Cholao brilham com todas as cores das bandeiras americanas, representando a unidade do continente.\n\nAvance para o Nível 4.",
            options: [
                { icon: "➡️", label: "Nível 4", action: "goto", nodeId: "desafio2-nivel4" }
            ]
        },
        "desafio2-nivel3-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio da Viagem de Cholao foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel4": {
            message: "🔹 NÍVEL 4 – A MISSÃO\n\nQual poder especial tem o chamado de Cholao?",
            options: [
                { icon: "A)", label: "Controlar o clima", action: "goto", nodeId: "desafio2-nivel4-incorrecto" },
                { icon: "B)", label: "Despertar a memória ancestral de que a América é uma grande família", action: "goto", nodeId: "desafio2-nivel4-correcto" },
                { icon: "C)", label: "Fazer as pessoas voarem", action: "goto", nodeId: "desafio2-nivel4-incorrecto" },
                { icon: "D)", label: "Curar doenças", action: "goto", nodeId: "desafio2-nivel4-incorrecto" }
            ]
        },
        "desafio2-nivel4-correcto": {
            message: "✅ Perfeito!\n\nO chamado de Cholao tem o poder de despertar em cada coração jovem a memória ancestral de que todas as nações pertencem a uma grande família: América.\n\nAvance para o Nível 5.",
            options: [
                { icon: "➡️", label: "Nível 5", action: "goto", nodeId: "desafio2-nivel5" }
            ]
        },
        "desafio2-nivel4-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio da Viagem de Cholao foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel5": {
            message: "🔹 NÍVEL 5 – OS QUATRO VALORES\n\nQuantos valores fundamentais as aves guardiãs protegiam?",
            options: [
                { icon: "A)", label: "Três valores", action: "goto", nodeId: "desafio2-nivel5-incorrecto" },
                { icon: "B)", label: "Cinco valores", action: "goto", nodeId: "desafio2-nivel5-incorrecto" },
                { icon: "C)", label: "Quatro valores", action: "goto", nodeId: "desafio2-nivel5-correcto" },
                { icon: "D)", label: "Seis valores", action: "goto", nodeId: "desafio2-nivel5-incorrecto" }
            ]
        },
        "desafio2-nivel5-correcto": {
            message: "✅ Incrível!\n\nAs quatro aves guardiãs protegiam quatro valores fundamentais: cooperação, empatia, solidariedade e liberdade.\n\nAvance para o Nível 6.",
            options: [
                { icon: "➡️", label: "Nível 6", action: "goto", nodeId: "desafio2-nivel6" }
            ]
        },
        "desafio2-nivel5-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio da Viagem de Cholao foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel6": {
            message: "🔹 NÍVEL 6 – O TESOURO\n\nQual era o tesouro mais precioso do continente que Cholao guardava em sua memória?",
            options: [
                { icon: "A)", label: "O ouro e as riquezas", action: "goto", nodeId: "desafio2-nivel6-incorrecto" },
                { icon: "B)", label: "As histórias de união e fraternidade", action: "goto", nodeId: "desafio2-nivel6-correcto" },
                { icon: "C)", label: "Os templos antigos", action: "goto", nodeId: "desafio2-nivel6-incorrecto" },
                { icon: "D)", label: "As montanhas sagradas", action: "goto", nodeId: "desafio2-nivel6-incorrecto" }
            ]
        },
        "desafio2-nivel6-correcto": {
            message: "✅ Fantástico!\n\nAs histórias de união e fraternidade eram o tesouro mais precioso do continente, guardadas na memória de Cholao.\n\nAvance para o Nível 7 (FINAL).",
            options: [
                { icon: "➡️", label: "Nível 7 (FINAL)", action: "goto", nodeId: "desafio2-nivel7" }
            ]
        },
        "desafio2-nivel6-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio da Viagem de Cholao foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel7": {
            message: "🔹 NÍVEL 7 – A TRANSFORMAÇÃO\n\nO que aconteceu quando Cholao recebeu os quatro valores das aves guardiãs?",
            options: [
                { icon: "A)", label: "Perdeu suas penas", action: "goto", nodeId: "desafio2-nivel7-incorrecto" },
                { icon: "B)", label: "Ficou invisível", action: "goto", nodeId: "desafio2-nivel7-incorrecto" },
                { icon: "C)", label: "Suas cores brilharam ainda mais", action: "goto", nodeId: "desafio2-nivel7-correcto" },
                { icon: "D)", label: "Cresceu de tamanho", action: "goto", nodeId: "desafio2-nivel7-incorrecto" }
            ]
        },
        "desafio2-nivel7-correcto": {
            message: "✅ CORRETO! 🎉🏆\n\nVocê completou o Desafio da Viagem de Cholao com todos os 7 níveis!\n\nCholao guardou os valores em sua plumagem fazendo suas cores brilharem ainda mais.\n\n🏁 INSTRUÇÃO FINAL:\n\n📝 REIVINDIQUE SEU PRÊMIO AQUI:\nhttps://forms.gle/PytYXN9hoELX8dmk8\n\n*A primeira inscrição válida será a vencedora do concurso da Cholao Store.*\n\nVá também ao WELCOME CENTER para validar sua participação.\n\n📍 INFORMAÇÃO:\n• Preencha todos os campos do formulário\n• Um prêmio por pessoa\n• Prêmios não transferíveis\n• Decisões da equipe são finais\n• Dinâmica válida até esgotar prêmios",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel7-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio da Viagem de Cholao foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-bloqueado": {
            message: "🔒 Desafio Bloqueado\n\nLamentamos, você já participou do Desafio dos Guardiões do Acampamento com uma resposta incorreta.\n\nCada participante tem apenas uma oportunidade para completar o desafio.\n\nObrigado pela sua participação e continue aproveitando o JamCam 2025!",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-inicio": {
            message: "⛺ JAMCAM 2025\n\nOS GUARDIÕES DO ACAMPAMENTO\n\n✨ Conheça Sua Aventura ✨\n\nVocê está pronto para provar que conhece o JamCam?\n\nVocê deve responder 7 perguntas corretamente sobre o acampamento e o evento.",
            options: [
                { icon: "🚀", label: "Começar desafio!", action: "goto", nodeId: "desafio3-nivel1" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel1": {
            message: "🔹 NÍVEL 1 – AS DATAS\n\nQuando os membros do EIS e CMT entram no local do JamCam?",
            options: [
                { icon: "A)", label: "25 de dezembro de 2025", action: "goto", nodeId: "desafio3-nivel1-incorrecto" },
                { icon: "B)", label: "26 de dezembro de 2025", action: "goto", nodeId: "desafio3-nivel1-correcto" },
                { icon: "C)", label: "27 de dezembro de 2025", action: "goto", nodeId: "desafio3-nivel1-incorrecto" },
                { icon: "D)", label: "28 de dezembro de 2025", action: "goto", nodeId: "desafio3-nivel1-incorrecto" }
            ]
        },
        "desafio3-nivel1-correcto": {
            message: "✅ Correto!\n\nOs membros do EIS e CMT entram em 26 de dezembro de 2025, um dia antes do início oficial.\n\nContinue para o Nível 2.",
            options: [
                { icon: "➡️", label: "Nível 2", action: "goto", nodeId: "desafio3-nivel2" }
            ]
        },
        "desafio3-nivel1-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio dos Guardiões do Acampamento foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel2": {
            message: "🔹 NÍVEL 2 – A EQUIPE\n\nO que significa EIS?",
            options: [
                { icon: "A)", label: "Equipe Interamericana Scout", action: "goto", nodeId: "desafio3-nivel2-incorrecto" },
                { icon: "B)", label: "Equipe Internacional de Serviço", action: "goto", nodeId: "desafio3-nivel2-correcto" },
                { icon: "C)", label: "Esquadrão Internacional de Segurança", action: "goto", nodeId: "desafio3-nivel2-incorrecto" },
                { icon: "D)", label: "Equipe Instrutora Scout", action: "goto", nodeId: "desafio3-nivel2-incorrecto" }
            ]
        },
        "desafio3-nivel2-correcto": {
            message: "✅ Muito bem!\n\nEIS significa Equipe Internacional de Serviço, formada por voluntários scouts que apoiam o desenvolvimento do evento.\n\nAvance para o Nível 3.",
            options: [
                { icon: "➡️", label: "Nível 3", action: "goto", nodeId: "desafio3-nivel3" }
            ]
        },
        "desafio3-nivel2-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio dos Guardiões do Acampamento foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel3": {
            message: "🔹 NÍVEL 3 – O LUGAR\n\nOnde se realiza o JamCam 2025?",
            options: [
                { icon: "A)", label: "Parque Nacional Tayrona", action: "goto", nodeId: "desafio3-nivel3-incorrecto" },
                { icon: "B)", label: "Centro Campestre Comfandi Pance", action: "goto", nodeId: "desafio3-nivel3-correcto" },
                { icon: "C)", label: "Parque Simón Bolívar", action: "goto", nodeId: "desafio3-nivel3-incorrecto" },
                { icon: "D)", label: "Acampamento Scout Nacional", action: "goto", nodeId: "desafio3-nivel3-incorrecto" }
            ]
        },
        "desafio3-nivel3-correcto": {
            message: "✅ Excelente!\n\nO JamCam se realiza no Centro Campestre Comfandi Pance, um espaço natural rodeado de montanhas, rios e trilhas.\n\nAvance para o Nível 4.",
            options: [
                { icon: "➡️", label: "Nível 4", action: "goto", nodeId: "desafio3-nivel4" }
            ]
        },
        "desafio3-nivel3-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio dos Guardiões do Acampamento foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel4": {
            message: "🔹 NÍVEL 4 – A IDADE\n\nQual idade mínima você deve ter no início do JamCam para fazer parte do EIS?",
            options: [
                { icon: "A)", label: "16 anos", action: "goto", nodeId: "desafio3-nivel4-incorrecto" },
                { icon: "B)", label: "17 anos", action: "goto", nodeId: "desafio3-nivel4-incorrecto" },
                { icon: "C)", label: "18 anos", action: "goto", nodeId: "desafio3-nivel4-correcto" },
                { icon: "D)", label: "21 anos", action: "goto", nodeId: "desafio3-nivel4-incorrecto" }
            ]
        },
        "desafio3-nivel4-correcto": {
            message: "✅ Perfeito!\n\nVocê deve ter 18 anos ou mais no início do JamCam 2025 para fazer parte da Equipe Internacional de Serviço.\n\nAvance para o Nível 5.",
            options: [
                { icon: "➡️", label: "Nível 5", action: "goto", nodeId: "desafio3-nivel5" }
            ]
        },
        "desafio3-nivel4-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio dos Guardiões do Acampamento foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel5": {
            message: "🔹 NÍVEL 5 – OS PARTICIPANTES\n\nQue idades têm os participantes juvenis do JamCam?",
            options: [
                { icon: "A)", label: "10 a 16 anos", action: "goto", nodeId: "desafio3-nivel5-incorrecto" },
                { icon: "B)", label: "11 a 17 anos", action: "goto", nodeId: "desafio3-nivel5-correcto" },
                { icon: "C)", label: "12 a 18 anos", action: "goto", nodeId: "desafio3-nivel5-incorrecto" },
                { icon: "D)", label: "13 a 19 anos", action: "goto", nodeId: "desafio3-nivel5-incorrecto" }
            ]
        },
        "desafio3-nivel5-correcto": {
            message: "✅ Incrível!\n\nOs participantes juvenis são crianças e adolescentes entre 11 e 17 anos, organizados em patrulhas ou equipes de acordo com sua idade.\n\nAvance para o Nível 6.",
            options: [
                { icon: "➡️", label: "Nível 6", action: "goto", nodeId: "desafio3-nivel6" }
            ]
        },
        "desafio3-nivel5-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio dos Guardiões do Acampamento foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel6": {
            message: "🔹 NÍVEL 6 – A INSPIRAÇÃO\n\nEm qual declaração da ONU se inspira o tema do JamCam 2025?",
            options: [
                { icon: "A)", label: "Ano Internacional do Meio Ambiente", action: "goto", nodeId: "desafio3-nivel6-incorrecto" },
                { icon: "B)", label: "Ano Internacional da Paz e da Confiança", action: "goto", nodeId: "desafio3-nivel6-correcto" },
                { icon: "C)", label: "Ano Internacional da Juventude", action: "goto", nodeId: "desafio3-nivel6-incorrecto" },
                { icon: "D)", label: "Ano Internacional da Cooperação", action: "goto", nodeId: "desafio3-nivel6-incorrecto" }
            ]
        },
        "desafio3-nivel6-correcto": {
            message: "✅ Fantástico!\n\nO JamCam 2025 se inspira na declaração da ONU de 2025 como o Ano Internacional da Paz e da Confiança.\n\nAvance para o Nível 7 (FINAL).",
            options: [
                { icon: "➡️", label: "Nível 7 (FINAL)", action: "goto", nodeId: "desafio3-nivel7" }
            ]
        },
        "desafio3-nivel6-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio dos Guardiões do Acampamento foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel7": {
            message: "🔹 NÍVEL 7 – O MONUMENTO\n\nQual é o monumento mais emblemático de Cali localizado no Cerro de los Cristales?",
            options: [
                { icon: "A)", label: "Torre de Cali", action: "goto", nodeId: "desafio3-nivel7-incorrecto" },
                { icon: "B)", label: "Catedral Metropolitana", action: "goto", nodeId: "desafio3-nivel7-incorrecto" },
                { icon: "C)", label: "Cristo Rey", action: "goto", nodeId: "desafio3-nivel7-correcto" },
                { icon: "D)", label: "Cerro de las Tres Cruces", action: "goto", nodeId: "desafio3-nivel7-incorrecto" }
            ]
        },
        "desafio3-nivel7-correcto": {
            message: "✅ CORRETO! 🎉🏆\n\nVocê completou o Desafio dos Guardiões do Acampamento com todos os 7 níveis!\n\nO Cristo Rey é um monumento de 26 metros de altura que oferece uma vista panorâmica espetacular de Cali.\n\n🏁 INSTRUÇÃO FINAL:\n\n📝 REIVINDIQUE SEU PRÊMIO AQUI:\nhttps://forms.gle/PytYXN9hoELX8dmk8\n\n*A primeira inscrição válida será a vencedora do concurso da Cholao Store.*\n\nVá também ao WELCOME CENTER para validar sua participação.\n\n📍 INFORMAÇÃO:\n• Preencha todos os campos do formulário\n• Um prêmio por pessoa\n• Prêmios não transferíveis\n• Decisões da equipe são finais\n• Dinâmica válida até esgotar prêmios",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel7-incorrecto": {
            message: "❌ Resposta incorreta\n\n🔒 O Desafio dos Guardiões do Acampamento foi bloqueado para você.\n\nCada participante tem apenas uma oportunidade para completar o desafio. Obrigado pela sua participação.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        }
    }
};

