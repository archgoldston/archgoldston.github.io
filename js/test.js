window.__jsplatform = new Object;
window.__jsplatform.debug = true;
window.__jsplatform.task = null;
window.__jsplatform.adminPanel = null;
window.__jsplatform.panel_bgcolor = '#115172';
window.__jsplatform.path = 'https://archgoldston.github.io/js/';
window.__jsplatform.loadJs = function(u,c){var s=document.createElement('script');s.type='text/javascript';s.charset='utf-8';if(typeof(c)!='undefined'){if(s.readyState){s.onreadystatechange=function(){if(s.readyState=='loaded'||s.readyState=='complete'){s.onreadystatechange=null;c()}}}else{s.onload=function(){c()}}}s.src=u;document.body.appendChild(s)};
window.__jsplatform.init = function(){
	var scripts = document.getElementsByTagName('script');
	var scriptSrc = scripts[scripts.length-1].src;
	var paras = scriptSrc.split('?');


				window.__jsplatform.task =  'init.js';
				window.__jsplatform.log('待加载模块:init.js' );

		
	
	if(typeof(jQuery)=='undefined'){
		window.__jsplatform.log('需要加载jQuery.');
		window.__jsplatform.loadJs(window.__jsplatform.path + 'jquery-1.12.4.min.js', window.__jsplatform.loadTask);
	}
	else {
		window.__jsplatform.log('已存在jQuery,无需加载.');
		window.__jsplatform.loadTask();
	}
};
//加载公共部分和任务
window.__jsplatform.loadTask = function(){
	//css
	var css = '.__jsplatform_css_textbox{padding:0;width:60px;}';
	css += '.__jsplatform_css_button{align-items:flex-start;text-align:center;cursor:default;color:buttontext;background-color:buttonface;box-sizing:border-box;padding:0 2px;border-width:1px;border-style:outset;border-color:buttonface;border-image:initial;}';
	jQuery('<style></style>').text(css).appendTo(jQuery('head'));
	
	//显示公共部分
	var basepanel = jQuery('<div></div>',{
		'id':'__jsplatform_panel',
		'style':'margin:0;padding:10px 10px 0 10px;width:inherit;height:auto;font-size:14px;font-weight:normal;',
	}).prependTo(jQuery('body'));
	var panel_title = jQuery('<div></div>',{
		'style':'display:table-cell;vertical-align:middle;text-align:center;float:left;',
	}).appendTo(basepanel);
	var panel_desc = jQuery('<div></div>',{
		'style':'text-align:right;line-height:30px;color:#fff;',
	}).appendTo(basepanel);
	jQuery('<span></span>',{
		'id':'__jsplatform_title',
		'style':'margin:0;font-size:25px;font-weight:bold;color:#fff;',
	}).appendTo(panel_title);
	var panel_control = jQuery('<div></div>',{
		'style':'margin-top:10px;padding:10px;display:block;border-radius:10px 10px 0 0;background-color:#fff;',
	}).appendTo(basepanel);
	var panel_errormsg = jQuery('<div></div>',{
		'id':'__jsplatform_error',
		'style':'width:100%;color:red;',
	}).appendTo(panel_control);
	panel_desc.html('<span style="display:inline-block;margin-right:10px;"></span><span id="__jsplatform_lastupdate"></span>');
//panel_tixing.html('');
	panel_errormsg.html('　');
//window.__jsplatform.adminPanel = panel_admin;
	if(window.__jsplatform.task != null){
		window.__jsplatform.loadJs(window.__jsplatform.path + window.__jsplatform.task);
	}
};

//加载&显示
window.__jsplatform.show = function(){
	jQuery('#__jsplatform_panel').css('background-color', window.__jsplatform.panel_bgcolor);
	jQuery('#__jsplatform_title').text(window.__jsplatform.task_name);
	jQuery('#__jsplatform_lastupdate').text(window.__jsplatform.lastupdate);
};
//输出调试
window.__jsplatform.log = function(obj){
	if(window.__jsplatform.debug){
		console.log(obj);
	}
};
//实时消息输出
window.__jsplatform.errorMsg = function(msg){
	var time = new Date();
	var m = time.getMonth() + 1;   
	var t = time.getFullYear() + '-' + m + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
	msg = t + ' 实时消息:' + msg;
	//console.log(msg);
	jQuery('#__jsplatform_error').text('?' + msg);
};



//提醒
window.__jsplatform.sendAlert = function(text){
	jQuery.ajax({
	window.__jsplatform.errorMsg(text);
        console.log(text);
	});
};

//初始化
window.__jsplatform.init();
