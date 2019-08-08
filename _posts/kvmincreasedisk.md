---
title: Increase Disk on KVM/Libvirt
draft: false
weight: 4
date: 2018-09-05T09:40:21-04:00
summary: Increase Disk Size to Linux KVM Virtual Machine
---

İmage location is : /images/testvm.qcow2 

For add the 5G disk size command to KVM Virtual Machine 

```
qemu-img resize  /images/testvm.qcow2 +5G
```