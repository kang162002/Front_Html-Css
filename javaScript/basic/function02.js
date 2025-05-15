
//함루 리턴

function sum1(){
    return 100;
}

sum1();
console.log(sum1());
let n = 20 + sum1;
console.log(n);


const sum2 = function(a,b){
    return a+b;

}
console.log(sum2(10,20));
const sum3 = function sum333(a,b){
    return a+b;
}
console.log(sum3(90,202));

const sum4 = (a,b)=> {
    return a+b;
}

console.log(sum4(102,202));

const sum5 = (a,b) => a+b;      //  화살표 뒤 코드를 바로 return 으로 인식
console.log(sum5(15,25));


const sum6 = () => 1+2+3+4+5;

//const num6= ()=>{
  //  return 1+2+3+4+5+;
//
console.log (sum6());

function func (){
    let x = 10;
    console.log(x);
}
//console.log(x);
if(true){
    let x = 20;
}
{
    let x =30; //지역안 변수
}
//console.log(x);


/*let q =30;
console.log(q);*/

console.log(w);
var w = 30;     // 함수를 위로 옴겨준다?

r = 3000;
var r;      
console.log(r);

function check(){
    console.log('check');    
}

//let name  = "이름";
//let name = "내이름";

var r =5000;        //  이미 선언한 변수명인데, 다시 선언하면 기존값 덮어쓰기
console.log(r);


function welcome(){
    console.log("환영합니다")

}

(function(){    // 즉시실행함수
    console.log('이것은 일회용 함수');
})();