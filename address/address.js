var address = [
	{id: 1, type: "公司地址", name: "不化羽", phone: 03101213, province: "省", city: "城市", ares: "区县", street: "街道", more: "详细地址1"},
	{id: 3, type: "公司地址", name: "不化羽", phone: 03101213, province: "山东省", city: "青岛市", ares: "区县", street: "街道", more: "详细地址2"},
	{id: 4, type: "公司地址", name: "不化羽", phone: 03101213, province: "省", city: "城市", ares: "区县", street: "街道", more: "详细地址3"},
	{id: 5, type: "公司地址", name: "不化羽", phone: 03101213, province: "省", city: "城市", ares: "区县", street: "街道", more: "详细地址4"},
]

var userList = document.querySelector(".userList") 

function getLi(address) {
	  var listItem = document.createElement("li"); 	// 创建li元素
		listItem.classList.add("user") 				// 添加样式类名
		userList.dataset.id = address.id; 		// 
	  // 设置li元素的内容
		listItem.innerHTML = `
			类型:  ${address.type}  <br>
			姓名:  ${address.name}  <br>
			电话:  ${address.phone}  <br> 
			省份:  ${address.province}  <br> 
			城市:  ${address.city}  <br> 
			区县:  ${address.ares}  <br> 
			街道:  ${address.street}  <br>
			详细地址: ${address.more} <br>
			<input type="button" value="删除" class="btn-delete">
			<input type="button" value="编辑" class="btn-updata">
			`;
	return listItem
	
}
address.forEach(address => userList.appendChild(getLi(address)));  // 将li元素添加到ul中



// 点击触发新增事件
var btnAdd = document.querySelector(".btn-add")
btnAdd.onclick = function() {
	document.querySelector(".getDddress").classList.add("formActive")
}


// 点击删除
userList.addEventListener("click", function(e) {
	if(e.target.classList.contains('btn-delete')) { //是不是删除按钮 
		if (!confirm('真删除？')) return; 			//提示是否误删 误删结束
		var id = parseInt(e.target.parentNode.dataset.id);		// 找出提前藏好的id
		address.splice(address.findIndex(item => item.id === id), 1); // 更新数据：从address中删除
		e.target.parentNode.remove();	
	}
	if(e.target.classList.contains("btn-updata")) {
		document.querySelector(".getDddress").classList.add("formActive")
		var id = parseInt(e.target.parentNode.dataset.id);		// 找出提前藏好的id
		var target = address.find(item => item.id === id)
		document.forms["edit"]["name"].value = target.name;
		document.forms["edit"]["phone"].value = target.phone;
	}
}) 


// 点击编辑
userList.onclick = function(e) {
	if(e.target.classList.contains('btn-update')) { // 说明你点的是修改按钮冒泡来的
	
		document.querySelector(".getDddress").classList.add("formActive")
			var id = parseInt(e.target.parentNode.dataset.id);
			document.forms["edit"]["id"].value = id;	// 标识进入了修改状态
			// 更新表单，回显要修改的数据
			var target = data.find(item => item.id === id);					
			document.forms["edit"]["name"].value = target.name;	
			
	}	
}

// 点击触发保存事件
var saveData = document.querySelector(".saveData")
saveData.onclick = function () {
	document.querySelector(".getDddress").classList.remove("formActive")
	// var id = parseInt(document.forms["edit"]["id"].value);
	// 				// 搜集表单数据
	// 				var data = {
	// 					id: id || address[data.length - 1].id + 1,
	// 					name: document.forms["edit"]["type"].value.trim(),
	// 					sex: document.forms["edit"]["phone"].value.phone,
	// 					address: document.forms["edit"]["address"].value
	// 				};
	// 				if(id === 0) { 	// 新增
	// 					address.push(data);						// 更新数据
	// 					userList.appendChild(generateLi(data)); 	// 更新页面
	// 				} else { }		// 修改
}

// 是否折叠
var unfold = document.querySelector(".btn-unfold")
var userList = document.querySelector(".userList")
unfold.addEventListener("click", function() {
	if (userList.classList.contains("foldLis")) {
		userList.classList.remove("foldLis")
	} else if (!userList.classList.contains("foldLis")) {
			userList.classList.add("foldLis")
	}
})







