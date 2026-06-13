import matter from 'gray-matter';

export interface KnowledgeNote {
  slug: string;
  category: string;
  title: string;
  date: string;
  description: string;
  readTime: string;
  content: string;
}

export async function getAllKnowledgeNotes(): Promise<KnowledgeNote[]> {
  const modules = import.meta.glob('/src/content/knowledge/**/*.md', { query: '?raw', import: 'default' });
  const notes: KnowledgeNote[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    const { data, content } = matter(rawContent as string);
    
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
