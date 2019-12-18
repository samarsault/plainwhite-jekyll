# Разработка pypi пакета с поддержкой разных версий python

Кто хотел создать полезный open-source пакет для python, который каждый желающий сможет установить заветной командой:
```
pip install my-perfect-package
```
Это небольшой мануал/история о том, как это сделать с подробностями за ссылками.
Расчитана на новичков, но призываю и профессионалов высказать свое мнение, как можно улучшить "идеальный" пакет.

## Как сделать лучший пакет?
Буду исходить из следующих требований:

* **Open source на github;**  
   Каждый должен иметь возможность внести свой вклад в развитие и поблагодарить автора.

* **Поддержка всех актуальных\популярных версий питона (2.7, 3.5, 3.6, 3.7, 3.8);**  
   Питоны бывают разные, и где-то до сих пор активно пишут на 2.7, нужно быть полезным всем.

* **100% покрытие юнит тестами;**    
   ~~Юнит тесты улучшает архитектуру, позволяет автоматизировать регрессионные проверки.~~  
   Бейдж с заветным числом повышает ЧСВ и [задает планку другим](https://cmustrudel.github.io/papers/icse18badges.pdf).

* **Использование CI**  
   автоматические проверки - это очень удобно! ~~а еще куча клевых бейджей~~

  * **Запуск юнит тестов на всех платформах и на всех версиях питона;**  
     не стоит верить тем, кто утверждает, что питон и устанавливаемые пакеты - [кроссплатформенные](https://docs.python.org/2/library/os.html), ведь всегда можно натолкнуться на [баг](https://bugs.python.org/issue22587).
  * **Проверка код стайла;**  
     Единый стиль улучшает читаемость и уменьшает количество пустых дискуссий в ревью.

  * **Статический анализатора кода;**  
     Автоматический поиск багов в коде? Дайте два!
* **Пакет полезен и делает мир лучше.**  
   Самое сложно требование, так как судя по количеству пакетов в [pypi](https://pypi.org/) *(~210к)* разработчики - дикие альтруисты и многое уже написано.

## С чего начать?
Хороших идей не было, поэтому тему выбрал избитую и очень популярную - работа со системами счисления. 

Первая версия должна уметь переводить числа в римские и обратно. Для мануала сложнее и не нужно.

Ах, да, самое важное - это название: ~~numsys - как расшифровка numeral systems.~~ *numeral-system-py*.

## Тесты
Взял *python3.7* и первым делом написал тесты с заглушками фукнций (мы ведь за [TDD](https://en.wikipedia.org/wiki/Test-driven_development)) с использованием стандартного модуля [unittests](https://habr.com/ru/post/121162/). Для запуска решил использовать [pytest](https://habr.com/ru/post/269759/) (выглядит немного не логично, но стадартные тесты мне кажутся чуть удобнее (ИМХО), а pytest умеет в плагины).
Делаю следующую структуру проекта:
```
numeral-system/
    __init__.py
    roman.py
tests
    __init__.py
    test_roman.py
```
Тесты в пакет класть не будем, поэтому отделяем ~зёрна от плевел~.
И тут сразу встал вопрос, как запускать-то?

## Как управлять зависимостями?
Можно использовать использовать только virtualenv и requirements.txt. Можно быть прогрессивным и использовать [poetry](https://poetry.eustace.io/). Я же, пожалуй, воспользуюсь [tox](https://tox.readthedocs.io/en/latest/) - средство для упрощения автоматизации и тестирования.
Создаю простой конфиг:
```
[tox]
envlist = py37  ; запускать на одной предопределенной среде

[testenv]  ; секция описания
deps = pytest  ; ставим последнюю версию pytest
commands = pytest  ; запускаем
```
Далее заполняю тело функций и заставляю тесты проходить.
На этом моменте обычно большинство разработчиков останавливается, публикуют пакет и отгребают баги. Но мы не такие, мы идем дальше.

## Как управлять версиями?
В конфигурации tox указываю запуск тестов на всех интересующих версиях питона:
```
[tox]
envlist = py{27,35,36,37,38,py}
```
С помощью [pyenv](https://khashtamov.com/ru/pyenv-python/) доставляю нужные версии к себе локально, чтобы tox мог их найти и создать тестовые среды.

## Где заветные 100%?
Добавлю замер покрытия кода - для этого есть отличный пакет [coverage](https://coverage.readthedocs.io/en/v4.5.x/) и не менее прекрасная интеграция с pytest - [pytest-cov](https://github.com/pytest-dev/pytest-cov).
Меняю команду запуска теста:
```
commands = pytest \           
    --cov=numeral-system/ \           
    --cov=tests/ \           
    --cov-config "{toxinidir}/tox.ini" \           
    --cov-append
```
Делаю сбор статистики покрытия для кода самого пакета (*numeral-system/*) и обязательно для кода тестов (*tests/*) - я же не хочу, чтобы сами тесты содержали неисполняющиеся части?
Командой `--cov-append` всю собранную статистику для каждого вызова под различной версией питона суммирую в одну, потому что покрытие для второго и третьего питона может быть различным (привет зависимый от версии код и модуль [six](https://pypi.org/project/six/)!), но по итогу в сумме давать 100% покрытие. Простой пример:
```
if sys.version_info > (3, 0):
    # Python 3 code in this block
else:
    # Python 2 code in this block
```

Добавляю новую среду для создания coverage отчета.
```
[testenv:coverage_report]
deps = coverage
commands =
    coverage html
    coverage report --include="numeral-system/*,tests/*" --fail-under=100 -m
```
И добавляю в список сред после выполнения тестов на всех версиях питона.

```
[tox]
envlist =
    py{27,35,36,37,38,py}
    coverage_report
```
Для заветного бейджа в 100% интегрирую с [codecov](https://codecov.io/), который сделает интеграцию с github и позволит просмотреть историю измения покрытия кода.
```
[![Code Coverage](https://codecov.io/gh/zifter/numeral-system-py/branch/master/graph/badge.svg)][codecov-url]
```

## Как анализировать код?
Интегрирую со статическими анализаторами кода [pylint](https://www.pylint.org/) и [flake8](http://flake8.pycqa.org/en/latest/) - они не только ищут проблемы в коде, но проверяют на соответствие [PEP8](https://www.python.org/dev/peps/pep-0008/).
Много анализаторов не бывает, потому что они, по большей части, дополняют друг другу.

Интеграция элементарная - добавляю новые тестовые среды:
```
[tox]
envlist =
    flake8
    pylint
    py{27,34,35,36,37,py}
    coverage_report

[testenv:flake8]
deps = flake8
commands = flake8

[testenv:pylint]
deps = pylint
commands = pylint --rcfile=tox.ini numeral_system/ tests/
```

Сразу же напарываюсь на странные ограничения - 100 символов в строке, имена функций в 30 символов (да, я пишу очень длинные имена тестовых методов) и предупреждения на наличие TODO в коде. Приходится добавить пару исключений:
```
[MESSAGES CONTROL]
disable=fixme,invalid-name

[flake8]
max-line-length = 120
```

Так же неприятный момент в том, что разработчики pylint уже похранили python2.7 и не развивают большего пакет для него. Поэтому проверки стоит запускать на актуальном пакете для python3.7.
Добавляю соответствующую строчку в конфигурацию.
```
[tox]
envlist =
    flake8
    pylint
    py{27,34,35,36,37,py}
    coverage_report
basepython = python3.7
```
Кстати, это так же важно для запуска тестов на различных платформах, так как дефолтная версия питона в системах различная.

## Что там с CI?
### Appveyor
Интегрирую с [appveyor](https://www.appveyor.com/) - CI под виндой. Первичная настройка простая - все можно сделать в интерфейсе, затем скачать yaml файл и закоммитеть его в репозиторий.
```
version: 0.0.{build}
init:
- cmd: choco install python.pypy
install:
- cmd: >-
    python -m pip install --upgrade pip
    pip install tox
build: off
test_script:
- cmd: tox
```
Ссылка на бейдж, как обычно, добавляется в README.md
```
[![Build status Appveyor](https://ci.appveyor.com/api/projects/status/github/zifter/numeral-system-py?branch=master&svg=true)][appveyor-url]
```

### Travis CI
После, интегрирую с [Travis CI](https://travis-ci.org/) - CI под Linux (и под MacOS c Windows, но [`Python builds are not available on the macOS and Windows environments`](https://docs.travis-ci.com/user/languages/python/#what-this-guide-covers). Настройка чуть сложнее, так как конфигурационный файл будет использоваться непосрежственно из репозитория. Пару итераций проб и ошибок - конфигурация готова. Сквошим в один красивый коммит и merge request готов.
```
language: python
python: 3.8  # 

dist: xenial    # required for Python 3.7 (travis-ci/travis-ci#9069)
sudo: required  # required for Python 3.7 (travis-ci/travis-ci#9069)

addons:
  apt:
    sources:
      - deadsnakes
    packages:
      - python3.5
      - python3.6
      - python3.7
      - pypy

install:
  - pip install tox

script:
  - tox
```
(*Риторический вопрос: И почему CI проектам так нравится yaml формат?*)

Указываем версию python 3.8, так как установить ее через addon корректно не получилось, а Travis создает virtualenv указанной версии.
Люди, знакомые с Travis CI, могут вопросить, почему таким образом явно не указать версии python? Ведь Travis CI создает автоматически virtualenv и выполнит нужные команды в нем.

Причина в том, что нам нужно собрать данные по покрытию кода со всех версий. Но тесты будут запущены в разных джобах паралельно, из-за чего собрать общий отчет по покрытию не получится.
Конечно же, я уверен, что чуть больше разобравшись и это будет исправлено.

Ах да, самое важное, ссылка на бейдж так же добавляется в README.md
```
[![Build Status Travis CI](https://travis-ci.org/zifter/numeral-system-py.svg?branch=master)][travis-url]
```

## Как залить на pypi?
Далее создаю среду для сборки wheel пакета и среду для заливки в pypi:
```
[testenv:build_wheel]
deps =    
    wheel
    docutils
whitelist_externals =    
    /bin/sh    
    /bin/rm
commands =    
    /bin/rm -rf build dist venv_upload    
    python setup.py sdist bdist_wheel

[testenv:test_upload]
deps = twine
commands =    
     python -m twine upload --repository-url https://test.pypi.org/legacy/ dist/*

[testenv:pypi_upload]
skip_install = True
deps =
    twine
commands =
    python -m twine upload dist/*
```

Изначально проект назывался numsys, но при попытке заливки сталкнулся с тем, что пакет с таким именем уже есть! И что самое обидное - он тоже умеет конвертировать в римские цифры :)
Сильно не расстроился и переименовал в numeral-system-py.

[Срезаю релиз на github](https://help.github.com/en/articles/creating-releases), собираю пакет и заливаю в продовский pypi.

## А вcе работает?
Проверяю простыми командами:
```
> virtualenv venv
> source venv/bin/activate
(venv) > pip install numeral-system
(venv) > python
>>> import numeral_system
>>> numeral_system.roman.encode(7)
'VII'
```
Все отлично!

## Пару замечаний
### Обновления зависимостей
За время подготовки этой статьи была выпущена новыя версия pytest, в которой, по факту, дропнули поддержку python 3.4 ([на самом деле](https://github.com/tox-dev/tox/issues/1483) в пакете [colorama](https://github.com/tartley/colorama)). Вариантов было два:
* зафиксировать версию pytest\colorama, совместимую с 3.4;
* дропнуть поддержку 3.4 :)
Я пошел по простому пути, и просто дропнул ее.

### TravisCI
Не поддерживает python для MacOS и Windows

## А можно лучше?
На этом останавливаться не стоит, можно сделать следующие улучшения:
* Добавить перфоманс регрессию;
* Добавить поддержку MacOS;
* 100% покрытие кода далеко не показатель качества, тесты должны покрывать все ветки исполнения. Как [это](https://en.wikipedia.org/wiki/Cyclomatic_complexity) мерить?
* Зависимости обновляются и это [следует отслеживать](https://PyUp.io);
* Добавить модную документацию на [Sphinx](http://www.sphinx-doc.org/en/master/);
* Нужно больше статик анализаторов. Что есть еще?
* Стоит ли использовать [black](https://black.readthedocs.io/en/stable/) вместо flake8?

Тем, кто заинтересовался, советую так же прочитать [статью с похожей тематикой](https://habr.com/ru/company/ruvds/blog/444344/).

Ваши предложения?

[Проект можно потрогать на github](https://github.com/zifter/numeral-system-py)
