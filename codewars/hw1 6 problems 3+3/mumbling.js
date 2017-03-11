//mumbling 
function accum(s) {
	var result = [];
  var spl = s.split('');
  for(var i = 0; i < spl.length; i++){
    result.push(spl[i].toUpperCase() + Array(i + 1).join(spl[i].toLowerCase()));
  }
  
  return result.join('-');
}