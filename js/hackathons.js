/* =========================================================
   HACKATHONS DATA
   Add a new hackathon by adding a new object to this array.
   Do not edit this array's structure anywhere else.
   ========================================================= */

const hackathons = [

  {
    id: "hackathon-003",
    title: "GreenTech Sustainability Hackathon",
    category: "Hackathon",
    description: "Build tech-driven solutions for campus sustainability, energy use and waste reduction.",
    longDescription:
      "This hackathon pairs engineering students across disciplines to design practical sustainability tools, from IoT energy monitors to waste-sorting applications, with feedback from campus facilities staff.",
    date: "2026-09-05",
    time: "10:00 AM - 5:00 PM",
    venue: "Innovation Hall",
    image: "images/hackathons/hackathons-1.svg",
    registrationLink: "#register",
    status: "completed",
    teamSize: "2-5 Members",
    eligibility: "Open to all branches",
    rules: [
      "Teams of 2 to 5 members from any branch.",
      "Hardware prototypes must be safe for indoor demonstration.",
      "Submissions must include cost and impact estimates."
    ],
    schedule: [
      { time: "10:00 AM", activity: "Kickoff and problem briefing" },
      { time: "12:00 PM", activity: "Mentor check-ins" },
      { time: "4:00 PM", activity: "Final presentations" },
      { time: "5:00 PM", activity: "Results announced" }
    ],
    faq: [
      { q: "Were hardware kits provided?", a: "Basic sensor kits were provided on request during registration." }
    ],
    result: "18 teams presented working prototypes; the winning team built a smart irrigation controller for the campus garden."
  }
];
