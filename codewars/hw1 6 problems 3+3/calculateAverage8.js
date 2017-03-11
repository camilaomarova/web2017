//calculate average
function find_average(array) {
var total = 0;
  for(var i=0; i<array.length; i++){
      total += array[i];
  }
  return total/array.length;
}