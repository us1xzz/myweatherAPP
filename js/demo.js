var aa="123";
console.log(aa);

window.onload=function(){
	var button=document.getElementsByClassName("button");[0];
    console.log(button);
    button[0].onclick=function(){
	// alert("这是一个按钮");
	var city=document.getElementsByClassName("city");
	console.log(city);
	city[0].style.display="none";
    } 
    var pos=document.getElementsByClassName("pos")[0];
    pos.onclick=function(){
	   var city=document.getElementsByClassName("city");
	   console.log(city);
	   city[0].style.display="block";
    } 
}
//关于城市的数据
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	methond:"get",
	success:function(obj){
		var city=obj.data;
		console.log(city);
	}
})
// 关于天气的数据
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	methond:"get",
	success:function(obj){
		var tianqi=obj.data;
		console.log(tianqi)
		console.log(tianqi.weather.current_temperature);
		console.log(tianqi.weather.tomorrow_low_temperature);
		
		
	}
})
//js
//1.当整个页面加完成时，才可以对元素进行操作；
//2.获取元素：document.getElementsByTagName("")[0];
//3.添加事件函数
//4.进行样式操作

















//1.当整个页面加载完成时，才可以对元素进行操作:
//2.获取元素： document.getElementByClassName("")[0];
//3.添加事件函数
//4.进行样式操作




