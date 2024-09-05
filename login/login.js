// var ? = 
function validateInit(target, rules) {
	if (["input", "select"].includes(target.tagName)) {
		throw new Error("没有给定元素或者给定的元素无法进行验证");
	}
	var flag = false;
	var errorInfoSpan = null; // 指向将来可能会创建的错误提示的span
	rules.forEach((rule, i) => {
		target.addEventListener(rule.trigger, function() {
			if (i !== 0 && flag === false) return; // 前面的验证如果没有通过的话，不用验证了
			if ("required" in rule) {
				flag = this.value.length !== 0;
			} else if ("min" in rule || "max" in rule) {
				flag = this.value.length >= rule.min && this.value.length <= rule.max;
			} else if ("reg" in rule) {
				flag = rule.reg.test(this.value);
			} else {}

			if (flag) {
				if (errorInfoSpan) {
					errorInfoSpan.remove();
					errorInfoSpan = null;
				} else {
					// 创建一个标签让他显示错误的信息ruLe.message
					if (errorInfoSpan === null) {
						errorInfoSpan = document.createElement('span');
					}
					errorInfoSpan.innerText = rule.message;
					this.parentNode.insertBefore(errorInfoSpan, this.nextElementsibling);
				}
			} //节点操作语句结束
		}) //forEach 执行函数结束
	})//规则遍历结束
}// 函数结束


validateInit(document.querySelector('.name'), [{
		required: true,
		message: '* 用户名不能为空',
		trigger: 'blur'
	},
	{
		min: 5,
		max: 20,
		message: '用户名长度5-20',
		trigger: 'blur'
	},
	// {reg: ?, message: "用户名中不能包含中文和空格"， trigger: "blur"},
])
validateInit(document.querySelector('.password'), [{
		required: true,
		message: '* 密码不能为空',
		trigger: 'blur'
	},
	{
		min: 5,
		max: 20,
		message: '密码长度5-20',
		trigger: 'blur'
	},
	// {message: "密码至少包含一位数字，大写字母，小写字母，特殊符号"},
])
