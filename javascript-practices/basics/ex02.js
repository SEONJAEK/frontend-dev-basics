/*
변수와 데이터 타입(data type): 6가지의 타입이 있다.

[기본타입(primitive, 원시)]
- undefined
- number
- string
- boolean
[객체] 
- object type
    1. new 생성자함수() 사용해서 생성
            Number() => object type
            String() => object type
            Boolean() => object type
            Object() => object type
            Array() => object type
    2. {}   객체 리터럴, JSON(Java Script Object Notation):자바스크립트 객체를 표기하는 방법
    3. []   배열 리터럴
    4. var n = null; //널객체를 대입
- function type
    1. function f() {...} 생성
    2. var f = function() {...}
    3. var f = new Function(...);

*/

/*
    자바스크립트 객체를 구분하는 또 다른 방법

    1.  내장(Built-in, Native, Engine) 객체
        자바스크립트 엔진 안에 미리 내장되어 있는 객체
        Number, Boolean, Date, RegExpression, ...   : 생성자 함수
        setTimeout, parseInt, ...                   : 일반 함수
    2. 호스트 객체
        자바스크립트 엔진이 임베드된 환경(호스트)의 객체
        - 호스트 환경이 브라우저라면: document, location, XmlHttpRequest, window, ...
        - 호스트 환경이 노드라면(Node.js): os, http, fs, path, ... 
    3. 사용자 객체
        자바스크립트 엔진이 실행되면서 생성되는 객체들..
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
var i2 = new Number(1);//생성자 함수
var s2 = new String("Hello World");
var b2 = new Boolean(false);  //여기서 Boolean은 클래스가 아니라 함수이다.//자바스크립트는 클래스라는 개념이 없다.//생성자 함수는 일반함수와 다르게 대문자로 씀.
//함수에다가 new 붙이면 객체가 튀어나온다고 생각해 //Number, String, Boolean:내장객체 =  내장되어있는 생성자 함수
var o = new Object(); //빈 깡통, object타입의 객체
var a = new Array(); //array타입이 없어. array도 객체야. //배열도 객체다.

var o2 = {};
var a2 = [];

console.log("i2:" + typeof(i2));
console.log("s2:" + typeof(s2));
console.log("b2:" + typeof(b2));
console.log("o:" + typeof(o));
console.log("a:" + typeof(a));
console.log("o2:" + typeof(o2));
console.log("a2:" + typeof(a2));
console.log("n:" + typeof(null));
console.log("n:" + typeof(null));


console.log("===========객체2: function type ===========");
function f1(a, b){
    return a + b;
}

var f2 = function(a,b){
    return a+b;
}

var f3 = new Function("a", "b", "return a + b"); //function이라는 함수 쓰면 function 객체
console.log("f1:"+ typeof(f1));
console.log("f2:"+ typeof(f2));
console.log("f3:"+ typeof(f3));


console.log("===========원시타입과 원시타입의 Wrapper 객체는 구분없이 사용할 수 있다. ===========");
console.log(i + i2);
console.log(s + s2);


console.log("===========원시타입도 메소드 호출이 가능하다. ===========");

//원시 타입에서 메서드가 호출될 때, 
//임시 Wrapper 객체가 만들어져 메소드 호출이 일어난 뒤 사라진다.(유사객체!!!)
console.log(b.valueOf()); // JS Engine안에서 new Boolean(b).valueOf(); 유사객체
console.log(b);
console.log(b2.valueOf());
console.log(b2);
