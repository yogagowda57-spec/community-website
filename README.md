NEXUS — College Technical Community Website
A static, dependency-free event website for a college technical community. Built with plain HTML5, CSS3 and vanilla JavaScript — no frameworks, no build step, no backend.

Project structure
community-website/
│
├── index.html              Main landing page (all sections)
├── style.css                Single stylesheet for the whole site
│
├── js/
│   ├── script.js             Main site logic: combines data, renders
│   │                          cards, handles search/filter/nav/animations
│   ├── hackathons.js          Hackathon event data ONLY
│   ├── workshops.js           Workshop event data ONLY
│   ├── events.js              General/other event data ONLY
│   ├── competitions.js        Competition event data ONLY
│   ├── seminars.js            Seminar event data ONLY
│   └── event-details.js       Logic for the event details page
│
├── pages/
│   └── event-details.html    Dynamic details page, reads ?id=<event-id>
│
├── images/
│   ├── hackathons/            Hackathon images (placeholder SVGs included)
│   ├── workshops/
│   ├── events/
│   ├── competitions/
│   └── seminars/
│
└── README.md
How to run it
No build step or server is required. Open index.html directly in a browser, or serve the folder with any static file server, for example:

npx serve .
or

python3 -m http.server 8000
Then visit http://localhost:8000.

How to add a new event
You never need to edit index.html to add an event. Just edit the data file for the right category.

Add a hackathon
Open js/hackathons.js and add a new object to the hackathons array:

{
  id: "hackathon-004",                 // must be unique across all events
  title: "Your Hackathon Name",
  category: "Hackathon",
  description: "One-line summary shown on the card.",
  longDescription: "Longer paragraph shown on the details page.",
  date: "2026-12-01",                  // YYYY-MM-DD
  time: "10:00 AM - 5:00 PM",
  venue: "Location name",
  image: "images/hackathons/your-image.svg",
  registrationLink: "#register",
  status: "upcoming",                  // "upcoming" | "ongoing" | "completed"
  teamSize: "2-4 Members",
  eligibility: "All Engineering Students",
  rules: ["Rule one.", "Rule two."],
  schedule: [{ time: "10:00 AM", activity: "Kickoff" }],
  faq: [{ q: "A question?", a: "The answer." }]
}
The same object shape works for js/workshops.js, js/competitions.js, js/seminars.js and js/events.js — just add your object to the matching array. The homepage, filters, search, and the event details page all pick up the new event automatically the next time the page loads.

Add an image
Drop an image file into the matching folder under images/ (for example images/workshops/git-workshop.jpg) and point the event's image field at that path. Placeholder SVG graphics are included so the site looks complete before real photos are added.

Mark an event as completed
Set status: "completed" and add a result string summarizing the outcome — it will automatically move from "Upcoming events" to "Past events" on the homepage.

Notes on the details page
pages/event-details.html does not hardcode any single event. It loads every data file, looks up the event whose id matches the id query parameter in the URL (event-details.html?id=hackathon-001), and renders its full information dynamically via js/event-details.js.

Browser support
Built with modern, widely-supported vanilla JavaScript (ES6+): template literals, arrow functions, spread syntax, IntersectionObserver, and the <details>/<summary> elements for FAQs. Works in all current versions of Chrome, Firefox, Edge and Safari.
