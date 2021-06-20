<template>
	<view class="map">
		<view class="input-text">
			<input type="text" value="" v-model="val" @focus="getFocus"/>
			<text @click="search()">搜索</text>
		</view>
		<view class="search-list">
			<view class="items" v-for="(tip, index) in tips" :key="index" @click="getList(tip)">
				{{tip.name}}
			</view>
		</view>
		<map class="map_container" :longitude="longitude" :latitude="latitude" :markers="covers"></map>
	</view>
</template>


<script>
	import amapFile from '../../libs/amap-wx.js'
	export default {
		data() {
			return {
				covers: [{
						latitude: 0,
						longitude: 0,
						iconPath: '../../static/img/index.png'
					},
				],
				val: '',
				latitude: 0,
				longitude: 0,
				tips: [],
				num: 0
			}
		},
		watch: {
			'val': function(val, oldVal) {
				var that=this
				// that.show=true
				var myAmapFun = new amapFile.AMapWX({key: 'a368c271fc2efa98d29fa61ee4b47c78'});
				if(that.num==0) {
					myAmapFun.getInputtips({
					  keywords: val,
					  success: function(data){
						console.log(data.tips)
						that.tips=data.tips
						
					  }
					})
				}
			}
		},
		onLoad() {
			// uni.getLocation({
			// 	type: 'wgs84',
			// 	success(res) {
			// 		console.log(123,res)
			// 	}
			// })
			var that = this;
			var myAmapFun = new amapFile.AMapWX({
				key: 'a368c271fc2efa98d29fa61ee4b47c78'
			});
			myAmapFun.getRegeo({
				type: 'gcj02', //map 组件使用的经纬度是国测局坐标， type 为 gcj02
				success: function(res) {
					const latitude = res[0].latitude;
					const longitude = res[0].longitude;
					that.longitude = longitude;
					that.latitude = latitude;
					that.mapInfo = res[0];
					console.log(77777,res[0].latitude)
				},

				fail: (res) => {
					console.log(JSON.stringify(res));
				}

			});


		},
		methods: {
			getFocus() {
				this.num=0
			},
			getList(data) {
				console.log(789,data)
				this.val=data.name
				this.longitude=data.location.split(',')[0]
				this.latitude=data.location.split(',')[1]
				this.covers=[
					{
						longitude:data.location.split(',')[0],
						latitude:data.location.split(',')[1],
						iconPath:'../../static/img/location.png',
						width: 50,
						height: 50
					}
				]
				this.tips=[]
				this.num=1
				uni.navigateTo({
					url: '../order/order?name='+JSON.stringify(data)
				})
			}
		}
	}
</script>

<style>
	.search-list {
		position: absolute;
		top: 90rpx;
		z-index: 99;
		left: 5%;
		background-color: #fff;
		width: 69%;
		
	}
	.items {
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
		border-bottom: 2rpx solid #eee;
	}
	.input-text {
		display: flex;
		justify-content: space-between;
	}
	.input-text input {
		width: 77%;
		height: 75rpx;
		line-height: 75rpx;
		background: #fff;
		border-radius: 12rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
	}
	.input-text text {
		display: block;
		height: 75rpx;
		line-height: 75rpx;
		width: 20%;
		text-align: center;
		color: #fff;
		background-color: #007AFF;
		border-radius: 12rpx;
	}
	.input-text {
		position: absolute;
		width: 90%;
		height: auto;
		top: 20rpx;
		left: 5%;
		z-index: 99;
	}
	.map {
		position: relative;
		width: 100%;
		height: 100vh;
	}
	uni-map {
		width: 100%;
		height: 100vh;
	}
</style>
