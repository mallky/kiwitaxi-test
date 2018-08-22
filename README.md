# kiwitaxi-test
Тестовое задание для KiwiTaxi

# Описание

Приложение для поиска вопросов на stackoverflow. Вводим ключевое слово, нажимаем на find questions, находим вопросы, в названии которых содержится данное слово.

Сортировка вопросов изначально идет по activity.

Нажимая на кнопки Sorting by score и Sorting by date можно сортировать вопросы по очкам и по дате создания (сделано уже после повторного прочтения ТЗ на следующий день, сначала не понял, что нужна такая сортировка, думал что нужно реализовать в запросе и при получении данных).

# Используемые технологии

В данном проекте используется React, Redux, SASS. Выбор пал на данные технологии исключительно из-за желания показать, что данные технологии могу собрать вместе. В данном проекте можно легко обойтись без Redux и SASS.

# Поддержка браузеров

В [ТЗ](https://docs.google.com/document/d/1dsZLQb7unsHwIQwoG3O9muGQ_QFgkOhzc_zZ1tG6wg8/edit) не было написано, должны ли мы поддерживать все возможные браузеры или нет, должна ли присутсвоввать адаптивная верстка или нет и тд, поэтому делал все на свое усмотрение.

В итоге проверял работу приложения на Chrome, Firefox и EDGE (поддержки IE11 нет из-за fetch) и на своем телефоне с разрешением 414 на 736 (возможно на телефонах с меньшим экраном немного поедет верстка).

# Запуск проекта

## Устанавливаем зависимости

```
npm install
```

или

```
yarn install
```

## Для того чтобы сбилдить проект

```
npm run build
```

## Запуск дев сервера

```
npm start
```

Приложение запустится по адресу localhost:9000.