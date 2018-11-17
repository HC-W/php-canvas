function Drag(box) {
	var _this = this;
	this.box = box;
	this.box.onmousedown = function(e) {
		_this.mDown(e);
	}
	document.onmouseup = function() {
		_this.mUp();
	}
}

Drag.prototype.mDown = function(e) {
	var _this = this;
	//获取值
	//鼠标的初始位置
	this.boxX = this.box.offsetLeft;
	this.boxY = this.box.offsetTop;
	//鼠标按下的位置
	this.mouseX = e.clientX;
	this.mouseY = e.clientY;
	//鼠标移动
	document.onmousemove = function(e) {
		_this.mMove(e);
	}
}

Drag.prototype.mMove = function(e) {
	//获取鼠标实时位置
	this.nowX = e.clientX;
	this.nowY = e.clientY;
	//计算移动偏移量(偏移量)
	this.chaX = this.nowX - this.mouseX;
	this.chaY = this.nowY - this.mouseY;
	//赋值给块，让其移动
	this.box.style.left = this.chaX + this.boxX + "px";
	this.box.style.top = this.chaY + this.boxY + "px";
}

Drag.prototype.mUp = function() {
	//鼠标抬起，取消move事件
	document.onmousemove = false;
}