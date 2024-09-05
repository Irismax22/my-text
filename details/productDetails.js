// 左侧图片的浏览
var index = 0,
	photoSub = document.querySelector("ul.photo-sub")
	maxIndex = Math.max(photoSub.children.length - 5, 0);


document.querySelector("span.prev").addEventListener("click", function(){
	if(index === 0) return;
	photoSub.style.transform = `translateY(-${--index}00%)`;
});

document.querySelector("span.next").addEventListener("click", function(){
	if(index === maxIndex) return;
	photoSub.style.transform = `translateY(-${++index}00%)`;
});

photoSub.addEventListener("mouseover", function(e){
	if(e.target.tagName !== 'IMG') return;
	document.querySelector('img.big-image').src = e.target.dataset.img;
});


var h1 = document.querySelector(".payNum>h1")
var choise = document.querySelector(".choise")
choise.addEventListener("click", function(e) {
	if(e.target.classList.contains("addNum")) {
		h1.innerText += 1 ;
	}
	if(e.target.classList.contains("lessNum")) {
		if(h1.innetText === 1) return;
			h1.innerText -= 1 ;
		
	}
})


// 数据渲染最后的信息
var other = [
	"../assets/images/details/other1/other (1).jpg",
	"../assets/images/details/other1/other (2).jpg",
	"../assets/images/details/other1/other (3).jpg",
	"../assets/images/details/other1/other (4).jpg",
	"../assets/images/details/other1/other (5).jpg",
	"../assets/images/details/other1/other (6).jpg",
	"../assets/images/details/other1/other (7).jpg",
	"../assets/images/details/other1/other (8).jpg",
	"../assets/images/details/other1/other (9).jpg",
	"../assets/images/details/other1/other (10).jpg",
	"../assets/images/details/other1/other (11).jpg",
	"../assets/images/details/other1/other (12).jpg",
	"../assets/images/details/other1/other (13).jpg",
	"../assets/images/details/other1/other (14).jpg",
	"../assets/images/details/other1/other (15).jpg",
	"../assets/images/details/other1/other (16).jpg",
	"../assets/images/details/other1/other (17).jpg",
	"../assets/images/details/other1/other (18).jpg",
	"../assets/images/details/other1/other (19).jpg",
	"../assets/images/details/other1/other (20).jpg",
	"../assets/images/details/other1/other (21).jpg",
	"../assets/images/details/other1/other (22).jpg",
	"../assets/images/details/other1/other (23).jpg",
	"../assets/images/details/other1/other (24).jpg",
	"../assets/images/details/other1/other (25).jpg",
	"../assets/images/details/other1/other (26).jpg",
]
var otherList = document.querySelector("ul.other")
for(var i = 0; i< other.length; i++) {
	var li = document.createElement("li");
	// console.log(other[i])
	li.innerHTML = `<img src="${other[i]}" alt="图片">`
	otherList.appendChild(li)
}




