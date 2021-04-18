import './css/index.css'
import $ from 'jquery'
// import './css/main.scss'

let a = "hello world";
function foo(){
    let a = 20;
    console.log(a);
}
foo()
console.log(a);

// var oDiv1 = document.getElementsByClassName("div1")[0];
// oDiv1.innerHTML = "<h1>爱扣钉</h1>"
$(".div1").text("爱扣钉vip3")