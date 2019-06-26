function LetterCapitalize(str) {
   output = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i-1) === " " || i === 0) {
      output += str.charAt(i).toUpperCase();
    } else {
      output += str.charAt(i);
    }
  }
  return output;
  return str;         
}
  LetterCapitalize(('Hola Mundo'));
  console.log(output);