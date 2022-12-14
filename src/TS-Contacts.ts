interface User {
  name: string;
  age: number;
  group: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
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

const isAdmin = (person: Person): person is Admin => 'role' in person;
const isUser = (person: Person): person is User => 'group' in person;

const logPerson = (persons: Person[], userType: 'Admins' | 'Users') => {
  console.log(userType);

  persons
    .filter((person) => {
      if (userType === 'Admins') return isAdmin(person);
      if (userType === 'Users') return isUser(person);
    })
    .forEach((person) => console.log(Object.values(person).join(', ')));
};

logPerson(persons, 'Admins');
console.log();
logPerson(persons, 'Users');
