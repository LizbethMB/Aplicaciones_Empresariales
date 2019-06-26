function LongestWord(sen){
    var arr=sen.match(/[a-z0-9]+/gi);
    var storted=arr.sort(function(a,b){
     return b.length-a.length;
    });
    return storted[0];
}//function
    LongestWord("los perros feos");
    