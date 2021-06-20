// 获取所有的imgs
var imgs = document.querySelectorAll('img');
var imgsLength = imgs.length; // 把图片的个数 缓存 到 imgsLength 这个变量里
var timer; // 定时器
var currentIndex = 0; // 当前高亮显示的索引值

function autoPlay() {
  timer = setInterval(function(){
    currentIndex++;
    if(currentIndex === imgsLength) { // 当 当前高亮的索引值等于imgsLength的值时,重置为0,从头开始播放
      currentIndex = 0;
    }

    for(var i=0; i< imgsLength; i++) {
      imgs[i].classList.remove('active'); // 先给所有的img的class 去除 active 类名
      if(i === currentIndex) {
        imgs[i].classList.add('active'); // 给当前的img的class 添加 active 类名
      }
    }
  }, 3000)
}

// 函数的调用 让轮播自动播放
autoPlay();