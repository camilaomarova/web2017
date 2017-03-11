//find the odd
function findOdd(A) {
  var res = 0;
  var match = 0;
  for(var i = 0; i < A.length; i++){
    for(var j = 0; j < A.length; j++){
      if(A[j] === A[i]){
        match++;
      }
    }
    
    if(match % 2 != 0){
      res = A[i];
      break;
    }
    
    match = 0;
  }
  
  return res;
}