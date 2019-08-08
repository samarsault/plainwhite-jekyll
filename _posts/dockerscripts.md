---
title: Useful Docker Scripts
draft: false
weight: 4
date: 2018-09-07T09:40:21-04:00
summary: Delete Unused Docker Container and İmages
---


Delete all created docker container command

```
docker rm $( docker ps -q -f status=created)
```

Delete all exited docker container command

```
docker rm $( docker ps -q -f status=exited)
```

Delete all unused images command

```
docker rmi $( docker images -q -f dangling=true)
```
