import { defineStore } from "pinia";

const seedData = [
    { name: "GES - Gesellschaft", grades: [5.0, 4.0, 5.3, 5.4, 4.51] },
    { name: "INF151 - 151 Datenbanken in Web-Applikation einbinden", grades: [5.6, 5.4] },
    { name: "INF152 - 152 Multimedia-Inhalte in Webauftritt integrieren", grades: [5.07, 5.22] },
    { name: "INF153 - 153 Datenmodelle entwickeln", grades: [4.5, 5.2, 5.7] },
    { name: "INF306 - 306 IT Kleinprojekt abwickeln", grades: [5.5, 6.0, 5.4, 5.3] },
    { name: "NWS - Naturwissenschaft", grades: [3.8, 2.8, 2.6] },
    { name: "SPK - Sprache und Kommunikation", grades: [4.0, 5.0, 5.75] },
    { name: "SPO - Sport", grades: [4.1, 5.0, 4.5] },
    { name: "WUR - Wirtschaft und Recht", grades: [4.1, 3.1, 4.5] }
]

export const useSubjectStore = defineStore('subject', {
    state: () => {
        return { data: seedData }
    }
});