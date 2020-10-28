/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let chat1 = new Cat(); 
        let chat2 = new Cat();
        chat1.name = "Skitty"
        chat1.age = 9 
        chat2.name = "Pixel"
        chat2.age = 6
        console.log(chat1.name+ " "+chat1.age+ " ans")
        console.log(chat2.name+ " "+ chat2.age+ " ans")
    })
})();
