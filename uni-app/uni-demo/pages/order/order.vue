<template>
	<view class="order">
		<uni-popup ref="popup" type="bottom" backgroundColor="#fff">
			<view class="date-time">
				<view class="date-tit">
					选择送达时间
				</view>
				<view class="date-flex">
					<view class="date-tab">
						<view @click="tab(index)" :class="['date-text', {active: num==index}]" v-for="(item,index) in title" :key="index">
							{{item}}
						</view>
					</view>
					<view class="date-list">
						<view class="date-item" v-for="(list, index) in dateList[num]" :key="index" @click="select(list)">
							{{list}}
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<uni-list class="address">
		    <uni-list-item :title="address" link :ellipsis=1 @click="jump()"></uni-list-item>
			<view class="user-info">易烊千玺(先生)  15038066526</view>
		</uni-list>
		<view class="bg-common">
			<uni-list class="send-time">
				<uni-list-item title="送达时间" note="蜂鸟专送" :rightText="text" link  @click="open"></uni-list-item>

				<uni-list-item title="支付方式" rightText="在线支付"></uni-list-item>
			</uni-list>
		</view>
		<view class="bg-common" style="margin-top: 20rpx; padding: 0 30rpx;">
			<view class="shop-name">
				<text style="font-weight: 900; font-size: 36rpx;">茶百道</text>
				<text>(心怡路店)</text>
			</view>
			<uni-list>
				<uni-list-item title="奥利奥蛋糕奶茶-中杯（蛋糕分装）" rightText="$4" note="中杯（蛋糕分装）" thumb="https://cube.elemecdn.com/3/9f/1ea01ef609daa9f7b8047754edbbfjpg.jpg?x-oss-process=image/format,webp/resize,w_72,h_72,m_fixed"></uni-list-item>
				<uni-list-item title="生椰大满贯-中杯" rightText="$4" note="中杯" thumb="https://cube.elemecdn.com/3/9f/1ea01ef609daa9f7b8047754edbbfjpg.jpg?x-oss-process=image/format,webp/resize,w_72,h_72,m_fixed"></uni-list-item>
				<uni-list-item title="配送费" rightText="$1"></uni-list-item>
				<uni-list-item title="店铺满减" rightText="-$2"></uni-list-item>
				<uni-list-item title="红包/抵用券" rightText="$1"></uni-list-item>
				<uni-list-item title="优惠说明" rightText="$52"></uni-list-item>
			</uni-list>
		</view>
		<view class="bg-common" style="margin-top: 20rpx; padding: 0 30rpx;">
			<uni-list>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="select1" style="position: absolute; color: #999; font-size: 24rpx; right: 60rpx; top: 26rpx; z-index: 9;">
						{{array[index]}}
					</view>
					<uni-list-item title="餐具份数" link=""></uni-list-item>
				</picker>
				<uni-list-item title="订单备注" rightText="口味 偏好"></uni-list-item>
				<uni-list-item title="发票信息" rightText="该店不支持线上开票，请电话联系商户"></uni-list-item>
				<uni-list-item title="号码保护" note="号码保护中，将对商家、骑士隐藏您的真实手机号"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: '请选择收货地址',
				array: ['1份', '2份', '3份', '4份'],
				text: '选择时间',
				index: 0,
				num: 0,
				title: ['今日(周五)','明日(周六)'],
				dateList: [
					['13:00','14:00','15:00','16:00','17:00'],
					['8:00','9:00','10:00','11:00','12:00','13:00']
				]
			}
		},
		onLoad(options) {
			console.log(8888,options)
			var opt=JSON.parse(options.name)
			this.address=opt.name?opt.name:this.address
			uni.getLocation({
				type: 'gcj02',
				success: function(res) {
					console.log(res)
				},
				fail: function(err) {
					console.log(err)
				}
			})
		},
		methods: {
			open() {
				this.$refs.popup.open()
			},
			tab(i) {
				this.num=i
			},
			select(txt) {
				this.text=txt
				this.$refs.popup.close()
			},
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			jump() {
				uni.navigateTo({
					url: '../map/map'
				})
			}
		}
	}
</script>

<style>
	.date-tab {
		height: 100vh;
		flex: 0 0 208rpx;
		width: 208rpx;
		background-color: #eee;
		text-align: center;
	}
	.date-list {
		flex: 1;
		padding-left: 40rpx;
	}
	.date-item {
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #eee;
	}
	.date-time {
		height: 588rpx;
	}
	.date-tit {
		height: 88rpx;
		line-height: 88rpx;
		background-color: #eee;
		text-align: center;
	}
	.active {
		background-color: #fff;
	}
	.date-text {
		height: 100rpx;
		line-height: 100rpx;
	}
	.date-flex {
		display: flex;
	}
	.shop-name {
		height: 120rpx;
		line-height: 120rpx;
	}
	.bg-common {
		background-color: #fff;
	}
	.user-info {
		color: #fff;
		font-size: 30rpx
	}
.order {
	height: 100vh;
	padding: 0 20rpx;
	background-image: linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(270deg,#0085ff,#0af);
}
>>> .uni-list-item--hover {
	background: none;
}
.address {
	margin-bottom: 30rpx;
}
>>>.address .uni-list-item__content-title {
	color: #fff;
	font-size: 42rpx;
	font-weight: bold;
}
>>>.send-time .uni-list--border-top {
	background: none;
}
</style>
