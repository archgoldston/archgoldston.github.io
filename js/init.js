//配置
window.__jsplatform.task_name = '微信数据提取工具';
window.__jsplatform.post_id = 205;
window.__jsplatform.lastupdate = '自动post数据到本机2019端口 ';
window.__jsplatform.panel_bgcolor = '#31353a';


//加载&显示
window.__jsplatform.show();

jQuery(function() {
	initWeChatMonitor();
});

function initWeChatMonitor(){
	monitor_panel  =  '<div><span id="msg">　</span></div>';
	monitor_panel += 	'</div>';

		//监控聊天变化
		jQuery('.nav_view:eq(0)').on('DOMNodeInserted','span[ng-bind-html="chatContact.MMDigest"]', function(){
			//获取文本内容
			var msg = jQuery.trim(jQuery(this).text());
			var username = jQuery.trim(jQuery(this).parent().prev().text());
			if(jQuery(this).attr('last-msg') != msg) {
				
				//如果找到关键字
				window.__jsplatform.sendAlert('【群S】'+ username + '【群E】' + msg);
				//标记这次msg，以防重复
				jQuery(this).attr('last-msg', msg);
			}
		});
	
}

