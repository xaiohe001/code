<template>
	<view>
		<input type="number" value="" />
		<button type="default" @click="pay">支付</button>
		<passkeyborad :show="show"></passkeyborad>
	</view>
</template>

<script>
	import passkeyborad from '@/components/yzc-paykeyboard/yzc-paykeyboard.vue'
	export default {
		components: {
			passkeyborad
		},
		data() {
			return {
				show: false
			}
		},
		methods: {
			pay() {
				this.show=true
			}
		}
	}
</script>

<style>
input {
	width: 80%;
	height: 50rpx;
	line-height: 50rpx;
	border: 2rpx solid #eee;
	margin: 20rpx auto;
}
</style>
