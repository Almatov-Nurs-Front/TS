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
