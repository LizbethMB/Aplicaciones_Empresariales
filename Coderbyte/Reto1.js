function LongestWord(sen){

     arr=sen.match(/[a-z0-9]+/gi);
     storted=arr.sort(function(a,b){
     return b.length-a.length;
    });
    return storted[0];
}//function
    LongestWord('perros perrisimos');
    console.log(storted[0]);
    
    
