function Drag2(box){
	Drag.call(this,box);
}
//继承方法
for(var i in Drag.prototype){
	Drag2.prototype[i] = Drag.prototype[i];
}
//重写mMove。需要带边框
Drag2.prototype.mMove = function(e){
	//实时获取位置
	this.nowX = e.clientX;
	this.nowY = e.clientY;
	//差值
	this.chaX = this.nowX - this.mouseX;
	this.chaY = this.nowY - this.mouseY;
	//终点位置
	this.endPosX = this.boxX + this.chaX;
	this.endPosY = this.boxY + this.chaY;
	//判断边界
	if(this.endPosX < 0){
		this.endPosX = 0;
	}else if(this.endPosX > window.innerWidth - this.box.offsetWidth){
		this.endPosX = window.innerWidth - this.box.offsetWidth;
	}
	if(this.endPosY < 0){
		this.endPosY = 0;
	}else if(this.endPosY > window.innerHeight - this.box.offsetHeight){
		this.endPosY = window.innerHeight - this.box.offsetHeight;
	}
	//赋值
	this.box.style.left = this.endPosX + "px";
	this.box.style.top = this.endPosY + "px";
}


