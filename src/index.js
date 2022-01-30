module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  for(let j = 0; j < str.length; j++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (str[j] == bracketsConfig[i][0] && str[j+1] == bracketsConfig[i][1]) {
          str.splice(j, 2);
          j = j - (j+1);
        }
      }
    }
  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
}
