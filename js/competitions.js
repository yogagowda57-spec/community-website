/* =========================================================
   COMPETITIONS DATA
   Add a new competition by adding a new object to this array.
   ========================================================= */

const competitions = [
  
  {
    id: "competition-003",
    title: "TechQuiz: The Annual Tech Trivia",
    category: "Competition",
    description: "A fast-paced buzzer-round quiz covering programming, hardware, internet history and pop tech.",
    longDescription:
      "A team quiz competition with written rounds, rapid-fire buzzer rounds, and a visual identification round, open to all branches.",
    date: "2026-08-22",
    time: "5:00 PM - 7:00 PM",
    venue: "Main Auditorium",
    image: "images/competitions/competitions-1.svg",
    registrationLink: "#register",
    status: "completed",
    teamSize: "2-3 Members",
    eligibility: "All students",
    rules: ["Teams of 2 to 3 members.", "No phones or internet access during rounds."],
    schedule: [
      { time: "5:00 PM", activity: "Written prelim round" },
      { time: "5:45 PM", activity: "Finalist teams announced" },
      { time: "6:00 PM", activity: "Buzzer finals" },
      { time: "6:50 PM", activity: "Prize distribution" }
    ],
    faq: [{ q: "How many teams qualify for finals?", a: "The top 6 teams from the prelim round advanced." }],
    result: "Team 'Segfault' won the finals after a tie-breaker round, edging out 'Null Pointer' by one point."
  }
];
