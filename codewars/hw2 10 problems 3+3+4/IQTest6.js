function iqTest(numbers){
    var spl = numbers.split(' ');
    var cnt1 = 0;
    var cnt2 = 0;
    for(var i=0; i<spl.length; i++){
      if(spl[i]%2 == 0){
          cnt1++;
      }
      else{
          cnt2++;
      }
    }
    
    if(cnt1 > cnt2){
        for(var i=0; i<spl.length; i++){
            if(spl[i] % 2 != 0){
                return i + 1;
            }
        }
    }
    else{
        for(var i=0; i<spl.length; i++){
            if(spl[i] % 2 == 0){
                return i + 1;
            }
        }
    }
}

