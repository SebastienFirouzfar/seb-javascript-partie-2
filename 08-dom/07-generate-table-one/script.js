/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    
     let target = document.getElementById("target"); 
     let tab = document.createElement("table")
    for (let i = 0; i <= 10; i++) {
        let row = document.createElement("tr"); 
        for (let j = 0; j <1; j++) {
            let column = document.createElement("td");
            let text = document.createTextNode("Je suis le"+ i)
            column.appendChild(text); 
            row.appendChild(column) 
        }
        tab.appendChild(row)
    }
    target.appendChild(tab); 

    

})();
