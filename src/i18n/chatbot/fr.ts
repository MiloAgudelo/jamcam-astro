export default {
    title: "Cholao",
    close: "Fermer",
    restart: "🔄 Redémarrer",
    typing: "En train d'écrire",
    nodes: {
        welcome: {
            message: "👋 Bonjour ! Je suis Cholao, votre assistant numérique au JamCam 2025.\n\nJe suis ici pour vous guider dans les activités, les emplacements, les services et le soutien pendant tout l'événement.\n\n👉 Dites-moi, de quoi avez-vous besoin maintenant ?",
            options: [
                { icon: "🌿", label: "Check-in Bien-être", action: "goto", nodeId: "checkin-bienestar" },
                { icon: "📍", label: "Emplacements JamCam", action: "goto", nodeId: "ubicaciones" },
                { icon: "🎯", label: "Activités", action: "goto", nodeId: "actividades" },
                { icon: "🧠", label: "Listening Ears", action: "goto", nodeId: "listening-ears" },
                { icon: "ℹ️", label: "Info Générale", action: "goto", nodeId: "info-general" },
                { icon: "🗣️", label: "Votre voix compte", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🌍", label: "Faits amusants", action: "goto", nodeId: "datos-curiosos" }
            ]
        },
        "checkin-bienestar": {
            message: "🦅 Je suis ici pour t'aider à préparer ton arrivée et faire ton enregistrement préalable.\n\nRendons ce processus rapide et facile.",
            options: [
                { icon: "✅", label: "Je suis prêt", action: "goto", nodeId: "checkin-pais" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "checkin-pais": {
            message: "🌎 D'abord, dis-moi : de quel pays viens-tu ?",
            options: [
                { icon: "🇨🇴", label: "Colombie", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇧🇷", label: "Brésil", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇦🇷", label: "Argentine", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇦", label: "Canada", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇭🇳", label: "Honduras", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇷", label: "Costa Rica", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇲🇽", label: "Mexique", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇱", label: "Chili", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇪🇨", label: "Équateur", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇩🇴", label: "République dominicaine", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇸🇻", label: "El Salvador", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇬🇹", label: "Guatemala", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇳🇮", label: "Nicaragua", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇦", label: "Panama", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇾", label: "Paraguay", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇪", label: "Pérou", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇷", label: "Porto Rico", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇻🇪", label: "Venezuela", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇸🇪", label: "Suède", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇦🇺", label: "Australie", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇱", label: "Pologne", action: "goto", nodeId: "checkin-rol" },
                { icon: "🌍", label: "FSI", action: "goto", nodeId: "checkin-rol" },
                { icon: "🌍", label: "CICE", action: "goto", nodeId: "checkin-rol" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "checkin-bienestar" }
            ]
        },
        "checkin-rol": {
            message: "🙋 Sélectionne ton rôle dans l'événement :",
            options: [
                { icon: "👦", label: "Scout", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🧑", label: "Éclaireur", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👨", label: "Rover", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🤝", label: "EIS / Service", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👔", label: "Chef de Délégation", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👤", label: "Adulte Accompagnant", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "📋", label: "Staff", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "checkin-pais" }
            ]
        },
        "checkin-sintomas": {
            message: "🧑‍⚕️ Symptômes ou malaises",
            options: [
                { icon: "😣", label: "Mal de tête", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤢", label: "Mal d'estomac", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤮", label: "Nausées", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🌡️", label: "Fièvre", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🌡️", label: "Sensation de fièvre", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😷", label: "Toux", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😤", label: "Problème respiratoire", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😵", label: "Vertiges ou faiblesse", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🩹", label: "Blessure récente", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤧", label: "Allergie active", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "✅", label: "Aucun", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "checkin-rol" }
            ]
        },
        "checkin-apoyo": {
            message: "As-tu besoin de Soutien Spécial ?\n\n✨ Si tu as besoin d'un soutien spécial pendant ton arrivée ou ton séjour, je peux transmettre l'information à l'équipe d'Hospitalité et de Protocole.",
            options: [
                { icon: "✅", label: "Oui, j'en ai besoin", action: "goto", nodeId: "checkin-apoyo-si" },
                { icon: "❌", label: "Non, tout va bien", action: "goto", nodeId: "checkin-apoyo-no" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "checkin-sintomas" }
            ]
        },
        "checkin-apoyo-si": {
            message: "Merci de nous avoir informés.\n\nÀ ton arrivée au Welcome Center, approche-toi de l'équipe de Protocole et d'Hospitalité et indique que tu as demandé un soutien médical dans le check-in de bien-être. Nous t'accompagnerons avec le personnel de santé.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "checkin-apoyo-no": {
            message: "Merci de nous avoir informés. Si tu as besoin de soutien plus tard, n'hésite pas à t'approcher du Welcome Center ou de l'équipe de Protocole et d'Hospitalité. Nous sommes là pour t'aider.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        ubicaciones: {
            message: "📖 Ici vous trouverez la carte générale du JAMCAM 2025, où vous pourrez identifier tous les emplacements principaux de l'événement en un seul endroit.",
            image: "/images/mapa-jamcam.png",
            download: "/images/mapa-jamcam.png",
            downloadLabel: "Télécharger la carte",
            options: [
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        actividades: {
            message: "🎯 Activités\n\nSélectionne ton programme :",
            options: [
                { icon: "🏕️", label: "Jamboree", action: "goto", nodeId: "actividades-jamboree" },
                { icon: "⛺", label: "Camporee", action: "goto", nodeId: "actividades-camporee" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-jamboree": {
            message: "Sélectionne ton Sous-camp :",
            options: [
                { icon: "🔰", label: "Urá Jürú", action: "goto", nodeId: "actividades-jamboree-juru" },
                { icon: "🔰", label: "Urá Chamí", action: "goto", nodeId: "actividades-jamboree-chami" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "actividades" }
            ]
        },
        "actividades-camporee": {
            message: "Sélectionne ton Sous-camp :",
            options: [
                { icon: "🔰", label: "Urá Dó", action: "goto", nodeId: "actividades-camporee-do" },
                { icon: "🔰", label: "Urá Chi", action: "goto", nodeId: "actividades-camporee-chi" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "actividades" }
            ]
        },
        "actividades-jamboree-juru": {
            message: "📅 Programme d'activités - Urá Jürú\n\nIci tu peux télécharger le programme complet d'activités pour ton sous-camp.",
            download: "/docs/horario-jamboree.pdf",
            downloadLabel: "Télécharger le programme",
            options: [
                { icon: "🔙", label: "Retour aux Activités", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-jamboree-chami": {
            message: "📅 Programme d'activités - Urá Chamí\n\nIci tu peux télécharger le programme complet d'activités pour ton sous-camp.",
            download: "/docs/horario-jamboree.pdf",
            downloadLabel: "Télécharger le programme",
            options: [
                { icon: "🔙", label: "Retour aux Activités", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-camporee-do": {
            message: "📅 Programme d'activités - Urá Dó\n\nIci tu peux télécharger le programme complet d'activités pour ton sous-camp.",
            download: "/docs/horario-camporee.pdf",
            downloadLabel: "Télécharger le programme",
            options: [
                { icon: "🔙", label: "Retour aux Activités", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-camporee-chi": {
            message: "📅 Programme d'activités - Urá Chi\n\nIci tu peux télécharger le programme complet d'activités pour ton sous-camp.",
            download: "/docs/horario-camporee.pdf",
            downloadLabel: "Télécharger le programme",
            options: [
                { icon: "🔙", label: "Retour aux Activités", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "listening-ears": {
            message: "🧠 LISTENING EARS\n\nRappelle-toi que nous avons des personnes prêtes à t'écouter 💚.",
            options: [
                { icon: "🙋", label: "Demander du soutien", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-solicitar-apoyo": {
            message: "C'est un espace sûr pour t'écouter et t'accompagner.\n\nIci tu peux prendre un moment pour identifier comment tu te sens et trouver du soutien, à ton rythme.\n\nVeux-tu partager comment tu te sens maintenant ?",
            options: [
                { icon: "😊", label: "Bien", action: "goto", nodeId: "le-bien" },
                { icon: "😟", label: "Anxieux", action: "goto", nodeId: "le-ansioso" },
                { icon: "😢", label: "Triste", action: "goto", nodeId: "le-triste" },
                { icon: "😡", label: "En colère", action: "goto", nodeId: "le-enojado" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "listening-ears" }
            ]
        },
        "le-bien": {
            message: "C'est bien que tu le partages ! 💚 Parfois, nous avons juste besoin de discuter un moment.\n\nTu peux t'approcher du 🛖 Point d'Écoute Scout.",
            image: "/images/mapa-jamcam.png",
            options: [
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-ansioso": {
            message: "Merci de le dire 🙏. Quand l'anxiété apparaît, il est préférable de faire une pause.\n\nEssaie ceci maintenant 👇\n\n1️⃣ Respire profondément : inspire en comptant jusqu'à 4, expire en comptant jusqu'à 6.\n2️⃣ Bois un peu d'eau.",
            options: [
                { icon: "✅", label: "Je me sens mieux", action: "goto", nodeId: "le-mejor" },
                { icon: "🛖", label: "Point de soutien", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-triste": {
            message: "Je comprends comment tu te sens 💚. La tristesse fait aussi partie de la vie, et c'est normal d'en parler.\n\nTu as deux options :\n\nTu peux t'approcher du 🛖 Point d'Écoute Scout pour parler avec quelqu'un en face à face.\n\nOu nous pouvons te guider avec une technique brève de respiration pour t'aider à trouver le calme.",
            options: [
                { icon: "🛖", label: "Point de soutien", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🧘", label: "Technique brève", action: "goto", nodeId: "le-tecnica-breve" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-enojado": {
            message: "Merci de le reconnaître 💪. La colère peut être forte, mais elle peut aussi être canalisée.\n\nJe recommande :\n\n1️⃣ Marche quelques minutes avant de répondre à quelqu'un.\n2️⃣ Si tu préfères, nous pouvons te guider avec une technique brève de respiration pour relâcher la tension.",
            options: [
                { icon: "✅", label: "Je me sens mieux", action: "goto", nodeId: "le-mejor" },
                { icon: "🧘", label: "Technique brève", action: "goto", nodeId: "le-tecnica-breve" },
                { icon: "🛖", label: "Point de soutien", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-mejor": {
            message: "Nous sommes heureux de savoir que tu te sens mieux maintenant.\n\nRappelle-toi que tu n'es pas seul/e : si à tout moment tu as besoin de soutien à nouveau, nous serons là pour t'accompagner.",
            options: [
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-tecnica-breve": {
            message: "🧘 Technique de Respiration\n\nFaisons une pause ensemble :\n\n1. Inspire profondément pendant 4 secondes\n2. Retiens ta respiration pendant 2 secondes\n3. Expire lentement pendant 6 secondes\n4. Répète 3 fois\n\nTe sens-tu mieux ?",
            options: [
                { icon: "✅", label: "Oui, je me sens mieux", action: "goto", nodeId: "le-mejor" },
                { icon: "🛖", label: "J'ai besoin de plus de soutien", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-punto-atencion": {
            message: "Tu peux t'approcher du 🛖 Point d'Écoute Scout.\n\nMerci de nous faire confiance.\n\nDans le camp, nous avons une équipe préparée pour fournir un soutien émotionnel.",
            image: "/images/mapa-jamcam.png",
            options: [
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-general": {
            message: "ℹ️ Informations Générales\n\nJ'ai des informations utiles pour toi 📖 :",
            options: [
                { icon: "🕒", label: "Bulletin Général", action: "goto", nodeId: "info-boletin" },
                { icon: "📌", label: "Code de Conduite", action: "goto", nodeId: "info-codigo-conducta" },
                { icon: "☎️", label: "Urgence 911", action: "goto", nodeId: "info-emergencia" },
                { icon: "🛡️", label: "Safe From Harm", action: "goto", nodeId: "info-safe-from-harm" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-boletin": {
            message: "🕒 Bulletin Général\n\n📎 Nous joignons le Bulletin Général du JamCam, où tu trouveras 🧭 toutes les informations officielles, 📅 mises à jour et pertinentes pour ta participation à l'événement.",
            download: "/docs/boletin-jamcam-5.pdf",
            downloadLabel: "Télécharger le bulletin",
            options: [
                { icon: "🔙", label: "Retour aux Infos Générales", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-codigo-conducta": {
            message: "📌 Code de Conduite JAMCAM 2025\n\nCe Code de Conduite est un guide pour prendre soin les uns des autres et vivre le JAMCAM dans un environnement sûr, respectueux et inclusif.\n\nIci tu trouveras les directives qui nous aident à coexister avec respect, protéger notre bien-être physique et émotionnel, et représenter fièrement les valeurs du Mouvement Scout pendant l'événement.\n\nQuelques points clés :\n\n1️⃣ Respect entre participants et bénévoles.\n2️⃣ La consommation d'alcool ou de substances n'est pas autorisée.\n3️⃣ Soin des installations et de l'environnement.\n4️⃣ Participation active aux activités assignées.\n\n👉 Tu peux lire le règlement complet ici :",
            download: "/docs/asp-codigo-de-conducta.pdf",
            downloadLabel: "Télécharger le code de conduite",
            options: [
                { icon: "🔙", label: "Retour aux Infos Générales", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-emergencia": {
            message: "☎️ Urgence 911\n\nVoici les contacts d'urgence du camp 📞 :\n\n🚑 Santé / Soins psychologiques : +57 XXX XXX XXXX\n🚨 Sécurité du camp : +57 XXX XXX XXXX\n📢 Organisation générale : +57 XXX XXX XXXX",
            options: [
                { icon: "🔙", label: "Retour aux Infos Générales", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-safe-from-harm": {
            message: "🛡️ Safe From Harm\n\nSélectionne l'option dont tu as besoin :",
            options: [
                { icon: "ℹ️", label: "Infos Générales", action: "link", url: "https://www.jamcam2025.com/safe-from-harm" },
                { icon: "📚", label: "Cours Safe from Harm", action: "link", url: "https://learn.scout.org/resource/safe-harm-interamerican-scout-jamcam-learning-path" },
                { icon: "🔙", label: "Retour aux Infos Générales", action: "goto", nodeId: "info-general" }
            ]
        },
        "tu-voz-cuenta": {
            message: "🗣️ Votre voix compte\n\nCet espace est conçu pour que vous puissiez partager votre expérience et votre perception du JAMCAM.\nGrâce à de brefs sondages, vous pourrez nous aider à identifier ce qui fonctionne bien et ce que nous pouvons améliorer, pour continuer à prendre soin de l'expérience de tous.",
            options: [
                { icon: "✅", label: "Sondage de bienvenue", action: "goto", nodeId: "encuesta-bienvenida" },
                { icon: "📋", label: "Sondage quotidien", action: "goto", nodeId: "encuesta-diaria" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-bienvenida": {
            message: "📊 Sondage d'arrivée et de bienvenue\n\nCe sondage est uniquement pour les chefs de contingent.\n\nVotre opinion est très importante pour nous. Veuillez compléter le sondage pour nous aider à améliorer l'expérience du JamCam.\n\n🔗 https://forms.cloud.microsoft/r/75WqDHq5LP",
            options: [
                { icon: "📝", label: "Ouvrir le sondage", action: "link", url: "https://forms.cloud.microsoft/r/75WqDHq5LP" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-diaria": {
            message: "📊 Sondage d'évaluation quotidien\n\nVos commentaires quotidiens nous aident à améliorer continuellement l'événement.\n\nVeuillez partager votre expérience de la journée.\n\n🔗 https://forms.cloud.microsoft/r/VzQeNiMw29",
            options: [
                { icon: "📝", label: "Ouvrir le sondage", action: "link", url: "https://forms.cloud.microsoft/r/VzQeNiMw29" },
                { icon: "🔙", label: "Retour", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🏠", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-curiosos": {
            message: "🥤 Saviez-vous que \"Cholao\" est une boisson typique de Cali?\n\nCali est située dans la région du Pacifique de la Colombie, connue pour sa diversité culturelle, sa joie et sa saveur.\n\n👉 Voulez-vous en savoir plus sur Cali et le JamCam?",
            options: [
                { icon: "🌍", label: "Autre fait amusant", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-curiosos-menu": {
            message: "🌍 Choisissez un fait amusant à découvrir:",
            options: [
                { icon: "🌎", label: "JamCam International", action: "goto", nodeId: "datos-jamcam" },
                { icon: "🐦", label: "Cholao vous accompagne", action: "goto", nodeId: "datos-cholao" },
                { icon: "☁️", label: "Succursale du Ciel", action: "goto", nodeId: "datos-sucursal" },
                { icon: "💃", label: "Capitale de la Salsa", action: "goto", nodeId: "datos-salsa" },
                { icon: "🏛️", label: "Histoire de Cali", action: "goto", nodeId: "datos-historia" },
                { icon: "👥", label: "Troisième ville", action: "goto", nodeId: "datos-poblacion" },
                { icon: "🗿", label: "Christ Roi", action: "goto", nodeId: "datos-cristo" },
                { icon: "🎵", label: "Festival Petronio", action: "goto", nodeId: "datos-petronio" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-jamcam": {
            message: "🌎 Le JamCam 2025 rassemble des participants de plus de 20 pays, ce qui en fait l'un des plus grands rassemblements scouts internationaux de la région.",
            options: [
                { icon: "🌍", label: "Autre fait amusant", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-cholao": {
            message: "🐦 Cholao ne fait pas qu'informer... il vous accompagne également, conçu pour vous aider, vous guider et vous écouter tout au long de l'événement.",
            options: [
                { icon: "🌍", label: "Autre fait amusant", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-sucursal": {
            message: "☁️ Cali est connue sous le nom de \"Succursale du Ciel\", un surnom qui reflète la beauté de ses paysages, son climat chaud et la chaleur de ses habitants.",
            options: [
                { icon: "🌍", label: "Autre fait amusant", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-salsa": {
            message: "💃 Cali est reconnue comme la \"Capitale Mondiale de la Salsa\". La ville vibre avec cette musique et possède des académies, des festivals et une culture salsera unique qui attire les danseurs du monde entier.",
            options: [
                { icon: "🌍", label: "Autre fait amusant", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-historia": {
            message: "🏛️ Santiago de Cali a été fondée le 25 juillet 1536 par Sebastián de Belalcázar, ce qui en fait l'une des plus anciennes villes d'Amérique. Elle a plus de 480 ans d'histoire riche en culture et en tradition.",
            options: [
                { icon: "🌍", label: "Autre fait amusant", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-poblacion": {
            message: "👥 Cali est la troisième ville la plus peuplée de Colombie, après Bogotá et Medellín. C'est le principal centre économique et culturel du sud-ouest colombien.",
            options: [
                { icon: "🌍", label: "Autre fait amusant", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-cristo": {
            message: "🗿 Sur la colline de los Cristales se dresse le monument au Christ Roi, une imposante statue de 26 mètres de haut qui domine la ville et est l'un des symboles les plus emblématiques de Cali.",
            options: [
                { icon: "🌍", label: "Autre fait amusant", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-petronio": {
            message: "🎵 Cali accueille le Festival de Musique du Pacifique Petronio Álvarez, l'événement de musique afro-colombienne le plus important du pays, qui célèbre chaque année la richesse culturelle du Pacifique colombien.",
            options: [
                { icon: "🌍", label: "Autre fait amusant", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Menu Principal", action: "goto", nodeId: "welcome" }
            ]
        }
    }
};

