function IndexHandler() {
	/**
	 * 查看初始化
	 */
	IndexHandler.prototype.initLogin = function() {
		var self = this;
		$('#login_submit').click(function(){
			
			self.loginSubmit();
		});
//		$('.login-captcha-img').die().live('click',function(){
//			$(this).attr('src','http://'+$(this).attr('http_header')+'/default/account/getRefreshImg?date='+(new Date()).valueOf());
//		});
//		$("body").keydown(function(event) {
//	        if (event.keyCode == 13) {//keyCode=13是回车键
//	            self.loginSubmit();
//	        }
//	    });	
	};
	/**
	 * 列表页
	 */
	IndexHandler.prototype.loginSubmit = function() {
		
		
		alert("sss");
		/*
		var self = this;
	    var valid = $.scojs_valid('#form',{
	   	       	 rules: {
	   	        	 email: ['not_empty', 'email'], 
	   	        	 passwd: ['not_empty', {'min_length': 6}], 
	   	    	 }
	       	 }
		);
		var user = $('#email').val();
		var passwd = $('#passwd').val();
		var checkcode = $('#checkcode').val();
		var params = {user:user,passwd:passwd,checkcode:checkcode};
		SsAjax.post(
			params,
			'/default/account/loginsubmit',
			function(data) {
				if (!data.status) {
					//成功的处理
					window.location.href = '/projectmanage/project/getprojectindex';
				} else {
					//失败的处理
					$('.form-warnning').html(data.statusinfo);
					if(data.statusinfo=='验证码错误'||data.statusinfo=='密码错误'){
						$('.login-captcha-img').attr('src','http://'+$('.login-captcha-img').attr('http_header')+'/default/account/getRefreshImg?date='+(new Date()).valueOf());
					}
				}
			}
		);
	};	
	*/
};

}
function open_modal_login(){
	  
    $('#myModal_login').modal({
	      keyboard: false,
		  backdrop: 'static'
			  
	});
}


function open_modal_register(){

	$('#myModal_login').modal('hide');
    $('#myModal_register').modal({
       keyboard: false,
	   backdrop: 'static'
 });
    
}
	


