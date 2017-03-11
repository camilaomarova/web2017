function thirt(n) {
    var rem=[1, 10, 9, 12, 3, 4];
    
    while(true)
    {
        n_str=n.toString();
        var i=n_str.length-1;
        var j=0;
        var sum=0;
        
        
        while(i>=0)
        {
            sum+=parseInt(n_str[i]) * rem[j];
            j++;
            if(j===6)
            {
                j=0;
            }
            i--;
        }
        
        if(sum===n)
        {
            break;
        }
        else
        {
            n=sum;
        }
    }
    return n;
}