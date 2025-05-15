//funchtion 함수

function func01 () {      // 함수
    console.log('func01 호출');

}

func01(); // 선언된 함수를 부르는 역활

const func02 = function() { //  함수 
    console.log('func02 호출');
}

func02();

const func03 = function fun303() {  
    console.log('func03 호출');
}
    

func03 ();
// func303(); // 찾지못한다 함수X


const func04 = ()=> { // 함수
    console.log(`func04 호출`)   
}

func04();
//함수 + 매개변수
function func05 (a, b ){
    console.log(a + " " + b);
}

func05(10,20);
func05("A","B");


const func06 = function (a, b) {
    console.log(a + " " + b);
}

func06 (20, 30);

const func07 = function (a, b) {
    console.log(a + " " + b);
}

func07 (50, 60);

const func08 = (x, y) =>{
    console.log(x + " " + y);
}

func08(90, 100);


//함루 리턴

function sum1(){
    return 100;
}