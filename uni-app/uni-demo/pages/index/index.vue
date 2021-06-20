<template>
	<view class="content">
		<button @tap="playVoice">播放录音</button>  
		<view class="top-nav">
			<view class="location">
				<image src="../../static/img/location.svg" mode=""></image>
				<text>郑州市二七区郑州科技学院</text>
			</view>
			<input type="text" value="搜索饿了么商家、商品名称" />
		</view>
		<button type="default" @click="change">修改数据</button>
		<button type="default" @click="del">删除数据</button>
		<button type="default" @click="create">创建集合</button>
		<button type="default" @click="upload">上传文件</button>
		<view class="images" v-for="(item, index) in images" :key="index">
			{{item.url}}
			<image :src="item.url" mode="widthFix" style="width: 80rpx"></image>
			<text>{{item.name}}</text>
			<button type="default" @click="download(item.url)">下载文件</button>
		</view>
		
		<view class="menu">
			<view class="menu-items" v-for="(item, index) in 8" :key="index">
				<image src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" mode="widthFix"></image>
				<text>美食</text>
			</view>
		</view>
		<view class="main">
			<view class="banner">
				<view class="banner_text">
					<text>品质套餐</text>
					<text>搭配齐全吃得好</text>
					<text>立即抢购></text>
				</view>
				<image src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed" mode="widthFix"></image>
			</view>
			<view class="vip">
				<image src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34" mode="widthFix"></image>
				<text class="text1">超级会员</text>
				<text class="text2">· 每月领20元红包</text>
				<text class="text3">立即开通 ﹥</text>
			</view>
			<view class="lists">
				<view class="lists-title">推荐商家</view>
				<view class="list-tab">
					<view class="list-item">
						<text>综合排序</text>
						<!-- <image src="" mode=""></image> -->
					</view>
					<view class="list-item">
						<text>距离最近</text>
						<!-- <image src="" mode=""></image> -->
					</view>
					<view class="list-item">
						<text>销量最高</text>
						<!-- <image src="" mode=""></image> -->
					</view>
					<view class="list-item">
						<text>筛选</text>
						<!-- <image src="" mode=""></image> -->
					</view>
				</view>
			</view>
		</view>
		<view class="store-list" v-for="(item, index) in lists.items" :key="index" @click="jump(index,item.restaurant.float_minimum_order_amount)">
			<image :src="item.restaurant.image_path.slice(-3)=='png'?'https://cube.elemecdn.com/'+item.restaurant.image_path.slice(0,1)+'/'+item.restaurant.image_path.slice(1,3)+'/'+item.restaurant.image_path.slice(3)+'.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed':'https://cube.elemecdn.com/'+item.restaurant.image_path.slice(0,1)+'/'+item.restaurant.image_path.slice(1,3)+'/'+item.restaurant.image_path.slice(3)+'.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed'" mode="widthFix"></image>
			<view class="store-text">
				<view class="store-name">
					{{item.restaurant.name}}
				</view>
				<view class="store-star">
					<view class="star-left">
						{{item.restaurant.rating}} 月售{{item.restaurant.recent_order_num}}单
					</view>
					<view class="owner-send">
						蜂鸟专送
					</view>
				</view>
				<view class="store-price">
					<view class="start-price">
						￥{{item.restaurant.float_minimum_order_amount}}起送 | 配送费￥{{item.restaurant.float_delivery_fee}}
					</view>
					<view class="store-time">
						72m | {{item.restaurant.order_lead_time}}分钟
					</view>
				</view>
				<text class="tags">{{item.restaurant.flavors[0].name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database({
		spaceId: 'tcb-8tk9lhhwad2e9a-5diuxab49d974'
	});
	var recorderManager = uni.getRecorderManager();  
	var innerAudioContext = uni.createInnerAudioContext();  
	innerAudioContext.autoplay = true;  
	export default {
		data() {
			return {
				images: [],
				menus: [
					{
						title: '美食',
						url: 'https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'
					},
					{
						title: '大牌惠吃',
						url: 'https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'
					},
					{
						title: '跑腿代购',
						url: 'https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'
					},
					{
						title: '汉堡披萨',
						url: 'https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'
					},
					{
						title: '',
						url: ''
					}
				],
				lists: {
					"has_next":true,
					"items":[
						{
							"restaurant":{
								"act_tag":0,
								"activities":[
									{
										"attribute":"{20:{\"content\":\"3\",\"type\":1},30:{\"content\":\"5\",\"type\":1},40:{\"content\":\"7\",\"type\":1},50:{\"content\":\"9\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"满20元减3元，满30元减5元，满40元减7元，满50元减9元",
										"icon_color":"f07373",
										"icon_name":"减",
										"id":23436468123,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"满减优惠",
										"text_color":"#FF4B33",
										"tips":"满20元减3元，满30元减5元，满40元减7元，满50元减9元",
										"type":102
									},
									{
										"attribute":"{0:{\"content\":\"3\",\"type\":7}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"配送费立减3元",
										"icon_color":"70bc46",
										"icon_name":"配",
										"id":24222249787,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"配送费优惠",
										"text_color":"#FF4B33",
										"tips":"配送费立减3元",
										"type":901
									},
									{
										"attribute":"{0:{\"content\":\"0.5\",\"type\":2}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"折扣商品5折起",
										"icon_color":"3cc791",
										"icon_name":"折",
										"id":23912659107,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"折扣优惠",
										"text_color":"#FF4B33",
										"tips":"折扣商品5折起",
										"type":501
									}
								],
								"address":null,
								"authentic_id":2001510586,
								"average_cost":null,
								"baidu_id":null,
								"bidding":null,
								"brand_id":null,
								"business_info":"{\"pickup_scheme\":\"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E6398250201681055793\",\"ad_info\":{\"isAd\":\"false\"},\"recent_order_num_display\":\"月售734\"}",
								"closing_count_down":18655,
								"delivery_fee_discount":"3.0",
								"delivery_mode":{
									"border":"",
									"color":"2395FF",
									"gradient":{
										"rgb_from":"00a6ff",
										"rgb_to":"00a6ff"
									},
									"icon_hash":"b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
									"id":1,
									"is_solid":true,
									"text":"蜂鸟专送",
									"text_color":"FFFFFF"
								},
								"description":"",
								"distance":2211,
								"favor_time":null,
								"favored":false,
								"flavors":[
									{
										"id":874,
										"name":"烧饼/馅饼/手抓饼"
									}
								],
								"float_delivery_fee":"0.0",
								"float_minimum_order_amount":"15.0",
								"folding_restaurant_brand":null,
								"folding_restaurants":[

								],
								"has_story":false,
								"id":"E6398250201681055793",
								"image_path":"9dca9b7a98774ae79f40cb96fb1408c0jpeg",
								"is_new":false,
								"is_premium":false,
								"is_star":false,
								"is_stock_empty":0,
								"is_valid":1,
								"latitude":34.766599,
								"longitude":113.768511,
								"max_applied_quantity_per_order":-1,
								"name":"段味居烧烤馋嘴饼(原盛国际店)",
								"next_business_time":"明天 8:00",
								"only_use_poi":null,
								"opening_hours":[
									"8:00/20:00"
								],
								"order_lead_time":30,
								"out_of_range":false,
								"phone":null,
								"piecewise_agent_fee":{
									"description":"免配送费",
									"extra_fee":"0.0",
									"is_extra":false,
									"no_subsidy_fee":"¥3",
									"rules":[
										{
											"fee":"0.0",
											"price":"15.0"
										}
									],
									"tips":"免配送费"
								},
								"platform":0,
								"posters":[

								],
								"promotion_info":"",
								"rating":4.8,
								"rating_count":358,
								"recent_order_num":734,
								"recommend":{
									"is_ad":false,
									"reason":""
								},
								"recommend_reasons":[
									{
										"name":"回头客多"
									},
									{
										"name":"配送飞快"
									}
								],
								"regular_customer_count":0,
								"restaurant_info":null,
								"scheme":"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E6398250201681055793&o2o_extra_param=%7B%22rank_id%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%7D",
								"status":1,
								"support_tags":[
									{
										"border":"dddddd",
										"color":"666666",
										"icon":"4e20966ca2a516de3f02fb9c7fd1bc6dpng",
										"text":"烧饼/馅饼/手抓饼",
										"type":1
									}
								],
								"supports":[
									{
										"border":"dddddd",
										"description":"该商户食品安全已由国泰产险承担，食品安全有保障",
										"icon_color":"666666",
										"icon_name":"保",
										"id":7,
										"name":"食无忧",
										"text_color":"666666",
										"two_characters_icon_name":"保险"
									}
								],
								"target_tag_path":null,
								"theme":{
									"default_color":"2395ff",
									"header_style":3,
									"hongbao_style":0,
									"logo_sub":null,
									"price_color":"ff5339",
									"third_tab_name":"商家",
									"vanish_fields":[

									]
								},
								"type":0
							}
						},
						{
							"restaurant":{
								"act_tag":0,
								"activities":[
									{
										"attribute":"{26:{\"content\":\"10\",\"type\":1},55:{\"content\":\"23\",\"type\":1},99:{\"content\":\"42\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"满26元减10元，满55元减23元，满99元减42元",
										"icon_color":"f07373",
										"icon_name":"减",
										"id":23585152171,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"满减优惠",
										"text_color":"#FF4B33",
										"tips":"满26元减10元，满55元减23元，满99元减42元",
										"type":102
									},
									{
										"attribute":"{0:{\"content\":\"5\",\"type\":7}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"配送费立减5元",
										"icon_color":"70bc46",
										"icon_name":"配",
										"id":24179646035,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"配送费优惠",
										"text_color":"#FF4B33",
										"tips":"配送费立减5元",
										"type":901
									},
									{
										"attribute":"{0:{\"content\":\"0.4\",\"type\":2}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"折扣商品4折起",
										"icon_color":"3cc791",
										"icon_name":"折",
										"id":23586287515,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"折扣优惠",
										"text_color":"#FF4B33",
										"tips":"折扣商品4折起",
										"type":501
									}
								],
								"address":null,
								"authentic_id":2043940048,
								"average_cost":null,
								"baidu_id":null,
								"bidding":null,
								"brand_id":null,
								"business_info":"{\"pickup_scheme\":\"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E11639497607528774996\",\"ad_info\":{\"isAd\":\"false\"},\"recent_order_num_display\":\"月售1452\"}",
								"closing_count_down":40255,
								"delivery_fee_discount":"5.0",
								"delivery_mode":null,
								"description":"",
								"distance":1290,
								"favor_time":null,
								"favored":false,
								"flavors":[
									{
										"id":218,
										"name":"烧烤"
									},
									{
										"id":236,
										"name":"小龙虾"
									}
								],
								"float_delivery_fee":"2.0",
								"float_minimum_order_amount":"15.0",
								"folding_restaurant_brand":null,
								"folding_restaurants":[

								],
								"has_story":false,
								"id":"E11639497607528774996",
								"image_path":"33182cd0abaec8b7d5a1060b09004df9JPEG",
								"is_new":false,
								"is_premium":false,
								"is_star":false,
								"is_stock_empty":0,
								"is_valid":1,
								"latitude":34.77551,
								"longitude":113.77297,
								"max_applied_quantity_per_order":-1,
								"name":"马坡烧烤(郑东新区店)",
								"next_business_time":"明天 14:00",
								"only_use_poi":null,
								"opening_hours":[
									"14:00/2:00"
								],
								"order_lead_time":45,
								"out_of_range":false,
								"phone":null,
								"piecewise_agent_fee":{
									"description":"配送¥2",
									"extra_fee":"0.0",
									"is_extra":false,
									"no_subsidy_fee":"¥7",
									"rules":[
										{
											"fee":"2.0",
											"price":"15.0"
										}
									],
									"tips":"配送¥2"
								},
								"platform":0,
								"posters":[

								],
								"promotion_info":"本店所有食材都是新鲜采购的",
								"rating":4.8,
								"rating_count":1811,
								"recent_order_num":1452,
								"recommend":{
									"is_ad":false,
									"reason":""
								},
								"recommend_reasons":[
									{
										"name":"回头客多"
									}
								],
								"regular_customer_count":0,
								"restaurant_info":null,
								"scheme":"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E11639497607528774996&o2o_extra_param=%7B%22rank_id%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%7D",
								"status":1,
								"support_tags":[
									{
										"border":"dddddd",
										"color":"666666",
										"icon":"4e20966ca2a516de3f02fb9c7fd1bc6dpng",
										"text":"烧烤",
										"type":1
									}
								],
								"supports":[
									{
										"border":"dddddd",
										"description":"该商户食品安全已由国泰产险承担，食品安全有保障",
										"icon_color":"666666",
										"icon_name":"保",
										"id":7,
										"name":"食无忧",
										"text_color":"666666",
										"two_characters_icon_name":"保险"
									}
								],
								"target_tag_path":null,
								"theme":{
									"default_color":"2395ff",
									"header_style":3,
									"hongbao_style":0,
									"logo_sub":null,
									"price_color":"ff5339",
									"third_tab_name":"商家",
									"vanish_fields":[

									]
								},
								"type":0
							}
						},
						{
							"restaurant":{
								"act_tag":0,
								"activities":[
									{
										"attribute":"{25:{\"content\":\"1\",\"type\":1},36:{\"content\":\"2\",\"type\":1},56:{\"content\":\"4\",\"type\":1},85:{\"content\":\"6\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"满25元减1元，满36元减2元，满56元减4元，满85元减6元",
										"icon_color":"f07373",
										"icon_name":"减",
										"id":24377576707,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"满减优惠",
										"text_color":"#FF4B33",
										"tips":"满25元减1元，满36元减2元，满56元减4元，满85元减6元",
										"type":102
									},
									{
										"attribute":"{0:{\"content\":\"3\",\"type\":7}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"配送费立减3元",
										"icon_color":"70bc46",
										"icon_name":"配",
										"id":24377574043,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"配送费优惠",
										"text_color":"#FF4B33",
										"tips":"配送费立减3元",
										"type":901
									}
								],
								"address":null,
								"authentic_id":2072750879,
								"average_cost":null,
								"baidu_id":null,
								"bidding":null,
								"brand_id":415590,
								"business_info":"{\"pickup_scheme\":\"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E14367935138046528072\",\"ad_info\":{\"isAd\":\"false\"},\"recent_order_num_display\":\"月售912\"}",
								"closing_count_down":25855,
								"delivery_fee_discount":"3.0",
								"delivery_mode":{
									"border":"",
									"color":"2395FF",
									"gradient":{
										"rgb_from":"00a6ff",
										"rgb_to":"00a6ff"
									},
									"icon_hash":"b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
									"id":1,
									"is_solid":true,
									"text":"蜂鸟专送",
									"text_color":"FFFFFF"
								},
								"description":"",
								"distance":1979,
								"favor_time":null,
								"favored":false,
								"flavors":[
									{
										"id":240,
										"name":"奶茶果汁"
									},
									{
										"id":738,
										"name":"其他甜品饮品"
									}
								],
								"float_delivery_fee":"1.0",
								"float_minimum_order_amount":"20.0",
								"folding_restaurant_brand":null,
								"folding_restaurants":[

								],
								"has_story":false,
								"id":"E14367935138046528072",
								"image_path":"D2B06400E04A4AF781AB45F7095C956Bjpeg",
								"is_new":false,
								"is_premium":true,
								"is_star":false,
								"is_stock_empty":0,
								"is_valid":1,
								"latitude":34.770561,
								"longitude":113.768209,
								"max_applied_quantity_per_order":-1,
								"name":"茶百道(心怡路店)",
								"next_business_time":"明天 10:00",
								"only_use_poi":null,
								"opening_hours":[
									"10:00/22:00"
								],
								"order_lead_time":30,
								"out_of_range":false,
								"phone":null,
								"piecewise_agent_fee":{
									"description":"配送¥1",
									"extra_fee":"0.0",
									"is_extra":false,
									"no_subsidy_fee":"¥4",
									"rules":[
										{
											"fee":"1.0",
											"price":"20.0"
										}
									],
									"tips":"配送¥1"
								},
								"platform":0,
								"posters":[

								],
								"promotion_info":"超牛的“椰”，沁凉来袭！茶百道携清新“生打椰系列”及滑嫩”双皮奶系列“给你初夏新滋味！",
								"rating":4.7,
								"rating_count":33,
								"recent_order_num":912,
								"recommend":{
									"is_ad":false,
									"reason":""
								},
								"recommend_reasons":[
									{
										"name":"回头客多"
									},
									{
										"name":"配送飞快"
									}
								],
								"regular_customer_count":0,
								"restaurant_info":null,
								"scheme":"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E14367935138046528072&o2o_extra_param=%7B%22rank_id%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%7D",
								"status":1,
								"support_tags":[
									{
										"border":"dddddd",
										"color":"666666",
										"icon":"4e20966ca2a516de3f02fb9c7fd1bc6dpng",
										"text":"奶茶果汁",
										"type":1
									}
								],
								"supports":[

								],
								"target_tag_path":"d53fc0cb4dc67973038cbc591938a1b6png",
								"theme":{
									"default_color":"2395ff",
									"header_style":3,
									"hongbao_style":0,
									"logo_sub":null,
									"price_color":"ff5339",
									"third_tab_name":"商家",
									"vanish_fields":[

									]
								},
								"type":0
							}
						},
						{
							"restaurant":{
								"act_tag":0,
								"activities":[
									{
										"attribute":"{25:{\"content\":\"20\",\"type\":1},45:{\"content\":\"26\",\"type\":1},65:{\"content\":\"30\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"满25元减20元，满45元减26元，满65元减30元",
										"icon_color":"f07373",
										"icon_name":"减",
										"id":24352801539,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"满减优惠",
										"text_color":"#FF4B33",
										"tips":"满25元减20元，满45元减26元，满65元减30元",
										"type":102
									},
									{
										"attribute":"{0:{\"content\":\"2.5\",\"type\":7}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"配送费立减2.5元",
										"icon_color":"70bc46",
										"icon_name":"配",
										"id":24457986795,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"配送费优惠",
										"text_color":"#FF4B33",
										"tips":"配送费立减2.5元",
										"type":901
									},
									{
										"attribute":"{0:{\"content\":\"0.9\",\"type\":4}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"特价商品0.9元起",
										"icon_color":"f1884f",
										"icon_name":"特",
										"id":23954892491,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"特价商品",
										"text_color":"#FF4B33",
										"tips":"特价商品0.9元起",
										"type":502
									},
									{
										"attribute":"{0:{\"content\":\"0.40\",\"type\":2}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"折扣商品4折起",
										"icon_color":"3cc791",
										"icon_name":"折",
										"id":24456575043,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"折扣优惠",
										"text_color":"#FF4B33",
										"tips":"折扣商品4折起",
										"type":501
									}
								],
								"address":null,
								"authentic_id":1771571,
								"average_cost":null,
								"baidu_id":null,
								"bidding":null,
								"brand_id":554801,
								"business_info":"{\"pickup_scheme\":\"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E5553423244387241612\",\"ad_info\":{\"isAd\":\"false\"},\"recent_order_num_display\":\"月售1110\"}",
								"closing_count_down":0,
								"delivery_fee_discount":2.5,
								"delivery_mode":null,
								"description":"多美士汉堡（龙岗店）位于龙岗新城步行街，面积52平方，为多美士标准店。专注健康饮食，创造经典美味 是我们不变的主题！",
								"distance":437,
								"favor_time":null,
								"favored":false,
								"flavors":[
									{
										"id":212,
										"name":"汉堡薯条"
									},
									{
										"id":234,
										"name":"炸鸡炸串"
									}
								],
								"float_delivery_fee":"0.0",
								"float_minimum_order_amount":"20.0",
								"folding_restaurant_brand":null,
								"folding_restaurants":[

								],
								"has_story":false,
								"id":"E5553423244387241612",
								"image_path":"2CAB06697E98425DB9FE2A63E68600A7png",
								"is_new":false,
								"is_premium":true,
								"is_star":false,
								"is_stock_empty":0,
								"is_valid":1,
								"latitude":34.774273,
								"longitude":113.786387,
								"max_applied_quantity_per_order":-1,
								"name":"多美士炸鸡汉堡(龙岗店)",
								"next_business_time":"",
								"only_use_poi":null,
								"opening_hours":[
									"0:00/23:59"
								],
								"order_lead_time":30,
								"out_of_range":false,
								"phone":null,
								"piecewise_agent_fee":{
									"description":"免配送费",
									"extra_fee":"0.0",
									"is_extra":false,
									"no_subsidy_fee":"¥2.5",
									"rules":[
										{
											"fee":"0.0",
											"price":"20.0"
										}
									],
									"tips":"免配送费"
								},
								"platform":0,
								"posters":[

								],
								"promotion_info":"本店个别产品，超低价特惠。拒绝单点一样产品（点一个汉堡或其它，本店拒绝配送。平台有保底扣费，又免配送费。您点一个特价，我们收入为负的。）生意难做，希望理解。亲，不要默默的给一个差评，这样小美会很受伤的，谢谢理解！",
								"rating":4.3,
								"rating_count":12125,
								"recent_order_num":1110,
								"recommend":{
									"is_ad":false,
									"reason":""
								},
								"recommend_reasons":[
									{
										"name":"配送飞快"
									}
								],
								"regular_customer_count":0,
								"restaurant_info":null,
								"scheme":"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E5553423244387241612&o2o_extra_param=%7B%22rank_id%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%7D",
								"status":1,
								"support_tags":[
									{
										"border":"dddddd",
										"color":"666666",
										"icon":"4e20966ca2a516de3f02fb9c7fd1bc6dpng",
										"text":"汉堡薯条",
										"type":1
									}
								],
								"supports":[
									{
										"border":"dddddd",
										"description":"该商户食品安全已由国泰产险承担，食品安全有保障",
										"icon_color":"666666",
										"icon_name":"保",
										"id":7,
										"name":"食无忧",
										"text_color":"666666",
										"two_characters_icon_name":"保险"
									}
								],
								"target_tag_path":"d53fc0cb4dc67973038cbc591938a1b6png",
								"theme":{
									"default_color":"2395ff",
									"header_style":3,
									"hongbao_style":0,
									"logo_sub":null,
									"price_color":"ff5339",
									"third_tab_name":"商家",
									"vanish_fields":[

									]
								},
								"type":0
							}
						},
						{
							"restaurant":{
								"act_tag":0,
								"activities":[
									{
										"attribute":"{28:{\"content\":\"19\",\"type\":1},98:{\"content\":\"29\",\"type\":1},198:{\"content\":\"49\",\"type\":1},298:{\"content\":\"69\",\"type\":1},498:{\"content\":\"99\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"满28元减19元，满98元减29元，满198元减49元，满298元减69元，满498元减99元",
										"icon_color":"f07373",
										"icon_name":"减",
										"id":24362719907,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"满减优惠",
										"text_color":"#FF4B33",
										"tips":"满28元减19元，满98元减29元，满198元减49元，满298元减69元，满498元减99元",
										"type":102
									},
									{
										"attribute":"{0:{\"content\":\"8\",\"type\":7}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"配送费立减8元",
										"icon_color":"70bc46",
										"icon_name":"配",
										"id":24362720707,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"配送费优惠",
										"text_color":"#FF4B33",
										"tips":"配送费立减8元",
										"type":901
									},
									{
										"attribute":"{0:{\"content\":\"5.0\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"首次光顾本店立减5元",
										"icon_color":"70bc46",
										"icon_name":"首",
										"id":24362722427,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"首单立减",
										"text_color":"#FF4B33",
										"tips":"首次光顾本店立减5元",
										"type":108
									},
									{
										"attribute":"{0:{\"content\":\"0.01\",\"type\":4}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"特价商品0.01元起",
										"icon_color":"f1884f",
										"icon_name":"特",
										"id":24362990259,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"特价商品",
										"text_color":"#FF4B33",
										"tips":"特价商品0.01元起",
										"type":502
									}
								],
								"address":null,
								"authentic_id":2086576303,
								"average_cost":null,
								"baidu_id":null,
								"bidding":"{\"core\":{\"next\":{\"probability\":0.02203226089477539,\"weight\":300,\"restaurantId\":501510619},\"come_from\":1,\"index\":4,\"target\":{\"probability\":0.070559561252594,\"weight\":100,\"restaurantId\":2086576303},\"extraInfo\":\"{\\\"cpxMap\\\":\\\"{\\\\\\\"2086576303\\\\\\\":3,\\\\\\\"501285075\\\\\\\":3,\\\\\\\"2085018595\\\\\\\":3,\\\\\\\"501510619\\\\\\\":3}\\\",\\\"campaignIdMap\\\":\\\"{\\\\\\\"2085018595\\\\\\\":5048104,\\\\\\\"2086576303\\\\\\\":4868138,\\\\\\\"501285075\\\\\\\":4101019,\\\\\\\"501510619\\\\\\\":4311877}\\\",\\\"snid\\\":\\\"o2oad2108b44116220117439333529d0348\\\",\\\"ab_bucket\\\":\\\"a\\\",\\\"upstream_tpp_buckets\\\":\\\"\\\",\\\"use_roi_adjust_cost\\\":\\\"1\\\",\\\"bidding\\\":\\\"{}\\\",\\\"rankType\\\":\\\"8\\\",\\\"upstream_ab_bucket\\\":\\\"\\\",\\\"adLogo\\\":\\\"{\\\\\\\"url\\\\\\\":\\\\\\\"https://cube.elemecdn.com/0/1d/49b90a483860967ed3c67dd27714epng.png\\\\\\\",\\\\\\\"position\\\\\\\":\\\\\\\"left-bottom\\\\\\\"}\\\",\\\"latitude\\\":\\\"34.77439\\\",\\\"orientMap\\\":\\\"{\\\\\\\"2085018595\\\\\\\":-1,\\\\\\\"2086576303\\\\\\\":-1,\\\\\\\"501285075\\\\\\\":1,\\\\\\\"501510619\\\\\\\":1}\\\",\\\"cityId\\\":\\\"0\\\",\\\"terminal\\\":\\\"unknown\\\",\\\"type\\\":\\\"1\\\",\\\"costUgspMap\\\":\\\"{}\\\",\\\"userId\\\":\\\"35367920\\\",\\\"pidPre\\\":\\\"o2o_102305_200003_100000\\\",\\\"tpp_buckets\\\":\\\"19616#0#205226#0_19616#3177#19354#436_19616#4417#22884#173_19616#4180#19119#470_19616#3899#17737#83\\\",\\\"rankId\\\":\\\"1e3385f8a5db481a9cc0dc150625e0c9\\\",\\\"rankTime\\\":\\\"1622011744\\\",\\\"ab_scene\\\":\\\"rec_rest\\\",\\\"longitude\\\":\\\"113.78297\\\"}\"}}",
								"brand_id":412884,
								"business_info":"{\"pickup_scheme\":\"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E5895478859851026109\",\"ad_info\":{\"nextId\":\"501510619\",\"probability\":\"0.070559561252594\",\"weight\":\"100\",\"pid\":\"o2o_102305_200003_100004\",\"etype\":\"1\",\"adInfo\":\"{\\\"cpxMap\\\":\\\"{\\\\\\\"2086576303\\\\\\\":3,\\\\\\\"501285075\\\\\\\":3,\\\\\\\"2085018595\\\\\\\":3,\\\\\\\"501510619\\\\\\\":3}\\\",\\\"campaignIdMap\\\":\\\"{\\\\\\\"2085018595\\\\\\\":5048104,\\\\\\\"2086576303\\\\\\\":4868138,\\\\\\\"501285075\\\\\\\":4101019,\\\\\\\"501510619\\\\\\\":4311877}\\\",\\\"snid\\\":\\\"o2oad2108b44116220117439333529d0348\\\",\\\"ab_bucket\\\":\\\"a\\\",\\\"upstream_tpp_buckets\\\":\\\"\\\",\\\"use_roi_adjust_cost\\\":\\\"1\\\",\\\"bidding\\\":\\\"{}\\\",\\\"rankType\\\":\\\"8\\\",\\\"upstream_ab_bucket\\\":\\\"\\\",\\\"adLogo\\\":\\\"{\\\\\\\"url\\\\\\\":\\\\\\\"https://cube.elemecdn.com/0/1d/49b90a483860967ed3c67dd27714epng.png\\\\\\\",\\\\\\\"position\\\\\\\":\\\\\\\"left-bottom\\\\\\\"}\\\",\\\"latitude\\\":\\\"34.77439\\\",\\\"orientMap\\\":\\\"{\\\\\\\"2085018595\\\\\\\":-1,\\\\\\\"2086576303\\\\\\\":-1,\\\\\\\"501285075\\\\\\\":1,\\\\\\\"501510619\\\\\\\":1}\\\",\\\"cityId\\\":\\\"0\\\",\\\"terminal\\\":\\\"unknown\\\",\\\"type\\\":\\\"1\\\",\\\"costUgspMap\\\":\\\"{}\\\",\\\"userId\\\":\\\"35367920\\\",\\\"pidPre\\\":\\\"o2o_102305_200003_100000\\\",\\\"tpp_buckets\\\":\\\"19616#0#205226#0_19616#3177#19354#436_19616#4417#22884#173_19616#4180#19119#470_19616#3899#17737#83\\\",\\\"rankId\\\":\\\"1e3385f8a5db481a9cc0dc150625e0c9\\\",\\\"rankTime\\\":\\\"1622011744\\\",\\\"ab_scene\\\":\\\"rec_rest\\\",\\\"longitude\\\":\\\"113.78297\\\"}\",\"isAd\":\"true\",\"nextProbability\":\"0.02203226089477539\",\"expo\":\"mtop.o2o.ad.exposure.get/1.0/?snid=o2oad2108b44116220117439333529d0348&cost=DC6DD14D455F01F7&pt=102301009&shid=2ABF329198833CB986638025B7843E14&utype=0&nid=&cnid=4868138&cpx=3&p=%7B%22store_id%22%3A%22DE2803FAFB389E18D02C90B823C11EA1%22%2C%22cn_type%22%3A%221%22%2C%22ab_bucket%22%3A%22a%22%2C%22upstream_tpp_buckets%22%3A%22%22%2C%22adgroup_id%22%3A%226334389%22%2C%22use_roi_adjust_cost%22%3A%221%22%2C%22upstream_ab_bucket%22%3A%22%22%2C%22use_roi_adjust%22%3A%221%22%2C%22cpx%22%3A%223%22%2C%22bid_model%22%3A%220%22%2C%22terminal%22%3A%22unknown%22%2C%22type%22%3A%221%22%2C%22scene%22%3A%220_1_00_00032%22%2C%22tpp_buckets%22%3A%2219616%230%23205226%230_19616%233177%2319354%23436_19616%234417%2322884%23173_19616%234180%2319119%23470_19616%233899%2317737%2383%22%2C%22origin_bid%22%3A%22DC6DD14D455F01F7%22%2C%22cost_v2%22%3A%2210000%22%2C%22ctype%22%3A%221%22%2C%22rankId%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%2C%22orientDimension%22%3A%22%22%2C%22ab_scene%22%3A%22rec_rest%22%2C%22orientType%22%3A%22-1%22%2C%22plan_id%22%3A%224868138%22%2C%22city_id%22%3A%220%22%7D&uid=35367920&bid=DC6DD14D455F01F7&aid=A000AFF3F64A1170&cid=&ts=1622011743939&pid=o2o_102305_200003_100004\",\"targetUrlParams\":\"{\\\"epid\\\":\\\"o2o_102305_200003_100004\\\",\\\"etype\\\":\\\"1\\\",\\\"o2o\\\":\\\"mtop.life.ad.click.get/1.0/?snid=o2oad2108b44116220117439333529d0348&cost=DC6DD14D455F01F7&pt=102301009&shid=2ABF329198833CB986638025B7843E14&utype=0&nid=&cnid=4868138&cpx=3&p=%7B%22store_id%22%3A%22DE2803FAFB389E18D02C90B823C11EA1%22%2C%22cn_type%22%3A%221%22%2C%22cpc_cost_plus_extra_amount_switch%22%3A%221%22%2C%22ab_bucket%22%3A%22a%22%2C%22upstream_tpp_buckets%22%3A%22%22%2C%22adgroup_id%22%3A%226334389%22%2C%22use_roi_adjust_cost%22%3A%221%22%2C%22upstream_ab_bucket%22%3A%22%22%2C%22use_roi_adjust%22%3A%221%22%2C%22cpx%22%3A%223%22%2C%22bid_model%22%3A%220%22%2C%22terminal%22%3A%22unknown%22%2C%22type%22%3A%221%22%2C%22scene%22%3A%220_1_00_00032%22%2C%22tpp_buckets%22%3A%2219616%230%23205226%230_19616%233177%2319354%23436_19616%234417%2322884%23173_19616%234180%2319119%23470_19616%233899%2317737%2383%22%2C%22origin_bid%22%3A%22DC6DD14D455F01F7%22%2C%22cost_v2%22%3A%2210000%22%2C%22ctype%22%3A%221%22%2C%22rankId%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%2C%22orientDimension%22%3A%22%22%2C%22ab_scene%22%3A%22rec_rest%22%2C%22orientType%22%3A%22-1%22%2C%22plan_id%22%3A%224868138%22%2C%22city_id%22%3A%220%22%7D&uid=35367920&bid=DC6DD14D455F01F7&aid=A000AFF3F64A1170&cid=&ts=1622011743939&pid=o2o_102305_200003_100004\\\"}\",\"nextWeight\":\"300\"},\"recent_order_num_display\":\"月售173\"}",
								"closing_count_down":22255,
								"delivery_fee_discount":"0.0",
								"delivery_mode":null,
								"description":"",
								"distance":5621,
								"favor_time":null,
								"favored":false,
								"flavors":[
									{
										"id":241,
										"name":"甜品"
									},
									{
										"id":249,
										"name":"蛋糕"
									}
								],
								"float_delivery_fee":"0.0",
								"float_minimum_order_amount":"0.0",
								"folding_restaurant_brand":null,
								"folding_restaurants":[

								],
								"has_story":false,
								"id":"E5895478859851026109",
								"image_path":"BA7C92BA091E4315A9E72C458446EFE9png",
								"is_new":false,
								"is_premium":true,
								"is_star":false,
								"is_stock_empty":0,
								"is_valid":1,
								"latitude":34.746654,
								"longitude":113.74437,
								"max_applied_quantity_per_order":-1,
								"name":"八喜冰淇淋蛋糕(郑州店)",
								"next_business_time":"明天 7:00",
								"only_use_poi":null,
								"opening_hours":[
									"7:00/21:00"
								],
								"order_lead_time":53,
								"out_of_range":false,
								"phone":null,
								"piecewise_agent_fee":{
									"description":"免配送费",
									"extra_fee":"0.0",
									"is_extra":false,
									"no_subsidy_fee":"",
									"rules":[
										{
											"fee":"0.0",
											"price":"0.0"
										}
									],
									"tips":"免配送费"
								},
								"platform":0,
								"posters":[

								],
								"promotion_info":"",
								"rating":4.8,
								"rating_count":16,
								"recent_order_num":173,
								"recommend":{
									"image_hash":"731111f3f9379e772eedf4855beae8a1jpeg",
									"is_ad":true,
									"reason":"",
									"track":"{\"rankType\":\"8\"}"
								},
								"recommend_reasons":[

								],
								"regular_customer_count":0,
								"restaurant_info":null,
								"scheme":"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E5895478859851026109&o2o_extra_param=%7B%22rank_id%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%7D&epid=o2o_102305_200003_100004&etype=1&o2o=mtop.life.ad.click.get%2F1.0%2F%3Fsnid%3Do2oad2108b44116220117439333529d0348%26cost%3DDC6DD14D455F01F7%26pt%3D102301009%26shid%3D2ABF329198833CB986638025B7843E14%26utype%3D0%26nid%3D%26cnid%3D4868138%26cpx%3D3%26p%3D%257B%2522store_id%2522%253A%2522DE2803FAFB389E18D02C90B823C11EA1%2522%252C%2522cn_type%2522%253A%25221%2522%252C%2522cpc_cost_plus_extra_amount_switch%2522%253A%25221%2522%252C%2522ab_bucket%2522%253A%2522a%2522%252C%2522upstream_tpp_buckets%2522%253A%2522%2522%252C%2522adgroup_id%2522%253A%25226334389%2522%252C%2522use_roi_adjust_cost%2522%253A%25221%2522%252C%2522upstream_ab_bucket%2522%253A%2522%2522%252C%2522use_roi_adjust%2522%253A%25221%2522%252C%2522cpx%2522%253A%25223%2522%252C%2522bid_model%2522%253A%25220%2522%252C%2522terminal%2522%253A%2522unknown%2522%252C%2522type%2522%253A%25221%2522%252C%2522scene%2522%253A%25220_1_00_00032%2522%252C%2522tpp_buckets%2522%253A%252219616%25230%2523205226%25230_19616%25233177%252319354%2523436_19616%25234417%252322884%2523173_19616%25234180%252319119%2523470_19616%25233899%252317737%252383%2522%252C%2522origin_bid%2522%253A%2522DC6DD14D455F01F7%2522%252C%2522cost_v2%2522%253A%252210000%2522%252C%2522ctype%2522%253A%25221%2522%252C%2522rankId%2522%253A%25221e3385f8a5db481a9cc0dc150625e0c9%2522%252C%2522orientDimension%2522%253A%2522%2522%252C%2522ab_scene%2522%253A%2522rec_rest%2522%252C%2522orientType%2522%253A%2522-1%2522%252C%2522plan_id%2522%253A%25224868138%2522%252C%2522city_id%2522%253A%25220%2522%257D%26uid%3D35367920%26bid%3DDC6DD14D455F01F7%26aid%3DA000AFF3F64A1170%26cid%3D%26ts%3D1622011743939%26pid%3Do2o_102305_200003_100004",
								"status":1,
								"support_tags":[
									{
										"border":"dddddd",
										"color":"666666",
										"icon":"4e20966ca2a516de3f02fb9c7fd1bc6dpng",
										"text":"甜品",
										"type":1
									}
								],
								"supports":[
									{
										"border":"dddddd",
										"description":"该商户食品安全已由国泰产险承担，食品安全有保障",
										"icon_color":"666666",
										"icon_name":"保",
										"id":7,
										"name":"食无忧",
										"text_color":"666666",
										"two_characters_icon_name":"保险"
									},
									{
										"border":"dddddd",
										"description":"退款在订单配送前可免费享受",
										"icon_color":"666666",
										"icon_name":"退",
										"id":14,
										"name":"极速退",
										"text_color":"666666",
										"two_characters_icon_name":""
									}
								],
								"target_tag_path":"d53fc0cb4dc67973038cbc591938a1b6png",
								"theme":{
									"default_color":"2395ff",
									"header_style":3,
									"hongbao_style":0,
									"logo_sub":null,
									"price_color":"ff5339",
									"third_tab_name":"商家",
									"vanish_fields":[

									]
								},
								"type":0
							}
						},
						{
							"restaurant":{
								"act_tag":0,
								"activities":[
									{
										"attribute":"{28:{\"content\":\"2\",\"type\":1},30:{\"content\":\"3\",\"type\":1},45:{\"content\":\"5\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"满28元减2元，满30元减3元，满45元减5元",
										"icon_color":"f07373",
										"icon_name":"减",
										"id":23857461907,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"满减优惠",
										"text_color":"#FF4B33",
										"tips":"满28元减2元，满30元减3元，满45元减5元",
										"type":102
									},
									{
										"attribute":"{0:{\"content\":\"2.5\",\"type\":7}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"配送费立减2.5元",
										"icon_color":"70bc46",
										"icon_name":"配",
										"id":24287942331,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"配送费优惠",
										"text_color":"#FF4B33",
										"tips":"配送费立减2.5元",
										"type":901
									}
								],
								"address":null,
								"authentic_id":155741758,
								"average_cost":null,
								"baidu_id":null,
								"bidding":null,
								"brand_id":418348,
								"business_info":"{\"pickup_scheme\":\"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E13366852761861269375\",\"ad_info\":{\"isAd\":\"false\"},\"recent_order_num_display\":\"月售1564\"}",
								"closing_count_down":23155,
								"delivery_fee_discount":2.5,
								"delivery_mode":null,
								"description":"",
								"distance":1409,
								"favor_time":null,
								"favored":false,
								"flavors":[
									{
										"id":882,
										"name":"其他快餐"
									}
								],
								"float_delivery_fee":"0.0",
								"float_minimum_order_amount":"17.0",
								"folding_restaurant_brand":null,
								"folding_restaurants":[

								],
								"has_story":false,
								"id":"E13366852761861269375",
								"image_path":"a0a3dadc20c20fde8a5d70a514efc88fjpeg",
								"is_new":false,
								"is_premium":false,
								"is_star":false,
								"is_stock_empty":0,
								"is_valid":1,
								"latitude":34.775578,
								"longitude":113.772045,
								"max_applied_quantity_per_order":-1,
								"name":"王春光早餐工程.中式快餐.砂锅(祭城店)",
								"next_business_time":"明天 6:00",
								"only_use_poi":null,
								"opening_hours":[
									"6:00/21:15"
								],
								"order_lead_time":30,
								"out_of_range":false,
								"phone":null,
								"piecewise_agent_fee":{
									"description":"免配送费",
									"extra_fee":"0.0",
									"is_extra":false,
									"no_subsidy_fee":"¥2.5",
									"rules":[
										{
											"fee":"0.0",
											"price":"17.0"
										}
									],
									"tips":"免配送费"
								},
								"platform":0,
								"posters":[

								],
								"promotion_info":"  感谢各位亲们长久以来的对我们门店的关照，如您对本店的服务、产品质量有任何意见或建议的，欢迎联系电话哦，我们一定尽心为您服务。再次感谢大家的支持和光顾！！！",
								"rating":4.5,
								"rating_count":2967,
								"recent_order_num":1564,
								"recommend":{
									"is_ad":false,
									"reason":""
								},
								"recommend_reasons":[
									{
										"name":"配送飞快"
									}
								],
								"regular_customer_count":0,
								"restaurant_info":null,
								"scheme":"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E13366852761861269375&o2o_extra_param=%7B%22rank_id%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%7D",
								"status":1,
								"support_tags":[
									{
										"border":"dddddd",
										"color":"666666",
										"icon":"4e20966ca2a516de3f02fb9c7fd1bc6dpng",
										"text":"其他快餐",
										"type":1
									}
								],
								"supports":[
									{
										"border":"dddddd",
										"description":"该商家支持开发票，请在下单时填写好发票抬头",
										"icon_color":"666666",
										"icon_name":"票",
										"id":4,
										"name":"开发票",
										"text_color":"666666",
										"two_characters_icon_name":"发票"
									}
								],
								"target_tag_path":null,
								"theme":{
									"default_color":"2395ff",
									"header_style":3,
									"hongbao_style":0,
									"logo_sub":null,
									"price_color":"ff5339",
									"third_tab_name":"商家",
									"vanish_fields":[

									]
								},
								"type":0
							}
						},
						{
							"restaurant":{
								"act_tag":0,
								"activities":[
									{
										"attribute":"{29:{\"content\":\"8\",\"type\":1},59:{\"content\":\"20\",\"type\":1},99:{\"content\":\"40\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"满29元减8元，满59元减20元，满99元减40元",
										"icon_color":"f07373",
										"icon_name":"减",
										"id":24401436203,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"满减优惠",
										"text_color":"#FF4B33",
										"tips":"满29元减8元，满59元减20元，满99元减40元",
										"type":102
									},
									{
										"attribute":"{0:{\"content\":\"6\",\"type\":7}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"配送费立减6元",
										"icon_color":"70bc46",
										"icon_name":"配",
										"id":24465558707,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"配送费优惠",
										"text_color":"#FF4B33",
										"tips":"配送费立减6元",
										"type":901
									},
									{
										"attribute":"{0:{\"content\":\"19.9\",\"type\":4}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"特价商品19.9元起",
										"icon_color":"f1884f",
										"icon_name":"特",
										"id":24480791723,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"特价商品",
										"text_color":"#FF4B33",
										"tips":"特价商品19.9元起",
										"type":502
									},
									{
										"attribute":"{0:{\"content\":\"0.6\",\"type\":2}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"折扣商品6折起",
										"icon_color":"3cc791",
										"icon_name":"折",
										"id":24481109539,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"折扣优惠",
										"text_color":"#FF4B33",
										"tips":"折扣商品6折起",
										"type":501
									}
								],
								"address":null,
								"authentic_id":501172014,
								"average_cost":null,
								"baidu_id":null,
								"bidding":null,
								"brand_id":741162,
								"business_info":"{\"pickup_scheme\":\"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E10804539539763553458\",\"ad_info\":{\"isAd\":\"false\"},\"recent_order_num_display\":\"月售215\"}",
								"closing_count_down":15055,
								"delivery_fee_discount":"6.0",
								"delivery_mode":null,
								"description":"",
								"distance":2296,
								"favor_time":null,
								"favored":false,
								"flavors":[
									{
										"id":240,
										"name":"奶茶果汁"
									},
									{
										"id":242,
										"name":"咖啡"
									}
								],
								"float_delivery_fee":"0.0",
								"float_minimum_order_amount":"25.0",
								"folding_restaurant_brand":null,
								"folding_restaurants":[

								],
								"has_story":false,
								"id":"E10804539539763553458",
								"image_path":"72A3BCE61B984412848BCC34C0ED4B53jpeg",
								"is_new":false,
								"is_premium":true,
								"is_star":false,
								"is_stock_empty":0,
								"is_valid":1,
								"latitude":34.769536,
								"longitude":113.766007,
								"max_applied_quantity_per_order":-1,
								"name":"瑞幸咖啡luckin coffee(郑州绿地新都会店)",
								"next_business_time":"明天 8:00",
								"only_use_poi":null,
								"opening_hours":[
									"8:00/19:00"
								],
								"order_lead_time":39,
								"out_of_range":false,
								"phone":null,
								"piecewise_agent_fee":{
									"description":"免配送费",
									"extra_fee":"0.0",
									"is_extra":false,
									"no_subsidy_fee":"¥6",
									"rules":[
										{
											"fee":"0.0",
											"price":"25.0"
										}
									],
									"tips":"免配送费"
								},
								"platform":0,
								"posters":[

								],
								"promotion_info":"开票相关：请扫小票二维码开具发票，也可用订单手机号登陆瑞幸咖啡小程序开票。对开票及订单有任何疑问请拨打客服电话4000-100-100。杨枝甘露系列上新！大颗杨枝甘露等新品热卖中~瑞幸咖啡是中国知名连锁咖啡品牌；瑞幸咖啡豆连续3年荣获IIAC国际咖啡品鉴大赛金奖；WBC冠军拼配。",
								"rating":4.7,
								"rating_count":51,
								"recent_order_num":215,
								"recommend":{
									"is_ad":false,
									"reason":""
								},
								"recommend_reasons":[

								],
								"regular_customer_count":0,
								"restaurant_info":null,
								"scheme":"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E10804539539763553458&o2o_extra_param=%7B%22rank_id%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%7D",
								"status":1,
								"support_tags":[
									{
										"border":"dddddd",
										"color":"666666",
										"icon":"4e20966ca2a516de3f02fb9c7fd1bc6dpng",
										"text":"奶茶果汁",
										"type":1
									}
								],
								"supports":[
									{
										"border":"dddddd",
										"description":"该商家支持开发票，请在下单时填写好发票抬头",
										"icon_color":"666666",
										"icon_name":"票",
										"id":4,
										"name":"开发票",
										"text_color":"666666",
										"two_characters_icon_name":"发票"
									}
								],
								"target_tag_path":"d53fc0cb4dc67973038cbc591938a1b6png",
								"theme":{
									"default_color":"2395ff",
									"header_style":3,
									"hongbao_style":0,
									"logo_sub":null,
									"price_color":"ff5339",
									"third_tab_name":"商家",
									"vanish_fields":[

									]
								},
								"type":0
							}
						},
						{
							"restaurant":{
								"act_tag":0,
								"activities":[
									{
										"attribute":"{28:{\"content\":\"2.00\",\"type\":1},38:{\"content\":\"5.00\",\"type\":1},58:{\"content\":\"8.00\",\"type\":1},88:{\"content\":\"10.00\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"满28元减2元，满38元减5元，满58元减8元，满88元减10元",
										"icon_color":"f07373",
										"icon_name":"减",
										"id":24320067619,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"满减优惠",
										"text_color":"#FF4B33",
										"tips":"满28元减2元，满38元减5元，满58元减8元，满88元减10元",
										"type":102
									},
									{
										"attribute":"{0:{\"content\":\"3\",\"type\":7}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"配送费立减3元",
										"icon_color":"70bc46",
										"icon_name":"配",
										"id":24294330379,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"配送费优惠",
										"text_color":"#FF4B33",
										"tips":"配送费立减3元",
										"type":901
									},
									{
										"attribute":"{0:{\"content\":\"1.0\",\"type\":1}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"首次光顾本店立减1元",
										"icon_color":"70bc46",
										"icon_name":"首",
										"id":24347526619,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"首单立减",
										"text_color":"#FF4B33",
										"tips":"首次光顾本店立减1元",
										"type":108
									},
									{
										"attribute":"{0:{\"content\":\"15.99\",\"type\":4}}",
										"background":{
											"rgb_from":"#FFFFFF",
											"rgb_to":"#FFFFFF"
										},
										"border":"#FFC9C1",
										"description":"特价商品15.99元起",
										"icon_color":"f1884f",
										"icon_name":"特",
										"id":24274282803,
										"image_hash":null,
										"is_exclusive_with_food_activity":true,
										"is_top":null,
										"name":"特价商品",
										"text_color":"#FF4B33",
										"tips":"特价商品15.99元起",
										"type":502
									}
								],
								"address":null,
								"authentic_id":169655097,
								"average_cost":null,
								"baidu_id":null,
								"bidding":null,
								"brand_id":null,
								"business_info":"{\"pickup_scheme\":\"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E2449067316671104906\",\"ad_info\":{\"isAd\":\"false\"},\"recent_order_num_display\":\"月售350\"}",
								"closing_count_down":18655,
								"delivery_fee_discount":"3.0",
								"delivery_mode":{
									"border":"",
									"color":"2395FF",
									"gradient":{
										"rgb_from":"00a6ff",
										"rgb_to":"00a6ff"
									},
									"icon_hash":"b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
									"id":1,
									"is_solid":true,
									"text":"蜂鸟专送",
									"text_color":"FFFFFF"
								},
								"description":"",
								"distance":2798,
								"favor_time":null,
								"favored":false,
								"flavors":[
									{
										"id":762,
										"name":"面馆"
									}
								],
								"float_delivery_fee":0.5,
								"float_minimum_order_amount":"15.0",
								"folding_restaurant_brand":null,
								"folding_restaurants":[

								],
								"has_story":false,
								"id":"E2449067316671104906",
								"image_path":"d012549fd8e2351a1d943ffc12e97e4fjpeg",
								"is_new":false,
								"is_premium":false,
								"is_star":false,
								"is_stock_empty":0,
								"is_valid":1,
								"latitude":34.756932,
								"longitude":113.772794,
								"max_applied_quantity_per_order":-1,
								"name":"郏县饸饹面",
								"next_business_time":"明天 10:40",
								"only_use_poi":null,
								"opening_hours":[
									"10:40/20:00"
								],
								"order_lead_time":31,
								"out_of_range":false,
								"phone":null,
								"piecewise_agent_fee":{
									"description":"配送¥0.5",
									"extra_fee":0.5,
									"is_extra":true,
									"no_subsidy_fee":"¥3.5",
									"rules":[
										{
											"fee":0.5,
											"price":"15.0"
										}
									],
									"tips":"配送¥0.5"
								},
								"platform":0,
								"posters":[

								],
								"promotion_info":"本店的面和汤是分离的，高汤是纯羊骨熬制的，欢迎光临！",
								"rating":4.1,
								"rating_count":265,
								"recent_order_num":350,
								"recommend":{
									"is_ad":false,
									"reason":""
								},
								"recommend_reasons":[
									{
										"name":"配送飞快"
									}
								],
								"regular_customer_count":0,
								"restaurant_info":null,
								"scheme":"https://tb.ele.me/wow/a/act/eleme/dailygroup/682/wupr?wh_pid=daily-186737&id=E2449067316671104906&o2o_extra_param=%7B%22rank_id%22%3A%221e3385f8a5db481a9cc0dc150625e0c9%22%7D",
								"status":1,
								"support_tags":[
									{
										"border":"dddddd",
										"color":"666666",
										"icon":"4e20966ca2a516de3f02fb9c7fd1bc6dpng",
										"text":"面馆",
										"type":1
									}
								],
								"supports":[
									{
										"border":"dddddd",
										"description":"该商户食品安全已由国泰产险承担，食品安全有保障",
										"icon_color":"666666",
										"icon_name":"保",
										"id":7,
										"name":"食无忧",
										"text_color":"666666",
										"two_characters_icon_name":"保险"
									},
									{
										"border":"dddddd",
										"description":"该商家支持开发票，请在下单时填写好发票抬头",
										"icon_color":"666666",
										"icon_name":"票",
										"id":4,
										"name":"开发票",
										"text_color":"666666",
										"two_characters_icon_name":"发票"
									},
									{
										"border":"dddddd",
										"description":"退款在订单配送前可免费享受",
										"icon_color":"666666",
										"icon_name":"退",
										"id":14,
										"name":"极速退",
										"text_color":"666666",
										"two_characters_icon_name":""
									}
								],
								"target_tag_path":null,
								"theme":{
									"default_color":"2395ff",
									"header_style":3,
									"hongbao_style":0,
									"logo_sub":null,
									"price_color":"ff5339",
									"third_tab_name":"商家",
									"vanish_fields":[

									]
								},
								"type":0
							}
						}
					],
					"meta":{
						"rankId":"1e3385f8a5db481a9cc0dc150625e0c9",
						"rankType":{
							"2086576303":"8"
						}
					}
				}
			}
		},
		onLoad() {
			console.log(123,db)
			db.collection('user').get().then(res=> {
				console.log(res)
			}).catch(err=> {
				console.log(err)
			})
		},
		methods: {
			playVoice() {  
				console.log('播放录音');  
				innerAudioContext.src = 'http://www.test-demo.club/video/gz/success.mp3';  
				innerAudioContext.play();  
			},    
			download(url) {
				uni.downloadFile({
				    url: "https://img0.baidu.com/it/u=3571233118,1041569388&fm=11&fmt=auto&gp=0.jpg",
				    // tempFilePath: '/tmp/test/storage/my-photo.png'
					success: function(res) {
						console.log(22220,res)
					},
					fail: function(err){
						console.log(err)
					}
				});
			},
			create() {
				db.createCollection("table1")
			},
			del() {
				db.collection('user').where({
					"id": 2
				}).remove().then(res=> {
					console.log(res)
				}).catch(err=> {
					console.log(err)
				})
			},
			jump(i,price) {
				var num=i+1
				uni.navigateTo({
					url: '../shop/shop?id='+num+'&price='+price
				})
			},
			change() {
				db.collection('user').where({
					"id": 1
				}).update({
					"name": "王五",
					"age": 50
				}).then(res=> {
					console.log(res)
				}).catch(err=> {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.tags {
		display: inline-block;
		border: 1rpx solid #eee;
		color: #666;
		font-size: 24rpx;
		padding: 0 4rpx;
		margin-top: 15rpx;
	}
	.store-price {
		display: flex;
		justify-content: space-between;
		margin-top: 15rpx;
	}
	.start-price {
		color: #666;
		font-size: 24rpx;
	}
	.store-time {
		color: #999;
		font-size: 24rpx;
	}
	.store-star {
		margin-top: 15rpx;
	}
	.store-name {
		color: #333;;
		font-size: 30rpx;
		font-weight: bold;
	}
	.store-star {
		display: flex;
		justify-content: space-between;
	}
	.owner-send {
		color: #fff;
		font-size: 24rpx;
		padding: 0 4rpx;
		border-radius: 4rpx;
		background-image: linear-gradient(45deg, #0085ff, #0af);
	}
	.star-left {
		color: #666;
		font-size: 24rpx;
	}
	.store-list {
		display: flex;
		padding: 30rpx 20rpx;
		border-bottom: 1rpx solid #eee;
	}
	.store-list image {
		flex: 0 0 140rpx;
		width: 140rpx;
		border: 2rpx solid #eee;
	}
	.store-text {
		flex: 1;
		margin-left: 20rpx;
	}
	.list-tab {
		display: flex;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
	}
	.list-item {
		flex: 1;
		text-align: center;
		color: #666;
		font-size: 28rpx;
	}
	.lists {
		margin-top: 40rpx;
	}
	.lists-title {
		position: relative;
		color: #333;
		font-size: 30rpx;
		text-align: center;
	}
	.lists-title:before {
		display: inline-block;
		content: '一一';
		font-size: 20rpx;
		color: #999;
		margin-right: 20rpx;
	} 
	.lists-title:after {
		display: inline-block;
		content: '一一';
		font-size: 20rpx;
		color: #999;
		margin-left: 20rpx;
	} 
	.vip {
		display: flex;
		background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
		padding: 20rpx;
		align-items: center;
		margin-top: 10rpx;
	}
	.text1 {
		display: inline-block;
		margin-right: 10rpx;
		color: #333;
		font-size: 28rpx;
		font-weight: bold;
	}
	.text2 {
		color: #333;
		font-size: 24rpx;
	}
	.text3 {
		margin-left: auto;
		color: #333;
		font-size: 24rpx;
	}
	.vip image {
		width: 35rpx;
	}
	.banner_text text:nth-of-type(1) {
		color: #333;
		font-size: 34rpx;
		font-weight: bold;
	}
	.banner_text text:nth-of-type(2) {
		color: #666;
		font-size: 26rpx;
		margin: 10rpx 0 15rpx 0;
	}
	.banner_text text:nth-of-type(3) {
		color: #af8260;
		font-size: 23rpx;
		font-weight: bold;
	}
	.banner image {
		width: 300rpx;
	}
	.banner {
		display: flex;
		background: -webkit-linear-gradient(bottom,#f4f4f4 5%,#fafafa 95%);
		padding: 30rpx 30rpx 15rpx 30rpx;
		justify-content: space-between;
	}
	.banner_text text {
		display: block;
	}
	.main {
		margin-top: 40rpx;
		padding: 0 20rpx;
	}
	.top-nav {
		width: 100%;
		margin: auto;
		padding: 40rpx 20rpx 18rpx 20rpx;
		background-image: linear-gradient(90deg,#0af,#0085ff);
		box-sizing: border-box;
	}
	.location image {
		width: 30rpx;
		height: 30rpx;
	}
	.location text {
		display: inline-block;
		margin-left: 10rpx;
		color: #fff;
		font-size: 34rpx;
		font-weight: bold;
	}
	.top-nav input {
		background: #fff;
		height: 70rpx;
		margin: 30rpx 0 0 0;
		text-align: center;
		color: #999;
		font-size: 30rpx;
	}
	.menu {
		display: flex;
		flex-wrap: wrap;
	}
	.menu-items {
		width: 20%;
		padding: 15rpx 30rpx;
		box-sizing: border-box;
		text-align: center;
	}
	.menu-items image {
		width: 100%;
	}
	.menu-items text {
		display: block;
		color: #666;
		font-size: 24rpx;
	}
</style>
