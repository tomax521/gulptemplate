import $ from 'jquery';
var debug = true;

$(document).ready(function(){
	$('.btnLang').bind( "click", function() {
		chLang($(this).attr('data-lang'));
	});

	$('a, button').bind('click',function(){
		if($(this).data('gacat') != undefined || $(this).data('gacat') != null){
			var GACat = $(this).data('gacat');
			var GADes = $(this).data('gades');
			var GALang = $(this).data('galang');
			ga('send','event', GACat, GADes, GALang);
			var message = 'GA event sent to'+ GACat +', Event Details :'+ GADes;
			cosole(message);
		}
	});
});

// Change Lang
 
function chLang(lang) {
	var currentPath=location.href.toString();
	var switchTc='/tc/';
	var switchEn='/en/';
	lang = '/'+lang+'/';

	switch (lang){
		case '/en/':
			currentPath=currentPath.replace(switchTc, switchEn);
			break;
		case '/tc/':
			currentPath=currentPath.replace(switchEn, switchTc);
			break;
		default:
	}

	document.location=currentPath;
}

// Console.log in debug mode
function cosole(event){
	if(debug == true){
		console.log(event);
	}
}

// floating header on scroll up

var pageYOffset = 0;
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   var header = document.getElementById("header");
   if (st > pageYOffset){
       // downscroll code
      header.style.top = 0+'px';
   } else {
      // upscroll code
      header.style.top = st+'px';
   }
   pageYOffset = st;
}, false);