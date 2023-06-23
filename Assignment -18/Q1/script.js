var merge = function(intervals) {
    

    const [START, END] = [0, 1];
    
    let result = [];
    
    intervals.sort( (a, b) => a[START] != b[START] ? a[START] - b[START] : a[END] - b[END] );
    
    for( const curInterval of intervals){
        
        if( (result.length == 0) || ( result[result.length-1][END] < curInterval[START]) ){
       
            result.push( curInterval );

            
        
        }else{
           
            result[result.length-1][END] = Math.max( result[result.length-1][END], curInterval[END] );

        }
    }
    
    return result;
};