/* Author: Htmlhero (http://htmlhero.ru) */

(function(){

	function $(id){
		return document.getElementById(id);
	}

	(function fixHeader(){

		var head = $('head'),
			text = head.innerHTML.split(''),
			result = '';

		for (var i = 0; i < text.length; i++) {
			result += '<span>' + text[i] + '</span>';
		}

		head.innerHTML = result;

	})();

	(function cheatContacts(){

		var decode = function(b){var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="",i,e,n,j,m,f=0;for(b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");f<b.length;){i=h.indexOf(b.charAt(f++));e=h.indexOf(b.charAt(f++));j=h.indexOf(b.charAt(f++));m=h.indexOf(b.charAt(f++));i=i<<2|e>>4;e=(e&15)<<4|j>>2;n=(j&3)<<6|m;d+=String.fromCharCode(i);if(j!=64)d+=String.fromCharCode(e);if(m!=64)d+=String.fromCharCode(n)}return d=function(g){for(var k="",a=0,c=0,l=0,o=0;a<g.length;){c=g.charCodeAt(a); if(c<128){k+=String.fromCharCode(c);a++}else if(c>191&&c<224){l=g.charCodeAt(a+1);k+=String.fromCharCode((c&31)<<6|l&63);a+=2}else{l=g.charCodeAt(a+1);o=g.charCodeAt(a+2);k+=String.fromCharCode((c&15)<<12|(l&63)<<6|o&63);a+=3}}return k}(d)};
		var text = 'PHVsPgo8bGk+ZS1tYWlsOiA8YSBocmVmPSJtYWlsdG86YW5kcmV3QGh0bWxoZXJvLnJ1Ij5hbmRyZXdAaHRtbGhlcm8ucnU8L2E+OzwvbGk+CjxsaT5pY3E6IDMwMC0zOTUtNjUxOzwvbGk+CjxsaT5za3lwZTogPGEgaHJlZj0ic2t5cGU6ZGFyZWRldmlsX2F3YXkiPmRhcmVkZXZpbF9hd2F5PC9hPi48L2xpPgo8L3VsPg==';

		$('contacts').innerHTML = decode(text);

	})();

	(function fixForIpad(){

		if (!navigator.userAgent.match(/iPhone|iPod|iPad/i)) {
			return;
		}

		var labels = document.getElementsByTagName('label');

		for (var i = labels.length; i--;) {
			labels[i].onclick = function(){};
		}

	})();

})();