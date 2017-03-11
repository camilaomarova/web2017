//reverse and invert 7 kyu
function reverseInvert(array){
  var res = [];
  for(var i=0; i<array.length; i++){
      if(array[i] === parseInt(array[i], 10)){
        var sNum = array[i].toString();
        var rev = sNum.split("").reverse().join("");
        if(rev[rev.length - 1] == '-'){
          rev = ('-') + rev.replace('-', '');
        }
        
        var revNum = Number(-1 * rev);
        res.push(revNum);
      }
  }
  return res;
}