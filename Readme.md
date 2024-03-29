[Список всех критериев](https://htmlacademy.github.io/intensive-javascript-criteria/)
# Техническое задание
## Проект: Кекстаграм
* Название сайта: Кекстаграм.
* Кекстаграм — сервис просмотра изображений. Пользователям предоставлена возможность загружать свои фотографии или просматривать фотографии, загруженные ранее другими пользователями.
### Описание функциональности
### 1. Сценарий поведения пользователя на сайте:
* 1.1. Загрузка нового изображения:
изменение масштаба изображения
изменение положения изображения перетаскиванием
применение одного из заранее заготовленных эффектов
выбор глубины эффекта с помощью ползунка
добавление текстового комментария
* 1.2. Просмотр и фильтрация изображений, загруженных другими пользователями.
* 1.3. Загрузка нового изображения осуществляется выбором файла изображения с помощью стандартного контрола загрузки файла, который стилизован под букву «О» в логотипе. После выбора изображения показывается форма применения эффекта и кадрирования изображения.
* 1.4. После отправки формы все поля должны сбрасываться. Т. е. если отправлено одно изображение, а затем второе, то должны быть восстановлены значения по умолчанию.
### 2. Ограничения накладываемые на поля
* 2.1. Масштаб
задаётся в диапазоне от 25 до 100
значение изменяется с шагом 25
начальное значение 100
* 2.2. Эффект
на изображение может накладываться только один эффект
интенсивность эффекта регулируется слайдером сверху
при выборе эффекта слайдер отражает текущую интенсивность эффекта
при выборе эффекта «Оригинал» слайдер прячется
* 2.3. Хэш-теги
хэш-теги не обязательны
хэш-тег начинается с символа # (решётка) и состоит из одного слова
хэш-теги разделяются пробелами
один и тот же хэш-тег не может быть использован дважды
нельзя указать больше пяти хэш-тегов
максимальная длина одного хэш-тега 20 символов
теги не чувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом
* 2.4. Комментарий
комментарий не обязателен
длина комментария не может составлять больше 140 символов
### 3. Просмотр загруженных изображений
* 3.1. Все загруженные изображения показаны на главной странице в виде миниатюр. При наведении на миниатюру можно увидеть кол-во комментариев и лайков. При нажатии на миниатюру показывается полноэкранное изображение с количеством лайков и комментариев.
### 4. Фильтрация изображений
* 4.1. Рекомендуемые — фотографии в том порядке, в котором они были загружены с сервера.
* 4.2. Популярные — фотографии, отсортированные в порядке убывания количества лайков.
* 4.3. Обсуждаемые — фотографии, отсортированные в порядке убывания количества комментариев.
* 4.4. Случайные — просто случайные фотографии. Ни в коем случае не должны повторяться.
### 5. Необязательная функциональность
* 5.1. Изменение размеров фотографии и применение фильтра используется для фотографии, добавленной в поле выбора файла формы загрузки
