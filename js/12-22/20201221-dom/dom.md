### dom

### 获取dom
- document.getElementById()
- document.querySelector()
- document.getElementsByClassName() 类数组对象 集合 具有数据的长度和方法
- document.querySelectorAll() 标签  类名
- document.getElementsByTagName() 参数是标签名

### 操作属性
dom.style.xxx = '';
dom.innerText = '';
dom.innerText += '';
dom.innertHTML = '';
dom.className = '';
dom.classList 获取当前dom上的所有选择器
dom.classList.add('active')
dom.classList.remove('active');
dom.id = '';
dom.setAttribute('data-id', '100');
dom.getAttribute('data-id'); '100'


### dom节点

- 类型
    - 元素
    - 文本
    - 注释
    - 空格
- 创建元素和文本
    - document.createElement();
    - document.createTextNode();

- nodeName nodeType nodeValue


### dom的操作方法 
- appendChild  要求必须是node节点
- append 不能解析标签
- insertBefore
- prepend
- replaceWith(param1, param2) param1是替换的节点，param2是 被替换的节点
- remove()




