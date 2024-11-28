

// querySelector - получение конкретного тега (объекта);


//   console.log(document);

const p = document.querySelector('p');

console.log(p);
// Пример получения элемента по классу
const span = document.querySelector('.example');

console.log(span);

// Получение нескольких тегов (объектов)

const links = document.querySelectorAll('.nav_list-link');


links.forEach(link => {
   console.log(link);

});

// innerHTML - позволяет поменять/получить содержимое html тега
links[0].innerHTML = 'Главная';
links[1].innerHTML = 'Главная';
links[2].innerHTML = 'Главная';
links[3].innerHTML = 'Главная';
links[4].innerHTML = 'Главная';

const linksArray = {
   label: "Контакты"
}