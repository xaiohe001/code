// 获取所有的imgs
var imgs = document.querySelectorAll('img');
var imgsLength = imgs.length; // 把图片的个数 缓存 到 imgsLength 这个变量里
var dots = document.querySelectorAll('.dot'); // 获取dot
var banner = document.getElementsByClassName('banner')[0];
var pre = document.querySelector('.pre'); // 向左
var next = document.querySelector('.next'); // 向右
var timer; // 定时器
var currentIndex = 0; // 当前高亮显示的索引值

// 自动播放
function autoPlay() {
  timer = setInterval(function(){
    currentIndex++;
    if(currentIndex === imgsLength) { // 当 当前高亮的索引值等于imgsLength的值时,重置为0,从头开始播放
      currentIndex = 0;
    }
    changeActive();
  }, 3000)
}

// 修改样式
function changeActive() {
  for(var i=0; i< imgsLength; i++) {
    if(i === currentIndex) {
      imgs[i].classList.add('active'); // 给当前的img的class 添加 active 类名
      dots[i].classList.add('active'); // 给当前的img的class 添加 active 类名

    } else {
      imgs[i].classList.remove('active'); // 先给所有的img的class 去除 active 类名
      dots[i].classList.remove('active'); // 先给所有的img的class 去除 active 类名
    }
  }
}

banner.onmouseover = function() {
  clearInterval(timer);
}

banner.onmouseout = function() {
  autoPlay();
}

// 点击向左的箭头
pre.onclick = function() {
  if(currentIndex === 0) {
    currentIndex = imgsLength - 1;
  } else {
    currentIndex--;
  }
  changeActive();
}
// 点击向右的按钮
next.onclick = function() {
  if(currentIndex === (imgsLength -1)) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  changeActive();
}

for(var i=0; i<imgsLength; i++) {
  dots[i].setAttribute('data-index', i);
  dots[i].onclick = function() {
    var index = this.getAttribute('data-index');
    currentIndex = parseInt(index);
    changeActive();
  }
}

// 函数立即调用(了解) 获取index的方式二
  // for(var j=0; j<imgsLength; j++) {
  //   // 函数立即调用
  //   (function(j){
  //     dots[j].onclick = function() {
  //       currentIndex = j;
  //       changeActive();
  //     }
  //   })(j)
  // }


// 函数的调用 让轮播自动播放
autoPlay();