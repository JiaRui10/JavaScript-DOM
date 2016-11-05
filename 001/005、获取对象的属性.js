// 得到需要的元素之后，就可以设法获取它的各个属性。
// getAttribute()只能通过元素节点对象调用
var paras = document.getElementsByTagName("p");
for (var i=0;i<paras.length;i++) {
	var title_text = paras[i].getAttribute("title");
	if (title_text) alert(title_text);
}