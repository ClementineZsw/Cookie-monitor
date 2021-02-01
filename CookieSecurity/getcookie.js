 var strCookies =document.cookie;
 // 解析出所有名/值对
 var arrayCookies = strCookies.split("; ");
 var strAllCookies;     
 for(var i = 0; i < arrayCookies.length; i++)
  {
    // 解析出名和值
    var cookie = arrayCookies[i].split("="); 
    var cookie_key=cookie[0]; 
    var cookie_value=cookie[1]; 
    strAllCookies+=cookie_key+"="+cookie_value+"\n";
 };
 document.write(strAllCookies);
//window.alert(strAllCookies);
//var x=document.getElementById("test");
//x.innerHTML=strAllCookies;