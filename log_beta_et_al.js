function log_beta_function(alpha2,beta2){
    var log_beta_function = WorksheetFunction.GammaLn(alpha2) + WorksheetFunction.GammaLn(beta2) - WorksheetFunction.GammaLn(alpha2 + beta2)
    return log_beta_function;
}

function beta_binomial_dist(x, n, a, b, cumulative){
    var beta_binomial_dist;
    var i;
    var result;
    if(!cumulative){
        beta_binomial_dist = WorksheetFunction.Combin(n, x) * Exp(log_beta_function(x + a, n - x + b) - log_beta_function(a, b));
    }else{
        i = 0;
        result = 0;

        while(i <= x){
            result = result + beta_binomial_dist(i, n, a, b, False);
            i = i + 1;
        }
        beta_binomial_dist = result;
    }
    return beta_binomial_dist;

}