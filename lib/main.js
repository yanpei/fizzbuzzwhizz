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
      var num_str = num.toString();
      var a_str = a.toString();
      if(num_str.indexOf(a_str)!==-1){
          str = 'Fizz';
      }else{
          if(num%a==0){
              if(num%b==0){
                 if(num%c==0){
                    str = 'FizzBuzzWhizz';
                 }else{
                    str = 'FizzBuzz';
                 }
              }else if(num%c==0){
                 str = 'FizzWhizz';
              }else {
                  str= 'Fizz';
              }
          }else  if(num%b==0){
             if(num%c==0){
                  str = 'BuzzWhizz';
             }else{
                  str='Buzz';
             }
          }else if(num%c==0){
             str ='Whizz';
          }
      }
  }
  result = str;
    return result;
}

module.exports = main;
