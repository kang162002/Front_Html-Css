

    // 내장객체

 let str = "hellohi@gmail.com";

 console.log(str.length);   // 문자의 길이

 console.log(str.includes("g")); //해당 문자가 포함인가?

 console.log(str.indexOf("@"));  //해당 문자의 인덱스 찾기
 console.log(str.indexOf("!")); // 문자가 없으면 -1 return


 //if (str.indexOf("!") == -1 )

 console.log(str.substring(0, 4)); //문자 잘라내기
                // 0<= <4
console.log(str.substring(5,11));

// 처음 ~ @ : 아이디
//@ 다음 ~ 끝 : 도메인

console.log(str.indexOf("@"));
let id = str.substring(0, str.indexOf("@"));
console.log(id);
let domain = str.substring(str.indexOf("@")+1, str.length); 
//let domain = str.substring(str.indexOf("@")+1);     //  +1추가 다음부터
console.log(domain);


// "abc " " abc "
// "abc"    

//앞뒤 공백 제거하는 함수 trim
let test = " abc ";
console.log(test);
console.log(test.trim())    // 공백 제거
test =test.trim(); // ------ 뛰어쓰기 삭제한걸 저장하겠다 (덮어쓰기)
console.log(test);

//문자 분리 split 
// study.java.pratics.main
let number = "010-123-5678";

let s = number.split("-");
console.log(s);
console.log(s[2]);  // 
console.log(s[0]);

// 
console.log(`-------------------------------------------`)
//            Date 내부객체
let today = new Date();

console.log(today);
console.log(today.getFullYear());   //  년
console.log(today.getMonth());      //  월 :0 ~ 11  +1  (1월~12월)
console.log(today.getDate());       //  일 :
console.log(today.getDay());        //  요일 : 0 ~ 6 (일 ~ 토)
console.log(today.getHours());
console.log(today.getUTCMinutes());
console.log(today.getSeconds());

console.log(Math.abs(-10));         //    절대값
console.log(Math.round(-10));       //    반올림