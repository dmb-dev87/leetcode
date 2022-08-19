/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s.lenght == 0 || s.lenght > 15) return;
    
    let romanVal = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let result = 0;
    let inputs = Array.of(...s);
    let inputsVal = [];
    
    inputs.map((e) => ((e = romanVal[e]), inputsVal.push(e)));
    
    for(let i = 0; i < inputsVal.length; i++) {
        inputsVal[i] < inputsVal[i+1]
            ? (result -= inputsVal[i]) 
            : (result += inputsVal[i]);
    }
    
    console.log(result);
    
    return result;        
};