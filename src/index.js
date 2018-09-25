module.exports = function solveEquation(equation) {
    let k = equation.replace("x^2", "");
     k = k.replace("x", "");
     k = k.split(" ").join("");
    let ak = k.split('*');
    let discr= ak[1] * ak[1] - 4 * ak[0] * ak[2];
    let x=[];
     x[0] = Math.round((-(ak[1]) - Math.sqrt(discr)) / (2 * ak[0]));
     x[1] = Math.round((-(ak[1]) + Math.sqrt(discr)) / (2 * ak[0]));
    
    x.sort( function(a, b) {return a - b} );
    return x;
}

