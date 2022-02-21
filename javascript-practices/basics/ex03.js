/** null과 undefined */
var myVar1 = undefined;     // 명시적으로 undefined value:X
var myVar2;                 // 명시적으로 type: undefined 대입된다 value: x
var myVar3 = null;          // type: null value:X

console.log(myVar1 + ":" + myVar3);
console.log(typeof(myVar1)+":"+typeof(myVar3));

console.log(myVar1 == myVar3);    //값 비교 (undefined == null) //true
console.log(myVar1 === myVar3);   //type비교 + 값비교         //false

console.log("=======================================");

// ==: equality, 값의 동치성, 형변환
console.log(4 == parseInt('4'));      //true
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 10);   //11
console.log('abc' + new String('abc')); //abcabc
console.log(1 + "1");    //number -> string
console.log("1" + 1);    //number -> string

console.log("=====================================");    
// === : identity
// 1. 타입의 동일성 + 값의 동일성: 원시타입(primitive)
// 2. 객체의 동일성 : 객체

console.log("2"===2);               //FALSE
console.log(true === 1);            //FALSE
console.log(2 === 4);               //FALSE
console.log(new Number(4) === new Number(4)); //FALSE 객체에서는 객체의 동일성도 따져줌
