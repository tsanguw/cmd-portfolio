export const content = {
  about: {
    title: "ABOUT ME",
    text: [
      "Hi, I'm Daniel Tsang — a software developer based in Seattle, WA.",
      "",
      "I enjoy building things that live on the internet and solving problems with clean, maintainable code. I have experience across full-stack web development, mobile apps, and data-driven projects.",
      "",
      "When I'm not coding, you'll find me tinkering with side projects, exploring new technologies, or creating things on Scratch.",
    ],
  },

  skills: {
    title: "SKILLS",
    categories: [
      {
        label: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "Java", "C", "HTML", "CSS"],
      },
      {
        label: "Frameworks & Libraries",
        items: ["React", "Node.js", "Flutter", "Android SDK"],
      },
      {
        label: "Tools & Platforms",
        items: ["Git", "GitHub", "VS Code", "AWS", "Claude Code", "ChatGPT"],
      },
      {
        label: "Concepts",
        items: [
          "REST APIs",
          "Database Design",
          "OOP",
          "Agile / Scrum",
          "Data Structures & Algorithms",
        ],
      },
    ],
  },

  experience: {
    title: "WORK EXPERIENCE",
    jobs: [
      {
        title: "Software Development Intern",
        company: "Civilience",
        dates: "Winter 2025",
        bullets: [
          "Worked with 4+ frontend engineers and a 30-person product team to design and implement infectious diseases and emotional health monitoring questionnaires using SurveyJS and React UI components",
          "Built and deployed a scalable online forum within the app using React and AWS serverless tools (Amplify, Lambda, DynamoDB), enabling real-time interaction across user roles and successfully handling 2500+ posts and interactions in testing",
          "Refactored a PostgreSQL database (via pgAdmin4) used for disease survey results to include user ID, geolocation, and survey metadata, updating 500+ existing entries and enabling consistent user-linked data storage for all future submissions via AWS Amplify, Lambda, and React",
        ],
      },
      {
        title: "Remote Instructor",
        company: "iD Tech Camps",
        dates: "Summer 2023",
        bullets: [
          "Delivered 1000+ hours of interactive coding instruction, covering algorithms, data structures, and debugging techniques in Scratch, GDevelop, VBA, and Java ",
          "Guided 150+ students in designing and building custom game projects (2D platformers, maze generation, rogue-likes), reinforcing real-world programming concepts ",
          "Authored detailed progress reports for 100+ parents/clients, ensuring clear communication of student achievements and learning objectives",
        ],
      },
    ],
  },

  projects: {
    title: "PROJECTS",
    items: [
      {
        name: "CMD Portfolio",
        description:
          "This portfolio site — a React app styled as a Windows Command Prompt, navigated entirely by typing commands.",
        stack: ["CSS", "GitHub Pages", "React"],
        link: "https://github.com/tsanguw/cmd-portfolio",
      },
      {
        name: "LitWiki - Pokémon Encyclopedia",
        description:
          "A comprehensive online encyclopedia for Pokémon fans, featuring detailed information about each species and their abilities/moves, an outline of gym leaders, and a team builder.",
        stack: ["Android Studio", "Dart", "Excel" , "Flutter", "Python", "PokéAPI","SQLite", "SQLizer"],
        link: "https://github.com/tsanguw/CSS-497-Pokedex-App",
      },
      {
        name: "Arduino Weather Station Thermo-Hygrometer",
        description:
          "A DIY weather station using an Arduino Uno, DHT22 sensor, and LCD display to monitor and display temperature and humidity levels in real time.",
        stack: ["Arduino", "C"],
        link: "https://docs.google.com/document/d/1qD82ZIab0fvyMiR1PAI8SIvDpzjYGvKN/edit?usp=sharing&ouid=116416219633790831631&rtpof=true&sd=true",
        linkLabel: "View Report",
      },
      {
        name: "Youtube Database Project",
        description:
          "A web application for browsing and searching through a database of YouTube videos, with features for filtering and sorting.",
        stack: ["CSS/JS", "HTML", "MySQL", "Python Flask"],
        link: "https://github.com/zathaxx/YouTubeDB",
      },
    ],
  },

  gallery: {
    title: "GALLERY",
    photos: [
      {
        filename: "Jerry.png",
        title: "Jerry.png",
        caption: "This is just my profile picture across the platforms I use.",
      },
      {
        filename: "UW-Bothell.jpg",
        title: "UW-Bothell.jpg",
        caption: "University of Washington Bothell, where I study Computer Science and Software Engineering.",
      },
      {
        filename: "litwiki-feature.jpg",
        title: "litwiki-feature.jpg",
        caption: "LitWiki — a Pokémon encyclopedia app built with Flutter and SQLite.",
      },
      {
        filename: "litwiki-poster.png",
        title: "litwiki-poster.png",
        caption: "The poster I made of LitWiki for the capstone project presentation.",
      },
      {
        filename: "weather-station.jpg",
        title: "weather-station.jpg",
        caption: "Arduino weather station thermo-hygrometer displaying temperature and humidity in real time.",
      },
      {
        filename: "yt-db.png",
        title: "youtube-db.png",
        caption: "YouTube Database Project — a web app for browsing and searching a database of YouTube videos.",
      },
      // Add more photos here: { filename: "photo.jpg", title: "photo.jpg", caption: "Description." }
    ],
  },

  links: {
    title: "LINKS",
    items: [
      { label: "GitHub", url: "https://github.com/tsanguw" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/dtsang80/",
      },
      {
        label: "Scratch",
        url: "https://scratch.mit.edu/users/dtsang001/",
      },
    ],
  },
};

export const COMMANDS = [
  { cmd: "about",                      shortcut: "a", desc: "Display the About Me section" },
  { cmd: "skills",                     shortcut: "s", desc: "List technical skills by category" },
  { cmd: "experience",                 shortcut: "e", desc: "Show work experience and job history" },
  { cmd: "projects",                   shortcut: "p", desc: "Browse projects with descriptions and links" },
  { cmd: "links",                      shortcut: "l", desc: "Display social and profile links" },
  { cmd: "gallery",                    shortcut: "g", desc: "Browse photos in a grid view" },
  { cmd: "clear",                      shortcut: "c", desc: "Clear the terminal output" },
  { cmd: "help",                       shortcut: "h", desc: "List all available commands" },
  { cmd: "default | hacker | retro",   shortcut: null, desc: "Switch the terminal color theme" },
];
