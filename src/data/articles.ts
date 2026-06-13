export interface Article {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export const publishedArticles: Article[] = [
  {
    title: "Building Statewatch: My First Linux System Monitoring Tool In Bash",
    excerpt: "A deep dive into creating a lightweight, real-time Linux system monitoring dashboard using only Bash. We explore /proc filesystem parsing, performance optimization, and terminal UI constraints.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop",
    date: "2024-05-20",
    url: "https://patchsec.hashnode.dev/building-statewatch-my-first-linux-system-monitoring-tool-in-bash",
    tags: ["Linux", "Bash", "Monitoring"],
    featured: true
  },
  {
    title: "Understanding Hashnode GraphQL API Integrations",
    excerpt: "How to effectively fetch your Hashnode blog posts into a custom React portfolio using their headless GraphQL API architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    date: "2024-06-10",
    url: "https://patchsec.hashnode.dev/understanding-hashnode-graphql",
    tags: ["React", "GraphQL", "Web Dev"],
    featured: false
  }
];

export const blogCategories = ["Linux", "Bash", "Monitoring", "React", "GraphQL", "Web Dev", "Cybersecurity"];
