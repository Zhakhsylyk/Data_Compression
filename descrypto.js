var CryptoJS = require('crypto-js');
var key = 'abc123';
function encryptByDESModeECB(text){
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var encrypted = CryptoJS.DES.encrypt(text, keyHex, {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
  });      
  return encrypted.ciphertext.toString();
  }
  
  function decryptByDESModeECB(ciphertext){
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var decrypted = CryptoJS.DES.decrypt({
  ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
  }, keyHex, {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
  });
  var result = decrypted.toString(CryptoJS.enc.Utf8);
  return result ;
  }


  var text = "Abai was born in Karauyl village in Chingiz volost of Semipalatinsk uyezd of the Russian Empire (this is now in Abay District of East Kazakhstan). He was the son of Qunanbai and Uljan, his father's second wife. They named him Ibrahim, as the family was Muslim, and he stuck with the name for the first few years of his life.";

  var encrypted = encryptByDESModeECB(text);
  var decrypted = decryptByDESModeECB(encrypted);
 console.log(encrypted);
 console.log(decrypted);
