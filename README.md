
##Запуск проекта
### `npm start`
Запускает приложение в режиме разработки.
Занимает 3000 порт, если он свободен.
Откройте [http://localhost:3000 ](http://localhost:3000 ), чтобы просмотреть его в вашем браузере.

##Сборка проекта
### `npm run build`
Создаёт папку build и билдит туда приложение 

##Описание
Проект содержит (на данный момент) 3 компонента:
1. Обложка (Wrapper) (картинка, название "Общая аналитика" и кнопка "выгрузить результат";
2. Компонент (Percent) с картинкой микрофона, результатами, комментариями, общим результатом, шкалой в процентах. Компонент помещён в обложку;
3. Компонент (Smile) со шкалами, смайликами, текстом и процентом. Компонент помещён в обложку.

##Описание root-файла (index.js)
Создано 3 объекта:
1.wrapper с передаваемыми в компонент полями title, titleButton, img,
2.persent с передаваемыми в компонент полями title, description, result, percent,
3.smiles с передаваемыми в компонент полями title, percent

Использован компонент Wrapper, куда передавались пропсы: 
1.title={wrapper.title} - для заголовка обложки
2.titleButton={wrapper.titleButton} - для текста обложки
3.note={wrapper.img} - для изобрадения обложки
4.percent={persent} - пропсы для компонента Percent
5.smiles={smiles} - пропсы для компонента Smile

##Wrapper 
В компонент Wrapper вложены компоненты Percent и Smile с соответствующими пропсами.
Картинка, заголовок и текст кнопки меняются в зависимости от пропсов (полей объекта wrapper).

##Percent
Изображение, заголовок, комментарий, текст "результат", процент меняются в зависимости от пропсов (полей объекта persent)
Заполненность шкалы прогресса меняется в файла percent.css у класса wrapper__scale__grayback в свойстве left

##Smile
Изображение смайлика, изображение стрелки, заголовок, процент меняются в зависимости от пропсов (полей объекта smiles)
