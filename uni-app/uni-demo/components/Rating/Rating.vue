<template>
	<view class="rating">
		<view class="rating-num">
			<text style="color: #ff6000; font-size: 70rpx">4.5</text>
			<view class="star" style="padding-left: 20rpx;">
				<text>商家评分</text>
				<view style="text-align: center;">
					<uni-rate style="display:inline-block;" size="12" allow-half :readonly="true" :value="4.5" />
				</view>
			</view>
			<view class="delicious">
				<text>味道</text>
				<text>4.5</text>
			</view>
			<view class="package">
				<text>包装</text>
				<text>4.4</text>
			</view>
			<view class="send">
				<text>配送</text>
				<text>4.8</text>
			</view>
		</view>
		<view class="rating-list">
			<view class="rating-header">
				<view class="rating-sort">
					全部3716
				</view>
				<view class="rating-sort">
					最新
				</view>
				<view class="rating-sort">
					有图/视频230
				</view>
			</view>
			<!-- <uni-popup ref="popup" type="center" :mask-click="true">
				<view class="close" @click="close">×</view>
				<view class="images">
					<image :src="url" mode="widthFix"></image>
				</view>
			</uni-popup> -->
			<view class="close" @click="close">×</view>
			<view class="pad" style="padding: 0 30rpx">
				<label class="radio"><radio value="r1" color="#38CA73" style="transform:scale(0.5);" />只看有内容的评价</label>
				<view class="rate-item" v-for="(item, index) in obj.comments" :key="index">
					<image class="rate-avatar" src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_60,h_60,m_fixed" mode="widthFix"></image>
					<view class="rate-rig">
						<view class="rate-title">
							<text>{{item.username}}</text>
							<text>{{item.rated_at}}</text>
						</view>
						<view class="rate-star">
							<uni-rate allow-half :readonly="true" :value="item.rating" size="12" />超赞
						</view>
						<text style="color: #5082b1; display: block; font-size: 28rpx;">{{item.rating_text}}</text>
						<image @click="preview" class="rate-img" :src="item.order_images.length>0?item.order_images[0].image_hash:'https://cube.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?x-oss-process=image/format,webp/resize,w_300'" mode="widthFix"></image>
					
						<!-- <button @click="preview">预览图片</button> -->
					</view>
					
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr: [],
				url: '',
				obj: {
					"comments": [
						{
							"avatar": "c6b8384f98b8dedfd87fc1450926648cjpeg",
							"food_ratings": [
								{
									"food_id": 647527486,
									"rate_name": "葱花油饼-1张",
									"rating": "쐼",
									"rating_text": "精品胡辣汤 葱花油饼-1张 牛肉盒-半个 花花牛袋装酸奶 精品胡辣汤 葱花油饼-1张 牛肉盒-半个 牛肉盒-半个 花花牛袋装酸奶 ",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 263428145277,
									"sku_id_str": "263428145277",
									"tags": null
								},
								{
									"food_id": 1815072572,
									"rate_name": "牛肉盒-半个",
									"rating": "쐼",
									"rating_text": "精品胡辣汤 葱花油饼-1张 牛肉盒-半个 花花牛袋装酸奶 精品胡辣汤 葱花油饼-1张 牛肉盒-半个 牛肉盒-半个 花花牛袋装酸奶 ",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298522240,
									"sku_id_str": "100000145298522237",
									"tags": null
								},
								{
									"food_id": 647536938,
									"rate_name": "花花牛袋装酸奶",
									"rating": "쐼",
									"rating_text": "精品胡辣汤 葱花油饼-1张 牛肉盒-半个 花花牛袋装酸奶 精品胡辣汤 葱花油饼-1张 牛肉盒-半个 牛肉盒-半个 花花牛袋装酸奶 ",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 263437824125,
									"sku_id_str": "263437824125",
									"tags": null
								},
								{
									"food_id": 647549906,
									"rate_name": "甜豆腐脑",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 263451103357,
									"sku_id_str": "263451103357",
									"tags": null
								},
								{
									"food_id": 649430572,
									"rate_name": "精品胡辣汤",
									"rating": "쐼",
									"rating_text": "精品胡辣汤 葱花油饼-1张 牛肉盒-半个 花花牛袋装酸奶 精品胡辣汤 葱花油饼-1张 牛肉盒-半个 牛肉盒-半个 花花牛袋装酸奶 ",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265376905341,
									"sku_id_str": "265376905341",
									"tags": null
								},
								{
									"food_id": 650645583,
									"rate_name": "煎包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621076605,
									"sku_id_str": "266621076605",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {
								"牛肉盒-半个": 100000145298522240,
								"精品胡辣汤": 265376905341,
								"花花牛袋装酸奶": 263437824125,
								"葱花油饼-1张": 263428145277
							},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [
								{
									"associatedItems": null,
									"food_ids": [],
									"food_indexes": null,
									"food_names": [],
									"image_hash": "https://img.alicdn.com/imgextra/i3/6000000003827/O1CN01LV2W2S1e8oQ4OWCFr_!!6000000003827-0-alscpicture.jpg",
									"sku_ids": []
								}
							],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15708824825,
							"rated_at": "얏븩얏웉읫븩쐼읫븩",
							"rating": 5,
							"rating_text": "精品胡辣汤 葱花油饼-1张 牛肉盒-半个 花花牛袋装酸奶 精品胡辣汤 葱花油饼-1张 牛肉盒-半个 牛肉盒-半个 花花牛袋装酸奶 ",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "按时送达",
							"username": "3***b"
						},
						{
							"avatar": "c6b8384f98b8dedfd87fc1450926648cjpeg",
							"food_ratings": [
								{
									"food_id": 1815072572,
									"rate_name": "牛肉盒-半个",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298522240,
									"sku_id_str": "100000145298522237",
									"tags": null
								},
								{
									"food_id": 1815108022,
									"rate_name": "葱花油饼-半张",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298611330,
									"sku_id_str": "100000145298611325",
									"tags": null
								},
								{
									"food_id": 649430572,
									"rate_name": "精品胡辣汤",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265376905341,
									"sku_id_str": "265376905341",
									"tags": null
								},
								{
									"food_id": 650645583,
									"rate_name": "煎包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621076605,
									"sku_id_str": "266621076605",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": true,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [
								{
									"associatedItems": [
										{
											"foodId": 649430572,
											"index": null,
											"name": "精品胡辣汤",
											"position": null,
											"skuId": 265376905341
										}
									],
									"food_ids": [
										649430572
									],
									"food_indexes": null,
									"food_names": [
										"精品胡辣汤"
									],
									"image_hash": "5dc1524fffc24f36436c34f56f15fa07jpeg",
									"sku_ids": [
										265376905341
									]
								}
							],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15937111499,
							"rated_at": "얏븩얏웉읫븩쐼읫웉븩",
							"rating": 5,
							"rating_text": "不错不错，送的很快，味道不错",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "30分钟送达",
							"username": "3***7"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								},
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [
								{
									"associatedItems": null,
									"food_ids": [],
									"food_indexes": null,
									"food_names": [],
									"image_hash": "https://img.alicdn.com/imgextra/i2/6000000004018/O1CN01n6opqh1fYI4LLlEuK_!!6000000004018-0-alscpicture.jpg",
									"sku_ids": []
								}
							],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15895079856,
							"rated_at": "얏븩얏웉읫븩쐼읫븩샵",
							"rating": 5,
							"rating_text": "记不清几次回购了鱼真的很新鲜 一如既往的好吃😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋😋",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "按时送达",
							"username": "匿名用户"
						},
						{
							"avatar": "c6b8384f98b8dedfd87fc1450926648cjpeg",
							"food_ratings": [
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								},
								{
									"food_id": 649439315,
									"rate_name": "优质胡辣汤",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265385858173,
									"sku_id_str": "265385858173",
									"tags": null
								},
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								},
								{
									"food_id": 647527486,
									"rate_name": "葱花油饼-1张",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 263428145277,
									"sku_id_str": "263428145277",
									"tags": null
								},
								{
									"food_id": 650645561,
									"rate_name": "牛肉盒-1个",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621054077,
									"sku_id_str": "266621054077",
									"tags": null
								},
								{
									"food_id": 650645583,
									"rate_name": "煎包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621076605,
									"sku_id_str": "266621076605",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": false,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15225165991,
							"rated_at": "얏븩얏웉읫븩읫븩",
							"rating": 5,
							"rating_text": "食品包装完整，小哥送餐及时，味道不错，还会再光顾。",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "按时送达",
							"username": "e***3"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								},
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [
								{
									"associatedItems": null,
									"food_ids": [],
									"food_indexes": null,
									"food_names": [],
									"image_hash": "https://img.alicdn.com/imgextra/i2/6000000005972/O1CN01ZzIkOc1tzDyM9eMtv_!!6000000005972-0-alscpicture.jpg",
									"sku_ids": []
								}
							],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15121395568,
							"rated_at": "얏븩얏웉읫븩읫얏븩",
							"rating": 5,
							"rating_text": "鱼很新鲜看这鱼 包子吃的也很有味道 赞 下次还来买的下次还来买的",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "按时送达",
							"username": "匿名用户"
						},
						{
							"avatar": "c6b8384f98b8dedfd87fc1450926648cjpeg",
							"food_ratings": [
								{
									"food_id": 650645561,
									"rate_name": "牛肉盒-1个",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621054077,
									"sku_id_str": "266621054077",
									"tags": null
								},
								{
									"food_id": 649439315,
									"rate_name": "优质胡辣汤",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265385858173,
									"sku_id_str": "265385858173",
									"tags": null
								},
								{
									"food_id": 1735224888,
									"rate_name": "有机鸡蛋",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000063376494720,
									"sku_id_str": "100000063376494717",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [
								{
									"associatedItems": [
										{
											"foodId": 650645561,
											"index": null,
											"name": "牛肉盒-1个",
											"position": null,
											"skuId": 266621054077
										},
										{
											"foodId": 1735224888,
											"index": null,
											"name": "有机鸡蛋",
											"position": null,
											"skuId": 100000063376494720
										},
										{
											"foodId": 649439315,
											"index": null,
											"name": "优质胡辣汤",
											"position": null,
											"skuId": 265385858173
										}
									],
									"food_ids": [
										650645561,
										1735224888,
										649439315
									],
									"food_indexes": null,
									"food_names": [
										"牛肉盒-1个",
										"有机鸡蛋",
										"优质胡辣汤"
									],
									"image_hash": "38d10a4fe464f6c66c66cf631d824aafjpeg",
									"sku_ids": [
										266621054077,
										100000063376494720,
										265385858173
									]
								}
							],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 14965011834,
							"rated_at": "얏븩얏웉읫븩읫븩춀",
							"rating": 5,
							"rating_text": "嗯嗯嗯嗯嗯嗯嗯好吃好吃啊啊啊啊啊啊哦哦了",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "40分钟送达",
							"username": "e***1"
						},
						{
							"avatar": "c6b8384f98b8dedfd87fc1450926648cjpeg",
							"food_ratings": [
								{
									"food_id": 1815108022,
									"rate_name": "葱花油饼-半张",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298611330,
									"sku_id_str": "100000145298611325",
									"tags": null
								},
								{
									"food_id": 649439315,
									"rate_name": "优质胡辣汤",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265385858173,
									"sku_id_str": "265385858173",
									"tags": null
								},
								{
									"food_id": 647549906,
									"rate_name": "甜豆腐脑",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 263451103357,
									"sku_id_str": "263451103357",
									"tags": null
								},
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": false,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15170038124,
							"rated_at": "얏븩얏웉읫븩읫얏밃",
							"rating": 5,
							"rating_text": "味道一如既往的好。",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "40分钟送达",
							"username": "4***3"
						},
						{
							"avatar": "44b8f8ed490c6099724afc86f6aef049jpeg",
							"food_ratings": [
								{
									"food_id": 1815108022,
									"rate_name": "葱花油饼-半张",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298611330,
									"sku_id_str": "100000145298611325",
									"tags": null
								},
								{
									"food_id": 649430572,
									"rate_name": "精品胡辣汤",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265376905341,
									"sku_id_str": "265376905341",
									"tags": null
								},
								{
									"food_id": 647532457,
									"rate_name": "加卤豆腐脑",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 263433235581,
									"sku_id_str": "263433235581",
									"tags": null
								},
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": true,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15002787017,
							"rated_at": "얏븩얏웉읫븩읫웉얏",
							"rating": 5,
							"rating_text": "很好吃",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "按时送达",
							"username": "H***1"
						},
						{
							"avatar": "c6b8384f98b8dedfd87fc1450926648cjpeg",
							"food_ratings": [
								{
									"food_id": 1815108022,
									"rate_name": "葱花油饼-半张",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298611330,
									"sku_id_str": "100000145298611325",
									"tags": null
								},
								{
									"food_id": 1815072572,
									"rate_name": "牛肉盒-半个",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298522240,
									"sku_id_str": "100000145298522237",
									"tags": null
								},
								{
									"food_id": 650645583,
									"rate_name": "煎包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621076605,
									"sku_id_str": "266621076605",
									"tags": null
								},
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								},
								{
									"food_id": 649439315,
									"rate_name": "优质胡辣汤",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265385858173,
									"sku_id_str": "265385858173",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": false,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 14382269591,
							"rated_at": "얏븩얏웉읫븩얏읫븩샵",
							"rating": 5,
							"rating_text": "不赖",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "50分钟送达",
							"username": "4***7"
						},
						{
							"avatar": "c6b8384f98b8dedfd87fc1450926648cjpeg",
							"food_ratings": [
								{
									"food_id": 650645583,
									"rate_name": "煎包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621076605,
									"sku_id_str": "266621076605",
									"tags": null
								},
								{
									"food_id": 1735224888,
									"rate_name": "有机鸡蛋",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000063376494720,
									"sku_id_str": "100000063376494717",
									"tags": null
								},
								{
									"food_id": 1978750164,
									"rate_name": "筷子包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000312851214460,
									"sku_id_str": "100000312851214461",
									"tags": null
								},
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								},
								{
									"food_id": 649439315,
									"rate_name": "优质胡辣汤",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265385858173,
									"sku_id_str": "265385858173",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": false,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [
								{
									"associatedItems": [
										{
											"foodId": 1735224888,
											"index": null,
											"name": "有机鸡蛋",
											"position": null,
											"skuId": 100000063376494720
										},
										{
											"foodId": 650637362,
											"index": null,
											"name": "素包",
											"position": null,
											"skuId": 266612658301
										},
										{
											"foodId": 650645583,
											"index": null,
											"name": "煎包",
											"position": null,
											"skuId": 266621076605
										},
										{
											"foodId": 649439315,
											"index": null,
											"name": "优质胡辣汤",
											"position": null,
											"skuId": 265385858173
										},
										{
											"foodId": 1978750164,
											"index": null,
											"name": "筷子包",
											"position": null,
											"skuId": 100000312851214460
										}
									],
									"food_ids": [
										1735224888,
										650637362,
										650645583,
										649439315,
										1978750164
									],
									"food_indexes": null,
									"food_names": [
										"有机鸡蛋",
										"素包",
										"煎包",
										"优质胡辣汤",
										"筷子包"
									],
									"image_hash": "f25d67fc01d34217d83df794e2909507jpeg",
									"sku_ids": [
										100000063376494720,
										266612658301,
										266621076605,
										265385858173,
										100000312851214460
									]
								}
							],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 13205409870,
							"rated_at": "얏븩얏웉읫븩웉읫븩밃",
							"rating": 5,
							"rating_text": "胡辣汤很好喝，包子也很好吃，超级喜欢，",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 3,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "40分钟送达",
							"username": "e***0"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 650645583,
									"rate_name": "煎包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621076605,
									"sku_id_str": "266621076605",
									"tags": null
								},
								{
									"food_id": 649439315,
									"rate_name": "优质胡辣汤",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265385858173,
									"sku_id_str": "265385858173",
									"tags": null
								},
								{
									"food_id": 1815108022,
									"rate_name": "葱花油饼-半张",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298611330,
									"sku_id_str": "100000145298611325",
									"tags": null
								},
								{
									"food_id": 647549906,
									"rate_name": "甜豆腐脑",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 263451103357,
									"sku_id_str": "263451103357",
									"tags": null
								},
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": true,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 1,
							"quality_rating": 3,
							"rateId": 15409482545,
							"rated_at": "얏븩얏웉읫븩읫웉웉",
							"rating": 2,
							"rating_text": "胡辣汤洒了 ",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 3,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "延误20分钟送达",
							"username": "匿名用户"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								},
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [
								{
									"associatedItems": null,
									"food_ids": [],
									"food_indexes": null,
									"food_names": [],
									"image_hash": "https://img.alicdn.com/imgextra/i2/6000000003362/O1CN01hlfqLf1ahqFLntRuH_!!6000000003362-0-alscpicture.jpg",
									"sku_ids": []
								}
							],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15483253891,
							"rated_at": "얏븩얏웉읫븩읫웉샵",
							"rating": 5,
							"rating_text": "️⚖️分量大小：  🧹是否卫生：  🥄味道好坏：  🥡餐盒包装： 时间就是计算看什么什么什么难兄难弟妈妈打美哒哒卡卡饭卡快发快发快发经济法买都买了冬练三九睡觉啊后期IE就不写开挖机忘记花洒",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "50分钟送达",
							"username": "匿名用户"
						},
						{
							"avatar": "251798faf61d1902603047ac89ddf6dajpeg",
							"food_ratings": [
								{
									"food_id": 1735224888,
									"rate_name": "有机鸡蛋",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000063376494720,
									"sku_id_str": "100000063376494717",
									"tags": null
								},
								{
									"food_id": 650645561,
									"rate_name": "牛肉盒-1个",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621054077,
									"sku_id_str": "266621054077",
									"tags": null
								},
								{
									"food_id": 649439315,
									"rate_name": "优质胡辣汤",
									"rating": "쐼",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265385858173,
									"sku_id_str": "265385858173",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [
								{
									"associatedItems": null,
									"food_ids": [],
									"food_indexes": null,
									"food_names": [],
									"image_hash": "https://img.alicdn.com/imgextra/i2/6000000003911/O1CN01qiI9sp1elHgYmdnc8_!!6000000003911-0-m_tb_svideo_preimg.jpg",
									"sku_ids": []
								}
							],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15446830611,
							"rated_at": "얏븩얏웉읫븩읫웉",
							"rating": 5,
							"rating_text": "🥡餐盒包装:  🥄味道好坏:  🧹是否卫生: ",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "40分钟送达",
							"username": "回***路"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 1815108022,
									"rate_name": "葱花油饼-半张",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298611330,
									"sku_id_str": "100000145298611325",
									"tags": null
								},
								{
									"food_id": 649439315,
									"rate_name": "优质胡辣汤",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265385858173,
									"sku_id_str": "265385858173",
									"tags": null
								},
								{
									"food_id": 1735224888,
									"rate_name": "有机鸡蛋",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000063376494720,
									"sku_id_str": "100000063376494717",
									"tags": null
								},
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": false,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 1,
							"quality_rating": 1,
							"rateId": 15409910688,
							"rated_at": "얏븩얏웉읫븩읫웉웉",
							"rating": 1,
							"rating_text": "这备注了要两掺  还是给胡辣汤   你要不就让能选两掺的    真是醉了",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "30分钟送达",
							"username": "匿名用户"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 650645561,
									"rate_name": "牛肉盒-1个",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621054077,
									"sku_id_str": "266621054077",
									"tags": null
								},
								{
									"food_id": 649430572,
									"rate_name": "精品胡辣汤",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265376905341,
									"sku_id_str": "265376905341",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 4,
							"quality_rating": 1,
							"rateId": 15477532699,
							"rated_at": "얏븩얏웉읫븩읫얏웉",
							"rating": 3,
							"rating_text": "绝了 9块钱的胡辣汤一块肉都没有",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "",
							"username": "匿名用户"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "쐼",
									"rating_text": "鱼很新鲜 多次在方中山买鱼了 不信你们看 新鲜不新鲜 送过来时候 鱼还是活的 活蹦乱跳的 很喜欢 爱了爱了 下次还来你家买鱼 ㊗️老板发大财羊肉包 素包 ",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								},
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "쐼",
									"rating_text": "鱼很新鲜 多次在方中山买鱼了 不信你们看 新鲜不新鲜 送过来时候 鱼还是活的 活蹦乱跳的 很喜欢 爱了爱了 下次还来你家买鱼 ㊗️老板发大财羊肉包 素包 ",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {
								"素包": 266612658301,
								"羊肉包": 266629997693
							},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [
								{
									"associatedItems": null,
									"food_ids": [],
									"food_indexes": null,
									"food_names": [],
									"image_hash": "https://img.alicdn.com/imgextra/i4/6000000003443/O1CN01dXyZz51bIwKXtJR4y_!!6000000003443-0-alscpicture.jpg",
									"sku_ids": []
								}
							],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 15544328404,
							"rated_at": "얏븩얏웉읫븩읫얏쐼",
							"rating": 5,
							"rating_text": "鱼很新鲜 多次在方中山买鱼了 不信你们看 新鲜不新鲜 送过来时候 鱼还是活的 活蹦乱跳的 很喜欢 爱了爱了 下次还来你家买鱼 ㊗️老板发大财羊肉包 素包 ",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "60分钟送达",
							"username": "匿名用户"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 1815108022,
									"rate_name": "葱花油饼-半张",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000145298611330,
									"sku_id_str": "100000145298611325",
									"tags": null
								},
								{
									"food_id": 650645583,
									"rate_name": "煎包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621076605,
									"sku_id_str": "266621076605",
									"tags": null
								},
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								},
								{
									"food_id": 649439315,
									"rate_name": "优质胡辣汤",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265385858173,
									"sku_id_str": "265385858173",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": true,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 1,
							"quality_rating": 1,
							"rateId": 15968246430,
							"rated_at": "얏븩얏웉읫븩쐼읫웉",
							"rating": 1,
							"rating_text": "商家私自换餐，点了3个羊肉包给换成了5个水煎包，差评",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "",
							"username": "匿名用户"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								},
								{
									"food_id": 649430572,
									"rate_name": "精品胡辣汤",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265376905341,
									"sku_id_str": "265376905341",
									"tags": null
								},
								{
									"food_id": 1735224888,
									"rate_name": "有机鸡蛋",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 100000063376494720,
									"sku_id_str": "100000063376494717",
									"tags": null
								},
								{
									"food_id": 650654435,
									"rate_name": "小米粥",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266630141053,
									"sku_id_str": "266630141053",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": true,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 3,
							"quality_rating": 1,
							"rateId": 15845888034,
							"rated_at": "얏븩얏웉읫븩쐼읫웉쐼",
							"rating": 2,
							"rating_text": "没有一块肉，胡椒不要钱，一天比一天辣",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "",
							"username": "匿名用户"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "쐼",
									"rating_text": "鱼很新鲜 到手时还活着呢 由此可见店家很有爱心 非常满意 下次买鱼还到你家买 全五星好评了哈 素包 羊肉包 ",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								},
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "쐼",
									"rating_text": "鱼很新鲜 到手时还活着呢 由此可见店家很有爱心 非常满意 下次买鱼还到你家买 全五星好评了哈 素包 羊肉包 ",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {
								"素包": 266612658301,
								"羊肉包": 266629997693
							},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": true,
							"is_taobao_vip": false,
							"orderVideos": [
								{
									"associatedItems": [
										{
											"foodId": 650637362,
											"index": null,
											"name": "素包",
											"position": null,
											"skuId": 266612658301
										},
										{
											"foodId": 650654295,
											"index": null,
											"name": "羊肉包",
											"position": null,
											"skuId": 266629997693
										}
									],
									"coverUrl": "https://img.alicdn.com/imgextra/i1/6000000001768/O1CN01oMawOs1OvmvBkcblA_!!6000000001768-0-alscpicture.jpg",
									"dynamicUrl": null,
									"fileId": null,
									"inReviewTips": null,
									"videoUrl": "http://koubei-auth.alicdn.com/e67294476cf76911/aus/alsc_wireless_daren_video/1035637455/5_1621037113.570595.mp4_310110054896_mp4_264_hd.mp4?auth_key=1622778423-0-0-ad31a714950347a0597f27be0585bbcf"
								}
							],
							"order_id": 0,
							"order_images": [],
							"package_rating": 5,
							"quality_rating": 5,
							"rateId": 16005703963,
							"rated_at": "얏븩얏웉읫븩쐼읫웉쐼",
							"rating": 5,
							"rating_text": "鱼很新鲜 到手时还活着呢 由此可见店家很有爱心 非常满意 下次买鱼还到你家买 全五星好评了哈 素包 羊肉包 ",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "按时送达",
							"username": "匿名用户"
						},
						{
							"avatar": null,
							"food_ratings": [
								{
									"food_id": 650637362,
									"rate_name": "素包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266612658301,
									"sku_id_str": "266612658301",
									"tags": null
								},
								{
									"food_id": 649430572,
									"rate_name": "精品胡辣汤",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 265376905341,
									"sku_id_str": "265376905341",
									"tags": null
								},
								{
									"food_id": 650645583,
									"rate_name": "煎包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266621076605,
									"sku_id_str": "266621076605",
									"tags": null
								},
								{
									"food_id": 650654295,
									"rate_name": "羊肉包",
									"rating": "",
									"rating_text": "",
									"reply": {
										"content": null,
										"created_at": null
									},
									"sku_id": 266629997693,
									"sku_id_str": "266629997693",
									"tags": null
								}
							],
							"highlights": null,
							"highlights_v2": {},
							"interactSwitch": 0,
							"interactionInfo": {
								"hasPraised": false,
								"praiseCount": 0
							},
							"isRepurchase": false,
							"is_myself": null,
							"is_myself_top": null,
							"is_super_vip": false,
							"is_taobao_vip": false,
							"orderVideos": [],
							"order_id": 0,
							"order_images": [],
							"package_rating": 2,
							"quality_rating": 4,
							"rateId": 15445715933,
							"rated_at": "얏븩얏웉읫븩읫웉븩",
							"rating": 3,
							"rating_text": "餐具两套，收到后只有一套。既然有选择餐具的选项，那么不执行是什么意思？包装费难道要退给我一半么？",
							"reply": {
								"content": null,
								"created_at": null
							},
							"rider_rating": 5,
							"selected_high_quality_rate_icon": null,
							"tags": null,
							"time_spent_desc": "",
							"username": "匿名用户"
						}
					],
					"rating": {
						"compare_rating": "븩얏쐼쐼춀쐼얏춀밃쐼샵",
						"deliver_time": "븩븩",
						"fixedCompareRating": "62.6%",
						"fixedFoodScore": "븩븩",
						"fixedPackageScore": "",
						"fixedRiderGoodRate": "92%",
						"fixedRiderScore": "샵",
						"fixedShopScore": "쐼",
						"fixedTasteScore": "쐼",
						"food_score": "븩븩",
						"item_good_score": "웉븩",
						"order_rating_amount": "밃웉",
						"overall_score": 4.5,
						"package_score": "",
						"rider_good_rate": 0.92955,
						"rider_score": "샵",
						"service_score": "쐼",
						"shop_score": 4.5,
						"taste_score": "쐼"
					},
					"tags": [
						{
							"count": 3716,
							"name": "全部",
							"tagIdentity": {
								"id": "全部",
								"type": 1
							},
							"unsatisfied": false
						},
						{
							"count": -1,
							"name": "最新",
							"tagIdentity": {
								"id": "最新",
								"type": 1
							},
							"unsatisfied": false
						},
						{
							"count": 3401,
							"name": "好评",
							"tagIdentity": {
								"id": "好评",
								"type": 1
							},
							"unsatisfied": false
						},
						{
							"count": 10,
							"name": "近期差评",
							"tagIdentity": {
								"id": "近期差评",
								"type": 1
							},
							"unsatisfied": true
						},
						{
							"count": 230,
							"name": "有图/视频",
							"tagIdentity": {
								"id": "有图/视频",
								"type": 1
							},
							"unsatisfied": false
						},
						{
							"count": 14,
							"name": "味道好",
							"tagIdentity": null,
							"unsatisfied": false
						}
					]
				}
			}
		},
		created() {
			var arr=[]
			for(var i=0; i<this.obj.comments.length; i++ ) {
				if(this.obj.comments[i].order_images.length>0) {
					if(this.obj.comments[i].order_images[0].image_hash.slice(-4)=='jpeg') {
						arr.push('https://cube.elemecdn.com/'+this.obj.comments[i].order_images[0].image_hash.slice(0,1)+'/'+this.obj.comments[i].order_images[0].image_hash.slice(1,3)+'/'+this.obj.comments[i].order_images[0].image_hash.slice(3)+'.jpeg')
					}else {
						arr.push(this.obj.comments[i].order_images[0].image_hash)
					}
				}else {
					arr.push('https://cube.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?x-oss-process=image/format,webp/resize,w_300')
				}
			}
			this.arr=arr
		},
		methods: {
			// open(url) {
			// 	console.log(7777,this)
				
			// },
			preview() {
				// this.url=url
				// this.$refs.popup.open()
				uni.previewImage({
					urls: [...this.arr],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('成功')
						},
						fail: function(err) {
							console.log('失败')
						}
					}
				});
				var system=document.getElementsByClassName('preview-image')[0]
				var div=document.createElement('div');
				div.setAttribute('class','close')
				div.setAttribute('style','position: fixed; color: #fff; font-size: 32px; right: 20px; top: 10px; z-index: 9999')
				var text=document.createTextNode('×');
				system.appendChild(div)
				div.appendChild(text)
				
				console.log(8888,system)
				
			}
		}
	}
