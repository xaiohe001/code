// 轮播图片外面的容器
var imgList = document.querySelector('.img-list');
// 获取所有的图片
var imgs = document.querySelectorAll('.img-list img'); 
var imgsLen = imgs.length;  // 图片的个数
var currentIndex = 0; // 当前显示图片的索引
var imgWidth = imgs[0].clientWidth + 2; // clientWidth(content+padding,不包含border)
// 拷贝第一个图片放在最后面,是为了无缝切换
var newImage = imgs[0].cloneNode(true);
imgList.appendChild(newImage);

imgList.style.width = imgWidth * (imgsLen + 1) + 'px';

// setInterval的缺陷
// 它本身有时间误差: 4 - 16 ms
// 使用setInterval函数的页面在 视口最小化时,会继续运行,有时会造成紊乱

// 动画结束时触发
imgList.ontransitionend = function() {
  if(currentIndex === imgsLen) {
    currentIndex = 0;
    imgList.classList.remove('tran');
    imgList.style.transform = 'translateX(-0)';
  }
  autoPlay();
}

function toggle() {
  currentIndex++;
  imgList.classList.add('tran');
  imgList.style.transform = 'translateX(-'+ currentIndex * imgWidth +'px)';
}

function autoPlay() {
  setTimeout(function(){
    toggle()
  }, 3000)
}

autoPlay();