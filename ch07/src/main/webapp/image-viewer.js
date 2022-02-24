/*var imageViewer = {
	init:function(){
		
	}
	
	var images = [ {
		name : "국화",
		file : "Chrysanthemum.jpg"
	}, {
		name : "사막",
		file : "Desert.jpg"
	}, {
		name : "수국",
		file : "Hydrangeas.jpg"
	}, {
		name : "해파리",
		file : "Jellyfish.jpg"
	}, {
		name : "코알라",
		file : "Koala.jpg"
	}, {
		name : "등대",
		file : "Lighthouse.jpg"
	}, {
		name : "팽귄",
		file : "Penguins.jpg"
	}, {
		name : "튤립",
		file : "Tulips.jpg"
	} ];

	var changeImage = function() {
		var index = Math.floor(Math.random() * images.length);
		$(".image-viewer img")
		.attr({
			alt : images[index].name,
			src : 'images/' + images[index].file
		}).click(function(){
			changeImage();/*1.이미지를 클릭했을 때도 변경되게
		})
	}
	
	$(function() {
		$('#btn-change').click(changeImage);
		changeImage();
	});
	

	var toggle = false;
	$(function(){
		$('#btn-slideshow').click(function(){
			toggle = !toggle;
			$(this).text(toggle? '슬라이드쇼 중지' : '슬라이드쇼 시작' );
			if(toggle){
				//반복재개
				interval = setInterval(changeImage,3000);
				toggle = true;
			}else{
				//반복 중단
				clearInterval(interval);
				toggle = false;
			}
		});
	})
}
*/

/*
var images = [ {
		name : "국화",
		file : "Chrysanthemum.jpg"
	}, {
		name : "사막",
		file : "Desert.jpg"
	}, {
		name : "수국",
		file : "Hydrangeas.jpg"
	}, {
		name : "해파리",
		file : "Jellyfish.jpg"
	}, {
		name : "코알라",
		file : "Koala.jpg"
	}, {
		name : "등대",
		file : "Lighthouse.jpg"
	}, {
		name : "팽귄",
		file : "Penguins.jpg"
	}, {
		name : "튤립",
		file : "Tulips.jpg"
	} ];

	var changeImage = function() {
		var index = Math.floor(Math.random() * images.length);
		$(".image-viewer img")
		.attr({
			alt : images[index].name,
			src : 'images/' + images[index].file
		}).click(function(){
			changeImage();/*1.이미지를 클릭했을 때도 변경되게
		})
	}
	
	$(function() {
		$('#btn-change').click(changeImage);
		changeImage();
	});
	

	var toggle = false;
	$(function(){
		$('#btn-slideshow').click(function(){
			toggle = !toggle;
			$(this).text(toggle? '슬라이드쇼 중지' : '슬라이드쇼 시작' );
			if(toggle){
				//반복재개
				interval = setInterval(changeImage,3000);
				toggle = true;
			}else{
				//반복 중단
				clearInterval(interval);
				toggle = false;
			}
		});
	})
*/

var imageViewer ={
	init: function(){
		$(function(){
			$("#btn-change").click(this._changeImage.bind(this));
		})
	}
}