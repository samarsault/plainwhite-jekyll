---
title: Attach Disk on KVM/Libvirt
draft: false
weight: 4
date: 2018-09-06T09:40:21-04:00
summary: Attach Disk to Linux KVM Virtual Machine
---


In this example, two virtual disks (vda1 and vda2) on this VM. 
This vm name is : testvm

Steps:

1- creating a virtual disk image with 7GB of size. 

```
qemu-img create -f raw disk2.img 7G
```

2- and attach the my vm

```
virsh attach-disk testvm --source disk2.img --target vdb --persistent
```

Show disk status:

```
# fdisk -l | grep vd
Disk /dev/vda: 10.7 GB, 10737418240 bytes
/dev/vda1   *           3        1018      512000   83  Linux
/dev/vda2            1018       20806     9972736   8e  Linux LVM
Disk /dev/vdb: 7516 MB, 7516192768 bytes
```