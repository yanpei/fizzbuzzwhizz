function main(a,b,c,num) {
  var result;
  var error;
  if(a==b||a==c||b==c){
      error = "存在相同特殊数";
      return error;
  }else if(a>9||b>9||c>9){
      error = "存在非个位数的特殊数";
      return error;
  }else{
      if(num%3==0){
          str= 'Fizz';
      }
  }
  result = str;
    return result;
}

module.exports = main;
