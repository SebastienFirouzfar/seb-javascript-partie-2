/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        let temp = 0;    
        let numberSort = document.getElementById("numbers").value; 
        let tableau = [2, 4, 14, 10, 90, 23, 16]; 
            for(let i = 0; i<tableau.length; i++){
                if(tableau[i]< tableau[i+1]){
                    temp = tableau[i+1]; 
                    tableau[i+1] = tableau[i]; 
                    tableau[i] = temp; 
                }
            }
        // your code here
    });

})();
