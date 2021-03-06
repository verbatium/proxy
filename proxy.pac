function FindProxyForURL(url, host) {
    //meda must be direct
	if (isMedia(url, host)){
		return "DIRECT";
	}
	if (expectRussia(host)){
		return "PROXY 82.200.233.4:3128";
	}
	return "DIRECT";
}
function isMedia(url, host){
	return shExpMatch(host, "video*.rutube.ru") || 
		shExpMatch(host, "pic.rutube.ru");
}

function expectRussia(host){
	return  shExpMatch(host, "*.1tv.ru") ||
	        shExpMatch(host, "rutube.ru") ||
		shExpMatch(host, "bl.rutube.ru") ||
		shExpMatch(host, "log.rutube.ru") ||
		shExpMatch(host, "2ip.ru") ||
		shExpMatch(host, "playfamily.ru") ||
		shExpMatch(host, 'okko.tv');
}
