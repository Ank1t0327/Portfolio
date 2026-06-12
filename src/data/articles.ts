export interface Article {
  title: string;
  excerpt: string;
  image: string; // relative path to thumbnail image in src/assets/blog/
  date: string; // ISO format, e.g., '2024-09-12'
  readTime: string; // e.g., '5 min read'
  tags: string[];
  url: string; // full Hashnode article URL
}

export const articles: Article[] = [
  {
    title: 'Building Statewatch: My First Linux System Monitoring Tool In Bash',
    excerpt: 'A deep dive into creating a lightweight, real-time Linux system monitoring dashboard using only Bash.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop', // Temporary placeholder
    date: '2024-05-20',
    readTime: '8 min read',
    tags: ['Linux', 'Bash', 'Automation'],
    url: 'https://patch-me.hashnode.dev/building-statewatch-my-first-linux-system-monitoring-tool-in-bash',
  }
];
