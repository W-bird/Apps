//防抖动
function debounce(fun, wait) {
	var timerId = null;

	return function() {
		var arg = arguments;

		var later = function() {
			fun.apply(null, arg);
		}

		clearTimeout(timerId);
		timerId = setTimeout(function() {
			later();
		}, wait || 500);
	}
}


var addressModule = {
	name:'地址搜索页',
	dom:$('#diZhi'),
	enter:function() {
		this.dom.show();
	},
	leave:function() {
		this.dom.hide();
	},
	init:function() {

	},
loadList:function(event){
		$.ajax({
			url: "/bgs/poi/search_poi_nearby",
			type:"get",
			data:{
				keyword:$(".ipt").val(),
				offset:0,
				limit:20
			},
			success:function(data){
				console.log(data);
				var str = "";
				for(var i in data){
					str += '<li><a href="#lieBiao-'+ data[i].latitude + '-' + data[i].longitude +'"><h2>'+ data[i].name +'</h2><p>'+ data[i].address +'</p></a></li>';
				}
				$("#adds").html(str);
			}
		})
	},
	bindEvent: function(){
		//事件绑定
		var me = this;
		$(".form").on("input",debounce(function(event){
			me.loadList(event);
		}))
		$(".elm").click(function() {
			me.loadList(event);
		})

		//点击百度搜所
		$(".baiDu").click(function(){
			var val = $(".ipt").val();
			$.ajax({
				url:"/waimai?qt=poisug",
				data:{
					wd:$(".ipt").val(),
					cb:'suggestion_1491961133008',
					cid:75,
					type:0,
					newmap:1,
					ie:'utf-8'
				},
				type:"get",
				dataType:"json",
				success:function(data) {
					
					var str = "";
					// for(var i=0, i<data.length; i++) {
					// 	str += "<li>"+ data[i].name +"</li>";
					// }
					for(var i in data){
						console.log(data.s[0]);
						str += "<li>"+ data.s[i] +"</li>";
					}
					$("#adds").html(str);
				}
			})
		})
	}
}