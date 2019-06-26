function SimpleSymbols(str) {
   re = /^[a-zA-Z]/;
   re2 = /[^+][a-zA-Z]/;
   re3 = /[a-zA-Z][^+]/;
    
  if (re.test(str)) {
    output = "false";
  } else if (re2.test(str)) {
    output = "false";
  } else if (re3.test(str)) {
    output = "false";
  } else {
    output = "true";
  }
  return output;

  // code goes here  
  return str;    
}
   
   
  SimpleSymbols("+d+=3=+s+");
  console.log(output);

