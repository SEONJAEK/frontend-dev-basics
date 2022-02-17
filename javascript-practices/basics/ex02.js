/*
변수와 데이터 타입


[기본타입(primitive, 원시)]
- undefined
- number
- string
- boolean
[객체] 
- object type
    1. new 생성자 함수() 사용해서 생성
    2.
    3.
    4.
- function type

*/

console.log("===========기본타입(primitive, 원시)===========");
var u = undefined;  //var u; 동일, 선언과 정의의 구분이 없다.
var i = 10;
var s = "Hello World";
var b = true;

console.log("u:" + typeof(u));
console.log("i:" + typeof(i));
console.log("s:" + typeof(s));
console.log("b:" + typeof(b));

console.log("===========객체1: object type ===========");
var i2 = new Number(1);
var s2 = new String("Hello World");
var b2 = new Boolean(false);  //여기서 Boolean은 클래스가 아니라 함수이다.//자바스크립트는 클래스라는 개념이 없다.//생성자 함수는 일반함수와 다르게 대문자로 씀.
//함수에다가 new 붙이면 객체가 튀어나온다고 생각해 //Number, String, Boolean:내장객체 =  내장되어있는 생성자 함수
var o = new Object(); //깡통, object타입의 객체
var a = new Array(); //array타입이 없어. array도 객체야. //배열도 객체다.


console.log("i2:" + typeof(i2));
console.log("s2:" + typeof(s2));
console.log("b2:" + typeof(b2));
console.log("o:" + typeof(o));
console.log("a:" + typeof(a));



function f(){
    console.log("!!!");
}

f();

var o = new f();

console.log("===========객체2: function type ===========");

