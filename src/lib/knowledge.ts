export interface KnowledgeNote {
  slug: string;
  category: string;
  title: string;
  date: string;
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
      data[key] = value;
    }
  });
  
  return { data, content: match[2] };
}

export async function getAllKnowledgeNotes(): Promise<KnowledgeNote[]> {
  const modules = import.meta.glob('/src/content/knowledge/**/*.md', { query: '?raw', import: 'default' });
  const notes: KnowledgeNote[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    const { data, content } = parseFrontmatter(rawContent as string);
    
    const pathParts = path.split('/');
    const slug = pathParts.pop()?.replace('.md', '') || '';
    const category = pathParts.pop() || 'general';

    notes.push({
      slug,
      category,
      title: data.title || 'Untitled Module',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      readTime: data.readTime || '5 min read',
      content,
    });
  }

  return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getKnowledgeNote(category: string, slug: string): Promise<KnowledgeNote | null> {
  const notes = await getAllKnowledgeNotes();
  return notes.find(note => note.category === category && note.slug === slug) || null;
}
