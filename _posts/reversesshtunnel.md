---
title: Reverse Ssh Tunnel
draft: false
weight: 4
date: 2018-09-09T09:40:21-04:00
summary: Reverse Ssh Tunneling Command
---

Example Senario:

Your 192.168.1.2 ip address running port 3306 mysql service and you want to reverse ssh to 192.168.1.3 ip address in 3308

Example command is :
```
ssh -fNg -L 3308:192.168.1.3:3306 mysql@192.168.1.2
```
