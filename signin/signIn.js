var sliderButton = document.getElementById('sliderButton');
var slider = document.getElementById('slider');
var isDragging = false;
var startPosition = 0;
var endPosition = 0;

sliderButton.addEventListener('mousedown', startDragging);
sliderButton.addEventListener('touchstart', startDragging);

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

document.addEventListener('mouseup', stopDragging);
// 滑块的人机验证
document.addEventListener('touchend', stopDragging);

function startDragging(e) {
	isDragging = true;
	startPosition = getPositionX(e);
}

function drag(e) {
	if (!isDragging) return;

	endPosition = getPositionX(e);
	var distance = endPosition - startPosition;

	if (distance >= slider.offsetWidth - sliderButton.offsetWidth) {
		distance = slider.offsetWidth - sliderButton.offsetWidth;
		// 验证通过的操作
		console.log('验证通过');
		// 可以在这里执行其他操作，例如显示验证通过的提示信息，提交表单等
	}

	if (distance <= 0) {
		distance = 0;
	}

	sliderButton.style.left = distance + 'px';
}

function stopDragging() {
	isDragging = false;
}

function getPositionX(e) {
	if (e.type.includes('mouse')) {
		return e.pageX;
	} else if (e.type.includes('touch')) {
		return e.touches[0].clientX;
	}
}