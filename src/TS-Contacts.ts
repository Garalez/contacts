type User = {
  name: string;
  age: number;
  group: string;
};

type Admin = {
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
    group: 'qwe',
    role: 'администратор',
  },
];

const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age}`);
};

console.log('Users:');
persons.forEach(logPerson);

