export interface ActiveProject {
  id: string;
  name: string;
  status: 'ACTIVE' | 'TESTING';
  category: string;
  description: string;
  technologies: string[];
  lastUpdated: string;
  url: string;
}

export interface Experiment {
  id: string;
  objective: string;
  findings: string;
  status: 'ACTIVE' | 'TESTING' | 'COMPLETED';
  url: string;
}

export interface ArchivedOperation {
  id: string;
  title: string;
  completionDate: string;
  technologies: string[];
  summary: string;
  url: string;
}

export const activeProjects: ActiveProject[] = [
  {
    id: "statewatch",
    name: "StateWatch",
    status: "ACTIVE",
    category: "Linux Monitoring Tool",
    description: "A lightweight, real-time Linux system monitoring dashboard using only Bash.",
    technologies: ["Bash", "Linux", "Coreutils"],
    lastUpdated: "2024-05-20",
    url: "#"
  },
  {
    id: "mirrorix",
    name: "Mirrorix",
    status: "ACTIVE",
    category: "Package Management",
    description: "A cross-distribution package mirror management and phone mirroring utility.",
    technologies: ["Bash", "Linux"],
    lastUpdated: "2024-05-20",
    url: "#"
  },
  {
    id: "portfolio",
    name: "Portfolio Infrastructure",
    status: "ACTIVE",
    category: "Web Development",
    description: "Building a cyber-aesthetic, high-performance portfolio site.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    lastUpdated: "2024-06-12",
    url: "#"
  }
];

export const experiments: Experiment[] = [
  {
    id: "win11-vm",
    objective: "Windows 11 Virtual Machine Lab",
    findings: "Configured secure isolated VM for dynamic malware analysis with full event logging enabled.",
    status: "COMPLETED",
    url: "#"
  },
  {
    id: "linux-monitoring",
    objective: "Linux Resource Monitoring Research",
    findings: "Experimenting with /proc file descriptors for efficient real-time metrics gathering without external dependencies.",
    status: "ACTIVE",
    url: "#"
  },
  {
    id: "bash-automation",
    objective: "Bash Automation Experiments",
    findings: "Testing reliable cron-based scheduling for custom scripts and investigating error handling patterns.",
    status: "TESTING",
    url: "#"
  },
  {
    id: "network-traffic",
    objective: "Network Traffic Analysis",
    findings: "Simulating beaconing behavior and analyzing the resulting PCAP with Wireshark and Zeek.",
    status: "COMPLETED",
    url: "#"
  }
];

export const archivedOperations: ArchivedOperation[] = [
  {
    id: "linux-hardening",
    title: "Linux Hardening Study",
    completionDate: "May 2024",
    technologies: ["Ubuntu", "UFW", "Fail2Ban", "SSH"],
    summary: "A step-by-step walkthrough of securing a fresh Ubuntu 22.04 server, including setting up UFW, Fail2Ban, and disabling root SSH access.",
    url: "#"
  },
  {
    id: "disk-monitoring",
    title: "Disk Monitoring Prototype",
    completionDate: "April 2024",
    technologies: ["Bash", "df", "awk"],
    summary: "Built a prototype script for detecting sudden I/O spikes and space exhaustion on critical partitions.",
    url: "#"
  },
  {
    id: "system-metrics",
    title: "System Metrics Collection Research",
    completionDate: "April 2024",
    technologies: ["Linux", "Sysstat"],
    summary: "Investigated optimal intervals and methods for collecting non-intrusive system metrics across varying loads.",
    url: "#"
  }
];
