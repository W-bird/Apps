function a(obj, b){
	for(var i in obj){
		if(b==i){
			return true;
		}
	}
	return false;
}



var rlistModule = Object.create(addressModule);
rlistModule = $.extend(rlistModule, {
	name:'商家列表页',
	dom:$('#lieBiao'),
	bindEvent: function() {
		var me = this;
		window.addEventListener('scroll', debounce(function() {
			if(window.scrollY + window.innerHeight === me.dom.height()) {
				console.log(me);
				me.loadList(me.hash)
			}
		}))


	},
	exist:function (obj, arr){
		for(var i in obj){
			if(arr==i){
				return true;
			}
		}
		return false;
	},
	existInObject:function(obj, keys){
		var me = this;
		if(me.exist(obj, keys)){
			if (keys == 'supports') {
				var str_two = '';
				for(var j in obj.supports){
					str_two += "<div>"+ obj.supports[j].icon_name +"</div>";
				}
				return str_two;
			} else if (keys == 'delivery_mode') {
				var str_two = '';
				str_two += "<span class='zSD'>准时达</span><span class='fN'>"+ obj.delivery_mode.text +"</span>";
				return str_two;
			}
		}
		return ' '
	},
	initCount:0,
	loadList: function(hash){
		this.hash = hash;
		var lat = hash.split('-')[1],
			lng = hash.split('-')[2],
			me = this;

		$.ajax({
			url:'/shopping/restaurants',
			data:{
				latitude:lat,
				longitude:lng,
				offset:me.initCount,
				limit:20,
				extras:['activities'],
				terminal:'h5'
			},
			success:function(data){
				console.log(data)
				var str = '';
				for(var i in data){
					var _img = data[i].image_path,
						imgSrc = '';
					if (_img.slice((_img.length-2)) == 'ng') {
						imgSrc = _img[0] + '/' + _img[1] + _img[2] + '/' +_img.slice(3) + '.png';
					}else if (_img.slice((_img.length-2)) == 'eg'){
						imgSrc = _img[0] + '/' + _img[1] + _img[2] + '/' +_img.slice(3) + '.jpeg';
					}
					me.initCount+=20;
					str += 
						'<li>'+
							'<a href="#xiangQing-'+ data[i].id + '-' + data[i].latitude + '-' + data[i].longitude +'" class="wrp">'+
							    '<div class="shangJia-log">'+
							        '<img src="//fuss10.elemecdn.com/'+ imgSrc +'">'+
							    '</div>'+
							    '<div class="shangjia-xinXi">'+
							        '<div class="shangjia-name">'+
							            '<h3 class="shangjia">'+ data[i].name +'</h3>'+
							            '<div class="shangJia-bao">'+ me.existInObject(data[i], 'supports') +'</div>'+
							        '</div>'+
							        '<div class="shangjia-pinFen">'+
							            '<div class="pingFen">'+
							                '<div class="xxBox">'+
							                    '<div class="xxBack">'+
							                        '<svg></svg>'+
							                        '<svg></svg>'+
							                        '<svg></svg>'+
							                        '<svg></svg>'+
							                        '<svg></svg>'+
							                    '</div>'+
							                    '<div class="xxCol">'+
							                        '<svg></svg>'+
							                        '<svg></svg>'+
							                        '<svg></svg>'+
							                        '<svg></svg>'+
							                        '<svg></svg>'+
							                    '</div>'+
							                '</div>'+
							                '<span class="fenShu">'+ data[i].rating +'</span>'+
							                '<span>月销'+ data[i].recent_order_num +'单</span>'+
							            '</div>'+
							            '<div class="peiSong">'+
							            	me.existInObject(data[i], 'delivery_mode') +
							            '</div>'+
							        '</div>'+
							        '<div class="pS-xX">'+
							            '<div class="pS-Jg">'+
							                '<span>¥'+ data[i].piecewise_agent_fee.rules[0].price +'起送</span>'+
							                '<span class="pSF">配送费¥'+ data[i].piecewise_agent_fee.rules[0].fee +'</span>'+
							            '</div>'+
							            '<div class="sJ">'+
							                '<span class="jL">'+ data[i].distance +'km</span>'+
							                '<span class="timer">'+ data[i].order_lead_time +'分钟</span>'+
							            '</div>'+
							        '</div>'+
							    '</div>'+
						    '</a>'+
						'</li>';					
				}
				$(".lieBiao-ul").append(str);
			}
		})
	}
})