var hourtime=prompt("输入下班时间，如下： ","17:00:00");
function displayTime() {
var elt0 = document.getElementById("clock");
var elt1 = document.getElementById("todaydatetime");

var now = new Date();
var nowYear=now.getFullYear();
var nowMonth=now.getMonth()+1;
var nowDay=now.getDate();
var endTime =new Date( nowYear + "/" + nowMonth + "/" + nowDay + " " + hourtime);
//var endTime =new Date( nowYear + "/" + nowMonth + "/" + nowDay + " " + "17:00:00");
var leftTime = endTime.getTime() - now.getTime();
elt1.innerHTML = nowYear + " 年 " + nowMonth + " 月 " + nowDay + " 日 ";

if(leftTime < 0) 
{
elt0.innerHTML = "下班了，赶紧回家";
}
 else 
{

var ms = parseInt(leftTime % 1000).toString();
leftTime = parseInt(leftTime / 1000);
var o = Math.floor(leftTime / 3600 % 24);
var d = Math.floor(leftTime / 3600 / 24);
var m = Math.floor(leftTime / 60 % 60);
var s = leftTime % 60;

elt0.innerHTML =o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
setTimeout(displayTime, 100);
}
}
displayTime();

function displayTime1() {
	var elt = document.getElementById("clock1");
	var now = new Date();
	var nowYear=now.getFullYear();
	var nowMonth=now.getMonth()+1;
	var nowDay=now.getDate();
	var endTime = new Date("2021/06/11" + " " + hourtime);
	var leftTime = endTime.getTime() - now.getTime();

	if(leftTime < 0) 
	{
	elt.innerHTML = "端午假期已经过去了，期待中秋假期吧";
	}
	 else 
	{
	var ms = parseInt(leftTime % 1000).toString();
	leftTime = parseInt(leftTime / 1000);
	var o = Math.floor(leftTime / 3600 % 24);
	var d = Math.floor(leftTime / 3600 / 24);
	var m = Math.floor(leftTime / 60 % 60);
	var s = leftTime % 60;
	
	elt.innerHTML = d + "天" + o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
	setTimeout(displayTime1, 100);
	}
	}
	displayTime1();

	function displayTime2() {
	var elt = document.getElementById("clock2");

	var endTime = new Date("2021/09/18" + " " + hourtime);
	var now = new Date();
	var nowYear=now.getFullYear();
	var nowMonth=now.getMonth()+1;
	var nowDay=now.getDate();
	var leftTime = endTime.getTime() - now.getTime();

	if(leftTime < 0) 
	{
	elt.innerHTML = "中秋假期已经过去了，期待国庆假期吧";
	}
	 else 
	{
	
	var ms = parseInt(leftTime % 1000).toString();
	leftTime = parseInt(leftTime / 1000);
	var o = Math.floor(leftTime / 3600 % 24);
	var d = Math.floor(leftTime / 3600 / 24);
	var m = Math.floor(leftTime / 60 % 60);
	var s = leftTime % 60;
	
	elt.innerHTML = d + "天" + o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
	setTimeout(displayTime2, 100);
	}
	}
	displayTime2();

	function displayTime3() {
	var elt = document.getElementById("clock3");

	var endTime = new Date("2021/09/30" + " " + hourtime);
	var now = new Date();
	var nowYear=now.getFullYear();
	var nowMonth=now.getMonth()+1;
	var nowDay=now.getDate();
	
	var leftTime = endTime.getTime() - now.getTime();

	if(leftTime < 0) 
	{
	elt.innerHTML = "国庆假期已经过去了，期待元旦假期吧";
	}
	 else 
	{
	
	var ms = parseInt(leftTime % 1000).toString();
	leftTime = parseInt(leftTime / 1000);
	var o = Math.floor(leftTime / 3600 % 24);
	var d = Math.floor(leftTime / 3600 / 24);
	var m = Math.floor(leftTime / 60 % 60);
	var s = leftTime % 60;
	
	elt.innerHTML = d + "天" + o + "小时:" + m + "分:" + s + "秒:" + ms.charAt(0);
	setTimeout(displayTime3, 100);
	}
	}
	displayTime3();
