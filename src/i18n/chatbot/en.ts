export default {
    title: "Cholao",
    close: "Close",
    restart: "🔄 Restart",
    typing: "Typing",
    nodes: {
        welcome: {
            message: "👋 Hello! I'm Cholao, your digital assistant at JamCam 2025.\n\nI'm here to guide you through activities, locations, services, and support throughout the event.\n\n👉 Tell me, what do you need now?",
            options: [
                { icon: "🏆", label: "JamCam Challenges", action: "goto", nodeId: "desafios-menu" },
                { icon: "📍", label: "JamCam Locations", action: "goto", nodeId: "ubicaciones" },
                { icon: "🎯", label: "Activities", action: "goto", nodeId: "actividades" },
                { icon: "🧠", label: "Listening Ears", action: "goto", nodeId: "listening-ears" },
                { icon: "ℹ️", label: "General Info", action: "goto", nodeId: "info-general" },
                { icon: "🗣️", label: "Your Opinion Matters", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🌍", label: "Fun Facts", action: "goto", nodeId: "datos-curiosos" }
            ]
        },
        "desafios-menu": {
            message: "🏆 JAMCAM 2025 CHALLENGES\n\nTest your knowledge and win prizes!\n\nChoose one of the 3 available challenges:\n\n🦜 **Guardian Birds** - Discover the 4 birds and their sacred values\n\n🌈 **Cholao's Journey** - Learn the ancestral story of our macaw\n\n⛺ **Camp Guardians** - Prove you know JamCam\n\n⚠️ Each challenge has 7 questions. If you fail, that challenge will be permanently blocked.\n\nWhich challenge do you want to try?",
            options: [
                { icon: "🦜", label: "Guardian Birds", action: "goto", nodeId: "desafio-inicio" },
                { icon: "🌈", label: "Cholao's Journey", action: "goto", nodeId: "desafio2-inicio" },
                { icon: "⛺", label: "Camp Guardians", action: "goto", nodeId: "desafio3-inicio" },
                { icon: "🔙", label: "Back to menu", action: "goto", nodeId: "welcome" }
            ]
        },
        ubicaciones: {
            message: "📍 JamCam Locations\n\nSelect the map you need:",
            options: [
                { icon: "🗺️", label: "General Map", action: "goto", nodeId: "ubicaciones-general" },
                { icon: "🏕️", label: "Services Map", action: "goto", nodeId: "ubicaciones-servicios" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "ubicaciones-general": {
            message: "🗺️ JAMCAM 2025 General Map\n\nHere you'll find the general event map, where you can identify all the main camp locations.",
            image: "/images/mapa-jamcam.png",
            download: "/images/mapa-jamcam.png",
            downloadLabel: "Download general map",
            options: [
                { icon: "🔙", label: "Back to Locations", action: "goto", nodeId: "ubicaciones" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "ubicaciones-servicios": {
            message: "🏕️ JamCam 2025 Services Map\n\nHere you'll find the location of all services: restrooms, showers, hydration points, commercial areas, activity zones and more.",
            image: "/images/mapa-servicios.png",
            download: "/docs/mapa-servicios.pdf",
            downloadLabel: "Download services map (PDF)",
            options: [
                { icon: "🔙", label: "Back to Locations", action: "goto", nodeId: "ubicaciones" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        actividades: {
            message: "🎯 Activities\n\nSelect your program:",
            options: [
                { icon: "🏕️", label: "Jamboree", action: "goto", nodeId: "actividades-jamboree" },
                { icon: "⛺", label: "Camporee", action: "goto", nodeId: "actividades-camporee" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-jamboree": {
            message: "Select your Subcamp:",
            options: [
                { icon: "🔰", label: "Urá Jürú", action: "goto", nodeId: "actividades-jamboree-juru" },
                { icon: "🔰", label: "Urá Chamí", action: "goto", nodeId: "actividades-jamboree-chami" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "actividades" }
            ]
        },
        "actividades-camporee": {
            message: "Select your Subcamp:",
            options: [
                { icon: "🔰", label: "Urá Dó", action: "goto", nodeId: "actividades-camporee-do" },
                { icon: "🔰", label: "Urá Chi", action: "goto", nodeId: "actividades-camporee-chi" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "actividades" }
            ]
        },
        "actividades-jamboree-juru": {
            message: "📅 Activity Schedule - Urá Jürú\n\nHere you can download the complete activity schedule for your subcamp.",
            download: "/docs/horario-jamboree.pdf",
            downloadLabel: "Download schedule",
            options: [
                { icon: "🔙", label: "Back to Activities", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-jamboree-chami": {
            message: "📅 Activity Schedule - Urá Chamí\n\nHere you can download the complete activity schedule for your subcamp.",
            download: "/docs/horario-jamboree.pdf",
            downloadLabel: "Download schedule",
            options: [
                { icon: "🔙", label: "Back to Activities", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-camporee-do": {
            message: "📅 Activity Schedule - Urá Dó\n\nHere you can download the complete activity schedule for your subcamp.",
            download: "/docs/horario-camporee.pdf",
            downloadLabel: "Download schedule",
            options: [
                { icon: "🔙", label: "Back to Activities", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "actividades-camporee-chi": {
            message: "📅 Activity Schedule - Urá Chi\n\nHere you can download the complete activity schedule for your subcamp.",
            download: "/docs/horario-camporee.pdf",
            downloadLabel: "Download schedule",
            options: [
                { icon: "🔙", label: "Back to Activities", action: "goto", nodeId: "actividades" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "listening-ears": {
            message: "🧠 LISTENING EARS\n\nRemember that we have people ready to listen to you 💚.",
            options: [
                { icon: "🙋", label: "Request Support", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-solicitar-apoyo": {
            message: "This is a safe space to listen to you and accompany you.\n\nHere you can take a moment to identify how you feel and find support, at your own pace.\n\nWould you like to share how you feel right now?",
            options: [
                { icon: "😊", label: "Good", action: "goto", nodeId: "le-bien" },
                { icon: "😟", label: "Anxious", action: "goto", nodeId: "le-ansioso" },
                { icon: "😢", label: "Sad", action: "goto", nodeId: "le-triste" },
                { icon: "😡", label: "Angry", action: "goto", nodeId: "le-enojado" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "listening-ears" }
            ]
        },
        "le-bien": {
            message: "It's great that you share it! 💚 Sometimes we just need to chat for a while.\n\nYou can approach the 🛖 Scout Listening Point.",
            image: "/images/mapa-jamcam.png",
            options: [
                { icon: "🔙", label: "Back", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-ansioso": {
            message: "Thank you for saying it 🙏. When anxiety appears, it's best to take a pause.\n\nTry this right now 👇\n\n1️⃣ Breathe deeply: inhale counting to 4, exhale counting to 6.\n2️⃣ Drink some water.",
            options: [
                { icon: "✅", label: "I feel better", action: "goto", nodeId: "le-mejor" },
                { icon: "🛖", label: "Support point", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-triste": {
            message: "I understand how you feel 💚. Sadness is also part of life, and it's normal to talk about it.\n\nYou have two options:\n\nYou can approach the 🛖 Scout Listening Point to talk with someone face to face.\n\nOr we can guide you with a brief breathing technique to help you find calm.",
            options: [
                { icon: "🛖", label: "Support point", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🧘", label: "Brief technique", action: "goto", nodeId: "le-tecnica-breve" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-enojado": {
            message: "Thank you for recognizing it 💪. Anger can feel strong, but it can also be channeled.\n\nI recommend:\n\n1️⃣ Walk for a couple of minutes before responding to someone.\n2️⃣ If you prefer, we can guide you with a brief breathing technique to release tension.",
            options: [
                { icon: "✅", label: "I feel better", action: "goto", nodeId: "le-mejor" },
                { icon: "🧘", label: "Brief technique", action: "goto", nodeId: "le-tecnica-breve" },
                { icon: "🛖", label: "Support point", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-mejor": {
            message: "We're glad to know that you feel better now.\n\nRemember that you are not alone: if at any time you need support again, we will be here to accompany you.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "le-tecnica-breve": {
            message: "🧘 Breathing Technique\n\nLet's take a pause together:\n\n1. Inhale deeply for 4 seconds\n2. Hold your breath for 2 seconds\n3. Exhale slowly for 6 seconds\n4. Repeat 3 times\n\nDo you feel better?",
            options: [
                { icon: "✅", label: "Yes, I feel better", action: "goto", nodeId: "le-mejor" },
                { icon: "🛖", label: "I need more support", action: "goto", nodeId: "le-punto-atencion" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "le-solicitar-apoyo" }
            ]
        },
        "le-punto-atencion": {
            message: "You can approach the 🛖 Scout Listening Point.\n\nThank you for trusting us.\n\nWithin the camp we have a team prepared to provide emotional support.",
            image: "/images/mapa-jamcam.png",
            options: [
                { icon: "🔙", label: "Back", action: "goto", nodeId: "le-solicitar-apoyo" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-general": {
            message: "ℹ️ General Information\n\nI have useful information for you 📖:",
            options: [
                { icon: "🕒", label: "General Bulletin", action: "goto", nodeId: "info-boletin" },
                { icon: "📌", label: "Code of Conduct", action: "goto", nodeId: "info-codigo-conducta" },
                { icon: "☎️", label: "Emergency Line", action: "goto", nodeId: "info-emergencia" },
                { icon: "🛡️", label: "Safe From Harm", action: "goto", nodeId: "info-safe-from-harm" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-boletin": {
            message: "🕒 General Bulletin\n\n📎 We attach the General Bulletin of JamCam, where you will find 🧭 all the official, 📅 updated and relevant information for your participation in the event.",
            download: "/docs/boletin-jamcam-5.pdf",
            downloadLabel: "Download bulletin",
            options: [
                { icon: "🔙", label: "Back to General Info", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-codigo-conducta": {
            message: "📌 Code of Conduct JAMCAM 2025\n\nThis Code of Conduct is a guide to take care of each other and live JAMCAM in a safe, respectful and inclusive environment.\n\nHere you will find the guidelines that help us coexist with respect, protect our physical and emotional well-being, and proudly represent the values of the Scout Movement during the event.\n\nSome key points:\n\n1️⃣ Respect between participants and volunteers.\n2️⃣ Consumption of alcohol or substances is not allowed.\n3️⃣ Care of facilities and the environment.\n4️⃣ Active participation in assigned activities.\n\n👉 You can read the complete regulations here:",
            download: "/docs/asp-codigo-de-conducta.pdf",
            downloadLabel: "Download code of conduct",
            options: [
                { icon: "🔙", label: "Back to General Info", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-emergencia": {
            message: "🚨 EMERGENCY LINE – JAMCAM COLOMBIA 2025 🚨\n\nEIS Team, we remind you that in case of any medical emergency, risk situation, or need for immediate support, the following official line is available:\n\n📞 +57 311 690 9423\n\n👉 Use it when:\n\n• There is a medical emergency.\n• A risk situation arises\n• A participant or volunteer requires immediate assistance.\n\n🧭 Remember to apply the PAS procedure:\nProtect – Alert – Rescue",
            options: [
                { icon: "📞", label: "Call now", action: "link", url: "tel:+573116909423" },
                { icon: "🔙", label: "Back to General Info", action: "goto", nodeId: "info-general" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "info-safe-from-harm": {
            message: "🛡️ Safe From Harm\n\nSelect the option you need:",
            options: [
                { icon: "ℹ️", label: "General Info", action: "link", url: "https://www.jamcam2025.com/safe-from-harm" },
                { icon: "📚", label: "Safe from Harm Course", action: "link", url: "https://learn.scout.org/resource/safe-harm-interamerican-scout-jamcam-learning-path" },
                { icon: "🔙", label: "Back to General Info", action: "goto", nodeId: "info-general" }
            ]
        },
        "tu-voz-cuenta": {
            message: "🗣️ Your Opinion Matters\n\nThis space is designed for you to share your experience and perception of JAMCAM.\nThrough brief surveys, you can help us identify what is working well and what we can improve, to continue taking care of everyone's experience.",
            options: [
                { icon: "📋", label: "Final survey", action: "goto", nodeId: "encuesta-final" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-bienvenida": {
            message: "📊 Arrival and Welcome Survey\n\nThis survey is only for contingent leaders.\n\nYour opinion is very important to us. Please complete the survey to help us improve the JamCam experience.\n\n🔗 https://forms.cloud.microsoft/r/75WqDHq5LP",
            options: [
                { icon: "📝", label: "Open survey", action: "link", url: "https://forms.cloud.microsoft/r/75WqDHq5LP" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "encuesta-final": {
            message: "📊 Final Survey\n\nYour opinion is very important to us. Please complete this final survey to help us improve the JamCam experience.\n\n🔗 https://forms.cloud.microsoft/r/T8WBWr7ad6",
            options: [
                { icon: "📝", label: "Open survey", action: "link", url: "https://forms.cloud.microsoft/r/T8WBWr7ad6" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-curiosos": {
            message: "🥤 Did you know that \"Cholao\" is a typical drink from Cali?\n\nCali is located in the Pacific region of Colombia, known for its cultural diversity, joy, and flavor.\n\n👉 Would you like to learn more fun facts about Cali and JamCam?",
            options: [
                { icon: "🌍", label: "Another fun fact", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-curiosos-menu": {
            message: "🌍 Choose a fun fact to discover:",
            options: [
                { icon: "🌎", label: "International JamCam", action: "goto", nodeId: "datos-jamcam" },
                { icon: "🐦", label: "Cholao accompanies you", action: "goto", nodeId: "datos-cholao" },
                { icon: "☁️", label: "Branch of Heaven", action: "goto", nodeId: "datos-sucursal" },
                { icon: "💃", label: "Salsa Capital", action: "goto", nodeId: "datos-salsa" },
                { icon: "🏛️", label: "History of Cali", action: "goto", nodeId: "datos-historia" },
                { icon: "👥", label: "Third largest city", action: "goto", nodeId: "datos-poblacion" },
                { icon: "🗿", label: "Christ the King", action: "goto", nodeId: "datos-cristo" },
                { icon: "🎵", label: "Petronio Festival", action: "goto", nodeId: "datos-petronio" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-jamcam": {
            message: "🌎 JamCam 2025 brings together participants from more than 20 countries, making it one of the largest international scouting gatherings in the region.",
            options: [
                { icon: "🌍", label: "Another fun fact", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-cholao": {
            message: "🐦 Cholao doesn't just inform... it also accompanies you, designed to help, guide, and listen to you throughout the event.",
            options: [
                { icon: "🌍", label: "Another fun fact", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-sucursal": {
            message: "☁️ Cali is known as the \"Branch of Heaven\", a nickname that reflects the beauty of its landscapes, its warm climate, and the warmth of its people.",
            options: [
                { icon: "🌍", label: "Another fun fact", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-salsa": {
            message: "💃 Cali is recognized as the \"World Capital of Salsa\". The city vibrates with this music and has academies, festivals, and a unique salsa culture that attracts dancers from around the world.",
            options: [
                { icon: "🌍", label: "Another fun fact", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-historia": {
            message: "🏛️ Santiago de Cali was founded on July 25, 1536 by Sebastián de Belalcázar, making it one of the oldest cities in America. It has more than 480 years of history rich in culture and tradition.",
            options: [
                { icon: "🌍", label: "Another fun fact", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-poblacion": {
            message: "👥 Cali is the third most populous city in Colombia, after Bogotá and Medellín. It is the main economic and cultural center of southwestern Colombia.",
            options: [
                { icon: "🌍", label: "Another fun fact", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-cristo": {
            message: "🗿 On the hill of Cristales stands the monument to Christ the King, an imposing 26-meter-high statue that dominates the city and is one of the most emblematic symbols of Cali.",
            options: [
                { icon: "🌍", label: "Another fun fact", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "datos-petronio": {
            message: "🎵 Cali is home to the Petronio Álvarez Pacific Music Festival, the most important Afro-Colombian music event in the country, which celebrates the cultural richness of the Colombian Pacific every year.",
            options: [
                { icon: "🌍", label: "Another fun fact", action: "goto", nodeId: "datos-curiosos-menu" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-bloqueado": {
            message: "🔒 Challenge Blocked\n\nWe're sorry, you have already participated in the Guardian Birds Challenge with an incorrect answer.\n\nEach participant has only one opportunity to complete the challenge.\n\nThank you for your participation and continue enjoying JamCam 2025!",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-inicio": {
            message: "🦜 JAMCAM 2025\n\nTHE GUARDIAN BIRDS CHALLENGE\n\n✨ Americas United For Peace ✨\n\nAre you ready to begin this adventure?\n\nYou must answer 3 questions correctly to complete the challenge.",
            options: [
                { icon: "🚀", label: "Start challenge!", action: "goto", nodeId: "desafio-nivel1" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel1": {
            message: "🔹 LEVEL 1 – THE ORIGIN\n\nWho is the legendary macaw that guides JamCam 2025?",
            options: [
                { icon: "A)", label: "Smooth-billed Ani", action: "goto", nodeId: "desafio-nivel1-incorrecto" },
                { icon: "B)", label: "Cholao", action: "goto", nodeId: "desafio-nivel1-correcto" },
                { icon: "C)", label: "Muscovy Duck", action: "goto", nodeId: "desafio-nivel1-incorrecto" },
                { icon: "D)", label: "Blue-gray Tanager", action: "goto", nodeId: "desafio-nivel1-incorrecto" }
            ]
        },
        "desafio-nivel1-correcto": {
            message: "✅ Correct!\n\nYou've shown that you know the origin! Cholao is the legendary macaw that guides us on this adventure.\n\nContinue to Level 2.",
            options: [
                { icon: "➡️", label: "Level 2", action: "goto", nodeId: "desafio-nivel2" }
            ]
        },
        "desafio-nivel1-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Guardian Birds Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel2": {
            message: "🔹 LEVEL 2 – THE GUARDIAN BIRDS\n\nWhat value is disappearing according to the Blue-headed Parrot?",
            options: [
                { icon: "A)", label: "Cooperation", action: "goto", nodeId: "desafio-nivel2-incorrecto" },
                { icon: "B)", label: "Freedom", action: "goto", nodeId: "desafio-nivel2-incorrecto" },
                { icon: "C)", label: "Empathy", action: "goto", nodeId: "desafio-nivel2-correcto" },
                { icon: "D)", label: "Creativity", action: "goto", nodeId: "desafio-nivel2-incorrecto" }
            ]
        },
        "desafio-nivel2-correcto": {
            message: "✅ Very good!\n\nYou've listened to the guardian birds! Empathy is the value that the Blue-headed Parrot protects.\n\nAdvance to Level 3.",
            options: [
                { icon: "➡️", label: "Level 3 (Final)", action: "goto", nodeId: "desafio-nivel3" }
            ]
        },
        "desafio-nivel2-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Guardian Birds Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel3": {
            message: "🔹 LEVEL 3 – THE FINAL FLIGHT\n\nHow many days does the JamCam 2025 adventure last?",
            options: [
                { icon: "A)", label: "Four days", action: "goto", nodeId: "desafio-nivel3-incorrecto" },
                { icon: "B)", label: "Five days", action: "goto", nodeId: "desafio-nivel3-incorrecto" },
                { icon: "C)", label: "Six days", action: "goto", nodeId: "desafio-nivel3-correcto" },
                { icon: "D)", label: "Seven days", action: "goto", nodeId: "desafio-nivel3-incorrecto" }
            ]
        },
        "desafio-nivel3-correcto": {
            message: "✅ Very good!\n\nYou've advanced to the next level! Continue with the challenge.\n\nAdvance to Level 4.",
            options: [
                { icon: "➡️", label: "Level 4", action: "goto", nodeId: "desafio-nivel4" }
            ]
        },
        "desafio-nivel3-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Guardian Birds Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel4": {
            message: "🔹 LEVEL 4 – THE SACRED VALUES\n\nWhich bird gave Cholao the value of solidarity?",
            options: [
                { icon: "A)", label: "Blue-headed Parrot", action: "goto", nodeId: "desafio-nivel4-incorrecto" },
                { icon: "B)", label: "Muscovy Duck", action: "goto", nodeId: "desafio-nivel4-incorrecto" },
                { icon: "C)", label: "Blue-gray Tanager", action: "goto", nodeId: "desafio-nivel4-correcto" },
                { icon: "D)", label: "Smooth-billed Ani", action: "goto", nodeId: "desafio-nivel4-incorrecto" }
            ]
        },
        "desafio-nivel4-correcto": {
            message: "✅ Excellent!\n\nThe Blue-gray Tanager offered solidarity so that young people can enjoy community life.\n\nAdvance to Level 5.",
            options: [
                { icon: "➡️", label: "Level 5", action: "goto", nodeId: "desafio-nivel5" }
            ]
        },
        "desafio-nivel4-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Guardian Birds Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel5": {
            message: "🔹 LEVEL 5 – THE OFFICIAL THEME\n\nWhat is the official theme of JamCam 2025?",
            options: [
                { icon: "A)", label: "United for Nature", action: "goto", nodeId: "desafio-nivel5-incorrecto" },
                { icon: "B)", label: "Americas United for Peace", action: "goto", nodeId: "desafio-nivel5-correcto" },
                { icon: "C)", label: "Together for a Better Future", action: "goto", nodeId: "desafio-nivel5-incorrecto" },
                { icon: "D)", label: "Scouts Without Borders", action: "goto", nodeId: "desafio-nivel5-incorrecto" }
            ]
        },
        "desafio-nivel5-correcto": {
            message: "✅ Perfect!\n\n'Americas United for Peace' is the official theme, inspired by the UN's declaration of 2025 as the International Year of Peace and Trust.\n\nAdvance to Level 6.",
            options: [
                { icon: "➡️", label: "Level 6", action: "goto", nodeId: "desafio-nivel6" }
            ]
        },
        "desafio-nivel5-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Guardian Birds Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel6": {
            message: "🔹 LEVEL 6 – THE HOST CITY\n\nWhat is the city of Cali known for worldwide?",
            options: [
                { icon: "A)", label: "Coffee Capital", action: "goto", nodeId: "desafio-nivel6-incorrecto" },
                { icon: "B)", label: "World Salsa Capital", action: "goto", nodeId: "desafio-nivel6-correcto" },
                { icon: "C)", label: "City of Eternal Spring", action: "goto", nodeId: "desafio-nivel6-incorrecto" },
                { icon: "D)", label: "Golden Gate of Colombia", action: "goto", nodeId: "desafio-nivel6-incorrecto" }
            ]
        },
        "desafio-nivel6-correcto": {
            message: "✅ Amazing!\n\nCali is recognized as the World Salsa Capital, a vibrant city with rich history and incomparable culture.\n\nAdvance to Level 7 (FINAL).",
            options: [
                { icon: "➡️", label: "Level 7 (FINAL)", action: "goto", nodeId: "desafio-nivel7" }
            ]
        },
        "desafio-nivel6-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Guardian Birds Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel7": {
            message: "🔹 LEVEL 7 – THE FINAL TEST\n\nWhat value did the Smooth-billed Ani entrust to Cholao?",
            options: [
                { icon: "A)", label: "Freedom", action: "goto", nodeId: "desafio-nivel7-incorrecto" },
                { icon: "B)", label: "Solidarity", action: "goto", nodeId: "desafio-nivel7-incorrecto" },
                { icon: "C)", label: "Cooperation", action: "goto", nodeId: "desafio-nivel7-correcto" },
                { icon: "D)", label: "Empathy", action: "goto", nodeId: "desafio-nivel7-incorrecto" }
            ]
        },
        "desafio-nivel7-correcto": {
            message: "✅ CORRECT! 🎉🏆\n\nYou've completed the Guardian Birds Challenge with all 7 levels!\n\n🏁 FINAL INSTRUCTION:\n\n📝 CLAIM YOUR PRIZE HERE:\nhttps://forms.gle/PytYXN9hoELX8dmk8\n\n*The first valid entry will be the winner of the Cholao Store contest.*\n\nAlso go to the WELCOME CENTER to validate your participation.\n\n📍 INFORMATION:\n• Complete all form fields\n• One prize per person\n• Prizes are non-transferable\n• Staff decisions are final\n• Activity valid until prizes run out",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio-nivel7-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Guardian Birds Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-bloqueado": {
            message: "🔒 Challenge Blocked\n\nWe're sorry, you have already participated in Cholao's Journey Challenge with an incorrect answer.\n\nEach participant has only one opportunity to complete the challenge.\n\nThank you for your participation and continue enjoying JamCam 2025!",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-inicio": {
            message: "🌈 JAMCAM 2025\n\nCHOLAO'S JOURNEY\n\n✨ The Ancestral Legacy ✨\n\nAre you ready to discover Cholao's story?\n\nYou must answer 7 questions correctly to complete the challenge.",
            options: [
                { icon: "🚀", label: "Start challenge!", action: "goto", nodeId: "desafio2-nivel1" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel1": {
            message: "🔹 LEVEL 1 – THE BIRTH\n\nWhat was Cholao born from?",
            options: [
                { icon: "A)", label: "From a golden egg", action: "goto", nodeId: "desafio2-nivel1-incorrecto" },
                { icon: "B)", label: "From the dreams and hopes of the peoples of America", action: "goto", nodeId: "desafio2-nivel1-correcto" },
                { icon: "C)", label: "From the highest mountains", action: "goto", nodeId: "desafio2-nivel1-incorrecto" },
                { icon: "D)", label: "From a ray of sunshine", action: "goto", nodeId: "desafio2-nivel1-incorrecto" }
            ]
        },
        "desafio2-nivel1-correcto": {
            message: "✅ Correct!\n\nCholao was born from all the dreams and hopes that the peoples of America had ever shared.\n\nContinue to Level 2.",
            options: [
                { icon: "➡️", label: "Level 2", action: "goto", nodeId: "desafio2-nivel2" }
            ]
        },
        "desafio2-nivel1-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 Cholao's Journey Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel2": {
            message: "🔹 LEVEL 2 – THE GUARDIAN\n\nHow long had Cholao been flying incognito observing the cultures of America?",
            options: [
                { icon: "A)", label: "Decades", action: "goto", nodeId: "desafio2-nivel2-incorrecto" },
                { icon: "B)", label: "Centuries", action: "goto", nodeId: "desafio2-nivel2-correcto" },
                { icon: "C)", label: "Years", action: "goto", nodeId: "desafio2-nivel2-incorrecto" },
                { icon: "D)", label: "Millennia", action: "goto", nodeId: "desafio2-nivel2-incorrecto" }
            ]
        },
        "desafio2-nivel2-correcto": {
            message: "✅ Very good!\n\nFor centuries, Cholao flew incognito from north to south, observing the evolution of cultures and learning from each tradition.\n\nAdvance to Level 3.",
            options: [
                { icon: "➡️", label: "Level 3", action: "goto", nodeId: "desafio2-nivel3" }
            ]
        },
        "desafio2-nivel2-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 Cholao's Journey Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel3": {
            message: "🔹 LEVEL 3 – THE COLORS\n\nWhat do the vibrant colors of Cholao's plumage represent?",
            options: [
                { icon: "A)", label: "The flowers of Colombia", action: "goto", nodeId: "desafio2-nivel3-incorrecto" },
                { icon: "B)", label: "The colors of American flags", action: "goto", nodeId: "desafio2-nivel3-correcto" },
                { icon: "C)", label: "The rainbow", action: "goto", nodeId: "desafio2-nivel3-incorrecto" },
                { icon: "D)", label: "The birds of the continent", action: "goto", nodeId: "desafio2-nivel3-incorrecto" }
            ]
        },
        "desafio2-nivel3-correcto": {
            message: "✅ Excellent!\n\nCholao's feathers shine with all the colors of American flags, representing the unity of the continent.\n\nAdvance to Level 4.",
            options: [
                { icon: "➡️", label: "Level 4", action: "goto", nodeId: "desafio2-nivel4" }
            ]
        },
        "desafio2-nivel3-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 Cholao's Journey Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel4": {
            message: "🔹 LEVEL 4 – THE MISSION\n\nWhat special power does Cholao's call have?",
            options: [
                { icon: "A)", label: "Control the weather", action: "goto", nodeId: "desafio2-nivel4-incorrecto" },
                { icon: "B)", label: "Awaken the ancestral memory that America is one great family", action: "goto", nodeId: "desafio2-nivel4-correcto" },
                { icon: "C)", label: "Make people fly", action: "goto", nodeId: "desafio2-nivel4-incorrecto" },
                { icon: "D)", label: "Cure diseases", action: "goto", nodeId: "desafio2-nivel4-incorrecto" }
            ]
        },
        "desafio2-nivel4-correcto": {
            message: "✅ Perfect!\n\nCholao's call has the power to awaken in each young heart the ancestral memory that all nations belong to one great family: America.\n\nAdvance to Level 5.",
            options: [
                { icon: "➡️", label: "Level 5", action: "goto", nodeId: "desafio2-nivel5" }
            ]
        },
        "desafio2-nivel4-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 Cholao's Journey Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel5": {
            message: "🔹 LEVEL 5 – THE FOUR VALUES\n\nHow many fundamental values did the guardian birds protect?",
            options: [
                { icon: "A)", label: "Three values", action: "goto", nodeId: "desafio2-nivel5-incorrecto" },
                { icon: "B)", label: "Five values", action: "goto", nodeId: "desafio2-nivel5-incorrecto" },
                { icon: "C)", label: "Four values", action: "goto", nodeId: "desafio2-nivel5-correcto" },
                { icon: "D)", label: "Six values", action: "goto", nodeId: "desafio2-nivel5-incorrecto" }
            ]
        },
        "desafio2-nivel5-correcto": {
            message: "✅ Amazing!\n\nThe four guardian birds protected four fundamental values: cooperation, empathy, solidarity, and freedom.\n\nAdvance to Level 6.",
            options: [
                { icon: "➡️", label: "Level 6", action: "goto", nodeId: "desafio2-nivel6" }
            ]
        },
        "desafio2-nivel5-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 Cholao's Journey Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel6": {
            message: "🔹 LEVEL 6 – THE TREASURE\n\nWhat was the most precious treasure of the continent that Cholao kept in his memory?",
            options: [
                { icon: "A)", label: "Gold and riches", action: "goto", nodeId: "desafio2-nivel6-incorrecto" },
                { icon: "B)", label: "The stories of union and brotherhood", action: "goto", nodeId: "desafio2-nivel6-correcto" },
                { icon: "C)", label: "The ancient temples", action: "goto", nodeId: "desafio2-nivel6-incorrecto" },
                { icon: "D)", label: "The sacred mountains", action: "goto", nodeId: "desafio2-nivel6-incorrecto" }
            ]
        },
        "desafio2-nivel6-correcto": {
            message: "✅ Fantastic!\n\nThe stories of union and brotherhood were the most precious treasure of the continent, kept in Cholao's memory.\n\nAdvance to Level 7 (FINAL).",
            options: [
                { icon: "➡️", label: "Level 7 (FINAL)", action: "goto", nodeId: "desafio2-nivel7" }
            ]
        },
        "desafio2-nivel6-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 Cholao's Journey Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel7": {
            message: "🔹 LEVEL 7 – THE TRANSFORMATION\n\nWhat happened when Cholao received the four values from the guardian birds?",
            options: [
                { icon: "A)", label: "Lost his feathers", action: "goto", nodeId: "desafio2-nivel7-incorrecto" },
                { icon: "B)", label: "Became invisible", action: "goto", nodeId: "desafio2-nivel7-incorrecto" },
                { icon: "C)", label: "His colors shone even brighter", action: "goto", nodeId: "desafio2-nivel7-correcto" },
                { icon: "D)", label: "Grew in size", action: "goto", nodeId: "desafio2-nivel7-incorrecto" }
            ]
        },
        "desafio2-nivel7-correcto": {
            message: "✅ CORRECT! 🎉🏆\n\nYou've completed Cholao's Journey Challenge with all 7 levels!\n\nCholao kept the values in his plumage making his colors shine even brighter.\n\n🏁 FINAL INSTRUCTION:\n\n📝 CLAIM YOUR PRIZE HERE:\nhttps://forms.gle/PytYXN9hoELX8dmk8\n\n*The first valid entry will be the winner of the Cholao Store contest.*\n\nAlso go to the WELCOME CENTER to validate your participation.\n\n📍 INFORMATION:\n• Complete all form fields\n• One prize per person\n• Prizes are non-transferable\n• Staff decisions are final\n• Activity valid until prizes run out",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio2-nivel7-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 Cholao's Journey Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-bloqueado": {
            message: "🔒 Challenge Blocked\n\nWe're sorry, you have already participated in the Camp Guardians Challenge with an incorrect answer.\n\nEach participant has only one opportunity to complete the challenge.\n\nThank you for your participation and continue enjoying JamCam 2025!",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-inicio": {
            message: "⛺ JAMCAM 2025\n\nTHE CAMP GUARDIANS\n\n✨ Know Your Adventure ✨\n\nAre you ready to prove that you know JamCam?\n\nYou must answer 7 questions correctly about the camp and the event.",
            options: [
                { icon: "🚀", label: "Start challenge!", action: "goto", nodeId: "desafio3-nivel1" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel1": {
            message: "🔹 LEVEL 1 – THE DATES\n\nWhen do EIS and CMT members enter the JamCam site?",
            options: [
                { icon: "A)", label: "December 25, 2025", action: "goto", nodeId: "desafio3-nivel1-incorrecto" },
                { icon: "B)", label: "December 26, 2025", action: "goto", nodeId: "desafio3-nivel1-correcto" },
                { icon: "C)", label: "December 27, 2025", action: "goto", nodeId: "desafio3-nivel1-incorrecto" },
                { icon: "D)", label: "December 28, 2025", action: "goto", nodeId: "desafio3-nivel1-incorrecto" }
            ]
        },
        "desafio3-nivel1-correcto": {
            message: "✅ Correct!\n\nEIS and CMT members enter on December 26, 2025, one day before the official start.\n\nContinue to Level 2.",
            options: [
                { icon: "➡️", label: "Level 2", action: "goto", nodeId: "desafio3-nivel2" }
            ]
        },
        "desafio3-nivel1-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Camp Guardians Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel2": {
            message: "🔹 LEVEL 2 – THE TEAM\n\nWhat does EIS stand for?",
            options: [
                { icon: "A)", label: "Inter-American Scout Team", action: "goto", nodeId: "desafio3-nivel2-incorrecto" },
                { icon: "B)", label: "International Service Team", action: "goto", nodeId: "desafio3-nivel2-correcto" },
                { icon: "C)", label: "International Security Squad", action: "goto", nodeId: "desafio3-nivel2-incorrecto" },
                { icon: "D)", label: "Scout Instructor Team", action: "goto", nodeId: "desafio3-nivel2-incorrecto" }
            ]
        },
        "desafio3-nivel2-correcto": {
            message: "✅ Very good!\n\nEIS stands for International Service Team, made up of scout volunteers who support the development of the event.\n\nAdvance to Level 3.",
            options: [
                { icon: "➡️", label: "Level 3", action: "goto", nodeId: "desafio3-nivel3" }
            ]
        },
        "desafio3-nivel2-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Camp Guardians Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel3": {
            message: "🔹 LEVEL 3 – THE PLACE\n\nWhere is JamCam 2025 held?",
            options: [
                { icon: "A)", label: "Tayrona National Park", action: "goto", nodeId: "desafio3-nivel3-incorrecto" },
                { icon: "B)", label: "Comfandi Pance Country Center", action: "goto", nodeId: "desafio3-nivel3-correcto" },
                { icon: "C)", label: "Simón Bolívar Park", action: "goto", nodeId: "desafio3-nivel3-incorrecto" },
                { icon: "D)", label: "National Scout Camp", action: "goto", nodeId: "desafio3-nivel3-incorrecto" }
            ]
        },
        "desafio3-nivel3-correcto": {
            message: "✅ Excellent!\n\nJamCam is held at Comfandi Pance Country Center, a natural space surrounded by mountains, rivers and trails.\n\nAdvance to Level 4.",
            options: [
                { icon: "➡️", label: "Level 4", action: "goto", nodeId: "desafio3-nivel4" }
            ]
        },
        "desafio3-nivel3-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Camp Guardians Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel4": {
            message: "🔹 LEVEL 4 – THE AGE\n\nWhat minimum age must you be at the start of JamCam to be part of the EIS?",
            options: [
                { icon: "A)", label: "16 years", action: "goto", nodeId: "desafio3-nivel4-incorrecto" },
                { icon: "B)", label: "17 years", action: "goto", nodeId: "desafio3-nivel4-incorrecto" },
                { icon: "C)", label: "18 years", action: "goto", nodeId: "desafio3-nivel4-correcto" },
                { icon: "D)", label: "21 years", action: "goto", nodeId: "desafio3-nivel4-incorrecto" }
            ]
        },
        "desafio3-nivel4-correcto": {
            message: "✅ Perfect!\n\nYou must be 18 years or older at the start of JamCam 2025 to be part of the International Service Team.\n\nAdvance to Level 5.",
            options: [
                { icon: "➡️", label: "Level 5", action: "goto", nodeId: "desafio3-nivel5" }
            ]
        },
        "desafio3-nivel4-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Camp Guardians Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel5": {
            message: "🔹 LEVEL 5 – THE PARTICIPANTS\n\nWhat ages are the youth participants of JamCam?",
            options: [
                { icon: "A)", label: "10 to 16 years", action: "goto", nodeId: "desafio3-nivel5-incorrecto" },
                { icon: "B)", label: "11 to 17 years", action: "goto", nodeId: "desafio3-nivel5-correcto" },
                { icon: "C)", label: "12 to 18 years", action: "goto", nodeId: "desafio3-nivel5-incorrecto" },
                { icon: "D)", label: "13 to 19 years", action: "goto", nodeId: "desafio3-nivel5-incorrecto" }
            ]
        },
        "desafio3-nivel5-correcto": {
            message: "✅ Amazing!\n\nYouth participants are children and adolescents between 11 and 17 years old, organized in patrols or teams according to their age.\n\nAdvance to Level 6.",
            options: [
                { icon: "➡️", label: "Level 6", action: "goto", nodeId: "desafio3-nivel6" }
            ]
        },
        "desafio3-nivel5-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Camp Guardians Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel6": {
            message: "🔹 LEVEL 6 – THE INSPIRATION\n\nWhich UN declaration inspires the theme of JamCam 2025?",
            options: [
                { icon: "A)", label: "International Year of the Environment", action: "goto", nodeId: "desafio3-nivel6-incorrecto" },
                { icon: "B)", label: "International Year of Peace and Trust", action: "goto", nodeId: "desafio3-nivel6-correcto" },
                { icon: "C)", label: "International Year of Youth", action: "goto", nodeId: "desafio3-nivel6-incorrecto" },
                { icon: "D)", label: "International Year of Cooperation", action: "goto", nodeId: "desafio3-nivel6-incorrecto" }
            ]
        },
        "desafio3-nivel6-correcto": {
            message: "✅ Fantastic!\n\nJamCam 2025 is inspired by the UN's declaration of 2025 as the International Year of Peace and Trust.\n\nAdvance to Level 7 (FINAL).",
            options: [
                { icon: "➡️", label: "Level 7 (FINAL)", action: "goto", nodeId: "desafio3-nivel7" }
            ]
        },
        "desafio3-nivel6-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Camp Guardians Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel7": {
            message: "🔹 LEVEL 7 – THE MONUMENT\n\nWhat is Cali's most emblematic monument located on the Cerro de los Cristales?",
            options: [
                { icon: "A)", label: "Cali Tower", action: "goto", nodeId: "desafio3-nivel7-incorrecto" },
                { icon: "B)", label: "Metropolitan Cathedral", action: "goto", nodeId: "desafio3-nivel7-incorrecto" },
                { icon: "C)", label: "Cristo Rey", action: "goto", nodeId: "desafio3-nivel7-correcto" },
                { icon: "D)", label: "Cerro de las Tres Cruces", action: "goto", nodeId: "desafio3-nivel7-incorrecto" }
            ]
        },
        "desafio3-nivel7-correcto": {
            message: "✅ CORRECT! 🎉🏆\n\nYou've completed the Camp Guardians Challenge with all 7 levels!\n\nCristo Rey is a 26-meter high monument that offers a spectacular panoramic view of Cali.\n\n🏁 FINAL INSTRUCTION:\n\n📝 CLAIM YOUR PRIZE HERE:\nhttps://forms.gle/PytYXN9hoELX8dmk8\n\n*The first valid entry will be the winner of the Cholao Store contest.*\n\nAlso go to the WELCOME CENTER to validate your participation.\n\n📍 INFORMATION:\n• Complete all form fields\n• One prize per person\n• Prizes are non-transferable\n• Staff decisions are final\n• Activity valid until prizes run out",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "desafio3-nivel7-incorrecto": {
            message: "❌ Incorrect answer\n\n🔒 The Camp Guardians Challenge has been blocked for you.\n\nEach participant has only one opportunity to complete the challenge. Thank you for your participation.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        }
    }
};

