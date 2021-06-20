var box = document.querySelector('.box');
    var progress = document.querySelector('.progress');
    var x = 0; // 鼠标的偏移量
    var x1 = 0;  // offsetX
    var x2 = 0;  // 进度条距离浏览器可视区域的左边距离

    progress.onmousedown = function(evt) {
      var event = evt || window.event;
      x1 = event.offsetX;
      x2 = progress.offsetLeft;
      // offsetLeft 相对于 offsetParent

      x = event.clientX - x1 - x2;
      if(x < 0) { x = 0}

      window.onmousemove = function(evt) {
        var event = evt || window.event;
        x = event.clientX - x1 - x2;
        if(x > 268) {
          x = 268;
        }

        progress.style.width = x + 'px';

      }
    }

    window.onmouseup = function() {
      window.onmousemove = null;  // mousemove事件 解绑
      if(x >= 268) {
        alert('解锁成功!')
      } else {
        progress.style.width = 0;
        progress.style.transition = 'width .3s';
      }
    }