// 封装ajax get请求
function ajaxGet(url,fun){
     // 第一步创建xmlhttprequest对象
     var xmlhttp;
     if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp = new XMLHttpRequest();
     }
     else {// code for IE6, IE5
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
     }
     // 第二步发送请求
     // xmlhttp.open("GET", "http://47.92.82.13:4000/showMessage", true);
     xmlhttp.open("GET", url , true);
     xmlhttp.send();
     // 第三回调处理
     xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
             fun(JSON.parse(xmlhttp.responseText))
         }
     }
}