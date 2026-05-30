import { useState, useEffect } from 'react';

const COMMANDS = [
  { 
    cmd: 'nmap -sV 192.168.1.100', 
    output: (
      <>
        <div>Starting Nmap 7.93...</div>
        <div>Host is up (0.001s latency).</div>
        <div>PORT   STATE SERVICE VERSION</div>
        <div>22/tcp open  ssh     OpenSSH 8.2p1</div>
        <div>80/tcp open  http    Apache httpd</div>
      </>
    )
  },
  { 
    cmd: 'cat /var/log/auth.log | grep Failed', 
    output: (
      <>
        <div>Failed password for root from 10.0.0.5 port 39482 ssh2</div>
        <div>Failed password for admin from 10.0.0.8 port 48123 ssh2</div>
      </>
    )
  },
  { 
    cmd: 'python3 exploit.py --target web01', 
    output: (
      <>
        <div>[*] Initializing payload...</div>
        <div>[*] Sending to web01...</div>
        <div className="text-[#82a373] font-bold">[+] Shell popped. Access granted.</div>
      </>
    )
  },
  { 
    cmd: 'git commit -m "Fix memory leak"', 
    output: (
      <>
        <div>[main 8f3c2a1] Fix memory leak in buffer handler</div>
        <div> 1 file changed, 12 insertions(+), 4 deletions(-)</div>
      </>
    )
  }
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
    <div className="w-full h-full flex flex-col font-mono text-sm p-8">
      
      {/* Terminal Header */}
      <div className="uppercase-label text-theme-muted1 text-xs tracking-widest mb-4">
        TERMINAL — PATCH@LAB
      </div>
      
      <div className="h-[1.5px] w-full bg-theme-border mb-6"></div>
      
      {/* Terminal Content */}
      <div className="flex-grow flex flex-col space-y-3 mb-8 min-h-[140px]">
        <div className="flex gap-2 text-theme-blue">
          <span className="shrink-0">$</span>
          <span className="text-theme-blue break-all">
            {displayedText}
            {isTyping && <span className="w-2 h-4 bg-theme-blue animate-blink inline-block ml-1 align-middle"></span>}
          </span>
        </div>
        
        {showOutput && (
          <div className="pl-4 text-theme-muted1 space-y-1">
            {COMMANDS[currentCmdIndex].output}
          </div>
        )}
        
        {!isTyping && (
          <div className="flex gap-2 text-theme-blue mt-2 items-center">
            <span className="shrink-0">$</span>
            <span className="w-2 h-4 bg-theme-blue animate-blink"></span>
          </div>
        )}
      </div>
      
      <div className="h-[1.5px] w-full bg-theme-border mb-6 mt-auto"></div>
      
      {/* Skill Tags */}
      <div className="flex flex-wrap gap-3">
        {['linux', 'python', 'bash', 'SIEM', 'CTF'].map((skill) => (
          <div 
            key={skill}
            className="border border-theme-border px-4 py-1.5 text-theme-muted1 hover:text-theme-blue hover:border-theme-blue transition-colors cursor-default text-xs tracking-widest"
          >
            {skill}
          </div>
        ))}
      </div>
      
    </div>
  );
}
