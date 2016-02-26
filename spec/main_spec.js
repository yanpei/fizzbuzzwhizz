"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
   sinon.spy(console, 'log');
//测试getString_Item函数，单个值的处理
    it("测试a的倍数_1",function(){
       var result = main.getString_Item(3,5,7,3);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });

    it("测试a的倍数_2",function(){
       var result = main.getString_Item(2,5,7,6);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });
    it("测试b的倍数_1",function(){
       var result = main.getString_Item(3,5,7,5);
       var expect_string = 'Buzz';
       expect(expect_string).to.equal(result);
    });
    it("测试b的倍数_2",function(){
       var result = main.getString_Item(2,5,7,15);
       var expect_string = 'Buzz';
       expect(expect_string).to.equal(result);
    });
    it("测试c的倍数_1",function(){
       var result = main.getString_Item(3,5,7,7);
       var expect_string = 'Whizz';
       expect(expect_string).to.equal(result);
    });
    it("测试c的倍数_2",function(){
       var result = main.getString_Item(2,5,7,49);
       var expect_string = 'Whizz';
       expect(expect_string).to.equal(result);
    });

    it("测试a和b的倍数",function(){
       var result = main.getString_Item(3,5,7,15);
       var expect_string = 'FizzBuzz';
       expect(expect_string).to.equal(result);
    });

    it("测试a和c的倍数",function(){
       var result = main.getString_Item(3,5,7,21);
       var expect_string = 'FizzWhizz';
       expect(expect_string).to.equal(result);
    });

    it("测试b和c的倍数",function(){
       var result = main.getString_Item(2,5,7,35);
       var expect_string = 'BuzzWhizz';
       expect(expect_string).to.equal(result);
    });

    it("测试a、b、c的倍数",function(){
       var result = main.getString_Item(2,5,7,70);
       var expect_string = 'FizzBuzzWhizz';
       expect(expect_string).to.equal(result);
    });

    it("测试包含a",function(){
       var result = main.getString_Item(3,5,7,13);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });

    it("测试包含a,且是a的倍数",function(){
       var result =main.getString_Item(3,5,7,33);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });

    it("测试包含a,且是b的倍数",function(){
       var result = main.getString_Item(2,5,7,25);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });
    it("测试包含a,且是c的倍数",function(){
       var result = main.getString_Item(2,5,7,28);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });
    it("测试包含a,且是a和b的倍数",function(){
       var result = main.getString_Item(3,5,7,30);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });

    it("测试包含a,且是a和c的倍数",function(){
       var result = main.getString_Item(3,5,7,63);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });
    it("测试包含a,且是b和c的倍数",function(){
       var result = main.getString_Item(3,5,7,35);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });
    it("测试包含a,且是a、b、c的倍数",function(){
       var result = main.getString_Item(2,3,7,42);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });
    it("测试不符合规则３、４、５的数",function(){
        var result = main.getString_Item(3,5,7,16);
        var expect_string = '16';
        expect(expect_string).to.equal(result);
    });

//测试getAllString函数——确保得到的列表符合要求
    it("测试获取的列表_1",function(){
        var result = main.getAllString(3,5,7,10);
        var expect_string = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n';
        expect(expect_string).to.equal(result);
    });
    it("测试获取的列表_2",function(){
        var result = main.getAllString(2,5,7,10);
        var expect_string = '1\nFizz\n3\nFizz\nBuzz\nFizz\nWhizz\nFizz\n9\nFizzBuzz\n';
        expect(expect_string).to.equal(result);
    });
    it("测试当人数为０时获取的列表",function(){
        var result = main.getAllString(3,5,7,0);
        var expect_string = '';
        expect(expect_string).to.equal(result);
    });
    it("测试当人数为1时获取的列表",function(){
        var result = main.getAllString(3,5,7,1);
        var expect_string = '1\n';
        expect(expect_string).to.equal(result);
    });

//测试main 函数
    it("测试有异常输入",function(){
       var  result = main.main('l','5','7');
       var expect_string = '存在异常输入';
       expect(expect_string).to.equal(result);
    });

    it("测试存在相同特殊数", function(){
                var result = main.main(3,3,5);
        var expect_string ='存在相同特殊数';
        expect(expect_string).to.equal(result);
    });

     it("测试存在非个位数的特殊数",function(){
          var result = main.main(3,5,12);
         var expect_string = '存在非个位数的特殊数';
         expect(expect_string).to.equal(result);
     });
     /*
     it("测试符合要求的特殊数",function(){
          var result = main.main(3,5,7);
         var expect_string = '';//100个值
         expect(expect_string).to.equal(result);
     });
     it("测试符合要求的特殊数",function(){
          var result = main.main(3,5,7);
         var expect_string = '';//101个值
         expect(expect_string).to.equal(result);
     });
     */
/*//测试main函数传递给getAllString的参数是对的

*/

});
