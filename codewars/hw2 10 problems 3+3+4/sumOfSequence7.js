const sequenceSum = (begin, end, step) => {
	var res = [];
	while(begin <= end){
		res.push(begin);
		begin += step;
	}
	
	var result = 0;
	for(var i=0; i<res.length; i++){
		result += res[i];
	}
	return result;
};
