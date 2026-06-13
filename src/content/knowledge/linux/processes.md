---
title: "Linux Process Management"
description: "Understanding processes, daemons, states, and the /proc filesystem."
date: "2024-06-14"
readTime: "15 min read"
---

# Linux Process Management

Processes are the core of a Linux system.

## The /proc filesystem

Everything is a file in Linux, including processes. The `/proc` directory contains virtual files that represent the current state of the kernel and running processes.

```bash
# View process information for PID 1
cat /proc/1/status
```

## Process States
- **R**: Running or runnable
- **S**: Interruptible sleep
- **D**: Uninterruptible sleep
- **Z**: Zombie
