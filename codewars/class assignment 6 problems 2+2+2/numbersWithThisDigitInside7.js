//numbers with this digit inside 7 kyu
function numbersWithDigitInside(x, d) {
  var arr = [];
  while(x >= 1){
    var strNum = x.toString();
    for(var i=0; i<strNum.length; i++){
      if(strNum[i] == d){
        arr.push(x);  
        break;
      }
    }
   x--;
  }
  console.log(arr);
  if(arr.length != 0){
  var cnt = 0;
  var sum = 0;
  var prod = 1;
    for(var i=0; i<arr.length; i++){
        cnt++;
        sum+=arr[i];
        prod *= arr[i];
    }
    return [cnt, sum, prod];
  }
  else{
    return[0, 0, 0];
  }
}