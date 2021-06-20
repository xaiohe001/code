<template>
	<view class="container">
		<view class="header">
			<image src="https://cube.elemecdn.com/3/e7/6cb4b0a5c14dacb7cb8c62c2193ecpng.png?x-oss-process=image/format,webp/resize,w_750" mode="widthFix" class="bg1"></image>
			<image src="https://cube.elemecdn.com/5/0b/73fd1be54a4874474fadd0aadf147png.png?x-oss-process=image/format,webp/resize,w_150" mode="widthFix" class="logo"></image>
			<!-- <image src="" mode="widthFix" class="back"></image> -->
		</view>
		<view class="shop-message">
			<text class="shop-name">{{shops.name}}</text>
			<view class="shop-intro">
				<text>评价4.5</text>
				<text>月售1047单</text>
				<text>蜂鸟快送约30分钟</text>
			</view>
			<view class="shop-card">
				<text>￥6</text>
				<view class="shop-limit">
					<image style="width: 30rpx; height: 30rpx;" src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34" mode="widthFix"></image>
					<text>无门槛</text>
				</view>
				<text>领取</text>
			</view>
			<view class="tag-list">
				<text>55减1</text>
				<text>配送费优惠</text>
			</view>
			<text class="ad">公告：欢迎光临方中山胡辣汤，如您有任何的问题或者建议请及时与我们联系，我们将竭诚为您服务。</text>
		</view>
		<view class="tab">
			<view :class="['tab-title',{current: hasTitle}]">
				<text :class="{'active':index==num}" v-for="(tab, index) in tabs" :key="index" @click="change(index)">{{tab}}</text>
			</view>
			<view class="tab-content">
				<view class="order" v-if="num==0">
					<view class="recommend">
						<image class="order-banner" src="https://cube.elemecdn.com/0/5d/6526f2659d0d76277a30297a1bb47png.png?x-oss-process=image/format,webp/resize,w_686" mode="widthFix"></image>
						<text class="rec-title">商家推荐</text>
						<scroll-view scroll-x="true" class="scroll-recommend">
							<view style="display: flex;">
								<view class="recommend-item" v-for="(item, index) in recommends" :key="index">
									<image :src="item.image_path.slice(-3)=='png'?'https://cube.elemecdn.com/'+item.image_path.slice(0,1)+'/'+item.image_path.slice(1,3)+'/'+item.image_path.slice(3)+'.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed':'https://cube.elemecdn.com/'+item.image_path.slice(0,1)+'/'+item.image_path.slice(1,3)+'/'+item.image_path.slice(3)+'.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed'" mode="widthFix"></image>
									<text>{{item.name}}</text>
									<text>{{item.tips}}</text>
									<text>￥{{item.origin_price}}</text>
								</view>
							</view>
							
						</scroll-view>
					</view>
					<view class="goods-lists">
						
						<uni-popup ref="popup" type="bottom" background-color="#fff">
							<view class="select-items">
								<view class="header-pop">
									<text>已选商品</text>
									<text @click="clear">清空</text>
								</view>
								<scroll-view scroll-y="true" style="max-height: 660rpx;">
									<view class="items-list" v-for="(item,index) in selectGoods" :key="index">
										<text>{{item.name}}</text>
										<view class="items-price">
											<text style="color: rgb(255, 83, 57)">￥{{item.price}}</text>
											<view class="mount" style="margin-left: 40rpx;">
												<view class="minus">
													-
												</view>
												<view class="mount-text">
													{{item.num}}
												</view>
												<view class="plus">
													+
												</view>
											</view>
										</view>
									</view>
								</scroll-view>
							</view>
						</uni-popup>
						<view :class="['ball',{end: scale}]" :style="{top: top +'px'}"></view>
						<scroll-view scroll-y="true" :class="['left',{fixed: hasItem}]">
							<view style="position: relative;" :class="['sort-list',{select: index==selectNum}]" v-for="(item, index) in menus" :key="index" @click="checked(index)">{{item.name}}<text v-show="item.num>0" class="badge">{{item.num}}</text></view>
						</scroll-view>
						<view class="new-left" style="width: 170rpx; flex: 0 0 170rpx;" v-if="hasItem"></view>
						<scroll-view scroll-y="true" class="right">
							<view v-for="(item, index) in menus" :key="index">
								<view class="sort-title">{{item.name}}<text style="display: inline-block; margin-left: 10rpx; font-size: 24rpx; color: #999;">{{item.description}}</text></view>
								<view class="sort-goods" v-for="(list, i) in item.foods" :key="i" style="position: relative;">
									<image :src="list.image_path | filterImg" mode="widthFix"></image>
									<view class="sort-text">
										<text>{{list.name}}</text>
										<text>{{list.description | filterText}}</text>
										<text>月售</text>
										<text>￥{{list.origin_price}}</text>
									</view>
									<view class="mount" style="position: absolute; bottom: 0; right: 0;">
										<view class="minus" @click="reduce(index, item.num, i, list.num, list.origin_price)" v-if="list.num>0">
											-
										</view>
										<view class="mount-text" v-if="list.num>0">
											{{list.num}}
										</view>
										<view class="plus" @touchstart="getTop" @touchend="add(index, item.num, i, list.num, list.origin_price)" >
											+
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
					<view class="cart">
						<view :class="['cart-icon', {blue: show, animate: scale}]">
							<image v-if="!show" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjNUY1RjYzIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiNFQkVFRjMiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4wNSIvPjwvZz48cGF0aCBzdHJva2U9IiM1RjVGNjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNOS4zNzQgMTguNzIyUzcuODY4IDExLjI4MyA3LjMyMyA4LjcxQzYuNzc4IDYuMTM2IDUuODYgNS4zMyAzLjk3OCA0LjUyIDIuMDk2IDMuNzEzLjM2NyAyLjI4Ni4zNjcgMi4yODYiLz48Y2lyY2xlIGN4PSI0NiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjNUY1RjYzIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI1MSIgcj0iNCIgZmlsbD0iIzVGNUY2MyIvPjwvZz48L3N2Zz4=" mode="widthFix"></image>
							<image @click="open" v-else src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==" mode="widthFix"></image>
						</view>
						<view class="cart-rig">
							<view class="cart-total">
								<text v-if="total==0">未选购商品</text>
								<text v-else style="color: #fff; font-size: 40rpx;">￥{{total}}</text>
								<text>另需配送费0.5元</text>
							</view>
							<view class="start-price" v-if="(startPrice-total)>0">
								￥{{startPrice-total}}起送
							</view>
							<view class="pay" v-else @click="pay">
								去结算
							</view>
						</view>
					</view>
				</view>
				<view class="discuss" v-if="num==1">
					<Rating />
				</view>
				<view class="saler" v-if="num==2">
					商家
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Rating from '../../components/Rating/Rating'
	import shops from '../../api/shop'
	export default {
		data() {
			return {
				total: 0,
				scrollView: 'index0',
				selectNum: 0,
				hasTitle: false,
				hasItem: false,
				num: 0,
				tabs: ['点餐','评价','商家'],
				contents: [1,2,3],
				lists: [],
				recommends: [],
				shops: null,
				menus: [],
				lengths: [],
				newArr: [],
				show: false,
				startPrice: 0,
				scale: false,
				top: -100,
				selectGoods: []
			}
		},
		components: {
			Rating
		},
		onLoad(options) {
			console.log(options.id)
			this.startPrice=options.price
			this.lists=shops[options.id-1]
			console.log(this.lists)
			this.recommends=this.lists.recommend[0].items
			this.shops=this.lists.rst
			this.menus=this.lists.menu
			console.log(999,this.menus)
			
			this.menus.map(item=> {
				this.$set(item, 'num', 0)  
			})
			
			for(var i=0; i<this.menus.length; i++) {
				this.menus[i].foods.map(item=>
					this.$set(item, 'num', 0)
				)
			}
			
			
			console.log(456,this.menus)
			// 获取当前列表每一个分类的高度
			for(var i=0; i<this.menus.length; i++) {
				console.log(i, this.menus[i].foods.length*110+19)
				this.lengths.push(this.menus[i].foods.length*110+19)
			}
			// [679, 349, 349, 349, 679, 239, 239, 679]
			// [650, 679+650, 679+349+650, 679+349+349+650,....]
			
			// [679, 349, 349, 349, 679, 239, 239, 679].reduce(function(accumulator, currentValue, currentIndex, array){
			// 	console.log(99888,accumulator,currentValue)
			//   return accumulator + currentValue;
			// },650);
			
			
			
			console.log(1111,this.lengths)
			var arr=[]
			// [679, 349, 349, 349, 679, 239, 239, 679]
			for(var i=0; i<this.lengths.length; i++) {
				var str=650
				for(var j=0; j<i; j++) {
					str+=this.lengths[j]
				}
				arr.push(str)
			}
			console.log(478,arr)
			this.newArr=arr
		},
		filters:{
			filterText(val) {
				return val.replace('\n','')
			},
			filterImg(val) {
				return val.slice(-3)=='png'?'https://cube.elemecdn.com/'+val.slice(0,1)+'/'+val.slice(1,3)+'/'+val.slice(3)+'.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed':'https://cube.elemecdn.com/'+val.slice(0,1)+'/'+val.slice(1,3)+'/'+val.slice(3)+'.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed'
			}
		},
		onPageScroll(e) { //nvue暂不支持滚动监听，可用bindingx代替
		    console.log("滚动距离为：" + e.scrollTop);
			if(e.scrollTop>=332) {
				this.hasTitle=true
			}else {
				this.hasTitle=false
			}
			if(e.scrollTop>=649) {
				this.hasItem=true
				e.scrollop=649
			}else {
				this.hasItem=false
			}
			
			for(var i=0; i<this.newArr.length; i++) {
				// if(this.newArr[i])
				if(e.scrollTop>=this.newArr[i]) {
					this.selectNum=i
				}
			}
			
		},
		methods: {
			pay() {
				uni.navigateTo({
					url: '../order/order'
				})
			},
			clear() {
				this.selectGoods=[]
				this.show=false
				this.menus.forEach(item=> {
					item.num=0
					item.foods.forEach(list=> {
						list.num=0
					})
				})
				this.$refs.popup.close()
			},
			open(){
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open()
			},
			getTop() {
				this.top=event.changedTouches[0].clientY
				console.log(2222,event.changedTouches[0].clientY)
			},
			reduce(i,num,fi,fnum,price) {
				num--
				fnum--
				this.menus[i].num=num
				this.menus[i].foods[fi].num=fnum
				this.show=this.menus.some(item=> {
					return item.num>0
				})
				this.total-=price
			},
			add(i,num,fi,fnum,price) {
				console.log(111111)
				num++
				fnum++
				this.menus[i].num=num
				this.menus[i].foods[fi].num=fnum
				console.log(this.menus)
				
				this.show=true
				this.total+=parseFloat(price)
				
				this.scale=true
				setTimeout(()=> {
					this.scale=false
					this.top=-100
				},500)
				var arr;
				var newArr=[]
				for(var i=0; i<this.menus.length; i++) {
					arr=this.menus[i].foods.filter(item=> {
						return item.num>0
					})
					newArr.push(...arr)
				}
				this.selectGoods=newArr
			},
			change(i) {
				this.num=i
			},
			checked(i) {
				this.selectNum=i
				console.log(i)
				
				
				var str=0
				for(var j=0; j<i; j++) {
					str+=this.lengths[j]
				}
				console.log(9999,str+650)
				uni.pageScrollTo({
					duration:200,
					scrollTop: str+650
				})
				// console.log(this,window)
				
			}
		}
	}
