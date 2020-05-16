function FindProxyForURL(url, host) {
    //meda must be direct
	if (isMedia(url, host)){
		return "DIRECT";
	}
	if (expectRussia(host)){
		return "PROXY 	195.13.50.212:8080";
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
		shExpMatch(host, 'okko.tv');
}
