<template>
	<view class="chat">
		<view class="title">
			{{title}}
		</view>
		<view class="chat-list">
			<view :class="[{left: item.name==title},{right: item.name!=title}]" v-for="(item, index) in lists" :key="index">
				<image :src="item.avatar" mode="widthFix"></image>
				<text>{{item.text}}</text>
			</view>
			<!-- <view class="right" v-for="(item, i) in rights" :key="i">
				<image :src="title=='奥特曼'?'../../static/img/cat.png':'../../static/img/automan.jpg'" mode="widthFix"></image>
				<text>{{item}}</text>
			</view> -->
		</view>
		
		<view class="chat-send">
			<textarea value="" placeholder="请输入聊天内容" v-model="text" />
			<view class="send" @click="send">
				发送
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				text: '',
				lists: [
					{
						name: '机器猫',
						text: '你好',
						avatar: '../../static/img/cat.png'
					},
					{
						name: '奥特曼',
						text: '很好',
						avatar: '../../static/img/automan.jpg'
					}
				],
				message: ''
			}
		},
		watch: {
			'message': function(val,oldVal) {
				console.log(123,val.name,oldVal.name)
				if(val.name==this.title && val.name!=oldVal.name) {
					console.log(val.name)
					this.lists.push(val)
				}
			}
		},
		onLoad(options) {
			uni.connectSocket({
			  url: 'ws://echo.websocket.org'
			});
			uni.onSocketOpen(function (res) {
			  console.log('WebSocket连接已打开！');
			});
			uni.onSocketError(function (res) {
			  console.log('WebSocket连接打开失败，请检查！');
			});
			
			uni.onSocketMessage(function (res) {
			  console.log('收到服务器内容：' + res.data);
			});
		// 	setInterval(()=> {
		// 		console.log(uni.getStorageSync('message').name)
		// 		this.message=uni.getStorageSync('message')
		// 	}, 2000) 
		
		// 	if(options.name=='cat') {
		// 		this.title='机器猫'
				
		// 	}else if(options.name=='automan') {
		// 		this.title='奥特曼'
		// 	}
		},
		methods: {
			send() {
				uni.sendSocketMessage({
					data: this.text,
					success: function(res) {
						console.log(res)
					}
				})
				// this.lists.push({
				// 	name: this.title=='机器猫'?'奥特曼':'机器猫',
				// 	text: this.text,
				// 	avatar: this.title=='机器猫'?'../../static/img/automan.jpg':'../../static/img/cat.png',
				// })
				// var obj={
				// 	name: this.title=='机器猫'?'奥特曼':'机器猫',
				// 	text: this.text,
				// 	avatar: this.title=='机器猫'?'../../static/img/automan.jpg':'../../static/img/cat.png'
				// }
				// uni.setStorageSync('message', obj);
				// this.text=""
			}
		}
	}
</script>

<style>
.title {
	height: 70rpx;
	line-height: 70rpx;
	text-align: center;
}
.chat-send textarea {
	float: left;
	width: 80%;
	height: 70rpx;
	border: 2rpx solid #ccc;
	padding: 10rpx;
	color: #666;
	font-size: 24rpx;
	box-sizing: border-box;
}
.send {
	float: right;
	width: 16%;
	height: 70rpx;
	line-height: 70rpx;
	background-color: #82ED6B;
	text-align: center;
	border-radius: 10rpx;
	font-size: 28rpx;
	color: #fff;
}
.chat-send {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 15rpx 20rpx;
	height: 100rpx;
	box-sizing: border-box;
}
.left {
	float: left;
	width: 100%;
	margin-bottom: 80rpx;
}
.left text::before {
	position: absolute;
	left: -20rpx;
	content: "";
	display: block;
	width: 0;
	height: 0;
	border-top: 10rpx solid transparent;
	border-right: 20rpx solid #fff;
	border-bottom: 10rpx solid transparent;
	z-index: 99;
}
.left text::after {
	position: absolute;
	top: 8rpx;
	left: -26rpx;
	content: "";
	display: block;
	width: 0;
	height: 0;
	border-top: 13rpx solid transparent;
	border-right: 26rpx solid #ccc;
	border-bottom: 13rpx solid transparent;
	z-index: 9;
}
.right text::before {
	position: absolute;
	top: 8rpx;
	right: -26rpx;
	content: "";
	display: block;
	width: 0;
	height: 0;
	border-top: 13rpx solid transparent;
	border-left: 26rpx solid #82ED6B;
	border-bottom: 13rpx solid transparent;
	z-index: 9;
}
.left image {
	float: left;
	margin-right: 30rpx;
	width: 80rpx;
	height: 80rpx;
	border-radius: 15rpx;
}
.left text {
	position: relative;
	display: inline-block;
	margin-top: 10rpx;
	padding: 10rpx 20rpx;
	background-color: #fff;
	border: 2rpx solid #ccc;
	color: #666;
	font-size: 28rpx;
	border-radius: 15rpx;
}
.right {
	float: right;
	width: 100%;
	margin-bottom: 80rpx;
}
.right image {
	float: right;
	width: 80rpx;
	height: 80rpx;
	border-radius: 15rpx;
}
.right text {
	position: relative;
	display: inline-block;
	margin-top: 10rpx;
	float: right;
	margin-right: 30rpx;
	background-color: #82ED6B;
	border: 2rpx solid #82ED6B;
	color: #666;
	padding: 10rpx 20rpx;
	font-size: 28rpx;
	border-radius: 15rpx;
}
.chat-list {
	position: fixed;
	top: 70rpx;
	bottom: 100rpx;
	left: 0;
	right: 0;
	overflow: auto;
	padding: 30rpx 40rpx;
	background: #F6F6F6;
	box-sizing: border-box;
}
</style>
