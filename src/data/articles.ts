export interface Article {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  url: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  articles: Article[];
}

export const blogCategories: Category[] = [
  {
    id: "cybersecurityJournal",
    title: "📓 Cybersecurity Learning Journal",
    description: "Concepts, notes, discoveries, learning logs.",
    articles: []
  },
  {
    id: "redTeamNotes",
    title: "⚔️ Red Team Notes",
    description: "Reconnaissance, enumeration, offensive security concepts, lab notes.",
    articles: []
  },
  {
    id: "blueTeamNotes",
    title: "🛡️ Blue Team Notes",
    description: "Monitoring, detection, defense, logging, security operations.",
    articles: []
  },
  {
    id: "linuxAndBash",
    title: "🐧 Linux & Bash",
    description: "Linux concepts, shell scripting, automation, terminal workflows.",
    articles: []
  },
  {
    id: "projectBuilds",
    title: "🔧 Project Builds",
    description: "Personal projects, tools, build logs, development journeys.",
    articles: [
      {
        title: "Building Statewatch: My First Linux System Monitoring Tool In Bash",
        excerpt: "A deep dive into creating a lightweight, real-time Linux system monitoring dashboard using only Bash.",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop",
        date: "2024-05-20",
        url: "https://patchsec.hashnode.dev/building-statewatch-my-first-linux-system-monitoring-tool-in-bash"
      }
    ]
  },
  {
    id: "infrastructure",
    title: "🌐 Infrastructure & DevOps",
    description: "Servers, deployment, Docker, cloud, networking, infrastructure.",
    articles: []
  },
  {
    id: "labExperiments",
    title: "🧪 Lab Experiments",
    description: "Mini-projects, testing, research, random discoveries.",
    articles: []
  }
];
