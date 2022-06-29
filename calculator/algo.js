var DICTIONARY =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789".split("");

function encodeId(num) {
  let base = DICTIONARY.length;
  let encoded = "";

  if (num === 0) {
    return DICTIONARY[0];
    }
    
    while (num > 0) {
        encoded += DICTIONARY
    }
}
