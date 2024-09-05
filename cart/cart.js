var data = [
	{id: 1, img: "../assets/images/cart/001.jpg", name: "泰国椰青整箱9个装", price: 49, count: 1, maxCount: 10,},
	{id: 2, img: "../assets/images/cart/001.jpg", name: "西鲜记宁夏盐池滩羊羔羊肉片400g", price: 49, count: 1, maxCount: 10,},
	{id: 4, img: "../assets/images/cart/001.jpg", name: "鱼皇后蒲烧鳃鱼段120g", price: 49, count: 1, maxCount: 10,},
	{id: 9, img: "../assets/images/cart/001.jpg", name: "鱼皇后蒲烧鳃鱼段120g", price: 49, count: 1, maxCount: 10,},
];
var list =document.querySelector("ul.list")
// 定义渲染数据的公共函数
function getLi(product) {
	var li = document.createElement('li'); // 新创建的li元素
	li.dataset.id = product.id; // 为后续人的删除和修改 做好铺垫，埋好伏笔！
	li.innerHTML = `
		<input type="checkbox" value="checkbox" class="checkbox" checked>
		<img src ="${product.img}" />
		<span class="name">${product.name}</span>
		<div class="price">￥<span>${product.price}</span>.00</div>
		<div>
			<input type="button" value="-" />
			<span>${product.count}</span>
			<input type="button" value="+" />
		</div>
		<div></div>
		<input type="button" value="删除" class="btn-remove" />
		
	`;				
	return li;
}
// 渲染数据
// 循环数据中的每一项。让ul创建子节点li 并且渲染通过将数据改成模板字符串的数据
			data.forEach(product => list.appendChild(getLi(product)));
// 利用事件冒泡机制，处理删除与修改功能
			list.onclick = function(e) {
					if(e.target.classList.contains('btn-remove')) { // 说明你点的是删除按钮冒泡来的
						if(!confirm('真删?')) return;
						var id = parseInt(e.target.parentNode.dataset.id); 		// 找出提前藏好的id
						data.splice(data.findIndex(item => item.id === id), 1);	// 更新数据：从data中删除
						e.target.parentNode.remove();							// 更新页面：删除对应的li
					}					
			};

var cart = document.querySelector('.all')


// 点击触发新增事件
var getNewData = document.querySelector(".addressManage")
getNewData.onclick = function() {
	document.querySelector(".address").classList.add("formActive")
}

var saveData = document.querySelector(".saveData")
saveData.onclick = function () {
	document.querySelector(".getAddress").classList.remove("formActive")
}
// 给保存绑定点击事件
	document.querySelector('.saveData').onclick = function() {
		
		// 搜集表单数据
		
		
		document.querySelector('.address').classList.remove('formActive'); // 关闭对话框
	};























// // 多选单选功能
// cart.inchange = function(e) {
// 	if(!e.target.classList.contains('checkbox')) return;
// 	// 全选状态发生改变
// 	document.querySelector('.all').checked = cart.querySelector(".chickbox.not(:checked)") === null;
// }
// document.querySelector('.all').onclick = function() {
// 	cart.querySelectorAll('.checkbox').forEach(checkbox => checkbox.checked = this.checked);
// }

















































































































