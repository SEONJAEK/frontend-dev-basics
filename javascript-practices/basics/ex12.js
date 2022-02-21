/**
 * Array 확장(prototype 기반의 확장): List 메소드 추가
 * 
 */
/**정적 scope? 
 * 어휘상의 this
*/
Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        //for 문으로 index한칸 밀고 
        // for(var i =0; i<value.length; i++){
        //     this.splice(index++, 0, value[i]);
        // }

        //console.log(this);// 여기서의 this는 value가 아나라 insert를 호출하는 a 이다.
        //var _this = this;

        //this //a

        //오류
        //콜백 안의 this는 예측 못한다.(어휘상의 this와 일치하지 않는다.) 
        // value.forEach(function(e){   //전역범위에서 호출되는거, value는 forEach만을 호출
        //     this.splice(index++, 0, e);
        // });

        //해결 방법 1:
        //var _this = this;
        // value.forEach(function(e){
        //     //_this.splice(index++, 0, e);
        // });


        //해결 방법 2: 함수의 바인드로 함수 실행 때의 this를 세팅해 줄 수 있다. 
        var f = function(e){
            this.splice(index++, 0, e);
        }.bind(this);// 이 this는 a를 뜻함/= 어휘상의 this
        
    }else{
        this.splice(index, 0, value);
    }
    
}
Array.prototype.remove = function(index){
    this.splice(index, 1);
}

// List로 사용하기
var a = [1,2,4];

console.log(a);

a.insert(2,3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a','b','c']); 
console.log(a);//기대[1,2,'a','b','c',3] 그러나 [ 1, 2, [ 'a', 'b', 'c' ], 3 ] 이렇게 나옴
//[1,2,'a','b','c'] 이렇게 나오게 하려면?

