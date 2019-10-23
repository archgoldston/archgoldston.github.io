

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

