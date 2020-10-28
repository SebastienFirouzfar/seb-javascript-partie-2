/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person{
        constructor(){
            this.name = name; 
            this.lastName = this.lastName; 
        }

        sayHello(){
            return "Hello"; 
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let person1 = new Person(); 
        person1.name = "Sebastien"
        person1.lastName = "Firouzfar"
        console.log(person1.sayHello()+ " "+ person1.name+ " "+person1.lastName); 
    })
})();
