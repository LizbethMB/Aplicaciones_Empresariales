function FirstReverse(str) { 

   reversa = "";
  str.split("").forEach(palabra => {
      reversa = palabra + reversa; 
  });
  return reversa;        
}
FirstReverse(("hello"));
console.log(reversa);
  