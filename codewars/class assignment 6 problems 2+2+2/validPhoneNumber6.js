function validPhoneNumber(phoneNumber){
  
  var regex = /^\(\d{3}\) \d{3}\-\d{4}$/;
	if(phoneNumber.match(regex)){
	return true;
	}

else{
return false;
}
}
