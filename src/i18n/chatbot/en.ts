export default {
    title: "Cholao (Beta)",
    close: "Close",
    restart: "🔄 Restart",
    nodes: {
        welcome: {
            message: "👋 Hello! I'm Cholao, your digital assistant at JamCam 2025.\n\nI'm here to guide you through activities, locations, services, and support throughout the event.\n\n👉 Tell me, what do you need now?",
            options: [
                { icon: "🌿", label: "Wellness Check-in", action: "goto", nodeId: "checkin-bienestar" },
                { icon: "📍", label: "JamCam Locations", action: "goto", nodeId: "ubicaciones" },
                { icon: "🎯", label: "Activities", action: "goto", nodeId: "actividades" },
                { icon: "🧠", label: "Listening Ears", action: "goto", nodeId: "listening-ears" },
                { icon: "ℹ️", label: "General Info", action: "goto", nodeId: "info-general" },
                { icon: "🗣️", label: "Your Voice Matters", action: "goto", nodeId: "tu-voz-cuenta" },
                { icon: "🌍", label: "Fun Facts", action: "goto", nodeId: "datos-curiosos" },
                { icon: "📊", label: "Surveys", action: "goto", nodeId: "encuestas" }
            ]
        },
        "checkin-bienestar": {
            message: "🦅 I'm here to help you prepare your arrival and complete your pre-registration.\n\nLet's make this process quick and easy.",
            options: [
                { icon: "✅", label: "I'm Ready", action: "goto", nodeId: "checkin-pais" },
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "checkin-pais": {
            message: "🌎 First, tell me: what country are you from?",
            options: [
                { icon: "🇨🇴", label: "Colombia", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇧🇷", label: "Brazil", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇦🇷", label: "Argentina", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇦", label: "Canada", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇭🇳", label: "Honduras", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇷", label: "Costa Rica", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇲🇽", label: "Mexico", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇨🇱", label: "Chile", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇪🇨", label: "Ecuador", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇩🇴", label: "Dominican Republic", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇸🇻", label: "El Salvador", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇬🇹", label: "Guatemala", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇳🇮", label: "Nicaragua", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇦", label: "Panama", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇾", label: "Paraguay", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇪", label: "Peru", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇷", label: "Puerto Rico", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇻🇪", label: "Venezuela", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇸🇪", label: "Sweden", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇦🇺", label: "Australia", action: "goto", nodeId: "checkin-rol" },
                { icon: "🇵🇱", label: "Poland", action: "goto", nodeId: "checkin-rol" },
                { icon: "🌍", label: "FSI", action: "goto", nodeId: "checkin-rol" },
                { icon: "🌍", label: "CICE", action: "goto", nodeId: "checkin-rol" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "checkin-bienestar" }
            ]
        },
        "checkin-rol": {
            message: "🙋 Select your role in the event:",
            options: [
                { icon: "👦", label: "Scout", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🧑", label: "Venturer", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👨", label: "Rover", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🤝", label: "IST / Service", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👔", label: "Contingent Leader", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "👤", label: "Adult Accompanying", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "📋", label: "Staff", action: "goto", nodeId: "checkin-sintomas" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "checkin-pais" }
            ]
        },
        "checkin-sintomas": {
            message: "🧑‍⚕️ Symptoms or discomfort",
            options: [
                { icon: "😣", label: "Headache", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤢", label: "Stomach pain", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤮", label: "Nausea", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🌡️", label: "Fever", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🌡️", label: "Fever sensation", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😷", label: "Cough", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😤", label: "Breathing problems", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "😵", label: "Dizziness or weakness", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🩹", label: "Recent injury", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🤧", label: "Active allergy", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "✅", label: "None", action: "goto", nodeId: "checkin-apoyo" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "checkin-rol" }
            ]
        },
        "checkin-apoyo": {
            message: "Do you need Special Support?\n\n✨ If you need special support during your arrival or stay, I can forward the information to the Hospitality and Protocol team.",
            options: [
                { icon: "✅", label: "Yes, I need it", action: "goto", nodeId: "checkin-apoyo-si" },
                { icon: "❌", label: "No, all good", action: "goto", nodeId: "checkin-apoyo-no" },
                { icon: "🔙", label: "Back", action: "goto", nodeId: "checkin-sintomas" }
            ]
        },
        "checkin-apoyo-si": {
            message: "Thank you for letting us know.\n\nWhen you arrive at the Welcome Center, approach the Protocol and Hospitality team and indicate that you requested medical support in the wellness check-in. We will assist you with the health staff.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        "checkin-apoyo-no": {
            message: "Thank you for letting us know. If you need support later, feel free to approach the Welcome Center or the Protocol and Hospitality team. We are here to help you.",
            options: [
                { icon: "🏠", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        },
        ubicaciones: {
            message: "📖 Here you'll find the general map of JAMCAM 2025, where you can identify all the main event locations in one place.",
            image: "/images/mapa-jamcam.png",
            download: "/images/mapa-jamcam.png",
            downloadLabel: "Download map",
            options: [
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
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
                { icon: "☎️", label: "Emergency 911", action: "goto", nodeId: "info-emergencia" },
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
            message: "☎️ Emergency 911\n\nHere are the emergency contacts for the camp 📞:\n\n🚑 Health / Psychological care: +57 XXX XXX XXXX\n🚨 Camp security: +57 XXX XXX XXXX\n📢 General organization: +57 XXX XXX XXXX",
            options: [
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
            message: "🗣️ Your Voice Matters\n\n(CONTENT UNDER DEVELOPMENT)",
            options: [
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
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
        encuestas: {
            message: "📊 Surveys\n\n(CONTENT UNDER DEVELOPMENT)",
            options: [
                { icon: "🔙", label: "Main Menu", action: "goto", nodeId: "welcome" }
            ]
        }
    }
};

