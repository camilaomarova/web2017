//highest and lowest
function highAndLow(numbers){
  var res = numbers.split(" ");
  return Math.max.apply(null, res) + ' ' + Math.min.apply(null, res);
}