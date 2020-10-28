/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }

    }

    class Cat extends Animal {
        static greeting = "Miaom "
        constructor(name) {
            super();
            this.name = name;
        }

    }

    class Dog extends Animal {
        static greeting = "Wouf "
        constructor(name) {
            super();
            this.name = name;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        let cat = new Cat("Medor");
        let dog = new Dog("Pixel");
        console.log(cat.sayHello() + " "+dog.sayHello());
    })
})();
