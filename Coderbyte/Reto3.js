function FirstReverse(str) { 

  let reversa = "";
  str.split("").forEach(palabra => {
      reversa = palabra + reversa; 
  });
  return reversa;        
}
FirstReverse(readline());
  