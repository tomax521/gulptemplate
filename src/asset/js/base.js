import $ from 'jquery';

$(document).ready(function(){
	console.log('work');



	$('.btnLang').bind( "click", function() {
		chLang($(this).attr('data-lang'));
	});
});





/**
 * ========================================
 *
 * chLang
 * ----------------------------------------
 *
 */
 
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