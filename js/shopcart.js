//当整个页面加载完成
/*$(document).ready(function(){
	alert("哦耶");
})*/
$(function(){
	$.ajax({
		type:"get",
		url:"http://localhost:8080/BusinessWeb/View/cart",
		async:true,
		data:"operation=2&user_id=1",
		dataType:"jsonp",
		success:function(data){
			//这个测试ok
			//alert(JSON.stringify(data));
			$.each(data,function(index,element){
				var _obj = data[index];
				console.log(JSON.stringify(_obj))
				$("#table").append("<tr>"+
						"<td>"+
							"<input type=\"checkbox\" name=\"\" id=\"\" value=\"\" />"+
							"<img src=\"images/b1.jpg\" />"+
						"</td>"+
						"<td>"+_obj.product.name+"</td>"+
						"<td>"+_obj.product.desc+"</td>"+
						"<td><del>￥3300.00</del><br/>"+_obj.product.price+"</td>"+
						"<td><input id=\"bottom-1-5-1\" type=\"text\" name=\"productnum\" /></td>"+
						"<td>"+_obj.product.price+"</td>"+
						"<td>"+
							"<a class=\"biao\" href=\"\">移入收藏夹</a><br/>"+
							"<a class=\"biao\" href=\"\">删除</a><br/>"+
							"<a class=\"biao1\" href=\"\">相思宝贝</a>"+
						"</td>"+
					"</tr>")
				
				
			});
			
		}
	});
})
