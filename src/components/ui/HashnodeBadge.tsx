export function HashnodeBadge() {
  return (
    <a
      href="https://hashnode.com/@patch-me"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-bold tracking-wider text-theme-text bg-theme-card border border-theme-border rounded-full hover:bg-theme-bg hover:border-theme-blue hover:text-theme-blue transition-all duration-300 shadow-sm"
    >
      {/* Simple Hashnode SVG icon */}
      <svg
        className="w-4 h-4 fill-current"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M381.1,130.9A142.1,142.1,0,0,0,256,113.8,142.1,142.1,0,0,0,130.9,130.9a142.1,142.1,0,0,0-17.1,125.1A142.1,142.1,0,0,0,130.9,381.1,142.1,142.1,0,0,0,256,398.2a142.1,142.1,0,0,0,125.1-17.1,142.1,142.1,0,0,0,17.1-125.1A142.1,142.1,0,0,0,381.1,130.9Zm-125.1,192a66.9,66.9,0,1,1,66.9-66.9A66.9,66.9,0,0,1,256,322.9Z" />
      </svg>
      POWERED BY HASHNODE
    </a>
  );
}
