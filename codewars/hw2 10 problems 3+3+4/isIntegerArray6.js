function isIntArray(arr) {
  if(arr) {
    for(var i = 0; i < arr.length; i++) {
      if(!Number.isInteger(arr[i])){
        return false;
      }
    }
    return true;
  }
  return false;
}
