/* =========================================================
   SEMINARS DATA
   Add a new seminar by adding a new object to this array.
   ========================================================= */

const seminars = [
 
  {
    id: "seminar-003",
    title: "Research Paths After Engineering",
    category: "Seminar",
    description: "Faculty and alumni discuss pursuing research, from undergraduate projects to graduate study.",
    longDescription:
      "A panel of faculty members and alumni currently in graduate programs discuss how to get started with undergraduate research, choosing a research area, and applying to graduate school.",
    date: "2026-12-02",
    time: "3:30 PM - 5:00 PM",
    venue: "Conference Room, Block B",
    image: "images/seminars/seminars-1.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "Individual",
    eligibility: "Third year and above",
    rules: ["Open seating.", "A short feedback form is requested at the end."],
    schedule: [
      { time: "3:30 PM", activity: "Panel introductions" },
      { time: "3:45 PM", activity: "Panel discussion" },
      { time: "4:30 PM", activity: "Audience Q&A" }
    ],
    faq: [{ q: "Can first and second years attend?", a: "Yes, though the content is most relevant to third year and above." }]
  }
];
