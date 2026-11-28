export interface CollabItem {
  id: string;
  partner: string;
  partnerType: "Open Source Org" | "Startup" | "Tech Studio" | "Research Team";
  title: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  techStack: string[];
  link?: string;
  status: "ACTIVE" | "COMPLETED" | "ONGOING";
  asciiLogo?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; experience: string; tag: string }[];
}

export type Max8Colors =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string];

export const PORTFOLIO_DATA = {
  developer: {
    name: "Alice Grunder",
    handle: "A-Grunder",
    title: "Junnior Full Stack Software Engineer",
    experience: "3",
    alias: "root@quantum-box",
    email: "alice.grunder@outlook.com",
    github: "https://github.com/A-Grunder",
    linkedin: "https://www.linkedin.com/in/alice-grunder/",
    location: "Chavornay, CH-VD, UTC+1 (DST+2)",
    status: " OPEN FOR COLLABORATIONS & CONTRACTS",
    CLI_EMOJI: "🐈‍⬛",
    palette: [
      "#0f0f0f",
      "#ef4444",
      "#22c55e",
      "#eab308",
      "#3b82f6",
      "#a855f7",
      "#06b6d4",
      "#f8fafc",
    ],
    bio: "Junior Software Engineer with a Bachelor of Science in Software Engineering particularaly interested in software design, building solutions, and technical chalenges. I am looking to contribute to projects within a collaborative team while continuing to strengthen my software development expertise.",
    quote:
      "“The main activity of programming is not the origination of new independent programs, but in the integration, modification, and explanation of existing ones.” — Terry Winograd",
    focusType: "Engineering",
    focus:
      'Software Architecture, Technical "Puzzles", and Solution-Focused Developement',
    asciiBanner: `
           _      _____ _____ ______   
     /\\   | |    |_   _/ ____|  ____|              
    /  \\  | |      | || |    | |__                 
   / /\\ \\ | |      | || |    |  __|                
  / ____ \\| |____ _| || |____| |____               
 /_/____\\_\\______|_____\\_____|______|______ _____  
   / ____|  __ \\| |  | | \\ | |  __ \\|  ____|  __ \\ 
  | |  __| |__) | |  | |  \\| | |  | | |__  | |__) |
  | | |_ |  _  /| |  | | .   | |  | |  __| |  _  / 
  | |__| | | \\ \\| |__| | |\\  | |__| | |____| | \\ \\ 
   \\_____|_|  \\_\\\\____/|_| \\_|_____/|______|_|  \\_\\
`,
    specs: {
      OS: "Garuda Linux x86_64 / Windows 11",
      Kernel: "6.18.64-xanmod-1-lts",
      Uptime: "42 days, 13 hours, 37 mins",
      Shell: "fish 4.9.3",
      Terminal: "foot / Web-TUI Astro",
      WM: "Sway 1.12.0 (Wayland) / DWM",
      Editor: "Neovim / VS Code",
      CPU: "AMD Rzyen 9 9950X3D (32 cores) / Intel i7-1360P ",
      Memory: "21.2GiB / 32.0GiB",
    },
  },

  skills: [
    {
      category: "Core Languages",
      icon: "⚡",
      skills: [
        {
          name: "C",
          level: 75,
          experience: "5 years",
          tag: "ADVANCED",
        },
        {
          name: "Rust",
          level: 45,
          experience: "1 year",
          tag: "ADEPT",
        },
        {
          name: "C++",
          level: 70,
          experience: "4 years",
          tag: "ADVANCED",
        },
        {
          name: "Java",
          level: 70,
          experience: "4 years",
          tag: "ADVANCED",
        },
        {
          name: "Python",
          level: 65,
          experience: "3 years",
          tag: "COMPETENT",
        },
        {
          name: "JavaScript / TypeScript",
          level: 65,
          experience: "5 years",
          tag: "COMPETENT",
        },
        {
          name: "Scala",
          level: 60,
          experience: "2 years",
          tag: "COMPETENT",
        },
        {
          name: "Kotlin",
          level: 40,
          experience: "1 year",
          tag: "ADEPT",
        },
        {
          name: "Haskell",
          level: 30,
          experience: "1 year",
          tag: "NOVICE",
        },
        {
          name: "Elixir",
          level: 55,
          experience: "2 years",
          tag: "COMPETENT",
        },
        {
          name: "Go (Golang)",
          level: 45,
          experience: "1 year",
          tag: "ADEPT",
        },
        {
          name: "HTML / CSS",
          level: 60,
          experience: "5 years",
          tag: "COMPETENT",
        },
        {
          name: "SQL & NoSQL",
          level: 70,
          experience: "3 years",
          tag: "ADVANCED",
        },
      ],
    },
    {
      category: "Frameworks & Frontend",
      icon: "🌐",
      skills: [
        {
          name: "Qt",
          level: 40,
          experience: "1 year",
          tag: "ADEPT",
        },
        {
          name: "Node.js / npm",
          level: 70,
          experience: "3 years",
          tag: "ADVANCED",
        },
        {
          name: "React / Next.js",
          level: 40,
          experience: "2 years",
          tag: "ADEPT",
        },
        {
          name: "Angular",
          level: 25,
          experience: "less than a year",
          tag: "NOVICE",
        },
        {
          name: "Vue.js",
          level: 20,
          experience: "less than a year",
          tag: "NOVICE",
        },
        {
          name: "Astro.js",
          level: 20,
          experience: "less than a year",
          tag: "NOVICE",
        },
        {
          name: "Bootstrap CSS",
          level: 45,
          experience: "1 year",
          tag: "ADEPT",
        },
        {
          name: "Tailwind CSS",
          level: 30,
          experience: "less than a year",
          tag: "ADEPT",
        },
        {
          name: "Quarkus",
          level: 45,
          experience: "1 year",
          tag: "ADEPT",
        },
        {
          name: "Hibernate",
          level: 40,
          experience: "1 year",
          tag: "ADEPT",
        },
        {
          name: "Vaadin",
          level: 15,
          experience: "less than a year",
          tag: "BEGINNER",
        },
        {
          name: "Spring Boot",
          level: 25,
          experience: "less than a year",
          tag: "NOVICE",
        },
      ],
    },
    {
      category: "DevOps, Cloud & Architecture",
      icon: "☁️",
      skills: [
        {
          name: "Git",
          level: 65,
          experience: "7 years",
          tag: "COMPETENT",
        },
        {
          name: "Docker / Containerization",
          level: 65,
          experience: "3 years",
          tag: "COMPETENT",
        },
        {
          name: "Kubernetes",
          level: 60,
          experience: "2 years",
          tag: "COMPETENT",
        },
        {
          name: "Linux Administration & Bash",
          level: 60,
          experience: "3 years",
          tag: "COMPETENT",
        },
        {
          name: "PostgreSQL",
          level: 55,
          experience: "2 years",
          tag: "COMPETENT",
        },
        {
          name: "CI/CD GitHub Actions",
          level: 65,
          experience: "3 years",
          tag: "COMPETENT",
        },
        {
          name: "AWS",
          level: 20,
          experience: "less than a year",
          tag: "NOVICE",
        },
        {
          name: "Google Cloud",
          level: 20,
          experience: "less than a year",
          tag: "NOVICE",
        },
        {
          name: "Terraform",
          level: 10,
          experience: "less than a year",
          tag: "BEGINNER",
        },
      ],
    },
  ] as SkillCategory[],

  collabs: [] as CollabItem[],

  commands: [
    {
      name: "help",
      desc: "List all available terminal commands",
      usage: "help",
    },
    {
      name: "about",
      desc: "Display bio, engineering philosophy & summary",
      usage: "about [or cat bio.txt]",
    },
    {
      name: "skills",
      desc: "Display interactive skill proficiency meters",
      usage: "skills [or cat skills.sh]",
    },
    // {
    //   name: "collabs",
    //   desc: "Display list of team collaborations & partner projects",
    //   usage: "collabs [or cat collabs.md]",
    // },
    {
      name: "neofetch",
      desc: "Display ASCII banner & hardware system specs",
      usage: "neofetch",
    },
    {
      name: "contact",
      desc: "Display contact info and social handles",
      usage: "contact [or mail]",
    },
    {
      name: "links",
      desc: "Display interactive links to GitHub, LinkedIn, X/Twitter & Email",
      usage: "links [or socials, urls]",
    },
    {
      name: "theme",
      desc: "Switch theme (green, amber, cyan, dracula, mono, cappuccino)",
      usage: "theme <green|amber|cyan|dracula|mono|cappuccino>",
    },
    {
      name: "github",
      desc: "Display live GitHub stats, stars, forks, and language metrics",
      usage: "github [or gh, stats]",
    },
    {
      name: "repos",
      desc: "List featured GitHub repositories with star counts and links",
      usage: "repos [or projects]",
    },
    {
      name: "radio",
      desc: "Play retro Lo-Fi/Chiptune radio or stream custom songs from YouTube",
      usage: "radio [play|pause|next|add <url>|vol <n>|list]",
    },
    {
      name: "matrix",
      desc: "Toggle digital rain CRT overlay animation",
      usage: "matrix",
    },
    { name: "crt", desc: "Toggle CRT scanline screen effect", usage: "crt" },
    {
      name: "sfx",
      desc: "Toggle audio feedback keypress sounds",
      usage: "sfx",
    },
    {
      name: "clear",
      desc: "Clear terminal buffer screen",
      usage: "clear [or cls]",
    },
    {
      name: "gui",
      desc: "Switch window layout to TUI Visual Dashboard",
      usage: "gui",
    },
    {
      name: "cli",
      desc: "Switch window layout to Interactive CLI Mode",
      usage: "cli",
    },
  ],
};
