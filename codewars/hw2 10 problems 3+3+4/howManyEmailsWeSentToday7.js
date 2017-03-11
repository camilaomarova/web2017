function getPercentage(sent, limit){
  if(sent == 0){
      return "No e-mails sent";
  }
  else if(sent >= limit){
      return "Daily limit is reached";
  }
  else{
      if(limit == null){
        limit = 1000;
      }
      var res = 0;
      res = (sent / limit) * 100;
      return Math.floor(res) + '%';
  }
}

