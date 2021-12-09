---
layout: post
title: Автоматизация проверки срока истечения регистрации домена в kubernetes с использованием prometheus
categories: [devops]
tags: [prometheus,grafana,alerts,kubernetes,helm,chart]
comments: true
---

Для всех, кто хостит свои сайты, актуальна проблема продления доменного имени - если пропустить срок истечения регистрации,
то можно на ровном месте получить кучу проблем. Для своевременного продления регистрации нужно отслеживать срок истечения.

Для небольшого количества доменов, возможно, будет достаточно завести напоминае в календаре, но
если доменов много, то желательно автоматизировать этот процесс.

При использовании [prometheus](https://prometheus.io/) стека для мониторинга вашей инфраструктуры
нужно проделать 3 стандартных шага:
1. Собрать метрики о времени истечения домена;
2. Создать визуализацию собранных метрик в grafana;
3. Создать алерты о приближении времени истечания домена.

В случае использовании kubernetes и установленного [prometheus-stack chart'a](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack) задача значительно упрощается. Можно воспользоваться helm chart'ом [domain-exporter](https://github.com/zifter/helm-charts/tree/main/charts/domain-exporter), который из коробки предоставит всё необходимое. Установить чарт просто:
1. Нужно добавить helm репозиторий локально
```bash
helm repo add zifter https://zifter.github.io/helm-charts/
```

* Установить чарт с интересующими доменами:
  - Через --set
  ```bash
  helm install domain-exporter zifter/domain-exporter --namespace monitoring --set "domains={aliexpress.ru,amazon.com,amazon.pl,censor.net,domain-is-not-found.net}"
  ```
  - Через values.yaml файл:
  ```bash
  helm install domain-exporter zifter/domain-exporter --namespace monitoring -f values-prod.yaml
  ```
    Где values-prod.yaml:

  ```yaml
  domains:
    - google.com
    - habr.ru
    - github.com
    - vaikutis.lt
    - amazon.pl
    - amazon.com
    - amazon.de
    - ok.ru
    - flibusta.site
    - domain-failed.com
    - viva64.com
    - ted.com
  ```

В результате получаете:
* метрики:
```
# HELP domain_expiry_days time in days until the domain expires
# TYPE domain_expiry_days gauge
domain_expiry_days{domain="amazon.com"} 1144
domain_expiry_days{domain="amazon.de"} -1
domain_expiry_days{domain="amazon.pl"} 22
domain_expiry_days{domain="domain-failed.com"} -1
domain_expiry_days{domain="fabiensanglard.net"} 240
domain_expiry_days{domain="flibusta.site"} 50
domain_expiry_days{domain="github.com"} 391
domain_expiry_days{domain="google.com"} 2558
domain_expiry_days{domain="habr.ru"} 217
domain_expiry_days{domain="microsoft.com"} 232
domain_expiry_days{domain="ok.ru"} 79
domain_expiry_days{domain="ted.com"} 55
domain_expiry_days{domain="vaikutis.lt"} 63
domain_expiry_days{domain="viva64.com"} 57
# HELP domain_probe_success wether the probe was successful or not
# TYPE domain_probe_success gauge
domain_probe_success{domain="amazon.com"} 1
domain_probe_success{domain="amazon.de"} 0
domain_probe_success{domain="amazon.pl"} 1
domain_probe_success{domain="domain-failed.com"} 0
domain_probe_success{domain="fabiensanglard.net"} 1
domain_probe_success{domain="flibusta.site"} 1
domain_probe_success{domain="github.com"} 1
domain_probe_success{domain="google.com"} 1
domain_probe_success{domain="habr.ru"} 1
domain_probe_success{domain="microsoft.com"} 1
domain_probe_success{domain="ok.ru"} 1
domain_probe_success{domain="ted.com"} 1
domain_probe_success{domain="vaikutis.lt"} 1
domain_probe_success{domain="viva64.com"} 1
...
```

* визуализацию:
![Dashboard]({{site.baseurl}}/assets/images/domain-exporter/dashboard.png)

* алерты
![Alerts]({{site.baseurl}}/assets/images/domain-exporter/alerts.png)

## Заключение
Отслеживать время истечения домена критически важно. При использовании kubernetes, prometheus stack и чарта [domain-exporter](https://github.com/zifter/helm-charts/tree/main/charts/domain-exporter) это сделать максимально просто.
