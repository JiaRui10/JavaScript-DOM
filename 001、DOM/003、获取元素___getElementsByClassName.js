// 1、通过class属性中的类名来访问元素，也是访问【对象数组】
// document.getElementsByClassName("sale");

// 2、还可以查找那些带有多个类名的元素。要指定多个类名，只要在字符串参数中用空格分隔类名即可。这里类名的顺序不重要。
// alert(document.getElementsByClassName("important sale").length);

// 3、知道指定id的元素中有多少某类名包含"sale"的列表项
var shopping = document.getElementById("purchases");
var sales = shopping.getElementsByClassName("sale");
alert(sales.length);

// 4、注意：getElementsByClassName方法只有较新的浏览器才支持它