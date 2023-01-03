---
layout: post
title: Масштабирование деплойментов с помощью prometheus и keda
categories: [devops]
tags: [prometheus,kubernetes,helm,chart,scaling,keda]
comments: true
---

В Kubernetes есть возможность [горизонтально масштабировать](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) нагрузку, т.е. увеличивать количество подов до требуемого.

HPA (Horizontal Pod Autoscaling) используя [метрики ресурсов](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#support-for-resource-metrics) (сpu или memory) и [фиксированный алогритм](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#algorithm-details), учитывающий среднее значение метрики между всеми подами, способен масштабировать количество подов в развертывании (deployments).

К сожалению, низкое использование ресурсов (utilization) может быть одновременно с высокой насыщенностью нагрузки (saturation) приложения.
Простой иллюстрацией служит Page Downloader:
1. Очередь из ссылок на html-страницы для скачивания.
2. Пул воркеров, который занимается скачиванием страниц.

Сами воркеры не будут значительно использовать cpu и memory ресурсы. Но скорость обработки очереди напрямую зависит от количества этих воркеров в пуле.
Как увеличить пул воркеров, взависимости от размер очереди?

И тут на помощь нам придет [keda](https://keda.sh/) и [prometheus](https://prometheus.io/).

# Как это работает?
Пощупать пример можно в репозитории [k8s-keda-autoscaling-example](https://github.com/zifter/k8s-keda-autoscaling-example).

В примере есть простое приложение на [flask](https://flask.palletsprojects.com/) и [rq](https://python-rq.org/).
На web страничке можно добавить задачу в очередь, которые симулируют долгую операцию без значительного исспользования CPU.

КАРТИНКА

[экспортер метрик о состоянии очереди](https://github.com/zifter/helm-charts/tree/main/charts/rq-exporter) эскпортирует метрику о количестве ждущих обработки задач в очереди. Keda проверяет эту метрику и реагирует на увеличение повышением количество реплик воркеров в пуле воркеров.

М ыможем реагировать на любые prometheus метрики. Например, аналогичным образом можно воспользоваться [kafka-exporter](https://artifacthub.io/packages/helm/prometheus-community/prometheus-kafka-exporter) и реагировать на увеличение размера очереди в kafka.

Если скрость обработки задачи не критична, можно по умолчанию выставить количество реплик в 0. Как только задачи появятся в очереди, keda подымет воркеры.


# Замечания
* Масштабировать так же можно и [вертикально](https://habr.com/ru/company/flant/blog/541642/).
* Важно отметить, что в kubernetes v1.23 будет доступна возможность масштабировать используя [кастомных метрики](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#scaling-on-custom-metrics).
* Когда очередь опустет, будет понижено количество реплик, что приведет к остановке некоторых подов. Нужно понимать, что в этот момент эти поды могут обрабатывать задачу. Нужно корректно реагировать на эту [ситуацию](https://keda.sh/docs/2.6/concepts/scaling-deployments/#long-running-executions)

# Полезные ссылки
* https://github.com/zifter/k8s-keda-autoscaling-example
* https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/
* https://habr.com/ru/company/flant/blog/541642/
* https://docs.aws.amazon.com/eks/latest/userguide/vertical-pod-autoscaler.html
* https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler
* https://github.com/kedacore/keda
* https://keda.sh/docs/2.6/concepts/scaling-deployments/


