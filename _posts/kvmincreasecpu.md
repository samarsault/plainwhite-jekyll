---
title: Increase VCPU on KVM/Libvirt
draft: false
weight: 4
date: 2018-09-05T09:40:21-04:00
summary: Increase VCPU to Linux KVM Virtual Machine
---


Senario:

Vmname is testvm

1- Copy xml file Virtual Machine
```
virsh dumpxml testvm > testvm.xml
``` 
2- Undefine Vm
```
virsh undefine testvm
```
3- Edit VCPU count
```
<vcpu placement='static'>2</vcpu>
```
and change to integer value in testvm.xml
4- Start VM

```
virsh define testvm  
```

5- Start VM
```
virsh start testvm
```

Testing Command:

```
virsh dominfo <VM-Name> | grep -i cpu
``` 

