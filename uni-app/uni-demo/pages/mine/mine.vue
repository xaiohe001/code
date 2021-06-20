<template>
	<view class="chat">
		<view class="chat-list" @click="chat('cat')">
			<image src="../../static/img/cat.png" mode=""></image>
			<text>cat</text>
			<view class="message">
				5
			</view>
		</view>
		<view class="chat-list" @click="chat('automan')">
			<image src="../../static/img/cat.png" mode=""></image>
			<text>automan</text>
			<view class="message">
				2
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			chat(e) {
				uni.navigateTo({
					url: '../chat/chat?name='+e
				})
			}
		}
	}
</script>

<style>
	.chat-list {
		height: 120rpx;
		line-height: 120rpx;
		padding: 0 30rpx;
		color: #333;
		font-size: 28rpx;
		background: #eee;
	}
	.chat-list image {
		float: left;
		width: 80rpx;
		height: 80rpx;
		margin-top: 20rpx;
		border-radius: 50%;
	}
	.chat-list text {
		float: left;
		display: block;
		margin-left: 20rpx;
	}
	.message {
		float: right;
		color: #fff;
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx !important;
		margin-top: 40rpx;
		border-radius: 50%;
		background: red;
		text-align: center;
		font-size: 24rpx;
	}
</style>
