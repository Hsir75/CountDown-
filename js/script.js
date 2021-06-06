function displayTime() {
var elt0 = document.getElementById("clock");
var elt1 = document.getElementById("todaydatetime");
if(leftTime < 0) 
{
elt.innerHTML = "Over";
}
 else 
{
//var endTime = new Date("2021/06/05 17:00:00");
//var endTime =new Date(new Date().toLocaleDateString()+" "+hourtime);
var now = new Date();

var nowYear=now.getFullYear();
var nowMonth=now.getMonth()+1;
var nowDay=now.getDate();
var endTime =new Date( nowYear + "/" + nowMonth + "/" + nowDay + " " + "17:30:00");

var leftTime = endTime.getTime() - now.getTime();
var ms = parseInt(leftTime % 1000).toString();
leftTime = parseInt(leftTime / 1000);
var o = Math.floor(leftTime / 3600 % 24);
var d = Math.floor(leftTime / 3600 / 24);
var m = Math.floor(leftTime / 60 % 60);
var s = leftTime % 60;

elt1.innerHTML = nowYear + " 年 " + nowMonth + " 月 " + nowDay + " 日 ";
elt0.innerHTML = d + "天" + o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
elt0.innerHTML =o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
setTimeout(displayTime, 100);
}
}
displayTime();
function displayTime1() {
	var elt = document.getElementById("clock1");
	if(leftTime < 0) 
	{
	elt.innerHTML = "Over";
	}
	 else 
	{
	var endTime = new Date("2021/06/11 17:00:00");
	//var endTime =new Date(new Date().toLocaleDateString()+" "+hourtime);
	var now = new Date();
	
	var nowYear=now.getFullYear();
	var nowMonth=now.getMonth()+1;
	var nowDay=now.getDate();
	
	var leftTime = endTime.getTime() - now.getTime();
	var ms = parseInt(leftTime % 1000).toString();
	leftTime = parseInt(leftTime / 1000);
	var o = Math.floor(leftTime / 3600 % 24);
	var d = Math.floor(leftTime / 3600 / 24);
	var m = Math.floor(leftTime / 60 % 60);
	var s = leftTime % 60;
	
	elt.innerHTML = d + "天" + o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
	//elt.innerHTML =o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
	setTimeout(displayTime1, 100);
	}
	}
	displayTime1();

	function displayTime2() {
	var elt = document.getElementById("clock2");
	if(leftTime < 0) 
	{
	elt.innerHTML = "Over";
	}
	 else 
	{
	var endTime = new Date("2021/09/18 17:00:00");
	//var endTime =new Date(new Date().toLocaleDateString()+" "+hourtime);
	var now = new Date();
	
	var nowYear=now.getFullYear();
	var nowMonth=now.getMonth()+1;
	var nowDay=now.getDate();
	
	var leftTime = endTime.getTime() - now.getTime();
	var ms = parseInt(leftTime % 1000).toString();
	leftTime = parseInt(leftTime / 1000);
	var o = Math.floor(leftTime / 3600 % 24);
	var d = Math.floor(leftTime / 3600 / 24);
	var m = Math.floor(leftTime / 60 % 60);
	var s = leftTime % 60;
	
	elt.innerHTML = d + "天" + o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
	//elt.innerHTML =o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
	setTimeout(displayTime2, 100);
	}
	}
	displayTime2();

	
	function displayTime3() {
	var elt = document.getElementById("clock3");
	if(leftTime < 0) 
	{
	elt.innerHTML = "Over";
	}
	 else 
	{
	var endTime = new Date("2021/09/30 17:00:00");
	//var endTime =new Date(new Date().toLocaleDateString()+" "+hourtime);
	var now = new Date();
	
	var nowYear=now.getFullYear();
	var nowMonth=now.getMonth()+1;
	var nowDay=now.getDate();
	
	var leftTime = endTime.getTime() - now.getTime();
	var ms = parseInt(leftTime % 1000).toString();
	leftTime = parseInt(leftTime / 1000);
	var o = Math.floor(leftTime / 3600 % 24);
	var d = Math.floor(leftTime / 3600 / 24);
	var m = Math.floor(leftTime / 60 % 60);
	var s = leftTime % 60;
	
	elt.innerHTML = d + "天" + o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
	//elt.innerHTML =o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
	setTimeout(displayTime3, 100);
	}
	}
	displayTime3();