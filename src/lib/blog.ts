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

function parseFrontmatter(markdown: string) {
  const match = /^\s*---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(markdown);
  if (!match) return { data: {}, content: markdown };
  
  const data: Record<string, string> = {};
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (key === 'tags' && value.startsWith('[') && value.endsWith(']')) {
         // handle simple array like ["React", "Security"]
         data[key] = value.slice(1, -1).split(',').map(s => {
           let v = s.trim();
           if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
           return v;
         }) as any;
      } else {
         data[key] = value;
      }
    }
  });
  
  return { data, content: match[2] };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Vite specific feature to import all files from a directory
  const modules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default' });
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    const { data, content } = parseFrontmatter(rawContent as string);
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
