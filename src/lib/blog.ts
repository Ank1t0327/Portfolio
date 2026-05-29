import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  description: string;
  readTime: string;
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Vite specific feature to import all files from a directory
  const modules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default' });
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    const { data, content } = matter(rawContent as string);
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    posts.push({
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      author: data.author || 'Anonymous',
      tags: data.tags || [],
      description: data.description || '',
      readTime: data.readTime || '5 min read',
      content,
    });
  }

  // Sort posts by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}
