export default {
    title: "JamCam 2025 - Americas United for Peace | Cali, Colombia",
    description: "Cali will be the epicenter of Scouting with JamCam 2025, from December 26, 2025 to January 2, 2026. Thousands of young Scouts from America will unite for peace, brotherhood and adventure.",
    header: {
        about: "About JamCam",
        participate: "Participate",
        serviceTeam: "Service Team",
        cali: "Cali",
        program: "Program",
        resources: "Resources",
        contacts: "Contacts",
    },
    footer: {
        rights: "All rights reserved",
        designed: "Designed by",
        developed: "Developed by",
    },
    resources: {
        brandManual: "Brand Manual",
    },
    countdown: {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
    },
    program: {
        description: "JamCam 2025 offers a full programme with activities for every age group. Rotations and permanent spaces will be organised to allow each participant to explore according to their interests.",
        mainActivitiesTitle: "Main Activities",
        activities: {
            cultural: "Cultural and artistic activities",
            adventure: "Adventure circuits and extreme sports",
            inclusion: "Inclusion and diversity dynamics",
            exploration: "Exploration of the city and its history",
            village: "Inter-American Development Village and SDGs",
            ceremonies: "Ceremonies, shows and night celebrations",
            newYear: "Grand New Year celebration",
            service: "Service Activities"
        }
    },
    purposeSection: {
        title: "Educational Approach",
        description: "The educational program of JamCam 2025 is inspired by four fundamental values: cooperation, empathy, solidarity and freedom. Through active methodologies, participants will live meaningful experiences that foster peace, community action and personal development. The symbolic narrative of the event revolves around \"Cholao\", a macaw that represents unity.",
        imageAlt: "Image of JamCam educational approach"
    },
    participationSection: {
        title: "How to Participate?",
        description: "Each National Scout Organization (NSO) must form an official contingent. Those interested should contact their NSO, complete the registration process and meet the participation requirements according to their role.",
        imageAlt: "Image of the participation process"
    },
    infoSection: {
        title: "JamCam 2025 - Americas United for Peace",
        subtitle: "Discover the adventure of JamCam 2025",
        description: "JamCam 2025 is not just an event, it is a transformative experience where thousands of young people from across the Americas will come together to celebrate brotherhood, diversity and adventure. Through activities designed to promote inclusion, sustainability and peace, this event will mark a before and after in the life of each participant.",
        buttonText: "Learn more",
        imageAlt: "Picture of the JamCam Experience"
    },
    discoverSection: {
        title: "Cali, Colombia:",
        subtitle: "The Heart of JamCam 2025",
        description: "Cali, known as the world capital of salsa, is a vibrant city with a deep history and incomparable culture. Its hospitality and festive spirit make it the perfect destination for this great Scouting event.",
        buttonText: "Discover Cali",
        imageAlt: "Image of Cali"
    },
    infoCards: {
        title: "Americas United for Peace: A Purposeful Event",
        cards: {
            explore: {
                title: "Explore and discover",
                description: "Immerse yourself in the JamCam 2025 adventure. This is the time to open your eyes to new experiences, learn about other cultures and connect with nature. Explore your surroundings, make new friends and get ready for days full of excitement and learning."
            },
            share: {
                title: "Share and build",
                description: "Every story, every idea and every action can make a difference. Share what you know, learn from others and work as a team to create unforgettable moments. Together, we will build an environment of respect, solidarity and growth."
            },
            transform: {
                title: "Transform and leave your mark",
                description: "Change starts with small actions. Be inspired by your experiences and take them beyond the camp. Apply what you learn in your community and become an agent of peace. Your impact can reach farther than you can imagine."
            }
        }
    },
    participateCards: {
        youth: {
            title: "Youth Participants",
            description: "Children and adolescents between 11 and 17 years old, organized in patrols or teams according to their age."
        },
        adults: {
            title: "Responsible Adults and CMT",
            description: "Adults over 18 years old who accompany youth teams."
        },
        eis: {
            title: "International Service Team (IST)",
            description: "Volunteers over 18 years old who support the event development in logistics, program, service and support."
        }
    },
    calendar: {
        months: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        daysShort: ["S", "M", "T", "W", "T", "F", "S"],
        daysLong: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        eventsTitle: "Today's Events",
        events: {
            "2025-01-15": [
                "Pre-registration Opens",
                "Official Website Launch"
            ],
            "2025-03-30": [
                "Early Pre-registration Closes",
                "Regular Rates Begin"
            ],
            "2025-04-30": [
                "Contingent Confirmation",
                "Early Bird Payment Deadline"
            ],
            "2025-06-15": [
                "Regular Registration Opens",
                "Detailed Program Release"
            ],
            "2025-09-30": [
                "Regular Registration Closes",
                "Special Request Deadline"
            ],
            "2025-11-15": [
                "Final Participant Confirmation",
                "Welcome Kits Sent"
            ],
            "2025-12-26": [
                "JAMCAM 2025 BEGINS!",
                "Opening Ceremony"
            ],
            "2025-12-27": [
                "First Full Day of Activities",
                "Cultural and Sports Activities"
            ],
            "2025-12-31": [
                "New Year's Eve Celebration",
                "Multicultural Party"
            ],
            "2026-01-02": [
                "Closing Ceremony",
                "Farewell and See You Soon"
            ]
        } as Record<string, string[]>,
        noEventsMessage: "No events scheduled for this date",
        selectedDateFormat: "{month} {day}, {year}"
    },
    registration: {
        mainTitle: "Registration Fees",
        participants: {
            title: "Participants / Adults / CMT",
            tiers: [
                { label: "A", early: 166, regular: 175, late: 193 },
                { label: "B", early: 332, regular: 349, late: 384 },
                { label: "C", early: 498, regular: 524, late: 576 },
                { label: "D", early: 663, regular: 698, late: 768 }
            ]
        },
        eis: {
            title: "International Service Team (IST)",
            tiers: [
                { label: "A", early: 144, regular: 152, late: 167 },
                { label: "B", early: 289, regular: 304, late: 334 },
                { label: "C", early: 433, regular: 456, late: 502 },
                { label: "D", early: 608, regular: 608, late: 669 }
            ]
        },
        columnHeaders: {
            early: "Early",
            regular: "Regular",
            late: "Late"
        },
        currency: "USD"
    },
    includes: {
        title: "Includes",
        items: [
            "Transportation to and from the airport",
            "Full meals during the event",
            "Participant kit (neckerchief, badge, hat, wristband, identification)",
            "Access to all program activities",
            "Accommodation at the camp"
        ]
    }
}