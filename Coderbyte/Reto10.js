function AlphabetSoup(str) { 

    array = str.split('');
    array.sort();
    return array.join(''); 
           
  }

  console.log(AlphabetSoup("lizbeth"));