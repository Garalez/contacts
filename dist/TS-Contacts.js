"use strict";
const persons = [
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        name: 'Виталий Бартенев',
        age: 36,
        group: 'Семья',
    },
    {
        name: 'Евгений Маркелов',
        age: 35,
        group: 'Друзья',
    },
    {
        name: 'admin',
        age: 28,
        role: 'администратор',
    },
];
const isAdmin = (person) => 'role' in person;
const isUser = (person) => 'group' in person;
const logPerson = (person) => {
    let information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
};
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
