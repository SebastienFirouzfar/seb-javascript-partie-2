/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        //La nature de Set est telle qu’il vous permet de stocker obligatoirement et uniquement des valeurs uniques,
        // singulières. Lorsque vous lui passez un tableau, Set supprimera toutes les valeurs en double.
        alert([...new Set(fruits)]); 
    })

})();
