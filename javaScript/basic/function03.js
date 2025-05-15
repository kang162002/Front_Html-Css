//콜백 함수
// callback 함수란 나중에 실행될 함수
//js 한수를 변수에 저장
//js 함수를 매개변수, return 활용


function func01(a){
    console.log(a);
}
func01('매개변수');

function func02(f){
    console.log("func02");
    f();
}

const temp = ()=>{
    console.log ("temp 함수 호출");
}

func02(temp);
//    매개변수
// callback 함수란 나중에 실행될(호출) 함수
function reserv (name, callback){
    console.log('어서오세요')
    console.log('등록 도와드림');
    //
    //
    //
    //
    console.log(name + "님 예약 저장 완료 ")

    callback();

}

function msg(){
    console.log('문자로 안내하기');
}

reserv('나예약', msg);

reserv('나다음',function(){
    console.log ('전화로 안내하기');
})

reserv ('김아픔',()=>{
    console.log('카톡 안내');
})

console.log("--------------------------------------------");



function arrForEach(){
    let arr = [10,20,30,40]; // 배열

    for(let i in arr ){
           console.log(i + " : " + arr[i] ); 
    }

}

arrForEach();

function arrForEach2(arr){
 
    for(let i in arr ){
        console.log(i + " : " + arr[i] ); 
    }

}

arrForEach2([9,8,7,6]);     //내부에서 반복



function arrForEach3( func ){
    let arr = [110,120,130,140]; // 배열

    for(let i in arr){
    //    index
        func (i, arr[i]);
    }    

}

const prinFunc = (a, b)=> {
    console.log(a+ " : " + b);
}

arrForEach3 (prinFunc);

arrForEach3((a,b)=>{
    console.log(a +  " ========" + b);
});



// setTimeout (함수, 시간) - > "시간"이 지난후에 함수를 실행
setTimeout(()=>{
    console.log("setTimout에 전달한 함수!");
}   , 2000); // 1000 => 1초 

const cb= ()=>{
    console.log('cb 함수');
}

const outCb = (cb) => {
    console.log("outCb 실행하기");
    cb();
}

setTimeout(() => {
    console.log("setTimeout에 넘긴 콜백 함수");
    outCb(cb);
}, 3000);       //  3초


