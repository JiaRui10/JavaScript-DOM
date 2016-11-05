// 设置title属性，这个属性原先并不存在。
// 这说明setAttribute实际上完成了两项操作：先创建属性，然后设置值。
// 如果本身就有这个属性，则属性的值会被覆盖掉。
var shopping = document.getElementById("purchases");
shopping.setAttribute("title" , "a list of goods");