</script>

<style>
.images {
	width: 100%;
}
.close {
	position: fixed;
	right: 20rpx;
	top: 20rpx;
	color: #fff;
	font-size: 50rpx;
}
/* .images image {
	width: 100%;
} */
.rate-img {
	width: 300rpx;
	height: 300rpx;
}
.rate-title {
	display: flex;
	justify-content: space-between;
	color: #666;
	font-size: 24rpx;
}
.rate-star {
	color: rgb(255, 96, 0);
	font-size: 24rpx;
}
.rate-item {
	display: flex;
	padding: 30rpx 0;
	border-bottom: 2rpx solid #eee;
}
.rate-avatar {
	flex: 0 0 60rpx;
	width: 60rpx;
	border-radius: 50%;
	margin-right: 20rpx;
}
.uni-radio .uni-radio-input {
	width: 20rpx !important;
	height: 20rpx !important;
}
.radio {
	display: block;
	height: 80rpx;
	line-height: 80rpx;
	color: #666;
	font-size: 28rpx;
	border-top: 2rpx solid #eee;
	border-bottom: 2rpx solid #eee;
}
.rating-header {
	display: flex;
	flex-wrap: wrap;
	padding: 30rpx;
} 
.rating-sort {
	height: 56rpx;
	line-height: 56rpx;
	padding: 0 20rpx;
	background: #ebf5ff;
	margin-right: 20rpx;
	color: #666;
	font-size: 24rpx;
}
.rating-num {
	display: flex;
	padding: 20rpx 0 40rpx 30rpx;
	align-items: center;
	border-bottom: 20rpx solid #f5f5f5;
}
.rating-num view {
	flex: 1;
}
.rating-num text {
	display: block;
	text-align: center;
}
.rating-num view text:nth-of-type(1) {
	color: #666;
	font-size: 24rpx;
}
.rating-num view text:nth-of-type(2) {
	margin-top: 10rpx;
	color: #666;
	font-size: 36rpx;
}
</style>
