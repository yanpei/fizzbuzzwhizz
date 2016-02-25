function main(a,b,c) {
  var result;
  var error;
  if(a==b||a==c||b==c){
      error = "存在相同特殊数";
      return error;
  }else if(a>9||b>9||c>9){
      error = "存在非个位数的特殊数";
      return error;
  }
    return result;
}

module.exports = main;
