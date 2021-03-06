/**
 * Array 메소드(Array.prototype)
 */
 var colors = ['black', 'white', 'skyblue'];
 var fruits = ['pineapple', 'mango', 'apple'];

//concat
var a1 = fruits.concat(colors);
console.log(a1);

//pop, push: stack 지원
var color = colors.pop();
console.log(color, colors);

colors.push('red');
console.log(colors);

//join
var str = fruits.join(":");
console.log(str);

//reverse
console.log(fruits);//자기꺼를 변화시킴
fruits.reverse();
console.log(fruits);

//shift //1000 [ 3000, 2000, 5000, 4000, 8000 ]
var numbers =[1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers.shift();
console.log(number, numbers);

//sort
numbers.sort();
console.log(numbers);

//slice **중요
var numbers = numbers.slice(1, 3);
console.log(numbers);

//splice **중요
//index부터 count개를 삭제한 후, 삭제된 요소를 반환
console.log(fruits);
var fruits2 = fruits.splice(0/*index*/, 2/*count*/);
console.log(fruits2, fruits);

//index부터 count개를 삭제한 후, replace로 대체, 삭제된 요소를 반환
var a1 = [0,1,2,3,4];
a1.splice(1/*index*/,3/*count*/,10/*replace*/); 
console.log(a1);

//a1.removeAt(1)
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,1);
console.log(a2,a1);

//a1.removeAt(1,10) //10을 넣기
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,0,10);
console.log(a2,a1);

