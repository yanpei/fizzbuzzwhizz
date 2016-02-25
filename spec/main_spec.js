"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
   //sinon.spy(console, 'log');

    it("测试用例1", function(){
        var result = main(3,3,5);
        var expect_string ='存在相同特殊数';
        expect(expect_string).to.equal(result);
    });

    it("测试用例2",function(){
        var result = main(3,5,12);
        var expect_string = '存在非个位数的特殊数';
        expect(expect_string).to.equal(result);
    });

    it("测试用例3",function(){
       var result = main(3,5,7,3);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });
    it("测试用例4",function(){
       var result = main(3,5,7,5);
       var expect_string = 'Buzz';
       expect(expect_string).to.equal(result);
    });
    it("测试用例5",function(){
       var result = main(3,5,7,7);
       var expect_string = 'Whizz';
       expect(expect_string).to.equal(result);
    });
    it("测试用例7",function(){
       var result = main(3,5,7,13);
       var expect_string = 'Fizz';
       expect(expect_string).to.equal(result);
    });
    it("测试用例8",function(){
       var result = main(3,5,7,15);
       var expect_string = 'FizzBuzz';
       expect(expect_string).to.equal(result);
    });

});
