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



});
