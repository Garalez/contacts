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
const logPerson = (persons, userType) => {
    console.log(`${userType}: `);
    persons.forEach((person) => {
        if (isAdmin(person) && userType === 'Admins') {
            console.log(`${person.name}, ${person.age}, ${person.role}`);
        }
        if (isUser(person) && userType === 'Users') {
            console.log(`${person.name}, ${person.age}, ${person.group}`);
        }
    });
};
logPerson(persons, 'Admins');
console.log();
logPerson(persons, 'Users');
