function seriesSum(n){
    let result = 0;
    for(let i = 0; i < n; i++){
        result += 1/(1 + i * 3)
    }
    return result.toFixed(2)
}

