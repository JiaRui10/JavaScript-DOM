// 1、该方法返回一个【对象数组】。每个对象分别对应着文档里有着给定标签的一个元素
var items = document.getElementsByTagName("li");
for (var i=0;i < items.length;i++) {
    alert(typeof items[i]);
}

//2、也可以使用通配符，来知道某份文档里总共有多少个元素节点。alert(document.getElementsByTagName(*).length);

// 3、如果想知道id属性值是purchase的元素包含着多少个列表项，必须通过一个具体的对象去调用这个方法
// var shopping = document.getElementById("purchases");
// var items = shopping.getElementsByTagName("*");

