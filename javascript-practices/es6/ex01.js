/**
 * let : Block Scope의 변수
 */

try{
    if(true){
        var i = 10; //함수스코프 전역
        let j = 20; //block  scope
    }
    console.log(i,j);
}catch(e){
    console.log('[error]:'+ e);
}

//cf. var의 함수 범위
try{
    let f = function(){
        //var m = 20;
        let m = 20;
    }
    f();
    console.log(m);
}catch(e){
    console.error('[error]'+e);
}





