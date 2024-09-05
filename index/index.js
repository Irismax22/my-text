
// logo 数据
var inputTop = ["磕小熊","褚橙","榴莲","山竹","大闸蟹","鲜松茸","椰青","榴莲"] ;
var searchList = document.querySelectorAll("ul.inputTop")




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 一级导航数据
var navMain = ["新品上线","水果","蔬菜鲜花","肉禽蛋品","水产海鲜","熟食面点","粮油调味","乳品烘焙","预制菜肴","休闲零食","酒类","水饮冲调"]

// 导航结束


//  需求分析 图片  小标号 耳朵 切换效果/返图过程
//  轮播图
var index=0;	// 关键变量 下标 标识激活
var liItems = document.querySelectorAll(".banner-item");
var maxIndex = liItems.length;
var timer = null;
function toggle(nextIndex) { //切换到下一张
	liItems[index].classList.remove('active')
	index = nextIndex;
	liItems[index].classList.add('active');
}
// 找到banner盒子 反复调用 
var banner = document.querySelector(".banner")
timer =setInterval(() => toggle((index + 1) % maxIndex), 2000)
// 鼠标划入 暂停
banner.addEventListener('mouseover', () => clearInterval(timer))
// 划出 开始
banner.addEventListener('mouseout', function() {
	timer = setInterval(() => toggle((index + 1) % maxIndex), 1000);
});
// 切换到下一张
//  轮播图结束














