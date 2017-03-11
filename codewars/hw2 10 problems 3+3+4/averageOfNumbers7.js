function averages(numbers) {
    var res = [];
    if(numbers != null){
        for(var i=0; i < numbers.length - 1; i++){
          res.push((numbers[i] + numbers[i+1]) / 2);
        }
      }
        return res;
}
