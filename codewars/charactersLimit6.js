function charCheck(text, max, spaces){
  var arr = [];
  var trueFalse = true;
  if(spaces == false){
    text = text.replace(/\s/g, '');
    if(text.length <= max){
      trueFalse = true;
      return [trueFalse, text];
    }
    else{
      trueFalse = false;
      text = text.substr(0, max);
      return [trueFalse, text];
    }
  }
  else{
     if(text.length <= max){
      trueFalse = true;
      return [trueFalse, text];
    }
    else{
      trueFalse = false;
      text = text.substr(0, max);
      return [trueFalse, text];
    }
  }
};