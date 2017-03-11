//remove string spaces
function noSpace(x){
  var res = [];
  var spl = x.split(' ');
  
  for(var i=0; i<spl.length; i++){
      res.push(spl[i]);
  }
  return res.join('');
}