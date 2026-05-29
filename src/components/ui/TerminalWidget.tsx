import { useState, useEffect } from 'react';

const COMMANDS = [
  { cmd: 'nmap -sV 192.168.1.100', output: 'Starting Nmap 7.93...\nHost is up (0.001s latency).\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.2p1\n80/tcp open  http    Apache httpd' },
  { cmd: 'cat /var/log/auth.log | grep Failed', output: 'Failed password for root from 10.0.0.5 port 39482 ssh2\nFailed password for admin from 10.0.0.8 port 48123 ssh2' },
  { cmd: 'python3 exploit.py --target web01', output: '[*] Initializing exploit payload...\n[*] Sending payload to target web01...\n[+] Shell popped! Access granted.' },
  { cmd: 'git commit -m "Fix memory leak"', output: '[main 8f3c2a1] Fix memory leak in buffer handler\n 1 file changed, 12 insertions(+), 4 deletions(-)' }
];

export function TerminalWidget() {
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const fullCmd = COMMANDS[currentCmdIndex].cmd;
      if (displayedText.length < fullCmd.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullCmd.slice(0, displayedText.length + 1));
        }, Math.random() * 50 + 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setShowOutput(true);
        }, 400);
      }
    } else {
      timeout = setTimeout(() => {
        setShowOutput(false);
        setDisplayedText('');
        setCurrentCmdIndex((prev) => (prev + 1) % COMMANDS.length);
        setIsTyping(true);
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentCmdIndex]);

  return (
    <div className="w-full h-full bg-background/80 rounded-xl border border-white/10 overflow-hidden font-mono text-sm flex flex-col shadow-2xl backdrop-blur-md">
      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs text-muted-foreground font-sans">terminal — patch@lab</div>
      </div>
      <div className="p-4 flex-grow overflow-y-auto">
        <div className="flex items-center gap-2 text-brand-blue mb-1">
          <span>patch@lab:~$</span>
          <span className="text-foreground">{displayedText}</span>
          {isTyping && <span className="w-2 h-4 bg-foreground animate-blink"></span>}
        </div>
        {showOutput && (
          <div className="text-muted-foreground whitespace-pre-wrap mt-2 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
            {COMMANDS[currentCmdIndex].output}
          </div>
        )}
      </div>
    </div>
  );
}
