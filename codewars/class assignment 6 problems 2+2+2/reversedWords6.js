function reverseWords(str){
  var res = [];
  var spl = str.split(' ');
  res = spl.reverse().join(" ");
  return res;
}