</script>

<style>
	.select-items {
		padding-bottom: 100rpx;
	}
	.items-price {
		display: flex;
	}
	.items-list {
		display: flex;
		justify-content: space-between;
		margin-left: 20rpx;
		padding-right: 20rpx;
		box-sizing: border-box;
		border-bottom: 2rpx solid #eee;
		align-items: center;
		height: 110rpx;
	}
	.header-pop {
		display: flex;
		height: 80rpx;
		background: #eceff1;
		border-bottom: 2rpx solid #ddd;
		padding: 0 20rpx;
		color: #666;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}
	.header-pop text:nth-of-type(1) {
		font-size: 30rpx;
	}
	.header-pop text:nth-of-type(2) {
		font-size: 28rpx;
	}
	
	.ball {
		position: fixed;
		right: 20rpx;
		width: 40rpx;
		height: 40rpx;
		background-color: rgb(35, 149, 255);
		border-radius: 50%;
		z-index: 999;
	}
	.ball.end {
	  position: fixed;
	  width: 40rpx;
	  height: 40rpx;
	  right: 88%;
	  top: calc(100vh - 100rpx) !important;
	  background-color: rgb(35, 149, 255);
	  border-radius: 50%;
	  z-index: 999;
	  transition: right 0.2s linear, top 0.2s cubic-bezier(.48,0,.94,.28);
	}
	.animate {
		animation: scale .5s linear;
	}
	@keyframes scale{
		0% {
			transform: scale(1);
		}
		25% {
			transform: scale(.8);
		}
		50% {
			transform: scale(1.1);
		}
		75% {
			transform: scale(.8);
		}
		100% {
			transform: scale(1);
		}
	}
	.scale {
		transform: scale(1.1);
		transition: all .5s;
	}
	.pay {
		height: 100rpx;
		line-height: 100rpx;
		width: 220rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: bold;
		color: #fff;
		background-color: #38ca73;
	}
	.blue {
		background: #3190e8 !important;
	}
	.cart-total text {
		display: block;
		color: #999;
		font-size: 24rpx;
	}
	.start-price {
		height: 100rpx;
		line-height: 100rpx;
		width: 220rpx;
		text-align: center;
		color: #fff;
		font-size: 30rpx;
		font-weight: bold;
		background-color: #535356;
	}
	.cart {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		height: 100rpx;
		background-color: rgba(61,61,63,.9);
		z-index: 999;
	}
	.cart-icon {
		flex: 0 0 100rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		overflow: hidden;
		background: radial-gradient(circle,#363636 6.266667vw,#444 0);
		border: 10rpx solid #444;
		padding: 20rpx;
		box-sizing: border-box;
		margin: -20rpx 30rpx 0 20rpx 
	}
	.cart-icon image {
		width: 100%;
	}
	.cart-rig {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.badge {
		display: inline-block;
		position: absolute;
		color: #fff;
		font-size: 24rpx;
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		border-radius: 50%;
		background-image: linear-gradient( -90deg ,#ff7416, #ff3c15 98%);
		text-align: center;
		top: 5rpx;
		right: 25rpx;
	}
	.mount-text {
		color: #333;
		font-size: 30rpx;
		margin: 0 20rpx;
	}
	.mount {
		display: flex;
	}
	.mount .minus {
		width: 40rpx;
		height: 40rpx;
		line-height: 38rpx;
		color: rgb(35, 149, 255);
		font-size: 24rpx;
		border-radius: 50%;
		text-align: center;
		border: 1px solid rgb(35, 149, 255);
		box-sizing: border-box;
	}
	.mount .plus {
		width: 40rpx;
		height: 40rpx;
		line-height: 38rpx;
		color: #FFF;
		font-size: 24rpx;
		border-radius: 50%;
		text-align: center;
		background: rgb(35, 149, 255);
		box-sizing: border-box;
	}
	.select {
		background: #fff !important;
	}
	.fixed {
		position: fixed;
		top: 72rpx;
		left: 0;
		right: 0;
		bottom: 100rpx;
		z-index: 9;
	}
	.minus {
		
	}
	.current {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		background: #fff;
	}
	.sort-text text {
		display: block;
	}
	.sort-text text:nth-of-type(1) {
		width: 340rpx;
		color: #333;
		font-weight: bold;
		font-size: 32rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.sort-text text:nth-of-type(2) {
		width: 340rpx;
		color: #666;
		font-size: 24rpx;
		margin: 5rpx 0;overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.sort-text text:nth-of-type(3) {
		color: #666;
		font-size: 24rpx;
	}
	.sort-text text:nth-of-type(4) {
		margin-top: 28rpx;
		color: rgb(255, 83, 57);
		font-size: 28rpx;
	}
	.sort-goods image{
		flex: 0 0 180rpx;
		width: 180rpx;
		margin-right: 20rpx;
	}
	.sort-text {
		flex: 1
	}
	.sort-goods {
		display: flex;
		margin-top: 40rpx;
	}
	.sort-title {
		color: #333;
		font-size: 28rpx;
		font-weight: bold;
	}
	.goods-lists {
		display: flex;
		margin-top: 30rpx;
	}
	.left {
		flex: 0 0 170rpx;
		width: 170rpx;
		color: #333;
		font-size: 26rpx;
		background-color: #eee;
	}
	.sort-list {
		height: 100rpx;
		line-height: 100rpx;
		padding-left: 20rpx;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.right {
		flex: 1;
		padding: 0 20rpx;
		padding-bottom: 120rpx;
	}
	.recommend-item image {
		width: 260rpx;
	}
	.recommend-item text {
		display: block;
	}
	.recommend-item text:nth-of-type(1) {
		width: 260rpx;
		color: #333;
		font-size: 30rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.recommend-item text:nth-of-type(2) {
		color: #666;
		font-size: 24rpx;
	}
	.recommend-item text:nth-of-type(3) {
		color: rgb(255, 83, 57);
		font-size: 34rpx;
		font-weight: 500;
	}
	.recommend-item {
		margin-right: 20rpx;
	}
	.rec-title {
		display: inline-block;
		color: #333;
		font-size: 32rpx;
		font-weight: bold;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.recommend {
		padding: 0 20rpx;
	}
	.order-banner {
		width: 100%;
		margin-top: 10rpx;
		border-radius: 6rpx;
	}
	.active {
		position: relative;
		font-weight: bold;
	}
	.active::after {
		position: absolute;
		content: "";
		width: 65rpx;
		height: 4rpx;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgb(35, 149, 255);
	}
	.tab {
		margin-top: 40rpx;
	}
	.tab-title {
		display: flex;
		height: 70rpx;
		line-height: 70rpx;
		border-bottom: 2rpx solid #eee;
	}
	.tab-title text {
		flex: 1;
		text-align: center;
		color: #666;
		font-size: 32rpx;
	}
	.tag-list {
		margin-left: 100rpx;
		margin-top: 30rpx;
		margin-bottom: 20rpx;
	}
	.ad {
		display: block;
		width: 580rpx;
		margin: auto;
		color: #999;
		font-size: 24rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.tag-list text {
		display: inline-block;
		font-size: 24rpx;
		color: rgb(255, 75, 51);
		border: 1px solid rgb(255, 201, 193);
		margin-right: 10rpx;
		padding: 0 5rpx;
	}
	.shop-card text {
		display: inline-block;
	}
	.shop-limit {
		margin: 0 60rpx 0 20rpx
	}
.shop-card {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 320rpx;
	height: 60rpx;
	color: #594519;
	font-size: 26rpx;
	background: #ffe578;
	margin: auto;
}
.shop-card::before {
	position: absolute;
	content: "";
	width: 18rpx;
	height: 15rpx;
	background: #fff;
	border-radius: 0 0 50% 50%;
	right: 80rpx;
	top: -9rpx
}
.shop-card::after {
	position: absolute;
	content: "";
	width: 18rpx;
	height: 15rpx;
	background: #fff;
	border-radius: 50% 50% 0 0;
	right: 80rpx;
	bottom: -9rpx
}
.shop-intro {
	display: flex;
	margin: 10rpx 0;
	justify-content: center;
}
.shop-intro text {
	display: inline-block;
	color: #666;
	font-size: 24rpx;;
}
.shop-intro text:nth-of-type(2) {
	margin: 0 15rpx;
}
.shop-message {
	margin-top: 40rpx;
}
.shop-name {
	display: block;
	color: #333;
	font-size: 46rpx;
	font-weight: bold;
	text-align: center;
}
.header {
	position: relative;
	width: 100%;
}
.bg1 {
	width: 100%;
}
.logo {
	display: block;
	position: absolute;
	bottom: -20rpx;
	left: 50%;
	width: 160rpx;
	z-index: 99;
	transform: translateX(-50%);
	border-radius: 6rpx;
}
</style>
