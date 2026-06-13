export interface Investigation {
  id: string;
  name: string;
  status: 'ACTIVE' | 'TESTING' | 'COMPLETED' | 'ARCHIVED';
  description: string;
  url: string;
}

export const currentInvestigations: Investigation[] = [
  {
    id: "linux-monitoring",
    name: "Linux Resource Monitoring Research",
    status: "ACTIVE",
    description: "Investigating efficient collection of Linux system metrics using /proc and native shell tools.",
    url: "#"
  },
  {
    id: "bash-automation",
    name: "Bash Automation Experiments",
    status: "TESTING",
    description: "Exploring automation workflows, cron scheduling, error handling, and recovery patterns.",
    url: "#"
  }
];

export const labArchives: Investigation[] = [
  {
    id: "win11-vm",
    name: "Windows 11 Virtual Machine Lab",
    status: "COMPLETED",
    description: "Built an isolated virtualized environment for testing, analysis, and operating system research.",
    url: "#"
  },
  {
    id: "network-traffic",
    name: "Network Traffic Analysis",
    status: "COMPLETED",
    description: "Analyzed packet captures and communication patterns using Wireshark and Zeek.",
    url: "#"
  },
  {
    id: "linux-hardening",
    name: "Linux Hardening Study",
    status: "ARCHIVED",
    description: "Research and implementation of practical Linux security hardening techniques.",
    url: "#"
  },
  {
    id: "disk-monitoring",
    name: "Disk Monitoring Prototype",
    status: "ARCHIVED",
    description: "Early prototype that later influenced StateWatch's resource monitoring architecture.",
    url: "#"
  },
  {
    id: "system-metrics",
    name: "System Metrics Collection Research",
    status: "ARCHIVED",
    description: "Investigated efficient approaches for gathering performance metrics under varying workloads.",
    url: "#"
  }
];
