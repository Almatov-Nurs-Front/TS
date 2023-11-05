# Полиморфизм - практика

### Полиморфизм делится на три типа:
- ### Ad-hoc - перенагрузка функции, способ задавать функции что будет в     возвращать функция при определенных аргументах, пример

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 1));
console.log(add('Hello', 'World'));
console.log(add(true, 'World')); // ! выдаст ошибку

```
---
- ### Парметрический полиморфизм - типизирование функций или операторов через "Generic", припер:
```typescript
function wrapInObject<T>(arr: T[]): {value: T}[] {
  return arr.map(value => ({ value }));
};

console.log(wrapInObject([1, 2, 3])); // -> {value: number}[]
console.log(wrapInObject(['1', '2', '3'])); // -> {value: string}[]

```
---
- ### Полиморфизм подтипов - типизирование с помощью "interfface", ориентирование подтипов по типам, пример
```typescript
interface Animal {
  makeSound(): string;
};

class Cat implements Animal {
  makeSound(): string {
    return 'Meow';
  }
}

class Dog implements Animal {
  makeSound(): string {
    return 'Woof';
  }
}

function animalSounds(animals: Animal[]): void {
  animals.forEach((animal) => {
    console.log(`animal says ${animal.makeSound()}`);
  });
};

const cat = new Cat();
const dog = new Dog();

animalSounds([ cat, dog ]);

```
