/* =========================================================
   GENERAL EVENTS DATA
   Use this file for community activities that are not a
   hackathon, workshop, competition or seminar.
   ========================================================= */

const events = [
  {
    id: "event-003",
    title: "Freshers' Orientation & Tech Talk",
    category: "Event",
    description: "An introduction to the community for first-year students, with a short talk on getting started in tech.",
    longDescription:
      "A welcome session for incoming students covering what the community does, how to get involved, and a short talk on building good habits early in a tech-focused degree.",
    date: "2027-08-05",
    time: "10:00 AM - 12:00 PM",
    venue: "Main Auditorium",
    image: "images/events/events-1.svg",
    registrationLink: "#register",
    status: "completed",
    teamSize: "Individual",
    eligibility: "First year students",
    rules: ["Open to all incoming first-year students."],
    schedule: [
      { time: "10:00 AM", activity: "Welcome and community overview" },
      { time: "10:30 AM", activity: "Tech talk: getting started well" },
      { time: "11:15 AM", activity: "Open mixer" }
    ],
    faq: [{ q: "Is this only for CS branches?", a: "No, it's open to all first-year engineering students." }],
    result: "Over 200 first-year students attended and 140 signed up for community membership on the spot."
  }
];
