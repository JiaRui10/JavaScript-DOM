function getElementsByClassName(node , classname) {
	if (node.getElementsByClassName) {
		//使用现有方法
		return node.getElementsByClassName(classname);
	} else {
		var results = new Array();
		var elems = node.getElementsByTagName("*");
		for (var i=0;i<elems.length;i++) {
			if (elems[i].classname.indexOf(classname) != -1) {
				results[results.length] = elems[i];
			}
		}
		return results;
	}
}
// 第一个node表示DOM树中的搜索起点。第二个classname就是要搜索的类名。
// var shopping = document.getElementById("purchases");
// var sales = getElementsByClassName(shopping , "sale");