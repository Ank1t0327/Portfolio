import { Terminal } from 'lucide-react';

interface ArticleCounterProps {
  count: number;
}

export function ArticleCounter({ count }: ArticleCounterProps) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm text-lab-neon bg-lab-neon/10 border border-lab-neon/30 px-3 py-1.5 rounded-md w-fit">
      <Terminal className="w-4 h-4" />
      <span>
        {'>'} articles indexed: <span className="font-bold">{count}</span>
        <span className="animate-blink inline-block w-2 h-4 bg-lab-neon align-middle ml-1"></span>
      </span>
    </div>
  );
}
