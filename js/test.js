window.__jsplatform = new Object;
window.__jsplatform.debug = true;

window.__jsplatform.path = 'https://archgoldston.github.io/js/';
window.__jsplatform.loadJs = function(u,c){var s=document.createElement('script');s.type='text/javascript';s.charset='utf-8';if(typeof(c)!='undefined'){if(s.readyState){s.onreadystatechange=function(){if(s.readyState=='loaded'||s.readyState=='complete'){s.onreadystatechange=null;c()}}}else{s.onload=function(){c()}}}s.src=u;document.body.appendChild(s)};
window.__jsplatform.init = function(){



				

window.__jsplatform.loadJs(window.__jsplatform.path + 'init.js');
window.__jsplatform.log('加载模块:init.js成功！' );
	
	if(typeof(jQuery)=='undefined'){
window.__jsplatform.loadJs(window.__jsplatform.path + 'jquery-1.12.4.min.js');
window.__jsplatform.log('加载模块:jquery-1.12.4.min.js成功！' );
	}
	else {
		window.__jsplatform.log('已存在jQuery,无需加载！');
	}
};


//输出调试
window.__jsplatform.log = function(obj){
	if(window.__jsplatform.debug){
		console.log(obj);
	}
};


//提醒
window.__jsplatform.sendAlert = function(text){
		    window.__jsplatform.log(text);
};

//初始化
window.__jsplatform.init();
