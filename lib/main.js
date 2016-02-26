function main(a,b,c) {
  var result;
  var error;
  var count = 100;
  if (typeof(a)!='number'||typeof(b)!='number'||typeof(c)!='number') {
      error = '存在异常输入';
      return error;
  }else if(a==b||a==c||b==c){
      error = "存在相同特殊数";
      return error;
  }else if(a>9||b>9||c>9){
      error = "存在非个位数的特殊数";
      return error;
  }else{
      result = getAllString(a,b,c,count);
  }
  return result;
}

function getAllString(a,b,c,count){
        var allStringArr = new Array();
        var allString='';
        for(var num=1;num<=count;num++){
            str_item = getString_Item(a,b,c,num);
            allStringArr.push(str_item);
        }
        for(var i=0;i<allStringArr.length;i++){
            allString+=allStringArr[i]+'\n';
        }
        return allString;
}

function getString_Item(a,b,c,num){
      var num_str = num.toString();
      var a_str = a.toString();
      var str;
      if(num_str.indexOf(a_str)!==-1){
          str = 'Fizz';
      }else {
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
          }else{
              str=num_str;
          }
      }
      return str;
}



module.exports = {main,getString_Item,getAllString};
