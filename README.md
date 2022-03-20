# webform-blacklist
A simple phone list management application for integration into another project (Django) 

## Description

My first commercial React project.

Task: connect a web form to an existing machine running a python script, and deploy a simple backend. Collect everything in docker and run it on a remote machine.

Web form functionality: adding numbers to the blacklist, adding email addresses to the mailing list.

The frontend code is presented (this application was integrated into the Django project). To complete the task, I decided to use React, freshly studied at that time, in conjunction with the Django REST framework (with a jwt token). I already knew about the existence of Redux, but I decided that I wouldn’t really need it there.

---

## Описание 

Мой первый коммерческий проект на React.

Задача: подключить к существующей машине, выполняющей скрипт на python'е веб форму, а также развернуть простенький backend. Собрать все в docker и запулить на удаленную машину.

Функционал вебформы: добавление номеров в черный список, добавление почтовых адресов в список рассылки.

Представлен код фронтенда (данное приложение интегрировалось в Django проект). Для выполнения задачи решил использовать свежеизученный на то время React в связке с Django REST framework (c jwt-токеном). Про существование Redux уже знал, но решил, что он мне там не особо понадобится. В проекте так же решил испробовать smart-grid (сейчас понимаю, что совсем неоправданное подключение пакета) и sass препроцессор для верстки.

В итоге получилось неплохо, для первого раза, как мне кажется. Задача была интересная, со многим ознакомился, побольше вник в docker с его network-сетями между образами.

Заказчик был доволен, что больше не придется заносить номера в черный список с помощью скрипта :)
