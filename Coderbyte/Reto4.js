function LetterChanges(str) { 
    converted = str.replace(/[a-z]/gi, function(char) { 
        return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
      });
      
    capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
        return vowel.toUpperCase();
      });

      return capitalized;        
    }
    LetterChanges(("hello"));
    console.log(capitalized);
  

  