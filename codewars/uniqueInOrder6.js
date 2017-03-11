var uniqueInOrder=function(iterable){
  var i=0;
  var ans=[];
  while(i<iterable.length)
  {
      if(iterable[i]!==iterable[i+1])
      {
          ans.push(iterable[i])
      }
      i++;
  }
  return ans;
}