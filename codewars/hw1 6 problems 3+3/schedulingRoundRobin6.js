//Scheduling(Round-Robin)
function roundRobin(jobs, slice, index){
  var res = 0;
  while(jobs[index]>0){
      for(var i=0; i<jobs.length; i++){
          if(jobs[i]<slice){
            res += jobs[i];
            jobs[i] = 0;
          }
          else{
            jobs[i] = jobs[i] - slice;
            res += slice;
          }
       }
  }
  return res;
}
