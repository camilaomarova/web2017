function createPhoneNumber(n){
  return '(' + n.slice(0, 3).join('') + ') ' + n.slice(3, 6).join('') + '-' + n.slice(6, 10).join('');
}
