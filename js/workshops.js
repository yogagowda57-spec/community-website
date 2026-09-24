/* =========================================================
   WORKSHOPS DATA
   Add a new workshop by adding a new object to this array.
   ========================================================= */

const workshops = [
  {
    id: "workshop-003",
    title: "Docker & Deployment Fundamentals",
    category: "Workshop",
    description: "Package an app into a container and deploy it, from local development to a live server.",
    longDescription:
      "This workshop covers containerizing a web application with Docker, writing a docker-compose setup, and deploying it to a small cloud instance.",
    date: "2026-10-24",
    time: "1:00 PM - 4:00 PM",
    venue: "Seminar Hall 1",
    image: "images/workshops/workshops-1.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "Individual",
    eligibility: "Second year and above",
    rules: ["Install Docker Desktop before attending.", "A free-tier cloud account is recommended but optional."],
    schedule: [
      { time: "1:00 PM", activity: "Containers vs virtual machines" },
      { time: "1:40 PM", activity: "Writing your first Dockerfile" },
      { time: "2:30 PM", activity: "docker-compose for multi-service apps" },
      { time: "3:20 PM", activity: "Deploying to a live instance" }
    ],
    faq: [{ q: "Do I need a paid server?", a: "No, we use a free-tier instance for the demo." }]
  }
];
