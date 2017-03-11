//sum without highest and lowest 8 kyu
function sumArray(array) {
  if(typeof array === 'object' && array instanceof Array && array.length > 1){
  var sum = 0;
    for(var i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum - Math.min.apply(null, array) - Math.max.apply(null, array);
  }
  else{
    return 0;
  }
    
}