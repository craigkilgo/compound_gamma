function compound_gamma_dist(x,a,b,q,cumulative){
    var compound_gamma_dist;
    if(cumulative==false){
        compound_gamma_dist = (x * q) ^ (a - 1) * (1 + x * q) ^ (-a - b) / (1 / q * beta_function(a, b));
    }else{
        compound_gamma_dist = WorksheetFunction.Beta_Dist(1 / (1 + (1 / q) / x), a, b, true);
    }
    return compound_gamma_dist;
}

function beta_function(a,b){
    var beta_function;
    beta_function = Math.exp(WorksheetFunction.GammaLn(a) + WorksheetFunction.GammaLn(b) - WorksheetFunction.GammaLn(a + b))

    return beta_function;
}